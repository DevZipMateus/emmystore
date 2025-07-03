
import React from 'react';
import { Heart, Star, Users } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-playfair font-bold text-gray-800 mb-6">
              Sobre a <span className="text-[#bd8c90]">Emmy Store</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto font-inter leading-relaxed">
              Uma loja que nasceu do sonho de oferecer produtos de qualidade com atendimento diferenciado, 
              criando uma experiência única para cada cliente.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl md:text-3xl font-playfair font-semibold text-gray-800 mb-6">
                Nossa História
              </h3>
              <p className="text-gray-600 font-inter leading-relaxed mb-6">
                A Emmy Store nasceu com o propósito de ser mais que uma simples loja. 
                Queremos ser um ponto de encontro onde qualidade, confiança e atendimento 
                personalizado se encontram para criar experiências memoráveis.
              </p>
              <p className="text-gray-600 font-inter leading-relaxed">
                Localizada no coração do Jardim das Amoreiras, nossa missão é oferecer 
                produtos cuidadosamente selecionados e um atendimento que supera expectativas, 
                construindo relações duradouras com nossos clientes.
              </p>
            </div>
            
            <div className="grid grid-cols-1 gap-6">
              <div className="bg-gradient-to-br from-[#faf8f8] to-[#f4eff0] p-6 rounded-2xl">
                <div className="flex items-center mb-4">
                  <div className="bg-[#bd8c90] p-3 rounded-full mr-4">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-xl font-playfair font-semibold text-gray-800">
                    Atendimento Personalizado
                  </h4>
                </div>
                <p className="text-gray-600 font-inter">
                  Cada cliente é único, por isso oferecemos um atendimento personalizado 
                  e dedicado às suas necessidades específicas.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-[#faf8f8] to-[#f4eff0] p-6 rounded-2xl">
                <div className="flex items-center mb-4">
                  <div className="bg-[#bd8c90] p-3 rounded-full mr-4">
                    <Star className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-xl font-playfair font-semibold text-gray-800">
                    Qualidade Garantida
                  </h4>
                </div>
                <p className="text-gray-600 font-inter">
                  Selecionamos cuidadosamente cada produto, garantindo qualidade 
                  e procedência para a satisfação completa dos nossos clientes.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-[#faf8f8] to-[#f4eff0] p-6 rounded-2xl">
                <div className="flex items-center mb-4">
                  <div className="bg-[#bd8c90] p-3 rounded-full mr-4">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-xl font-playfair font-semibold text-gray-800">
                    Comunidade Local
                  </h4>
                </div>
                <p className="text-gray-600 font-inter">
                  Fazemos parte da comunidade do Jardim das Amoreiras, contribuindo 
                  para o desenvolvimento e bem-estar da nossa região.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
