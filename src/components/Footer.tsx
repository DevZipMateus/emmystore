
import React from 'react';
import { Instagram, Facebook, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Logo e Descrição */}
          <div className="md:col-span-1">
            <div className="flex items-center mb-4">
              
            </div>
            <p className="text-gray-300 font-inter leading-relaxed mb-6">
              Sua loja de confiança com os melhores produtos e atendimento personalizado 
              no Jardim das Amoreiras.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/emmy.store15?igsh=MW1xMWZocGI1YXZ2eg==" target="_blank" rel="noopener noreferrer" className="bg-rose-500 p-3 rounded-full text-white hover:bg-rose-600 transition-all duration-300 hover:scale-110" aria-label="Siga-nos no Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              
              <a href="https://www.facebook.com/profile.php?id=61577696875837&mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer" className="bg-blue-500 p-3 rounded-full text-white hover:bg-blue-600 transition-all duration-300 hover:scale-110" aria-label="Siga-nos no Facebook">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="text-lg font-playfair font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2 font-inter">
              <li>
                <button onClick={() => document.querySelector('#inicio')?.scrollIntoView({
                behavior: 'smooth'
              })} className="text-gray-300 hover:text-rose-400 transition-colors duration-300">
                  Início
                </button>
              </li>
              <li>
                <button onClick={() => document.querySelector('#sobre')?.scrollIntoView({
                behavior: 'smooth'
              })} className="text-gray-300 hover:text-rose-400 transition-colors duration-300">
                  Sobre
                </button>
              </li>
              <li>
                <button onClick={() => document.querySelector('#servicos')?.scrollIntoView({
                behavior: 'smooth'
              })} className="text-gray-300 hover:text-rose-400 transition-colors duration-300">
                  Serviços
                </button>
              </li>
              <li>
                <button onClick={() => document.querySelector('#instagram')?.scrollIntoView({
                behavior: 'smooth'
              })} className="text-gray-300 hover:text-rose-400 transition-colors duration-300">
                  Instagram
                </button>
              </li>
              <li>
                <button onClick={() => document.querySelector('#localizacao')?.scrollIntoView({
                behavior: 'smooth'
              })} className="text-gray-300 hover:text-rose-400 transition-colors duration-300">
                  Localização
                </button>
              </li>
              <li>
                <button onClick={() => document.querySelector('#contato')?.scrollIntoView({
                behavior: 'smooth'
              })} className="text-gray-300 hover:text-rose-400 transition-colors duration-300">
                  Contato
                </button>
              </li>
            </ul>
          </div>

          {/* Informações de Contato */}
          <div>
            <h3 className="text-lg font-playfair font-semibold mb-4">Contato</h3>
            <div className="space-y-3 font-inter">
              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-rose-400 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300 text-sm">
                  Rua Andre Ferreira Menk, 341<br />
                  Jardim das Amoreiras
                </span>
              </div>
              
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-rose-400 mr-3 flex-shrink-0" />
                <a href="tel:+5515991606506" className="text-gray-300 hover:text-rose-400 transition-colors duration-300 text-sm">
                  (15) 99160-6506
                </a>
              </div>
              
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-rose-400 mr-3 flex-shrink-0" />
                <a href="mailto:emmy.store15@gmail.com" className="text-gray-300 hover:text-rose-400 transition-colors duration-300 text-sm">
                  emmy.store15@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 font-inter text-sm">
            © {currentYear} Emmy Store. Todos os direitos reservados.
          </p>
          <p className="text-gray-500 font-inter text-xs mt-2 md:mt-0">
            Desenvolvido com ♡ para Emmy Store
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
