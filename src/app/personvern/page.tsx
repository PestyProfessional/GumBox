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
import { useTranslation } from '@/hooks/useTranslation';
import { useLegalContent } from '@/hooks/useLegalContent';

export default function PersonvernPage() {
  const { t } = useTranslation();
  const { getContent } = useLegalContent();
  const router = useRouter();
  
  const privacyContent = getContent('privacy');

  const renderDefinitions = (definitions: any[]) => (
    <Box component="ul" sx={{ pl: 3, mb: 3 }}>
      {definitions.map((def, index) => (
        <li key={index}>
          <strong>{def.term}</strong> {def.definition}
        </li>
      ))}
    </Box>
  );

  const renderList = (items: string[]) => (
    <Box component="ul" sx={{ pl: 3, mb: 3 }}>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </Box>
  );

  const renderDataTable = (tableData: any[], headers: string[]) => (
    <TableContainer component={Paper} sx={{ mb: 4 }}>
      <Table>
        <TableHead>
          <TableRow sx={{ backgroundColor: 'grey.50' }}>
            {headers.map((header, index) => (
              <TableCell key={index}><strong>{header}</strong></TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData.map((row, index) => (
            <TableRow key={index}>
              <TableCell>
                <strong>{row.category}</strong><br />
                {row.data.map((item: string, i: number) => (
                  <span key={i}>{item}<br /></span>
                ))}
              </TableCell>
              <TableCell>
                {row.purposes.map((purpose: string, i: number) => (
                  <span key={i}>{purpose}<br /></span>
                ))}
              </TableCell>
              <TableCell>
                {row.legalBasis.map((basis: string, i: number) => (
                  <span key={i}>{basis}<br /></span>
                ))}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );

  const renderProcessorsTable = (processors: any[], headers: string[]) => (
    <TableContainer component={Paper} sx={{ mb: 4 }}>
      <Table>
        <TableHead>
          <TableRow sx={{ backgroundColor: 'grey.50' }}>
            {headers.map((header, index) => (
              <TableCell key={index}><strong>{header}</strong></TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {processors.map((processor, index) => (
            <TableRow key={index}>
              <TableCell>{processor.service}</TableCell>
              <TableCell>{processor.provider}</TableCell>
              <TableCell>{processor.location}</TableCell>
              <TableCell>{processor.purpose}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );

  const renderRetentionPeriods = (periods: any[]) => (
    <Box component="ul" sx={{ pl: 3, mb: 3 }}>
      {periods.map((period, index) => (
        <li key={index}>
          <strong>{period.type}</strong> {period.period}
        </li>
      ))}
    </Box>
  );

  const renderRights = (rights: any[]) => (
    <Box component="ul" sx={{ pl: 3, mb: 3 }}>
      {rights.map((right, index) => (
        <li key={index}>
          <strong>{right.right}</strong> {right.description}
        </li>
      ))}
    </Box>
  );

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
          {t('back')}
        </Button>
        
        <Typography variant="h3" component="h1" sx={{ mb: 2, fontWeight: 700 }}>
          {t('privacyPolicyTitle')}
        </Typography>
        
        <Typography variant="body2" color="text.secondary" sx={{ mb: 4 }}>
          {t('validFrom')}: {new Date().toLocaleDateString('nb-NO', { year: 'numeric', month: 'long', day: 'numeric' })}
        </Typography>
      </Box>

      {/* Content */}
      <Box sx={{ '& h2': { mt: 6, mb: 3, fontWeight: 600 }, '& h3': { mt: 4, mb: 2, fontWeight: 600 }, '& p': { mb: 2, lineHeight: 1.6 } }}>
        
        {/* Section 1 */}
        <Typography variant="h4" component="h2">
          {(privacyContent as any).section1.title}
        </Typography>
        
        {Object.entries((privacyContent as any).section1.subsections).map(([key, subsection]: [string, any]) => (
          <Box key={key}>
            <Typography variant="h5" component="h3">
              {subsection.title}
            </Typography>
            <Typography variant="body1">
              {subsection.content}
              {subsection.linkText && (
                <>
                  {' '}
                  <Link href="/cookies" passHref>
                    <MuiLink color="primary">{subsection.linkText}</MuiLink>
                  </Link>.
                </>
              )}
            </Typography>
            {subsection.definitions && renderDefinitions(subsection.definitions)}
          </Box>
        ))}

        {/* Section 2 */}
        <Typography variant="h4" component="h2">
          {(privacyContent as any).section2.title}
        </Typography>
        <Typography variant="body1">
          {(privacyContent as any).section2.content}
        </Typography>

        {/* Section 3 */}
        <Typography variant="h4" component="h2">
          {(privacyContent as any).section3.title}
        </Typography>
        
        <Typography variant="body1" sx={{ mb: 3 }}>
          {(privacyContent as any).section3.intro}
        </Typography>

        {renderDataTable((privacyContent as any).section3.tableData, (privacyContent as any).section3.tableHeaders)}

        {/* Section 4 */}
        <Typography variant="h4" component="h2">
          {(privacyContent as any).section4.title}
        </Typography>
        
        <Typography variant="body1">
          {(privacyContent as any).section4.intro}
        </Typography>

        <Typography variant="h5" component="h3">
          {(privacyContent as any).section4.subtitle}
        </Typography>
        
        {renderProcessorsTable((privacyContent as any).section4.processors, (privacyContent as any).section4.tableHeaders)}

        {/* Section 5 */}
        <Typography variant="h4" component="h2">
          {(privacyContent as any).section5.title}
        </Typography>
        <Typography variant="body1">
          {(privacyContent as any).section5.content}
        </Typography>

        {/* Section 6 */}
        <Typography variant="h4" component="h2">
          {(privacyContent as any).section6.title}
        </Typography>
        
        <Typography variant="h5" component="h3">
          {(privacyContent as any).section6.subtitle}
        </Typography>
        <Typography variant="body1">
          {(privacyContent as any).section6.intro}
        </Typography>
        {renderRetentionPeriods((privacyContent as any).section6.retentionPeriods)}

        {/* Section 7 */}
        <Typography variant="h4" component="h2">
          {(privacyContent as any).section7.title}
        </Typography>
        <Typography variant="body1">
          {(privacyContent as any).section7.intro}
        </Typography>
        {renderList((privacyContent as any).section7.measures)}

        {/* Section 8 */}
        <Typography variant="h4" component="h2">
          {(privacyContent as any).section8.title}
        </Typography>
        <Typography variant="body1">
          {(privacyContent as any).section8.content}
        </Typography>

        {/* Section 9 */}
        <Typography variant="h4" component="h2">
          {(privacyContent as any).section9.title}
        </Typography>
        <Typography variant="body1">
          {(privacyContent as any).section9.intro}
        </Typography>
        {renderRights((privacyContent as any).section9.rights)}

        <Typography variant="h5" component="h3">
          {(privacyContent as any).section9.exercise.title}
        </Typography>
        <Typography variant="body1">
          {(privacyContent as any).section9.exercise.content}
        </Typography>

        <Typography variant="h5" component="h3">
          {(privacyContent as any).section9.complaint.title}
        </Typography>
        <Typography variant="body1">
          {(privacyContent as any).section9.complaint.content}
        </Typography>

        {/* Section 10 */}
        <Typography variant="h4" component="h2">
          {(privacyContent as any).section10.title}
        </Typography>
        <Typography variant="body1">
          {(privacyContent as any).section10.content}
        </Typography>

        {/* Section 11 */}
        <Typography variant="h4" component="h2">
          {(privacyContent as any).section11.title}
        </Typography>
        <Typography variant="body1">
          {(privacyContent as any).section11.intro}
        </Typography>
        <Box sx={{ mt: 2, p: 3, backgroundColor: 'grey.50', borderRadius: 2 }}>
          <Typography variant="body1"><strong>E-post:</strong> {(privacyContent as any).section11.contact.email}</Typography>
          <Typography variant="body1"><strong>Telefon:</strong> {(privacyContent as any).section11.contact.phone}</Typography>
          <Typography variant="body1"><strong>Adresse:</strong> {(privacyContent as any).section11.contact.address}</Typography>
        </Box>

        {/* Last updated */}
        <Box sx={{ mt: 6, p: 3, backgroundColor: 'grey.50', borderRadius: 2, textAlign: 'center' }}>
          <Typography variant="body2" color="text.secondary" sx={{ fontStyle: 'italic' }}>
            {t('lastUpdated')}: {new Date().toLocaleDateString('nb-NO', { year: 'numeric', month: 'long', day: 'numeric' })}
          </Typography>
        </Box>
      </Box>
    </Container>
  );
}