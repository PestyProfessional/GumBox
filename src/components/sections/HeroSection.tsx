'use client';

import { Box, Container, Typography, Button, Stack, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowForward as ArrowForwardIcon, PlayArrow as PlayArrowIcon, Star as StarIcon } from '@mui/icons-material';
import { useTranslation } from '@/hooks/useTranslation';

const MotionBox = motion.create(Box);
const MotionTypography = motion.create(Typography);
const MotionButton = motion.create(Button);

export default function HeroSection() {
  const { t } = useTranslation();
  return (
    <Box
      sx={{
        height: { xs: '400px', sm: '500px', md: '600px', lg: '700px', xl: '100vh' },
        position: 'relative',
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'flex-start',
        p: 4,
        backgroundColor: '#fff',
        overflow: 'hidden',
      }}
    >
      {/* Hero Image with exact about us page approach */}
      <Box sx={{ 
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0
      }}>
        <Image
          src="/images/ComputerHeroImageGul.png"
          alt="GumBox Hero"
          width={1920}
          height={1080}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover'
          }}
          priority
        />
      </Box>
      {/* Start Abonnement Button - Bottom Left Corner */}
      <MotionBox
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        sx={{ position: 'relative', zIndex: 1 }}
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
          {t('startSubscription')}
        </MotionButton>
      </MotionBox>
    </Box>
  );
}