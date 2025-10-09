'use client';

import { Box, Typography, Card, CardContent, Stack, Avatar, Rating } from '@mui/material';
import { motion } from 'framer-motion';

const MotionCard = motion.create(Card);

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const reviews = [
  {
    name: 'Anna Hansen',
    location: 'Oslo',
    rating: 5,
    text: 'GumBox har virkelig overrasket meg! Hver måned får jeg prøve helt nye smaker jeg aldri hadde hørt om før. Kvaliteten er fantastisk og leveringen er alltid i tide.',
    subscription: 'Mars 2024',
    avatar: 'AH',
    gradient: 'linear-gradient(135deg, #FF4DA1 0%, #FFD23F 100%)'
  },
  {
    name: 'Magnus Johansen',
    location: 'Bergen',
    rating: 5,
    text: 'Som tyggegummi-entusiast er GumBox en drøm som blir virkelighet! Smaker fra Japan, USA, Brasil - det er som å reise verden rundt uten å forlate hjemmet.',
    subscription: 'Januar 2024',
    avatar: 'MJ',
    gradient: 'linear-gradient(135deg, #FFD23F 0%, #FF6B35 100%)',
    featured: true
  },
  {
    name: 'Sofie Larsen',
    location: 'Trondheim',
    rating: 4,
    text: 'Perfekt gave til meg selv hver måned! Barna mine elsker også å teste de forskjellige smakene sammen med meg. En hyggelig familieaktivitet.',
    subscription: 'Juni 2024',
    avatar: 'SL',
    gradient: 'linear-gradient(135deg, #00B4D8 0%, #6F2DBD 100%)'
  }
];

export default function ReviewsSection() {
  return (
    <Box sx={{ py: 8 }}>
      <Box sx={{ textAlign: 'center', mb: 6 }}>
        <Typography 
          variant="overline" 
          sx={{ 
            color: 'primary.main', 
            fontWeight: 'bold',
            fontSize: '1rem',
            letterSpacing: 2,
            mb: 2,
            display: 'block'
          }}
        >
          04
        </Typography>
        <Typography variant="h2" gutterBottom sx={{ color: 'secondary.main', fontWeight: 'bold', mb: 3 }}>
          Hva Kundene Sier
        </Typography>
        
        {/* Overall Rating */}
        <Box sx={{ mb: 6, display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 2 }}>
          <Rating 
            value={4.8} 
            precision={0.1} 
            readOnly 
            size="large"
            sx={{ 
              '& .MuiRating-iconFilled': {
                color: '#FFD23F'
              }
            }}
          />
          <Typography variant="h4" sx={{ fontWeight: 'bold', color: 'text.primary' }}>
            4.8
          </Typography>
          <Typography variant="body1" color="text.secondary">
            (2,847 anmeldelser)
          </Typography>
        </Box>
      </Box>

      <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' }, gap: 4 }}>
        {reviews.map((review, index) => (
          <Box key={review.name}>
            <MotionCard 
              {...fadeInUp}
              transition={{ ...fadeInUp.transition, delay: index * 0.1 }}
              sx={{ 
                height: '100%',
                borderRadius: 3,
                ...(review.featured 
                  ? {
                      background: review.gradient,
                      color: 'white'
                    } 
                  : {
                      border: '1px solid',
                      borderColor: 'grey.200'
                    }
                ),
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: review.featured 
                    ? '0 12px 32px rgba(255,210,63,0.3)'
                    : '0 12px 32px rgba(0,0,0,0.1)',
                  ...(review.featured 
                    ? {} 
                    : { borderColor: 'primary.main' }
                  )
                }
              }}
            >
              <CardContent sx={{ p: 4 }}>
                <Stack spacing={3}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Avatar 
                      sx={{ 
                        width: 50, 
                        height: 50,
                        ...(review.featured 
                          ? {
                              background: 'rgba(255,255,255,0.2)',
                              color: 'white',
                              fontWeight: 'bold'
                            }
                          : {
                              background: review.gradient
                            }
                        )
                      }}
                    >
                      {review.avatar}
                    </Avatar>
                    <Box>
                      <Typography variant="h6" fontWeight="bold">
                        {review.name}
                      </Typography>
                      <Typography 
                        variant="body2" 
                        sx={{ 
                          ...(review.featured 
                            ? { opacity: 0.9 } 
                            : { color: 'text.secondary' }
                          )
                        }}
                      >
                        {review.location}
                      </Typography>
                    </Box>
                  </Box>
                  
                  <Rating 
                    value={review.rating} 
                    readOnly 
                    sx={{ 
                      '& .MuiRating-iconFilled': {
                        color: review.featured ? 'white' : '#FFD23F'
                      },
                      ...(review.featured && {
                        '& .MuiRating-iconEmpty': {
                          color: 'rgba(255,255,255,0.3)'
                        }
                      })
                    }}
                  />
                  
                  <Typography variant="body1" sx={{ lineHeight: 1.7, fontStyle: 'italic' }}>
                    "{review.text}"
                  </Typography>
                  
                  <Typography 
                    variant="caption" 
                    sx={{
                      ...(review.featured 
                        ? { opacity: 0.8 } 
                        : { color: 'text.secondary' }
                      )
                    }}
                  >
                    Abonnent siden {review.subscription}
                  </Typography>
                </Stack>
              </CardContent>
            </MotionCard>
          </Box>
        ))}
      </Box>
    </Box>
  );
}