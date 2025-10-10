'use client';

import { Box, Container, Typography, Paper } from '@mui/material';

export default function CookiePolicyPage() {
  return (
    <Box sx={{ py: 8, mt: 4 }}>
      <Container maxWidth="md">
        <Paper sx={{ p: 4, borderRadius: 2, boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)' }}>
          <Typography variant="h3" component="h1" gutterBottom sx={{ mb: 4, fontWeight: 600, color: '#333' }}>
            Informasjonskapsler (Cookies)
          </Typography>

          <Typography variant="body1" paragraph sx={{ mb: 3, lineHeight: 1.7 }}>
            Denne siden forklarer hvordan GumBox bruker informasjonskapsler (cookies) på vår nettside gumbox.no.
          </Typography>

          <Typography variant="h5" component="h2" gutterBottom sx={{ mt: 4, mb: 2, fontWeight: 600, color: '#444' }}>
            Hva er informasjonskapsler?
          </Typography>
          <Typography variant="body1" paragraph sx={{ mb: 3, lineHeight: 1.7 }}>
            Informasjonskapsler er små tekstfiler som lagres på din enhet når du besøker en nettside. 
            De brukes til å huske dine preferanser og forbedre din opplevelse på nettsiden.
          </Typography>

          <Typography variant="h5" component="h2" gutterBottom sx={{ mt: 4, mb: 2, fontWeight: 600, color: '#444' }}>
            Hvilke informasjonskapsler bruker vi?
          </Typography>
          <Typography variant="body1" paragraph sx={{ mb: 3, lineHeight: 1.7 }}>
            Vi bruker både nødvendige og valgfrie informasjonskapsler for å forbedre din opplevelse på nettsiden. 
            Tabellene nedenfor viser en oversikt over våre informasjonskapsler:
          </Typography>

          <Typography variant="h6" component="h3" gutterBottom sx={{ mt: 3, mb: 2, fontWeight: 600, color: '#555' }}>
            Nødvendige informasjonskapsler
          </Typography>
          <Typography variant="body1" paragraph sx={{ mb: 3, lineHeight: 1.7 }}>
            Disse informasjonskapslene er nødvendige for at nettsiden skal fungere korrekt og kan ikke deaktiveres:
          </Typography>
          
          <Box sx={{ overflowX: 'auto', mb: 4 }}>
            <Box component="table" sx={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.875rem' }}>
              <Box component="thead">
                <Box component="tr" sx={{ backgroundColor: '#F7F7F7' }}>
                  <Box component="th" sx={{ p: 2, textAlign: 'left', fontWeight: 600, border: '1px solid #E0E0E0' }}>Navn</Box>
                  <Box component="th" sx={{ p: 2, textAlign: 'left', fontWeight: 600, border: '1px solid #E0E0E0' }}>Type</Box>
                  <Box component="th" sx={{ p: 2, textAlign: 'left', fontWeight: 600, border: '1px solid #E0E0E0' }}>Leverandør</Box>
                  <Box component="th" sx={{ p: 2, textAlign: 'left', fontWeight: 600, border: '1px solid #E0E0E0' }}>Utløp</Box>
                  <Box component="th" sx={{ p: 2, textAlign: 'left', fontWeight: 600, border: '1px solid #E0E0E0' }}>Formål</Box>
                </Box>
              </Box>
              <Box component="tbody">
                <Box component="tr">
                  <Box component="td" sx={{ p: 2, border: '1px solid #E0E0E0', fontFamily: 'monospace' }}>__stripe_mid</Box>
                  <Box component="td" sx={{ p: 2, border: '1px solid #E0E0E0' }}>Tredjeparts HTTP</Box>
                  <Box component="td" sx={{ p: 2, border: '1px solid #E0E0E0' }}>stripe.com</Box>
                  <Box component="td" sx={{ p: 2, border: '1px solid #E0E0E0' }}>1 år</Box>
                  <Box component="td" sx={{ p: 2, border: '1px solid #E0E0E0' }}>Brukes for å gjennomføre sikre kredittkortbetalinger. Stripe er vår betalingsleverandør.</Box>
                </Box>
                <Box component="tr" sx={{ backgroundColor: '#FAFAFA' }}>
                  <Box component="td" sx={{ p: 2, border: '1px solid #E0E0E0', fontFamily: 'monospace' }}>__stripe_sid</Box>
                  <Box component="td" sx={{ p: 2, border: '1px solid #E0E0E0' }}>Tredjeparts HTTP</Box>
                  <Box component="td" sx={{ p: 2, border: '1px solid #E0E0E0' }}>stripe.com</Box>
                  <Box component="td" sx={{ p: 2, border: '1px solid #E0E0E0' }}>1 dag</Box>
                  <Box component="td" sx={{ p: 2, border: '1px solid #E0E0E0' }}>Brukes for å gjennomføre sikre kredittkortbetalinger. Stripe er vår betalingsleverandør.</Box>
                </Box>
                <Box component="tr">
                  <Box component="td" sx={{ p: 2, border: '1px solid #E0E0E0', fontFamily: 'monospace' }}>gumbox_session</Box>
                  <Box component="td" sx={{ p: 2, border: '1px solid #E0E0E0' }}>Førsteparts HTTP</Box>
                  <Box component="td" sx={{ p: 2, border: '1px solid #E0E0E0' }}>GumBox</Box>
                  <Box component="td" sx={{ p: 2, border: '1px solid #E0E0E0' }}>Økt</Box>
                  <Box component="td" sx={{ p: 2, border: '1px solid #E0E0E0' }}>Nødvendig for sikker pålogging og oppbevaring av handlekurv.</Box>
                </Box>
                <Box component="tr" sx={{ backgroundColor: '#FAFAFA' }}>
                  <Box component="td" sx={{ p: 2, border: '1px solid #E0E0E0', fontFamily: 'monospace' }}>gumbox-cookie-consent</Box>
                  <Box component="td" sx={{ p: 2, border: '1px solid #E0E0E0' }}>Førsteparts HTML</Box>
                  <Box component="td" sx={{ p: 2, border: '1px solid #E0E0E0' }}>GumBox</Box>
                  <Box component="td" sx={{ p: 2, border: '1px solid #E0E0E0' }}>Permanent</Box>
                  <Box component="td" sx={{ p: 2, border: '1px solid #E0E0E0' }}>Husker dine cookie-preferanser for å unngå gjentatte forespørsler.</Box>
                </Box>
              </Box>
            </Box>
          </Box>

          <Typography variant="h6" component="h3" gutterBottom sx={{ mt: 4, mb: 2, fontWeight: 600, color: '#555' }}>
            Analytiske informasjonskapsler (valgfri)
          </Typography>
          <Typography variant="body1" paragraph sx={{ mb: 3, lineHeight: 1.7 }}>
            Disse informasjonskapslene hjelper oss å forstå hvordan besøkende bruker nettsiden. Du kan velge å godta eller avslå disse:
          </Typography>
          
          <Box sx={{ overflowX: 'auto', mb: 4 }}>
            <Box component="table" sx={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.875rem' }}>
              <Box component="thead">
                <Box component="tr" sx={{ backgroundColor: '#F7F7F7' }}>
                  <Box component="th" sx={{ p: 2, textAlign: 'left', fontWeight: 600, border: '1px solid #E0E0E0' }}>Navn</Box>
                  <Box component="th" sx={{ p: 2, textAlign: 'left', fontWeight: 600, border: '1px solid #E0E0E0' }}>Type</Box>
                  <Box component="th" sx={{ p: 2, textAlign: 'left', fontWeight: 600, border: '1px solid #E0E0E0' }}>Leverandør</Box>
                  <Box component="th" sx={{ p: 2, textAlign: 'left', fontWeight: 600, border: '1px solid #E0E0E0' }}>Utløp</Box>
                  <Box component="th" sx={{ p: 2, textAlign: 'left', fontWeight: 600, border: '1px solid #E0E0E0' }}>Formål</Box>
                </Box>
              </Box>
              <Box component="tbody">
                <Box component="tr">
                  <Box component="td" sx={{ p: 2, border: '1px solid #E0E0E0', fontFamily: 'monospace' }}>_ga</Box>
                  <Box component="td" sx={{ p: 2, border: '1px solid #E0E0E0' }}>Tredjeparts HTTP</Box>
                  <Box component="td" sx={{ p: 2, border: '1px solid #E0E0E0' }}>google.com</Box>
                  <Box component="td" sx={{ p: 2, border: '1px solid #E0E0E0' }}>2 år</Box>
                  <Box component="td" sx={{ p: 2, border: '1px solid #E0E0E0' }}>Sett en unik ID for å generere statistiske data om hvordan du bruker GumBox.</Box>
                </Box>
                <Box component="tr" sx={{ backgroundColor: '#FAFAFA' }}>
                  <Box component="td" sx={{ p: 2, border: '1px solid #E0E0E0', fontFamily: 'monospace' }}>_gat</Box>
                  <Box component="td" sx={{ p: 2, border: '1px solid #E0E0E0' }}>Tredjeparts HTTP</Box>
                  <Box component="td" sx={{ p: 2, border: '1px solid #E0E0E0' }}>google.com</Box>
                  <Box component="td" sx={{ p: 2, border: '1px solid #E0E0E0' }}>1 dag</Box>
                  <Box component="td" sx={{ p: 2, border: '1px solid #E0E0E0' }}>Brukes av Google Analytics til å begrense forespørselsraten.</Box>
                </Box>
                <Box component="tr">
                  <Box component="td" sx={{ p: 2, border: '1px solid #E0E0E0', fontFamily: 'monospace' }}>_gid</Box>
                  <Box component="td" sx={{ p: 2, border: '1px solid #E0E0E0' }}>Tredjeparts HTTP</Box>
                  <Box component="td" sx={{ p: 2, border: '1px solid #E0E0E0' }}>google.com</Box>
                  <Box component="td" sx={{ p: 2, border: '1px solid #E0E0E0' }}>1 dag</Box>
                  <Box component="td" sx={{ p: 2, border: '1px solid #E0E0E0' }}>Sett en unik ID for å generere statistiske data om hvordan du bruker GumBox.</Box>
                </Box>
                <Box component="tr" sx={{ backgroundColor: '#FAFAFA' }}>
                  <Box component="td" sx={{ p: 2, border: '1px solid #E0E0E0', fontFamily: 'monospace' }}>collect</Box>
                  <Box component="td" sx={{ p: 2, border: '1px solid #E0E0E0' }}>Tredjeparts pixel</Box>
                  <Box component="td" sx={{ p: 2, border: '1px solid #E0E0E0' }}>google.com</Box>
                  <Box component="td" sx={{ p: 2, border: '1px solid #E0E0E0' }}>Økt</Box>
                  <Box component="td" sx={{ p: 2, border: '1px solid #E0E0E0' }}>Send data til Google Analytics om enheten din og brukeratferd.</Box>
                </Box>
              </Box>
            </Box>
          </Box>

          <Typography variant="h6" component="h3" gutterBottom sx={{ mt: 4, mb: 2, fontWeight: 600, color: '#555' }}>
            Markedsføringsinformasjonskapsler (valgfri)
          </Typography>
          <Typography variant="body1" paragraph sx={{ mb: 3, lineHeight: 1.7 }}>
            Disse informasjonskapslene brukes til å vise deg relevante annonser og tilbud. Du kan velge å godta eller avslå disse:
          </Typography>
          
          <Box sx={{ overflowX: 'auto', mb: 4 }}>
            <Box component="table" sx={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.875rem' }}>
              <Box component="thead">
                <Box component="tr" sx={{ backgroundColor: '#F7F7F7' }}>
                  <Box component="th" sx={{ p: 2, textAlign: 'left', fontWeight: 600, border: '1px solid #E0E0E0' }}>Navn</Box>
                  <Box component="th" sx={{ p: 2, textAlign: 'left', fontWeight: 600, border: '1px solid #E0E0E0' }}>Type</Box>
                  <Box component="th" sx={{ p: 2, textAlign: 'left', fontWeight: 600, border: '1px solid #E0E0E0' }}>Leverandør</Box>
                  <Box component="th" sx={{ p: 2, textAlign: 'left', fontWeight: 600, border: '1px solid #E0E0E0' }}>Utløp</Box>
                  <Box component="th" sx={{ p: 2, textAlign: 'left', fontWeight: 600, border: '1px solid #E0E0E0' }}>Formål</Box>
                </Box>
              </Box>
              <Box component="tbody">
                <Box component="tr">
                  <Box component="td" sx={{ p: 2, border: '1px solid #E0E0E0', fontFamily: 'monospace' }}>_fbp</Box>
                  <Box component="td" sx={{ p: 2, border: '1px solid #E0E0E0' }}>Tredjeparts HTTP</Box>
                  <Box component="td" sx={{ p: 2, border: '1px solid #E0E0E0' }}>facebook.com</Box>
                  <Box component="td" sx={{ p: 2, border: '1px solid #E0E0E0' }}>3 måneder</Box>
                  <Box component="td" sx={{ p: 2, border: '1px solid #E0E0E0' }}>Brukes av Facebook til å levere målrettede annonser og måle annonsenes effektivitet.</Box>
                </Box>
                <Box component="tr" sx={{ backgroundColor: '#FAFAFA' }}>
                  <Box component="td" sx={{ p: 2, border: '1px solid #E0E0E0', fontFamily: 'monospace' }}>fr</Box>
                  <Box component="td" sx={{ p: 2, border: '1px solid #E0E0E0' }}>Tredjeparts HTTP</Box>
                  <Box component="td" sx={{ p: 2, border: '1px solid #E0E0E0' }}>facebook.com</Box>
                  <Box component="td" sx={{ p: 2, border: '1px solid #E0E0E0' }}>3 måneder</Box>
                  <Box component="td" sx={{ p: 2, border: '1px solid #E0E0E0' }}>Brukes av Facebook til å levere målrettede annonser basert på brukeratferd.</Box>
                </Box>
                <Box component="tr">
                  <Box component="td" sx={{ p: 2, border: '1px solid #E0E0E0', fontFamily: 'monospace' }}>tr</Box>
                  <Box component="td" sx={{ p: 2, border: '1px solid #E0E0E0' }}>Tredjeparts pixel</Box>
                  <Box component="td" sx={{ p: 2, border: '1px solid #E0E0E0' }}>facebook.com</Box>
                  <Box component="td" sx={{ p: 2, border: '1px solid #E0E0E0' }}>Økt</Box>
                  <Box component="td" sx={{ p: 2, border: '1px solid #E0E0E0' }}>Sporer konverteringer og brukeratferd for Facebook-annonser.</Box>
                </Box>
              </Box>
            </Box>
          </Box>

          <Typography variant="h6" component="h3" gutterBottom sx={{ mt: 4, mb: 2, fontWeight: 600, color: '#555' }}>
            Brukeropplevelse og analyse (valgfri)
          </Typography>
          <Typography variant="body1" paragraph sx={{ mb: 3, lineHeight: 1.7 }}>
            Disse tjenestene hjelper oss å forstå hvordan du bruker nettsiden og forbedre opplevelsen:
          </Typography>
          
          <Box sx={{ overflowX: 'auto', mb: 4 }}>
            <Box component="table" sx={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.875rem' }}>
              <Box component="thead">
                <Box component="tr" sx={{ backgroundColor: '#F7F7F7' }}>
                  <Box component="th" sx={{ p: 2, textAlign: 'left', fontWeight: 600, border: '1px solid #E0E0E0' }}>Navn</Box>
                  <Box component="th" sx={{ p: 2, textAlign: 'left', fontWeight: 600, border: '1px solid #E0E0E0' }}>Type</Box>
                  <Box component="th" sx={{ p: 2, textAlign: 'left', fontWeight: 600, border: '1px solid #E0E0E0' }}>Leverandør</Box>
                  <Box component="th" sx={{ p: 2, textAlign: 'left', fontWeight: 600, border: '1px solid #E0E0E0' }}>Utløp</Box>
                  <Box component="th" sx={{ p: 2, textAlign: 'left', fontWeight: 600, border: '1px solid #E0E0E0' }}>Formål</Box>
                </Box>
              </Box>
              <Box component="tbody">
                <Box component="tr">
                  <Box component="td" sx={{ p: 2, border: '1px solid #E0E0E0', fontFamily: 'monospace' }}>_hjid</Box>
                  <Box component="td" sx={{ p: 2, border: '1px solid #E0E0E0' }}>Tredjeparts HTTP</Box>
                  <Box component="td" sx={{ p: 2, border: '1px solid #E0E0E0' }}>hotjar.com</Box>
                  <Box component="td" sx={{ p: 2, border: '1px solid #E0E0E0' }}>1 år</Box>
                  <Box component="td" sx={{ p: 2, border: '1px solid #E0E0E0' }}>Sett en unik ID for å forstå brukeratferd gjennom heatmaps og session recordings.</Box>
                </Box>
                <Box component="tr" sx={{ backgroundColor: '#FAFAFA' }}>
                  <Box component="td" sx={{ p: 2, border: '1px solid #E0E0E0', fontFamily: 'monospace' }}>_hjIncludedInSample</Box>
                  <Box component="td" sx={{ p: 2, border: '1px solid #E0E0E0' }}>Tredjeparts HTTP</Box>
                  <Box component="td" sx={{ p: 2, border: '1px solid #E0E0E0' }}>hotjar.com</Box>
                  <Box component="td" sx={{ p: 2, border: '1px solid #E0E0E0' }}>Økt</Box>
                  <Box component="td" sx={{ p: 2, border: '1px solid #E0E0E0' }}>Bestemmer om brukerens navigasjon skal registreres for Hotjar-analyse.</Box>
                </Box>
              </Box>
            </Box>
          </Box>

          <Typography variant="h5" component="h2" gutterBottom sx={{ mt: 4, mb: 2, fontWeight: 600, color: '#444' }}>
            Fremtidige utvidelser
          </Typography>
          <Typography variant="body1" paragraph sx={{ mb: 3, lineHeight: 1.7 }}>
            Vi vurderer å implementere følgende tilleggstjenester i fremtiden:
          </Typography>
          <Box component="ul" sx={{ mb: 3, pl: 3 }}>
            <Typography component="li" variant="body1" sx={{ mb: 1 }}>
              <strong>Google Ads:</strong> For utvidet produktmarkedsføring og retargeting
            </Typography>
            <Typography component="li" variant="body1" sx={{ mb: 1 }}>
              <strong>Microsoft Clarity:</strong> For ytterligere brukeropplevelsesanalyse
            </Typography>
          </Box>

          <Typography variant="body1" paragraph sx={{ mb: 3, lineHeight: 1.7, fontStyle: 'italic', color: '#666' }}>
            Før vi implementerer disse tjenestene, vil du få mulighet til å velge om du ønsker å delta eller ikke.
          </Typography>

          <Typography variant="h5" component="h2" gutterBottom sx={{ mt: 4, mb: 2, fontWeight: 600, color: '#444' }}>
            Hvordan kontrollere informasjonskapsler
          </Typography>
          <Typography variant="body1" paragraph sx={{ mb: 3, lineHeight: 1.7 }}>
            Du kan kontrollere og administrere informasjonskapsler på flere måter:
          </Typography>

          <Typography variant="h6" component="h3" gutterBottom sx={{ mt: 3, mb: 1, fontWeight: 600, color: '#555' }}>
            Nettleserinnstillinger
          </Typography>
          <Typography variant="body1" paragraph sx={{ mb: 2, lineHeight: 1.7 }}>
            De fleste nettlesere lar deg kontrollere informasjonskapsler gjennom innstillingene. 
            Du kan vanligvis finne disse innstillingene i "Personvern" eller "Sikkerhet" seksjonen i nettleseren din.
          </Typography>

          <Typography variant="h6" component="h3" gutterBottom sx={{ mt: 3, mb: 1, fontWeight: 600, color: '#555' }}>
            Konsekvenser av å deaktivere informasjonskapsler
          </Typography>
          <Typography variant="body1" paragraph sx={{ mb: 3, lineHeight: 1.7 }}>
            Hvis du velger å deaktivere informasjonskapsler, kan noen funksjoner på nettsiden ikke fungere optimalt:
          </Typography>
          <Box component="ul" sx={{ mb: 3, pl: 3 }}>
            <Typography component="li" variant="body1" sx={{ mb: 1 }}>
              Handlekurv fungerer ikke uten økt-cookies
            </Typography>
            <Typography component="li" variant="body1" sx={{ mb: 1 }}>
              Betalinger kan ikke gjennomføres uten Stripe-cookies
            </Typography>
            <Typography component="li" variant="body1" sx={{ mb: 1 }}>
              Du vil få cookie-varsel ved hvert besøk
            </Typography>
          </Box>

          <Typography variant="h5" component="h2" gutterBottom sx={{ mt: 4, mb: 2, fontWeight: 600, color: '#444' }}>
            Oppdateringer av denne policyen
          </Typography>
          <Typography variant="body1" paragraph sx={{ mb: 3, lineHeight: 1.7 }}>
            Vi vil oppdatere denne informasjonskapselpolicyen når vi implementerer nye tjenester. 
            Du vil få mulighet til å godkjenne nye cookies før de tas i bruk.
          </Typography>

          <Typography variant="h5" component="h2" gutterBottom sx={{ mt: 4, mb: 2, fontWeight: 600, color: '#444' }}>
            Kontakt oss
          </Typography>
          <Typography variant="body1" paragraph sx={{ mb: 3, lineHeight: 1.7 }}>
            Hvis du har spørsmål om vår bruk av informasjonskapsler, kan du kontakte oss på:
          </Typography>
          <Box sx={{ mb: 3 }}>
            <Typography variant="body1" sx={{ mb: 1 }}>
              <strong>E-post:</strong> post@gumbox.no
            </Typography>
            <Typography variant="body1" sx={{ mb: 1 }}>
              <strong>Telefon:</strong> +47 979 57 676
            </Typography>
          </Box>

          <Typography variant="body2" sx={{ mt: 4, color: 'grey.600', fontStyle: 'italic' }}>
            Sist oppdatert: 10. oktober 2024
          </Typography>
        </Paper>
      </Container>
    </Box>
  );
}