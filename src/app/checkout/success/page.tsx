'use client';

import { Container, Typography, Box, Card, CardContent, Button, Chip, Stack, Alert } from '@mui/material';
import { CheckCircle, Email, LocalShipping, CalendarToday } from '@mui/icons-material';
import { useSearchParams } from 'next/navigation';
import { motion } from 'framer-motion';
import Link from 'next/link';

const MotionBox = motion.create(Box);
const MotionCard = motion.create(Card);

export default function CheckoutSuccessPage() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get('session_id');

  return (
    <Container maxWidth="md">
      <Box sx={{ py: 8, textAlign: 'center' }}>
        {/* Success Animation */}
        <MotionBox
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          sx={{ mb: 4 }}
        >
          <CheckCircle 
            sx={{ 
              fontSize: 80, 
              color: 'success.main',
              filter: 'drop-shadow(0 4px 8px rgba(76, 175, 80, 0.3))'
            }} 
          />
        </MotionBox>

        {/* Header */}
        <Typography variant="h2" gutterBottom sx={{ fontWeight: 'bold', color: 'success.main' }}>
          Takk for din bestilling!
        </Typography>
        <Typography variant="h5" sx={{ mb: 6, color: 'text.secondary' }}>
          Din GumBox-reise starter nå 🎉
        </Typography>

        {/* Order Confirmation */}
        <MotionCard
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          sx={{ mb: 4, textAlign: 'left' }}
        >
          <CardContent sx={{ p: 4 }}>
            <Typography variant="h5" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Email sx={{ color: 'primary.main' }} />
              Bekreftelse Sendt
            </Typography>
            <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.6 }}>
              Vi har sendt en bekreftelse til din e-post med alle detaljene om din bestilling.
            </Typography>

            {sessionId && (
              <Alert severity="info" sx={{ mb: 3 }}>
                <Typography variant="body2">
                  <strong>Referansenummer:</strong> {sessionId}
                </Typography>
              </Alert>
            )}

            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' }, gap: 3 }}>
              <Box sx={{ textAlign: 'center', p: 2, bgcolor: 'grey.50', borderRadius: 2 }}>
                <LocalShipping sx={{ fontSize: 40, color: 'primary.main', mb: 1 }} />
                <Typography variant="h6" gutterBottom>
                  Levering
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  3-5 virkedager
                </Typography>
                <Chip label="Gratis frakt" size="small" color="success" sx={{ mt: 1 }} />
              </Box>

              <Box sx={{ textAlign: 'center', p: 2, bgcolor: 'grey.50', borderRadius: 2 }}>
                <CalendarToday sx={{ fontSize: 40, color: 'secondary.main', mb: 1 }} />
                <Typography variant="h6" gutterBottom>
                  Neste Boks
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Om 1 måned
                </Typography>
                <Chip label="Automatisk" size="small" color="primary" sx={{ mt: 1 }} />
              </Box>

              <Box sx={{ textAlign: 'center', p: 2, bgcolor: 'grey.50', borderRadius: 2 }}>
                <CheckCircle sx={{ fontSize: 40, color: 'success.main', mb: 1 }} />
                <Typography variant="h6" gutterBottom>
                  Status
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Bekreftet
                </Typography>
                <Chip label="Aktiv" size="small" color="success" sx={{ mt: 1 }} />
              </Box>
            </Box>
          </CardContent>
        </MotionCard>

        {/* What's Next */}
        <MotionCard
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          sx={{ mb: 6, background: 'linear-gradient(135deg, #FF4DA1 0%, #FFD23F 100%)', color: 'white' }}
        >
          <CardContent sx={{ p: 4 }}>
            <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold' }}>
              Hva skjer nå?
            </Typography>
            <Stack spacing={2} sx={{ textAlign: 'left' }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Box sx={{ 
                  width: 32, 
                  height: 32, 
                  borderRadius: '50%', 
                  bgcolor: 'rgba(255,255,255,0.2)', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  color: 'white',
                  fontWeight: 'bold'
                }}>
                  1
                </Box>
                <Typography variant="body1">
                  Vi forbereder din første GumBox med de beste tyggegummiene fra hele verden
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Box sx={{ 
                  width: 32, 
                  height: 32, 
                  borderRadius: '50%', 
                  bgcolor: 'rgba(255,255,255,0.2)', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  color: 'white',
                  fontWeight: 'bold'
                }}>
                  2
                </Box>
                <Typography variant="body1">
                  Din boks sendes innen 2-3 virkedager med gratis frakt
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Box sx={{ 
                  width: 32, 
                  height: 32, 
                  borderRadius: '50%', 
                  bgcolor: 'rgba(255,255,255,0.2)', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  color: 'white',
                  fontWeight: 'bold'
                }}>
                  3
                </Box>
                <Typography variant="body1">
                  Nyt din første smaksopplevelse og vent på neste måneds overraskelse!
                </Typography>
              </Box>
            </Stack>
          </CardContent>
        </MotionCard>

        {/* Action Buttons */}
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center">
          <Button 
            component={Link}
            href="/"
            variant="contained" 
            size="large"
            sx={{ px: 4 }}
          >
            Tilbake til Hjem
          </Button>
          <Button 
            component={Link}
            href="/om-oss"
            variant="outlined" 
            size="large"
            sx={{ px: 4 }}
          >
            Om Oss
          </Button>
        </Stack>

        {/* Support */}
        <Box sx={{ mt: 6, p: 3, bgcolor: 'grey.50', borderRadius: 2 }}>
          <Typography variant="h6" gutterBottom>
            Trenger du hjelp?
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
            Vårt supportteam er her for å hjelpe deg med alle spørsmål
          </Typography>
          <Button variant="text" color="primary">
            Kontakt Support
          </Button>
        </Box>
      </Box>
    </Container>
  );
}