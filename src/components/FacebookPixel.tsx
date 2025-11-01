'use client';

import { useEffect } from 'react';
import Script from 'next/script';

const FACEBOOK_PIXEL_ID = process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID || '1234567890123456';

declare global {
  interface Window {
    fbq: (
      command: 'consent' | 'init' | 'track' | 'trackCustom',
      eventNameOrPixelId: string,
      parameters?: Record<string, any>
    ) => void;
    _fbq: typeof window.fbq;
  }
}

export default function FacebookPixel() {
  useEffect(() => {
    // Check if user has given consent for marketing
    const consent = localStorage.getItem('gumbox-cookie-consent');
    if (consent) {
      const consentData = JSON.parse(consent);
      if (consentData.marketing && typeof window !== 'undefined' && window.fbq) {
        window.fbq('consent', 'grant');
      }
    }
  }, []);

  // Don't load Facebook Pixel if user hasn't consented
  const consent = typeof window !== 'undefined' 
    ? localStorage.getItem('gumbox-cookie-consent') 
    : null;
  
  const shouldLoadFBPixel = consent 
    ? JSON.parse(consent).marketing 
    : false;

  if (!shouldLoadFBPixel) {
    return null;
  }

  return (
    <>
      <Script
        id="facebook-pixel"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            
            fbq('init', '${FACEBOOK_PIXEL_ID}');
            fbq('track', 'PageView');
          `,
        }}
      />
      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: 'none' }}
          src={`https://www.facebook.com/tr?id=${FACEBOOK_PIXEL_ID}&ev=PageView&noscript=1`}
          alt=""
        />
      </noscript>
    </>
  );
}

// Utility functions for tracking Facebook events
export const trackFacebookEvent = (
  eventName: string,
  parameters?: Record<string, any>
) => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', eventName, parameters);
  }
};

export const trackFacebookPurchase = (
  value: number,
  currency: string = 'NOK',
  contentIds?: string[]
) => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'Purchase', {
      value: value,
      currency: currency,
      content_ids: contentIds,
      content_type: 'product',
    });
  }
};

export const trackFacebookLead = (contentName?: string) => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'Lead', {
      content_name: contentName,
    });
  }
};

export const trackFacebookSubscribe = (
  value: number,
  currency: string = 'NOK',
  subscriptionType?: string
) => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'Subscribe', {
      value: value,
      currency: currency,
      content_name: subscriptionType,
    });
  }
};

export const trackFacebookAddToCart = (
  value: number,
  currency: string = 'NOK',
  contentName?: string
) => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'AddToCart', {
      value: value,
      currency: currency,
      content_name: contentName,
    });
  }
};

export const trackFacebookInitiateCheckout = (
  value: number,
  currency: string = 'NOK',
  numItems?: number
) => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'InitiateCheckout', {
      value: value,
      currency: currency,
      num_items: numItems,
    });
  }
};