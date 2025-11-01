'use client';

import CheckoutInterface from '@/components/payments/CheckoutInterface';
import { Box } from '@mui/material';
import { useRouter } from 'next/navigation';

export default function CheckoutPage() {
  const router = useRouter();

  const handleCheckoutSubmit = (data: any) => {
    console.log('Checkout data:', data);
    // Here you would typically:
    // 1. Validate the data
    // 2. Create a payment session with your backend
    // 3. Redirect to the payment provider (Bookis, Stripe, etc.)
    
    // For now, redirect directly to success page
    // In production, this would happen after successful payment
    router.push('/checkout/success');
  };

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'grey.50', py: 2 }}>
      <CheckoutInterface onSubmit={handleCheckoutSubmit} />
    </Box>
  );
}