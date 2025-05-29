
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Modalidades from '@/components/Modalidades';
import Beneficios from '@/components/Beneficios';
import About from '@/components/About';
import Depoimentos from '@/components/Depoimentos';
import Plans from '@/components/Plans';
import Gallery from '@/components/Gallery';
import Location from '@/components/Location';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="pt-16">
        <Hero />
        <Modalidades />
        <Beneficios />
        <About />
        <Depoimentos />
        <Plans />
        <Gallery />
        <Location />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
