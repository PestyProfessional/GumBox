'use client';

import { SvgIcon, SvgIconProps } from '@mui/material';

// Shipping truck icon - inspired by TokyoTreat's trust badges
export function ShippingIcon(props: SvgIconProps) {
  return (
    <SvgIcon {...props} viewBox="0 0 24 24">
      <path d="M6 20c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM18 20c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM20 8h-3V4H3v10h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zm-1 2h-2V7h1.5l.5 3z"/>
    </SvgIcon>
  );
}

// Norwegian flag icon for trust/local presence
export function NorwayFlagIcon(props: SvgIconProps) {
  return (
    <SvgIcon {...props} viewBox="0 0 24 24">
      <rect width="24" height="16" y="4" fill="#ED2939"/>
      <rect width="24" height="2" y="9" fill="#FFFFFF"/>
      <rect width="24" height="2" y="13" fill="#FFFFFF"/>
      <rect width="2" height="16" x="7" y="4" fill="#FFFFFF"/>
      <rect width="2" height="16" x="11" y="4" fill="#002868"/>
      <rect width="24" height="2" x="0" y="11" fill="#002868"/>
    </SvgIcon>
  );
}

// Subscription/renewal icon - matching TokyoTreat's refresh style
export function SubscriptionIcon(props: SvgIconProps) {
  return (
    <SvgIcon {...props} viewBox="0 0 24 24">
      <path d="M12 4V1L8 5l4 4V6c3.31 0 6 2.69 6 6 0 1.01-.25 1.97-.7 2.8l1.46 1.46C19.54 15.03 20 13.57 20 12c0-4.42-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6 0-1.01.25-1.97.7-2.8L5.24 7.74C4.46 8.97 4 10.43 4 12c0 4.42 3.58 8 8 8v3l4-4-4-4v3z"/>
    </SvgIcon>
  );
}

// Secure payment icon - emphasizing Norwegian payment methods
export function SecurePaymentIcon(props: SvgIconProps) {
  return (
    <SvgIcon {...props} viewBox="0 0 24 24">
      <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6zm9 14H6V10h12v10zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"/>
    </SvgIcon>
  );
}

// Quality guarantee icon - inspired by TokyoTreat's star rating
export function QualityStarIcon(props: SvgIconProps) {
  return (
    <SvgIcon {...props} viewBox="0 0 24 24">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
    </SvgIcon>
  );
}

// Vipps payment icon - Norwegian mobile payment
export function VippsIcon(props: SvgIconProps) {
  return (
    <SvgIcon {...props} viewBox="0 0 24 24">
      <rect width="20" height="14" x="2" y="5" rx="2" fill="#FF5B24"/>
      <path d="M8 9l2 6h1.5l-2-6H8zm3 0l1.5 4.5L14 9h1.5l-2.5 6h-1.5L9.5 9H11z" fill="white"/>
    </SvgIcon>
  );
}

// Klarna payment icon
export function KlarnaIcon(props: SvgIconProps) {
  return (
    <SvgIcon {...props} viewBox="0 0 24 24">
      <rect width="20" height="14" x="2" y="5" rx="2" fill="#FFB3C7"/>
      <text x="12" y="13.5" fontSize="8" textAnchor="middle" fill="#000" fontWeight="bold">
        Klarna
      </text>
    </SvgIcon>
  );
}

// Cancel anytime icon - freedom/flexibility
export function CancelAnytimeIcon(props: SvgIconProps) {
  return (
    <SvgIcon {...props} viewBox="0 0 24 24">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11H7v-2h10v2z"/>
    </SvgIcon>
  );
}

// Monthly delivery icon
export function MonthlyBoxIcon(props: SvgIconProps) {
  return (
    <SvgIcon {...props} viewBox="0 0 24 24">
      <path d="M9 11H7v6h2v-6zm4 0h-2v6h2v-6zm4 0h-2v6h2v-6zm2-7h-3V2h-2v2H8V2H6v2H3c-1.11 0-1.99.89-1.99 2L1 20c0 1.1.89 2 2 2h18c1.1 0 2-.9 2-2V6c0-1.11-.9-2-2-2zm0 16H3V9h18v11z"/>
    </SvgIcon>
  );
}

// Gum/candy icon for product representation
export function GumIcon(props: SvgIconProps) {
  return (
    <SvgIcon {...props} viewBox="0 0 24 24">
      <circle cx="8" cy="8" r="3" fill="#F94F9B"/>
      <circle cx="16" cy="8" r="3" fill="#FFD43B"/>
      <circle cx="8" cy="16" r="3" fill="#6FD672"/>
      <circle cx="16" cy="16" r="3" fill="#2E8BFF"/>
    </SvgIcon>
  );
}