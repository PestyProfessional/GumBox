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
                sx={{ cursor: 'pointer' }}
              >
                Abonnement
              </Link>
              <Link href="/om-oss" color="inherit" underline="hover">
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
              <Link href="#" color="inherit" underline="hover">
                FAQ
              </Link>
              <Link href="#" color="inherit" underline="hover">
                Kontakt
              </Link>
              <Link href="#" color="inherit" underline="hover">
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
              <Link href="#" color="inherit" underline="hover">
                Personvern
              </Link>
              <Link href="#" color="inherit" underline="hover">
                Vilkår
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
              +47 123 45 678
            </Typography>
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