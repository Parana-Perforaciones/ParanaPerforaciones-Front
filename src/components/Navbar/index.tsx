// src/components/Navbar/index.tsx
import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Mi Compañía
        </Typography>

        <Box>
          <Button component={Link} to="/" color="inherit">
            Inicio
          </Button>
          <Button component={Link} to="/sobre" color="inherit">
            Sobre
          </Button>
          <Button component={Link} to="/presupuesto" color="inherit">
            Presupuesto
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
