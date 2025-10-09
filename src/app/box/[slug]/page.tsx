'use client';

import { Container, Typography, Box, Card, CardContent, CardMedia, Button, Chip } from '@mui/material';

interface BoxDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function BoxDetailPage(props: BoxDetailPageProps) {
  const params = await props.params;
  // This would typically fetch data based on the slug
  const boxData = {
    title: "September 2024 - Høstkomfort",
    description: "Oppdag produkter som bringer varme og komfort til høstdagene",
    theme: "Høstkomfort",
    products: [
      "Premium te-blanding",
      "Håndlaget såpe",
      "Lesebokmerke i tre",
      "Aromaterapi-lys",
      "Hjemmelaget honning"
    ]
  };

  return (
    <Container maxWidth="lg">
      <Box sx={{ py: 6 }}>
        {/* Header */}
        <Box sx={{ mb: 6 }}>
          <Chip label={boxData.theme} color="primary" sx={{ mb: 2 }} />
          <Typography variant="h1" component="h1" gutterBottom>
            {boxData.title}
          </Typography>
          <Typography variant="subtitle1" sx={{ maxWidth: 600 }}>
            {boxData.description}
          </Typography>
        </Box>

        {/* Box Image and Content */}
        <Box sx={{ display: 'flex', gap: 4, mb: 6, flexDirection: { xs: 'column', md: 'row' } }}>
          <Card sx={{ flex: 1, maxWidth: { md: 500 } }}>
            <CardMedia
              component="div"
              sx={{
                height: 400,
                bgcolor: 'grey.200',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <Typography color="text.secondary">
                Boks Bilde
              </Typography>
            </CardMedia>
          </Card>

          <Box sx={{ flex: 1 }}>
            <Typography variant="h3" gutterBottom>
              Innhold i denne boksen
            </Typography>
            <Box sx={{ mb: 4 }}>
              {boxData.products.map((product, index) => (
                <Card key={index} sx={{ mb: 2, p: 2 }}>
                  <Typography variant="body1">
                    {product}
                  </Typography>
                </Card>
              ))}
            </Box>
            
            <Button variant="contained" size="large" fullWidth>
              Start Abonnement
            </Button>
          </Box>
        </Box>

        {/* Additional Info */}
        <Box sx={{ py: 6, bgcolor: 'grey.50', borderRadius: 2 }}>
          <Container>
            <Typography variant="h4" align="center" gutterBottom>
              Ønsker du å få denne boksen?
            </Typography>
            <Typography variant="body1" align="center" sx={{ mb: 4 }}>
              Start abonnementet ditt i dag og få lignende kurerte produkter hver måned
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
              <Button variant="contained" size="large">
                Start Abonnement
              </Button>
              <Button variant="outlined" size="large">
                Se Andre Bokser
              </Button>
            </Box>
          </Container>
        </Box>
      </Box>
    </Container>
  );
}