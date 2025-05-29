
import React from 'react';
import { Check, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Plans = () => {
  const plans = [
    {
      name: 'Básico',
      price: 'R$ 79',
      period: '/mês',
      description: 'Ideal para quem está começando',
      features: [
        'Acesso à musculação',
        'Horário comercial (6h às 22h)',
        'Avaliação física inicial',
        'Orientação básica de treino'
      ],
      popular: false
    },
    {
      name: 'Premium',
      price: 'R$ 129',
      period: '/mês',
      description: 'O mais popular entre nossos alunos',
      features: [
        'Acesso completo 24h',
        'Todas as modalidades',
        'Personal trainer 2x/semana',
        'Avaliação física mensal',
        'Acompanhamento nutricional',
        'Aulas em grupo ilimitadas'
      ],
      popular: true
    },
    {
      name: 'Elite',
      price: 'R$ 199',
      period: '/mês',
      description: 'Para quem busca o máximo resultado',
      features: [
        'Tudo do plano Premium',
        'Personal trainer ilimitado',
        'Suplementação inclusa',
        'Acesso VIP aos equipamentos',
        'Consultoria nutricional personalizada',
        'Prioridade no agendamento'
      ],
      popular: false
    }
  ];

  return (
    <section id="plans" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Escolha seu <span className="text-green-500">Plano</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Planos flexíveis que se adaptam aos seus objetivos e orçamento. 
            Todos com acesso aos melhores equipamentos de Apodi/RN.
          </p>
        </div>

        {/* Plans Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative bg-gray-800 rounded-2xl p-8 border transition-all duration-300 hover:transform hover:scale-105 ${
                plan.popular 
                  ? 'border-green-500 bg-gradient-to-b from-green-500/10 to-gray-800' 
                  : 'border-gray-700 hover:border-green-500/50'
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-green-500 text-black font-bold px-4 py-2 rounded-full flex items-center">
                    <Star className="h-4 w-4 mr-1" />
                    Mais Popular
                  </div>
                </div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-gray-400 mb-4">{plan.description}</p>
                <div className="flex items-baseline justify-center">
                  <span className="text-4xl font-bold text-green-500">{plan.price}</span>
                  <span className="text-gray-400 ml-1">{plan.period}</span>
                </div>
              </div>

              {/* Features */}
              <div className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <Button 
                className={`w-full py-3 font-semibold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-green-500 hover:bg-green-600 text-black'
                    : 'bg-gray-700 hover:bg-green-500 text-white hover:text-black'
                }`}
              >
                Escolher Plano
              </Button>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="text-center mt-12">
          <p className="text-gray-400 mb-4">
            Todos os planos incluem matrícula gratuita este mês!
          </p>
          <p className="text-sm text-gray-500">
            * Preços válidos para contratos anuais. Consulte condições especiais.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Plans;
