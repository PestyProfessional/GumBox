'use client';

import { useEffect } from 'react';
import { Container, Typography, Box, Button, Stack, Alert } from '@mui/material';
import { Refresh, Home, BugReport } from '@mui/icons-material';
import Link from 'next/link';
import Image from 'next/image';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Application error:', error);
  }, [error]);

  return (
    <Container maxWidth="md" sx={{ py: 8, textAlign: 'center' }}>
      <Box sx={{ minHeight: '60vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        {/* Error Illustration */}
        <Box sx={{ mb: 4, position: 'relative', width: 300, height: 200 }}>
          <Image
            src="/images/RosaPerf.png"
            alt="GumBox - Noe gikk galt"
            fill
            sizes="(max-width: 480px) 250px, (max-width: 768px) 300px, 300px"
            style={{
              objectFit: 'contain',
              opacity: 0.6,
            }}
            quality={80}
          />
        </Box>

        {/* Error Message */}
        <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', color: 'error.main', mb: 2 }}>
          Oops! Noe gikk galt
        </Typography>
        
        <Typography variant="h6" sx={{ mb: 4, color: 'text.secondary', maxWidth: 500 }}>
          En uventet feil oppstod. Vi beklager ulempen dette måtte medføre.
        </Typography>

        {/* Error Details for Development */}
        {process.env.NODE_ENV === 'development' && (
          <Alert severity="error" sx={{ mb: 4, textAlign: 'left', maxWidth: 600 }}>
            <Typography variant="body2" sx={{ fontFamily: 'monospace', wordBreak: 'break-word' }}>
              {error.message}
            </Typography>
            {error.digest && (
              <Typography variant="caption" sx={{ mt: 1, display: 'block' }}>
                Error ID: {error.digest}
              </Typography>
            )}
          </Alert>
        )}

        {/* Action Buttons */}
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ mb: 6 }}>
          <Button
            onClick={reset}
            variant="contained"
            size="large"
            startIcon={<Refresh />}
            sx={{ px: 4, py: 1.5 }}
          >
            Prøv Igjen
          </Button>
          
          <Button
            component={Link}
            href="/"
            variant="outlined"
            size="large"
            startIcon={<Home />}
            sx={{ px: 4, py: 1.5 }}
          >
            Tilbake til Hjem
          </Button>
        </Stack>

        {/* Support Information */}
        <Box sx={{ bgcolor: 'grey.50', borderRadius: 2, p: 3, maxWidth: 600 }}>
          <Typography variant="h6" gutterBottom sx={{ color: 'text.primary' }}>
            Trenger du hjelp?
          </Typography>
          <Typography variant="body2" sx={{ mb: 2, color: 'text.secondary' }}>
            Hvis problemet vedvarer, vennligst kontakt vårt supportteam
          </Typography>
          <Button
            variant="text"
            startIcon={<BugReport />}
            sx={{ color: 'primary.main' }}
          >
            Rapporter Problem
          </Button>
        </Box>
      </Box>
    </Container>
  );
}