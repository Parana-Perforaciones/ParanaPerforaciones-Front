import React from 'react';
import { Box, Container, Typography, IconButton, Stack } from '@mui/material';
import { Facebook, Instagram, LinkedIn } from '@mui/icons-material';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#f5f5f5',
        color: '#363e50',
        padding: '1rem 0',
        width: '100%',
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
        marginTop: 'auto', // Garante que o rodapé seja empurrado para o final
      }}
    >
      <Container maxWidth="md" sx={{ textAlign: 'center' }}>
        <Box
          component="img"
          alt="Logo Galaxy Service"
          sx={{ width: 80, height: 'auto', margin: '0 auto' }}
        />
        <Stack
          direction="row"
          justifyContent="center"
          spacing={2}
          sx={{ marginTop: '0.5rem' }}
        >
          <IconButton
            component="a"
            href="https://gerenciamentov1.vercel.app/"
            aria-label="Facebook"
            sx={{
              color: '#363e50',
              '&:hover': {
                color: '#1976d2',
              },
            }}
          >
            <Facebook />
          </IconButton>
          <IconButton
            component="a"
            href="https://gerenciamentov1.vercel.app/"
            aria-label="Instagram"
            sx={{
              color: '#363e50',
              '&:hover': {
                color: '#d81b60',
              },
            }}
          >
            <Instagram />
          </IconButton>
          <IconButton
            component="a"
            href="https://gerenciamentov1.vercel.app/"
            aria-label="LinkedIn"
            sx={{
              color: '#363e50',
              '&:hover': {
                color: '#0a66c2',
              },
            }}
          >
            <LinkedIn />
          </IconButton>
        </Stack>
        <Typography variant="body2" sx={{ marginTop: '1rem' }}>
          Copyright &copy; {new Date().getFullYear()} Paraná Perforaciones Company
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
