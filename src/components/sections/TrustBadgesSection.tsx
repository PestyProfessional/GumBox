'use client';

import { Box, Container, Grid, Paper, Typography, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import { 
  ShippingIcon, 
  CancelAnytimeIcon, 
  MonthlyBoxIcon, 
  SecurePaymentIcon 
} from '@/components/icons/NorwayIcons';

const MotionPaper = motion.create(Paper);

interface TrustBadgeProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

function TrustBadge({ icon, title, description, delay }: TrustBadgeProps) {
  return (
    <MotionPaper
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ 
        y: -8,
        boxShadow: '0 12px 32px rgba(249, 79, 155, 0.15)'
      }}
      sx={{
        p: 3,
        textAlign: 'center',
        borderRadius: 3,
        background: 'linear-gradient(135deg, #FFFFFF 0%, #F7F7F7 100%)',
        border: '1px solid rgba(249, 79, 155, 0.1)',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        cursor: 'default',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Stack spacing={2} alignItems="center">
        {/* Icon */}
        <Box
          sx={{
            width: 64,
            height: 64,
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #F94F9B 0%, #FF7AB8 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            boxShadow: '0 4px 16px rgba(249, 79, 155, 0.3)',
            mb: 1,
          }}
        >
          {icon}
        </Box>

        {/* Title */}
        <Typography
          variant="h6"
          sx={{
            fontWeight: 600,
            color: 'text.primary',
            fontSize: { xs: '1rem', md: '1.125rem' },
          }}
        >
          {title}
        </Typography>

        {/* Description */}
        <Typography
          variant="body2"
          sx={{
            color: 'text.secondary',
            lineHeight: 1.6,
            fontSize: { xs: '0.875rem', md: '1rem' },
          }}
        >
          {description}
        </Typography>
      </Stack>
    </MotionPaper>
  );
}

export default function TrustBadgesSection() {
  const trustBadges = [
    {
      icon: <ShippingIcon sx={{ fontSize: 32 }} />,
      title: 'Gratis Frakt',
      description: 'Fri frakt i hele Norge. Ingen skjulte kostnader eller overraskelser.',
    },
    {
      icon: <CancelAnytimeIcon sx={{ fontSize: 32 }} />,
      title: 'Avbryt Når Som Helst',
      description: 'Full frihet. Pause eller avbryt abonnementet ditt når du vil.',
    },
    {
      icon: <MonthlyBoxIcon sx={{ fontSize: 32 }} />,
      title: 'Kurert Månedlig',
      description: 'Håndplukket av eksperter. Nye smaker og merker hver måned.',
    },
    {
      icon: <SecurePaymentIcon sx={{ fontSize: 32 }} />,
      title: 'Sikker Betaling',
      description: 'Trygg betaling med Vipps, Klarna eller kort. 100% sikkert.',
    },
  ];

  return (
    <Box
      sx={{
        py: { xs: 6, md: 10 },
        background: 'linear-gradient(180deg, #FFFFFF 0%, #F7F7F7 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background pattern */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `
            radial-gradient(circle at 20% 50%, rgba(249, 79, 155, 0.03) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(46, 139, 255, 0.03) 0%, transparent 50%),
            radial-gradient(circle at 40% 80%, rgba(255, 212, 59, 0.03) 0%, transparent 50%)
          `,
          zIndex: 0,
        }}
      />

      <Container maxWidth="lg" className="container" sx={{ position: 'relative', zIndex: 1 }}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <Box sx={{ textAlign: 'center', mb: { xs: 4, md: 6 } }}>
            <Typography
              variant="h2"
              sx={{
                fontWeight: 700,
                color: 'text.primary',
                mb: 2,
                fontSize: { xs: '1.75rem', md: '2.25rem' },
              }}
            >
              Hvorfor Velge{' '}
              <Box
                component="span"
                sx={{
                  background: 'linear-gradient(135deg, #F94F9B 0%, #2E8BFF 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                GumBox
              </Box>
              ?
            </Typography>
            
            <Typography
              variant="h6"
              sx={{
                color: 'text.secondary',
                fontWeight: 400,
                maxWidth: '600px',
                mx: 'auto',
                lineHeight: 1.6,
              }}
            >
              Vi gjør det enkelt og trygt å oppleve verdens beste tyggegummi. 
              Her er hva som gjør oss spesielle.
            </Typography>
          </Box>
        </motion.div>

        {/* Trust badges grid */}
        <Grid container spacing={{ xs: 2, md: 4 }}>
          {trustBadges.map((badge, index) => (
            <Grid size={{ xs: 12, sm: 6, md: 3 }} key={badge.title}>
              <TrustBadge
                icon={badge.icon}
                title={badge.title}
                description={badge.description}
                delay={index * 0.1}
              />
            </Grid>
          ))}
        </Grid>

        {/* Additional trust indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Box
            sx={{
              mt: { xs: 4, md: 6 },
              p: 3,
              borderRadius: 3,
              background: 'linear-gradient(135deg, rgba(249, 79, 155, 0.05) 0%, rgba(46, 139, 255, 0.05) 100%)',
              border: '1px solid rgba(249, 79, 155, 0.1)',
              textAlign: 'center',
            }}
          >
            <Stack
              direction={{ xs: 'column', md: 'row' }}
              spacing={3}
              justifyContent="center"
              alignItems="center"
              divider={
                <Box
                  sx={{
                    width: { xs: '3rem', md: '1px' },
                    height: { xs: '1px', md: '2rem' },
                    backgroundColor: 'rgba(249, 79, 155, 0.2)',
                  }}
                />
              }
            >
              <Stack spacing={0.5} alignItems="center">
                <Typography variant="h4" sx={{ fontWeight: 700, color: 'primary.main' }}>
                  2000+
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary', fontWeight: 500 }}>
                  Fornøyde Kunder
                </Typography>
              </Stack>

              <Stack spacing={0.5} alignItems="center">
                <Typography variant="h4" sx={{ fontWeight: 700, color: 'primary.main' }}>
                  50+
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary', fontWeight: 500 }}>
                  Unike Smaker
                </Typography>
              </Stack>

              <Stack spacing={0.5} alignItems="center">
                <Typography variant="h4" sx={{ fontWeight: 700, color: 'primary.main' }}>
                  4.8⭐
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary', fontWeight: 500 }}>
                  Gjennomsnittlig Rating
                </Typography>
              </Stack>

              <Stack spacing={0.5} alignItems="center">
                <Typography variant="h4" sx={{ fontWeight: 700, color: 'primary.main' }}>
                  15+
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary', fontWeight: 500 }}>
                  Land Representert
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
}