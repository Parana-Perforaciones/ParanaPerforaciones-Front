import React from 'react';
import Texto from '../components/Textos/inicio';
import SlideShow from '../components/Slide/index';
import WhatsAppButton from '../components/WhatsApp'


const Budget: React.FC = () => {

  return (
    <div>
      <h1>Presupuesto</h1>
      <SlideShow />
      <Texto />
      <WhatsAppButton/> 

    </div>

  );
};

export default Budget;
