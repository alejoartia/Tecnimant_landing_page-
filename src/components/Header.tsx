'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { NAVIGATION_LINKS, COMPANY_INFO } from '@/utils/constants';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contacto');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const handleNavLinkClick = (href: string) => {
    // Si el enlace es un hash (empieza con #)
    if (href.startsWith('#')) {
      // Si estamos en la página about, navegar a la página principal primero
      if (window.location.pathname === '/about') {
        window.location.href = `/${href}`;
      } else {
        // Si estamos en la página principal, hacer scroll suave
        const element = document.getElementById(href.substring(1));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    } else {
      // Si es un enlace normal (como /about), usar navegación normal
      window.location.href = href;
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`bg-white shadow-lg fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-sm' : ''
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center space-x-3">
                {/* Logo Icon - Minimalista */}
                <div className="relative w-10 h-10">
                  {/* Círculo simple */}
                  <div className="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center">
                    {/* Letter T */}
                    <div className="text-white font-bold text-lg">T</div>
                  </div>
                  
                  {/* Rayas rojas minimalistas */}
                  <div className="absolute -right-1 top-1/2 transform -translate-y-1/2 flex flex-col space-y-0.5">
                    <div className="w-1 h-3 bg-red-600 rounded"></div>
                    <div className="w-1 h-3 bg-white rounded"></div>
                    <div className="w-1 h-3 bg-red-600 rounded"></div>
                  </div>
                </div>
                
                {/* Company Name */}
                <div className="flex flex-col">
                  <div className="text-xl font-bold">
                    <span className="text-gray-900">Tecnimant</span>
                    <span className="text-red-600"> Col</span>
                  </div>
                  <div className="text-xs text-gray-500 -mt-1">
                    Mantenimiento Técnico Industrial
                  </div>
                </div>
              </Link>
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {NAVIGATION_LINKS.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleNavLinkClick(link.href)}
                  className="text-gray-700 hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  {link.name}
                </button>
              ))}
              <button
                onClick={scrollToContact}
                className="bg-secondary text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-red-700 transition-colors"
              >
                Cotizar Servicio
              </button>
            </div>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={handleMobileMenuToggle}
              className="text-gray-700 hover:text-primary focus:outline-none focus:text-primary"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div className={`md:hidden transition-all duration-300 ${
        isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
      } bg-white border-t`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {NAVIGATION_LINKS.map((link) => (
            <button
              key={link.name}
              onClick={() => handleNavLinkClick(link.href)}
              className="text-gray-700 hover:text-primary block px-3 py-2 rounded-md text-base font-medium w-full text-left"
            >
              {link.name}
            </button>
          ))}
          <button
            onClick={scrollToContact}
            className="bg-secondary text-white w-full text-left px-3 py-2 rounded-md text-base font-medium hover:bg-red-700 transition-colors"
          >
            Cotizar Servicio
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;

