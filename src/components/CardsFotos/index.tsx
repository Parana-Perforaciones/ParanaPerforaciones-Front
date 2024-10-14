import React from 'react';
import { Card, CardContent, Typography, Box, Grid } from '@mui/material';

// Definindo as propriedades do Card
interface CardPostoProps {
    image: string;
    title: string;
    description: string;
}

const CardPosto: React.FC<CardPostoProps> = ({ image, title, description }) => {
    return (
        <Grid
            item
            xs={12} // Para celular, ocupa toda a largura (100%)
            sm={4} // Para tablets, ocupa metade da largura (50%)
            md={4} // Para tamanhos maiores que tablet, ocupa 1/4 da largura (25%)
            lg={3} // Para desktops grandes, ocupa 1/3 da largura (33%)
            sx={{ position: 'relative', marginBottom: '40px' }}
        >
            <Box
                sx={{
                    backgroundImage: `url(${image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height: '250px',
                    width: '100%',
                    borderRadius: '16px',
                    position: 'relative',
                    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
                }}
            />

            {/* Card da frente (Texto) */}
            <Card
                sx={{
                    position: 'absolute',
                    top: '90%', // Ajustando a posição para melhorar a sobreposição
                    left: '50%',
                    transform: 'translate(-50%, -40%)',
                    width: '80%',
                    backgroundColor: '#fff',
                    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3)', // Sombra mais pronunciada
                    borderRadius: '16px',
                }}
            >
                <CardContent>
                    <Typography variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
                        {title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {description}
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
    );
};

// Componente que renderiza vários cards
const CardPostos: React.FC = () => {
    const cardsData = [
        {
            image: 'https://via.placeholder.com/400x300',
            title: 'Perfuração de Poços',
            description: 'Oferecemos serviços de perfuração de poços artesianos em todo o Paraguai, com qualidade e eficiência.',
        },
        {
            image: 'https://via.placeholder.com/400x300',
            title: 'Manutenção de Poços',
            description: 'Serviços de manutenção para garantir a durabilidade e a eficiência de seu poço artesiano.',
        },
        {
            image: 'https://via.placeholder.com/400x300',
            title: 'Manutenção de Poços',
            description: 'Serviços de manutenção para garantir a durabilidade e a eficiência de seu poço artesiano.',
        },

    ];

    return (
        <Grid container spacing={6} justifyContent="center">
            {cardsData.map((card, index) => (
                <CardPosto
                    key={index}
                    image={card.image}
                    title={card.title}
                    description={card.description}
                />
            ))}
        </Grid>
    );
};

export default CardPostos;
