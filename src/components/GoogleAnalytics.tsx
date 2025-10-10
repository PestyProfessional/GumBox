'use client';

import { useEffect } from 'react';
import Script from 'next/script';

const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID || 'G-XXXXXXXXXX';

declare global {
  interface Window {
    gtag: (
      command: 'consent' | 'config' | 'event',
      targetId: string,
      config?: Record<string, any>
    ) => void;
  }
}

export default function GoogleAnalytics() {
  useEffect(() => {
    // Check if user has given consent for analytics
    const consent = localStorage.getItem('gumbox-cookie-consent');
    if (consent) {
      const consentData = JSON.parse(consent);
      if (consentData.analytics && typeof window !== 'undefined' && window.gtag) {
        window.gtag('consent', 'update', {
          analytics_storage: 'granted'
        });
      }
    }
  }, []);

  // Don't load GA scripts if user hasn't consented
  const consent = typeof window !== 'undefined' 
    ? localStorage.getItem('gumbox-cookie-consent') 
    : null;
  
  const shouldLoadGA = consent 
    ? JSON.parse(consent).analytics 
    : false;

  if (!shouldLoadGA) {
    return null;
  }

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            
            // Set default consent mode
            gtag('consent', 'default', {
              analytics_storage: 'denied',
              ad_storage: 'denied'
            });
            
            gtag('config', '${GA_TRACKING_ID}', {
              send_page_view: true,
              anonymize_ip: true,
              respect_dnt: true
            });
          `,
        }}
      />
    </>
  );
}

// Utility functions for tracking events
export const trackEvent = (
  action: string,
  category: string,
  label?: string,
  value?: number
) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

export const trackPurchase = (transactionId: string, value: number, currency: string = 'NOK') => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'purchase', {
      transaction_id: transactionId,
      value: value,
      currency: currency,
    });
  }
};

export const trackSubscription = (subscriptionType: string, value: number) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'subscribe', {
      event_category: 'subscription',
      event_label: subscriptionType,
      value: value,
    });
  }
};