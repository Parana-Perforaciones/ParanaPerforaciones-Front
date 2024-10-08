import React from 'react';
import Texto from '../components/Textos/inicio';
import SlideShow from '../components/Slide/index'; 

const About = () => {
  return (
    <div>
      <h1>Sobre</h1>
      <SlideShow />  
      <Texto />
    </div>
  );
};

export default About;
