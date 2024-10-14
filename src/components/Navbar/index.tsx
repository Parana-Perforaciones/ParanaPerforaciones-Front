import React from 'react'; 
import { AppBar, Toolbar, Button, Box } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../../asset/Logo.png'; // Certifique-se de que o caminho da logo está correto

const Navbar = () => {
  const location = useLocation();

  // Estilização padrão dos botões
  const buttonStyles = (path: string) => ({
    color: location.pathname === path ? '#FFD700' : 'white', // Amarelo se a rota for ativa, branco se não for
    position: 'relative',
    padding: '10px 15px',
    '&:hover': {  
      color: location.pathname === path ? '#FFD700' : '#FFD700', // Manter amarelo no hover se a rota estiver ativa
    },
    '&:after': {
      content: '""',
      position: 'absolute',
      left: 0,
      bottom: 0,
      width: '100%',
      height: '2px',
      backgroundColor: '#FFD700',
      transform: location.pathname === path ? 'scaleX(1)' : 'scaleX(0)', // Manter a linha amarela se a rota for ativa
      transition: 'transform 0.3s ease',
      transformOrigin: 'right',
    },
    '&:hover:after': {
      transform: 'scaleX(1)',
      transformOrigin: 'left',
    },
  });

  return (
    <AppBar position="static" sx={{ backgroundColor: 'black' }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        {/* Ajustando a logo para a esquerda e reduzindo o tamanho */}
        <Box 
          component="img" 
          src={Logo} 
          alt="Logo" 
          sx={{ 
            height: '40px', // Ajuste o tamanho da logo aqui, pode usar 'width' também se preferir
            marginRight: 'auto', // Garante que o restante do conteúdo fique à direita da logo
          }} 
        />

        {/* Estilizar os botões com rota ativa e animação de linha ao hover */}
        <Box sx={{ display: 'flex', gap: '10px' }}>
          <Button
            component={Link}
            to="/"
            sx={buttonStyles('/')} // Passa o caminho da rota para determinar o estilo
          >
            Inicio
          </Button>
          <Button
            component={Link}
            to="/sobre"
            sx={buttonStyles('/sobre')}
          >
            Sobre
          </Button>
          <Button
            component={Link}
            to="/presupuesto"
            sx={buttonStyles('/presupuesto')}
          >
            Presupuesto
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
