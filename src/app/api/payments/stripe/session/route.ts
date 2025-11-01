import { NextRequest, NextResponse } from 'next/server';

// Environment variables for Stripe (these should be set in .env.local)
const STRIPE_SECRET_KEY = process.env.STRIPE_SECRET_KEY || 'your-stripe-secret-key';

interface StripeLineItem {
  price_data: {
    currency: string;
    product_data: {
      name: string;
      description: string;
    };
    unit_amount: number;
  };
  quantity: number;
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { orderData, customerData } = body;

    // Prepare Stripe session data
    const lineItems: StripeLineItem[] = [
      {
        price_data: {
          currency: 'nok',
          product_data: {
            name: `GumBox - ${orderData.subscriptionLength} Måneder`,
            description: 'Kurerte tyggegummi fra hele verden levert månedlig',
          },
          unit_amount: orderData.totalAmount * 100, // Convert to øre
        },
        quantity: 1,
      }
    ];

    const sessionData = {
      payment_method_types: ['card'],
      line_items: lineItems,
      mode: 'payment',
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/checkout/cancel`,
      customer_email: customerData.email,
      billing_address_collection: 'required',
      shipping_address_collection: {
        allowed_countries: ['NO'],
      },
      metadata: {
        customer_name: customerData.fullName,
        customer_address: customerData.address,
        customer_city: customerData.city,
        customer_postal_code: customerData.postalCode,
        subscription_length: orderData.subscriptionLength.toString(),
      },
    };

    // Create Stripe checkout session
    const stripeResponse = await fetch('https://api.stripe.com/v1/checkout/sessions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': `Bearer ${STRIPE_SECRET_KEY}`,
      },
      body: new URLSearchParams(flattenObject(sessionData)).toString(),
    });

    if (!stripeResponse.ok) {
      const errorData = await stripeResponse.json();
      console.error('Stripe Session Error:', errorData);
      return NextResponse.json(
        { error: 'Failed to create Stripe session' },
        { status: 400 }
      );
    }

    const stripeSession = await stripeResponse.json();

    return NextResponse.json({
      success: true,
      sessionId: stripeSession.id,
      redirectUrl: stripeSession.url,
    });

  } catch (error) {
    console.error('Stripe session creation error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// Helper function to flatten object for URL encoding
function flattenObject(obj: any, prefix = ''): Record<string, string> {
  const flattened: Record<string, string> = {};
  
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      const value = obj[key];
      const newKey = prefix ? `${prefix}[${key}]` : key;
      
      if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
        Object.assign(flattened, flattenObject(value, newKey));
      } else if (Array.isArray(value)) {
        value.forEach((item, index) => {
          if (typeof item === 'object') {
            Object.assign(flattened, flattenObject(item, `${newKey}[${index}]`));
          } else {
            flattened[`${newKey}[${index}]`] = String(item);
          }
        });
      } else {
        flattened[newKey] = String(value);
      }
    }
  }
  
  return flattened;
}