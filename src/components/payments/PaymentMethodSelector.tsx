'use client';

import { Box, Card, CardContent, FormControl, FormControlLabel, Radio, RadioGroup, Stack, Typography, Chip } from '@mui/material';
import { Security, CreditCard, PhoneAndroid, ShoppingCart } from '@mui/icons-material';
import Image from 'next/image';
import { PaymentMethod } from '@/lib/payments';

interface PaymentMethodSelectorProps {
  value: PaymentMethod;
  onChange: (method: PaymentMethod) => void;
  disabled?: boolean;
}

const paymentMethods = [
  {
    id: 'klarna' as PaymentMethod,
    name: 'Klarna',
    description: 'Betal senere eller del opp betalingen',
    icon: ShoppingCart,
    logo: '/images/CheckOut/klarna-531cd07130cfad7de4c678ef467cbeb7.svg',
    color: '#FFB3C6',
    features: ['Betal senare', 'Ingen rentekostnader', 'Kjøperbeskyttelse'],
    popular: true,
  },
  {
    id: 'vipps' as PaymentMethod,
    name: 'Vipps',
    description: 'Norges mest brukte mobilbetaling',
    icon: PhoneAndroid,
    logo: '/images/payments/vipps-logo.svg',
    color: '#FF5722',
    features: ['Øyeblikkelig', 'Norsk bank', 'Sikker'],
    popular: false,
  },
  {
    id: 'stripe' as PaymentMethod,
    name: 'Kort',
    description: 'Visa, MasterCard, American Express',
    icon: CreditCard,
    logo: '/images/CheckOut/card-ce24697297bd3c6a00fdd2fb6f760f0d.svg',
    cardLogos: [
      '/images/CheckOut/visa-729c05c240c4bdb47b03ac81d9945bfe.svg',
      '/images/CheckOut/mastercard-4d8844094130711885b5e41b28c9848f.svg'
    ],
    color: '#1976D2',
    features: ['Alle kort', 'SSL sikret', 'Internasjonal'],
    popular: false,
  },
];

export default function PaymentMethodSelector({ value, onChange, disabled = false }: PaymentMethodSelectorProps) {
  return (
    <FormControl component="fieldset" fullWidth disabled={disabled}>
      <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 3 }}>
        <Security sx={{ color: 'success.main' }} />
        Velg Betalingsmetode
      </Typography>
      
      <RadioGroup
        value={value}
        onChange={(e) => onChange(e.target.value as PaymentMethod)}
      >
        <Stack spacing={2}>
          {paymentMethods.map((method) => {
            const IconComponent = method.icon;
            const isSelected = value === method.id;
            
            return (
              <Card
                key={method.id}
                sx={{
                  cursor: disabled ? 'not-allowed' : 'pointer',
                  transition: 'all 0.3s ease',
                  border: '2px solid',
                  borderColor: isSelected ? 'primary.main' : 'grey.200',
                  backgroundColor: isSelected ? 'primary.50' : 'background.paper',
                  '&:hover': disabled ? {} : {
                    borderColor: isSelected ? 'primary.main' : 'primary.light',
                    transform: 'translateY(-2px)',
                    boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
                  },
                  opacity: disabled ? 0.6 : 1,
                }}
                onClick={() => !disabled && onChange(method.id)}
              >
                <CardContent sx={{ p: 3 }}>
                  <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                    <FormControlLabel
                      value={method.id}
                      control={<Radio sx={{ p: 0 }} />}
                      label=""
                      sx={{ m: 0, '& .MuiRadio-root': { alignSelf: 'flex-start', mt: 0.5 } }}
                    />
                    
                    <Box sx={{ display: 'flex', gap: 1 }}>
                      <Box
                        sx={{
                          width: 56,
                          height: 56,
                          borderRadius: 2,
                          background: `linear-gradient(135deg, ${method.color}15, ${method.color}25)`,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          border: `2px solid ${method.color}30`,
                        }}
                      >
                        <IconComponent sx={{ fontSize: 28, color: method.color }} />
                      </Box>
                      
                      {method.id === 'stripe' && method.cardLogos ? (
                        <Box sx={{ display: 'flex', gap: 0.5 }}>
                          {method.cardLogos.map((cardLogo, index) => (
                            <Box
                              key={index}
                              sx={{
                                width: 40,
                                height: 28,
                                borderRadius: 1,
                                background: 'white',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                border: '1px solid #e0e0e0',
                                overflow: 'hidden',
                              }}
                            >
                              <Image
                                src={cardLogo}
                                alt={`Card ${index + 1}`}
                                width={35}
                                height={20}
                                style={{ objectFit: 'contain' }}
                              />
                            </Box>
                          ))}
                        </Box>
                      ) : (
                        <Box
                          sx={{
                            width: 80,
                            height: 56,
                            borderRadius: 2,
                            background: 'white',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            border: '2px solid #e0e0e0',
                            overflow: 'hidden',
                          }}
                        >
                          <Image
                            src={method.logo}
                            alt={`${method.name} logo`}
                            width={70}
                            height={30}
                            style={{ objectFit: 'contain' }}
                          />
                        </Box>
                      )}
                    </Box>
                    
                    <Box sx={{ flex: 1 }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                          {method.name}
                        </Typography>
                        {method.popular && (
                          <Chip 
                            label="Populær" 
                            size="small" 
                            color="primary" 
                            variant="filled"
                            sx={{ height: 20, fontSize: '0.75rem' }}
                          />
                        )}
                      </Box>
                      
                      <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                        {method.description}
                      </Typography>
                      
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                        {method.features.map((feature) => (
                          <Chip
                            key={feature}
                            label={feature}
                            size="small"
                            variant="outlined"
                            sx={{
                              fontSize: '0.7rem',
                              height: 24,
                              borderColor: isSelected ? 'primary.main' : 'grey.300',
                              color: isSelected ? 'primary.main' : 'text.secondary',
                            }}
                          />
                        ))}
                      </Box>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            );
          })}
        </Stack>
      </RadioGroup>
      
      <Box sx={{ mt: 3, p: 2, bgcolor: 'grey.50', borderRadius: 2 }}>
        <Typography variant="body2" color="text.secondary" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Security sx={{ fontSize: 16, color: 'success.main' }} />
          Alle betalinger er kryptert med SSL og beskyttet av våre partnere
        </Typography>
      </Box>
    </FormControl>
  );
}