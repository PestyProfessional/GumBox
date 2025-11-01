import { useLanguage } from '@/contexts/LanguageContext';
import { legalContent, LegalContentKey } from '@/lib/legalContent';

export const useLegalContent = () => {
  const { language } = useLanguage();

  const getContent = (section: LegalContentKey) => {
    return legalContent[language][section] || legalContent.no[section];
  };

  return { getContent, language };
};