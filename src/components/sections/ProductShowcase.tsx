'use client';

import { Box, Container, Typography, Card, CardContent, Grid, Chip, Stack } from '@mui/material';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useEffect } from 'react';
import { GumIcon } from '@/components/icons/NorwayIcons';

const MotionCard = motion(Card);
const MotionBox = motion(Box);

interface ProductItem {
  id: string;
  name: string;
  origin: string;
  flavor: string;
  color: string;
  description: string;
  isNew?: boolean;
  isLimited?: boolean;
}

interface ProductCardProps extends ProductItem {
  index: number;
}

function ProductCard({ name, origin, flavor, color, description, isNew, isLimited, index }: ProductCardProps) {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, amount: 0.3 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const floatingVariants = {
    float: {
      y: [-10, 10, -10],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
        delay: index * 0.2
      }
    }
  };

  return (
    <MotionCard
      ref={cardRef}
      initial="hidden"
      animate={controls}
      variants={cardVariants}
      whileHover={{ 
        y: -12,
        scale: 1.02,
        boxShadow: '0 20px 60px rgba(249, 79, 155, 0.2)',
        transition: { duration: 0.3 }
      }}
      sx={{
        height: '100%',
        borderRadius: 4,
        background: `linear-gradient(135deg, ${color}15 0%, ${color}08 100%)`,
        border: `2px solid ${color}20`,
        position: 'relative',
        overflow: 'visible',
        cursor: 'pointer',
      }}
    >
      {/* Badges */}
      <Stack
        direction="row"
        spacing={1}
        sx={{
          position: 'absolute',
          top: -10,
          left: 16,
          zIndex: 2,
        }}
      >
        {isNew && (
          <Chip
            label="NY"
            size="small"
            sx={{
              backgroundColor: 'success.main',
              color: 'white',
              fontWeight: 700,
              fontSize: '0.7rem',
            }}
          />
        )}
        {isLimited && (
          <Chip
            label="BEGRENSET"
            size="small"
            sx={{
              backgroundColor: 'warning.main',
              color: 'white',
              fontWeight: 700,
              fontSize: '0.7rem',
            }}
          />
        )}
      </Stack>

      <CardContent sx={{ p: 3, height: '100%', display: 'flex', flexDirection: 'column' }}>
        {/* Product Visual */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            mb: 2,
            position: 'relative',
          }}
        >
          <MotionBox
            variants={floatingVariants}
            animate="float"
            sx={{
              width: 80,
              height: 80,
              borderRadius: '50%',
              background: `linear-gradient(135deg, ${color} 0%, ${color}CC 100%)`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontSize: '2rem',
              boxShadow: `0 8px 32px ${color}40`,
              position: 'relative',
            }}
          >
            🍬
            
            {/* Sparkle effects */}
            <Box
              sx={{
                position: 'absolute',
                top: -5,
                right: -5,
                width: 12,
                height: 12,
                borderRadius: '50%',
                background: '#FFD43B',
                animation: 'sparkle 2s ease-in-out infinite',
                '@keyframes sparkle': {
                  '0%, 100%': { opacity: 0, transform: 'scale(0.5)' },
                  '50%': { opacity: 1, transform: 'scale(1)' },
                },
              }}
            />
            <Box
              sx={{
                position: 'absolute',
                bottom: -3,
                left: -3,
                width: 8,
                height: 8,
                borderRadius: '50%',
                background: '#6FD672',
                animation: 'sparkle 2s ease-in-out infinite 0.5s',
              }}
            />
          </MotionBox>
        </Box>

        {/* Product Info */}
        <Box sx={{ textAlign: 'center', flexGrow: 1 }}>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 700,
              color: 'text.primary',
              mb: 0.5,
              fontSize: '1.1rem',
            }}
          >
            {name}
          </Typography>

          <Typography
            variant="body2"
            sx={{
              color: 'text.secondary',
              fontWeight: 600,
              mb: 1,
              fontSize: '0.85rem',
            }}
          >
            {origin}
          </Typography>

          <Chip
            label={flavor}
            size="small"
            sx={{
              backgroundColor: color,
              color: 'white',
              fontWeight: 600,
              mb: 2,
            }}
          />

          <Typography
            variant="body2"
            sx={{
              color: 'text.secondary',
              lineHeight: 1.5,
              fontSize: '0.9rem',
            }}
          >
            {description}
          </Typography>
        </Box>
      </CardContent>
    </MotionCard>
  );
}

