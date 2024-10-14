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
    <Box 
      sx={{ 
        width: '100%', 
        maxWidth: '90vw', // Limitar a largura máxima à largura da janela
        margin: '0 auto', // Centralizar o conteúdo
        paddingX: { xs: 2, md: 4 }, // Padding horizontal ajustável
        paddingY: 4, // Padding vertical constante
        overflowX: 'hidden', // Esconder qualquer overflow horizontal
      }}
    >
      {/* Stepper com conector customizado */}
      <Stepper alternativeLabel activeStep={-1} connector={<CustomConnector />}>
        {steps.map((step, index) => (
          <Step key={index}>
            <StepLabel
              sx={{
                '& .MuiStepLabel-label': {
                  color: '#000000', // Cor preta para o texto
                  fontSize: { xs: '0.8rem', md: '1rem' }, // Tamanho da fonte responsivo
                  fontWeight: 'bold', // Texto em negrito
                },
                '& .MuiSvgIcon-root': {
                  color: '#FFD700', // Cor amarela para os ícones dos pontos
                  fontSize: { xs: '1.5rem', md: '2rem' }, // Tamanho responsivo dos ícones
                },
              }}
            >
              {step.label}
            </StepLabel>
          </Step>
        ))}
      </Stepper>

      {/* Informações detalhadas abaixo de cada ponto */}
      <Box 
        sx={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          paddingTop: 4, 
          flexWrap: 'wrap', // Permitir que os itens se quebrem em linhas
          gap: 2, // Espaçamento entre os itens
          width: '100%', // Garantir que a largura não exceda a da página
        }}
      >
        {steps.map((step, index) => (
          <Box
            key={index}
            sx={{
              width: { xs: '100%', sm: '45%', md: '16%' }, // Ajustar largura conforme o tamanho da tela
              textAlign: 'center',
              color: '#000000', // Cor preta para o texto
              padding: 1, // Adicionar padding para espaçamento
            }}
          >
            <Typography variant="body1" sx={{ fontWeight: 'bold', fontSize: { xs: '0.9rem', md: '1rem' } }}>
              {step.label}
            </Typography>
            <Typography variant="body2" sx={{ fontSize: { xs: '0.75rem', md: '0.875rem' } }}>
              {step.description}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Timeline;
