
import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import CalendarioInterativo from '@/components/CalendarioInterativo';
import GradeHorarios from '@/components/GradeHorarios';
import { Button } from '@/components/ui/button';

interface HorarioItem {
  hora: string;
  vagas: number;
  totalVagas: number;
  professor?: string;
  nivel?: string;
}

const Musculacao = () => {
  const [selectedDate, setSelectedDate] = useState<Date>();

  const handleAgendar = (horario: HorarioItem) => {
    console.log('Agendar horário:', horario, 'para data:', selectedDate);
    // Aqui seria implementado o modal de agendamento
  };

  const professores = [
    {
      nome: 'João Silva',
      especializacao: 'Hipertrofia e Força',
      foto: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      avaliacao: 4.8,
      horarios: 'Segunda a Sexta: 6h às 14h'
    },
    {
      nome: 'Maria Santos',
      especializacao: 'Emagrecimento e Condicionamento',
      foto: 'https://images.unsplash.com/photo-1594736797933-d0b22d8fe1d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      avaliacao: 4.9,
      horarios: 'Segunda a Sexta: 14h às 22h'
    },
    {
      nome: 'Pedro Costa',
      especializacao: 'Reabilitação e Funcional',
      foto: 'https://images.unsplash.com/photo-1566753323558-f4e0952af115?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      avaliacao: 4.7,
      horarios: 'Segunda a Sexta: 8h às 16h'
    }
  ];

  const equipamentos = [
    'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="pt-20">
        {/* Breadcrumb */}
        <div className="bg-white border-b">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center space-x-2 text-sm">
              <Link to="/" className="text-gray-600 hover:text-[#5D9C31]">Home</Link>
              <span className="text-gray-400">/</span>
              <span className="text-gray-600">Modalidades</span>
              <span className="text-gray-400">/</span>
              <span className="text-[#5D9C31] font-medium">Musculação</span>
            </div>
          </div>
        </div>

        {/* Hero da Modalidade */}
        <section className="bg-gradient-to-r from-[#5D9C31] to-[#5EBB99] text-white py-16">
          <div className="container mx-auto px-4">
            <Link to="/" className="inline-flex items-center text-white/80 hover:text-white mb-6">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Voltar ao início
            </Link>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6">MUSCULAÇÃO</h1>
            <p className="text-xl md:text-2xl max-w-3xl leading-relaxed">
              Desenvolva força, resistência e massa muscular com nossos equipamentos de última geração 
              e acompanhamento profissional especializado. Treinos personalizados para todos os níveis.
            </p>
          </div>
        </section>

        {/* Galeria de Equipamentos */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Nossos Equipamentos</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {equipamentos.map((foto, index) => (
                <div key={index} className="group overflow-hidden rounded-lg shadow-lg">
                  <img
                    src={foto}
                    alt={`Equipamento ${index + 1}`}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Agenda e Horários */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Agenda e Horários</h2>
            
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Calendário */}
              <div>
                <CalendarioInterativo
                  modalidade="musculacao"
                  onDateSelect={setSelectedDate}
                  selectedDate={selectedDate}
                />
              </div>

              {/* Grade de Horários */}
              <div>
                <GradeHorarios
                  modalidade="musculacao"
                  selectedDate={selectedDate}
                  onAgendar={handleAgendar}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Professores */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Nossos Professores</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {professores.map((professor, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <img
                    src={professor.foto}
                    alt={professor.nome}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{professor.nome}</h3>
                    <p className="text-[#5D9C31] font-medium mb-2">{professor.especializacao}</p>
                    <p className="text-gray-600 text-sm mb-4">{professor.horarios}</p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <span className="text-yellow-500">★</span>
                        <span className="ml-1 font-medium">{professor.avaliacao}</span>
                      </div>
                      <Button className="bg-[#5D9C31] hover:bg-[#4a7d28]">
                        Escolher Professor
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTAs */}
        <section className="py-16 bg-[#5D9C31] text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Pronto para Começar?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Agende sua aula experimental gratuita e descubra como podemos ajudar você a alcançar seus objetivos.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-[#5D9C31] hover:bg-gray-100 px-8 py-4">
                Aula Experimental Grátis
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-[#5D9C31] px-8 py-4">
                Matricular-se Agora
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Musculacao;
