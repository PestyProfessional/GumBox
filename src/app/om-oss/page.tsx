import type { Metadata } from 'next';
import AboutUsSection from '@/components/sections/AboutUsSection';

export const metadata: Metadata = {
  title: 'Om Oss',
  description: 'Lær mer om GumBox - Norges beste tyggegummi abonnement. Opplev vår historie, verdier og forpliktelse til å levere de beste tyggegummi fra hele verden.',
  keywords: ['om gumbox', 'historien vår', 'tyggegummi kurering', 'norske kunder', 'gumbox team', 'vår visjon'],
  openGraph: {
    title: 'Om GumBox - Vår Historie og Visjon',
    description: 'Oppdag hvordan GumBox startet og vårt oppdrag med å bringe de beste tyggegummiene fra hele verden til Norge.',
    url: 'https://gumbox.no/om-oss',
    type: 'website',
    images: [
      {
        url: '/images/Gul-rosa.png',
        width: 1200,
        height: 630,
        alt: 'GumBox team og vår visjon',
        type: 'image/png',
      }
    ],
  },
  twitter: {
    title: 'Om GumBox - Vår Historie og Visjon',
    description: 'Oppdag hvordan GumBox startet og vårt oppdrag med å bringe de beste tyggegummiene fra hele verden til Norge.',
    images: ['/images/Gul-rosa.png'],
  },
  alternates: {
    canonical: 'https://gumbox.no/om-oss',
  },
};

export default function AboutPage() {
  return <AboutUsSection />;
}