'use client';

import { Container, Typography, Box, Card, CardContent, Button, TextField, Alert, CircularProgress, Divider } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { paymentService, PaymentMethod, OrderData, CustomerData } from '@/lib/payments';
import PaymentMethodSelector from '@/components/payments/PaymentMethodSelector';

const checkoutSchema = z.object({
  fullName: z.string().min(2, 'Fullt navn må være minst 2 tegn'),
  email: z.string().email('Ugyldig e-postadresse'),
  address: z.string().min(5, 'Adresse må være minst 5 tegn'),
  city: z.string().min(2, 'Poststed må være minst 2 tegn'),
  postalCode: z.string().regex(/^\d{4}$/, 'Postnummer må være 4 siffer'),
  paymentMethod: z.enum(['klarna', 'vipps', 'stripe'], {
    message: 'Velg en betalingsmetode',
  }),
});

type CheckoutFormData = z.infer<typeof checkoutSchema>;

export default function CheckoutPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [orderData, setOrderData] = useState<OrderData | null>(null);
  const searchParams = useSearchParams();

  const {
    control,
    handleSubmit,
    watch,
    setValue,
    formState: { errors, isValid },
  } = useForm<CheckoutFormData>({
    resolver: zodResolver(checkoutSchema),
    mode: 'onChange',
    defaultValues: {
      fullName: '',
      email: '',
      address: '',
      city: '',
      postalCode: '',
      paymentMethod: 'klarna',
    },
  });

  const paymentMethod = watch('paymentMethod');

  useEffect(() => {
    // Get subscription length from URL params (default to 3 months)
    const length = parseInt(searchParams.get('length') || '3');
    const calculatedOrder = paymentService.calculateOrderTotals(length);
    setOrderData(calculatedOrder);
  }, [searchParams]);

  const onSubmit = async (data: CheckoutFormData) => {
    if (!orderData) return;
    
    setIsSubmitting(true);
    setSubmitError(null);
    
    try {
      const customerData: CustomerData = {
        fullName: data.fullName,
        email: data.email,
        address: data.address,
        city: data.city,
        postalCode: data.postalCode,
      };

      const result = await paymentService.createPaymentSession(
        data.paymentMethod,
        orderData,
        customerData
      );

      if (result.success && result.redirectUrl) {
        // Redirect to payment provider
        window.location.href = result.redirectUrl;
      } else {
        setSubmitError(result.error || 'Kunne ikke opprette betalingssesjon');
      }
    } catch (error) {
      console.error('Checkout error:', error);
      setSubmitError('Noe gikk galt. Vennligst prøv igjen.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Container maxWidth="md">
      <Box sx={{ py: 6 }}>
        {/* Header */}
        <Typography variant="h1" component="h1" gutterBottom align="center">
          Fullfør Bestilling
        </Typography>
        <Typography variant="subtitle1" align="center" sx={{ mb: 6 }}>
          Du er kun noen få steg unna din første GumBox
        </Typography>

        {submitError && (
          <Alert severity="error" sx={{ mb: 4 }}>
            {submitError}
          </Alert>
        )}

        {/* Checkout Form */}
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 4 }}>
          {/* Order Summary */}
          <Card>
            <CardContent sx={{ p: 3 }}>
              <Typography variant="h5" gutterBottom>
                Bestillingsoversikt
              </Typography>
              
              {orderData && (
                <>
                  <Box sx={{ py: 2, borderBottom: '1px solid', borderColor: 'divider' }}>
                    <Typography variant="h6">GumBox - {orderData.subscriptionLength} Måneder</Typography>
                    <Typography variant="body2" color="text.secondary">
                      Kurerte produkter hver måned
                    </Typography>
                    <Typography variant="body1" sx={{ mt: 1 }}>
                      {Math.round(orderData.subtotalAmount / orderData.subscriptionLength)},-/måned x {orderData.subscriptionLength} måneder
                    </Typography>
                  </Box>

                  <Box sx={{ py: 2, borderBottom: '1px solid', borderColor: 'divider' }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                      <Typography>Subtotal:</Typography>
                      <Typography>{orderData.subtotalAmount},-</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                      <Typography>Frakt:</Typography>
                      <Typography>Gratis</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                      <Typography>MVA (25%):</Typography>
                      <Typography>{orderData.taxAmount},-</Typography>
                    </Box>
                  </Box>

                  <Box sx={{ py: 2 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                      <Typography variant="h6">Total:</Typography>
                      <Typography variant="h6">{orderData.totalAmount},-</Typography>
                    </Box>
                  </Box>
                </>
              )}
            </CardContent>
          </Card>

          {/* Payment Form */}
          <Card>
            <CardContent sx={{ p: 3 }}>
              <Typography variant="h5" gutterBottom>
                Leveringsinformasjon
              </Typography>
              
              <form onSubmit={handleSubmit(onSubmit)}>
                <Box sx={{ display: 'grid', gap: 2, mb: 3 }}>
                  <Controller
                    name="fullName"
                    control={control}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        label="Fullt navn"
                        variant="outlined"
                        fullWidth
                        required
                        error={!!errors.fullName}
                        helperText={errors.fullName?.message}
                        aria-label="Fullt navn"
                      />
                    )}
                  />
                  
                  <Controller
                    name="email"
                    control={control}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        label="E-post"
                        variant="outlined"
                        fullWidth
                        required
                        type="email"
                        error={!!errors.email}
                        helperText={errors.email?.message}
                        aria-label="E-postadresse"
                      />
                    )}
                  />
                  
                  <Controller
                    name="address"
                    control={control}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        label="Adresse"
                        variant="outlined"
                        fullWidth
                        required
                        error={!!errors.address}
                        helperText={errors.address?.message}
                        aria-label="Adresse"
                      />
                    )}
                  />
                  
                  <Box sx={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 2 }}>
                    <Controller
                      name="city"
                      control={control}
                      render={({ field }) => (
                        <TextField
                          {...field}
                          label="Poststed"
                          variant="outlined"
                          required
                          error={!!errors.city}
                          helperText={errors.city?.message}
                          aria-label="Poststed"
                        />
                      )}
                    />
                    
                    <Controller
                      name="postalCode"
                      control={control}
                      render={({ field }) => (
                        <TextField
                          {...field}
                          label="Postnummer"
                          variant="outlined"
                          required
                          error={!!errors.postalCode}
                          helperText={errors.postalCode?.message}
                          aria-label="Postnummer"
                        />
                      )}
                    />
                  </Box>
                </Box>

                <Divider sx={{ my: 3 }} />
                
                <PaymentMethodSelector
                  value={paymentMethod}
                  onChange={(method) => setValue('paymentMethod', method, { shouldValidate: true })}
                  disabled={isSubmitting}
                />

                <Button 
                  type="submit"
                  variant="contained" 
                  fullWidth 
                  size="large" 
                  disabled={!isValid || isSubmitting || !orderData}
                  sx={{ py: 2, mt: 3 }}
                  aria-label="Fullfør bestilling"
                >
                  {isSubmitting ? (
                    <>
                      <CircularProgress size={20} sx={{ mr: 1, color: 'white' }} />
                      Behandler betaling...
                    </>
                  ) : (
                    `Betal ${orderData?.totalAmount || 0},- med ${paymentService.getPaymentMethodName(paymentMethod).split(' - ')[0]}`
                  )}
                </Button>
              </form>

              <Typography variant="body2" color="text.secondary" align="center" sx={{ mt: 2 }}>
                Du kan avbryte abonnementet ditt når som helst
              </Typography>
            </CardContent>
          </Card>
        </Box>

        {/* Trust Indicators */}
        <Box sx={{ py: 6, textAlign: 'center' }}>
          <Typography variant="h6" gutterBottom>
            Trygg og sikker betaling
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Vi bruker SSL-kryptering for å beskytte dine personlige opplysninger
          </Typography>
        </Box>
      </Box>
    </Container>
  );
}