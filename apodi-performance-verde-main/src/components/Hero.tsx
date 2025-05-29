
import React, { useState, useEffect } from 'react';
import { ArrowRight, Play, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Carrossel com exatamente 3 imagens - uma para cada modalidade
  const slides = [
    {
      image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
      alt: 'Treinamento de Musculação - Academia Performance',
      categoria: 'musculacao'
    },
    {
      image: 'https://images.unsplash.com/photo-1530549387789-4c1017266635?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
      alt: 'Aulas de Natação - Academia Performance',
      categoria: 'natacao'
    },
    {
      image: 'https://images.unsplash.com/photo-1555597673-b21d5c935865?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
      alt: 'Artes Marciais e Luta - Academia Performance',
      categoria: 'luta'
    }
  ];

  // Auto-play do carrossel com 5 segundos
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide(prev => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide(prev => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Carrossel de Imagens */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div 
            key={index} 
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img 
              src={slide.image} 
              alt={slide.alt} 
              className="w-full h-full object-cover" 
            />
            {/* Overlay escuro mais forte */}
            <div className="absolute inset-0 bg-black/50"></div>
          </div>
        ))}
      </div>

      {/* Controles do Carrossel */}
      <button 
        onClick={prevSlide} 
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-all duration-300"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      
      <button 
        onClick={nextSlide} 
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-all duration-300"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Indicadores */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
        {slides.map((_, index) => (
          <button 
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-white' : 'bg-white/50'
            }`} 
          />
        ))}
      </div>

      <div className="container mx-auto px-4 z-10 relative">
        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in text-center">
          <span className="block">SUA MELHOR</span>
          <span className="text-[#5D9C31] block">PERFORMANCE</span>
          <span className="block">COMEÇA AQUI</span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-white mb-8 max-w-2xl mx-auto animate-fade-in text-center">
          A academia mais completa de Apodi/RN. Equipamentos de última geração, 
          profissionais qualificados e ambiente motivador.
        </p>

        {/* Location Badge */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center bg-[#5D9C31]/20 border border-[#5D9C31]/30 rounded-full px-6 py-2 backdrop-blur-sm">
            <span className="text-white font-semibold">📍 Apodi, Rio Grande do Norte</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in">
          <Button size="lg" className="bg-[#5D9C31] hover:bg-[#4a7d28] text-white font-bold px-8 py-4 text-lg transition-all duration-300 hover:scale-105">
            Matricule-se Online
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          
          <Button variant="outline" size="lg" className="border-white text-white hover:text-[#5D9C31] px-8 py-4 text-lg transition-all duration-300 backdrop-blur-sm bg-zinc-950 hover:bg-zinc-800">
            <Play className="mr-2 h-5 w-5" />
            Agende Aula Experimental
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 mt-16 max-w-2xl mx-auto">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-[#5D9C31] mb-2">500+</div>
            <div className="text-white font-medium">Alunos Ativos</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-[#5D9C31] mb-2">5</div>
            <div className="text-white font-medium">Anos de Experiência</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-[#5D9C31] mb-2">3</div>
            <div className="text-white font-medium">Modalidades</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
