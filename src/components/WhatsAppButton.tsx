
import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

const WhatsAppButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
      setShowTooltip(true);
      
      const tooltipTimer = setTimeout(() => {
        setShowTooltip(false);
      }, 5000);
      
      return () => clearTimeout(tooltipTimer);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleWhatsAppClick = () => {
    const message = "Olá! Vim através do site da Emmy Store. Gostaria de mais informações.";
    const whatsappUrl = `https://wa.me/5515991606506?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Tooltip */}
      {showTooltip && (
        <div className="absolute bottom-full right-0 mb-4 bg-white rounded-lg shadow-lg p-4 max-w-xs border-l-4 border-rose-500">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm font-inter font-semibold bg-gradient-to-r from-rose-600 via-rose-500 to-rose-700 bg-clip-text text-transparent mb-1">
                Precisa de ajuda?
              </p>
              <p className="text-xs font-inter text-gray-600">
                Clique aqui para falar conosco via WhatsApp!
              </p>
            </div>
            <button 
              onClick={() => setShowTooltip(false)}
              className="text-gray-400 hover:text-gray-600 ml-2"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
          <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-white"></div>
        </div>
      )}

      {/* WhatsApp Button */}
      <button
        onClick={handleWhatsAppClick}
        className="bg-white p-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
        aria-label="Fale conosco pelo WhatsApp"
      >
        <img 
          src="/lovable-uploads/6ce76677-2d58-45c8-81de-3e13ba1cf2f5.png" 
          alt="WhatsApp"
          className="w-12 h-12"
        />
      </button>
    </div>
  );
};

export default WhatsAppButton;
