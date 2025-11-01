'use client';

import { Container, Typography, Box, Card, CardContent, Button, Stack, Alert } from '@mui/material';
import { Cancel, ArrowBack, HelpOutline } from '@mui/icons-material';
import { motion } from 'framer-motion';
import Link from 'next/link';

const MotionBox = motion.create(Box);
const MotionCard = motion.create(Card);

export default function CheckoutCancelPage() {
  return (
    <Container maxWidth="md">
      <Box sx={{ py: 8, textAlign: 'center' }}>
        {/* Cancel Icon */}
        <MotionBox
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          sx={{ mb: 4 }}
        >
          <Cancel 
            sx={{ 
              fontSize: 80, 
              color: 'warning.main',
              filter: 'drop-shadow(0 4px 8px rgba(255, 152, 0, 0.3))'
            }} 
          />
        </MotionBox>

        {/* Header */}
        <Typography variant="h2" gutterBottom sx={{ fontWeight: 'bold', color: 'warning.main' }}>
          Bestilling Avbrutt
        </Typography>
        <Typography variant="h5" sx={{ mb: 6, color: 'text.secondary' }}>
          Ingen bekymring, du kan prøve igjen når som helst
        </Typography>

        {/* Information */}
        <MotionCard
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          sx={{ mb: 4 }}
        >
          <CardContent sx={{ p: 4 }}>
            <Alert severity="info" sx={{ mb: 3 }}>
              Din bestilling ble avbrutt og ingen betaling er gjennomført.
            </Alert>

            <Typography variant="h6" gutterBottom>
              Hva skjedde?
            </Typography>
            <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.6 }}>
              Betalingen ble avbrutt enten av deg eller på grunn av et teknisk problem. 
              Dette kan skje av flere årsaker:
            </Typography>

            <Box sx={{ textAlign: 'left', mb: 4 }}>
              <Typography variant="body2" sx={{ mb: 1 }}>
                • Du valgte å avbryte betalingen
              </Typography>
              <Typography variant="body2" sx={{ mb: 1 }}>
                • Det oppstod et problem med betalingsleverandøren
              </Typography>
              <Typography variant="body2" sx={{ mb: 1 }}>
                • Nettverksforbindelsen ble avbrutt
              </Typography>
              <Typography variant="body2">
                • Betalingsinformasjonen var ikke gyldig
              </Typography>
            </Box>

            <Typography variant="body1" sx={{ fontWeight: 'medium' }}>
              Vi har ikke belastet kortet ditt eller kontoen din.
            </Typography>
          </CardContent>
        </MotionCard>

        {/* Action Buttons */}
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center" sx={{ mb: 6 }}>
          <Button 
            component={Link}
            href="/checkout"
            variant="contained" 
            size="large"
            startIcon={<ArrowBack />}
            sx={{ px: 4 }}
          >
            Prøv Igjen
          </Button>
          <Button 
            component={Link}
            href="/subscribe"
            variant="outlined" 
            size="large"
            sx={{ px: 4 }}
          >
            Se Abonnementer
          </Button>
          <Button 
            component={Link}
            href="/"
            variant="text" 
            size="large"
          >
            Tilbake til Hjem
          </Button>
        </Stack>

        {/* Help Section */}
        <MotionCard
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          sx={{ background: 'linear-gradient(135deg, #6F2DBD 0%, #A8D5BA 100%)', color: 'white' }}
        >
          <CardContent sx={{ p: 4 }}>
            <Typography variant="h5" gutterBottom sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1 }}>
              <HelpOutline />
              Trenger du hjelp?
            </Typography>
            <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.6 }}>
              Hvis du opplever problemer med betalingen eller har spørsmål om abonnementet, 
              er vårt supportteam klart til å hjelpe deg.
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
                component={Link}
                href="/faq"
                variant="outlined" 
                sx={{ 
                  borderColor: 'rgba(255,255,255,0.5)', 
                  color: 'white',
                  '&:hover': { borderColor: 'white' } 
                }}
              >
                Se FAQ
              </Button>
            </Stack>
          </CardContent>
        </MotionCard>

        {/* Tips */}
        <Box sx={{ mt: 6, p: 3, bgcolor: 'grey.50', borderRadius: 2, textAlign: 'left' }}>
          <Typography variant="h6" gutterBottom>
            Tips for vellykket betaling:
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
            • Sjekk at alle felt er fylt ut korrekt
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
            • Sørg for at du har tilstrekkelig saldo eller kreditt
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
            • Kontroller at internetttilkoblingen er stabil
          </Typography>
          <Typography variant="body2" color="text.secondary">
            • Prøv en annen betalingsmetode hvis problemet vedvarer
          </Typography>
        </Box>
      </Box>
    </Container>
  );
}