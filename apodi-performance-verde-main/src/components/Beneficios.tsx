
import React from 'react';
import { Shield, Clock, Users, Award, Heart, Zap } from 'lucide-react';

const Beneficios = () => {
  const beneficios = [
    {
      icon: Shield,
      title: 'Segurança Total',
      description: 'Protocolos rigorosos de segurança e higiene para seu bem-estar.',
      color: 'text-[#5D9C31]',
      bgColor: 'bg-[#5D9C31]/10'
    },
    {
      icon: Clock,
      title: 'Horários Flexíveis',
      description: 'Funcionamento estendido para se adaptar à sua rotina.',
      color: 'text-[#5EBB99]',
      bgColor: 'bg-[#5EBB99]/10'
    },
    {
      icon: Users,
      title: 'Professores Qualificados',
      description: 'Equipe especializada e certificada para orientação personalizada.',
      color: 'text-[#AD4F16]',
      bgColor: 'bg-[#AD4F16]/10'
    },
    {
      icon: Award,
      title: 'Equipamentos Premium',
      description: 'Aparelhos de última geração das melhores marcas do mercado.',
      color: 'text-[#C4972E]',
      bgColor: 'bg-[#C4972E]/10'
    },
    {
      icon: Heart,
      title: 'Acompanhamento Médico',
      description: 'Avaliação física completa e acompanhamento nutricional.',
      color: 'text-[#BC1B18]',
      bgColor: 'bg-[#BC1B18]/10'
    },
    {
      icon: Zap,
      title: 'Resultados Rápidos',
      description: 'Metodologia comprovada para alcançar seus objetivos eficientemente.',
      color: 'text-[#5D9C31]',
      bgColor: 'bg-[#5D9C31]/10'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Por que escolher a <span className="text-[#5D9C31]">PERFORMANCE</span>?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Somos mais do que uma academia. Somos um centro de transformação onde cada aluno 
            encontra o suporte necessário para superar seus limites.
          </p>
        </div>

        {/* Grid de Benefícios */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {beneficios.map((beneficio, index) => (
            <div 
              key={index}
              className="group p-6 rounded-xl border border-gray-100 hover:border-[#5D9C31]/30 hover:shadow-lg transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 ${beneficio.bgColor} rounded-full mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <beneficio.icon className={`h-8 w-8 ${beneficio.color}`} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{beneficio.title}</h3>
              <p className="text-gray-600 leading-relaxed">{beneficio.description}</p>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 bg-gradient-to-r from-[#5D9C31] to-[#5EBB99] rounded-2xl p-8 text-white">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-[#CEEEE9]">Alunos Satisfeitos</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">15+</div>
              <div className="text-[#CEEEE9]">Professores Especializados</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">1500m²</div>
              <div className="text-[#CEEEE9]">Área Total</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">5</div>
              <div className="text-[#CEEEE9]">Anos de Experiência</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Beneficios;
