import React from 'react';
import { Box, Card, CardContent, Typography, Grid, Button } from '@mui/material';

const MiniBanner: React.FC = () => {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: 4 }}>
            <Grid container spacing={2} sx={{ maxWidth: '1200px' }}>
                {/* Primeiro Card */}
                <Grid item xs={12} md={4}>
                    <Card
                        sx={{
                            backgroundColor: '#2B2B2B',
                            borderRadius: 2,
                            height: '250px', // Altura padrão para o primeiro card
                            marginTop: '30px', // Margem superior para os cards
                            boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)', // Sombra inferior
                            transition: 'transform 0.3s, box-shadow 0.3s',
                            '&:hover': {
                                transform: 'scale(1.05)',
                                boxShadow: '0 12px 24px rgba(0, 0, 0, 0.3)', // Sombra mais intensa ao passar o mouse
                            },
                        }}
                    >
                        <CardContent>
                            <Typography variant="h6" sx={{ color: '#FFFFFF' }}>
                                01.
                            </Typography>
                            <Typography variant="body1" sx={{ color: '#FFFFFF' }}>
                                Servicio para cualquier nivel de experiencia.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>

                {/* Segundo Card (Amarelo) */}
                <Grid item xs={12} md={4}>
                    <Card
                        sx={{
                            backgroundColor: '#FFD700', // Cor de fundo amarela
                            borderRadius: 2,
                            height: '350px', // Altura maior para o segundo card
                            marginTop: '-60px', // Movendo o card para cima
                            boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)', // Sombra inferior
                            transition: 'transform 0.3s, box-shadow 0.3s',
                            '&:hover': {
                                transform: 'scale(1.05)',
                                boxShadow: '0 12px 24px rgba(0, 0, 0, 0.3)', // Sombra mais intensa ao passar o mouse
                            },
                        }}
                    >
                        <CardContent>
                            <Typography variant="h6" sx={{ color: '#000' }}>
                                02. Las mejores prácticas de la industria.
                            </Typography>
                            <Typography variant="body2" sx={{ color: '#000' }}>
                                En Paraná Perforaciones, nos especializamos en la perforación de pozos artesianos, ofreciendo soluciones duraderas y confiables en Ciudad del Este.
                            </Typography>
                            <Button
                                variant="text"
                                sx={{
                                    color: '#000',
                                    textTransform: 'none',
                                    paddingTop: 2,
                                }}
                                href="#"
                            >
                                Aprende más →
                            </Button>
                        </CardContent>
                    </Card>
                </Grid>

                {/* Terceiro Card */}
                <Grid item xs={12} md={4}>
                    <Card
                        sx={{
                            backgroundColor: '#2B2B2B',
                            borderRadius: 2,
                            height: '250px', // Altura padrão para o terceiro card
                            marginTop: '30px', // Margem superior para os cards
                            boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)', // Sombra inferior
                            transition: 'transform 0.3s, box-shadow 0.3s',
                            '&:hover': {
                                transform: 'scale(1.05)',
                                boxShadow: '0 12px 24px rgba(0, 0, 0, 0.3)', // Sombra mais intensa ao passar o mouse
                            },
                        }}
                    >
                        <CardContent>
                            <Typography variant="h6" sx={{ color: '#FFFFFF' }}>
                                03.
                            </Typography>
                            <Typography variant="body1" sx={{ color: '#FFFFFF' }}>
                                Protegido por seguros.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
};

export default MiniBanner;
