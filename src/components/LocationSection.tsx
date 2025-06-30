
import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const LocationSection = () => {
  return (
    <section id="localizacao" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-playfair font-bold text-gray-800 mb-6">
              Nossa <span className="text-rose-500">Localização</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto font-inter leading-relaxed">
              Visite-nos no Jardim das Amoreiras. Estamos sempre prontos para recebê-lo 
              com o melhor atendimento e produtos de qualidade.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Informações de Contato */}
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-rose-50 to-pink-50 p-8 rounded-2xl">
                <h3 className="text-2xl font-playfair font-semibold text-gray-800 mb-6">
                  Informações de Contato
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-rose-500 p-3 rounded-full mr-4 flex-shrink-0">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-inter font-semibold text-gray-800 mb-1">Endereço</h4>
                      <p className="text-gray-600 font-inter">
                        Rua Andre Ferreira Menk, 341<br />
                        Jardim das Amoreiras
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-blue-500 p-3 rounded-full mr-4 flex-shrink-0">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-inter font-semibold text-gray-800 mb-1">Telefone</h4>
                      <p className="text-gray-600 font-inter">(15) 99160-6506</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-gray-600 p-3 rounded-full mr-4 flex-shrink-0">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-inter font-semibold text-gray-800 mb-1">E-mail</h4>
                      <p className="text-gray-600 font-inter">emmy.store15@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-rose-500 p-3 rounded-full mr-4 flex-shrink-0">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-inter font-semibold text-gray-800 mb-1">Horário de Funcionamento</h4>
                      <p className="text-gray-600 font-inter">
                        Segunda a Sexta: 9h às 18h<br />
                        Sábado: 9h às 16h<br />
                        Domingo: Fechado
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <a
                  href="https://www.google.com/maps/place/Jardim+das+Amoreiras/@-23.4828946,-48.4231147,16.75z/data=!4m6!3m5!1s0x94c41fe3ffffffff:0x13608cde92bdbbb2!8m2!3d-23.4830324!4d-48.4201297!16s%2Fg%2F11dfjx30h7?entry=ttu&g_ep=EgoyMDI1MDYyMi4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-blue-500 text-white px-8 py-4 rounded-full font-inter font-semibold text-lg hover:bg-blue-600 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Ver no Google Maps
                </a>
              </div>
            </div>

            {/* Mapa */}
            <div className="bg-gray-100 rounded-2xl overflow-hidden shadow-lg h-96 lg:h-[500px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.7825842!2d-48.4231147!3d-23.4828946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c41fe3ffffffff%3A0x13608cde92bdbbb2!2sJardim%20das%20Amoreiras!5e0!3m2!1spt!2sbr!4v1703123456789!5m2!1spt!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização da Emmy Store - Jardim das Amoreiras"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
