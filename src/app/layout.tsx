import type { Metadata, Viewport } from 'next';
import { Rubik } from 'next/font/google';
import ThemeProviderWrapper from '@/components/layout/ThemeProviderWrapper';
import { CartProvider } from '@/contexts/CartContext';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import CookieConsent from '@/components/CookieConsent';
import GoogleAnalytics from '@/components/GoogleAnalytics';
import FacebookPixel from '@/components/FacebookPixel';
import Hotjar from '@/components/Hotjar';
import './globals.css';

const rubik = Rubik({
  subsets: ['latin', 'latin-ext'], // Includes Norwegian characters æ, ø, å
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-rubik',
  preload: true,
  fallback: ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
  adjustFontFallback: true,
});

export const metadata: Metadata = {
  metadataBase: new URL('https://gumbox.no'),
  title: {
    default: 'GumBox - Norges Beste Tyggegummi Abonnement',
    template: '%s | GumBox'
  },
  description: 'Opplev eksotiske smaker fra hele verden med GumBox. Kurerte tyggegummi fra Japan, USA, Brasil og mer levert til døren din hver måned. Gratis frakt og avbryt når som helst.',
  applicationName: 'GumBox',
  referrer: 'origin-when-cross-origin',
  keywords: ['tyggegummi', 'abonnement', 'norge', 'gumbox', 'eksotisk', 'smaker', 'månedlig', 'kurert', 'subscription box', 'candy', 'gum', 'norsk', 'levering'],
  authors: [{ name: 'GumBox Team', url: 'https://gumbox.no' }],
  creator: 'GumBox',
  publisher: 'GumBox Norge AS',
  category: 'Food & Beverages',
  classification: 'E-commerce',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    siteName: 'GumBox',
    title: 'GumBox - Norges Beste Tyggegummi Abonnement',
    description: 'Opplev eksotiske smaker fra hele verden med GumBox. Kurerte tyggegummi fra Japan, USA, Brasil og mer levert til døren din hver måned. Gratis frakt og avbryt når som helst.',
    url: 'https://gumbox.no',
    locale: 'nb_NO',
    alternateLocale: ['en_US', 'da_DK', 'sv_SE'],
    images: [
      {
        url: '/images/ComputerHeroImageGul.png',
        width: 1200,
        height: 630,
        alt: 'GumBox - Eksotiske tyggegummi fra hele verden',
        type: 'image/png',
      },
      {
        url: '/images/BlaaPerf.png',
        width: 800,
        height: 600,
        alt: 'GumBox blå pakke',
        type: 'image/png',
      }
    ],
    countryName: 'Norway',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@gumboxno',
    creator: '@gumboxno',
    title: 'GumBox - Norges Beste Tyggegummi Abonnement',
    description: 'Opplev eksotiske smaker fra hele verden med GumBox. Kurerte tyggegummi levert månedlig. 🍬',
    images: [
      {
        url: '/images/ComputerHeroImageGul.png',
        alt: 'GumBox - Eksotiske tyggegummi fra hele verden',
        width: 1200,
        height: 630,
      }
    ],
  },
  appleWebApp: {
    capable: true,
    title: 'GumBox',
    statusBarStyle: 'default',
  },
  verification: {
    google: process.env.GOOGLE_VERIFICATION,
    other: {
      'facebook-domain-verification': process.env.FACEBOOK_VERIFICATION || '',
    },
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://gumbox.no',
    languages: {
      'nb-NO': 'https://gumbox.no',
      'en-US': 'https://gumbox.no/en',
    },
  },
  other: {
    'theme-color': '#F94F9B',
    'color-scheme': 'light',
    'mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
    'msapplication-TileColor': '#F94F9B',
    'msapplication-config': '/browserconfig.xml',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: '#F94F9B',
  colorScheme: 'light',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="no">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/images/BlaaPerf.png" />
      </head>
      <body className={`${rubik.variable}`} style={{ fontFamily: 'var(--font-rubik), sans-serif' }}>
        <GoogleAnalytics />
        <FacebookPixel />
        <Hotjar />
        <ThemeProviderWrapper>
          <CartProvider>
            <Header />
            <main role="main" id="main-content">
              {children}
            </main>
            <Footer />
            <CookieConsent />
          </CartProvider>
        </ThemeProviderWrapper>
      </body>
    </html>
  );
}