
import React from 'react';
import { Target, Users, Award, Clock } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Target,
      title: 'Foco em Resultados',
      description: 'Metodologia comprovada para alcançar seus objetivos de forma eficiente e sustentável.'
    },
    {
      icon: Users,
      title: 'Equipe Especializada',
      description: 'Profissionais certificados e experientes prontos para te orientar em cada etapa.'
    },
    {
      icon: Award,
      title: 'Equipamentos Premium',
      description: 'Aparelhos de última geração das melhores marcas do mercado fitness.'
    },
    {
      icon: Clock,
      title: 'Horário Flexível',
      description: 'Funcionamento 24 horas para se adaptar à sua rotina e estilo de vida.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Por que escolher a <span className="text-green-500">PERFORMANCE</span>?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Somos mais do que uma academia. Somos um centro de transformação onde cada aluno 
            encontra o suporte necessário para superar seus limites e alcançar sua melhor versão.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="text-center p-6 bg-gray-800/50 rounded-xl border border-green-500/20 hover:border-green-500/40 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-500/10 rounded-full mb-4">
                <feature.icon className="h-8 w-8 text-green-500" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* About Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl font-bold text-white mb-6">
              Nossa História em Apodi/RN
            </h3>
            <div className="space-y-4 text-gray-300">
              <p>
                Fundada com o objetivo de revolucionar o fitness em Apodi, a PERFORMANCE nasceu 
                da paixão por transformar vidas através do exercício físico e do bem-estar.
              </p>
              <p>
                Ao longo dos anos, construímos uma reputação sólida baseada em resultados 
                comprovados, atendimento personalizado e um ambiente acolhedor que motiva 
                nossos alunos a superarem seus próprios limites.
              </p>
              <p>
                Hoje, somos referência em qualidade e inovação, oferecendo as melhores 
                condições para que você alcance seus objetivos, seja qual for o seu nível 
                de condicionamento físico.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-green-500/20 to-black/50 rounded-2xl p-8 border border-green-500/30">
              <div className="text-center">
                <div className="text-5xl font-bold text-green-500 mb-4">5+</div>
                <div className="text-xl text-white font-semibold mb-2">Anos Transformando Vidas</div>
                <div className="text-gray-300">em Apodi e região</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
