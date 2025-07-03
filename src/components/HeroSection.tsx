
import React from 'react';
const HeroSection = () => {
  return <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{
    backgroundImage: 'url(/lovable-uploads/ddcf7c62-c8d6-45b2-a429-37a127eead1b.png)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  }}>
      {/* Vinheta circular */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black/60" style={{
      background: 'radial-gradient(circle at center, transparent 0%, transparent 40%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0.7) 100%)'
    }}></div>

      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/20"></div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Logo */}
          <div className="mb-8 relative">
            <div className="relative inline-block">
              
              
              {/* Vinheta circular na imagem */}
              <div className="absolute inset-0 rounded-full pointer-events-none" style={{
              background: 'radial-gradient(circle at center, transparent 30%, transparent 50%, rgba(176, 137, 131, 0.1) 70%, rgba(176, 137, 131, 0.3) 85%, rgba(176, 137, 131, 0.5) 100%)',
              transform: 'scale(1.2)'
            }}></div>
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-playfair font-bold text-white mb-6 leading-tight drop-shadow-lg">
            Bem-vindo à <span className="text-[#bd8c90] font-extrabold">Emmy Store</span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-white mb-8 max-w-2xl mx-auto font-inter leading-relaxed drop-shadow-md">
            Sua loja de confiança com os melhores produtos e atendimento personalizado
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button onClick={() => document.querySelector('#contato')?.scrollIntoView({
            behavior: 'smooth'
          })} className="metallic-button text-white px-8 py-4 rounded-full font-inter font-semibold text-lg shadow-lg">
              Entre em Contato
            </button>
            <button onClick={() => document.querySelector('#sobre')?.scrollIntoView({
            behavior: 'smooth'
          })} className="border-2 border-white text-white px-8 py-4 rounded-full font-inter font-semibold text-lg hover:border-[#bd8c90] hover:text-[#bd8c90] transition-all duration-300 backdrop-blur-sm bg-white/10 hover:bg-white/20">
              Saiba Mais
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        
      </div>
    </section>;
};
export default HeroSection;
