'use client';

import { Box, Container, Typography, Button, Paper } from '@mui/material';
import { useRouter } from 'next/navigation';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useTranslation } from '@/hooks/useTranslation';

export default function SporOrdre() {
  const { t } = useTranslation();
  const router = useRouter();

  const trackingOptions = [
    {
      name: 'Posten',
      logo: '/images/shipping/logo-posten-round-30.svg',
      url: 'https://www.posten.no/sporing-kundeservice',
      description: t('trackWithPosten')
    },
    {
      name: 'PostNord',
      logo: '/images/shipping/logo-postnord-round-30.svg',
      url: 'https://www.postnord.no/',
      description: t('trackWithPostNord')
    },
    {
      name: 'Helthjem',
      logo: '/images/shipping/helthjem.png',
      url: 'https://www.helthjem.no/sporing',
      description: t('trackWithHelthjem')
    }
  ];

  const handleTrackingClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <Container maxWidth="md" sx={{ py: 8 }}>
      {/* Header */}
      <Box sx={{ mb: 4 }}>
        <Button
          startIcon={<ArrowBackIcon />}
          onClick={() => router.back()}
          sx={{ 
            mb: 2,
            color: 'text.secondary',
            '&:hover': {
              backgroundColor: 'rgba(0, 0, 0, 0.04)'
            }
          }}
        >
          {t('back')}
        </Button>
        
        <Typography variant="h3" component="h1" sx={{ mb: 2, fontWeight: 700 }}>
          {t('trackOrderTitle')}
        </Typography>
        
        <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
          {t('trackOrderSubtitle')}
        </Typography>
      </Box>

      {/* Tracking Options */}
      <Box sx={{ display: 'grid', gap: 3 }}>
        {trackingOptions.map((option) => (
          <Paper
            key={option.name}
            elevation={0}
            sx={{
              p: 3,
              border: '1px solid',
              borderColor: 'divider',
              borderRadius: 2,
              cursor: 'pointer',
              transition: 'all 0.2s ease-in-out',
              '&:hover': {
                borderColor: 'primary.main',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                transform: 'translateY(-2px)'
              }
            }}
            onClick={() => handleTrackingClick(option.url)}
          >
            <Box sx={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: 3
            }}>
              <Box
                component="img"
                src={option.logo}
                alt={option.name}
                sx={{ 
                  height: 40, 
                  width: 40,
                  objectFit: 'contain'
                }}
              />
              
              <Box sx={{ flex: 1 }}>
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 0.5 }}>
                  {option.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {option.description}
                </Typography>
              </Box>
              
              <Box sx={{ 
                display: 'flex', 
                alignItems: 'center',
                color: 'primary.main'
              }}>
                <Typography variant="body2" sx={{ fontWeight: 500 }}>
                  {t('trackOrderAction')}
                </Typography>
              </Box>
            </Box>
          </Paper>
        ))}
      </Box>

      {/* Additional Info */}
      <Box sx={{ mt: 6, p: 3, backgroundColor: 'grey.50', borderRadius: 2 }}>
        <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
          {t('needHelp')}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          {t('needHelpDescription')}
        </Typography>
        <Button 
          variant="outlined" 
          sx={{ mt: 1 }}
          onClick={() => window.location.href = 'mailto:post@gumbox.no'}
        >
          {t('contactCustomerService')}
        </Button>
      </Box>
    </Container>
  );
}