'use client';

import { 
  Box, 
  Container, 
  Typography, 
  Button,
  Paper,
  Divider
} from '@mui/material';
import { useRouter } from 'next/navigation';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export default function TermsOfService() {
  const router = useRouter();

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
          Tilbake
        </Button>
        
        <Typography variant="h3" component="h1" sx={{ mb: 2, fontWeight: 700 }}>
          Brukervilkår
        </Typography>
        
        <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
          Sist oppdatert: {new Date().toLocaleDateString('nb-NO', { year: 'numeric', month: 'long', day: 'numeric' })}
        </Typography>
      </Box>

      <Paper elevation={0} sx={{ p: 4, border: '1px solid', borderColor: 'divider' }}>
        {/* Introduction */}
        <Typography variant="h5" sx={{ mb: 3, fontWeight: 600, color: 'primary.main' }}>
          1. Innledning
        </Typography>
        <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.7 }}>
          Velkommen til GumBox! Disse brukervilkårene («Vilkårene») regulerer din bruk av vår nettside og våre tjenester. 
          Ved å bruke våre tjenester aksepterer du disse vilkårene fullt ut. GumBox tilbyr et månedlig abonnement på 
          kurerte tyggegummi-produkter fra hele verden.
        </Typography>

        <Divider sx={{ my: 4 }} />

        {/* Company Information */}
        <Typography variant="h5" sx={{ mb: 3, fontWeight: 600, color: 'primary.main' }}>
          2. Selskapsinformasjon
        </Typography>
        <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.7 }}>
          <strong>Selskap:</strong> GumBox Norge AS<br />
          <strong>E-post:</strong> post@gumbox.no<br />
          <strong>Telefon:</strong> +47 979 57 676<br />
          <strong>Nettside:</strong> https://gumbox.no
        </Typography>
        <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.7 }}>
          GumBox er registrert i Norge og følger norsk forbrukerlovgivning og EU's GDPR-regelverk.
        </Typography>

        <Divider sx={{ my: 4 }} />

        {/* Subscription Service */}
        <Typography variant="h5" sx={{ mb: 3, fontWeight: 600, color: 'primary.main' }}>
          3. Abonnementstjeneste
        </Typography>
        <Typography variant="h6" sx={{ mb: 2, fontWeight: 500 }}>
          3.1 Tjenestebeskrivelse
        </Typography>
        <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.7 }}>
          GumBox tilbyr et månedlig abonnement hvor kunder mottar en kurert boks med tyggegummi-produkter fra hele verden. 
          Hver boks inneholder 8-12 forskjellige produkter fra ulike merker og land.
        </Typography>

        <Typography variant="h6" sx={{ mb: 2, fontWeight: 500 }}>
          3.2 Abonnementsplaner
        </Typography>
        <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.7 }}>
          Vi tilbyr følgende abonnementsplaner:
        </Typography>
        <Box component="ul" sx={{ mb: 3, pl: 3 }}>
          <Typography component="li" variant="body1" sx={{ mb: 1, lineHeight: 1.7 }}>
            <strong>Månedlig Plan:</strong> 299 NOK/måned - kan avsluttes når som helst
          </Typography>
          <Typography component="li" variant="body1" sx={{ mb: 1, lineHeight: 1.7 }}>
            <strong>3 Måneders Plan:</strong> 249 NOK/måned - bindingstid på 3 måneder
          </Typography>
          <Typography component="li" variant="body1" sx={{ mb: 1, lineHeight: 1.7 }}>
            <strong>6 Måneders Plan:</strong> 229 NOK/måned - bindingstid på 6 måneder
          </Typography>
          <Typography component="li" variant="body1" sx={{ mb: 1, lineHeight: 1.7 }}>
            <strong>12 Måneders Plan:</strong> 199 NOK/måned - bindingstid på 12 måneder
          </Typography>
        </Box>

        <Typography variant="h6" sx={{ mb: 2, fontWeight: 500 }}>
          3.3 Fakturering og betaling
        </Typography>
        <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.7 }}>
          Alle abonnementer faktureres månedlig, uavhengig av valgt plan. Betaling trekkes automatisk hver måned fra 
          registrert betalingsmetode. Vi aksepterer Visa, Mastercard, American Express, Klarna og Vipps.
        </Typography>

        <Divider sx={{ my: 4 }} />

        {/* Order and Delivery */}
        <Typography variant="h5" sx={{ mb: 3, fontWeight: 600, color: 'primary.main' }}>
          4. Bestilling og levering
        </Typography>
        <Typography variant="h6" sx={{ mb: 2, fontWeight: 500 }}>
          4.1 Leveringsområde
        </Typography>
        <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.7 }}>
          Vi leverer til hele verden. Leveringskostnader beregnes ved kassen basert på destinasjon.
        </Typography>

        <Typography variant="h6" sx={{ mb: 2, fontWeight: 500 }}>
          4.2 Leveringstid
        </Typography>
        <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.7 }}>
          Bokser sendes normalt innen 2-3 virkedager etter bestilling. Leveringstid avhenger av valgt leverandør 
          (Posten, PostNord, eller Helthjem). Kunder kan spore sine ordrer via våre leverandørers sporingssystemer.
        </Typography>

        <Typography variant="h6" sx={{ mb: 2, fontWeight: 500 }}>
          4.3 Leveringsadresse
        </Typography>
        <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.7 }}>
          Kunder kan endre leveringsadresse ved å kontakte kundeservice minst 3 uker før neste leveringsdato. 
          Vi er ikke ansvarlige for pakker sendt til feil adresse på grunn av ukorrekt eller utdatert informasjon 
          fra kunden.
        </Typography>

        <Divider sx={{ my: 4 }} />

        {/* Cancellation and Return Policy */}
        <Typography variant="h5" sx={{ mb: 3, fontWeight: 600, color: 'primary.main' }}>
          5. Avbestilling og returpolicy
        </Typography>
        <Typography variant="h6" sx={{ mb: 2, fontWeight: 500 }}>
          5.1 Avbestillingsrettigheter
        </Typography>
        <Box component="ul" sx={{ mb: 3, pl: 3 }}>
          <Typography component="li" variant="body1" sx={{ mb: 1, lineHeight: 1.7 }}>
            <strong>Månedlig Plan:</strong> Kan avsluttes når som helst uten bindingstid
          </Typography>
          <Typography component="li" variant="body1" sx={{ mb: 1, lineHeight: 1.7 }}>
            <strong>Planer med bindingstid:</strong> Kan ikke avbrytes før bindingsperioden er ferdig
          </Typography>
        </Box>
        <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.7 }}>
          For å avbestille må kunder kontakte kundeservice på post@gumbox.no minst 3 uker før neste faktureringsperiode.
        </Typography>

        <Typography variant="h6" sx={{ mb: 2, fontWeight: 500 }}>
          5.2 Angrerett
        </Typography>
        <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.7 }}>
          I henhold til norsk forbrukerlovgivning har kunder 14 dagers angrerett fra mottak av første levering. 
          Angreretten gjelder kun for uåpnede pakker i original emballasje.
        </Typography>

        <Typography variant="h6" sx={{ mb: 2, fontWeight: 500 }}>
          5.3 Returpolicy
        </Typography>
        <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.7 }}>
          På grunn av hygieniske årsaker kan ikke tyggegummi returneres etter at pakken er åpnet. Dette er i henhold 
          til norsk forbrukerlovgivning. Ved feil eller skadet vare kontakt kundeservice umiddelbart for erstatning.
        </Typography>

        <Divider sx={{ my: 4 }} />

        {/* User Responsibilities */}
        <Typography variant="h5" sx={{ mb: 3, fontWeight: 600, color: 'primary.main' }}>
          6. Brukeransvar
        </Typography>
        <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.7 }}>
          Ved bruk av våre tjenester forplikter du deg til å:
        </Typography>
        <Box component="ul" sx={{ mb: 4, pl: 3 }}>
          <Typography component="li" variant="body1" sx={{ mb: 1, lineHeight: 1.7 }}>
            Oppgi korrekte og oppdaterte kontakt- og leveringsopplysninger
          </Typography>
          <Typography component="li" variant="body1" sx={{ mb: 1, lineHeight: 1.7 }}>
            Ikke bruke tjenesten til ulovlige formål
          </Typography>
          <Typography component="li" variant="body1" sx={{ mb: 1, lineHeight: 1.7 }}>
            Respektere andre brukere og våre ansatte
          </Typography>
          <Typography component="li" variant="body1" sx={{ mb: 1, lineHeight: 1.7 }}>
            Kontakte oss umiddelbart hvis du oppdager problemer med din konto eller bestillinger
          </Typography>
        </Box>

        <Divider sx={{ my: 4 }} />

        {/* Privacy and Data Protection */}
        <Typography variant="h5" sx={{ mb: 3, fontWeight: 600, color: 'primary.main' }}>
          7. Personvern og databeskyttelse
        </Typography>
        <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.7 }}>
          Vi tar personvern på alvor og følger EU's GDPR-regelverk. Vår behandling av personopplysninger er beskrevet 
          i vår personvernerklæring, som du finner på vår nettside. Ved å bruke våre tjenester samtykker du til 
          behandling av dine personopplysninger som beskrevet i personvernerklæringen.
        </Typography>

        <Divider sx={{ my: 4 }} />

        {/* Limitation of Liability */}
        <Typography variant="h5" sx={{ mb: 3, fontWeight: 600, color: 'primary.main' }}>
          8. Ansvarsbegrensning
        </Typography>
        <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.7 }}>
          GumBox er ikke ansvarlig for indirekte skader, tapte inntekter, eller andre følgeskader som følge av bruk 
          av våre tjenester. Vårt ansvar er begrenset til verdien av den aktuelle bestillingen.
        </Typography>
        <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.7 }}>
          Vi er ikke ansvarlige for forsinkelser eller manglende levering på grunn av forhold utenfor vår kontroll, 
          inkludert men ikke begrenset til naturkatastrofer, streiker, eller problemer hos leverandører.
        </Typography>

        <Divider sx={{ my: 4 }} />

        {/* Intellectual Property */}
        <Typography variant="h5" sx={{ mb: 3, fontWeight: 600, color: 'primary.main' }}>
          9. Immaterielle rettigheter
        </Typography>
        <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.7 }}>
          Alt innhold på vår nettside, inkludert tekst, bilder, logoer, og design, er beskyttet av opphavsrett og 
          tilhører GumBox eller våre leverandører. Du har ikke lov til å reprodusere, distribuere, eller bruke 
          vårt innhold uten skriftlig tillatelse.
        </Typography>

        <Divider sx={{ my: 4 }} />

        {/* Force Majeure */}
        <Typography variant="h5" sx={{ mb: 3, fontWeight: 600, color: 'primary.main' }}>
          10. Force majeure
        </Typography>
        <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.7 }}>
          GumBox er ikke ansvarlig for manglende oppfyllelse av forpliktelser på grunn av omstendigheter utenfor vår 
          rimelige kontroll, inkludert naturkatastrofer, krig, terrorisme, streiker, epidemier, eller myndighetsvedtak.
        </Typography>

        <Divider sx={{ my: 4 }} />

        {/* Dispute Resolution */}
        <Typography variant="h5" sx={{ mb: 3, fontWeight: 600, color: 'primary.main' }}>
          11. Tvisteløsning
        </Typography>
        <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.7 }}>
          Vi oppfordrer til direkte kommunikasjon for å løse eventuelle problemer. Kontakt vår kundeservice på 
          post@gumbox.no for alle henvendelser.
        </Typography>
        <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.7 }}>
          Som forbruker har du rett til å klage til Forbrukertilsynet eller bruke Forbrukerrådet sitt 
          tvisteløsningsorgan for å løse tvister. Du kan også ta saken til norske domstoler.
        </Typography>

        <Divider sx={{ my: 4 }} />

        {/* Changes to Terms */}
        <Typography variant="h5" sx={{ mb: 3, fontWeight: 600, color: 'primary.main' }}>
          12. Endringer i vilkårene
        </Typography>
        <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.7 }}>
          Vi forbeholder oss retten til å endre disse vilkårene når som helst. Endringer vil bli publisert på vår 
          nettside og trer i kraft umiddelbart. Ved fortsatt bruk av våre tjenester etter endringer aksepterer du 
          de oppdaterte vilkårene. Vesentlige endringer vil bli kommunisert via e-post.
        </Typography>

        <Divider sx={{ my: 4 }} />

        {/* Applicable Law */}
        <Typography variant="h5" sx={{ mb: 3, fontWeight: 600, color: 'primary.main' }}>
          13. Gjeldende lov
        </Typography>
        <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.7 }}>
          Disse vilkårene er underlagt norsk lov. Eventuelle tvister skal løses for norske domstoler, med mindre 
          annet følger av ufravikelige regler.
        </Typography>

        <Divider sx={{ my: 4 }} />

        {/* Contact Information */}
        <Typography variant="h5" sx={{ mb: 3, fontWeight: 600, color: 'primary.main' }}>
          14. Kontaktinformasjon
        </Typography>
        <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.7 }}>
          For spørsmål om disse vilkårene eller våre tjenester, vennligst kontakt oss:
        </Typography>
        <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.7 }}>
          <strong>E-post:</strong> post@gumbox.no<br />
          <strong>Telefon:</strong> +47 979 57 676<br />
          <strong>Nettside:</strong> https://gumbox.no
        </Typography>

        {/* Effective Date */}
        <Box sx={{ 
          mt: 6, 
          p: 3, 
          backgroundColor: 'grey.50', 
          borderRadius: 2 
        }}>
          <Typography variant="body2" color="text.secondary" sx={{ fontStyle: 'italic' }}>
            Disse brukervilkårene trådte i kraft {new Date().toLocaleDateString('nb-NO', { year: 'numeric', month: 'long', day: 'numeric' })}{' '}
            og erstatter alle tidligere versjoner.
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
}