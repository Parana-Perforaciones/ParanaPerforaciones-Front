import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import About from './paginas/About';
import Budget from './paginas/Budget';
import Contacto from './paginas/Contact';
import Home from './paginas/Home';

const App = () => {
  return (
    <div className="app-container">
      <Router>
        <Navbar />
        
        <div className="content-container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<About />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/presupuesto" element={<Budget />} />
          </Routes>
        </div>
        
        <Footer />
      </Router>
    </div>
  );
};

export default App;
