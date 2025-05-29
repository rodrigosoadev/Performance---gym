
import React from 'react';
import { Phone, Mail, MessageCircle, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Entre em <span className="text-green-500">Contato</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Pronto para começar sua transformação? Entre em contato conosco 
              e dê o primeiro passo rumo à sua melhor versão.
            </p>

            {/* Contact Methods */}
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="bg-green-500/10 p-3 rounded-lg">
                  <Phone className="h-6 w-6 text-green-500" />
                </div>
                <div>
                  <h3 className="text-white font-semibold">Telefone</h3>
                  <p className="text-gray-300">(84) 99999-9999</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-green-500/10 p-3 rounded-lg">
                  <MessageCircle className="h-6 w-6 text-green-500" />
                </div>
                <div>
                  <h3 className="text-white font-semibold">WhatsApp</h3>
                  <p className="text-gray-300">(84) 99999-9999</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-green-500/10 p-3 rounded-lg">
                  <Mail className="h-6 w-6 text-green-500" />
                </div>
                <div>
                  <h3 className="text-white font-semibold">E-mail</h3>
                  <p className="text-gray-300">contato@performanceapodi.com.br</p>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="mt-8">
              <h3 className="text-white font-semibold mb-4">Siga-nos nas redes</h3>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-green-500/10 rounded-lg flex items-center justify-center hover:bg-green-500/20 transition-colors cursor-pointer">
                  <span className="text-green-500 font-bold">IG</span>
                </div>
                <div className="w-10 h-10 bg-green-500/10 rounded-lg flex items-center justify-center hover:bg-green-500/20 transition-colors cursor-pointer">
                  <span className="text-green-500 font-bold">FB</span>
                </div>
                <div className="w-10 h-10 bg-green-500/10 rounded-lg flex items-center justify-center hover:bg-green-500/20 transition-colors cursor-pointer">
                  <span className="text-green-500 font-bold">YT</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-800 rounded-2xl p-8 border border-green-500/20">
            <h3 className="text-2xl font-bold text-white mb-6">Envie uma Mensagem</h3>
            
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Input 
                    placeholder="Seu nome"
                    className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-green-500"
                  />
                </div>
                <div>
                  <Input 
                    type="email"
                    placeholder="Seu e-mail"
                    className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-green-500"
                  />
                </div>
              </div>
              
              <div>
                <Input 
                  placeholder="Telefone (opcional)"
                  className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-green-500"
                />
              </div>
              
              <div>
                <Textarea 
                  placeholder="Sua mensagem..."
                  rows={4}
                  className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-green-500 resize-none"
                />
              </div>
              
              <Button className="w-full bg-green-500 hover:bg-green-600 text-black font-semibold py-3">
                <Send className="mr-2 h-5 w-5" />
                Enviar Mensagem
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
