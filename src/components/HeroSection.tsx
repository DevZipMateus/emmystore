
import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/graffiti-hero-bg.png'), url('https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=2070&auto=format&fit=crop')",
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-orbitron font-black mb-6 leading-tight">
          <span className="hero-text">VISTA A ATITUDE.</span><br />
          <span className="hero-text">SINTA O PESO DA RUA.</span>
        </h1>
        
        <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto font-inter">
          Coleções autênticas para quem vive o agora. Bem-vindo à URBNSZN.
        </p>

        <button className="group relative overflow-hidden bg-urban-neon text-urban-black px-8 py-4 font-bold text-lg tracking-wide transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-urban-neon/50">
          <span className="relative z-10">VER COLEÇÃO AGORA</span>
          <div className="absolute inset-0 bg-urban-flame transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
        </button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-urban-neon rounded-full flex justify-center">
          <div className="w-1 h-3 bg-urban-neon rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
