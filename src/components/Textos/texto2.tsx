import React from 'react';
import { Box, Grid, Typography } from '@mui/material';

const Texto2: React.FC = () => {
  return (
    <Box sx={{ padding: 4 }}>
      <Grid container spacing={2} alignItems="center">
        {/* Coluna do Texto */}
        <Grid item xs={12} md={6}>
          <Typography variant="h4" sx={{ fontWeight: 'bold', marginBottom: 2 }}>
            Paraná Perforaciones - Líder en perforación de pozos artesianos
          </Typography>
          <Typography variant="body1" sx={{ fontSize: '1.1rem', lineHeight: 1.6 }}>
            En **Paraná Perforaciones**, nos especializamos en la perforación de pozos artesianos, brindando soluciones
            eficientes y duraderas en todo el Paraguay. Con sede en Ciudad del Este, ofrecemos servicios de perforación
            adaptados a las necesidades de nuestros clientes, garantizando acceso a agua de calidad.
          </Typography>
          <Typography variant="body1" sx={{ fontSize: '1.1rem', lineHeight: 1.6, marginTop: 2 }}>
            Nuestros años de experiencia en el mercado nos permiten ofrecer un servicio confiable y seguro, utilizando
            equipos de última tecnología para asegurar que cada pozo cumpla con los estándares más altos de calidad.
            Además, brindamos un asesoramiento integral desde el inicio del proyecto hasta su finalización, garantizando
            que nuestros clientes reciban el mejor servicio posible.
          </Typography>
        </Grid>

        {/* Coluna da Imagem */}
        <Grid item xs={12} md={6}>
          <img
            src="https://via.placeholder.com/400x300" // Substitua com o link da imagem real
            alt="Paraná Perforaciones"
            style={{ width: '100%', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)' }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Texto2;
