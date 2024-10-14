import React from 'react';
import Texto from '../components/Textos/inicio';
import SlideShow from '../components/Slide/index'; 
import Timeline from '../components/Linha/index';

const About = () => {
  return (
    <div>
      <SlideShow />  
      <Texto />
      <Timeline />

    </div>
  );
};

export default About;
