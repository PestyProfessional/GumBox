import { Box, Skeleton, Container } from '@mui/material';

interface SectionLoadingProps {
  height?: number | string;
  showImage?: boolean;
  showContent?: boolean;
}

export default function SectionLoading({ 
  height = 400, 
  showImage = true, 
  showContent = true 
}: SectionLoadingProps) {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box sx={{ display: 'flex', gap: 4, flexDirection: { xs: 'column', md: 'row' } }}>
        {/* Image Skeleton */}
        {showImage && (
          <Box sx={{ flex: 1 }}>
            <Skeleton
              variant="rectangular"
              width="100%"
              height={height}
              sx={{ borderRadius: 2, bgcolor: 'grey.100' }}
            />
            {/* Navigation dots */}
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1, mt: 2 }}>
              {[1, 2, 3, 4, 5].map((i) => (
                <Skeleton
                  key={i}
                  variant="circular"
                  width={12}
                  height={12}
                  sx={{ bgcolor: 'grey.200' }}
                />
              ))}
            </Box>
          </Box>
        )}

        {/* Content Skeleton */}
        {showContent && (
          <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 2 }}>
            {/* Title */}
            <Skeleton variant="text" height={60} width="80%" sx={{ bgcolor: 'grey.200' }} />
            
            {/* Subtitle */}
            <Skeleton variant="text" height={24} width="60%" sx={{ bgcolor: 'grey.100' }} />
            
            {/* Plan cards */}
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 2 }}>
              {[1, 2, 3].map((i) => (
                <Skeleton
                  key={i}
                  variant="rectangular"
                  height={80}
                  sx={{ borderRadius: 2, bgcolor: 'grey.100' }}
                />
              ))}
            </Box>
            
            {/* Button */}
            <Skeleton
              variant="rectangular"
              height={56}
              width="100%"
              sx={{ borderRadius: 28, mt: 2, bgcolor: 'grey.200' }}
            />
          </Box>
        )}
      </Box>
    </Container>
  );
}