import React from 'react';
import { Box, Stepper, Step, StepLabel, Typography, StepConnector } from '@mui/material';
import { styled } from '@mui/material/styles';

// Custom StepConnector to ensure all steps are connected by the yellow line
const CustomConnector = styled(StepConnector)(({ theme }) => ({
  [`& .MuiStepConnector-line`]: {
    borderColor: '#FFD700', // Cor amarela
    borderTopWidth: 3, // Espessura da linha
  },
}));

const steps = [
  {
    label: 'Estudios de Suelo',
    description: 'Realizamos estudios de suelo para garantizar la viabilidad del pozo artesiano en el terreno.',
  },
  {
    label: 'Perforación Inicial',
    description: 'Comenzamos la perforación con equipos avanzados, asegurando la precisión y seguridad del proceso.',
  },
  {
    label: 'Instalación de Tubos',
    description: 'Instalamos tubos de alta calidad para asegurar el flujo continuo de agua en el pozo.',
  },
  {
    label: 'Mantenimiento Regular',
    description: 'Ofrecemos servicios de mantenimiento periódico para garantizar la longevidad del pozo.',
  },
  {
    label: 'Uso Sostenible del Agua',
    description: 'Nuestro enfoque es garantizar el uso eficiente y sostenible de los recursos hídricos.',
  },
  {
    label: 'Soporte Técnico',
    description: 'Brindamos soporte técnico completo durante todas las etapas del proceso de perforación.',
  },
];

const Timeline: React.FC = () => {
  return (
    <Box sx={{ width: '100%', padding: 4 }}>
      {/* Stepper com conector customizado */}
      <Stepper alternativeLabel activeStep={-1} connector={<CustomConnector />}>
        {steps.map((step, index) => (
          <Step key={index}>
            <StepLabel
              sx={{
                '& .MuiStepLabel-label': {
                  color: '#000000', // Cor preta para o texto
                  fontSize: '1rem', // Tamanho da fonte
                  fontWeight: 'bold', // Texto em negrito
                },
                '& .MuiSvgIcon-root': {
                  color: '#FFD700', // Cor amarela para os ícones dos pontos
                  fontSize: '2rem', // Aumenta o tamanho dos ícones dos pontos
                },
              }}
            >
              {step.label}
            </StepLabel>
          </Step>
        ))}
      </Stepper>

      {/* Informações detalhadas abaixo de cada ponto */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', paddingTop: 4 }}>
        {steps.map((step, index) => (
          <Box
            key={index}
            sx={{
              width: '16%',
              textAlign: 'center',
              color: '#000000', // Cor preta para o texto
            }}
          >
            <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
              {step.label}
            </Typography>
            <Typography variant="body2">{step.description}</Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Timeline;
