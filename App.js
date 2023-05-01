import React from 'react';

// import animate on scroll
import Aos from 'aos';
import 'aos/dist/aos.css';

// import components
import Hero from './components/Hero';
import About from './components/About';
import Features from './components/Features';
import CtaSection from './components/CtaSection';
import Footer from './components/Footer';
import Process from './components/process';
import Technology from '../src/components/Techonlogy';
import Form from './components/form/form'
import Aboutus from './components/aboutus';
import Features1 from './components/features-content';

const App = () => {
  // animate on scroll initialization
  Aos.init({
    duration: 1800,
    offset: 0,
  });
  return (
    <div className='overflow-hidden'>
       <Aboutus/>           
       <Features1/>      
       <Form/>     
       <Hero />
       <About /> 
      <Features />
      <Technology/>
      <Process/>
      <CtaSection />
      <Footer /> 
    </div>
  );
};

export default App;
