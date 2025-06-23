
import React from 'react';

const FinalCTA = () => {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Video Background Simulation */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2070&auto=format&fit=crop')",
        }}
      >
        <div className="absolute inset-0 bg-urban-black/80"></div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-urban-neon rounded-full animate-pulse"></div>
        <div className="absolute top-1/2 right-1/3 w-1 h-1 bg-urban-flame rounded-full animate-pulse delay-500"></div>
        <div className="absolute bottom-1/3 left-1/2 w-3 h-3 bg-urban-electric rounded-full animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-orbitron font-black text-white mb-8 leading-tight">
          VOCÊ NÃO SEGUE <br />
          <span className="hero-text animate-glow">TENDÊNCIAS.</span><br />
          <span className="text-urban-flame">VOCÊ COMEÇA ELAS.</span>
        </h2>

        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
          Junte-se ao movimento que está redefinindo o streetwear brasileiro. 
          Vista a revolução.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button className="group relative overflow-hidden bg-urban-flame text-white px-12 py-6 font-bold text-xl tracking-wide transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-urban-flame/50">
            <span className="relative z-10">COMPRE AGORA</span>
            <div className="absolute inset-0 bg-urban-neon transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
          </button>

          <button className="group border-2 border-urban-neon text-urban-neon px-12 py-6 font-bold text-xl tracking-wide transition-all duration-300 hover:bg-urban-neon hover:text-urban-black hover:scale-105">
            VER CATÁLOGO
          </button>
        </div>

        <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-8 text-gray-400">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 bg-urban-neon rounded-full"></span>
            <span>Frete grátis acima de R$ 199</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 bg-urban-flame rounded-full"></span>
            <span>Troca grátis em 30 dias</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 bg-urban-electric rounded-full"></span>
            <span>Parcelamento em até 12x</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
