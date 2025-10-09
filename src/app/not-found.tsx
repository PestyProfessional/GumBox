import { Container, Typography, Box, Button, Stack } from '@mui/material';
import { Home, Search, ArrowBack } from '@mui/icons-material';
import Link from 'next/link';
import Image from 'next/image';

export default function NotFound() {
  return (
    <Container maxWidth="md" sx={{ py: 8, textAlign: 'center' }}>
      <Box sx={{ minHeight: '60vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        {/* 404 Illustration */}
        <Box sx={{ mb: 4, position: 'relative', width: 300, height: 200 }}>
          <Image
            src="/images/BlaaPerf.png"
            alt="GumBox - Side ikke funnet"
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
        <Typography variant="h1" sx={{ fontSize: { xs: '4rem', md: '6rem' }, fontWeight: 'bold', color: 'primary.main', mb: 2 }}>
          404
        </Typography>
        
        <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', color: 'text.primary', mb: 2 }}>
          Oops! Siden ble ikke funnet
        </Typography>
        
        <Typography variant="h6" sx={{ mb: 4, color: 'text.secondary', maxWidth: 500 }}>
          Siden du leter etter eksisterer ikke eller er flyttet. La oss hjelpe deg å finne det du leter etter!
        </Typography>

        {/* Action Buttons */}
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ mb: 6 }}>
          <Button
            component={Link}
            href="/"
            variant="contained"
            size="large"
            startIcon={<Home />}
            sx={{ px: 4, py: 1.5 }}
          >
            Tilbake til Hjem
          </Button>
          
          <Button
            component={Link}
            href="/om-oss"
            variant="outlined"
            size="large"
            startIcon={<Search />}
            sx={{ px: 4, py: 1.5 }}
          >
            Om Oss
          </Button>
        </Stack>

        {/* Helpful Links */}
        <Box sx={{ bgcolor: 'grey.50', borderRadius: 2, p: 3, maxWidth: 600 }}>
          <Typography variant="h6" gutterBottom sx={{ color: 'text.primary' }}>
            Populære sider
          </Typography>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center">
            <Button component={Link} href="/#plan-selection" variant="text" size="small">
              Velg Abonnement
            </Button>
            <Button component={Link} href="/om-oss" variant="text" size="small">
              Om GumBox
            </Button>
            <Button component={Link} href="/checkout" variant="text" size="small">
              Checkout
            </Button>
          </Stack>
        </Box>
      </Box>
    </Container>
  );
}