export default function ProductShowcase() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const products: ProductItem[] = [
    {
      id: '1',
      name: 'Sakura Mochi',
      origin: 'Japan 🇯🇵',
      flavor: 'Kirsebærblomst',
      color: '#F94F9B',
      description: 'Delikat sødme med hint av vårblomsring',
      isNew: true,
    },
    {
      id: '2',
      name: 'Tropical Burst',
      origin: 'Brasil 🇧🇷',
      flavor: 'Pasjonsfrukt',
      color: '#FFD43B',
      description: 'Eksotisk tropisk eksplosjon av smaker',
      isLimited: true,
    },
    {
      id: '3',
      name: 'Arctic Mint',
      origin: 'Island 🇮🇸',
      flavor: 'Islandsmynte',
      color: '#2E8BFF',
      description: 'Forfriskende kjølighet fra det nordlige',
    },
    {
      id: '4',
      name: 'Spicy Cinnamon',
      origin: 'Mexico 🇲🇽',
      flavor: 'Hetekanel',
      color: '#FF6B35',
      description: 'Varm og krydret med en dristig finish',
      isNew: true,
    },
    {
      id: '5',
      name: 'Bubble Tea',
      origin: 'Taiwan 🇹🇼',
      flavor: 'Taro',
      color: '#9B59B6',
      description: 'Kremet taro-smak med bobletekstur',
    },
    {
      id: '6',
      name: 'Forest Berry',
      origin: 'Finland 🇫🇮',
      flavor: 'Skogsbær',
      color: '#6FD672',
      description: 'Naturlig sødme fra nordiske skoger',
      isLimited: true,
    },
  ];

  return (
    <Box
      ref={sectionRef}
      sx={{
        py: { xs: 8, md: 12 },
        background: 'linear-gradient(180deg, #FFFFFF 0%, #F7F7F7 50%, #FFFFFF 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background decoration */}
      <Box
        sx={{
          position: 'absolute',
          top: '10%',
          left: '-10%',
          width: 400,
          height: 400,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(249, 79, 155, 0.05) 0%, transparent 70%)',
          zIndex: 0,
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: '10%',
          right: '-10%',
          width: 300,
          height: 300,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(46, 139, 255, 0.05) 0%, transparent 70%)',
          zIndex: 0,
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <Box sx={{ textAlign: 'center', mb: { xs: 6, md: 8 } }}>
            <Typography
              variant="h2"
              sx={{
                fontWeight: 700,
                color: 'text.primary',
                mb: 2,
                fontSize: { xs: '2rem', md: '2.5rem' },
              }}
            >
              Denne Månedens{' '}
              <Box
                component="span"
                sx={{
                  background: 'linear-gradient(135deg, #F94F9B 0%, #2E8BFF 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Utvalg
              </Box>
            </Typography>
            
            <Typography
              variant="h6"
              sx={{
                color: 'text.secondary',
                fontWeight: 400,
                maxWidth: '700px',
                mx: 'auto',
                lineHeight: 1.6,
                mb: 1,
              }}
            >
              Opplev unike smaker fra hele verden. Hver måned kurerer våre eksperter 
              de beste tyggegummiene for din neste store smaksopplevelse.
            </Typography>

            <Typography
              variant="body1"
              sx={{
                color: 'primary.main',
                fontWeight: 600,
                fontSize: '1.1rem',
              }}
            >
              ✨ 6 av 20+ produkter i februar-boksen
            </Typography>
          </Box>
        </motion.div>

        {/* Products Grid */}
        <Grid container spacing={3}>
          {products.map((product, index) => (
            <Grid item xs={12} sm={6} md={4} key={product.id}>
              <ProductCard {...product} index={index} />
            </Grid>
          ))}
        </Grid>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Box
            sx={{
              mt: { xs: 6, md: 8 },
              p: 4,
              borderRadius: 4,
              background: 'linear-gradient(135deg, rgba(249, 79, 155, 0.08) 0%, rgba(46, 139, 255, 0.08) 100%)',
              border: '1px solid rgba(249, 79, 155, 0.15)',
              textAlign: 'center',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            {/* Background pattern */}
            <Box
              sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundImage: `
                  radial-gradient(circle at 20% 20%, rgba(249, 79, 155, 0.1) 0%, transparent 50%),
                  radial-gradient(circle at 80% 80%, rgba(46, 139, 255, 0.1) 0%, transparent 50%)
                `,
                zIndex: 0,
              }}
            />

            <Box sx={{ position: 'relative', zIndex: 1 }}>
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 700,
                  color: 'text.primary',
                  mb: 2,
                  fontSize: { xs: '1.5rem', md: '2rem' },
                }}
              >
                Klar for Din Første Boks? 🎁
              </Typography>
              
              <Typography
                variant="h6"
                sx={{
                  color: 'text.secondary',
                  fontWeight: 400,
                  mb: 3,
                  lineHeight: 1.6,
                }}
              >
                Bli med over 2000 nordmenn som allerede opplever verdens beste tyggegummi hver måned.
              </Typography>

              <Stack
                direction={{ xs: 'column', sm: 'row' }}
                spacing={2}
                justifyContent="center"
                alignItems="center"
              >
                <Typography
                  variant="body1"
                  sx={{
                    color: 'success.main',
                    fontWeight: 600,
                    fontSize: '1.1rem',
                  }}
                >
                  ✅ Gratis frakt • ✅ Avbryt når som helst • ✅ 30 dagers garanti
                </Typography>
              </Stack>
            </Box>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
}