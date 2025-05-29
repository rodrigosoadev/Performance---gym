
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface CalendarioProps {
  modalidade: 'musculacao' | 'natacao' | 'luta';
  onDateSelect: (date: Date) => void;
  selectedDate?: Date;
}

const CalendarioInterativo = ({ modalidade, onDateSelect, selectedDate }: CalendarioProps) => {
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const diasSemana = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];
  const meses = [
    'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
    'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
  ];

  // Função para obter status FIXO do dia (sem aleatoriedade)
  const getStatusDia = (date: Date) => {
    const dayOfWeek = date.getDay();
    const dayOfMonth = date.getDate();
    
    switch (modalidade) {
      case 'musculacao':
        // Musculação: status baseado no dia do mês (consistente)
        const modulo = dayOfMonth % 10;
        if (modulo <= 2) return 'lotado';
        if (modulo <= 5) return 'limitado';
        return 'disponivel';
        
      case 'natacao':
        // Natação: apenas segunda a sexta
        if (dayOfWeek === 0 || dayOfWeek === 6) {
          return 'indisponivel';
        }
        // Status baseado no dia do mês para consistência
        const moduloNat = dayOfMonth % 8;
        if (moduloNat <= 1) return 'lotado';
        if (moduloNat <= 3) return 'limitado';
        return 'disponivel';
        
      case 'luta':
        // Luta: sábado especial para defesa pessoal
        if (dayOfWeek === 6) {
          return 'especial';
        }
        // Domingo indisponível
        if (dayOfWeek === 0) {
          return 'indisponivel';
        }
        // Status baseado no dia do mês
        const moduloLuta = dayOfMonth % 7;
        if (moduloLuta <= 1) return 'lotado';
        if (moduloLuta <= 3) return 'limitado';
        return 'disponivel';
        
      default:
        return 'disponivel';
    }
  };

  const getCorStatus = (status: string) => {
    switch (status) {
      case 'disponivel':
        return 'bg-[#5D9C31] text-white hover:bg-[#4a7d28]';
      case 'limitado':
        return 'bg-[#FED54A] text-black hover:bg-[#fed843]';
      case 'lotado':
        return 'bg-[#BC1B18] text-white hover:bg-[#a01713]';
      case 'especial':
        return 'bg-[#5EBB99] text-white hover:bg-[#4da88a]';
      case 'indisponivel':
        return 'bg-[#8DADAD] text-gray-600 cursor-not-allowed';
      default:
        return 'bg-gray-100 text-gray-500';
    }
  };

  const gerarCalendario = () => {
    const ano = currentMonth.getFullYear();
    const mes = currentMonth.getMonth();
    const primeiroDia = new Date(ano, mes, 1);
    const ultimoDia = new Date(ano, mes + 1, 0);
    const primeiroDiaSemana = primeiroDia.getDay();
    
    const dias = [];
    
    // Dias vazios do início
    for (let i = 0; i < primeiroDiaSemana; i++) {
      dias.push(null);
    }
    
    // Dias do mês
    for (let dia = 1; dia <= ultimoDia.getDate(); dia++) {
      const date = new Date(ano, mes, dia);
      const hoje = new Date();
      hoje.setHours(0, 0, 0, 0);
      const isPast = date.getTime() < hoje.getTime();
      
      if (isPast) {
        dias.push({ date, status: 'passado' });
      } else {
        dias.push({ date, status: getStatusDia(date) });
      }
    }
    
    return dias;
  };

  // LIMITAÇÃO: Só permitir navegação no mês atual
  const navegarMes = (direcao: number) => {
    const novoMes = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + direcao, 1);
    const hoje = new Date();
    const mesAtual = new Date(hoje.getFullYear(), hoje.getMonth(), 1);
    
    // Só permite navegar se for o mês atual ou anterior
    if (direcao > 0) {
      // Tentando ir para o futuro - bloquear
      if (novoMes.getTime() > mesAtual.getTime()) {
        console.log('Agendamentos limitados ao mês atual');
        return;
      }
    }
    
    setCurrentMonth(novoMes);
  };

  // Verificar se pode navegar para o próximo mês
  const podeAvancarMes = () => {
    const proximoMes = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1);
    const hoje = new Date();
    const mesAtual = new Date(hoje.getFullYear(), hoje.getMonth(), 1);
    return proximoMes.getTime() <= mesAtual.getTime();
  };

  const isSelected = (date: Date) => {
    return selectedDate && 
           date.getDate() === selectedDate.getDate() &&
           date.getMonth() === selectedDate.getMonth() &&
           date.getFullYear() === selectedDate.getFullYear();
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      {/* Header do calendário */}
      <div className="flex items-center justify-between mb-4">
        <Button
          variant="outline"
          size="icon"
          onClick={() => navegarMes(-1)}
          className="h-8 w-8"
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        
        <h3 className="text-lg font-semibold">
          {meses[currentMonth.getMonth()]} {currentMonth.getFullYear()}
        </h3>
        
        <Button
          variant="outline"
          size="icon"
          onClick={() => navegarMes(1)}
          disabled={!podeAvancarMes()}
          className={`h-8 w-8 ${!podeAvancarMes() ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>

      {/* Aviso de limitação */}
      {!podeAvancarMes() && (
        <div className="mb-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
          <p className="text-sm text-blue-800">
            📅 Agendamentos disponíveis apenas para o mês atual
          </p>
        </div>
      )}

      {/* Dias da semana */}
      <div className="grid grid-cols-7 gap-1 mb-2">
        {diasSemana.map((dia) => (
          <div key={dia} className="text-center text-sm font-medium text-gray-600 p-2">
            {dia}
          </div>
        ))}
      </div>

      {/* Grid do calendário */}
      <div className="grid grid-cols-7 gap-1">
        {gerarCalendario().map((item, index) => (
          <div key={index} className="aspect-square">
            {item && (
              <button
                onClick={() => {
                  if (item.status !== 'indisponivel' && item.status !== 'passado') {
                    onDateSelect(item.date);
                  }
                }}
                disabled={item.status === 'indisponivel' || item.status === 'passado'}
                className={`
                  w-full h-full rounded-lg text-sm font-medium transition-all duration-200
                  ${getCorStatus(item.status)}
                  ${isSelected(item.date) ? 'ring-2 ring-[#5D9C31] ring-offset-2' : ''}
                  ${item.status === 'passado' ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : ''}
                `}
              >
                {item.date.getDate()}
              </button>
            )}
          </div>
        ))}
      </div>

      {/* Legenda */}
      <div className="mt-4 grid grid-cols-2 md:grid-cols-3 gap-2 text-xs">
        <div className="flex items-center">
          <div className="w-3 h-3 bg-[#5D9C31] rounded mr-2"></div>
          <span>Disponível</span>
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 bg-[#FED54A] rounded mr-2"></div>
          <span>Vagas limitadas</span>
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 bg-[#BC1B18] rounded mr-2"></div>
          <span>Lotado</span>
        </div>
        {(modalidade === 'natacao' || modalidade === 'luta') && (
          <div className="flex items-center">
            <div className="w-3 h-3 bg-[#8DADAD] rounded mr-2"></div>
            <span>Indisponível</span>
          </div>
        )}
        {modalidade === 'luta' && (
          <div className="flex items-center">
            <div className="w-3 h-3 bg-[#5EBB99] rounded mr-2"></div>
            <span>Especial (Sáb)</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default CalendarioInterativo;
