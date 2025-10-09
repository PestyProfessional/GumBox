import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GumBox - Tyggegummi Abonnement",
  description: "Oppdag verdens beste tyggegummi med GumBox - din månedlige tyggegummi-abonnementsboks",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="no">
      <body>{children}</body>
    </html>
  );
}