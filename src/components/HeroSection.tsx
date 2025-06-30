
import React from 'react';

const HeroSection = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-rose-50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,_#d1d5db_1px,_transparent_0)] bg-[size:40px_40px]"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Logo */}
          <div className="mb-8">
            <img 
              src="/lovable-uploads/82e2e541-f2e0-4589-83d0-4d68efbd9d96.png" 
              alt="Emmy Store - Sua Loja de Referência" 
              className="h-32 md:h-40 w-auto mx-auto drop-shadow-xl"
            />
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-playfair font-bold text-gray-800 mb-6 leading-tight">
            Bem-vindo à <span className="text-rose-500">Emmy Store</span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto font-inter leading-relaxed">
            Sua loja de confiança com os melhores produtos e atendimento personalizado
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              onClick={() => document.querySelector('#contato')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-rose-500 text-white px-8 py-4 rounded-full font-inter font-semibold text-lg hover:bg-rose-600 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Entre em Contato
            </button>
            <button 
              onClick={() => document.querySelector('#sobre')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full font-inter font-semibold text-lg hover:border-rose-500 hover:text-rose-500 transition-all duration-300"
            >
              Saiba Mais
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
