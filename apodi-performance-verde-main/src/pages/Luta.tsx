
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

const Luta = () => {
  const [selectedDate, setSelectedDate] = useState<Date>();

  const handleAgendar = (horario: HorarioItem) => {
    console.log('Agendar horário:', horario, 'para data:', selectedDate);
  };

  const professores = [
    {
      nome: 'Professor Bruno',
      especializacao: 'Muay Thai',
      graduacao: 'Faixa Preta 3º Dan',
      foto: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      avaliacao: 4.9,
      horarios: 'Segunda, Quarta, Sexta: 18h'
    },
    {
      nome: 'Professor Marcos',
      especializacao: 'Jiu-Jitsu',
      graduacao: 'Faixa Roxa',
      foto: 'https://images.unsplash.com/photo-1566753323558-f4e0952af115?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      avaliacao: 4.8,
      horarios: 'Terça, Quinta: 19h'
    },
    {
      nome: 'Professor Diego',
      especializacao: 'Boxe',
      graduacao: 'Campeão Regional',
      foto: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      avaliacao: 4.7,
      horarios: 'Segunda, Quarta: 20h'
    },
    {
      nome: 'Mestre Rafael',
      especializacao: 'Defesa Pessoal',
      graduacao: 'Mestre em Artes Marciais',
      foto: 'https://images.unsplash.com/photo-1566753323558-f4e0952af115?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      avaliacao: 5.0,
      horarios: 'Sábado: 9h'
    }
  ];

  const modalidadesLuta = [
    {
      nome: 'Muay Thai',
      descricao: 'Arte marcial tailandesa que utiliza punhos, cotovelos, joelhos e canelas',
      cor: '#AD4F16'
    },
    {
      nome: 'Jiu-Jitsu',
      descricao: 'Arte suave que foca em técnicas de solo, finalizações e controle',
      cor: '#BC1B18'
    },
    {
      nome: 'Boxe',
      descricao: 'Esporte de combate que utiliza apenas os punhos',
      cor: '#C4972E'
    },
    {
      nome: 'Defesa Pessoal',
      descricao: 'Técnicas práticas para situações de emergência e autodefesa',
      cor: '#5D9C31'
    }
  ];

  const equipamentos = [
    'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1566753323558-f4e0952af115?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
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
              <span className="text-[#5D9C31] font-medium">Luta</span>
            </div>
          </div>
        </div>

        {/* Hero da Modalidade */}
        <section className="bg-gradient-to-r from-[#AD4F16] to-[#BC1B18] text-white py-16">
          <div className="container mx-auto px-4">
            <Link to="/" className="inline-flex items-center text-white/80 hover:text-white mb-6">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Voltar ao início
            </Link>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6">LUTA</h1>
            <p className="text-xl md:text-2xl max-w-3xl leading-relaxed">
              Desenvolva disciplina, autoconfiança e condicionamento físico através das artes marciais. 
              Oferecemos Muay Thai, Jiu-Jitsu, Boxe e Defesa Pessoal para todas as idades.
            </p>
          </div>
        </section>

        {/* Modalidades de Luta */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Modalidades Oferecidas</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {modalidadesLuta.map((modalidade, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-6 border-t-4" style={{ borderTopColor: modalidade.cor }}>
                  <h3 className="text-xl font-bold mb-4" style={{ color: modalidade.cor }}>
                    {modalidade.nome}
                  </h3>
                  <p className="text-gray-600">
                    {modalidade.descricao}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Galeria de Equipamentos */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Tatame e Equipamentos</h2>
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

        {/* Divisão por Idade */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Turmas por Idade</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center bg-[#FAD9EA] rounded-lg p-8">
                <div className="w-16 h-16 bg-[#BC1B18] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">👶</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">Infantil</h3>
                <p className="text-lg text-gray-700">7 a 12 anos</p>
                <p className="mt-2 text-gray-600">Desenvolvimento motor e disciplina</p>
              </div>
              
              <div className="text-center bg-[#CEEEE9] rounded-lg p-8">
                <div className="w-16 h-16 bg-[#5EBB99] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🧑‍🎓</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">Juvenil</h3>
                <p className="text-lg text-gray-700">13 a 17 anos</p>
                <p className="mt-2 text-gray-600">Técnica e condicionamento</p>
              </div>
              
              <div className="text-center bg-[#FED54A]/20 rounded-lg p-8">
                <div className="w-16 h-16 bg-[#C4972E] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💪</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">Adulto</h3>
                <p className="text-lg text-gray-700">18+ anos</p>
                <p className="mt-2 text-gray-600">Performance e competição</p>
              </div>
            </div>
          </div>
        </section>

        {/* Agenda e Horários */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Agenda e Horários</h2>
            
            <div className="grid lg:grid-cols-2 gap-8">
              <div>
                <CalendarioInterativo
                  modalidade="luta"
                  onDateSelect={setSelectedDate}
                  selectedDate={selectedDate}
                />
              </div>

              <div>
                <GradeHorarios
                  modalidade="luta"
                  selectedDate={selectedDate}
                  onAgendar={handleAgendar}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Professores */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Nossos Mestres e Professores</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {professores.map((professor, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <img
                    src={professor.foto}
                    alt={professor.nome}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{professor.nome}</h3>
                    <p className="text-[#AD4F16] font-medium mb-1">{professor.especializacao}</p>
                    <p className="text-gray-600 text-sm mb-2">{professor.graduacao}</p>
                    <p className="text-gray-600 text-xs mb-4">{professor.horarios}</p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <span className="text-yellow-500">★</span>
                        <span className="ml-1 font-medium">{professor.avaliacao}</span>
                      </div>
                      <Button className="bg-[#AD4F16] hover:bg-[#8d4214] text-sm">
                        Escolher
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTAs */}
        <section className="py-16 bg-[#AD4F16] text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Comece sua Jornada nas Artes Marciais!</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Desenvolva disciplina, autoconfiança e forme seu corpo e mente através das artes marciais.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-[#AD4F16] hover:bg-gray-100 px-8 py-4">
                Aula Experimental Grátis
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-[#AD4F16] px-8 py-4">
                Conhecer Professores
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Luta;
