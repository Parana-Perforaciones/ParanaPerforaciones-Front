import React, { useState } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica para enviar os dados do formulário (e.g., via API ou e-mail)
    console.log(formData);
  };

  return (
    <Box 
      component="form" 
      onSubmit={handleSubmit} 
      sx={{ maxWidth: '400px', margin: 'auto', padding: '20px' }}
    >
      <Typography variant="h5" gutterBottom>
        Entre em Contato
      </Typography>
      <TextField
        fullWidth
        label="Nome"
        name="name"
        value={formData.name}
        onChange={handleChange}
        margin="normal"
        required
      />
      <TextField
        fullWidth
        label="E-mail"
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        margin="normal"
        required
      />
      <TextField
        fullWidth
        label="Mensagem"
        name="message"
        value={formData.message}
        onChange={handleChange}
        margin="normal"
        multiline
        rows={4}
        required
      />
      <Button 
        type="submit" 
        variant="contained" 
        color="primary"
        sx={{ marginTop: '20px' }}
      >
        Enviar
      </Button>
    </Box>
  );
};

export default ContactForm;
