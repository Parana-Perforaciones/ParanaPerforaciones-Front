import * as React from 'react'; 
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

type Panel = string | false;

export default function FAQ() {
  const [expanded, setExpanded] = React.useState<Panel>(false);

  const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div style={{ marginTop: '80px', textAlign: 'center' }}>
      {/* Adicionando título para o FAQ */}
      <Typography variant="h4" sx={{ marginBottom: '20px', fontWeight: 'bold', color: 'black' }}>
        Perguntas Frequentes
      </Typography>

      {/* Accordion com estilo personalizado */}
      <Accordion 
        expanded={expanded === 'panel1'} 
        onChange={handleChange('panel1')} 
        sx={{ backgroundColor: '#FFD700', color: 'black' }} // Fundo amarelo e texto preto
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: 'black' }} />} // Ícone preto
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ fontSize: '18px', fontWeight: 'bold' }}>
            General settings
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontSize: '16px' }}>
            Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est, id dignissim quam.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion 
        expanded={expanded === 'panel2'} 
        onChange={handleChange('panel2')}
        sx={{ backgroundColor: '#FFD700', color: 'black' }} // Fundo amarelo e texto preto
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: 'black' }} />} // Ícone preto
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography sx={{ fontSize: '18px', fontWeight: 'bold' }}>
            Users
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontSize: '16px' }}>
            Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus, varius pulvinar diam eros in elit. 
            Pellentesque convallis laoreet laoreet.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion 
        expanded={expanded === 'panel3'} 
        onChange={handleChange('panel3')}
        sx={{ backgroundColor: '#FFD700', color: 'black' }} // Fundo amarelo e texto preto
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: 'black' }} />} // Ícone preto
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography sx={{ fontSize: '18px', fontWeight: 'bold' }}>
            Advanced settings
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontSize: '16px' }}>
            Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros, vitae egestas augue.
            Duis vel est augue.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion 
        expanded={expanded === 'panel4'} 
        onChange={handleChange('panel4')}
        sx={{ backgroundColor: '#FFD700', color: 'black' }} // Fundo amarelo e texto preto
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: 'black' }} />} // Ícone preto
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography sx={{ fontSize: '18px', fontWeight: 'bold' }}>
            Personal data
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontSize: '16px' }}>
            Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros, vitae egestas augue.
            Duis vel est augue.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
