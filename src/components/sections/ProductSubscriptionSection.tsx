'use client';

import { Box, Container, Typography, Button, Stack, Grid, Card, CardContent, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import { ArrowBackIos, ArrowForwardIos, Star } from '@mui/icons-material';
import { useCart } from '@/contexts/CartContext';
import { useTranslation } from '@/hooks/useTranslation';

const MotionBox = motion(Box);
const MotionCard = motion(Card);
const MotionButton = motion(Button);

// Sample product data
const productImages = [
  '/images/BlaaPerf.png',
  '/images/GulPerf.png', 
  '/images/OransjePerf.png',
  '/images/SortPerf.png',
  '/images/RosaPerf.png',
];

// Move plans inside component to access translations

export default function ProductSubscriptionSection() {
  const { t } = useTranslation();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { addItem } = useCart();

  const subscriptionPlans = [
    {
      id: '12-month',
      duration: t('twelveMonthPlan'),
      price: '199',
      originalPrice: '299',
      savings: '100',
      badge: t('bestValue'),
      badgeColor: '#FF6F3C',
      bonus: 'Signup Bonus',
      bonusText: 'Ekstra GumBox Starter Kit',
      popular: false,
      months: 12,
    },
    {
      id: '6-month',
      duration: t('sixMonthPlan'), 
      price: '229',
      originalPrice: '299',
      savings: '70',
      badge: t('mostPopular'),
      badgeColor: '#2E8BFF',
      popular: true,
      months: 6,
    },
    {
      id: '3-month',
      duration: t('threeMonthPlan'),
      price: '249',
      originalPrice: '299',
      savings: '50',
      popular: false,
      months: 3,
    },
    {
      id: 'monthly',
      duration: t('monthlyPlan'),
      price: '299',
      originalPrice: '299',
      savings: '0',
      popular: false,
      months: 1,
    },
  ];

  const [selectedPlan, setSelectedPlan] = useState(subscriptionPlans[3]);

  const productNames = [
    'Blå GumBox',
    'Gul GumBox', 
    'Oransje GumBox',
    'Sort GumBox',
    'Rosa GumBox',
  ];

  const handleAddToCart = () => {
    const cartItem = {
      id: `${productImages[currentImageIndex]}-${selectedPlan.id}`,
      productId: productImages[currentImageIndex],
      productName: productNames[currentImageIndex],
      productImage: productImages[currentImageIndex],
      planId: selectedPlan.id,
      planName: selectedPlan.duration,
      planDuration: selectedPlan.months,
      price: parseInt(selectedPlan.price),
    };
    
    addItem(cartItem);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % productImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + productImages.length) % productImages.length);
  };

  return (
    <Box
      id="plan-selection"
      sx={{
        py: { xs: 6, md: 8 },
        background: 'linear-gradient(180deg, rgba(255, 111, 60, 0.1) 0%, rgba(255, 111, 60, 0.05) 50%, #F7F7F7 100%)',
        position: 'relative',
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={{ xs: 3, md: 4, lg: 6 }} alignItems="flex-start" sx={{ minHeight: '600px' }}>
          {/* Left side - Product showcase */}
          <Grid item xs={12} lg={6}>
            <MotionBox
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
            >
              <Typography
                variant="h6"
                sx={{
                  color: '#1A1A1A',
                  fontWeight: 400,
                  mb: 2,
                  fontSize: { xs: '1rem', md: '1.1rem' },
                }}
              >
                05
              </Typography>

              {/* Main product image */}
              <MotionCard
                sx={{
                  borderRadius: { xs: '1rem', md: '1.5rem' },
                  overflow: 'hidden',
                  mb: 2,
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
                  position: 'relative',
                  height: { xs: '350px', sm: '400px', md: '420px', lg: '460px' },
                  aspectRatio: '4/3',
                  mt: { md: 12, lg: 14 },
                }}
              >
                <Box
                  sx={{
                    position: 'relative',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  {/* Product image - full space */}
                  <Image
                    src={productImages[currentImageIndex]}
                    alt={`GumBox produkt ${currentImageIndex + 1}`}
                    fill
                    sizes="(max-width: 480px) 100vw, (max-width: 768px) 90vw, (max-width: 1024px) 60vw, (max-width: 1200px) 50vw, (max-width: 1440px) 45vw, 40vw"
                    style={{
                      objectFit: 'contain',
                      objectPosition: 'center',
                      zIndex: 1,
                    }}
                    priority
                    quality={90}
                  />

                  {/* Navigation arrows and counter - TokyoTreat style at bottom */}
                  <Box
                    sx={{
                      position: 'absolute',
                      bottom: 20,
                      left: '50%',
                      transform: 'translateX(-50%)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: 1,
                      zIndex: 20,
                    }}
                  >
                    {/* Left arrow */}
                    <Button
                      onClick={prevImage}
                      sx={{
                        minWidth: 40,
                        width: 40,
                        height: 40,
                        borderRadius: '50%',
                        backgroundColor: 'white',
                        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
                        padding: 0,
                        '&:hover': {
                          backgroundColor: 'white',
                          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
                        },
                      }}
                    >
                      <Image
                        src="/images/arrow-left.svg"
                        alt="Previous"
                        width={20}
                        height={20}
                        sizes="20px"
                        style={{
                          width: '100%',
                          height: 'auto',
                        }}
                      />
                    </Button>

                    {/* Image counter */}
                    <Box
                      sx={{
                        backgroundColor: 'white',
                        borderRadius: '20px',
                        px: 2.5,
                        py: 0.75,
                        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
                        mx: 1,
                        minWidth: 50,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: '0.8rem',
                          fontWeight: 600,
                          color: '#1A1A1A',
                          lineHeight: 1,
                          whiteSpace: 'nowrap',
                          fontFamily: 'monospace',
                        }}
                      >
                        {currentImageIndex + 1} / {productImages.length}
                      </Typography>
                    </Box>

                    {/* Right arrow */}
                    <Button
                      onClick={nextImage}
                      sx={{
                        minWidth: 40,
                        width: 40,
                        height: 40,
                        borderRadius: '50%',
                        backgroundColor: 'white',
                        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
                        padding: 0,
                        '&:hover': {
                          backgroundColor: 'white',
                          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
                        },
                      }}
                    >
                      <Image
                        src="/images/arrow-right.svg"
                        alt="Next"
                        width={20}
                        height={20}
                        sizes="20px"
                        style={{
                          width: '100%',
                          height: 'auto',
                        }}
                      />
                    </Button>
                  </Box>
                </Box>
              </MotionCard>

              {/* Thumbnail images */}
              <Stack 
                direction="row" 
                spacing={1} 
                sx={{ 
                  overflowX: 'auto', 
                  pb: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: '100%',
                }}
              >
                {productImages.map((imageSrc, index) => (
                  <MotionBox
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    onClick={() => setCurrentImageIndex(index)}
                    sx={{
                      width: 64,
                      height: 64,
                      borderRadius: '0.75rem',
                      overflow: 'hidden',
                      cursor: 'pointer',
                      border: currentImageIndex === index ? '2px solid #F94F9B' : '2px solid transparent',
                      transition: 'border-color 0.2s ease',
                      flexShrink: 0,
                      position: 'relative',
                    }}
                  >
                    <Image
                      src={imageSrc}
                      alt={`GumBox thumbnail ${index + 1}`}
                      fill
                      sizes="64px"
                      style={{
                        objectFit: 'cover',
                        objectPosition: 'center',
                      }}
                    />
                  </MotionBox>
                ))}
              </Stack>
            </MotionBox>
          </Grid>

          {/* Right side - Subscription plans */}
          <Grid item xs={12} lg={6}>
            <MotionBox
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              sx={{ mt: { md: 4, lg: 6 } }}
            >
              {/* Plan selection heading with underline */}
              <Box sx={{ mb: 3, textAlign: 'center', position: 'relative' }}>
                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: 700,
                    color: '#8B4513',
                    fontSize: { xs: '1.8rem', md: '2.2rem' },
                    mb: 1,
                  }}
                >
                  {t('choosePlan')}
                </Typography>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    mt: 1,
                  }}
                >
                  <Image
                    src="/images/Underline.e5603a57.svg"
                    alt=""
                    width={200}
                    height={20}
                    style={{ opacity: 0.8 }}
                  />
                </Box>
              </Box>

              {/* Subscription plans */}
              <Stack spacing={2}>
                {subscriptionPlans.map((plan, index) => (
                  <MotionCard
                    key={plan.id}
                    whileHover={{ scale: 1.02 }}
                    onClick={() => setSelectedPlan(plan)}
                    sx={{
                      border: selectedPlan.id === plan.id ? '2px solid #F94F9B' : plan.popular ? '2px solid #2E8BFF' : '2px solid #E0E0E0',
                      borderRadius: '1rem',
                      overflow: 'visible',
                      position: 'relative',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.12)',
                      },
                    }}
                  >
                    {plan.badge && (
                      <Chip
                        label={plan.badge}
                        sx={{
                          position: 'absolute',
                          top: -10,
                          left: 16,
                          backgroundColor: plan.badgeColor,
                          color: 'white',
                          fontWeight: 700,
                          fontSize: '0.7rem',
                          height: 24,
                        }}
                      />
                    )}

                    <CardContent sx={{ p: 3 }}>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                        <Box>
                          <Typography
                            variant="h6"
                            sx={{
                              fontWeight: 700,
                              color: '#8B4513',
                              fontSize: '1.2rem',
                              mb: 0.5,
                            }}
                          >
                            {plan.duration}
                          </Typography>
                          {plan.savings && plan.savings !== '0' && (
                            <Typography sx={{ fontSize: '0.9rem', color: '#666' }}>
                              {t('saveKr')} {plan.savings}
                            </Typography>
                          )}
                        </Box>
                        <Box sx={{ textAlign: 'right' }}>
                          <Typography
                            sx={{
                              fontSize: '1.8rem',
                              fontWeight: 700,
                              color: '#1A1A1A',
                            }}
                          >
                            {t('currency')}{plan.price}
                          </Typography>
                          <Typography sx={{ fontSize: '0.9rem', color: '#666' }}>
                            {t('perMonthShort')}
                          </Typography>
                        </Box>
                      </Box>

                    </CardContent>
                  </MotionCard>
                ))}
              </Stack>

              {/* Pricing Summary */}
              <Box sx={{ mt: 4, textAlign: 'center', p: 3, backgroundColor: '#F7F7F7', borderRadius: '1rem' }}>
                <Stack direction="row" alignItems="baseline" justifyContent="center" spacing={2} sx={{ mb: 2 }}>
                  {selectedPlan.savings !== '0' && (
                    <Typography
                      sx={{
                        fontSize: '2rem',
                        fontWeight: 700,
                        color: '#999',
                        textDecoration: 'line-through',
                      }}
                    >
                      {t('currency')}{selectedPlan.originalPrice}.00
                    </Typography>
                  )}
                  <Typography
                    sx={{
                      fontSize: '2.5rem',
                      fontWeight: 700,
                      color: '#1A1A1A',
                    }}
                  >
                    {t('currency')}{selectedPlan.price}.00
                  </Typography>
                  <Typography sx={{ fontSize: '1rem', color: '#666' }}>
                    NOK
                  </Typography>
                </Stack>

                {/* Select Button */}
                <Button
                  variant="contained"
                  size="large"
                  onClick={handleAddToCart}
                  sx={{
                    backgroundColor: '#FF6F3C',
                    color: 'white',
                    px: 4,
                    py: 1.5,
                    borderRadius: '50px',
                    fontSize: '1.1rem',
                    fontWeight: 600,
                    textTransform: 'none',
                    '&:hover': {
                      backgroundColor: '#E55A2B',
                    },
                  }}
                >
                  {t('addToCart')}
                </Button>

                {/* Billing info */}
                <Box sx={{ minHeight: '48px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Typography sx={{ fontSize: '0.8rem', color: '#666', textAlign: 'center', lineHeight: 1.4 }}>
                    {t('billingInfo')}
                    {selectedPlan.months > 1 && (
                      <br />
                    )}
                    {selectedPlan.months > 1 && (
                      <span style={{ color: '#FF6F3C', fontWeight: 500 }}>
                        {t('earlyTermination')}
                      </span>
                    )}
                  </Typography>
                </Box>

                {/* Features */}
                <Stack direction="row" justifyContent="center" spacing={4} sx={{ mt: 2 }}>
                  <Stack direction="row" alignItems="center" spacing={1}>
                    <Image
                      src="/images/refresh-icon.svg"
                      alt="Auto-renewal"
                      width={16}
                      height={16}
                    />
                    <Typography sx={{ fontSize: '0.8rem', color: '#666' }}>
                      {t('autoRenewal')}
                    </Typography>
                  </Stack>

                  <Stack direction="row" alignItems="center" spacing={1}>
                    <Box
                      sx={{
                        width: 16,
                        height: 16,
                        borderRadius: '50%',
                        backgroundColor: selectedPlan.months === 1 ? '#4CAF50' : '#FF6F3C',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <Typography sx={{ fontSize: '0.7rem', color: 'white' }}>
                        {selectedPlan.months === 1 ? '✓' : '✕'}
                      </Typography>
                    </Box>
                    <Typography sx={{ fontSize: '0.8rem', color: '#666' }}>
                      {selectedPlan.months === 1 ? t('cancelAnytime') : `${t('commitment')} ${selectedPlan.months} ${t('months')}`}
                    </Typography>
                  </Stack>
                </Stack>
              </Box>
            </MotionBox>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}