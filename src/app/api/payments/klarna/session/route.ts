import { NextRequest, NextResponse } from 'next/server';

// Environment variables for Klarna (these should be set in .env.local)
const KLARNA_USERNAME = process.env.KLARNA_USERNAME || 'your-klarna-username';
const KLARNA_PASSWORD = process.env.KLARNA_PASSWORD || 'your-klarna-password';
const KLARNA_BASE_URL = process.env.KLARNA_BASE_URL || 'https://api.playground.klarna.com'; // Use playground for testing

interface KlarnaPaymentSession {
  order_amount: number;
  order_tax_amount: number;
  order_lines: Array<{
    type: string;
    reference: string;
    name: string;
    quantity: number;
    unit_price: number;
    tax_rate: number;
    total_amount: number;
    total_tax_amount: number;
  }>;
  purchase_country: string;
  purchase_currency: string;
  locale: string;
  billing_address?: {
    given_name?: string;
    family_name?: string;
    email?: string;
    street_address?: string;
    postal_code?: string;
    city?: string;
    country: string;
  };
  shipping_address?: {
    given_name?: string;
    family_name?: string;
    email?: string;
    street_address?: string;
    postal_code?: string;
    city?: string;
    country: string;
  };
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { orderData, customerData } = body;

    // Prepare Klarna payment session data
    const sessionData: KlarnaPaymentSession = {
      order_amount: orderData.totalAmount * 100, // Convert to øre (Norwegian currency minor unit)
      order_tax_amount: orderData.taxAmount * 100,
      order_lines: [
        {
          type: 'physical',
          reference: 'gumbox-subscription',
          name: `GumBox - ${orderData.subscriptionLength} Måneder`,
          quantity: 1,
          unit_price: orderData.totalAmount * 100,
          tax_rate: 2500, // 25% Norwegian VAT
          total_amount: orderData.totalAmount * 100,
          total_tax_amount: orderData.taxAmount * 100,
        }
      ],
      purchase_country: 'NO',
      purchase_currency: 'NOK',
      locale: 'nb-NO',
      billing_address: {
        given_name: customerData.fullName.split(' ')[0],
        family_name: customerData.fullName.split(' ').slice(1).join(' '),
        email: customerData.email,
        street_address: customerData.address,
        postal_code: customerData.postalCode,
        city: customerData.city,
        country: 'NO'
      },
      shipping_address: {
        given_name: customerData.fullName.split(' ')[0],
        family_name: customerData.fullName.split(' ').slice(1).join(' '),
        email: customerData.email,
        street_address: customerData.address,
        postal_code: customerData.postalCode,
        city: customerData.city,
        country: 'NO'
      }
    };

    // Create authorization header
    const auth = Buffer.from(`${KLARNA_USERNAME}:${KLARNA_PASSWORD}`).toString('base64');

    // Step 1: Create Klarna Payments Session
    const paymentsResponse = await fetch(`${KLARNA_BASE_URL}/payments/v1/sessions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Basic ${auth}`,
      },
      body: JSON.stringify(sessionData),
    });

    if (!paymentsResponse.ok) {
      const errorData = await paymentsResponse.json();
      console.error('Klarna Payments Session Error:', errorData);
      return NextResponse.json(
        { error: 'Failed to create Klarna payment session' },
        { status: 400 }
      );
    }

    const paymentsSession = await paymentsResponse.json();

    // Step 2: Create HPP Session
    const hppSessionData = {
      payment_session_url: `${KLARNA_BASE_URL}/payments/v1/sessions/${paymentsSession.session_id}`,
      merchant_urls: {
        success: `${process.env.NEXT_PUBLIC_BASE_URL}/checkout/success?session_id={session_id}`,
        cancel: `${process.env.NEXT_PUBLIC_BASE_URL}/checkout/cancel`,
        failure: `${process.env.NEXT_PUBLIC_BASE_URL}/checkout/failure`,
      },
      options: {
        place_order_mode: 'CAPTURE_ORDER',
      }
    };

    const hppResponse = await fetch(`${KLARNA_BASE_URL}/hpp/v1/sessions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Basic ${auth}`,
      },
      body: JSON.stringify(hppSessionData),
    });

    if (!hppResponse.ok) {
      const errorData = await hppResponse.json();
      console.error('Klarna HPP Session Error:', errorData);
      return NextResponse.json(
        { error: 'Failed to create Klarna HPP session' },
        { status: 400 }
      );
    }

    const hppSession = await hppResponse.json();

    return NextResponse.json({
      success: true,
      sessionId: paymentsSession.session_id,
      redirectUrl: hppSession.redirect_url,
      distributionUrl: hppSession.distribution_url,
    });

  } catch (error) {
    console.error('Klarna session creation error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}