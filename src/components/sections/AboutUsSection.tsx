'use client';

import { Box, Container, Typography, Grid, Card, CardContent, Avatar, Button, Stack, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import { Star, People, Favorite, LocalShipping, Security, Support } from '@mui/icons-material';
import TrustBadgesSection from '@/components/sections/TrustBadgesSection';
import ProductShowcase from '@/components/sections/ProductShowcase';
import ReviewsSection from '@/components/sections/ReviewsSection';

const MotionBox = motion.create(Box);
const MotionCard = motion.create(Card);
const MotionTypography = motion.create(Typography);

const teamMembers = [
  {
    name: 'Abu Henry',
    role: 'Grunnlegger & CEO',
    description: 'Passionert om å bringe verdens beste tyggegummi til Norge',
    avatar: '/images/team/abu.jpg',
    experience: '5+ år innen e-handel',
  },
  {
    name: 'Sarah Olsen',
    role: 'Produktkurator',
    description: 'Reiser verden rundt for å finne unike og eksotiske smaker',
    avatar: '/images/team/sarah.jpg',
    experience: 'Smaker-ekspert',
  },
  {
    name: 'Erik Andersen',
    role: 'Teknisk Direktør',
    description: 'Sørger for at din GumBox leveres perfekt hver gang',
    avatar: '/images/team/erik.jpg',
    experience: '8+ år logistikk',
  },
];

const values = [
  {
    icon: Star,
    title: 'Kvalitet først',
    description: 'Vi velger kun de beste produktene fra pålitelige leverandører',
    color: '#FFD43B',
  },
  {
    icon: People,
    title: 'Kundefokus',
    description: 'Våre kunders tilfredshet er vårt viktigste mål',
    color: '#F94F9B',
  },
  {
    icon: Favorite,
    title: 'Lidenskapsfullt',
    description: 'Vi brenner for å dele våre funn med tyggegummi-entusiaster',
    color: '#FF6F3C',
  },
];

const stats = [
  { number: '50,000+', label: 'Fornøyde kunder' },
  { number: '200+', label: 'Unike produkter' },
  { number: '15+', label: 'Land vi leverer fra' },
  { number: '4.8/5', label: 'Gjennomsnittlig rating' },
];

export default function AboutUsSection() {
  return (
    <Box 
      id="about-us" 
      component="section"
      sx={{
        background: 'linear-gradient(180deg, rgba(255, 111, 60, 0.05) 0%, rgba(249, 79, 155, 0.05) 100%)',
        position: 'relative',
      }}
    >
      {/* Hero Section */}
      <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 } }}>
        <Grid container spacing={6} alignItems="center">
          {/* Left Content */}
          <Grid size={{ xs: 12, lg: 6 }}>
            <MotionBox
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Chip 
                label="Om GumBox" 
                sx={{ 
                  mb: 3, 
                  bgcolor: 'primary.50', 
                  color: 'primary.main',
                  fontWeight: 'bold',
                  px: 3,
                  py: 1,
                  borderRadius: '24px',
                }} 
              />
              <MotionTypography
                variant="h1"
                sx={{
                  fontSize: { xs: '2.5rem', md: '3.5rem', lg: '4rem' },
                  fontWeight: 800,
                  background: 'linear-gradient(135deg, #F94F9B 0%, #FF6F3C 100%)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  mb: 3,
                  lineHeight: 1.1,
                }}
              >
                Vår Historie og Visjon
              </MotionTypography>
              <Typography
                variant="h5"
                sx={{
                  color: 'text.secondary',
                  lineHeight: 1.6,
                  mb: 6,
                  fontSize: { xs: '1.1rem', md: '1.3rem' },
                }}
              >
                GumBox startet som en drøm om å dele verdens mest unike og eksotiske tyggegummi 
                med tyggegummi-entusiaster i Norge. I dag er vi stolte av å være landets ledende 
                kurerte tyggegummi-abonnement.
              </Typography>
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3}>
                <Button
                  variant="contained"
                  size="large"
                  sx={{
                    px: 4,
                    py: 2,
                    fontSize: '1.1rem',
                    fontWeight: 'bold',
                    borderRadius: '16px',
                    background: 'linear-gradient(135deg, #F94F9B 0%, #FF6F3C 100%)',
                    '&:hover': {
                      transform: 'translateY(-2px)',
                      boxShadow: '0 8px 24px rgba(249, 79, 155, 0.3)',
                    },
                    transition: 'all 0.3s ease',
                  }}
                  onClick={() => {
                    document.getElementById('plan-selection')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Start Din Reise
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  sx={{
                    px: 4,
                    py: 2,
                    fontSize: '1.1rem',
                    fontWeight: 'bold',
                    borderRadius: '16px',
                    borderWidth: '2px',
                    '&:hover': {
                      borderWidth: '2px',
                      transform: 'translateY(-2px)',
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  Utforsk Produkter
                </Button>
              </Stack>
            </MotionBox>
          </Grid>

          {/* Right Image */}
          <Grid size={{ xs: 12, lg: 6 }}>
            <MotionBox
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              sx={{
                position: 'relative',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Box
                component="img"
                src="/images/HeroAboutUs.png"
                alt="GumBox produktutvalg"
                sx={{
                  width: '100%',
                  maxWidth: '500px',
                  height: 'auto',
                  borderRadius: '32px',
                  boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
                  '&:hover': {
                    transform: 'scale(1.02)',
                    boxShadow: '0 24px 48px rgba(0, 0, 0, 0.15)',
                  },
                  transition: 'all 0.3s ease',
                }}
              />
              {/* Decorative elements */}
              <Box
                sx={{
                  position: 'absolute',
                  top: -20,
                  right: -20,
                  width: 100,
                  height: 100,
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #F94F9B20, #FF6F3C20)',
                  zIndex: -1,
                }}
              />
              <Box
                sx={{
                  position: 'absolute',
                  bottom: -30,
                  left: -30,
                  width: 80,
                  height: 80,
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #FF6F3C20, #F94F9B20)',
                  zIndex: -1,
                }}
              />
            </MotionBox>
          </Grid>
        </Grid>

        {/* Stats Section */}
        <MotionBox
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          sx={{ 
            mb: 12, 
            mt: 10,
            py: 6,
            px: 4,
            background: 'linear-gradient(135deg, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.4) 100%)',
            borderRadius: '32px',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255,255,255,0.3)',
          }}
        >
          <Grid container spacing={4}>
            {stats.map((stat, index) => (
              <Grid size={{ xs: 6, md: 3 >>
                <MotionBox
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  sx={{ 
                    textAlign: 'center',
                    py: 3,
                    px: 2,
                    borderRadius: '20px',
                    '&:hover': {
                      background: 'rgba(249, 79, 155, 0.05)',
                      transform: 'translateY(-4px)',
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  <Typography
                    variant="h3"
                    sx={{
                      fontWeight: 800,
                      background: 'linear-gradient(135deg, #F94F9B 0%, #FF6F3C 100%)',
                      backgroundClip: 'text',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      mb: 1,
                      fontSize: { xs: '2rem', md: '2.5rem' },
                    }}
                  >
                    {stat.number}
                  </Typography>
                  <Typography 
                    variant="body1" 
                    sx={{
                      color: 'text.secondary',
                      fontWeight: 600,
                      fontSize: { xs: '0.9rem', md: '1rem' },
                    }}
                  >
                    {stat.label}
                  </Typography>
                </MotionBox>
              </Grid>
            ))}
          </Grid>
        </MotionBox>

        {/* Values Section */}
        <MotionBox
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          sx={{ mb: 10 }}
        >
          <Typography
            variant="h2"
            sx={{
              textAlign: 'center',
              mb: 6,
              fontSize: { xs: '2rem', md: '2.5rem' },
              fontWeight: 700,
            }}
          >
            Våre Verdier
          </Typography>
          
          <Grid container spacing={4}>
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <Grid size={{ xs: 12, md: 4 >>
                  <MotionCard
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                    sx={{
                      height: '100%',
                      textAlign: 'center',
                      borderRadius: '24px',
                      border: '1px solid',
                      borderColor: 'grey.100',
                      background: 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.6) 100%)',
                      backdropFilter: 'blur(10px)',
                      '&:hover': {
                        borderColor: 'primary.main',
                        transform: 'translateY(-8px)',
                        boxShadow: '0 20px 40px rgba(249, 79, 155, 0.2)',
                      },
                      transition: 'all 0.3s ease',
                    }}
                  >
                    <CardContent sx={{ p: 4 }}>
                      <Box
                        sx={{
                          width: 80,
                          height: 80,
                          borderRadius: '50%',
                          background: `linear-gradient(135deg, ${value.color}20, ${value.color}40)`,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          mx: 'auto',
                          mb: 3,
                        }}
                      >
                        <IconComponent sx={{ fontSize: 40, color: value.color }} />
                      </Box>
                      <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2 }}>
                        {value.title}
                      </Typography>
                      <Typography variant="body1" color="text.secondary">
                        {value.description}
                      </Typography>
                    </CardContent>
                  </MotionCard>
                </Grid>
              );
            })}
          </Grid>
        </MotionBox>

        {/* Team Section */}
        <MotionBox
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <Typography
            variant="h2"
            sx={{
              textAlign: 'center',
              mb: 6,
              fontSize: { xs: '2rem', md: '2.5rem' },
              fontWeight: 700,
            }}
          >
            Møt Teamet
          </Typography>
          
          <Grid container spacing={4} justifyContent="center">
            {teamMembers.map((member, index) => (
              <Grid size={{ xs: {12} sm={6} md={4} key={index} }}>
                <MotionCard
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                  sx={{
                    textAlign: 'center',
                    borderRadius: '24px',
                    background: 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.6) 100%)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255,255,255,0.3)',
                    '&:hover': {
                      transform: 'translateY(-6px) scale(1.02)',
                      boxShadow: '0 16px 40px rgba(0,0,0,0.15)',
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  <CardContent sx={{ p: 4 }}>
                    <Avatar
                      sx={{
                        width: 100,
                        height: 100,
                        mx: 'auto',
                        mb: 3,
                        bgcolor: 'primary.main',
                        fontSize: '2rem',
                        fontWeight: 'bold',
                      }}
                    >
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </Avatar>
                    <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
                      {member.name}
                    </Typography>
                    <Chip
                      label={member.role}
                      size="small"
                      sx={{
                        mb: 2,
                        bgcolor: 'primary.50',
                        color: 'primary.main',
                        fontWeight: 'medium',
                      }}
                    />
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                      {member.description}
                    </Typography>
                    <Typography variant="caption" color="text.disabled">
                      {member.experience}
                    </Typography>
                  </CardContent>
                </MotionCard>
              </Grid>
            ))}
          </Grid>
        </MotionBox>
      </Container>

      {/* Trust Badges Section */}
      <TrustBadgesSection />

      {/* Product Showcase */}
      <ProductShowcase />

      {/* Reviews Section */}
      <ReviewsSection />

      {/* CTA Section */}
      <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 } }}>
        <MotionBox
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          sx={{
            textAlign: 'center',
            py: 8,
            px: 4,
            borderRadius: '32px',
            background: 'linear-gradient(135deg, #F94F9B 0%, #FF6F3C 100%)',
            color: 'white',
            position: 'relative',
            overflow: 'hidden',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
              borderRadius: '32px',
            },
          }}
        >
          <Typography variant="h3" sx={{ fontWeight: 'bold', mb: 3 }}>
            Klar til å starte din GumBox-reise?
          </Typography>
          <Typography variant="h6" sx={{ mb: 4, opacity: 0.9 }}>
            Bli med på over 50,000 fornøyde kunder som allerede nyter verdens beste tyggegummi
          </Typography>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center">
            <Button
              variant="contained"
              size="large"
              sx={{
                bgcolor: 'white',
                color: 'primary.main',
                px: 4,
                py: 2,
                fontSize: '1.1rem',
                fontWeight: 'bold',
                borderRadius: '16px',
                zIndex: 1,
                position: 'relative',
                '&:hover': {
                  bgcolor: 'grey.100',
                  transform: 'translateY(-2px)',
                  boxShadow: '0 8px 24px rgba(0,0,0,0.2)',
                },
                transition: 'all 0.3s ease',
              }}
              onClick={() => {
                document.getElementById('plan-selection')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Start Abonnement
            </Button>
            <Button
              variant="outlined"
              size="large"
              sx={{
                borderColor: 'white',
                color: 'white',
                px: 4,
                py: 2,
                fontSize: '1.1rem',
                fontWeight: 'bold',
                borderRadius: '16px',
                borderWidth: '2px',
                zIndex: 1,
                position: 'relative',
                '&:hover': {
                  borderColor: 'white',
                  borderWidth: '2px',
                  bgcolor: 'rgba(255,255,255,0.15)',
                  transform: 'translateY(-2px)',
                },
                transition: 'all 0.3s ease',
              }}
            >
              Les Mer
            </Button>
          </Stack>
        </MotionBox>
      </Container>
    </Box>
  );
}