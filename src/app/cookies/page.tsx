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
import { useTranslation } from '@/hooks/useTranslation';
import { useLegalContent } from '@/hooks/useLegalContent';

export default function CookiesPage() {
  const { t } = useTranslation();
  const { getContent } = useLegalContent();
  const router = useRouter();
  const [expanded, setExpanded] = useState<string | false>(false);
  
  const cookiesContent = getContent('cookies');

  const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  const renderContent = (content: string) => {
    return content.split('\n\n').map((paragraph, index) => (
      <Typography key={index} variant="body1" sx={{ mb: 2, lineHeight: 1.6 }}>
        {paragraph}
      </Typography>
    ));
  };

  const renderCookieTable = (cookies: any[]) => (
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
  );

  const renderThirdPartyService = (service: any) => (
    <Box sx={{ mb: 4 }}>
      <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
        {service.title}
      </Typography>
      <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.6 }}>
        {service.description}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Les mer om {service.title.split('&')[0].trim()}s personvernerklæring:{' '}
        <a href={service.privacyLink} target="_blank" rel="noopener noreferrer">
          {service.privacyLink}
        </a>
      </Typography>
    </Box>
  );

  const renderList = (items: string[]) => (
    <Box component="ul" sx={{ pl: 3, mb: 3 }}>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </Box>
  );

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
          {t('back')}
        </Button>
        
        <Typography variant="h3" component="h1" sx={{ mb: 2, fontWeight: 700 }}>
          {t('cookiesTitle')}
        </Typography>
        
        <Typography variant="body1" color="text.secondary" sx={{ mb: 4, lineHeight: 1.6 }}>
          {cookiesContent.introduction}
        </Typography>
      </Box>

      {/* What are cookies */}
      <Box sx={{ mb: 6 }}>
        <Typography variant="h4" sx={{ mb: 3, fontWeight: 600 }}>
          {cookiesContent.sections.whatAreCookies.title}
        </Typography>
        {renderContent(cookiesContent.sections.whatAreCookies.content)}
      </Box>

      {/* Types of cookies */}
      <Box sx={{ mb: 6 }}>
        <Typography variant="h4" sx={{ mb: 3, fontWeight: 600 }}>
          {cookiesContent.sections.cookieTypes.title}
        </Typography>
        
        {Object.entries(cookiesContent.sections.cookieTypes.categories).map(([type, category]: [string, any]) => (
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
                  {category.name} ({category.cookies.length})
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {category.description}
                </Typography>
              </Box>
            </AccordionSummary>
            <AccordionDetails sx={{ p: 0 }}>
              {renderCookieTable(category.cookies)}
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>

      {/* Third party services */}
      <Box sx={{ mb: 6 }}>
        <Typography variant="h4" sx={{ mb: 3, fontWeight: 600 }}>
          {cookiesContent.sections.thirdPartyServices.title}
        </Typography>
        
        {Object.values(cookiesContent.sections.thirdPartyServices.services).map((service: any, index) => (
          <div key={index}>
            {renderThirdPartyService(service)}
          </div>
        ))}
      </Box>

      {/* How to control cookies */}
      <Box sx={{ mb: 6 }}>
        <Typography variant="h4" sx={{ mb: 3, fontWeight: 600 }}>
          {cookiesContent.sections.cookieControl.title}
        </Typography>
        
        <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.6 }}>
          {cookiesContent.sections.cookieControl.intro}
        </Typography>

        <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
          {cookiesContent.sections.cookieControl.consentBanner.title}
        </Typography>
        <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.6 }}>
          {cookiesContent.sections.cookieControl.consentBanner.description}
        </Typography>

        <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
          {cookiesContent.sections.cookieControl.browserSettings.title}
        </Typography>
        <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.6 }}>
          {cookiesContent.sections.cookieControl.browserSettings.intro}
        </Typography>
        {renderList(cookiesContent.sections.cookieControl.browserSettings.options)}
      </Box>

      {/* Contact section */}
      <Box sx={{ 
        p: 3, 
        backgroundColor: 'grey.50', 
        borderRadius: 2,
        textAlign: 'center'
      }}>
        <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
          {cookiesContent.sections.contact.title}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
          {cookiesContent.sections.contact.description}
        </Typography>
        <Button 
          variant="contained" 
          size="large"
          onClick={() => window.location.href = 'mailto:post@gumbox.no'}
        >
          {cookiesContent.sections.contact.buttonText}
        </Button>
      </Box>
    </Container>
  );
}