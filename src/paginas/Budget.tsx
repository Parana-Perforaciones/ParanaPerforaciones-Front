import React from 'react';
import Texto from '../components/Textos/inicio';
import SlideShow from '../components/Slide/index';
import WhatsAppButton from '../components/WhatsApp'
import CardPostos from '../components/CardsFotos';

const Budget: React.FC = () => {

  return (
    <div>
      <SlideShow />
      <CardPostos/>
      <Texto />
      <WhatsAppButton/> 
    </div>

  );
};

export default Budget;
