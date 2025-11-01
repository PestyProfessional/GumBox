'use client';

import { useState } from 'react';
import {
  Box,
  Drawer,
  Typography,
  Button,
  IconButton,
  Card,
  CardContent,
  Badge,
  Divider,
} from '@mui/material';
import { ShoppingCart as ShoppingCartIcon, Close } from '@mui/icons-material';
import Image from 'next/image';
import { useCart } from '@/contexts/CartContext';


export default function ShoppingCart() {
  const [isOpen, setIsOpen] = useState(false);
  const { state, removeItem } = useCart();

  return (
    <>
      {/* Cart Icon */}
      <IconButton
        onClick={() => setIsOpen(true)}
        sx={{
          color: 'inherit',
          position: 'relative',
          '&:hover': {
            backgroundColor: 'rgba(255,255,255,0.1)'
          }
        }}
      >
        <Badge badgeContent={state.totalItems} color="error">
          <ShoppingCartIcon />
        </Badge>
      </IconButton>

      {/* Cart Drawer */}
      <Drawer
        anchor="right"
        open={isOpen}
        onClose={() => setIsOpen(false)}
        PaperProps={{
          sx: {
            width: { xs: '100vw', sm: 400 },
            backgroundColor: '#FDFCFB',
          }
        }}
      >
        <Box sx={{ p: 3, height: '100%', display: 'flex', flexDirection: 'column' }}>
          {/* Header */}
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
            <Typography variant="h5" fontWeight="bold">
              Handlekurv ({state.totalItems} varer)
            </Typography>
            <IconButton onClick={() => setIsOpen(false)}>
              <Close />
            </IconButton>
          </Box>

          {state.items.length === 0 ? (
            <>
              {/* Empty Cart State */}
              <Box sx={{ textAlign: 'center', py: 4, flex: 1 }}>
                <Box sx={{ fontSize: '4rem', mb: 2 }}>🛒</Box>
                <Typography variant="h6" gutterBottom color="text.secondary">
                  Handlekurven din er tom
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 4 }}>
                  La oss fylle den med noe deilig!
                </Typography>


                <Button
                  variant="outlined"
                  onClick={() => setIsOpen(false)}
                  sx={{ borderRadius: '50px', px: 4 }}
                >
                  Fortsett å Handle
                </Button>
              </Box>
            </>
          ) : (
            <>
              {/* Cart Items */}
              <Box sx={{ flex: 1, overflowY: 'auto' }}>
                {state.items.map((item) => (
                  <Card key={item.id} sx={{ mb: 2, borderRadius: 2 }}>
                    <CardContent sx={{ p: 2, display: 'flex', gap: 2, alignItems: 'center' }}>
                      <Image
                        src={item.productImage}
                        alt={item.productName}
                        width={60}
                        height={60}
                        style={{ 
                          width: '60px', 
                          height: '60px', 
                          objectFit: 'cover',
                          borderRadius: '8px'
                        }}
                      />
                      <Box sx={{ flex: 1 }}>
                        <Typography variant="subtitle2" fontWeight="bold">
                          {item.productName}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {item.planName}
                        </Typography>
                        <Typography variant="h6" color="primary.main" fontWeight="bold">
                          {item.price},-
                        </Typography>
                        {item.quantity > 1 && (
                          <Typography variant="body2" color="text.secondary">
                            Antall: {item.quantity}
                          </Typography>
                        )}
                      </Box>
                      <IconButton 
                        size="small" 
                        onClick={() => removeItem(item.id)}
                        sx={{ color: 'error.main' }}
                      >
                        <Close />
                      </IconButton>
                    </CardContent>
                  </Card>
                ))}
              </Box>

              {/* Cart Footer */}
              <Box>
                <Divider sx={{ my: 2 }} />
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
                  <Typography variant="h6">Subtotal:</Typography>
                  <Typography variant="h6" fontWeight="bold">
                    {state.totalPrice},- NOK
                  </Typography>
                </Box>
                
                <Button
                  variant="contained"
                  fullWidth
                  size="large"
                  onClick={() => {
                    setIsOpen(false);
                    window.location.href = '/checkout';
                  }}
                  sx={{
                    background: 'linear-gradient(135deg, #FF1B8D 0%, #FF4DA1 100%)',
                    borderRadius: '50px',
                    py: 1.5,
                    mb: 2,
                  }}
                >
                  Gå til Kassen 🛒
                </Button>
                
                <Typography variant="caption" color="text.secondary" align="center" sx={{ display: 'block' }}>
                  Frakt, rabatter og avgifter beregnes ved kassen.
                  Alle priser i NOK
                </Typography>
              </Box>
            </>
          )}
        </Box>
      </Drawer>
    </>
  );
}