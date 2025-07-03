
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (id: string) => {
    document.querySelector(`#${id}`)?.scrollIntoView({
      behavior: 'smooth'
    });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm transition-all duration-300">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/82e2e541-f2e0-4589-83d0-4d68efbd9d96.png" 
              alt="Emmy Store Logo" 
              className="h-10 w-auto"
            />
            <span className="ml-3 text-xl font-playfair font-bold text-gray-800">Emmy Store</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('inicio')} className="text-gray-600 hover:text-rose-500 transition-colors duration-300 font-inter">
              Início
            </button>
            <button onClick={() => scrollToSection('sobre')} className="text-gray-600 hover:text-rose-500 transition-colors duration-300 font-inter">
              Sobre
            </button>
            <button onClick={() => scrollToSection('servicos')} className="text-gray-600 hover:text-rose-500 transition-colors duration-300 font-inter">
              Serviços
            </button>
            <button onClick={() => scrollToSection('produtos')} className="text-gray-600 hover:text-rose-500 transition-colors duration-300 font-inter">
              Produtos
            </button>
            <button onClick={() => scrollToSection('instagram')} className="text-gray-600 hover:text-rose-500 transition-colors duration-300 font-inter">
              Instagram
            </button>
            <button onClick={() => scrollToSection('localizacao')} className="text-gray-600 hover:text-rose-500 transition-colors duration-300 font-inter">
              Localização
            </button>
            <button onClick={() => scrollToSection('contato')} className="metallic-button text-white px-6 py-2 rounded-full font-inter font-semibold">
              Contato
            </button>
          </nav>

          {/* Mobile menu button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-600 hover:text-rose-500 transition-colors duration-300"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <button onClick={() => { scrollToSection('inicio'); setIsMenuOpen(false); }} className="text-left text-gray-600 hover:text-rose-500 transition-colors duration-300 font-inter">
                Início
              </button>
              <button onClick={() => { scrollToSection('sobre'); setIsMenuOpen(false); }} className="text-left text-gray-600 hover:text-rose-500 transition-colors duration-300 font-inter">
                Sobre
              </button>
              <button onClick={() => { scrollToSection('servicos'); setIsMenuOpen(false); }} className="text-left text-gray-600 hover:text-rose-500 transition-colors duration-300 font-inter">
                Serviços
              </button>
              <button onClick={() => { scrollToSection('produtos'); setIsMenuOpen(false); }} className="text-left text-gray-600 hover:text-rose-500 transition-colors duration-300 font-inter">
                Produtos
              </button>
              <button onClick={() => { scrollToSection('instagram'); setIsMenuOpen(false); }} className="text-left text-gray-600 hover:text-rose-500 transition-colors duration-300 font-inter">
                Instagram
              </button>
              <button onClick={() => { scrollToSection('localizacao'); setIsMenuOpen(false); }} className="text-left text-gray-600 hover:text-rose-500 transition-colors duration-300 font-inter">
                Localização
              </button>
              <button onClick={() => { scrollToSection('contato'); setIsMenuOpen(false); }} className="metallic-button text-white px-6 py-2 rounded-full font-inter font-semibold text-center">
                Contato
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
