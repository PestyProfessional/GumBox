'use client';

import { useState } from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Accordion, 
  AccordionSummary, 
  AccordionDetails,
  Button,
  Divider
} from '@mui/material';
import { useRouter } from 'next/navigation';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useTranslation } from '@/hooks/useTranslation';
import { faqContent, FAQItem } from '@/lib/faqContent';
import { useLanguage } from '@/contexts/LanguageContext';

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export default function FAQ() {
  const { t } = useTranslation();
  const { language } = useLanguage();
  const router = useRouter();
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  // Get FAQ data based on current language
  const currentFaqContent = faqContent[language];
  const faqData: FAQItem[] = currentFaqContent.data;
  
  // Keep the old data as fallback (remove this after testing)
  const oldFaqData: FAQItem[] = [
    // Ordre og levering
    {
      category: "Ordre og levering",
      question: "Hvor lang tid tar det å få levert min første GumBox?",
      answer: "Din første GumBox sendes normalt innen 2-3 virkedager etter bestilling. Leveringstiden avhenger av din valgte leverandør. Du kan spore ordren din ved å gå til 'Spor ordre' nederst på siden, hvor du finner sporingslenker for alle våre leverandører:\n\n• Posten\n• PostNord  \n• Helthjem\n\nDu vil også motta en sporingslink på e-post når pakken er sendt."
    },
    {
      category: "Ordre og levering",
      question: "Kan jeg endre leveringsadressen min?",
      answer: "Ja, du kan endre leveringsadressen din når som helst før din neste levering. Kontakt vår kundeservice på post@gumbox.no minst 3 uker før neste leveringsdato."
    },
    {
      category: "Ordre og levering",
      question: "Hva skjer hvis jeg ikke er hjemme når pakken kommer?",
      answer: "Hvis du ikke er hjemme, vil leverandøren:\n\n• Levere pakken til nærmeste hentepunkt\n• Legge igjen en hentemelding\n• Gi deg informasjon om hvor pakken kan hentes\n\nPakken oppbevares normalt i 14 dager før den returneres til oss."
    },

    // Abonnement og fakturering
    {
      category: "Abonnement og fakturering",
      question: "Hvordan fungerer abonnementet?",
      answer: "GumBox er et månedlig abonnement hvor du får levert en kurert boks med tyggegummi hver måned. Du kan velge mellom:\n\n• Månedlig Plan (299 NOK) - kan avsluttes når som helst\n• 3 Måned Plan (249 NOK/måned) - forplikter til 3 måneder\n• 6 Måned Plan (229 NOK/måned) - forplikter til 6 måneder\n• 12 Måned Plan (199 NOK/måned) - forplikter til 12 måneder\n\nAlle priser faktureres månedlig. Lengre abonnementer gir betydelig rabatt per boks."
    },
    {
      category: "Abonnement og fakturering",
      question: "Kan jeg avbryte abonnementet mitt?",
      answer: "Avhenger av hvilken plan du har valgt:\n\n• Månedlig Plan: Kan avsluttes når som helst uten bindingstid\n• 3 Måned Plan: Forplikter til 3 måneder (bindingstid)\n• 6 Måned Plan: Forplikter til 6 måneder (bindingstid)\n• 12 Måned Plan: Forplikter til 12 måneder (bindingstid)\n\nFor planer med bindingstid kan du ikke avbryte før perioden er ferdig, men abonnementet fornyes ikke automatisk.\n\nFor å avbryte, kontakt oss på post@gumbox.no minst 3 uker før neste faktureringsperiode."
    },
    {
      category: "Abonnement og fakturering",
      question: "Når blir jeg fakturert?",
      answer: "Alle abonnementer faktureres månedlig, uavhengig av hvilken plan du velger:\n\n• Månedlig Plan: 299 NOK hver måned\n• 3 Måned Plan: 249 NOK hver måned (forplikter til 3 måneder)\n• 6 Måned Plan: 229 NOK hver måned (forplikter til 6 måneder)\n• 12 Måned Plan: 199 NOK hver måned (forplikter til 12 måneder)\n\nDu får en faktura på e-post før hver belastning. Total pluss fraktgebyr beregnes ved kassen."
    },
    {
      category: "Abonnement og fakturering",
      question: "Hvilke betalingsmåter aksepterer dere?",
      answer: "Vi aksepterer følgende betalingsmåter:\n\n• Visa og Mastercard\n• American Express\n• Klarna (del opp betalingen)\n• Vipps\n\nAlle betalinger er sikre og krypterte."
    },

    // Retur og reklamasjon
    {
      category: "Retur og reklamasjon",
      question: "Kan jeg returnere GumBox?",
      answer: "På grunn av hygieniske årsaker kan ikke tyggegummi returneres etter at pakken er åpnet. Dette er i henhold til norsk forbrukerlovgivning.\n\nDu har likevel angrerett i 14 dager fra mottak, men kun for uåpnede pakker i original emballasje.\n\nVi anbefaler at du prøver en måned først for å se om GumBox passer for deg."
    },
    {
      category: "Retur og reklamasjon",
      question: "Hva hvis jeg mottok feil eller skadet vare?",
      answer: "Hvis du har mottatt feil eller skadet vare, kontakt oss umiddelbart på post@gumbox.no med:\n\n• Ordrenummer\n• Foto av produktet/skaden\n• Beskrivelse av problemet\n\nVi sender da en erstatning kostnadsfritt, eller refunderer beløpet hvis det ikke er mulig å erstatte varen."
    },
    {
      category: "Retur og reklamasjon",
      question: "Hva hvis jeg ikke liker innholdet i boksen?",
      answer: "Vi kurerer tyggegummi fra hele verden og prøver å gi deg en variert opplevelse hver måned. Selv om vi ikke kan garantere at alle produkter vil passe din smak, jobber vi kontinuerlig med å forbedre vårt utvalg.\n\nVi setter pris på tilbakemeldinger på post@gumbox.no for å hjelpe oss å forbedre fremtidige bokser."
    },

    // Produkter og innhold
    {
      category: "Produkter og innhold",
      question: "Hvor mange produkter får jeg i hver boks?",
      answer: "Hver GumBox inneholder 8-12 forskjellige tyggegummi-produkter fra forskjellige merker og land. Boksen er kurert for å gi deg en variert opplevelse med både kjente og ukjente smaker."
    },
    {
      category: "Produkter og innhold",
      question: "Er tyggegummiene glutenfrie/veganske?",
      answer: "Mange av våre produkter er glutenfrie og veganske, men ikke alle. Vi jobber med å inkludere flere allergivennlige alternativer.\n\nHvis du har spesielle kostbehov eller allergier, vennligst kontakt oss på post@gumbox.no så kan vi gi deg informasjon om spesifikke produkter."
    },
    {
      category: "Produkter og innhold",
      question: "Kan jeg påvirke innholdet i boksen min?",
      answer: "For øyeblikket tilbyr vi ikke personaliserte bokser. Alle kunder får samme kurerte utvalg hver måned. Dette lar oss holde kostnadene nede og gi deg den beste prisen.\n\nVi vurderer å tilby personalisering i fremtiden basert på tilbakemeldinger fra våre kunder."
    },

    // Konto og personvern
    {
      category: "Konto og personvern",
      question: "Hvordan endrer jeg abonnementsinformasjonen min?",
      answer: "Du kan endre din abonnementsinformasjon ved å kontakte vår kundeservice på post@gumbox.no. Vi kan hjelpe deg med å oppdatere:\n\n• E-postadresse\n• Leveringsadresse\n• Betalingsinformasjon\n• Telefonnummer"
    },
    {
      category: "Konto og personvern",
      question: "Hvordan behandler dere mine personopplysninger?",
      answer: "Vi tar personvern svært alvorlig og følger GDPR-regelverket. Dine personopplysninger brukes kun til:\n\n• Behandling og levering av din bestilling\n• Kundeservice og kommunikasjon\n• Forbedring av våre tjenester\n\nVi selger aldri dine data til tredjeparter. Les vår komplette personvernerklæring for mer informasjon."
    }
  ];

  // Group FAQ by category
  const groupedFAQ = faqData.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {} as Record<string, FAQItem[]>);

  return (
    <Container maxWidth="md" sx={{ py: 8 }}>
      {/* Header */}
      <Box sx={{ mb: 4 }}>
        <Button
          startIcon={<ArrowBackIcon />}
          onClick={() => router.back()}
          sx={{ 
            mb: 2,
            color: 'text.secondary',
            '&:hover': {
              backgroundColor: 'rgba(0, 0, 0, 0.04)'
            }
          }}
        >
          {t('back')}
        </Button>
        
        <Typography variant="h3" component="h1" sx={{ mb: 2, fontWeight: 700 }}>
          {t('faqTitle')}
        </Typography>
        
        <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
          {currentFaqContent.subtitle}
        </Typography>
      </Box>

      {/* FAQ Sections */}
      {Object.entries(groupedFAQ).map(([category, items], categoryIndex) => (
        <Box key={category} sx={{ mb: 4 }}>
          <Typography 
            variant="h5" 
            sx={{ 
              mb: 2, 
              fontWeight: 600,
              color: 'primary.main'
            }}
          >
            {category}
          </Typography>
          
          {items.map((item, index) => {
            const panelId = `${categoryIndex}-${index}`;
            return (
              <Accordion
                key={panelId}
                expanded={expanded === panelId}
                onChange={handleChange(panelId)}
                sx={{
                  mb: 1,
                  '&:before': {
                    display: 'none',
                  },
                  boxShadow: 'none',
                  border: '1px solid',
                  borderColor: 'divider',
                  borderRadius: '8px !important',
                  '&.Mui-expanded': {
                    margin: '0 0 8px 0',
                  }
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  sx={{
                    '& .MuiAccordionSummary-content': {
                      margin: '16px 0',
                    }
                  }}
                >
                  <Typography variant="h6" sx={{ fontWeight: 500 }}>
                    {item.question}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography 
                    variant="body1" 
                    sx={{ 
                      whiteSpace: 'pre-line',
                      lineHeight: 1.6 
                    }}
                  >
                    {item.answer}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            );
          })}
          
          {categoryIndex < Object.keys(groupedFAQ).length - 1 && (
            <Divider sx={{ mt: 4 }} />
          )}
        </Box>
      ))}

      {/* Contact Section */}
      <Box sx={{ 
        mt: 6, 
        p: 3, 
        backgroundColor: 'grey.50', 
        borderRadius: 2,
        textAlign: 'center'
      }}>
        <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
          {currentFaqContent.contactSectionTitle}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
          {currentFaqContent.contactSectionSubtitle}
        </Typography>
        <Button 
          variant="contained" 
          size="large"
          onClick={() => window.location.href = 'mailto:post@gumbox.no'}
        >
          {currentFaqContent.contactButton}
        </Button>
      </Box>
    </Container>
  );
}