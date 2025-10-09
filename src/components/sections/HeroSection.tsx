'use client';

import { Box, Container, Typography, Button, Stack, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowForward as ArrowForwardIcon, PlayArrow as PlayArrowIcon, Star as StarIcon } from '@mui/icons-material';

const MotionBox = motion(Box);
const MotionTypography = motion(Typography);
const MotionButton = motion(Button);

export default function HeroSection() {
  return (
    <Box
      sx={{
        minHeight: { xs: '70vh', sm: '80vh', md: '85vh', lg: '90vh' },
        maxHeight: { xs: '90vh', sm: '95vh', md: '100vh' },
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        py: { xs: 6, sm: 8, md: 10, lg: 12 },
      }}
    >
      {/* Optimized background image */}
      <Image
        src="/images/gumbox-2.png"
        alt="GumBox background - colorful chewing gum collection"
        fill
        sizes="(max-width: 480px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 100vw, (max-width: 1440px) 100vw, 100vw"
        style={{
          objectFit: 'cover',
          objectPosition: 'center',
          zIndex: -1,
        }}
        priority
        quality={80}
      />
      {/* Start Abonnement Button - Bottom Left Corner */}
      <MotionBox
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        sx={{
          position: 'absolute',
          bottom: { xs: '3%', sm: '4%', md: '5%', lg: '6%' },
          left: { xs: '3%', sm: '4%', md: '5%', lg: '6%' },
          zIndex: 1,
        }}
      >
        <MotionButton
          variant="contained"
          size="large"
          endIcon={<StarIcon />}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => {
            document.getElementById('plan-selection')?.scrollIntoView({ behavior: 'smooth' });
          }}
          sx={{
            px: { xs: 3, sm: 3.5, md: 4 },
            py: { xs: 1.5, sm: 1.75, md: 2 },
            fontSize: { xs: '0.95rem', sm: '1rem', md: '1.1rem' },
            fontWeight: 700,
            borderRadius: 50,
            background: 'linear-gradient(135deg, #F94F9B 0%, #FF7AB8 100%)',
            boxShadow: '0 6px 24px rgba(249, 79, 155, 0.4)',
            '&:hover': {
              background: 'linear-gradient(135deg, #D63A7C 0%, #F94F9B 100%)',
              boxShadow: '0 10px 40px rgba(249, 79, 155, 0.5)',
              transform: 'translateY(-2px)',
            },
          }}
        >
          Start Abonnement
        </MotionButton>
      </MotionBox>
    </Box>
  );
}