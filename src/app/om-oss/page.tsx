'use client';

import { 
  Box, 
  Container, 
  Typography, 
  Button, 
  Grid, 
  Card,
  CardContent,
  Avatar
} from '@mui/material';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { 
  Star as StarIcon, 
  Favorite as FavoriteIcon, 
  Public as PublicIcon,
  LocalShipping as ShippingIcon 
} from '@mui/icons-material';
import { useTranslation } from '@/hooks/useTranslation';

const MotionBox = motion.create(Box);
const MotionCard = motion.create(Card);
const MotionTypography = motion.create(Typography);

export default function AboutPage() {
  const { t } = useTranslation();
  const router = useRouter();
  return (
    <Box sx={{ overflow: 'hidden' }}>
      {/* Hero Image at Top */}
      <Container maxWidth="xl" sx={{ py: { xs: 4, md: 6 } }}>
        <MotionBox
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          sx={{
            position: 'relative',
            borderRadius: '32px',
            overflow: 'hidden',
            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.15)',
            '&:hover': {
              transform: 'translateY(-8px)',
              boxShadow: '0 30px 80px rgba(0, 0, 0, 0.2)',
            },
            transition: 'all 0.4s ease',
            mb: { xs: 6, md: 8 }
          }}
        >
          <Box sx={{ height: { xs: '300px', sm: '400px', md: '500px', lg: '600px' } }}>
            <Image
              src="/images/HeroAboutUs.png"
              alt="GumBox - Om Oss"
              width={1400}
              height={800}
              style={{
                width: '100%',
                height: '100%',
                borderRadius: '32px',
                objectFit: 'cover'
              }}
              priority
            />
          </Box>
          
          {/* Decorative gradient overlay */}
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'linear-gradient(135deg, rgba(249, 79, 155, 0.1) 0%, rgba(255, 111, 60, 0.1) 100%)',
              borderRadius: '32px',
              pointerEvents: 'none'
            }}
          />
        </MotionBox>

        {/* Welcome Content Below Image */}
        <MotionBox
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          sx={{ textAlign: 'center', maxWidth: '800px', mx: 'auto' }}
        >
          <Typography 
            variant="h2" 
            sx={{ 
              fontWeight: 800, 
              mb: 3,
              background: 'linear-gradient(135deg, #F94F9B 0%, #FF6F3C 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontSize: { xs: '2.5rem', md: '3.5rem' }
            }}
          >
            {t('welcomeToGumBox')}
          </Typography>
          
          <Typography 
            variant="h6" 
            sx={{ 
              mb: 6, 
              color: 'text.primary',
              lineHeight: 1.7,
              fontWeight: 400,
              textAlign: 'left',
              maxWidth: '900px',
              mx: 'auto',
              whiteSpace: 'pre-line'
            }}
          >
            {t('aboutUsStory')}
          </Typography>

          {/* Meet our founders section */}
          <MotionBox
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            sx={{ 
              mb: 6,
              p: 4,
              borderRadius: '24px',
              backgroundColor: 'rgba(249, 79, 155, 0.02)',
              border: '1px solid rgba(249, 79, 155, 0.1)'
            }}
          >
            <Typography 
              variant="h4" 
              sx={{ 
                fontWeight: 700, 
                mb: 4,
                color: '#F94F9B',
                fontSize: { xs: '1.8rem', md: '2.2rem' }
              }}
            >
              {t('meetOurFounder')}
            </Typography>
            
            <Box sx={{ 
              display: 'flex', 
              flexDirection: { xs: 'column', md: 'row' },
              alignItems: 'center',
              gap: 4,
              maxWidth: '900px',
              mx: 'auto'
            }}>
              {/* Founder Image */}
              <Box sx={{ 
                flex: '0 0 auto',
                order: { xs: 1, md: 1 }
              }}>
                <Box
                  sx={{
                    width: { xs: 240, md: 280 },
                    height: { xs: 240, md: 280 },
                    borderRadius: '50%',
                    overflow: 'hidden',
                    boxShadow: '0 12px 40px rgba(249, 79, 155, 0.15)',
                    border: '3px solid rgba(249, 79, 155, 0.2)',
                    mx: 'auto'
                  }}
                >
                  <Image
                    src="/images/Founders.JPG"
                    alt="GumBox Founders"
                    width={320}
                    height={320}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition: '70% center',
                      borderRadius: '50%'
                    }}
                  />
                </Box>
              </Box>
              
              {/* Founder Description */}
              <Box sx={{ 
                flex: 1,
                textAlign: { xs: 'center', md: 'left' },
                order: { xs: 2, md: 2 }
              }}>
                <Typography 
                  variant="body1" 
                  sx={{ 
                    color: 'text.primary',
                    lineHeight: 1.8,
                    fontSize: { xs: '1rem', md: '1.1rem' },
                    fontWeight: 400,
                    whiteSpace: 'pre-line'
                  }}
                >
                  {t('founderDescription')}
                </Typography>
              </Box>
            </Box>
          </MotionBox>

          <Typography 
            variant="h5" 
            sx={{ 
              mb: 4, 
              color: 'text.secondary',
              lineHeight: 1.6,
              fontWeight: 400
            }}
          >
            {t('aboutUsDescription')}
          </Typography>

          <Typography 
            variant="h6" 
            sx={{ 
              mb: 5, 
              color: '#F94F9B',
              lineHeight: 1.6,
              fontWeight: 500,
              fontStyle: 'italic'
            }}
          >
            {t('aboutUsThankYou')}
          </Typography>

          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Button
              variant="contained"
              size="large"
              sx={{
                px: 4,
                py: 1.5,
                borderRadius: '16px',
                background: 'linear-gradient(135deg, #F94F9B 0%, #FF6F3C 100%)',
                boxShadow: '0 8px 32px rgba(249, 79, 155, 0.3)',
                '&:hover': {
                  background: 'linear-gradient(135deg, #D63A7C 0%, #E55A2B 100%)',
                  transform: 'translateY(-2px)',
                  boxShadow: '0 12px 40px rgba(249, 79, 155, 0.4)',
                },
                transition: 'all 0.3s ease'
              }}
              onClick={() => {
                router.push('/#plan-selection');
              }}
            >
              {t('startSubscription')}
            </Button>
          </Box>
        </MotionBox>
      </Container>
    </Box>
  );
}