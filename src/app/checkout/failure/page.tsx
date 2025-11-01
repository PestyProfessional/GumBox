'use client';

import { Container, Typography, Box, Card, CardContent, Button, Stack, Alert } from '@mui/material';
import { Error, Refresh, Support, ArrowBack } from '@mui/icons-material';
import { motion } from 'framer-motion';
import Link from 'next/link';

const MotionBox = motion.create(Box);
const MotionCard = motion.create(Card);

export default function CheckoutFailurePage() {
  return (
    <Container maxWidth="md">
      <Box sx={{ py: 8, textAlign: 'center' }}>
        {/* Error Icon */}
        <MotionBox
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          sx={{ mb: 4 }}
        >
          <Error 
            sx={{ 
              fontSize: 80, 
              color: 'error.main',
              filter: 'drop-shadow(0 4px 8px rgba(244, 67, 54, 0.3))'
            }} 
          />
        </MotionBox>

        {/* Header */}
        <Typography variant="h2" gutterBottom sx={{ fontWeight: 'bold', color: 'error.main' }}>
          Betalingen Feilet
        </Typography>
        <Typography variant="h5" sx={{ mb: 6, color: 'text.secondary' }}>
          Det oppstod et problem under betalingsprosessen
        </Typography>

        {/* Error Information */}
        <MotionCard
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          sx={{ mb: 4 }}
        >
          <CardContent sx={{ p: 4 }}>
            <Alert severity="error" sx={{ mb: 3 }}>
              Betalingen kunne ikke gjennomføres. Ingen beløp er trukket fra kontoen din.
            </Alert>

            <Typography variant="h6" gutterBottom>
              Mulige årsaker:
            </Typography>
            <Box sx={{ textAlign: 'left', mb: 4 }}>
              <Typography variant="body2" sx={{ mb: 1 }}>
                • Utilstrekkelig saldo på konto eller kort
              </Typography>
              <Typography variant="body2" sx={{ mb: 1 }}>
                • Kortet er utløpt eller blokkert
              </Typography>
              <Typography variant="body2" sx={{ mb: 1 }}>
                • Feil sikkerhetskode (CVV) eller PIN
              </Typography>
              <Typography variant="body2" sx={{ mb: 1 }}>
                • Teknisk feil hos betalingsleverandøren
              </Typography>
              <Typography variant="body2">
                • Betalingen ble avvist av banken din
              </Typography>
            </Box>

            <Typography variant="body1" sx={{ fontWeight: 'medium', color: 'text.primary' }}>
              Vi anbefaler at du kontrollerer betalingsinformasjonen og prøver igjen.
            </Typography>
          </CardContent>
        </MotionCard>

        {/* Solutions */}
        <MotionCard
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          sx={{ mb: 4, bgcolor: 'info.50' }}
        >
          <CardContent sx={{ p: 4 }}>
            <Typography variant="h6" gutterBottom sx={{ color: 'info.main' }}>
              Hva kan du gjøre?
            </Typography>
            <Stack spacing={2} sx={{ textAlign: 'left' }}>
              <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                <Box sx={{ 
                  width: 24, 
                  height: 24, 
                  borderRadius: '50%', 
                  bgcolor: 'info.main', 
                  color: 'white',
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  fontSize: '0.8rem',
                  fontWeight: 'bold',
                  mt: 0.5
                }}>
                  1
                </Box>
                <Box>
                  <Typography variant="body1" sx={{ fontWeight: 'medium', mb: 0.5 }}>
                    Kontroller betalingsinformasjon
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Sjekk at kortnummer, utløpsdato og sikkerhetskode er korrekt
                  </Typography>
                </Box>
              </Box>
              
              <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                <Box sx={{ 
                  width: 24, 
                  height: 24, 
                  borderRadius: '50%', 
                  bgcolor: 'info.main', 
                  color: 'white',
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  fontSize: '0.8rem',
                  fontWeight: 'bold',
                  mt: 0.5
                }}>
                  2
                </Box>
                <Box>
                  <Typography variant="body1" sx={{ fontWeight: 'medium', mb: 0.5 }}>
                    Prøv en annen betalingsmetode
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Velg Klarna, Vipps eller et annet kort
                  </Typography>
                </Box>
              </Box>
              
              <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                <Box sx={{ 
                  width: 24, 
                  height: 24, 
                  borderRadius: '50%', 
                  bgcolor: 'info.main', 
                  color: 'white',
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  fontSize: '0.8rem',
                  fontWeight: 'bold',
                  mt: 0.5
                }}>
                  3
                </Box>
                <Box>
                  <Typography variant="body1" sx={{ fontWeight: 'medium', mb: 0.5 }}>
                    Kontakt banken din
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Banken kan ha blokkert transaksjonen av sikkerhetsgrunner
                  </Typography>
                </Box>
              </Box>
            </Stack>
          </CardContent>
        </MotionCard>

        {/* Action Buttons */}
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center" sx={{ mb: 6 }}>
          <Button 
            component={Link}
            href="/checkout"
            variant="contained" 
            size="large"
            startIcon={<Refresh />}
            sx={{ px: 4 }}
          >
            Prøv Igjen
          </Button>
          <Button 
            component={Link}
            href="/subscribe"
            variant="outlined" 
            size="large"
            startIcon={<ArrowBack />}
            sx={{ px: 4 }}
          >
            Velg Nytt Abonnement
          </Button>
        </Stack>

        {/* Support Section */}
        <MotionCard
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          sx={{ background: 'linear-gradient(135deg, #FF1B8D 0%, #FF4DA1 100%)', color: 'white' }}
        >
          <CardContent sx={{ p: 4 }}>
            <Typography variant="h5" gutterBottom sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1 }}>
              <Support />
              Fortsatt problemer?
            </Typography>
            <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.6 }}>
              Hvis du fortsatt opplever problemer med betalingen, er vårt supportteam klart til å hjelpe deg. 
              Vi kan hjelpe deg med å finne den beste løsningen for din situasjon.
            </Typography>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center">
              <Button 
                variant="contained" 
                sx={{ 
                  bgcolor: 'rgba(255,255,255,0.2)', 
                  '&:hover': { bgcolor: 'rgba(255,255,255,0.3)' } 
                }}
              >
                Kontakt Support
              </Button>
              <Button 
                variant="outlined" 
                sx={{ 
                  borderColor: 'rgba(255,255,255,0.5)', 
                  color: 'white',
                  '&:hover': { borderColor: 'white' } 
                }}
              >
                Live Chat
              </Button>
            </Stack>
          </CardContent>
        </MotionCard>

        {/* Alternative Actions */}
        <Box sx={{ mt: 6, textAlign: 'center' }}>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
            Eller utforsk andre alternativer:
          </Typography>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center">
            <Button component={Link} href="/" variant="text">
              Tilbake til Hjem
            </Button>
            <Button component={Link} href="/om-oss" variant="text">
              Om Oss
            </Button>
            <Button component={Link} href="/faq" variant="text">
              Se FAQ
            </Button>
          </Stack>
        </Box>
      </Box>
    </Container>
  );
}