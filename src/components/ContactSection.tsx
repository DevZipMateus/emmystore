import React, { useState } from 'react';
import { Send, Instagram, Facebook } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Criar mensagem para WhatsApp
    const message = `Olá! Meu nome é ${formData.name}.%0A%0A${formData.message}%0A%0AContato: ${formData.phone}%0AE-mail: ${formData.email}`;
    const whatsappUrl = `https://wa.me/5515991606506?text=${message}`;
    
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="contato" className="py-20 bg-gradient-to-br from-gray-50 to-rose-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-playfair font-bold text-gray-800 mb-6">
              Entre em <span className="text-rose-500">Contato</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto font-inter leading-relaxed">
              Estamos sempre prontos para atendê-lo. Entre em contato conosco e 
              tire suas dúvidas ou faça seu pedido.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Formulário de Contato */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-playfair font-semibold text-gray-800 mb-6">
                Envie sua Mensagem
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-inter font-semibold text-gray-700 mb-2">
                    Nome Completo
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all duration-300 font-inter"
                    placeholder="Seu nome completo"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-inter font-semibold text-gray-700 mb-2">
                      E-mail
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all duration-300 font-inter"
                      placeholder="seu@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-inter font-semibold text-gray-700 mb-2">
                      Telefone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all duration-300 font-inter"
                      placeholder="(00) 00000-0000"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-inter font-semibold text-gray-700 mb-2">
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all duration-300 font-inter resize-vertical"
                    placeholder="Como podemos ajudá-lo?"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-rose-500 text-white px-8 py-4 rounded-lg font-inter font-semibold text-lg hover:bg-rose-600 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center"
                >
                  <img 
                    src="/lovable-uploads/6ce76677-2d58-45c8-81de-3e13ba1cf2f5.png" 
                    alt="WhatsApp"
                    className="w-5 h-5 mr-2"
                  />
                  Enviar via WhatsApp
                </button>
              </form>
            </div>

            {/* Informações Adicionais */}
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-playfair font-semibold text-gray-800 mb-6">
                  Outras Formas de Contato
                </h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="font-inter font-semibold text-gray-800 mb-2 flex items-center">
                      <img 
                        src="/lovable-uploads/6ce76677-2d58-45c8-81de-3e13ba1cf2f5.png" 
                        alt="WhatsApp"
                        className="w-5 h-5 mr-2"
                      />
                      WhatsApp
                    </h4>
                    <a 
                      href="https://wa.me/5515991606506"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-rose-500 hover:text-rose-600 font-inter transition-colors duration-300"
                    >
                      (15) 99160-6506
                    </a>
                  </div>

                  <div>
                    <h4 className="font-inter font-semibold text-gray-800 mb-2">E-mail</h4>
                    <a 
                      href="mailto:emmy.store15@gmail.com"
                      className="text-rose-500 hover:text-rose-600 font-inter transition-colors duration-300"
                    >
                      emmy.store15@gmail.com
                    </a>
                  </div>

                  <div>
                    <h4 className="font-inter font-semibold text-gray-800 mb-4">Redes Sociais</h4>
                    <div className="flex space-x-4">
                      <a
                        href="https://www.instagram.com/emmy.store15?igsh=MW1xMWZocGI1YXZ2eg=="
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-rose-500 p-3 rounded-full text-white hover:bg-rose-600 transition-all duration-300 hover:scale-110"
                      >
                        <Instagram className="w-6 h-6" />
                      </a>
                      
                      <a
                        href="https://www.facebook.com/profile.php?id=61577696875837&mibextid=ZbWKwL"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-blue-500 p-3 rounded-full text-white hover:bg-blue-600 transition-all duration-300 hover:scale-110"
                      >
                        <Facebook className="w-6 h-6" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-rose-50 to-pink-50 p-8 rounded-2xl">
                <h3 className="text-2xl font-playfair font-semibold text-gray-800 mb-4">
                  Horário de Atendimento
                </h3>
                <div className="space-y-2 font-inter text-gray-600">
                  <p><strong>Segunda a Sexta:</strong> 9h às 18h</p>
                  <p><strong>Sábado:</strong> 9h às 16h</p>
                  <p><strong>Domingo:</strong> Fechado</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
