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
  FormControlLabel,
  IconButton
} from '@mui/material';
import { ExpandMore, ArrowBack } from '@mui/icons-material';

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
  const [showDetails, setShowDetails] = useState(true);
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [consent, setConsent] = useState<CookieConsent>({
    necessary: true, // Always true, cannot be changed
    analytics: false,
    marketing: false
  });

  // State for expandable detail sections in advanced view (default expanded)
  const [showNecessaryDetails, setShowNecessaryDetails] = useState(true);
  const [showMarketingDetails, setShowMarketingDetails] = useState(true);
  const [showAnalyticsDetails, setShowAnalyticsDetails] = useState(true);
  const [showMeasurementDetails, setShowMeasurementDetails] = useState(true);
  const [showDevelopmentDetails, setShowDevelopmentDetails] = useState(true);
  const [showLocationDetails, setShowLocationDetails] = useState(true);

  useEffect(() => {
    // Check if user has already given consent
    const hasConsent = localStorage.getItem('gumbox-cookie-consent');
    if (!hasConsent) {
      setShowBanner(true);
    }
  }, []);

  // Ensure detail sections are expanded when advanced view opens
  useEffect(() => {
    if (showAdvanced) {
      setShowNecessaryDetails(true);
      setShowMarketingDetails(true);
      setShowAnalyticsDetails(true);
      setShowMeasurementDetails(true);
      setShowDevelopmentDetails(true);
      setShowLocationDetails(true);
    }
  }, [showAdvanced]);

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
            mb: 3, 
            lineHeight: 1.6, 
            color: '#757575',
            fontSize: '0.875rem'
          }}
        >
          Personlig tilpasset annonsering og innhold, annonse- og 
          innholdsmåling, publikumsundersøkelser og tjenesteutvikling
        </Typography>

        <Typography 
          variant="body2" 
          sx={{ 
            mb: 3, 
            lineHeight: 1.6, 
            color: '#757575',
            fontSize: '0.875rem'
          }}
        >
          Lagre og/eller få tilgang til informasjon på en enhet
        </Typography>

        <Button
          variant="text"
          onClick={() => setShowDetails(!showDetails)}
          sx={{
            mb: 3,
            color: '#757575',
            fontSize: '0.875rem',
            textTransform: 'none',
            p: 0,
            justifyContent: 'flex-start',
            '&:hover': {
              backgroundColor: 'transparent',
              textDecoration: 'underline'
            }
          }}
          startIcon={<ExpandMore sx={{ 
            transform: showDetails ? 'rotate(180deg)' : 'rotate(0deg)',
            transition: 'transform 0.3s ease'
          }} />}
        >
          Finn ut mer
        </Button>

        <Collapse in={showDetails}>
          <Box sx={{ 
            mb: 3, 
            p: 2, 
            backgroundColor: '#F8F9FA', 
            borderRadius: 1,
            maxHeight: '300px',
            overflowY: 'auto'
          }}>
            <Typography variant="body2" sx={{ mb: 2, color: '#757575', fontSize: '0.875rem' }}>
              Personopplysningene dine blir behandlet, og informasjon fra enheten din 
              (informasjonskapsler, unike identifikatorer og andre enhetsdata) kan 
              lagres av, gjøres tilgjengelig for og deles med 141 TCF-leverandører og 69 
              annonsenpartnere eller bli brukt spesifikt for dette nettstedet eller denne 
              appen.
            </Typography>
            
            <Typography variant="body2" sx={{ mb: 3, color: '#757575', fontSize: '0.875rem' }}>
              Noen leverandører kan behandle de personlige dataene dine på grunnlag 
              av berettiget interesse, som du kan komme med innvendinger mot ved å 
              administrere alternativene nedenfor. Se etter en link nederst på denne 
              siden eller i nettstedsmenyen for å administrere eller trekke tilbake 
              samtykket i innstillingene for personvern og informasjonskapsler.
            </Typography>

            <Typography variant="body2" sx={{ mb: 2, fontWeight: 600, color: '#1A1A1A' }}>
              • Hvordan kan jeg endre valget mitt?
            </Typography>
            <Typography variant="body2" sx={{ mb: 2, fontWeight: 600, color: '#1A1A1A' }}>
              • Hva om jeg ikke samtykker?
            </Typography>
            <Typography variant="body2" sx={{ mb: 2, fontWeight: 600, color: '#1A1A1A' }}>
              • Hvordan fungerer berettiget interesse?
            </Typography>
            <Typography variant="body2" sx={{ mb: 3, fontWeight: 600, color: '#1A1A1A' }}>
              • Må jeg samtykke i alt?
            </Typography>

            <Typography variant="body2" sx={{ mb: 2, color: '#757575', fontSize: '0.875rem' }}>
              Personopplysningene dine blir behandlet, og informasjon fra enheten din 
              (informasjonskapsler, unike identifikatorer og andre enhetsdata) kan 
              lagres av, gjøres tilgjengelig for og deles med{' '}
              <Link href="https://business.safety.google/privacy/" target="_blank" rel="noopener noreferrer" 
                sx={{ color: '#1976d2', textDecoration: 'underline' }}>
                141 TCF-leverandører
              </Link>{' '}
              og{' '}
              <Link href="https://business.safety.google/privacy/" target="_blank" rel="noopener noreferrer" 
                sx={{ color: '#1976d2', textDecoration: 'underline' }}>
                69 annonsenpartnere
              </Link>{' '}
              eller bli brukt spesifikt for dette nettstedet eller denne appen.
            </Typography>
          </Box>
        </Collapse>

        <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Button
            variant="contained"
            onClick={() => setShowAdvanced(true)}
            sx={{ 
              textTransform: 'none',
              fontSize: '0.875rem',
              fontWeight: 500,
              px: 4,
              py: 1.5,
              borderRadius: 25,
              backgroundColor: '#1976d2',
              '&:hover': {
                backgroundColor: '#1565c0',
              }
            }}
          >
            Administrer alternativer
          </Button>
          
          <Button
            variant="contained"
            onClick={handleAcceptAll}
            sx={{ 
              textTransform: 'none',
              fontSize: '0.875rem',
              fontWeight: 500,
              px: 4,
              py: 1.5,
              borderRadius: 25,
              backgroundColor: '#1976d2',
              '&:hover': {
                backgroundColor: '#1565c0',
              }
            }}
          >
            Samtykke
          </Button>
        </Box>

        {showAdvanced && (
          <Box sx={{ 
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'white',
            borderRadius: 3,
            display: 'flex',
            flexDirection: 'column',
            maxHeight: '80vh'
          }}>
            {/* Header with back button */}
            <Box sx={{ 
              display: 'flex', 
              alignItems: 'center', 
              p: 2, 
              borderBottom: '1px solid #E0E0E0',
              flexShrink: 0
            }}>
              <IconButton 
                onClick={() => setShowAdvanced(false)}
                sx={{ mr: 2 }}
              >
                <ArrowBack />
              </IconButton>
              <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#1A1A1A' }}>
                Datainnstillinger
              </Typography>
            </Box>

            {/* Scrollable content */}
            <Box sx={{ 
              flex: 1, 
              overflow: 'auto', 
              p: 3,
              '&::-webkit-scrollbar': {
                width: '8px',
              },
              '&::-webkit-scrollbar-track': {
                background: '#f1f1f1',
              },
              '&::-webkit-scrollbar-thumb': {
                background: '#888',
                borderRadius: '4px',
              },
              '&::-webkit-scrollbar-thumb:hover': {
                background: '#555',
              },
            }}>
              <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold', color: '#1A1A1A' }}>
                Administrer dine data
              </Typography>
              
              <Typography variant="body2" sx={{ mb: 3, color: '#757575' }}>
                Du kan velge hvordan dine personopplysninger skal brukes. Leverandører vil ha din tillatelse til å gjøre følgende:
              </Typography>

              <Typography variant="subtitle2" sx={{ mb: 3, fontWeight: 'bold', backgroundColor: '#f5f5f5', p: 2, borderRadius: 1 }}>
                TCF-leverandører
              </Typography>

              {/* Category 1 - Always enabled */}
              <Box sx={{ mb: 3, border: '1px solid #E0E0E0', borderRadius: 2, overflow: 'hidden' }}>
                <Box sx={{ p: 3 }}>
                  <Typography variant="subtitle2" sx={{ mb: 2, fontWeight: 'bold' }}>
                    Lagre og/eller få tilgang til informasjon på en enhet
                  </Typography>
                  <Typography variant="body2" sx={{ mb: 2, color: '#757575', fontSize: '0.875rem' }}>
                    Informasjonskapsler, enhetsidentifikatorer eller lignende nettidentifikatorer (f.eks. påloggingsbaserte identifikatorer, tilfeldig tildelte identifikatorer, nettverksbaserte identifikatorer) sammen med annen informasjon...
                  </Typography>
                  <Button 
                    variant="text" 
                    onClick={() => setShowNecessaryDetails(!showNecessaryDetails)}
                    sx={{ mb: 2, p: 0, fontSize: '0.875rem', color: '#1976d2' }}
                    startIcon={<ExpandMore sx={{ 
                      transform: showNecessaryDetails ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.3s ease'
                    }} />}
                  >
                    Vis detaljer
                  </Button>
                  
                  <Collapse in={showNecessaryDetails}>
                    <Box sx={{ mb: 2, p: 2, backgroundColor: '#F8F9FA', borderRadius: 1 }}>
                      <Typography variant="body2" sx={{ mb: 2, color: '#757575', fontSize: '0.875rem' }}>
                        Disse informasjonskapslene er nødvendige for at nettstedet skal fungere og kan ikke slås av i våre systemer. 
                        De er vanligvis bare satt som svar på handlinger utført av deg som tilsvarer en forespørsel om tjenester, 
                        som å angi personvern preferanser, logge inn eller fylle ut skjemaer.
                      </Typography>
                      <Typography variant="body2" sx={{ color: '#757575', fontSize: '0.875rem' }}>
                        Du kan stille inn nettleseren din til å blokkere eller advare deg om disse informasjonskapslene, 
                        men noen deler av nettstedet vil da ikke fungere.
                      </Typography>
                    </Box>
                  </Collapse>
                  <FormControlLabel
                    control={
                      <Switch 
                        checked={true} 
                        disabled
                        size="small"
                        sx={{
                          '& .MuiSwitch-switchBase.Mui-checked': { color: '#1976d2' },
                          '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': { backgroundColor: '#1976d2' },
                        }}
                      />
                    }
                    label={<Typography variant="body2" sx={{ fontSize: '0.875rem' }}>Samtykke (121 leverandører)</Typography>}
                  />
                </Box>
              </Box>

              {/* Category 2 - Marketing */}
              <Box sx={{ mb: 3, border: '1px solid #E0E0E0', borderRadius: 2, overflow: 'hidden' }}>
                <Box sx={{ p: 3 }}>
                  <Typography variant="subtitle2" sx={{ mb: 2, fontWeight: 'bold' }}>
                    Bruke begrensede data for å velge annonsering
                  </Typography>
                  <Typography variant="body2" sx={{ mb: 2, color: '#757575', fontSize: '0.875rem' }}>
                    Reklame som vises til deg på denne tjenesten kan være basert på begrensede data, for eksempel nettstedet eller appen du bruker, en posisjon som ikke er presis...
                  </Typography>
                  <Button 
                    variant="text" 
                    onClick={() => setShowMarketingDetails(!showMarketingDetails)}
                    sx={{ mb: 2, p: 0, fontSize: '0.875rem', color: '#1976d2' }}
                    startIcon={<ExpandMore sx={{ 
                      transform: showMarketingDetails ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.3s ease'
                    }} />}
                  >
                    Vis detaljer
                  </Button>
                  
                  <Collapse in={showMarketingDetails}>
                    <Box sx={{ mb: 2, p: 2, backgroundColor: '#F8F9FA', borderRadius: 1 }}>
                      <Typography variant="body2" sx={{ mb: 2, color: '#757575', fontSize: '0.875rem' }}>
                        Reklame presentert til deg på denne tjenesten kan være basert på begrensede data, for eksempel nettstedet 
                        eller appen du bruker, din nøyaktige plassering, din nettleverandør eller søkeord du bruker.
                      </Typography>
                      <Typography variant="body2" sx={{ color: '#757575', fontSize: '0.875rem' }}>
                        De fleste formål som er forklart i denne erklæringen, stoler på lagring eller tilgang til informasjon 
                        fra enheten din når du bruker en app eller besøker et nettsted.
                      </Typography>
                    </Box>
                  </Collapse>
                  <Box>
                    <FormControlLabel
                      control={
                        <Switch 
                          checked={consent.marketing} 
                          onChange={handleConsentChange('marketing')}
                          size="small"
                          sx={{
                            '& .MuiSwitch-switchBase.Mui-checked': { color: '#1976d2' },
                            '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': { backgroundColor: '#1976d2' },
                          }}
                        />
                      }
                      label={<Typography variant="body2" sx={{ fontSize: '0.875rem' }}>Samtykke (75 leverandører)</Typography>}
                      sx={{ display: 'block', mb: 1 }}
                    />
                    <FormControlLabel
                      control={
                        <Switch 
                          checked={consent.marketing} 
                          onChange={handleConsentChange('marketing')}
                          size="small"
                          sx={{
                            '& .MuiSwitch-switchBase.Mui-checked': { color: '#1976d2' },
                            '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': { backgroundColor: '#1976d2' },
                          }}
                        />
                      }
                      label={<Typography variant="body2" sx={{ fontSize: '0.875rem' }}>Berettiget interesse (39 leverandører)</Typography>}
                      sx={{ display: 'block' }}
                    />
                  </Box>
                </Box>
              </Box>

              {/* Category 3 - Analytics */}
              <Box sx={{ mb: 3, border: '1px solid #E0E0E0', borderRadius: 2, overflow: 'hidden' }}>
                <Box sx={{ p: 3 }}>
                  <Typography variant="subtitle2" sx={{ mb: 2, fontWeight: 'bold' }}>
                    Opprette profiler for personalisert annonsering
                  </Typography>
                  <Typography variant="body2" sx={{ mb: 2, color: '#757575', fontSize: '0.875rem' }}>
                    Informasjon om aktiviteten din på denne tjenesten (for eksempel skjemaer du sender inn, innhold du ser på) kan lagres og kombineres med annen informasjon om deg...
                  </Typography>
                  <Button 
                    variant="text" 
                    onClick={() => setShowAnalyticsDetails(!showAnalyticsDetails)}
                    sx={{ mb: 2, p: 0, fontSize: '0.875rem', color: '#1976d2' }}
                    startIcon={<ExpandMore sx={{ 
                      transform: showAnalyticsDetails ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.3s ease'
                    }} />}
                  >
                    Vis detaljer
                  </Button>
                  
                  <Collapse in={showAnalyticsDetails}>
                    <Box sx={{ mb: 2, p: 2, backgroundColor: '#F8F9FA', borderRadius: 1 }}>
                      <Typography variant="body2" sx={{ mb: 2, color: '#757575', fontSize: '0.875rem' }}>
                        Disse informasjonskapslene lar oss telle besøk og trafikkkilder så vi kan måle og forbedre ytelsen til nettstedet vårt. 
                        De hjelper oss å vite hvilke sider som er mest og minst populære og se hvordan besøkende beveger seg rundt på nettstedet.
                      </Typography>
                      <Typography variant="body2" sx={{ color: '#757575', fontSize: '0.875rem' }}>
                        All informasjon disse informasjonskapslene samler inn er aggregert og derfor anonym. 
                        Hvis du ikke tillater disse informasjonskapslene, vil vi ikke vite når du har besøkt nettstedet vårt.
                      </Typography>
                    </Box>
                  </Collapse>
                  <FormControlLabel
                    control={
                      <Switch 
                        checked={consent.analytics} 
                        onChange={handleConsentChange('analytics')}
                        size="small"
                        sx={{
                          '& .MuiSwitch-switchBase.Mui-checked': { color: '#1976d2' },
                          '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': { backgroundColor: '#1976d2' },
                        }}
                      />
                    }
                    label={<Typography variant="body2" sx={{ fontSize: '0.875rem' }}>Samtykke (102 leverandører)</Typography>}
                  />
                </Box>
              </Box>

              {/* Additional Categories for GumBox */}
              <Box sx={{ mb: 3, border: '1px solid #E0E0E0', borderRadius: 2, overflow: 'hidden' }}>
                <Box sx={{ p: 3 }}>
                  <Typography variant="subtitle2" sx={{ mb: 2, fontWeight: 'bold' }}>
                    Måle annonseytelse  
                  </Typography>
                  <Typography variant="body2" sx={{ mb: 2, color: '#757575', fontSize: '0.875rem' }}>
                    Informasjon om hvilken annonsering som presenteres for deg og hvordan du samhandler med den, kan brukes til å bestemme hvor godt en annonse har fungert...
                  </Typography>
                  <Button 
                    variant="text" 
                    onClick={() => setShowMeasurementDetails(!showMeasurementDetails)}
                    sx={{ mb: 2, p: 0, fontSize: '0.875rem', color: '#1976d2' }}
                    startIcon={<ExpandMore sx={{ 
                      transform: showMeasurementDetails ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.3s ease'
                    }} />}
                  >
                    Vis detaljer
                  </Button>
                  
                  <Collapse in={showMeasurementDetails}>
                    <Box sx={{ mb: 2, p: 2, backgroundColor: '#F8F9FA', borderRadius: 1 }}>
                      <Typography variant="body2" sx={{ mb: 2, color: '#757575', fontSize: '0.875rem' }}>
                        Informasjon om hvilken reklame som presenteres for deg og hvordan du samhandler med den kan brukes 
                        til å bestemme hvor godt en reklame har fungert for deg eller andre brukere.
                      </Typography>
                      <Typography variant="body2" sx={{ color: '#757575', fontSize: '0.875rem' }}>
                        Dette hjelper oss å forstå effektiviteten av markedsføringskampanjer og forbedre leveringen av relevante annonser.
                      </Typography>
                    </Box>
                  </Collapse>
                  <Box>
                    <FormControlLabel
                      control={
                        <Switch 
                          checked={consent.analytics} 
                          onChange={handleConsentChange('analytics')}
                          size="small"
                          sx={{
                            '& .MuiSwitch-switchBase.Mui-checked': { color: '#1976d2' },
                            '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': { backgroundColor: '#1976d2' },
                          }}
                        />
                      }
                      label={<Typography variant="body2" sx={{ fontSize: '0.875rem' }}>Samtykke (76 leverandører)</Typography>}
                      sx={{ display: 'block', mb: 1 }}
                    />
                    <FormControlLabel
                      control={
                        <Switch 
                          checked={consent.analytics} 
                          onChange={handleConsentChange('analytics')}
                          size="small"
                          sx={{
                            '& .MuiSwitch-switchBase.Mui-checked': { color: '#1976d2' },
                            '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': { backgroundColor: '#1976d2' },
                          }}
                        />
                      }
                      label={<Typography variant="body2" sx={{ fontSize: '0.875rem' }}>Berettiget interesse (55 leverandører)</Typography>}
                      sx={{ display: 'block' }}
                    />
                  </Box>
                </Box>
              </Box>

              {/* Category 5 */}
              <Box sx={{ mb: 3, border: '1px solid #E0E0E0', borderRadius: 2, overflow: 'hidden' }}>
                <Box sx={{ p: 3 }}>
                  <Typography variant="subtitle2" sx={{ mb: 2, fontWeight: 'bold' }}>
                    Utvikle og forbedre tjenester
                  </Typography>
                  <Typography variant="body2" sx={{ mb: 2, color: '#757575', fontSize: '0.875rem' }}>
                    Informasjon om aktiviteten din på denne tjenesten, for eksempel samhandlingen din med annonser eller innhold, kan være svært nyttig for å forbedre produkter og tjenester...
                  </Typography>
                  <Button 
                    variant="text" 
                    onClick={() => setShowDevelopmentDetails(!showDevelopmentDetails)}
                    sx={{ mb: 2, p: 0, fontSize: '0.875rem', color: '#1976d2' }}
                    startIcon={<ExpandMore sx={{ 
                      transform: showDevelopmentDetails ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.3s ease'
                    }} />}
                  >
                    Vis detaljer
                  </Button>
                  
                  <Collapse in={showDevelopmentDetails}>
                    <Box sx={{ mb: 2, p: 2, backgroundColor: '#F8F9FA', borderRadius: 1 }}>
                      <Typography variant="body2" sx={{ mb: 2, color: '#757575', fontSize: '0.875rem' }}>
                        Informasjon om aktiviteten din på denne tjenesten kan brukes til å utvikle og forbedre nye produkter og tjenester. 
                        Dette inkluderer forbedring av eksisterende funksjoner og utvikling av nye funksjoner basert på brukerfeedback.
                      </Typography>
                      <Typography variant="body2" sx={{ color: '#757575', fontSize: '0.875rem' }}>
                        Vi bruker denne informasjonen til å forstå hvordan brukere samhandler med våre tjenester og 
                        identifisere områder for forbedring og innovasjon.
                      </Typography>
                    </Box>
                  </Collapse>
                  <Box>
                    <FormControlLabel
                      control={
                        <Switch 
                          checked={consent.analytics} 
                          onChange={handleConsentChange('analytics')}
                          size="small"
                          sx={{
                            '& .MuiSwitch-switchBase.Mui-checked': { color: '#1976d2' },
                            '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': { backgroundColor: '#1976d2' },
                          }}
                        />
                      }
                      label={<Typography variant="body2" sx={{ fontSize: '0.875rem' }}>Samtykke (63 leverandører)</Typography>}
                      sx={{ display: 'block', mb: 1 }}
                    />
                    <FormControlLabel
                      control={
                        <Switch 
                          checked={consent.analytics} 
                          onChange={handleConsentChange('analytics')}
                          size="small"
                          sx={{
                            '& .MuiSwitch-switchBase.Mui-checked': { color: '#1976d2' },
                            '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': { backgroundColor: '#1976d2' },
                          }}
                        />
                      }
                      label={<Typography variant="body2" sx={{ fontSize: '0.875rem' }}>Berettiget interesse (48 leverandører)</Typography>}
                      sx={{ display: 'block' }}
                    />
                  </Box>
                </Box>
              </Box>

              {/* Category 6 - Geolocation */}
              <Box sx={{ mb: 3, border: '1px solid #E0E0E0', borderRadius: 2, overflow: 'hidden' }}>
                <Box sx={{ p: 3 }}>
                  <Typography variant="subtitle2" sx={{ mb: 2, fontWeight: 'bold' }}>
                    Bruke nøyaktige geolokasjonsdata
                  </Typography>
                  <Typography variant="body2" sx={{ mb: 2, color: '#757575', fontSize: '0.875rem' }}>
                    Med ditt samtykke kan din nøyaktige posisjon (innenfor en radius på mindre enn 500 meter) brukes til støtte for formålene som er forklart i denne erklæringen.
                  </Typography>
                  <Button 
                    variant="text" 
                    onClick={() => setShowLocationDetails(!showLocationDetails)}
                    sx={{ mb: 2, p: 0, fontSize: '0.875rem', color: '#1976d2' }}
                    startIcon={<ExpandMore sx={{ 
                      transform: showLocationDetails ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.3s ease'
                    }} />}
                  >
                    Vis detaljer
                  </Button>
                  
                  <Collapse in={showLocationDetails}>
                    <Box sx={{ mb: 2, p: 2, backgroundColor: '#F8F9FA', borderRadius: 1 }}>
                      <Typography variant="body2" sx={{ mb: 2, color: '#757575', fontSize: '0.875rem' }}>
                        Din nøyaktige plassering innenfor en radius på mindre enn 500 meter kan brukes til å levere 
                        mer relevante annonser og tjenester basert på din geografiske plassering.
                      </Typography>
                      <Typography variant="body2" sx={{ color: '#757575', fontSize: '0.875rem' }}>
                        Dette kan inkludere lokale tilbud, værinformasjon, eller andre stedsbaserte tjenester som kan være av interesse.
                      </Typography>
                    </Box>
                  </Collapse>
                  <FormControlLabel
                    control={
                      <Switch 
                        checked={false} 
                        onChange={handleConsentChange('marketing')}
                        size="small"
                        sx={{
                          '& .MuiSwitch-switchBase.Mui-checked': { color: '#1976d2' },
                          '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': { backgroundColor: '#1976d2' },
                        }}
                      />
                    }
                    label={<Typography variant="body2" sx={{ fontSize: '0.875rem' }}>Samtykker</Typography>}
                  />
                </Box>
              </Box>

              <Typography variant="body2" sx={{ mt: 4, mb: 2, color: '#757575' }}>
                Slik fungerer denne plattformen for samtykkestyring (CMP):
              </Typography>

              <Box sx={{ mb: 4, p: 3, backgroundColor: '#f5f5f5', borderRadius: 2 }}>
                <Typography variant="subtitle2" sx={{ mb: 2, fontWeight: 'bold' }}>
                  Lagring, varighet og bruksinformasjon
                </Typography>
                <Typography variant="body2" sx={{ mb: 2, color: '#757575', fontSize: '0.875rem' }}>
                  Valgene du gjør i denne CMP-en om formål og enheter, påvirker hvordan personlig tilpasset annonsering presenteres for deg. Vi må lagre disse valgene for å respektere dem ved fremtidige besøk:
                </Typography>
                <Box component="ul" sx={{ pl: 3, mb: 2 }}>
                  <Box component="li" sx={{ mb: 1 }}>
                    <Typography variant="body2" sx={{ fontSize: '0.875rem', color: '#757575' }}>
                      <strong>For nettsteder</strong> lagres valgene i en informasjonskapsel kalt «FCCDCF» i maksimalt 390 dager.
                    </Typography>
                  </Box>
                  <Box component="li" sx={{ mb: 1 }}>
                    <Typography variant="body2" sx={{ fontSize: '0.875rem', color: '#757575' }}>
                      <strong>For apper</strong> lagres valgene på enhetens lagringsplass, hvor de starter på «IABTCF_». Valgene blir ugyldige etter 390 dager.
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>

            {/* Fixed bottom buttons */}
            <Box sx={{ 
              p: 3, 
              borderTop: '1px solid #E0E0E0',
              backgroundColor: 'white',
              flexShrink: 0
            }}>
              <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center' }}>
                <Button
                  variant="contained"
                  onClick={() => {
                    handleAcceptAll();
                    setShowAdvanced(false);
                  }}
                  sx={{ 
                    backgroundColor: '#1976d2',
                    px: 4,
                    py: 1.5,
                    borderRadius: 25,
                    '&:hover': { backgroundColor: '#1565c0' }
                  }}
                >
                  Godta alle
                </Button>
                <Button
                  variant="contained"
                  onClick={() => {
                    handleUpdateConsent();
                    setShowAdvanced(false);
                  }}
                  sx={{ 
                    backgroundColor: '#1976d2',
                    px: 4,
                    py: 1.5,
                    borderRadius: 25,
                    '&:hover': { backgroundColor: '#1565c0' }
                  }}
                >
                  Bekreft valg
                </Button>
              </Box>
            </Box>
          </Box>
        )}

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