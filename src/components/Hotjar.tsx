'use client';

import { useEffect } from 'react';
import Script from 'next/script';

const HOTJAR_ID = process.env.NEXT_PUBLIC_HOTJAR_ID || '1234567';
const HOTJAR_VERSION = process.env.NEXT_PUBLIC_HOTJAR_VERSION || '6';

declare global {
  interface Window {
    hj: (command: string, ...args: any[]) => void;
    _hjSettings: {
      hjid: string;
      hjsv: string;
    };
  }
}

export default function Hotjar() {
  useEffect(() => {
    // Check if user has given consent for analytics
    const consent = localStorage.getItem('gumbox-cookie-consent');
    if (consent) {
      const consentData = JSON.parse(consent);
      if (consentData.analytics && typeof window !== 'undefined' && window.hj) {
        // Hotjar consent is managed through the analytics consent
        window.hj('stateChange', '/consent-granted');
      }
    }
  }, []);

  // Don't load Hotjar if user hasn't consented to analytics
  const consent = typeof window !== 'undefined' 
    ? localStorage.getItem('gumbox-cookie-consent') 
    : null;
  
  const shouldLoadHotjar = consent 
    ? JSON.parse(consent).analytics 
    : false;

  if (!shouldLoadHotjar) {
    return null;
  }

  return (
    <Script
      id="hotjar"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          (function(h,o,t,j,a,r){
            h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
            h._hjSettings={hjid:${HOTJAR_ID},hjsv:${HOTJAR_VERSION}};
            a=o.getElementsByTagName('head')[0];
            r=o.createElement('script');r.async=1;
            r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
            a.appendChild(r);
          })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
        `,
      }}
    />
  );
}

// Utility functions for Hotjar tracking
export const identifyHotjarUser = (userId: string, attributes?: Record<string, any>) => {
  if (typeof window !== 'undefined' && window.hj) {
    window.hj('identify', userId, attributes);
  }
};

export const trackHotjarEvent = (eventName: string) => {
  if (typeof window !== 'undefined' && window.hj) {
    window.hj('event', eventName);
  }
};

export const triggerHotjarPoll = (pollId: string) => {
  if (typeof window !== 'undefined' && window.hj) {
    window.hj('trigger', pollId);
  }
};

export const setHotjarUserAttribute = (key: string, value: string | number | boolean) => {
  if (typeof window !== 'undefined' && window.hj) {
    window.hj('identify', '', { [key]: value });
  }
};