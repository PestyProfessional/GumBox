import { NextRequest, NextResponse } from 'next/server';

// Environment variables for Vipps (these should be set in .env.local)
const VIPPS_CLIENT_ID = process.env.VIPPS_CLIENT_ID || 'your-vipps-client-id';
const VIPPS_CLIENT_SECRET = process.env.VIPPS_CLIENT_SECRET || 'your-vipps-client-secret';
const VIPPS_SUBSCRIPTION_KEY = process.env.VIPPS_SUBSCRIPTION_KEY || 'your-vipps-subscription-key';
const VIPPS_MERCHANT_SERIAL_NUMBER = process.env.VIPPS_MERCHANT_SERIAL_NUMBER || 'your-merchant-serial';
const VIPPS_BASE_URL = process.env.VIPPS_BASE_URL || 'https://apitest.vipps.no'; // Use test environment

interface VippsPaymentRequest {
  amount: {
    currency: string;
    value: number;
  };
  paymentMethod: {
    type: string;
  };
  customer?: {
    phoneNumber?: string;
    email?: string;
  };
  returnUrl: string;
  userFlow: string;
  paymentDescription: string;
  reference: string;
}

async function getVippsAccessToken(): Promise<string> {
  const tokenResponse = await fetch(`${VIPPS_BASE_URL}/accesstoken/get`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'client_id': VIPPS_CLIENT_ID,
      'client_secret': VIPPS_CLIENT_SECRET,
      'Ocp-Apim-Subscription-Key': VIPPS_SUBSCRIPTION_KEY,
    },
  });

  if (!tokenResponse.ok) {
    throw new Error('Failed to get Vipps access token');
  }

  const tokenData = await tokenResponse.json();
  return tokenData.access_token;
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { orderData, customerData } = body;

    // Get access token first
    const accessToken = await getVippsAccessToken();

    // Generate unique reference
    const reference = `gumbox-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;

    // Prepare Vipps payment request
    const paymentRequest: VippsPaymentRequest = {
      amount: {
        currency: 'NOK',
        value: orderData.totalAmount * 100, // Convert to øre
      },
      paymentMethod: {
        type: 'WALLET',
      },
      customer: {
        email: customerData.email,
      },
      returnUrl: `${process.env.NEXT_PUBLIC_BASE_URL}/checkout/success`,
      userFlow: 'WEB_REDIRECT',
      paymentDescription: `GumBox abonnement - ${orderData.subscriptionLength} måneder`,
      reference: reference,
    };

    // Create Vipps payment
    const paymentResponse = await fetch(`${VIPPS_BASE_URL}/epayment/v1/payments`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accessToken}`,
        'Ocp-Apim-Subscription-Key': VIPPS_SUBSCRIPTION_KEY,
        'Merchant-Serial-Number': VIPPS_MERCHANT_SERIAL_NUMBER,
        'Idempotency-Key': reference,
      },
      body: JSON.stringify(paymentRequest),
    });

    if (!paymentResponse.ok) {
      const errorData = await paymentResponse.json();
      console.error('Vipps Payment Error:', errorData);
      return NextResponse.json(
        { error: 'Failed to create Vipps payment' },
        { status: 400 }
      );
    }

    const paymentData = await paymentResponse.json();

    return NextResponse.json({
      success: true,
      reference: reference,
      redirectUrl: paymentData.redirectUrl,
    });

  } catch (error) {
    console.error('Vipps payment creation error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// Handle Vipps webhooks
export async function PUT(request: NextRequest) {
  try {
    const body = await request.json();
    const { reference } = body;

    // Get access token
    const accessToken = await getVippsAccessToken();

    // Get payment details
    const paymentDetailsResponse = await fetch(
      `${VIPPS_BASE_URL}/epayment/v1/payments/${reference}`,
      {
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Ocp-Apim-Subscription-Key': VIPPS_SUBSCRIPTION_KEY,
          'Merchant-Serial-Number': VIPPS_MERCHANT_SERIAL_NUMBER,
        },
      }
    );

    if (!paymentDetailsResponse.ok) {
      return NextResponse.json(
        { error: 'Failed to get payment details' },
        { status: 400 }
      );
    }

    const paymentDetails = await paymentDetailsResponse.json();

    // Process payment status
    if (paymentDetails.state === 'AUTHORIZED') {
      // Capture the payment
      const captureResponse = await fetch(
        `${VIPPS_BASE_URL}/epayment/v1/payments/${reference}/capture`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${accessToken}`,
            'Ocp-Apim-Subscription-Key': VIPPS_SUBSCRIPTION_KEY,
            'Merchant-Serial-Number': VIPPS_MERCHANT_SERIAL_NUMBER,
            'Idempotency-Key': `capture-${reference}`,
          },
          body: JSON.stringify({
            modificationAmount: {
              currency: 'NOK',
              value: paymentDetails.amount.value,
            },
          }),
        }
      );

      if (captureResponse.ok) {
        // TODO: Update order status in database
        console.log('Payment captured successfully:', reference);
      }
    }

    return NextResponse.json({ success: true });

  } catch (error) {
    console.error('Vipps webhook error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}