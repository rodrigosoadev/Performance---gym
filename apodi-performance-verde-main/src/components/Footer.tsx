
import React from 'react';
import { Dumbbell, MapPin, Phone, Mail, Clock, Instagram, Facebook, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Dumbbell className="h-8 w-8 text-[#5D9C31]" />
              <span className="text-2xl font-bold">
                <span className="text-[#5D9C31]">P</span>
                <span className="text-white">ERFORMANCE</span>
              </span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              A academia mais completa de Apodi/RN. Transformando vidas através 
              do exercício físico e do bem-estar há mais de 5 anos.
            </p>
            
            {/* Modalidades */}
            <div className="mb-6">
              <h4 className="font-semibold text-white mb-3">Nossas Modalidades</h4>
              <div className="flex flex-wrap gap-2">
                <span className="bg-[#5D9C31]/20 text-[#5D9C31] px-3 py-1 rounded-full text-sm">Musculação</span>
                <span className="bg-[#5EBB99]/20 text-[#5EBB99] px-3 py-1 rounded-full text-sm">Natação</span>
                <span className="bg-[#AD4F16]/20 text-[#AD4F16] px-3 py-1 rounded-full text-sm">Luta</span>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-[#5D9C31]/20 rounded-lg flex items-center justify-center hover:bg-[#5D9C31]/30 transition-colors cursor-pointer">
                <Instagram className="h-5 w-5 text-[#5D9C31]" />
              </div>
              <div className="w-10 h-10 bg-[#5D9C31]/20 rounded-lg flex items-center justify-center hover:bg-[#5D9C31]/30 transition-colors cursor-pointer">
                <Facebook className="h-5 w-5 text-[#5D9C31]" />
              </div>
              <div className="w-10 h-10 bg-[#5D9C31]/20 rounded-lg flex items-center justify-center hover:bg-[#5D9C31]/30 transition-colors cursor-pointer">
                <Youtube className="h-5 w-5 text-[#5D9C31]" />
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              {[
                { label: 'Home', href: '#home' },
                { label: 'Modalidades', href: '#modalidades' },
                { label: 'Sobre Nós', href: '#about' },
                { label: 'Depoimentos', href: '#depoimentos' },
                { label: 'Contato', href: '#contact' },
                { label: 'Área do Aluno', href: '/login' }
              ].map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="text-gray-400 hover:text-[#5D9C31] transition-colors">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contato</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-[#5D9C31] mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-400 text-sm">Rua da Performance, 123</p>
                  <p className="text-gray-400 text-sm">Centro, Apodi/RN</p>
                  <p className="text-gray-400 text-sm">CEP: 59700-000</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-[#5D9C31] flex-shrink-0" />
                <span className="text-gray-400 text-sm">(84) 99999-9999</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-[#5D9C31] flex-shrink-0" />
                <span className="text-gray-400 text-sm">contato@performanceapodi.com.br</span>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="h-5 w-5 text-[#5D9C31] mt-0.5 flex-shrink-0" />
                <div className="text-gray-400 text-sm">
                  <p>Seg-Sex: 5h-23h</p>
                  <p>Sáb: 6h-22h</p>
                  <p>Dom: 8h-18h</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="bg-gradient-to-r from-[#5D9C31] to-[#5EBB99] rounded-lg p-6 text-center">
            <h3 className="text-xl font-bold text-white mb-2">Pronto para começar sua jornada?</h3>
            <p className="text-[#CEEEE9] mb-4">Matricule-se online e ganhe desconto na primeira mensalidade!</p>
            <button className="bg-white text-[#5D9C31] px-6 py-2 rounded-lg font-bold hover:bg-gray-100 transition-colors">
              Matricular-se Online
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 PERFORMANCE Academia. Todos os direitos reservados.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="/politica-privacidade" className="text-gray-400 hover:text-[#5D9C31] text-sm transition-colors">
              Política de Privacidade
            </a>
            <a href="/termos-uso" className="text-gray-400 hover:text-[#5D9C31] text-sm transition-colors">
              Termos de Uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
