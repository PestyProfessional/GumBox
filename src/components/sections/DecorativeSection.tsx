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
        mt: 0,
        minHeight: { xs: '70vh', sm: '75vh', md: '80vh', lg: '85vh', xl: '90vh' },
        maxHeight: { xs: '90vh', sm: '95vh', md: '100vh', lg: '105vh', xl: '110vh' },
        background: 'linear-gradient(180deg, rgba(255, 130, 65, 0.25) 0%, rgba(255, 120, 62, 0.18) 70%, rgba(255, 111, 60, 0.1) 100%)',
        position: 'relative',
        overflow: 'hidden',
        zIndex: -1,
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
            justifyContent: { xs: 'center', sm: 'flex-start' },
          }}
        >
          {/* Boy illustration positioned on the far left side - Hidden on mobile */}
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
              // Hidden on mobile, visible on larger screens
              display: { xs: 'none', sm: 'block' },
              left: 'clamp(-18%, calc(-8vw + 3%), -3%)',
              top: 'clamp(15%, calc(25vh - 5%), 40%)',
              transform: 'translateY(-50%)',
              width: 'clamp(35%, calc(15vw + 25%), 55%)',
              height: 'clamp(45%, calc(35vh + 15%), 80%)',
              aspectRatio: '3/4',
              maxWidth: 'min(600px, 50vw)',
              maxHeight: 'min(700px, 70vh)',
              minWidth: '200px',
              minHeight: '250px',
              zIndex: 1,
              opacity: 'clamp(0.08, calc(0.05 + 5vw/100), 0.2)',
              filter: 'drop-shadow(0 4px 20px rgba(255, 111, 60, 0.15))',
              transition: 'all 0.3s ease-in-out',
              pointerEvents: 'none',
            }}
          >
            <Image
              src="/images/transparent-boy.png"
              alt="GumBox mascot blowing bubble gum"
              width={600}
              height={800}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'contain',
                objectPosition: 'center left',
              }}
              priority
              quality={90}
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
              // Mobile: Use static positioning for centering, Desktop: absolute positioning
              position: { xs: 'static', sm: 'absolute' },
              // Desktop positioning only
              left: { sm: '22%', md: '20%', lg: '18%', xl: '16%' },
              top: { sm: '10%', md: '8%', lg: '6%', xl: '5%' },
              transform: { sm: 'translateY(0)' },
              // Mobile: full width and responsive height, Desktop: original
              width: { xs: '100%', sm: '83%', md: '85%', lg: '87%', xl: '90%' },
              height: { xs: 'auto', sm: '73%', md: '75%', lg: '77%', xl: '80%' },
              aspectRatio: { xs: '4/3', sm: 'auto' },
              borderRadius: { xs: '1rem', sm: '1.2rem', md: '1.5rem', lg: '1.8rem', xl: '2rem' },
              overflow: 'hidden',
              boxShadow: '0 20px 60px rgba(0, 0, 0, 0.1)',
              zIndex: 2,
              // Mobile: center horizontally
              mx: { xs: 'auto', sm: 0 },
              // Mobile: responsive max width
              maxWidth: { xs: 'min(90vw, 360px)', sm: '100%' },
            }}
          >
            {/* Background image */}
            <Image
              src="/images/ComputerPinkImage.png"
              alt="GumBox background"
              width={1400}
              height={800}
              style={{
                width: '100%',
                height: '100%',
                borderRadius: '12px',
                objectFit: 'cover',
                objectPosition: 'center center'
              }}
              priority
              quality={90}
            />


          </MotionBox>
        </Box>
      </Container>
    </Box>
  );
}