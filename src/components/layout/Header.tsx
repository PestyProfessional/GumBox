'use client';

import { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, Button, Container, Box, IconButton, Drawer, List, ListItem, ListItemButton, ListItemText, useTheme, useMediaQuery } from '@mui/material';
import { Menu as MenuIcon, Close as CloseIcon } from '@mui/icons-material';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import ShoppingCart from '@/components/ui/ShoppingCart';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleAbonnementClick = () => {
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

  const navItems = [
    { name: 'Abonnement', href: '#plan-selection' },
    { name: 'Om Oss', href: '/om-oss' },
  ];

  const drawer = (
    <Box sx={{ width: 250 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', p: 2 }}>
        <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'primary.main' }}>
          GumBox
        </Typography>
        <IconButton onClick={handleDrawerToggle}>
          <CloseIcon />
        </IconButton>
      </Box>
      
      <List>
        {navItems.map((item) => (
          <ListItem key={item.name} disablePadding>
            {item.name === 'Abonnement' ? (
              <ListItemButton 
                onClick={() => {
                  handleDrawerToggle();
                  handleAbonnementClick();
                }}
                sx={{ 
                  color: 'text.primary',
                  fontWeight: 'normal'
                }}
              >
                <ListItemText primary={item.name} />
              </ListItemButton>
            ) : (
              <Link href={item.href} passHref style={{ width: '100%', textDecoration: 'none' }}>
                <ListItemButton 
                  onClick={handleDrawerToggle}
                  sx={{ 
                    color: pathname === item.href ? 'primary.main' : 'text.primary',
                    fontWeight: pathname === item.href ? 'bold' : 'normal'
                  }}
                >
                  <ListItemText primary={item.name} />
                </ListItemButton>
              </Link>
            )}
          </ListItem>
        ))}
        
        <ListItem disablePadding sx={{ mt: 2, px: 2 }}>
          <Button 
            variant="contained" 
            fullWidth 
            onClick={() => {
              handleDrawerToggle();
              handleAbonnementClick();
            }}
            sx={{ py: 1.5 }}
          >
            Start Abonnement
          </Button>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <>
      <AppBar 
        position="fixed" 
        component="header"
        role="banner"
        sx={{ 
          backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.6)' : 'rgba(255, 255, 255, 0.3)',
          backdropFilter: scrolled ? 'blur(10px)' : 'blur(5px)',
          borderBottom: scrolled ? '1px solid' : 'none',
          borderColor: 'rgba(0, 0, 0, 0.1)',
          boxShadow: scrolled ? '0 2px 20px rgba(0,0,0,0.05)' : 'none',
          transition: 'all 0.3s ease-in-out',
        }}
      >
        <Container maxWidth="lg">
          <Toolbar sx={{ display: 'flex', alignItems: 'center', py: 1.5, gap: 2 }}>
            {/* Logo - Left */}
            <Link href="/" style={{ textDecoration: 'none', outline: 'none' }} aria-label="GumBox hjem">
              <Typography 
                variant="h5" 
                component="div" 
                sx={{ 
                  fontWeight: 'bold',
                  background: 'linear-gradient(135deg, #F94F9B 0%, #2E8BFF 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  outline: 'none',
                  '&:focus': {
                    outline: 'none',
                  },
                  '&:active': {
                    outline: 'none',
                  }
                }}
              >
                GumBox
              </Typography>
            </Link>

            {/* Desktop Navigation - Center */}
            {!isMobile && (
              <>
                {/* Spacer to push navigation to center */}
                <Box sx={{ flexGrow: 1 }} />
                
                <Box component="nav" role="navigation" sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
                  {navItems.map((item) => {
                    if (item.name === 'Abonnement') {
                      return (
                        <Button 
                          key={item.name}
                          onClick={handleAbonnementClick}
                          sx={{ 
                            color: 'text.primary',
                            fontWeight: 'normal',
                            fontSize: '1rem',
                            px: 2,
                            py: 1,
                            '&:hover': {
                              backgroundColor: 'rgba(249, 79, 155, 0.08)',
                            }
                          }}
                        >
                          {item.name}
                        </Button>
                      );
                    } else {
                      return (
                        <Link key={item.name} href={item.href} style={{ textDecoration: 'none' }}>
                          <Button 
                            sx={{ 
                              color: pathname === item.href ? 'primary.main' : 'text.primary',
                              fontWeight: pathname === item.href ? 'bold' : 'normal',
                              fontSize: '1rem',
                              px: 2,
                              py: 1,
                              '&:hover': {
                                backgroundColor: 'rgba(249, 79, 155, 0.08)',
                              }
                            }}
                          >
                            {item.name}
                          </Button>
                        </Link>
                      );
                    }
                  })}
                </Box>
                
                {/* Spacer to center navigation */}
                <Box sx={{ flexGrow: 1 }} />
                
                {/* Shopping Cart - Right */}
                <ShoppingCart />
              </>
            )}

            {/* Mobile Navigation */}
            {isMobile && (
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <ShoppingCart />
                <IconButton 
                  onClick={handleDrawerToggle}
                  aria-label="Åpne navigasjonsmeny"
                  sx={{ 
                    color: 'text.primary',
                    '&:hover': {
                      backgroundColor: 'rgba(249, 79, 155, 0.08)',
                    }
                  }}
                >
                  <MenuIcon />
                </IconButton>
              </Box>
            )}
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { 
            boxSizing: 'border-box', 
            width: 250,
            borderRadius: '20px 0 0 20px',
            border: 'none',
            boxShadow: '0 8px 32px rgba(0,0,0,0.15)'
          },
        }}
      >
        {drawer}
      </Drawer>

      {/* Spacer to prevent content from hiding under fixed header */}
      <Toolbar />
    </>
  );
}