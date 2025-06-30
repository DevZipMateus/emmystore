
import React from 'react';

const HeroSection = () => {
  return (
    <section 
      id="inicio" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: 'url(/lovable-uploads/ddcf7c62-c8d6-45b2-a429-37a127eead1b.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/30"></div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Logo */}
          <div className="mb-8">
            <img src="/lovable-uploads/82e2e541-f2e0-4589-83d0-4d68efbd9d96.png" alt="Emmy Store - Sua Loja de Referência" className="h-32 md:h-40 w-auto mx-auto drop-shadow-xl" />
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-playfair font-bold text-white mb-6 leading-tight drop-shadow-lg">
            Bem-vindo à <span className="text-rose-300">Emmy Store</span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-white mb-8 max-w-2xl mx-auto font-inter leading-relaxed drop-shadow-md">
            Sua loja de confiança com os melhores produtos e atendimento personalizado
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button onClick={() => document.querySelector('#contato')?.scrollIntoView({
            behavior: 'smooth'
          })} className="bg-rose-500 text-white px-8 py-4 rounded-full font-inter font-semibold text-lg hover:bg-rose-600 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
              Entre em Contato
            </button>
            <button onClick={() => document.querySelector('#sobre')?.scrollIntoView({
            behavior: 'smooth'
          })} className="border-2 border-white text-white px-8 py-4 rounded-full font-inter font-semibold text-lg hover:border-rose-300 hover:text-rose-300 transition-all duration-300 backdrop-blur-sm bg-white/10">
              Saiba Mais
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        
      </div>
    </section>
  );
};

export default HeroSection;
