'use client';

import { 
  Box, 
  Container, 
  Typography, 
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Accordion,
  AccordionSummary,
  AccordionDetails
} from '@mui/material';
import { useRouter } from 'next/navigation';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState } from 'react';

interface CookieInfo {
  name: string;
  purpose: string;
  provider: string;
  duration: string;
  type: 'necessary' | 'analytics' | 'marketing';
}

export default function CookiesPage() {
  const router = useRouter();
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  const cookiesData: CookieInfo[] = [
    // Necessary Cookies
    {
      name: 'consent_preferences',
      purpose: 'Lagrer dine valg for informasjonskapsler',
      provider: 'GumBox',
      duration: '1 år',
      type: 'necessary'
    },
    {
      name: 'cart_session',
      purpose: 'Husker produkter i handlekurven din',
      provider: 'GumBox',
      duration: 'Økt (session)',
      type: 'necessary'
    },
    
    // Analytics Cookies
    {
      name: '_ga',
      purpose: 'Skiller mellom brukere for Google Analytics',
      provider: 'Google Analytics',
      duration: '2 år',
      type: 'analytics'
    },
    {
      name: '_ga_*',
      purpose: 'Brukes til å beregne besøksdata for Google Analytics',
      provider: 'Google Analytics',
      duration: '2 år',
      type: 'analytics'
    },
    {
      name: 'CLID',
      purpose: 'Microsoft Clarity brukeridentifikator',
      provider: 'Microsoft Clarity',
      duration: '1 år',
      type: 'analytics'
    },
    {
      name: '_clck',
      purpose: 'Microsoft Clarity session tracking',
      provider: 'Microsoft Clarity',
      duration: '1 år',
      type: 'analytics'
    },
    {
      name: '_clsk',
      purpose: 'Microsoft Clarity session tracking',
      provider: 'Microsoft Clarity',
      duration: '1 dag',
      type: 'analytics'
    },
    {
      name: 'ANONCHK',
      purpose: 'Microsoft Clarity brukes til å sjekke om cookies er aktivert',
      provider: 'Microsoft Clarity',
      duration: '10 minutter',
      type: 'analytics'
    },
    {
      name: 'MR',
      purpose: 'Microsoft Clarity brukes til å indikere om bruker har valgt bort tracking',
      provider: 'Microsoft Clarity',
      duration: '7 dager',
      type: 'analytics'
    },
    {
      name: 'SM',
      purpose: 'Microsoft Clarity synkronisering av bruker-ID på tvers av domener',
      provider: 'Microsoft Clarity',
      duration: 'Økt (session)',
      type: 'analytics'
    },

    // Marketing Cookies
    {
      name: '_gcl_au',
      purpose: 'Google Ads konverteringssporing',
      provider: 'Google Ads',
      duration: '90 dager',
      type: 'marketing'
    },
    {
      name: 'ADS_VISITOR_ID',
      purpose: 'Google Ads brukeridentifikator for annonsemåling',
      provider: 'Google Ads',
      duration: '2 år',
      type: 'marketing'
    },
    {
      name: '_fbp',
      purpose: 'Facebook Pixel sporing',
      provider: 'Facebook',
      duration: '90 dager',
      type: 'marketing'
    },
    {
      name: '_hjSessionUser_*',
      purpose: 'Hotjar brukeridentifikator',
      provider: 'Hotjar',
      duration: '1 år',
      type: 'analytics'
    },
    {
      name: '_hjSession_*',
      purpose: 'Hotjar økt tracking',
      provider: 'Hotjar',
      duration: '30 minutter',
      type: 'analytics'
    }
  ];

  const groupedCookies = cookiesData.reduce((acc, cookie) => {
    if (!acc[cookie.type]) {
      acc[cookie.type] = [];
    }
    acc[cookie.type].push(cookie);
    return acc;
  }, {} as Record<string, CookieInfo[]>);

  const categoryNames = {
    necessary: 'Nødvendige informasjonskapsler',
    analytics: 'Analyse og statistikk',
    marketing: 'Markedsføring og annonsering'
  };

  const categoryDescriptions = {
    necessary: 'Disse informasjonskapslene er nødvendige for at nettstedet skal fungere og kan ikke slås av i våre systemer.',
    analytics: 'Disse informasjonskapslene hjelper oss å forstå hvordan besøkende samhandler med nettstedet vårt ved å samle inn og rapportere informasjon anonymt.',
    marketing: 'Disse informasjonskapslene brukes til å levere annonser som er mer relevante for deg og dine interesser.'
  };

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      {/* Header */}
      <Box sx={{ mb: 4 }}>
        <Button
          startIcon={<ArrowBackIcon />}
          onClick={() => router.push('/')}
          sx={{ 
            mb: 2,
            color: 'text.secondary',
            '&:hover': {
              backgroundColor: 'rgba(0, 0, 0, 0.04)'
            }
          }}
        >
          Tilbake
        </Button>
        
        <Typography variant="h3" component="h1" sx={{ mb: 2, fontWeight: 700 }}>
          Informasjonskapsler (Cookies)
        </Typography>
        
        <Typography variant="body1" color="text.secondary" sx={{ mb: 4, lineHeight: 1.6 }}>
          Denne siden forklarer hvordan GumBox bruker informasjonskapsler og lignende teknologier 
          for å gjenkjenne deg når du besøker nettstedet vårt. Den forklarer hva disse teknologiene 
          er og hvorfor vi bruker dem, samt dine rettigheter til å kontrollere bruken av dem.
        </Typography>
      </Box>

      {/* What are cookies */}
      <Box sx={{ mb: 6 }}>
        <Typography variant="h4" sx={{ mb: 3, fontWeight: 600 }}>
          Hva er informasjonskapsler?
        </Typography>
        <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.6 }}>
          Informasjonskapsler er små tekstfiler som plasseres på datamaskinen eller mobilenheten din 
          når du besøker et nettsted. De brukes mye av nettsteder for å gjøre dem mer effektive, 
          samt å gi informasjon til eierne av nettstedet.
        </Typography>
        <Typography variant="body1" sx={{ lineHeight: 1.6 }}>
          Vi bruker informasjonskapsler for å forbedre din opplevelse på nettstedet vårt, 
          forstå hvordan du bruker tjenestene våre, og levere personalisert innhold og annonser.
        </Typography>
      </Box>

      {/* Types of cookies */}
      <Box sx={{ mb: 6 }}>
        <Typography variant="h4" sx={{ mb: 3, fontWeight: 600 }}>
          Typer informasjonskapsler vi bruker
        </Typography>
        
        {Object.entries(groupedCookies).map(([type, cookies]) => (
          <Accordion
            key={type}
            expanded={expanded === type}
            onChange={handleChange(type)}
            sx={{ mb: 2, '&:before': { display: 'none' } }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              sx={{ 
                backgroundColor: 'grey.50',
                '& .MuiAccordionSummary-content': {
                  margin: '16px 0',
                }
              }}
            >
              <Box>
                <Typography variant="h6" sx={{ fontWeight: 600 }}>
                  {categoryNames[type as keyof typeof categoryNames]} ({cookies.length})
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {categoryDescriptions[type as keyof typeof categoryDescriptions]}
                </Typography>
              </Box>
            </AccordionSummary>
            <AccordionDetails sx={{ p: 0 }}>
              <TableContainer>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell><strong>Navn</strong></TableCell>
                      <TableCell><strong>Formål</strong></TableCell>
                      <TableCell><strong>Leverandør</strong></TableCell>
                      <TableCell><strong>Varighet</strong></TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {cookies.map((cookie, index) => (
                      <TableRow key={index}>
                        <TableCell sx={{ fontFamily: 'monospace', fontSize: '0.875rem' }}>
                          {cookie.name}
                        </TableCell>
                        <TableCell>{cookie.purpose}</TableCell>
                        <TableCell>{cookie.provider}</TableCell>
                        <TableCell>{cookie.duration}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>

      {/* Third party services */}
      <Box sx={{ mb: 6 }}>
        <Typography variant="h4" sx={{ mb: 3, fontWeight: 600 }}>
          Tredjeparts tjenester
        </Typography>
        
        <Box sx={{ mb: 4 }}>
          <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
            Google Analytics & Google Ads
          </Typography>
          <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.6 }}>
            Vi bruker Google Analytics for å forstå hvordan besøkende bruker nettstedet vårt, 
            og Google Ads for å spore konverteringer og optimalisere våre annonsekampanjer.
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Les mer om Googles personvernerklæring:{' '}
            <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
              https://policies.google.com/privacy
            </a>
          </Typography>
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
            Microsoft Clarity
          </Typography>
          <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.6 }}>
            Microsoft Clarity hjelper oss å forstå hvordan brukere samhandler med nettstedet vårt 
            gjennom funksjoner som heatmaps og økt-opptak. All data er anonymisert.
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Les mer om Microsoft Clarity:{' '}
            <a href="https://clarity.microsoft.com/terms" target="_blank" rel="noopener noreferrer">
              https://clarity.microsoft.com/terms
            </a>
          </Typography>
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
            Facebook Pixel
          </Typography>
          <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.6 }}>
            Facebook Pixel hjelper oss å måle effektiviteten av våre annonser på Facebook og Instagram, 
            og levere mer relevante annonser til brukere.
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Les mer om Facebook Data Policy:{' '}
            <a href="https://www.facebook.com/privacy/policy/" target="_blank" rel="noopener noreferrer">
              https://www.facebook.com/privacy/policy/
            </a>
          </Typography>
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
            Hotjar
          </Typography>
          <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.6 }}>
            Hotjar gir oss innsikt i brukeropplevelsen gjennom heatmaps, opptak av brukerøkter 
            og tilbakemeldingsverktøy. Dette hjelper oss å forbedre nettstedet vårt.
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Les mer om Hotjars personvernerklæring:{' '}
            <a href="https://www.hotjar.com/legal/policies/privacy/" target="_blank" rel="noopener noreferrer">
              https://www.hotjar.com/legal/policies/privacy/
            </a>
          </Typography>
        </Box>
      </Box>

      {/* How to control cookies */}
      <Box sx={{ mb: 6 }}>
        <Typography variant="h4" sx={{ mb: 3, fontWeight: 600 }}>
          Hvordan kontrollere informasjonskapsler
        </Typography>
        
        <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.6 }}>
          Du kan kontrollere og/eller slette informasjonskapsler etter eget ønske. Du kan slette 
          alle informasjonskapsler som allerede er på datamaskinen din, og du kan stille inn de 
          fleste nettlesere til å forhindre at de blir plassert.
        </Typography>

        <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
          Gjennom vårt samtykkebanners
        </Typography>
        <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.6 }}>
          Du kan når som helst endre dine valg ved å klikke på "Administrer alternativer" 
          i vårt samtykkebanners som vises nederst på siden.
        </Typography>

        <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
          Gjennom nettleserinnstillinger
        </Typography>
        <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.6 }}>
          De fleste nettlesere lar deg:
        </Typography>
        <Box component="ul" sx={{ pl: 3, mb: 3 }}>
          <li>Se hvilke informasjonskapsler du har og slette dem individuelt</li>
          <li>Blokkere tredjepartskapslera</li>
          <li>Blokkere informasjonskapsler fra bestemte nettsteder</li>
          <li>Blokkere alle informasjonskapsler</li>
          <li>Slette alle informasjonskapsler når du lukker nettleseren</li>
        </Box>
      </Box>

      {/* Contact section */}
      <Box sx={{ 
        p: 3, 
        backgroundColor: 'grey.50', 
        borderRadius: 2,
        textAlign: 'center'
      }}>
        <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
          Har du spørsmål om informasjonskapsler?
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
          Hvis du har spørsmål om våre informasjonskapsler eller denne erklæringen, 
          ta gjerne kontakt med oss.
        </Typography>
        <Button 
          variant="contained" 
          size="large"
          onClick={() => window.location.href = 'mailto:post@gumbox.no'}
        >
          Kontakt oss
        </Button>
      </Box>
    </Container>
  );
}