
import React from 'react';
import { ArrowRight } from 'lucide-react';

const Gallery = () => {
  const images = [
    {
      title: 'Área de Musculação',
      description: 'Equipamentos de última geração'
    },
    {
      title: 'Estúdio de Aulas',
      description: 'Espaço amplo para atividades em grupo'
    },
    {
      title: 'Área Cardio',
      description: 'Esteiras e bikes modernas'
    },
    {
      title: 'Vestiários',
      description: 'Conforto e higiene garantidos'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Conheça nossas <span className="text-green-500">Instalações</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Ambientes modernos e equipados para proporcionar a melhor experiência 
            de treino em Apodi/RN.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {images.map((image, index) => (
            <div 
              key={index}
              className="group relative bg-gray-800 rounded-xl overflow-hidden border border-green-500/20 hover:border-green-500/40 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="aspect-[4/3] bg-gradient-to-br from-green-500/20 to-gray-800 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="w-8 h-8 bg-green-500 rounded-sm"></div>
                  </div>
                  <h3 className="text-white font-semibold text-lg">{image.title}</h3>
                </div>
              </div>
              
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-center text-white">
                  <h3 className="font-bold text-lg mb-2">{image.title}</h3>
                  <p className="text-gray-300">{image.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="inline-flex items-center space-x-2 text-green-500 hover:text-green-400 transition-colors cursor-pointer">
            <span className="font-semibold">Ver mais fotos</span>
            <ArrowRight className="h-5 w-5" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
