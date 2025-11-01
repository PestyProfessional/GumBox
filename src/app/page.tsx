'use client';

import HeroSection from '@/components/sections/HeroSection';
import DecorativeSection from '@/components/sections/DecorativeSection';
import ProductSubscriptionSection from '@/components/sections/ProductSubscriptionSection';
import { Box } from '@mui/material';

export default function HomePage() {
  return (
    <Box component="main">
      {/* Hero Section */}
      <HeroSection />

      {/* Decorative Section with Boy Illustration */}
      <DecorativeSection />

      {/* Product Subscription Section */}
      <ProductSubscriptionSection />
    </Box>
  );
}