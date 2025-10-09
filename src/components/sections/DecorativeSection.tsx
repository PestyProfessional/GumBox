'use client';

import { Box, Container, Button } from '@mui/material';
import { motion } from 'framer-motion';
import Image from 'next/image';

const MotionBox = motion(Box);
const MotionButton = motion(Button);

export default function DecorativeSection() {
  return (
    <Box
      sx={{
        py: 0,
        mt: { xs: '-0.5rem', md: '-0.75rem' },
        minHeight: { xs: '70vh', sm: '75vh', md: '80vh', lg: '85vh', xl: '90vh' },
        maxHeight: { xs: '90vh', sm: '95vh', md: '100vh', lg: '105vh', xl: '110vh' },
        background: 'linear-gradient(180deg, rgba(255, 111, 60, 0.1) 0%, rgba(255, 111, 60, 0.05) 50%, rgba(255, 111, 60, 0.1) 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1, px: { xs: '4%', md: '6%' } }}>
        <Box
          sx={{
            position: 'relative',
            width: '100%',
            height: { xs: '65vh', sm: '70vh', md: '75vh', lg: '80vh', xl: '85vh' },
            minHeight: { xs: '600px', sm: '700px', md: '800px', lg: '900px', xl: '1000px' },
            maxHeight: { xs: '800px', sm: '900px', md: '1000px', lg: '1200px', xl: '1400px' },
            display: 'flex',
            alignItems: 'center',
          }}
        >
          {/* Boy illustration positioned on the far left side */}
          <MotionBox
            initial={{ opacity: 0, x: -50, scale: 0.8 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ 
              duration: 0.8, 
              ease: "easeOut",
              delay: 0.2 
            }}
            whileHover={{ 
              scale: 1.02,
              transition: { duration: 0.3 }
            }}
            sx={{
              position: 'absolute',
              // Smooth left positioning across all screen sizes
              left: 'clamp(-20%, calc(-10vw + 2%), -5%)',
              // Smooth top positioning that adapts to viewport height
              top: 'clamp(15%, calc(25vh - 5%), 40%)',
              transform: 'translateY(-50%)',
              // Smooth width scaling based on viewport width
              width: 'clamp(35%, calc(15vw + 25%), 55%)',
              // Smooth height scaling based on viewport height  
              height: 'clamp(45%, calc(35vh + 15%), 80%)',
              // Maintain aspect ratio but allow some flexibility
              aspectRatio: '3/4',
              // Constrain maximum size to prevent it from becoming too large
              maxWidth: 'min(600px, 50vw)',
              maxHeight: 'min(700px, 70vh)',
              // Ensure minimum visibility on very small screens
              minWidth: '200px',
              minHeight: '250px',
              zIndex: 1,
              // Smooth opacity scaling for better visual balance
              opacity: 'clamp(0.08, calc(0.05 + 5vw/100), 0.2)',
              filter: 'drop-shadow(0 4px 20px rgba(255, 111, 60, 0.15))',
              transition: 'all 0.3s ease-in-out',
              // Ensure it doesn't interfere with main content on any screen
              pointerEvents: 'none',
            }}
          >
            <Image
              src="/images/transparent-boy.png"
              alt="GumBox mascot blowing bubble gum"
              fill
              sizes="clamp(200px, calc(15vw + 200px), 600px)"
              style={{
                objectFit: 'contain',
                objectPosition: 'center left',
                imageRendering: 'optimizeQuality',
                willChange: 'transform',
              }}
              priority
              quality={90}
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
            />
          </MotionBox>

          {/* Main content card with rounded background */}
          <MotionBox
            initial={{ opacity: 0, x: 50, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ 
              duration: 0.8, 
              ease: "easeOut",
              delay: 0.4 
            }}
            sx={{
              position: 'absolute',
              left: { xs: '25%', sm: '22%', md: '20%', lg: '18%', xl: '16%' },
              top: { xs: '5%', sm: '3%', md: '2%', lg: '1%', xl: '1%' },
              transform: 'translateY(0)',
              width: { xs: '80%', sm: '83%', md: '85%', lg: '87%', xl: '90%' },
              height: { xs: '70%', sm: '73%', md: '75%', lg: '77%', xl: '80%' },
              borderRadius: { xs: '1rem', sm: '1.2rem', md: '1.5rem', lg: '1.8rem', xl: '2rem' },
              overflow: 'hidden',
              position: 'relative',
              boxShadow: '0 20px 60px rgba(0, 0, 0, 0.1)',
              zIndex: 2,
            }}
          >
            {/* Background image */}
            <Image
              src="/images/Gul-rosa.png"
              alt="GumBox background"
              fill
              sizes="(max-width: 480px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 90vw, (max-width: 1200px) 85vw, (max-width: 1440px) 80vw, 1200px"
              style={{
                objectFit: 'cover',
                objectPosition: 'center',
                imageRendering: 'auto',
              }}
              priority
              quality={85}
            />

            {/* Overlay for better button visibility */}
            <Box
              sx={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.2) 100%)',
                zIndex: 1,
              }}
            />

            {/* Content container */}
            <Box
              sx={{
                position: 'absolute',
                inset: 0,
                display: 'flex',
                alignItems: 'flex-end',
                justifyContent: 'center',
                p: { xs: '4%', md: '6%' },
                pb: { xs: '4%', sm: '6%', md: '8%', lg: '10%', xl: '12%' },
                pl: { xs: '4%', sm: '6%', md: '8%', lg: '10%', xl: '12%' },
                zIndex: 2,
              }}
            >
              <MotionButton
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ 
                  duration: 0.6, 
                  delay: 0.8 
                }}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: '0 8px 25px rgba(0, 0, 0, 0.2)',
                }}
                whileTap={{ scale: 0.98 }}
                variant="contained"
                size="large"
                onClick={() => {
                  document.getElementById('plan-selection')?.scrollIntoView({ behavior: 'smooth' });
                }}
                sx={{
                  px: { xs: '1.5rem', md: '2rem' },
                  py: { xs: '0.75rem', md: '1rem' },
                  fontSize: { xs: '0.75rem', md: '1rem' },
                  fontWeight: 600,
                  borderRadius: '50px',
                  background: 'linear-gradient(135deg, #FF6F3C 0%, #FF8A5B 100%)',
                  boxShadow: '0 6px 20px rgba(255, 111, 60, 0.4)',
                  color: 'white',
                  textTransform: 'none',
                  border: 'none',
                  '&:hover': {
                    background: 'linear-gradient(135deg, #E55A2B 0%, #FF6F3C 100%)',
                  },
                }}
              >
                Gjenopplev tyggegummi-eventyret 🌍
              </MotionButton>
            </Box>
          </MotionBox>
        </Box>
      </Container>
    </Box>
  );
}