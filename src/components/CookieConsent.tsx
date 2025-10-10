'use client';

import { useState, useEffect } from 'react';
import { 
  Box, 
  Typography, 
  Button, 
  Paper, 
  Link, 
  Collapse,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Switch,
  FormControlLabel
} from '@mui/material';
import { ExpandMore } from '@mui/icons-material';

interface CookieConsent {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
}

declare global {
  interface Window {
    gtag: (
      command: 'consent' | 'config' | 'event',
      targetId: string,
      config?: Record<string, any>
    ) => void;
    fbq: (
      command: 'consent' | 'init' | 'track' | 'trackCustom',
      eventNameOrPixelId: string,
      parameters?: Record<string, any>
    ) => void;
  }
}

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [consent, setConsent] = useState<CookieConsent>({
    necessary: true, // Always true, cannot be changed
    analytics: false,
    marketing: false
  });

  useEffect(() => {
    // Check if user has already given consent
    const hasConsent = localStorage.getItem('gumbox-cookie-consent');
    if (!hasConsent) {
      setShowBanner(true);
    }
  }, []);

  const handleAcceptAll = () => {
    const fullConsent = {
      necessary: true,
      analytics: true,
      marketing: true,
      timestamp: new Date().toISOString()
    };
    
    localStorage.setItem('gumbox-cookie-consent', JSON.stringify(fullConsent));
    setShowBanner(false);
    
    // Initialize analytics/marketing scripts here if needed
    if (typeof window !== 'undefined') {
      if (window.gtag) {
        window.gtag('consent', 'update', { 
          analytics_storage: 'granted', 
          ad_storage: 'granted' 
        });
      }
      
      if (window.fbq) {
        window.fbq('consent', 'grant');
      }
      
      // Reload page to initialize all tracking services
      window.location.reload();
    }
  };

  const handleAcceptNecessary = () => {
    const necessaryConsent = {
      necessary: true,
      analytics: false,
      marketing: false,
      timestamp: new Date().toISOString()
    };
    
    localStorage.setItem('gumbox-cookie-consent', JSON.stringify(necessaryConsent));
    setShowBanner(false);
  };

  const handleUpdateConsent = () => {
    const selectedConsent = {
      ...consent,
      timestamp: new Date().toISOString()
    };
    
    localStorage.setItem('gumbox-cookie-consent', JSON.stringify(selectedConsent));
    setShowBanner(false);
    
    // Update analytics/marketing scripts based on consent
    if (typeof window !== 'undefined') {
      if (window.gtag) {
        window.gtag('consent', 'update', { 
          analytics_storage: consent.analytics ? 'granted' : 'denied', 
          ad_storage: consent.marketing ? 'granted' : 'denied' 
        });
      }
      
      if (window.fbq) {
        if (consent.marketing) {
          window.fbq('consent', 'grant');
        } else {
          window.fbq('consent', 'revoke');
        }
      }
      
      // Reload page to update all tracking services consent
      window.location.reload();
    }
  };

  const handleConsentChange = (type: keyof CookieConsent) => (event: React.ChangeEvent<HTMLInputElement>) => {
    if (type === 'necessary') return; // Cannot change necessary cookies
    
    setConsent(prev => ({
      ...prev,
      [type]: event.target.checked
    }));
  };

  if (!showBanner) return null;

  return (
    <Box
      sx={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 9999,
        background: 'rgba(26, 26, 26, 0.85)',
        backdropFilter: 'blur(8px)',
      }}
    >
      <Paper
        sx={{
          p: 3,
          m: 2,
          borderRadius: 3,
          maxWidth: '500px',
          marginLeft: 'auto',
          marginRight: 'auto',
          position: 'relative',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.15)',
          border: '2px solid rgba(249, 79, 155, 0.2)',
          background: 'linear-gradient(135deg, #FFFFFF 0%, #F7F7F7 100%)',
        }}
      >
        <Typography 
          variant="h6" 
          gutterBottom 
          sx={{ 
            fontWeight: 700, 
            mb: 2,
            color: '#1A1A1A',
            fontSize: '1.125rem',
            fontFamily: '"Rubik", sans-serif'
          }}
        >
          Vi tar personvern på alvor
        </Typography>
        
        <Typography 
          variant="body2" 
          sx={{ 
            mb: 2, 
            lineHeight: 1.6, 
            color: '#757575',
            fontSize: '0.875rem'
          }}
        >
          Vi ønsker at du skal være trygg når du bruker dette nettstedet. Vi 
          benytter cookies for å sikre at du får en best mulig brukeropplevelse 
          og for å hente inn statistikk slik at vi kan analysere hvordan 
          nettstedet benyttes. Vi bruker også cookies for å kunne målrette 
          annonser til deg, også på andre nettsteder. Trykk "Godta" for å 
          akseptere vår bruk av cookies.
        </Typography>

        <Box sx={{ mb: 2 }}>
          <Link 
            href="https://business.safety.google/privacy/" 
            target="_blank" 
            rel="noopener noreferrer"
            sx={{ 
              fontSize: '0.875rem',
              textDecoration: 'underline',
              color: '#F94F9B',
              fontWeight: 500,
              '&:hover': {
                textDecoration: 'none',
                color: '#D63A7C'
              }
            }}
          >
            Googles retningslinjer for personvern
          </Link>
        </Box>

        <Collapse in={showDetails}>
          <Box sx={{ mb: 3 }}>
            <Accordion 
              sx={{ 
                boxShadow: 'none', 
                border: '1px solid #E0E0E0',
                borderRadius: 2,
                '&:before': { display: 'none' }
              }}
            >
              <AccordionSummary 
                expandIcon={<ExpandMore sx={{ color: '#F94F9B' }} />}
                sx={{ 
                  '& .MuiAccordionSummary-content': { 
                    alignItems: 'center' 
                  }
                }}
              >
                <Typography 
                  variant="body2" 
                  sx={{ 
                    fontWeight: 600,
                    color: '#1A1A1A',
                    fontSize: '0.875rem'
                  }}
                >
                  ▶ Nødvendige
                </Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ pt: 0 }}>
                <Typography 
                  variant="body2" 
                  sx={{ 
                    mb: 2, 
                    color: '#757575',
                    lineHeight: 1.5
                  }}
                >
                  Nødvendige informasjonskapsler hjelper med å gjøre en hjemmeside 
                  brukbar ved å aktivere grunnleggende funksjoner, slik som side-navigasjon 
                  og tilgang til sikre områder av hjemmesiden. Hjemmesiden kan ikke 
                  fungere optimalt uten disse informasjonskapslene.
                </Typography>
                
                <Box sx={{ mb: 2, p: 2, backgroundColor: '#F5F5F5', borderRadius: 1, fontSize: '0.75rem' }}>
                  <Typography variant="body2" sx={{ fontWeight: 600, mb: 1, fontSize: '0.875rem' }}>
                    Databehandlingsansvarlig: Cookie Info Script
                  </Typography>
                  <Box sx={{ mb: 1 }}>
                    <Typography component="span" sx={{ fontWeight: 600, fontSize: '0.75rem' }}>Formål:</Typography>
                  </Box>
                  <Box sx={{ mb: 1 }}>
                    <Typography component="span" sx={{ fontWeight: 600, fontSize: '0.75rem' }}>Personvernregler for databehandling:</Typography>{' '}
                    <Link 
                      href="https://business.safety.google/privacy/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      sx={{ 
                        fontSize: '0.75rem', 
                        color: '#1976d2',
                        textDecoration: 'underline'
                      }}
                    >
                      Cookie Info Script - Personvernregler for databehandling ↗
                    </Link>
                  </Box>
                  <Box sx={{ mb: 1 }}>
                    <Typography component="span" sx={{ fontWeight: 600, fontSize: '0.75rem' }}>Utløpsdato:</Typography>{' '}
                    <Typography component="span" sx={{ fontSize: '0.75rem' }}>Permanent</Typography>
                  </Box>
                  <Box sx={{ mb: 1 }}>
                    <Typography component="span" sx={{ fontWeight: 600, fontSize: '0.75rem' }}>Navn:</Typography>{' '}
                    <Typography component="span" sx={{ fontSize: '0.75rem' }}>token-se</Typography>
                  </Box>
                  <Box>
                    <Typography component="span" sx={{ fontWeight: 600, fontSize: '0.75rem' }}>Leverandør:</Typography>{' '}
                    <Typography component="span" sx={{ fontSize: '0.75rem' }}>.bookis.com</Typography>
                  </Box>
                </Box>

                <FormControlLabel
                  control={
                    <Switch 
                      checked={consent.necessary} 
                      disabled
                      size="small"
                      sx={{
                        '& .MuiSwitch-switchBase.Mui-checked': {
                          color: '#F94F9B',
                        },
                        '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
                          backgroundColor: '#F94F9B',
                        },
                      }}
                    />
                  }
                  label={
                    <Typography variant="body2" sx={{ fontSize: '0.875rem' }}>
                      Alltid aktiv
                    </Typography>
                  }
                />
              </AccordionDetails>
            </Accordion>

            <Accordion 
              sx={{ 
                boxShadow: 'none', 
                border: '1px solid #E0E0E0',
                borderTop: 'none',
                borderRadius: 0,
                '&:before': { display: 'none' }
              }}
            >
              <AccordionSummary 
                expandIcon={<ExpandMore sx={{ color: '#F94F9B' }} />}
                sx={{ 
                  '& .MuiAccordionSummary-content': { 
                    alignItems: 'center' 
                  }
                }}
              >
                <Typography 
                  variant="body2" 
                  sx={{ 
                    fontWeight: 600,
                    color: '#1A1A1A',
                    fontSize: '0.875rem'
                  }}
                >
                  ▶ Uklassifiserte
                </Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ pt: 0 }}>
                <Typography 
                  variant="body2" 
                  sx={{ 
                    mb: 2, 
                    color: '#757575',
                    lineHeight: 1.5
                  }}
                >
                  Vi er i ferd med å klassifisere uklassifiserte informasjonskapsler 
                  sammen med leverandørene av de enkelte informasjonskapslene.
                </Typography>

                <Box sx={{ mb: 2, p: 2, backgroundColor: '#F5F5F5', borderRadius: 1 }}>
                  <Typography variant="body2" sx={{ fontWeight: 600, mb: 1, fontSize: '0.875rem' }}>
                    Databehandlingsansvarlig
                  </Typography>
                  <Box sx={{ mb: 1 }}>
                    <Typography component="span" sx={{ fontWeight: 600, fontSize: '0.75rem' }}>Formål:</Typography>
                  </Box>
                  <Box sx={{ mb: 1 }}>
                    <Typography component="span" sx={{ fontWeight: 600, fontSize: '0.75rem' }}>Utløpsdato:</Typography>{' '}
                    <Typography component="span" sx={{ fontSize: '0.75rem' }}>4 dager</Typography>
                  </Box>
                  <Box sx={{ mb: 1 }}>
                    <Typography component="span" sx={{ fontWeight: 600, fontSize: '0.75rem' }}>Navn:</Typography>{' '}
                    <Typography component="span" sx={{ fontSize: '0.75rem' }}>aws-waf-token</Typography>
                  </Box>
                  <Box>
                    <Typography component="span" sx={{ fontWeight: 600, fontSize: '0.75rem' }}>Leverandør:</Typography>{' '}
                    <Typography component="span" sx={{ fontSize: '0.75rem' }}>.bookis.com</Typography>
                  </Box>
                </Box>

                <Box sx={{ mb: 2, p: 2, backgroundColor: '#F5F5F5', borderRadius: 1 }}>
                  <Typography variant="body2" sx={{ fontWeight: 600, mb: 1, fontSize: '0.875rem' }}>
                    Databehandlingsansvarlig
                  </Typography>
                  <Box sx={{ mb: 1 }}>
                    <Typography component="span" sx={{ fontWeight: 600, fontSize: '0.75rem' }}>Formål:</Typography>
                  </Box>
                  <Box sx={{ mb: 1 }}>
                    <Typography component="span" sx={{ fontWeight: 600, fontSize: '0.75rem' }}>Utløpsdato:</Typography>{' '}
                    <Typography component="span" sx={{ fontSize: '0.75rem' }}>Permanent</Typography>
                  </Box>
                  <Box sx={{ mb: 1 }}>
                    <Typography component="span" sx={{ fontWeight: 600, fontSize: '0.75rem' }}>Navn:</Typography>{' '}
                    <Typography component="span" sx={{ fontSize: '0.75rem' }}>token-no</Typography>
                  </Box>
                  <Box>
                    <Typography component="span" sx={{ fontWeight: 600, fontSize: '0.75rem' }}>Leverandør:</Typography>{' '}
                    <Typography component="span" sx={{ fontSize: '0.75rem' }}>.bookis.com</Typography>
                  </Box>
                </Box>

                <FormControlLabel
                  control={
                    <Switch 
                      checked={consent.analytics} 
                      onChange={handleConsentChange('analytics')}
                      size="small"
                      sx={{
                        '& .MuiSwitch-switchBase.Mui-checked': {
                          color: '#F94F9B',
                        },
                        '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
                          backgroundColor: '#F94F9B',
                        },
                      }}
                    />
                  }
                  label={
                    <Typography variant="body2" sx={{ fontSize: '0.875rem' }}>
                      Analytiske cookies
                    </Typography>
                  }
                />
                <FormControlLabel
                  control={
                    <Switch 
                      checked={consent.marketing} 
                      onChange={handleConsentChange('marketing')}
                      size="small"
                      sx={{
                        '& .MuiSwitch-switchBase.Mui-checked': {
                          color: '#F94F9B',
                        },
                        '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
                          backgroundColor: '#F94F9B',
                        },
                      }}
                    />
                  }
                  label={
                    <Typography variant="body2" sx={{ fontSize: '0.875rem' }}>
                      Markedsføring cookies
                    </Typography>
                  }
                  sx={{ display: 'block', mt: 1 }}
                />
              </AccordionDetails>
            </Accordion>
          </Box>
        </Collapse>

        <Box sx={{ display: 'flex', gap: 1, alignItems: 'flex-start', flexWrap: 'wrap' }}>
          <Button
            variant="outlined"
            size="small"
            onClick={handleAcceptNecessary}
            sx={{ 
              textTransform: 'uppercase',
              fontSize: '0.75rem',
              fontWeight: 600,
              px: 1.5,
              py: 0.75,
              minWidth: 'auto',
              height: 'auto',
              borderRadius: 25,
              borderColor: '#F94F9B',
              color: '#F94F9B',
              lineHeight: 1.2,
              whiteSpace: 'normal',
              textAlign: 'center',
              '&:hover': {
                borderColor: '#D63A7C',
                backgroundColor: 'rgba(249, 79, 155, 0.05)',
                color: '#D63A7C',
              }
            }}
          >
            Bare nødvendige<br />cookies
          </Button>
          
          <Button
            variant="outlined"
            size="small"
            onClick={() => setShowDetails(!showDetails)}
            sx={{ 
              textTransform: 'uppercase',
              fontSize: '0.75rem',
              fontWeight: 600,
              px: 1.5,
              py: 0.75,
              minWidth: 'auto',
              height: 'auto',
              borderRadius: 25,
              borderColor: '#F94F9B',
              color: '#F94F9B',
              lineHeight: 1.2,
              whiteSpace: 'normal',
              textAlign: 'center',
              '&:hover': {
                borderColor: '#D63A7C',
                backgroundColor: 'rgba(249, 79, 155, 0.05)',
                color: '#D63A7C',
              }
            }}
          >
            Oppdater<br />samtykke
          </Button>
          
          <Button
            variant="contained"
            size="small"
            onClick={showDetails ? handleUpdateConsent : handleAcceptAll}
            sx={{ 
              textTransform: 'uppercase',
              fontSize: '0.75rem',
              fontWeight: 700,
              px: 1.5,
              py: 1.4,
              minWidth: 'auto',
              height: 'auto',
              borderRadius: 25,
              background: 'linear-gradient(135deg, #6FD672 0%, #4CAF50 100%)',
              boxShadow: '0 2px 8px rgba(111, 214, 114, 0.3)',
              lineHeight: 1.2,
              whiteSpace: 'normal',
              textAlign: 'center',
              '&:hover': {
                background: 'linear-gradient(135deg, #4CAF50 0%, #388E3C 100%)',
                boxShadow: '0 4px 16px rgba(111, 214, 114, 0.4)',
                transform: 'translateY(-1px)',
              }
            }}
          >
            Godta
          </Button>
        </Box>

        <Box sx={{ mt: 2, textAlign: 'center' }}>
          <Typography 
            variant="caption" 
            sx={{ 
              color: '#9E9E9E',
              fontSize: '0.75rem'
            }}
          >
            powered by:{' '}
            <Link 
              href="/cookies" 
              sx={{ 
                fontSize: 'inherit',
                textDecoration: 'underline',
                color: '#9E9E9E',
                '&:hover': {
                  color: '#F94F9B'
                }
              }}
            >
              Cookie Information
            </Link>
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
}