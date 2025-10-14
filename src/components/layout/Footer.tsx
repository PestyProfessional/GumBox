'use client';

import { Box, Container, Typography, Link, Button } from '@mui/material';
import { usePathname, useRouter } from 'next/navigation';

export default function Footer() {
  const pathname = usePathname();
  const router = useRouter();

  const handleAbonnementClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (pathname === '/') {
      // We're on the home page, just scroll to plan selection
      document.getElementById('plan-selection')?.scrollIntoView({ behavior: 'smooth' });
    } else {
      // We're on another page, navigate to home page first
      router.push('/');
      // Wait a bit for navigation to complete, then scroll
      setTimeout(() => {
        document.getElementById('plan-selection')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };
  return (
    <Box sx={{ bgcolor: 'grey.900', color: 'white', py: 6, mt: 8 }}>
      <Container maxWidth="lg">
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '2fr 1fr 1fr 1fr 1fr' }, gap: 4 }}>
          {/* Company Info */}
          <Box>
            <Typography variant="h6" gutterBottom>
              GumBox
            </Typography>
            <Typography variant="body2" sx={{ mb: 2 }}>
              Kurerte produkter som inspirerer og gleder. 
              Levert til døren din hver måned.
            </Typography>
          </Box>

          {/* Quick Links */}
          <Box>
            <Typography variant="h6" gutterBottom>
              Lenker
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Link 
                href="#" 
                onClick={handleAbonnementClick}
                color="inherit" 
                underline="hover"
                sx={{ 
                  cursor: 'pointer',
                  '&:focus': {
                    outline: 'none',
                    textDecoration: 'underline'
                  }
                }}
              >
                Abonnement
              </Link>
              <Link 
                href="/om-oss" 
                color="inherit" 
                underline="hover"
                sx={{
                  '&:focus': {
                    outline: 'none',
                    textDecoration: 'underline'
                  }
                }}
              >
                Om Oss
              </Link>
            </Box>
          </Box>

          {/* Support */}
          <Box>
            <Typography variant="h6" gutterBottom>
              Kundeservice
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Link 
                href="#" 
                color="inherit" 
                underline="hover"
                sx={{
                  '&:focus': {
                    outline: 'none',
                    textDecoration: 'underline'
                  }
                }}
              >
                FAQ
              </Link>
              <Link 
                href="#" 
                color="inherit" 
                underline="hover"
                sx={{
                  '&:focus': {
                    outline: 'none',
                    textDecoration: 'underline'
                  }
                }}
              >
                Kontakt
              </Link>
              <Link 
                href="#" 
                color="inherit" 
                underline="hover"
                sx={{
                  '&:focus': {
                    outline: 'none',
                    textDecoration: 'underline'
                  }
                }}
              >
                Frakt & Retur
              </Link>
            </Box>
          </Box>

          {/* Legal */}
          <Box>
            <Typography variant="h6" gutterBottom>
              Juridisk
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Link 
                href="#" 
                color="inherit" 
                underline="hover"
                sx={{
                  '&:focus': {
                    outline: 'none',
                    textDecoration: 'underline'
                  }
                }}
              >
                Personvern
              </Link>
              <Link 
                href="#" 
                color="inherit" 
                underline="hover"
                sx={{
                  '&:focus': {
                    outline: 'none',
                    textDecoration: 'underline'
                  }
                }}
              >
                Vilkår
              </Link>
              <Link 
                href="/cookies" 
                color="inherit" 
                underline="hover"
                sx={{
                  '&:focus': {
                    outline: 'none',
                    textDecoration: 'underline'
                  }
                }}
              >
                Informasjonskapsler
              </Link>
            </Box>
          </Box>

          {/* Contact */}
          <Box>
            <Typography variant="h6" gutterBottom>
              Kontakt
            </Typography>
            <Typography variant="body2">
              post@gumbox.no
            </Typography>
            <Typography variant="body2">
              +47 979 57 676
            </Typography>
          </Box>
        </Box>

        {/* Payment Methods and Shipping */}
        <Box sx={{ borderTop: '1px solid', borderColor: 'grey.700', pt: 4, mt: 4 }}>
          <Box sx={{ 
            display: 'grid', 
            gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, 
            gap: 4, 
            mb: 4 
          }}>
            {/* Payment Methods */}
            <Box>
              <Typography variant="h6" gutterBottom sx={{ fontSize: '1rem', fontWeight: 600 }}>
                Trygge betalingsmetoder
              </Typography>
              <Box sx={{ 
                display: 'flex', 
                flexWrap: 'wrap', 
                gap: 2, 
                alignItems: 'center' 
              }}>
                <Box
                  component="img"
                  src="/images/CheckOut/visa-729c05c240c4bdb47b03ac81d9945bfe.svg"
                  alt="Visa"
                  sx={{ height: 24, width: 'auto' }}
                />
                <Box
                  component="img"
                  src="/images/CheckOut/mastercard-4d8844094130711885b5e41b28c9848f.svg"
                  alt="Mastercard"
                  sx={{ height: 24, width: 'auto' }}
                />
                <Box
                  component="img"
                  src="/images/CheckOut/amex-a49b82f46c5cd6a96a6e418a6ca1717c.svg"
                  alt="American Express"
                  sx={{ height: 24, width: 'auto' }}
                />
                <Box
                  component="img"
                  src="/images/CheckOut/klarna-531cd07130cfad7de4c678ef467cbeb7.svg"
                  alt="Klarna"
                  sx={{ height: 24, width: 'auto' }}
                />
                <Box
                  component="img"
                  src="/images/CheckOut/Vipps logo.svg"
                  alt="Vipps"
                  sx={{ height: 24, width: 'auto' }}
                />
              </Box>
            </Box>

            {/* Shipping Options */}
            <Box>
              <Typography variant="h6" gutterBottom sx={{ fontSize: '1rem', fontWeight: 600 }}>
                Rask levering med
              </Typography>
              <Box sx={{ 
                display: 'flex', 
                flexWrap: 'wrap', 
                gap: 2, 
                alignItems: 'center' 
              }}>
                <Box
                  component="img"
                  src="/images/shipping/logo-posten-round-30.svg"
                  alt="Posten"
                  sx={{ height: 30, width: 30 }}
                />
                <Box
                  component="img"
                  src="/images/shipping/logo-postnord-round-30.svg"
                  alt="PostNord"
                  sx={{ height: 30, width: 30 }}
                />
                <Box
                  component="img"
                  src="/images/shipping/helthjem.png"
                  alt="Helthjem"
                  sx={{ height: 30, width: 'auto' }}
                />
              </Box>
            </Box>
          </Box>
        </Box>

        {/* Copyright */}
        <Box sx={{ borderTop: '1px solid', borderColor: 'grey.700', pt: 3, mt: 4 }}>
          <Typography variant="body2" color="grey.400" align="center">
            © 2024 GumBox. Alle rettigheter reservert.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}