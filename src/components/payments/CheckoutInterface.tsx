'use client';

import { 
  Box, 
  Card, 
  CardContent, 
  Typography, 
  TextField, 
  Button, 
  Divider, 
  Chip,
  RadioGroup,
  FormControlLabel,
  Radio,
  Stack,
  Container,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Checkbox,
  FormGroup,
  IconButton
} from '@mui/material';
import { 
  ShoppingCart, 
  Security, 
  CreditCard, 
  PhoneAndroid, 
  LocalShipping,
  CheckCircle,
  Email,
  Person,
  Lock,
  Close
} from '@mui/icons-material';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useCart } from '@/contexts/CartContext';
import PaymentMethodSelector from './PaymentMethodSelector';
import { PaymentMethod } from '@/lib/payments';

const MotionCard = motion(Card);
const MotionButton = motion(Button);

interface OrderItem {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity?: number;
}

interface CheckoutInterfaceProps {
  onSubmit?: (data: any) => void;
}

export default function CheckoutInterface({ 
  onSubmit 
}: CheckoutInterfaceProps) {
  const { state: cartState, removeItem } = useCart();
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>('klarna');
  const [shippingMethod, setShippingMethod] = useState('postnord');
  const [saveInfo, setSaveInfo] = useState(false);
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    postalCode: '',
    phone: ''
  });
  const [cardData, setCardData] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cardholderName: ''
  });

  // Wait for cart to load from localStorage
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 100); // Small delay to allow cart to load from localStorage
    
    return () => clearTimeout(timer);
  }, []);

  // Calculate totals from cart - VAT is already included in prices
  const subtotal = cartState.totalPrice; // VAT already included
  const shippingOptions = [
    {
      id: 'postnord',
      name: 'PostNord - Pakke i postkassen',
      description: '3-6 business days',
      price: 69.00,
      icon: '/images/shipping/logo-postnord-round-30.svg'
    },
    {
      id: 'helthjem',
      name: 'Helthjem - Hjemlevering',
      description: '3-6 business days',
      price: 82.00,
      icon: '/images/shipping/helthjem.png'
    },
    {
      id: 'posten',
      name: 'Posten - Pakke i postkassen',
      description: '3-6 business days',
      price: 25.00,
      icon: '/images/shipping/logo-posten-round-30.svg'
    }
  ];
  
  const selectedShippingOption = shippingOptions.find(option => option.id === shippingMethod) || shippingOptions[0];
  const shipping = selectedShippingOption.price; // Dynamic shipping cost based on selection
  const total = subtotal + shipping; // Total with VAT included
  const vatRate = 0.25; // 25% VAT in Norway
  const vatAmount = total * vatRate / (1 + vatRate); // Extract VAT from total
  const subtotalExVat = subtotal / (1 + vatRate); // Subtotal excluding VAT
  const shippingExVat = shipping / (1 + vatRate); // Shipping excluding VAT


  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleCardInputChange = (field: string, value: string) => {
    setCardData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = () => {
    const checkoutData = {
      email,
      ...formData,
      paymentMethod,
      shippingMethod,
      shippingProvider: selectedShippingOption,
      saveInfo,
      orderItems: cartState.items,
      subtotal,
      shipping,
      total,
      vatAmount,
      // Additional data for shipping API integration
      customer: {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: email,
        phone: formData.phone,
        address: {
          street: formData.address,
          postalCode: formData.postalCode,
          city: formData.city,
          country: 'NO'
        }
      },
      shipment: {
        service: shippingMethod,
        provider: selectedShippingOption.name,
        price: shipping,
        description: selectedShippingOption.description
      }
    };
    onSubmit?.(checkoutData);
  };

  const handleRemoveItem = (itemId: string) => {
    removeItem(itemId);
    // If cart becomes empty, redirect to main page
    if (cartState.items.length === 1) {
      window.location.href = '/';
    }
  };

  // Show loading state while cart is being loaded
  if (isLoading) {
    return (
      <Container maxWidth="md" sx={{ py: 4, textAlign: 'center' }}>
        <Typography variant="body1" color="text.secondary">
          Loading checkout...
        </Typography>
      </Container>
    );
  }

  // Redirect to home if cart is empty (after loading)
  if (cartState.items.length === 0) {
    return (
      <Container maxWidth="md" sx={{ py: 4, textAlign: 'center' }}>
        <Typography variant="h5" sx={{ mb: 2 }}>
          Your cart is empty
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
          Add some items to your cart before checking out.
        </Typography>
        <MotionButton
          variant="contained"
          onClick={() => window.location.href = '/'}
          sx={{
            background: 'linear-gradient(135deg, #F94F9B 0%, #FF7AB8 100%)',
            borderRadius: '8px',
            px: 4,
            py: 1.5,
          }}
        >
          Continue Shopping
        </MotionButton>
      </Container>
    );
  }

  return (
    <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4, maxWidth: '1200px', mx: 'auto', px: 2, py: 2 }}>
      {/* Left Column - Order Summary (like Bookis) */}
      <Box sx={{ flex: { xs: '1', md: '0 0 45%' } }}>
          <MotionCard
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            sx={{ position: 'sticky', top: 24 }}
          >
            <CardContent sx={{ p: 3 }}>

              <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 3 }}>
                Pay GumBox AS
              </Typography>

              <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 4 }}>
                NOK {total.toFixed(2)}
              </Typography>

              {/* Order Items */}
              <Stack spacing={2} sx={{ mb: 3 }}>
                {cartState.items.map((item) => (
                  <Box key={item.id} sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
                    <Image
                      src={item.productImage}
                      alt={item.productName}
                      width={50}
                      height={50}
                      style={{ 
                        borderRadius: '8px',
                        objectFit: 'cover'
                      }}
                    />
                    <Box sx={{ flex: 1 }}>
                      <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                        {item.productName}
                      </Typography>
                    </Box>
                    <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                      NOK {item.price.toFixed(2)}
                    </Typography>
                    <IconButton 
                      size="small" 
                      onClick={() => handleRemoveItem(item.id)}
                      sx={{ color: 'error.main', ml: 1 }}
                    >
                      <Close fontSize="small" />
                    </IconButton>
                  </Box>
                ))}
              </Stack>

              <Divider sx={{ my: 2 }} />

              {/* Order Totals */}
              <Stack spacing={1} sx={{ mb: 3 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                  <Typography variant="body2">Subtotal</Typography>
                  <Typography variant="body2">NOK {subtotal.toFixed(2)}</Typography>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                  <Typography variant="body2">
                    Shipping
                    <br />
                    <Typography component="span" variant="caption" color="text.secondary">
                      {selectedShippingOption.name} ({selectedShippingOption.description})
                    </Typography>
                  </Typography>
                  <Typography variant="body2">NOK {shipping.toFixed(2)}</Typography>
                </Box>
                <Divider sx={{ my: 1 }} />
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                  <Typography variant="body2" color="text.secondary">
                    Hvorav moms (25%)
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    NOK {vatAmount.toFixed(2)}
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                  <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                    Total due
                  </Typography>
                  <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                    NOK {total.toFixed(2)}
                  </Typography>
                </Box>
              </Stack>
            </CardContent>
          </MotionCard>
      </Box>

      {/* Right Column - Checkout Form */}
      <Box sx={{ flex: { xs: '1', md: '0 0 55%' } }}>

          {/* Contact Information */}
          <Box sx={{ mb: 3 }}>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold' }}>
              Contact Information
            </Typography>
            
            <Stack spacing={2}>
              <TextField
                fullWidth
                label="Email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="abu-bampoye@outlook.com"
                variant="outlined"
                sx={{ 
                  '& .MuiOutlinedInput-root': {
                    borderRadius: '8px',
                  }
                }}
              />
              
              <Box sx={{ display: 'flex', gap: 2 }}>
                <TextField
                  label="Fornavn"
                  value={formData.firstName}
                  onChange={(e) => handleInputChange('firstName', e.target.value)}
                  variant="outlined"
                  sx={{ 
                    flex: 1,
                    '& .MuiOutlinedInput-root': {
                      borderRadius: '8px',
                    }
                  }}
                />
                
                <TextField
                  label="Etternavn"
                  value={formData.lastName}
                  onChange={(e) => handleInputChange('lastName', e.target.value)}
                  variant="outlined"
                  sx={{ 
                    flex: 1,
                    '& .MuiOutlinedInput-root': {
                      borderRadius: '8px',
                    }
                  }}
                />
              </Box>
              
              <TextField
                fullWidth
                label="Mobilnummer"
                value={formData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                placeholder="+47 123 45 678"
                variant="outlined"
                sx={{ 
                  '& .MuiOutlinedInput-root': {
                    borderRadius: '8px',
                  }
                }}
              />
              
              <TextField
                fullWidth
                label="Adresse"
                value={formData.address}
                onChange={(e) => handleInputChange('address', e.target.value)}
                placeholder="Gateadresse 123"
                variant="outlined"
                sx={{ 
                  '& .MuiOutlinedInput-root': {
                    borderRadius: '8px',
                  }
                }}
              />
              
              <Box sx={{ display: 'flex', gap: 2 }}>
                <TextField
                  label="Postnummer"
                  value={formData.postalCode}
                  onChange={(e) => handleInputChange('postalCode', e.target.value)}
                  placeholder="0123"
                  variant="outlined"
                  sx={{ 
                    flex: 1,
                    '& .MuiOutlinedInput-root': {
                      borderRadius: '8px',
                    }
                  }}
                />
                
                <TextField
                  label="Poststed"
                  value={formData.city}
                  onChange={(e) => handleInputChange('city', e.target.value)}
                  placeholder="Oslo"
                  variant="outlined"
                  sx={{ 
                    flex: 2,
                    '& .MuiOutlinedInput-root': {
                      borderRadius: '8px',
                    }
                  }}
                />
              </Box>
            </Stack>
          </Box>

          {/* Shipping Method */}
          <Box sx={{ mb: 3 }}>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold' }}>
              Shipping method
            </Typography>
            
            <RadioGroup
              value={shippingMethod}
              onChange={(e) => setShippingMethod(e.target.value)}
            >
              <Stack spacing={1}>
                {shippingOptions.map((option) => {
                  const isSelected = shippingMethod === option.id;
                  return (
                    <Box
                      key={option.id}
                      sx={{
                        border: '1px solid',
                        borderColor: isSelected ? 'primary.main' : 'grey.300',
                        borderRadius: '8px',
                        p: 2,
                        cursor: 'pointer',
                        backgroundColor: isSelected ? 'primary.50' : 'background.paper',
                        transition: 'all 0.2s ease',
                      }}
                      onClick={() => setShippingMethod(option.id)}
                    >
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                        <FormControlLabel
                          value={option.id}
                          control={<Radio sx={{ p: 0 }} />}
                          label=""
                          sx={{ m: 0 }}
                        />
                        <Box
                          sx={{
                            width: 40,
                            height: 40,
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
                            src={option.icon}
                            alt={option.name}
                            width={32}
                            height={32}
                            style={{ objectFit: 'contain' }}
                          />
                        </Box>
                        <Box sx={{ flex: 1 }}>
                          <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                            {option.name}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {option.description}
                          </Typography>
                        </Box>
                        <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                          NOK {option.price.toFixed(2)}
                        </Typography>
                      </Box>
                    </Box>
                  );
                })}
              </Stack>
            </RadioGroup>
          </Box>

          {/* Payment Method */}
          <Box sx={{ mb: 3 }}>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold' }}>
              Payment method
            </Typography>
            
            <RadioGroup
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value as PaymentMethod)}
            >
              <Stack spacing={1}>
                {[
                  { 
                    id: 'klarna', 
                    label: 'Klarna', 
                    logo: '/images/CheckOut/klarna-531cd07130cfad7de4c678ef467cbeb7.svg' 
                  },
                  { 
                    id: 'vipps', 
                    label: 'Vipps', 
                    logo: '/images/CheckOut/Vipps logo.svg' 
                  },
                  { 
                    id: 'stripe', 
                    label: 'Card', 
                    logo: '/images/CheckOut/card-ce24697297bd3c6a00fdd2fb6f760f0d.svg',
                    cardLogos: [
                      '/images/CheckOut/visa-729c05c240c4bdb47b03ac81d9945bfe.svg',
                      '/images/CheckOut/mastercard-4d8844094130711885b5e41b28c9848f.svg',
                      '/images/CheckOut/amex-a49b82f46c5cd6a96a6e418a6ca1717c.svg'
                    ]
                  }
                ].map((method) => {
                  const isSelected = paymentMethod === method.id;
                  
                  return (
                    <Box
                      key={method.id}
                      sx={{
                        border: '1px solid',
                        borderColor: isSelected ? 'primary.main' : 'grey.300',
                        borderRadius: '8px',
                        p: 2,
                        cursor: 'pointer',
                        backgroundColor: isSelected ? 'primary.50' : 'background.paper',
                        transition: 'all 0.2s ease',
                      }}
                      onClick={() => setPaymentMethod(method.id as PaymentMethod)}
                    >
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                        <FormControlLabel
                          value={method.id}
                          control={<Radio sx={{ p: 0 }} />}
                          label=""
                          sx={{ m: 0 }}
                        />
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                          <Image
                            src={method.logo}
                            alt={method.label}
                            width={method.id === 'klarna' ? 32 : 24}
                            height={method.id === 'klarna' ? 32 : 24}
                            style={{ objectFit: 'contain' }}
                          />
                        </Box>
                        <Box sx={{ flex: 1 }}>
                          <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                            {method.label}
                          </Typography>
                        </Box>
                        {method.cardLogos && (
                          <Box sx={{ display: 'flex', gap: 0.5 }}>
                            {method.cardLogos.map((cardLogo, index) => (
                              <Image
                                key={index}
                                src={cardLogo}
                                alt={`Card ${index + 1}`}
                                width={24}
                                height={16}
                                style={{ objectFit: 'contain' }}
                              />
                            ))}
                          </Box>
                        )}
                      </Box>
                    </Box>
                  );
                })}
              </Stack>
            </RadioGroup>
          </Box>

          {/* Card Form - Show only when Card is selected */}
          {paymentMethod === 'stripe' && (
            <Box sx={{ mb: 3, p: 3, border: '1px solid', borderColor: 'grey.300', borderRadius: '8px', backgroundColor: 'grey.50' }}>
              <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold' }}>
                Card Information
              </Typography>
              
              <Stack spacing={2}>
                <TextField
                  fullWidth
                  label="Card Number"
                  value={cardData.cardNumber}
                  onChange={(e) => handleCardInputChange('cardNumber', e.target.value)}
                  placeholder="1234 5678 9012 3456"
                  variant="outlined"
                  sx={{ 
                    '& .MuiOutlinedInput-root': {
                      borderRadius: '8px',
                    }
                  }}
                />
                
                <Box sx={{ display: 'flex', gap: 2 }}>
                  <TextField
                    label="MM/YY"
                    value={cardData.expiryDate}
                    onChange={(e) => handleCardInputChange('expiryDate', e.target.value)}
                    placeholder="12/25"
                    variant="outlined"
                    sx={{ 
                      flex: 1,
                      '& .MuiOutlinedInput-root': {
                        borderRadius: '8px',
                      }
                    }}
                  />
                  
                  <TextField
                    label="CVV"
                    value={cardData.cvv}
                    onChange={(e) => handleCardInputChange('cvv', e.target.value)}
                    placeholder="123"
                    variant="outlined"
                    sx={{ 
                      flex: 1,
                      '& .MuiOutlinedInput-root': {
                        borderRadius: '8px',
                      }
                    }}
                  />
                </Box>
                
                <TextField
                  fullWidth
                  label="Cardholder Name"
                  value={cardData.cardholderName}
                  onChange={(e) => handleCardInputChange('cardholderName', e.target.value)}
                  placeholder="John Doe"
                  variant="outlined"
                  sx={{ 
                    '& .MuiOutlinedInput-root': {
                      borderRadius: '8px',
                    }
                  }}
                />
              </Stack>
            </Box>
          )}

          {/* Save Info Checkbox */}
          <FormGroup sx={{ mb: 3 }}>
            <FormControlLabel
              control={
                <Checkbox 
                  checked={saveInfo}
                  onChange={(e) => setSaveInfo(e.target.checked)}
                  sx={{ color: 'primary.main' }}
                />
              }
              label="Save my information for faster checkout"
            />
            <Typography variant="body2" color="text.secondary" sx={{ ml: 4, mt: 0.5 }}>
              Pay securely at GumBox AS and everywhere Link is accepted.
            </Typography>
          </FormGroup>

          {/* Subscription Cancellation Notice */}
          <Box sx={{ 
            backgroundColor: '#FFF3E0', 
            border: '1px solid #FFB74D',
            borderRadius: '8px', 
            p: 2, 
            display: 'flex', 
            alignItems: 'flex-start',
            gap: 1,
            mb: 3
          }}>
            <Box sx={{ 
              width: 8, 
              height: 8, 
              backgroundColor: '#FF9800', 
              borderRadius: '50%', 
              mt: 0.5, 
              flexShrink: 0 
            }} />
            <Typography variant="body2" color="text.secondary">
              Ved kansellering av abonnement over én måned beregnes fakturering basert på gjenværende måneder etter kanselleringsdato. Eksempel: Ved kansellering av 6-måneders abonnement etter 2 måneder, belastes kun for 4 gjenværende måneder.
            </Typography>
          </Box>

          {/* Terms */}
          <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'center', lineHeight: 1.5, mb: 3 }}>
            Ved å klikke på "Pay" godtar jeg GumBox{' '}
            <Typography component="span" sx={{ textDecoration: 'underline', cursor: 'pointer' }}>
              bruksvilkår
            </Typography>
            , erkjenner{' '}
            <Typography component="span" sx={{ textDecoration: 'underline', cursor: 'pointer' }}>
              personvernerklæringen
            </Typography>
            {' '}og godtar GumBox sine{' '}
            <Typography component="span" sx={{ textDecoration: 'underline', cursor: 'pointer' }}>
              vilkår og betingelser
            </Typography>
            . Jeg godtar{' '}
            <Typography component="span" sx={{ textDecoration: 'underline', cursor: 'pointer' }}>
              angrerretten
            </Typography>
            .
          </Typography>

          {/* Pay Button */}
          <MotionButton
            fullWidth
            variant="contained"
            size="large"
            onClick={handleSubmit}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            sx={{
              py: 2,
              fontSize: '1.1rem',
              fontWeight: 'bold',
              background: 'linear-gradient(135deg, #F94F9B 0%, #FF7AB8 100%)',
              borderRadius: '8px',
              textTransform: 'none',
              color: 'white',
              '&:hover': {
                background: 'linear-gradient(135deg, #D63A7C 0%, #F94F9B 100%)',
              },
            }}
          >
            Pay
          </MotionButton>
      </Box>
    </Box>
  );
}