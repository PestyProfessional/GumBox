import { createTheme } from '@mui/material/styles';

// GumBox brand colors - inspired by TokyoTreat analysis and gum aesthetics
const brandColors = {
  primary: {
    main: '#F94F9B', // Bubblegum Pink - main CTA color
    light: '#FF7AB8',
    dark: '#D63A7C',
    contrastText: '#FFFFFF',
  },
  secondary: {
    main: '#2E8BFF', // Chewing Gum Blue - accents and secondary CTAs
    light: '#5BA3FF',
    dark: '#1A73E8',
    contrastText: '#FFFFFF',
  },
  tertiary: {
    main: '#FFD43B', // Candy Yellow - background accents and highlights
    light: '#FFDD66',
    dark: '#E6C035',
    contrastText: '#1A1A1A',
  },
  success: {
    main: '#6FD672', // Fresh Green - trust badges and success states
    light: '#8FE394',
    dark: '#4CAF50',
    contrastText: '#FFFFFF',
  },
};

// Clean grayscale following TokyoTreat patterns
const grayScale = {
  50: '#F7F7F7',  // Light background
  100: '#EEEEEE',
  200: '#E0E0E0',
  300: '#BDBDBD',
  400: '#9E9E9E',
  500: '#757575',
  600: '#616161',
  700: '#424242',
  800: '#212121',
  900: '#1A1A1A',  // Primary text color
};

export const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  palette: {
    primary: brandColors.primary,
    secondary: brandColors.secondary,
    success: brandColors.success,
    warning: {
      main: brandColors.tertiary.main,
      light: brandColors.tertiary.light,
      dark: brandColors.tertiary.dark,
      contrastText: brandColors.tertiary.contrastText,
    },
    grey: grayScale,
    background: {
      default: '#FFFFFF', // Clean white background
      paper: '#FFFFFF',
    },
    text: {
      primary: '#1A1A1A',
      secondary: '#757575',
    },
  },
  typography: {
    fontFamily: '"Rubik", "Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '3rem', // 48px
      fontWeight: 700,
      lineHeight: 1.1,
      letterSpacing: '-0.02em',
      '@media (max-width:600px)': {
        fontSize: '2rem', // 32px on mobile
      },
    },
    h2: {
      fontSize: '2rem', // 32px
      fontWeight: 600,
      lineHeight: 1.2,
      letterSpacing: '-0.01em',
      '@media (max-width:600px)': {
        fontSize: '1.5rem', // 24px on mobile
      },
    },
    h3: {
      fontSize: '1.5rem', // 24px
      fontWeight: 600,
      lineHeight: 1.3,
      '@media (max-width:600px)': {
        fontSize: '1.25rem', // 20px on mobile
      },
    },
    h4: {
      fontSize: '1.25rem', // 20px
      fontWeight: 600,
      lineHeight: 1.4,
    },
    h5: {
      fontSize: '1.125rem', // 18px
      fontWeight: 600,
      lineHeight: 1.4,
    },
    h6: {
      fontSize: '1rem', // 16px
      fontWeight: 600,
      lineHeight: 1.4,
    },
    subtitle1: {
      fontSize: '1.125rem',
      fontWeight: 400,
      lineHeight: 1.6,
    },
    subtitle2: {
      fontSize: '1rem',
      fontWeight: 400,
      lineHeight: 1.6,
    },
    body1: {
      fontSize: '1rem',
      fontWeight: 400,
      lineHeight: 1.6,
    },
    body2: {
      fontSize: '0.875rem',
      fontWeight: 400,
      lineHeight: 1.6,
    },
    button: {
      fontSize: '1rem',
      fontWeight: 600,
      textTransform: 'none',
      letterSpacing: '0.01em',
    },
  },
  shape: {
    borderRadius: 12, // More rounded like TokyoTreat
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 50, // Full pill shape inspired by TokyoTreat
          padding: '0.875rem 1.75rem',
          fontSize: '1rem',
          fontWeight: 600,
          textTransform: 'none',
          letterSpacing: '0.01em',
          boxShadow: '0 2px 8px rgba(249, 79, 155, 0.2)',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          '&:hover': {
            transform: 'translateY(-2px)',
            boxShadow: '0 8px 24px rgba(249, 79, 155, 0.3)',
          }
        },
        contained: {
          background: 'linear-gradient(135deg, #F94F9B 0%, #FF7AB8 100%)',
          color: '#FFFFFF',
          '&:hover': {
            background: 'linear-gradient(135deg, #D63A7C 0%, #F94F9B 100%)',
            transform: 'translateY(-2px)',
            boxShadow: '0 8px 24px rgba(249, 79, 155, 0.4)',
          }
        },
        containedSecondary: {
          background: 'linear-gradient(135deg, #2E8BFF 0%, #5BA3FF 100%)',
          color: '#FFFFFF',
          '&:hover': {
            background: 'linear-gradient(135deg, #1A73E8 0%, #2E8BFF 100%)',
            boxShadow: '0 8px 24px rgba(46, 139, 255, 0.4)',
          }
        },
        outlined: {
          borderWidth: 2,
          borderColor: '#F94F9B',
          color: '#F94F9B',
          '&:hover': {
            borderWidth: 2,
            backgroundColor: 'rgba(249, 79, 155, 0.08)',
            borderColor: '#D63A7C',
            color: '#D63A7C',
          }
        },
        sizeLarge: {
          padding: '1.125rem 2.5rem',
          fontSize: '1.125rem',
          fontWeight: 700,
          borderRadius: 50,
        },
        sizeSmall: {
          padding: '0.625rem 1.25rem',
          fontSize: '0.875rem',
          borderRadius: 50,
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 16,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
          borderRadius: 16,
          border: '1px solid rgba(0,0,0,0.04)',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          '&:hover': {
            transform: 'translateY(-4px)',
            boxShadow: '0 8px 32px rgba(0,0,0,0.12)',
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(10px)',
          borderBottom: '1px solid rgba(0,0,0,0.08)',
          boxShadow: '0 2px 12px rgba(0,0,0,0.04)',
          color: '#1A1A1A',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none', // Remove default MUI gradient
        },
        elevation1: {
          boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
        },
        elevation2: {
          boxShadow: '0 4px 16px rgba(0,0,0,0.08)',
        },
        elevation3: {
          boxShadow: '0 8px 32px rgba(0,0,0,0.12)',
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          paddingLeft: '1rem',
          paddingRight: '1rem',
          '@media (min-width: 600px)': {
            paddingLeft: '1.5rem',
            paddingRight: '1.5rem',
          },
          '@media (min-width: 1600px)': {
            paddingLeft: '2rem',
            paddingRight: '2rem',
          },
        },
        maxWidthLg: {
          maxWidth: '1200px',
        },
        maxWidthXl: {
          maxWidth: '1400px',
        },
      },
    },
  },
});