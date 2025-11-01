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
import { useTranslation } from '@/hooks/useTranslation';
import { useLegalContent } from '@/hooks/useLegalContent';

export default function TermsOfService() {
  const { t } = useTranslation();
  const { getContent } = useLegalContent();
  const router = useRouter();
  
  const termsContent = getContent('terms');

  const renderContent = (content: string) => {
    return content.split('\n\n').map((paragraph, index) => (
      <Typography key={index} variant="body1" sx={{ mb: 2, lineHeight: 1.7 }}>
        {paragraph.split('\n').map((line, lineIndex) => (
          <span key={lineIndex}>
            {line.includes('**') 
              ? line.split('**').map((part, partIndex) => 
                  partIndex % 2 === 1 ? <strong key={partIndex}>{part}</strong> : part
                )
              : line
            }
            {lineIndex < paragraph.split('\n').length - 1 && <br />}
          </span>
        ))}
      </Typography>
    ));
  };

  const renderList = (items: string[]) => (
    <Box component="ul" sx={{ mb: 3, pl: 3 }}>
      {items.map((item, index) => (
        <Typography key={index} component="li" variant="body1" sx={{ mb: 1, lineHeight: 1.7 }}>
          {item.includes('**') 
            ? item.split('**').map((part, partIndex) => 
                partIndex % 2 === 1 ? <strong key={partIndex}>{part}</strong> : part
              )
            : item
          }
        </Typography>
      ))}
    </Box>
  );

  const renderContact = (contact: any) => (
    <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.7 }}>
      <strong>E-post:</strong> {contact.email}<br />
      <strong>Telefon:</strong> {contact.phone}<br />
      <strong>Nettside:</strong> {contact.website}
    </Typography>
  );

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
          {t('termsTitle')}
        </Typography>
        
        <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
          Sist oppdatert: {new Date().toLocaleDateString('nb-NO', { year: 'numeric', month: 'long', day: 'numeric' })}
        </Typography>
      </Box>

      <Paper elevation={0} sx={{ p: 4, border: '1px solid', borderColor: 'divider' }}>
        {(termsContent as { sections: any[] }).sections.map((section: any, sectionIndex: number) => (
          <Box key={sectionIndex}>
            {/* Section Title */}
            <Typography variant="h5" sx={{ mb: 3, fontWeight: 600, color: 'primary.main' }}>
              {section.title}
            </Typography>

            {/* Section Content */}
            {section.content && renderContent(section.content)}
            
            {/* Section List */}
            {section.list && renderList(section.list)}

            {/* Contact Information */}
            {section.contact && renderContact(section.contact)}

            {/* Subsections */}
            {section.subsections && section.subsections.map((subsection: any, subIndex: number) => (
              <Box key={subIndex} sx={{ mb: 3 }}>
                <Typography variant="h6" sx={{ mb: 2, fontWeight: 500 }}>
                  {subsection.title}
                </Typography>
                {subsection.content && renderContent(subsection.content)}
                {subsection.list && renderList(subsection.list)}
              </Box>
            ))}

            {/* Divider between sections (except last) */}
            {sectionIndex < (termsContent as { sections: any[] }).sections.length - 1 && (
              <Divider sx={{ my: 4 }} />
            )}
          </Box>
        ))}

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