
import React from 'react';
import { Star, Quote } from 'lucide-react';

const Depoimentos = () => {
  const depoimentos = [
    {
      nome: 'Maria Silva',
      idade: '32 anos',
      modalidade: 'Musculação',
      foto: '👩‍💼',
      avaliacao: 5,
      texto: 'A PERFORMANCE transformou minha vida! Em 6 meses consegui os resultados que sempre busquei. Os professores são incríveis e a estrutura é top!'
    },
    {
      nome: 'João Santos',
      idade: '28 anos',
      modalidade: 'Natação',
      foto: '👨‍💻',
      avaliacao: 5,
      texto: 'Nunca imaginei que natação pudesse ser tão prazerosa. A piscina é aquecida e os horários são super flexíveis. Recomendo muito!'
    },
    {
      nome: 'Ana Costa',
      idade: '25 anos',
      modalidade: 'Luta',
      foto: '👩‍🎓',
      avaliacao: 5,
      texto: 'As aulas de luta me deram muito mais confiança e condicionamento físico. O ambiente é acolhedor e motivador!'
    },
    {
      nome: 'Carlos Oliveira',
      idade: '35 anos',
      modalidade: 'Musculação',
      foto: '👨‍⚕️',
      avaliacao: 5,
      texto: 'Depois dos 30, pensei que seria difícil voltar à forma. A equipe da PERFORMANCE me provou o contrário. Estou mais forte que nunca!'
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star 
        key={i}
        className={`h-4 w-4 ${i < rating ? 'text-[#FED54A] fill-current' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <section className="py-20 bg-gradient-to-br from-[#CEEEE9]/20 to-[#FAD9EA]/20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            O que nossos <span className="text-[#5D9C31]">alunos</span> dizem
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Histórias reais de transformação e conquistas dos nossos alunos na PERFORMANCE.
          </p>
        </div>

        {/* Grid de Depoimentos */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {depoimentos.map((depoimento, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105 relative"
            >
              {/* Quote Icon */}
              <Quote className="absolute top-4 right-4 h-8 w-8 text-[#5D9C31]/20" />
              
              {/* Header do Depoimento */}
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-[#5D9C31] to-[#5EBB99] rounded-full flex items-center justify-center text-2xl">
                  {depoimento.foto}
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-gray-900">{depoimento.nome}</h4>
                  <p className="text-sm text-gray-600">{depoimento.idade} • {depoimento.modalidade}</p>
                </div>
              </div>

              {/* Avaliação */}
              <div className="flex items-center space-x-1 mb-4">
                {renderStars(depoimento.avaliacao)}
              </div>

              {/* Texto do Depoimento */}
              <p className="text-gray-700 leading-relaxed italic">
                "{depoimento.texto}"
              </p>

              {/* Badge da Modalidade */}
              <div className="mt-4">
                <span className="inline-block bg-[#5D9C31]/10 text-[#5D9C31] px-3 py-1 rounded-full text-sm font-medium">
                  {depoimento.modalidade}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Pronto para escrever sua história de sucesso?
          </h3>
          <p className="text-gray-600 mb-6">
            Junte-se aos nossos alunos e descubra seu potencial na PERFORMANCE
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-[#5D9C31] hover:bg-[#4a7d28] text-white px-8 py-3 rounded-lg font-medium transition-colors">
              Matricule-se Agora
            </button>
            <button className="border border-[#5D9C31] text-[#5D9C31] hover:bg-[#5D9C31] hover:text-white px-8 py-3 rounded-lg font-medium transition-colors">
              Agende uma Visita
            </button>
          </div>
        </div>

        {/* Indicadores de confiança */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-[#5D9C31] mb-2">4.9/5</div>
            <div className="text-gray-600 text-sm">Avaliação Média</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-[#5D9C31] mb-2">98%</div>
            <div className="text-gray-600 text-sm">Taxa de Satisfação</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-[#5D9C31] mb-2">500+</div>
            <div className="text-gray-600 text-sm">Avaliações Positivas</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-[#5D9C31] mb-2">90%</div>
            <div className="text-gray-600 text-sm">Renovam Matrícula</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Depoimentos;
