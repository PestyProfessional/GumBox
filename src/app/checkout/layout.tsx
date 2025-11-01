import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    template: '%s | GumBox Checkout',
    default: 'Checkout',
  },
  robots: 'noindex, nofollow',
  openGraph: {
    title: 'GumBox Checkout',
    description: 'Fullfør din GumBox bestilling',
    type: 'website',
  },
};

export default function CheckoutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}