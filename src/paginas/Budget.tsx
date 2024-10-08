import React from 'react';
import { Button, Box, Typography } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import Texto from '../components/Textos/inicio';

const Budget: React.FC = () => {

  // Função para download do PDF
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/budget.pdf'; // Caminho do arquivo PDF dentro da pasta public
    link.download = 'Presupuesto_Parana_Perforaciones.pdf'; // Nome do arquivo para download
    link.click();
  };

  return (
    <Box sx={{ textAlign: 'center', padding: 4 }}>
      <Texto/>
      <Typography variant="h4" sx={{ mb: 4 }}>
        Presupuesto
      </Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={handleDownload}
        startIcon={<DownloadIcon />}
        sx={{ padding: '10px 20px' }}
      >
        Descargar PDF
      </Button>
    </Box>
  );
};

export default Budget;
