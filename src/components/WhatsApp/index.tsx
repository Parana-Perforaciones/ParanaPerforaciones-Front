import { Button } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = '554598046477'; // Número de telefone no formato internacional, sem espaços ou símbolos
    const message = encodeURIComponent('Olá, gostaria de solicitar um orçamento.');
    const url = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(url, '_blank');
  };

  return (
    <Button
      variant="contained"
      color="success"
      startIcon={<WhatsAppIcon />}
      onClick={handleWhatsAppClick}
    >
      Fale Conosco no WhatsApp
    </Button>
  );
};

export default WhatsAppButton;
