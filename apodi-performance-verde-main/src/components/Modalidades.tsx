
import React from 'react';
import { ArrowRight, Users, Clock, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Modalidades = () => {
  const modalidades = [
    {
      title: 'Musculação',
      description: 'Fortalecimento muscular com equipamentos de última geração e acompanhamento profissional personalizado.',
      image: '🏋️',
      benefits: ['Força e resistência', 'Definição muscular', 'Horários flexíveis'],
      color: 'from-[#5D9C31] to-[#4a7d28]',
      href: '/musculacao'
    },
    {
      title: 'Natação',
      description: 'Exercício completo em piscina aquecida com diferentes níveis e modalidades aquáticas.',
      image: '🏊',
      benefits: ['Exercício completo', 'Baixo impacto', 'Todas as idades'],
      color: 'from-[#5EBB99] to-[#4a9680]',
      href: '/natacao'
    },
    {
      title: 'Luta',
      description: 'Diversas artes marciais para defesa pessoal, condicionamento físico e disciplina mental.',
      image: '🥋',
      benefits: ['Defesa pessoal', 'Disciplina', 'Condicionamento'],
      color: 'from-[#AD4F16] to-[#8a3f12]',
      href: '/luta'
    }
  ];

  return (
    <section id="modalidades" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Nossas <span className="text-[#5D9C31]">Modalidades</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Escolha a modalidade que mais combina com seus objetivos e estilo de vida. 
            Todas com professores qualificados e estrutura completa.
          </p>
        </div>

        {/* Cards das Modalidades */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {modalidades.map((modalidade, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105 group"
            >
              {/* Header do Card */}
              <div className={`h-32 bg-gradient-to-r ${modalidade.color} flex items-center justify-center relative overflow-hidden`}>
                <div className="text-6xl opacity-20 absolute -top-4 -right-4 transform rotate-12">
                  {modalidade.image}
                </div>
                <div className="text-4xl">{modalidade.image}</div>
              </div>
              
              {/* Conteúdo do Card */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{modalidade.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{modalidade.description}</p>
                
                {/* Benefícios */}
                <div className="space-y-2 mb-6">
                  {modalidade.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-[#5D9C31] rounded-full"></div>
                      <span className="text-gray-700 text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>

                {/* Stats rápidas */}
                <div className="grid grid-cols-3 gap-4 mb-6 text-center">
                  <div>
                    <Users className="h-5 w-5 text-[#5D9C31] mx-auto mb-1" />
                    <div className="text-xs text-gray-600">Professores</div>
                  </div>
                  <div>
                    <Clock className="h-5 w-5 text-[#5D9C31] mx-auto mb-1" />
                    <div className="text-xs text-gray-600">Horários</div>
                  </div>
                  <div>
                    <Award className="h-5 w-5 text-[#5D9C31] mx-auto mb-1" />
                    <div className="text-xs text-gray-600">Níveis</div>
                  </div>
                </div>

                {/* CTA */}
                <Button 
                  className="w-full bg-[#5D9C31] hover:bg-[#4a7d28] text-white transition-all duration-300 group-hover:scale-105"
                  onClick={() => window.location.href = modalidade.href}
                >
                  Saiba Mais
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Geral */}
        <div className="text-center">
          <p className="text-gray-600 mb-6">Não sabe qual modalidade escolher?</p>
          <Button 
            size="lg"
            variant="outline" 
            className="border-[#5D9C31] text-[#5D9C31] hover:bg-[#5D9C31] hover:text-white px-8 py-3"
          >
            Agende uma Avaliação Gratuita
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Modalidades;
