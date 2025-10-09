'use client';

import { Box } from '@mui/material';
import TrustBadgesSection from '@/components/sections/TrustBadgesSection';
import ProductShowcase from '@/components/sections/ProductShowcase';
import ReviewsSection from '@/components/sections/ReviewsSection';

export default function AboutUsSection() {
  return (
    <Box 
      id="about-us" 
      component="section"
      sx={{
        background: 'linear-gradient(180deg, rgba(255, 111, 60, 0.1) 0%, rgba(255, 111, 60, 0.1) 100%)',
        position: 'relative',
      }}
    >
      {/* Trust Badges Section */}
      <TrustBadgesSection />

      {/* Product Showcase */}
      <ProductShowcase />

      {/* Reviews Section */}
      <ReviewsSection />
    </Box>
  );
}