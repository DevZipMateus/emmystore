import React from 'react';
import { ShoppingBag, Truck, CreditCard, Clock } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: ShoppingBag,
      title: 'Produtos Selecionados',
      description: 'Curadoria especial com produtos de alta qualidade e procedência garantida.',
      color: 'rose'
    },
    {
      icon: Truck,
      title: 'Entrega Rápida',
      description: 'Entrega ágil e segura para toda a região, com rastreamento completo.',
      color: 'blue'
    },
    {
      icon: CreditCard,
      title: 'Pagamento Facilitado',
      description: 'Diversas formas de pagamento para sua comodidade e conveniência.',
      color: 'gray'
    },
    {
      icon: Clock,
      title: 'Atendimento Flexível',
      description: 'Horários flexíveis e atendimento personalizado para melhor te servir.',
      color: 'rose'
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'rose':
        return {
          bg: 'bg-rose-500',
          gradient: 'from-rose-50 to-rose-100',
          hover: 'hover:shadow-rose-200'
        };
      case 'blue':
        return {
          bg: 'bg-blue-500',
          gradient: 'from-blue-50 to-indigo-50',
          hover: 'hover:shadow-blue-200'
        };
      default:
        return {
          bg: 'bg-gray-600',
          gradient: 'from-gray-50 to-slate-50',
          hover: 'hover:shadow-gray-200'
        };
    }
  };

  return (
    <section id="servicos" className="py-20 bg-gradient-to-br from-gray-50 to-rose-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-playfair font-bold text-gray-800 mb-6">
              Nossos <span className="text-rose-500">Serviços</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto font-inter leading-relaxed">
              Oferecemos uma experiência completa de compra, desde a seleção dos produtos 
              até a entrega na sua casa, sempre com o melhor atendimento.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => {
              const colors = getColorClasses(service.color);
              return (
                <div 
                  key={index}
                  className={`bg-gradient-to-br ${colors.gradient} p-8 rounded-2xl shadow-lg ${colors.hover} hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center`}
                >
                  <div className={`${colors.bg} p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-playfair font-semibold text-gray-800 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 font-inter leading-relaxed">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <button 
              onClick={() => document.querySelector('#contato')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-rose-500 text-white px-8 py-4 rounded-full font-inter font-semibold text-lg hover:bg-rose-600 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Saiba Mais Sobre Nossos Serviços
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
