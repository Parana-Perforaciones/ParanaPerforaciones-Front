import React from 'react';
import MiniBanner from '../components/MiniBanner/index';
import Timeline from '../components/Linha/index';
import Texto from '../components/Textos/inicio';
import FAQ from '../components/FAQ';
import SlideShow from '../components/Slide/index'; 
import CardPostos from '../components/CardsFotos';

const Inicio = () => {
  return (
    <div>
      <h1>Inicio</h1>
      <SlideShow />  
      <MiniBanner />
      <Texto />
      <Timeline />
      <CardPostos/>
      <FAQ />
    </div>
  );
};

export default Inicio;
