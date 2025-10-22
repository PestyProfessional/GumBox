'use client';

import Script from 'next/script';

interface StructuredDataProps {
  type?: 'homepage' | 'product' | 'checkout' | 'about';
  productData?: {
    name: string;
    price: string;
    currency: string;
    description: string;
    image: string;
  };
}

export default function StructuredData({ type = 'homepage', productData }: StructuredDataProps) {
  // Organization Schema - Always included
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "GumBox",
    "alternateName": ["GumBox Norway", "GumBox AS"],
    "url": "https://gumbox.no",
    "logo": "https://gumbox.no/images/BlaaPerf.png",
    "description": "International monthly chewing gum subscription service delivering exotic flavors from around the world. Based in Norway, shipping globally.",
    "foundingDate": "2024",
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "email": "post@gumbox.no",
      "availableLanguage": ["Norwegian", "English"],
      "areaServed": ["NO", "EU", "US", "GB", "AU", "CA"]
    },
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "NO"
    },
    "sameAs": [
      "https://www.facebook.com/gumboxno",
      "https://www.instagram.com/gumboxno",
      "https://twitter.com/gumboxno"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Chewing Gum Subscription Plans",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "1 Month Subscription",
            "description": "Monthly exotic chewing gum box"
          }
        },
        {
          "@type": "Offer", 
          "itemOffered": {
            "@type": "Service",
            "name": "3 Month Subscription",
            "description": "Quarterly exotic chewing gum subscription"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service", 
            "name": "6 Month Subscription",
            "description": "Bi-annual exotic chewing gum subscription"
          }
        }
      ]
    }
  };

  // Website Schema
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "GumBox - Global Chewing Gum Subscription",
    "alternateName": "GumBox",
    "url": "https://gumbox.no",
    "description": "Discover exotic chewing gum flavors from around the world with our monthly subscription service. International shipping available.",
    "inLanguage": ["no", "en"],
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://gumbox.no/search?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    },
    "publisher": {
      "@type": "Organization",
      "name": "GumBox AS"
    }
  };

  // Service Schema for Subscription Business
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Monthly Chewing Gum Subscription",
    "description": "International monthly subscription service delivering curated exotic chewing gum flavors from Japan, USA, Brazil, Europe and more worldwide destinations.",
    "provider": {
      "@type": "Organization",
      "name": "GumBox"
    },
    "areaServed": [
      {
        "@type": "Country",
        "name": "Norway"
      },
      {
        "@type": "Place",
        "name": "Europe"
      },
      {
        "@type": "Place", 
        "name": "Worldwide"
      }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Subscription Plans",
      "itemListElement": [
        {
          "@type": "Offer",
          "name": "1 Month Plan",
          "price": "199",
          "priceCurrency": "NOK",
          "description": "Single month exotic gum subscription"
        },
        {
          "@type": "Offer",
          "name": "3 Month Plan", 
          "price": "549",
          "priceCurrency": "NOK",
          "description": "Three month exotic gum subscription with savings"
        },
        {
          "@type": "Offer",
          "name": "6 Month Plan",
          "price": "999", 
          "priceCurrency": "NOK",
          "description": "Six month exotic gum subscription with maximum savings"
        }
      ]
    },
    "category": "Subscription Service",
    "serviceType": "Monthly Box Subscription"
  };

  // Product Schema (for product pages)
  const productSchema = productData ? {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": productData.name,
    "description": productData.description,
    "image": productData.image,
    "brand": {
      "@type": "Brand",
      "name": "GumBox"
    },
    "offers": {
      "@type": "Offer",
      "price": productData.price,
      "priceCurrency": productData.currency,
      "availability": "https://schema.org/InStock",
      "seller": {
        "@type": "Organization",
        "name": "GumBox"
      }
    },
    "category": "Food & Beverages > Candy > Chewing Gum"
  } : null;

  // FAQ Schema for better search visibility
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is GumBox?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "GumBox is an international monthly subscription service that delivers exotic chewing gum flavors from around the world directly to your door. We curate unique gums from Japan, USA, Brazil, Europe and other countries."
        }
      },
      {
        "@type": "Question",
        "name": "Do you ship internationally?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! While we're based in Norway, we ship our monthly chewing gum subscriptions worldwide. International shipping is available to most countries."
        }
      },
      {
        "@type": "Question",
        "name": "What flavors can I expect?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Each month features exotic and unique chewing gum flavors you can't find in regular stores. Expect flavors from Japanese brands, American specialties, Brazilian fruits, European innovations and more."
        }
      },
      {
        "@type": "Question",
        "name": "Can I cancel my subscription?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, you can cancel your GumBox subscription at any time. For multi-month subscriptions, billing is adjusted based on remaining months after cancellation."
        }
      }
    ]
  };

  // Combine all schemas
  const schemas = [organizationSchema, websiteSchema, serviceSchema, faqSchema];
  if (productSchema) schemas.push(productSchema);

  return (
    <>
      {schemas.map((schema, index) => (
        <Script
          key={index}
          id={`structured-data-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema)
          }}
        />
      ))}
    </>
  );
}