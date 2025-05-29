
import React from 'react';
import { MapPin, Clock, Phone, Navigation } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Location = () => {
  return (
    <section id="location" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Info Section */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Venha nos <span className="text-green-500">Conhecer</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Localizada no coração de Apodi/RN, nossa academia oferece fácil acesso 
              e estacionamento amplo para sua comodidade.
            </p>

            {/* Location Details */}
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-green-500/10 p-3 rounded-lg">
                  <MapPin className="h-6 w-6 text-green-500" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">Endereço</h3>
                  <p className="text-gray-300">
                    Rua da Performance, 123<br />
                    Centro, Apodi/RN<br />
                    CEP: 59700-000
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-green-500/10 p-3 rounded-lg">
                  <Clock className="h-6 w-6 text-green-500" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">Funcionamento</h3>
                  <div className="text-gray-300">
                    <p>Segunda a Sexta: 24 horas</p>
                    <p>Sábado: 6h às 22h</p>
                    <p>Domingo: 8h às 18h</p>
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-green-500/10 p-3 rounded-lg">
                  <Phone className="h-6 w-6 text-green-500" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">Contato</h3>
                  <div className="text-gray-300">
                    <p>(84) 99999-9999</p>
                    <p>contato@performanceapodi.com.br</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Button className="bg-green-500 hover:bg-green-600 text-black font-semibold">
                <Navigation className="mr-2 h-5 w-5" />
                Ver no Google Maps
              </Button>
              <Button variant="outline" className="border-green-500 text-green-500 hover:bg-green-500 hover:text-black">
                Agendar Visita
              </Button>
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="relative">
            <div className="bg-gray-800 rounded-2xl overflow-hidden border border-green-500/20">
              <div className="aspect-[4/3] bg-gradient-to-br from-green-500/20 to-gray-800 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-16 w-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-white text-xl font-semibold mb-2">PERFORMANCE Academia</h3>
                  <p className="text-gray-300">Apodi, Rio Grande do Norte</p>
                </div>
              </div>
            </div>

            {/* Floating Info Card */}
            <div className="absolute bottom-4 left-4 right-4 bg-black/90 backdrop-blur-sm rounded-lg p-4 border border-green-500/30">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-green-500 font-semibold">Distância do centro</p>
                  <p className="text-white">Apenas 2 minutos</p>
                </div>
                <div className="text-right">
                  <p className="text-green-500 font-semibold">Estacionamento</p>
                  <p className="text-white">Gratuito</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
