import { Container, Box, Skeleton, Typography } from '@mui/material';

export default function CheckoutLoading() {
  return (
    <Container maxWidth="md" sx={{ py: 8 }}>
      <Box sx={{ textAlign: 'center', mb: 6 }}>
        <Skeleton variant="text" height={60} width="60%" sx={{ mx: 'auto', mb: 2 }} />
        <Skeleton variant="text" height={24} width="80%" sx={{ mx: 'auto' }} />
      </Box>

      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
        {/* Order Summary Card */}
        <Skeleton variant="rectangular" height={200} sx={{ borderRadius: 2 }} />
        
        {/* Payment Form */}
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <Skeleton variant="rectangular" height={60} sx={{ borderRadius: 1 }} />
          <Skeleton variant="rectangular" height={60} sx={{ borderRadius: 1 }} />
          <Skeleton variant="rectangular" height={60} sx={{ borderRadius: 1 }} />
        </Box>
        
        {/* Payment Methods */}
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Skeleton variant="rectangular" height={80} sx={{ flex: 1, borderRadius: 1 }} />
          <Skeleton variant="rectangular" height={80} sx={{ flex: 1, borderRadius: 1 }} />
          <Skeleton variant="rectangular" height={80} sx={{ flex: 1, borderRadius: 1 }} />
        </Box>
        
        {/* Submit Button */}
        <Skeleton variant="rectangular" height={56} sx={{ borderRadius: 28, mt: 2 }} />
      </Box>
    </Container>
  );
}