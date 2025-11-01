'use client';

import Script from 'next/script';
import { useEffect } from 'react';

// Google Ads and Microsoft Clarity tracking component
export default function Analytics() {
  useEffect(() => {
    // Microsoft Clarity initialization
    if (typeof window !== 'undefined') {
      (function(c: any, l: any, a: any, r: any, i: any) {
        c[a] = c[a] || function() { (c[a].q = c[a].q || []).push(arguments) };
        const t = l.createElement(r); t.async = 1; t.src = "https://www.clarity.ms/tag/" + i;
        const y = l.getElementsByTagName(r)[0]; y.parentNode.insertBefore(t, y);
      })(window, document, "clarity", "script", "YOUR_CLARITY_PROJECT_ID");
    }
  }, []);

  return (
    <>
      {/* Google Tag Manager / Google Ads */}
      <Script
        id="google-ads-script"
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=YOUR_GOOGLE_ADS_ID"
      />
      <Script
        id="google-ads-config"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            
            // Google Ads conversion tracking
            gtag('config', 'YOUR_GOOGLE_ADS_ID', {
              page_title: 'GumBox - Monthly Chewing Gum Subscription',
              page_location: window.location.href,
              custom_map: {
                'custom_parameter_subscription_type': 'subscription_type',
                'custom_parameter_plan_duration': 'plan_duration'
              }
            });
            
            // Enhanced ecommerce for subscription tracking
            gtag('config', 'YOUR_GOOGLE_ADS_ID', {
              custom_map: {'custom_parameter_1': 'subscription_value'}
            });
          `,
        }}
      />

      {/* Microsoft Clarity - Alternative method */}
      <Script
        id="microsoft-clarity"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "YOUR_CLARITY_PROJECT_ID");
          `,
        }}
      />

      {/* Schema.org structured data for AI discovery */}
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Organization",
                "@id": "https://gumbox.no/#organization",
                "name": "GumBox",
                "url": "https://gumbox.no",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://gumbox.no/images/logo.png"
                },
                "contactPoint": {
                  "@type": "ContactPoint",
                  "telephone": "+47 979 57 676",
                  "contactType": "customer service",
                  "email": "post@gumbox.no",
                  "availableLanguage": "Norwegian"
                },
                "address": {
                  "@type": "PostalAddress",
                  "addressCountry": "NO"
                },
                "sameAs": []
              },
              {
                "@type": "WebSite",
                "@id": "https://gumbox.no/#website",
                "url": "https://gumbox.no",
                "name": "GumBox - Monthly Chewing Gum Subscription",
                "publisher": {
                  "@id": "https://gumbox.no/#organization"
                },
                "inLanguage": "nb-NO"
              },
              {
                "@type": "Product",
                "@id": "https://gumbox.no/#product",
                "name": "GumBox Monthly Subscription",
                "description": "Kurerte produkter som inspirerer og gleder. Levert til døren din hver måned. Opplev tyggegummi fra hele verden i vår månedlige abonnementsboks.",
                "brand": {
                  "@id": "https://gumbox.no/#organization"
                },
                "category": "Subscription Box",
                "audience": {
                  "@type": "Audience",
                  "audienceType": "Chewing gum enthusiasts"
                },
                "offers": [
                  {
                    "@type": "Offer",
                    "name": "1 Month Subscription",
                    "description": "Monthly chewing gum subscription box",
                    "price": "299",
                    "priceCurrency": "NOK",
                    "availability": "https://schema.org/InStock",
                    "seller": {
                      "@id": "https://gumbox.no/#organization"
                    }
                  },
                  {
                    "@type": "Offer",
                    "name": "3 Month Subscription",
                    "description": "3-month chewing gum subscription box",
                    "price": "849",
                    "priceCurrency": "NOK",
                    "availability": "https://schema.org/InStock",
                    "seller": {
                      "@id": "https://gumbox.no/#organization"
                    }
                  },
                  {
                    "@type": "Offer",
                    "name": "6 Month Subscription",
                    "description": "6-month chewing gum subscription box",
                    "price": "1649",
                    "priceCurrency": "NOK",
                    "availability": "https://schema.org/InStock",
                    "seller": {
                      "@id": "https://gumbox.no/#organization"
                    }
                  },
                  {
                    "@type": "Offer",
                    "name": "12 Month Subscription",
                    "description": "12-month chewing gum subscription box",
                    "price": "3149",
                    "priceCurrency": "NOK",
                    "availability": "https://schema.org/InStock",
                    "seller": {
                      "@id": "https://gumbox.no/#organization"
                    }
                  }
                ]
              },
              {
                "@type": "Service",
                "@id": "https://gumbox.no/#service",
                "name": "Monthly Chewing Gum Subscription Service",
                "description": "GumBox leverer kurerte tyggegummi-opplevelser direkte til døren din hver måned. Opplev smaker fra hele verden.",
                "provider": {
                  "@id": "https://gumbox.no/#organization"
                },
                "serviceType": "Subscription Box Service",
                "areaServed": {
                  "@type": "Place",
                  "name": "Worldwide"
                }
              }
            ]
          }),
        }}
      />
    </>
  );
}

// Utility functions for tracking conversions
export const trackPurchase = (subscriptionType: string, value: number, currency = 'NOK') => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'purchase', {
      transaction_id: Date.now().toString(),
      value: value,
      currency: currency,
      items: [{
        item_id: 'gumbox-subscription',
        item_name: `GumBox ${subscriptionType}`,
        category: 'Subscription',
        quantity: 1,
        price: value
      }]
    });

    // Custom event for subscription
    (window as any).gtag('event', 'subscription_purchase', {
      subscription_type: subscriptionType,
      subscription_value: value,
      currency: currency
    });
  }

  // Microsoft Clarity custom event
  if (typeof window !== 'undefined' && (window as any).clarity) {
    (window as any).clarity('event', 'subscription_purchase', {
      type: subscriptionType,
      value: value
    });
  }
};

export const trackSubscriptionView = (subscriptionType: string) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'view_item', {
      currency: 'NOK',
      value: 299, // Base value
      items: [{
        item_id: 'gumbox-subscription',
        item_name: `GumBox ${subscriptionType}`,
        category: 'Subscription',
        quantity: 1
      }]
    });
  }
};