'use client';

import { useState } from 'react';
import {
  IconButton,
  Menu,
  MenuItem,
  Typography,
  Box,
  ListItemIcon,
  ListItemText
} from '@mui/material';
import { Public as PublicIcon, Check as CheckIcon } from '@mui/icons-material';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTranslation } from '@/hooks/useTranslation';

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();
  const { t } = useTranslation();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLanguageChange = (lang: 'no' | 'en') => {
    setLanguage(lang);
    handleClose();
  };

  const languages = [
    { code: 'no', name: t('norwegian'), flag: '🇳🇴' },
    { code: 'en', name: t('english'), flag: '🇺🇸' }
  ];

  const currentLanguage = languages.find(lang => lang.code === language);

  return (
    <>
      <IconButton
        onClick={handleClick}
        aria-label={t('changeLanguage')}
        sx={{
          color: 'text.primary',
          '&:hover': {
            backgroundColor: 'rgba(249, 79, 155, 0.08)',
          }
        }}
      >
        <PublicIcon />
      </IconButton>

      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          sx: {
            borderRadius: '12px',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
            border: '1px solid rgba(0, 0, 0, 0.05)',
            minWidth: '150px'
          }
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        {languages.map((lang) => (
          <MenuItem
            key={lang.code}
            onClick={() => handleLanguageChange(lang.code as 'no' | 'en')}
            sx={{
              px: 2,
              py: 1,
              '&:hover': {
                backgroundColor: 'rgba(249, 79, 155, 0.05)',
              }
            }}
          >
            <ListItemIcon sx={{ minWidth: '32px' }}>
              <Typography variant="body1" sx={{ fontSize: '1.2rem' }}>
                {lang.flag}
              </Typography>
            </ListItemIcon>
            <ListItemText>
              <Typography variant="body2" sx={{ fontWeight: language === lang.code ? 600 : 400 }}>
                {lang.name}
              </Typography>
            </ListItemText>
            {language === lang.code && (
              <CheckIcon sx={{ color: 'primary.main', ml: 1, fontSize: '1rem' }} />
            )}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
}