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
  Link as MuiLink
} from '@mui/material';
import { useRouter } from 'next/navigation';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Link from 'next/link';

export default function PersonvernPage() {
  const router = useRouter();

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
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
          Tilbake
        </Button>
        
        <Typography variant="h3" component="h1" sx={{ mb: 2, fontWeight: 700 }}>
          Personvernerklæring
        </Typography>
        
        <Typography variant="body2" color="text.secondary" sx={{ mb: 4 }}>
          Gyldig fra: {new Date().toLocaleDateString('nb-NO', { year: 'numeric', month: 'long', day: 'numeric' })}
        </Typography>
      </Box>

      {/* Content */}
      <Box sx={{ '& h2': { mt: 6, mb: 3, fontWeight: 600 }, '& h3': { mt: 4, mb: 2, fontWeight: 600 }, '& p': { mb: 2, lineHeight: 1.6 } }}>
        
        {/* Section 1 */}
        <Typography variant="h4" component="h2">
          1. Generell informasjon
        </Typography>
        
        <Typography variant="h5" component="h3">
          1.1 Om denne personvernerklæringen
        </Typography>
        <Typography variant="body1">
          Denne personvernerklæringen forklarer hvordan vi samler inn og bruker personopplysninger fra 
          enkeltpersoner («du» og «dine») som bruker nettstedet https://gumbox.no, relatert programvare 
          og tjenester (samlet kalt «GumBox»). Vi forklarer også hvilke tiltak vi tar for å beskytte dine 
          personopplysninger mot uautorisert tilgang. Det er viktig for oss at du føler deg trygg når du 
          bruker GumBox, derfor legger vi stor vekt på å beskytte ditt personvern.
        </Typography>

        <Typography variant="h5" component="h3">
          1.2 Behandlingsansvarlig
        </Typography>
        <Typography variant="body1">
          Selskapet som er ansvarlig for behandlingen av dine personopplysninger gjennom GumBox er 
          GumBox Norge AS, med forretningsadresse Norge («vi», «oss» og «våre»). Vi fungerer som 
          behandlingsansvarlig for dine personopplysninger.
        </Typography>

        <Typography variant="h5" component="h3">
          1.3 Om GumBox
        </Typography>
        <Typography variant="body1">
          GumBox er en online plattform som tilbyr månedlige abonnementsbokser med kurerte tyggegummi 
          fra hele verden. Vi leverer eksotiske smaker og unike produkter direkte til døren din.
        </Typography>

        <Typography variant="h5" component="h3">
          1.4 Gjeldende lover
        </Typography>
        <Typography variant="body1">
          Behandlingen av dine personopplysninger gjennomføres i samsvar med gjeldende nasjonale og 
          internasjonale databeskyttelseslover, inkludert EUs personvernforordning (GDPR) og norsk 
          personopplysningslov.
        </Typography>

        <Typography variant="h5" component="h3">
          1.5 Kontakt oss
        </Typography>
        <Typography variant="body1">
          Hvis du har spørsmål relatert til vår personvernerklæring eller håndteringen av dine 
          personopplysninger, oppfordrer vi deg til å kontakte oss på telefon +47 979 57 676 eller 
          e-post post@gumbox.no.
        </Typography>

        <Typography variant="h5" component="h3">
          1.6 Informasjonskapsler
        </Typography>
        <Typography variant="body1">
          Vi bruker informasjonskapsler på GumBox. For mer informasjon om vår bruk av informasjonskapsler, 
          se vår{' '}
          <Link href="/cookies" passHref>
            <MuiLink color="primary">informasjonskapsel-erklæring</MuiLink>
          </Link>.
        </Typography>

        <Typography variant="h5" component="h3">
          1.7 Barns personvern
        </Typography>
        <Typography variant="body1">
          Vi tillater ikke personer under 18 år å bruke GumBox. Derfor samler vi ikke bevisst inn 
          personopplysninger fra barn. Hvis du blir oppmerksom på at personopplysninger ble gitt av 
          en person under 18 år, ber vi deg vennligst informere oss så snart som mulig slik at vi 
          kan ta passende tiltak.
        </Typography>

        <Typography variant="h5" component="h3">
          1.8 Viktige begreper
        </Typography>
        <Typography variant="body1">
          I denne personvernerklæringen vil du møte gjentakende begreper. For din bekvemmelighet 
          vil vi gjerne forklare hva slike begreper betyr:
        </Typography>
        <Box component="ul" sx={{ pl: 3, mb: 3 }}>
          <li><strong>Samtykke</strong> betyr en frivillig gitt, spesifikk, informert og utvetydig avtale om behandling av personopplysninger</li>
          <li><strong>Behandlingsansvarlig</strong> betyr den som bestemmer formålene og midlene for behandlingen av personopplysninger</li>
          <li><strong>Databehandler</strong> betyr en fysisk eller juridisk person som behandler personopplysninger på vegne av den behandlingsansvarlige</li>
          <li><strong>Personopplysninger</strong> betyr enhver informasjon som kan knyttes til en identifisert eller identifiserbar fysisk person</li>
          <li><strong>Behandling</strong> betyr bruk av personopplysninger på enhver måte, inkludert innsamling, lagring, sletting, overføring og utlevering</li>
        </Box>

        {/* Section 2 */}
        <Typography variant="h4" component="h2">
          2. Kort sammendrag av vår personvernerklæring
        </Typography>
        <Typography variant="body1">
          Vi samler inn personopplysninger hvis det er nødvendig for å sikre at du mottar de forespurte 
          tjenestene. For eksempel, når du registrerer deg for GumBox abonnement, vil vi be deg om å 
          oppgi visse personopplysninger som e-postadresse, fullt navn og leveringsadresse; når du 
          gjør en bestilling, vil du bli bedt om å oppgi telefonnummer og betalingsinformasjon.
        </Typography>

        {/* Section 3 */}
        <Typography variant="h4" component="h2">
          3. Hvilke personopplysninger samler vi inn og til hvilke formål?
        </Typography>
        
        <Typography variant="body1" sx={{ mb: 3 }}>
          Vi samler kun inn en minimal mengde personopplysninger som er nødvendig for din bruk av GumBox. 
          Tabellen nedenfor gir en detaljert beskrivelse av typene personopplysninger vi samler inn, 
          formålene vi bruker dem til, og det rettslige grunnlaget vi bygger på.
        </Typography>

        <TableContainer component={Paper} sx={{ mb: 4 }}>
          <Table>
            <TableHead>
              <TableRow sx={{ backgroundColor: 'grey.50' }}>
                <TableCell><strong>Personopplysninger</strong></TableCell>
                <TableCell><strong>Formål</strong></TableCell>
                <TableCell><strong>Rettslig grunnlag</strong></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>
                  <strong>Ved registrering av abonnement:</strong><br />
                  • Fullt navn<br />
                  • E-postadresse<br />
                  • Telefonnummer<br />
                  • Leveringsadresse
                </TableCell>
                <TableCell>
                  • Opprette og vedlikeholde abonnement<br />
                  • Levere produkter<br />
                  • Kontakte deg ved behov<br />
                  • Analysere og forbedre tjenesten
                </TableCell>
                <TableCell>
                  • Utførelse av kontrakt<br />
                  • Berettigede interesser
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <strong>Ved bestilling:</strong><br />
                  • Betalingsinformasjon<br />
                  • Faktureringsadresse<br />
                  • Bestillingshistorikk
                </TableCell>
                <TableCell>
                  • Behandle betaling<br />
                  • Levere produkter<br />
                  • Opprettholde regnskapsregistre<br />
                  • Håndtere kundeservice
                </TableCell>
                <TableCell>
                  • Utførelse av kontrakt<br />
                  • Juridisk forpliktelse
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <strong>Ved bruk av nettstedet:</strong><br />
                  • IP-adresse<br />
                  • Nettleserinformasjon<br />
                  • Informasjonskapsler
                </TableCell>
                <TableCell>
                  • Analysere og forbedre tjenesten<br />
                  • Sikkerhet og svindelforebygging<br />
                  • Personalisere opplevelsen
                </TableCell>
                <TableCell>
                  • Berettigede interesser<br />
                  • Samtykke (for ikke-essensielle informasjonskapsler)
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <strong>Ved kundeservice:</strong><br />
                  • Meldingsinnhold<br />
                  • Supporthistorikk
                </TableCell>
                <TableCell>
                  • Svare på henvendelser<br />
                  • Forbedre kundeservice<br />
                  • Løse problemer
                </TableCell>
                <TableCell>
                  • Berettigede interesser<br />
                  • Utførelse av kontrakt
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>

        {/* Section 4 */}
        <Typography variant="h4" component="h2">
          4. Deling av personopplysninger
        </Typography>
        
        <Typography variant="body1">
          For å sikre din riktige bruk av GumBox, kan vi trenge å samarbeide med eksterne tjenesteleverandører 
          og dele noen personopplysninger med dem. Vi deler dine personopplysninger kun med databehandlere 
          som godtar å sikre et tilstrekkelig beskyttelsesnivå.
        </Typography>

        <Typography variant="h5" component="h3">
          4.1 Databehandlere vi deler med
        </Typography>
        
        <TableContainer component={Paper} sx={{ mb: 4 }}>
          <Table>
            <TableHead>
              <TableRow sx={{ backgroundColor: 'grey.50' }}>
                <TableCell><strong>Tjeneste</strong></TableCell>
                <TableCell><strong>Leverandør</strong></TableCell>
                <TableCell><strong>Lokasjon</strong></TableCell>
                <TableCell><strong>Formål</strong></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>Betalingsbehandling</TableCell>
                <TableCell>Stripe, Klarna, Vipps</TableCell>
                <TableCell>USA/Norge</TableCell>
                <TableCell>Behandle betalinger sikret</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Frakt og levering</TableCell>
                <TableCell>Posten, PostNord, Helthjem</TableCell>
                <TableCell>Norge/Sverige</TableCell>
                <TableCell>Levere produkter</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Analyse</TableCell>
                <TableCell>Google Analytics, Microsoft Clarity</TableCell>
                <TableCell>USA</TableCell>
                <TableCell>Forstå brukeratferd og forbedre tjenesten</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Markedsføring</TableCell>
                <TableCell>Google Ads, Facebook Pixel</TableCell>
                <TableCell>USA</TableCell>
                <TableCell>Levere relevante annonser</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>E-posttjenester</TableCell>
                <TableCell>SendGrid</TableCell>
                <TableCell>USA</TableCell>
                <TableCell>Sende ordrebekreftelser og oppdateringer</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Hosting</TableCell>
                <TableCell>Vercel, AWS</TableCell>
                <TableCell>USA</TableCell>
                <TableCell>Hoste nettstedet og applikasjonen</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>

        {/* Section 5 */}
        <Typography variant="h4" component="h2">
          5. Internasjonale overføringer
        </Typography>
        <Typography variant="body1">
          Noen av våre databehandlere er lokalisert utenfor Norge/EØS. Når vi overfører personopplysninger 
          til land utenfor EØS, sikrer vi at mottakeren gir tilstrekkelig beskyttelse gjennom passende 
          garantier som standardkontraktsklausuler eller andre godkjente mekanismer.
        </Typography>

        {/* Section 6 */}
        <Typography variant="h4" component="h2">
          6. Lagring og sletting av personopplysninger
        </Typography>
        
        <Typography variant="h5" component="h3">
          6.1 Lagringsperioder
        </Typography>
        <Typography variant="body1">
          Vi lagrer dine personopplysninger kun så lenge det er nødvendig for å oppfylle formålet med 
          behandlingen. Generelle lagringsperioder:
        </Typography>
        <Box component="ul" sx={{ pl: 3, mb: 3 }}>
          <li><strong>Abonnementsdata:</strong> Så lenge abonnementet er aktivt + 3 år for regnskapsformål</li>
          <li><strong>Bestillingshistorikk:</strong> 5 år for regnskaps- og garantiformål</li>
          <li><strong>Kundeservicedata:</strong> 3 år for kvalitetsforbedring</li>
          <li><strong>Markedsføringsdata:</strong> Til du trekker tilbake samtykket eller 2 år ved inaktivitet</li>
          <li><strong>Tekniske logger:</strong> 12 måneder for sikkerhetsformål</li>
        </Box>

        {/* Section 7 */}
        <Typography variant="h4" component="h2">
          7. Sikkerhet av personopplysninger
        </Typography>
        <Typography variant="body1">
          Vi har etablert prosedyrer og tiltak på ulike nivåer for å sikre at uautoriserte personer 
          ikke har tilgang til dine personopplysninger. Våre sikkerhetstiltak inkluderer:
        </Typography>
        <Box component="ul" sx={{ pl: 3, mb: 3 }}>
          <li>Kryptering av sensitive data</li>
          <li>Sikre nettverksforbindelser (SSL/TLS)</li>
          <li>Regelmessige sikkerhetsgjennomganger</li>
          <li>Begrenset tilgang for ansatte basert på behov</li>
          <li>Sikre autentiseringsmetoder</li>
          <li>Regelmessig sikkerhetstrening for ansatte</li>
        </Box>

        {/* Section 8 */}
        <Typography variant="h4" component="h2">
          8. Markedsføringskommunikasjon
        </Typography>
        <Typography variant="body1">
          Vi sender markedsføringsmeldinger kun til de som har gitt eksplisitt samtykke. Du kan når 
          som helst melde deg av ved å klikke på "avmeld" lenken i våre e-poster eller kontakte oss 
          direkte. Viktige servicemeldinger (ordrebekreftelser, leveringsoppdateringer) sendes 
          uavhengig av markedsføringsinnstillinger.
        </Typography>

        {/* Section 9 */}
        <Typography variant="h4" component="h2">
          9. Dine rettigheter
        </Typography>
        <Typography variant="body1">
          Du har følgende rettigheter angående dine personopplysninger:
        </Typography>
        <Box component="ul" sx={{ pl: 3, mb: 3 }}>
          <li><strong>Tilgang:</strong> Få en kopi av dine personopplysninger</li>
          <li><strong>Retting:</strong> Korrigere unøyaktige personopplysninger</li>
          <li><strong>Sletting:</strong> Be om sletting av dine personopplysninger</li>
          <li><strong>Begrensning:</strong> Begrense behandlingen av dine personopplysninger</li>
          <li><strong>Dataportabilitet:</strong> Overføre dine data til en annen tjenesteleverandør</li>
          <li><strong>Innsigelse:</strong> Motsette deg behandling basert på berettigede interesser</li>
          <li><strong>Tilbaketrekking:</strong> Trekke tilbake samtykke når som helst</li>
        </Box>

        <Typography variant="h5" component="h3">
          9.1 Hvordan utøve dine rettigheter
        </Typography>
        <Typography variant="body1">
          For å utøve dine rettigheter, kontakt oss på post@gumbox.no. Vi vil svare på din forespørsel 
          innen rimelig tid, men senest innen 2 uker. Vi kan be om identifikasjon for å verifisere 
          din identitet før vi behandler forespørselen.
        </Typography>

        <Typography variant="h5" component="h3">
          9.2 Klagerett
        </Typography>
        <Typography variant="body1">
          Hvis du er misfornøyd med hvordan vi håndterer dine personopplysninger, kan du klage til 
          Datatilsynet. Vi oppfordrer deg imidlertid til å kontakte oss først, slik at vi kan prøve 
          å løse problemet direkte.
        </Typography>

        {/* Section 10 */}
        <Typography variant="h4" component="h2">
          10. Endringer i personvernerklæringen
        </Typography>
        <Typography variant="body1">
          Vi kan endre denne personvernerklæringen fra tid til annen for å adressere endringer i 
          lover, forskrifter og bransjestandarder. Den oppdaterte versjonen vil bli publisert på 
          denne siden, og hvis vi har din e-postadresse, vil vi sende deg en melding om alle endringer. 
          For vesentlige materielle endringer eller hvor loven krever det, kan vi søke ditt samtykke.
        </Typography>

        {/* Section 11 */}
        <Typography variant="h4" component="h2">
          11. Kontaktinformasjon
        </Typography>
        <Typography variant="body1">
          Du kan kontakte oss når som helst for ytterligere avklaringer:
        </Typography>
        <Box sx={{ mt: 2, p: 3, backgroundColor: 'grey.50', borderRadius: 2 }}>
          <Typography variant="body1"><strong>E-post:</strong> post@gumbox.no</Typography>
          <Typography variant="body1"><strong>Telefon:</strong> +47 979 57 676</Typography>
          <Typography variant="body1"><strong>Adresse:</strong> GumBox Norge AS, Norge</Typography>
        </Box>

        {/* Last updated */}
        <Box sx={{ mt: 6, p: 3, backgroundColor: 'grey.50', borderRadius: 2, textAlign: 'center' }}>
          <Typography variant="body2" color="text.secondary" sx={{ fontStyle: 'italic' }}>
            Denne personvernerklæringen ble sist oppdatert: {new Date().toLocaleDateString('nb-NO', { year: 'numeric', month: 'long', day: 'numeric' })}
          </Typography>
        </Box>
      </Box>
    </Container>
  );
}