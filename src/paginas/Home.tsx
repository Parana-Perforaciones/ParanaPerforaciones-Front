import React from 'react';
import MiniBanner from '../components/MiniBanner/index';
import Texto from '../components/Textos/inicio';
import FAQ from '../components/FAQ';
import SlideShow from '../components/Slide/index'; 

const Inicio = () => {
  return (
    <div>
      <SlideShow />  
      <MiniBanner />
      <Texto />
      <FAQ />
    </div>
  );
};

export default Inicio;
