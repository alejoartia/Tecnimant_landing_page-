'use client';

import { Calculator, Phone, Wrench } from 'lucide-react';
import { COMPANY_INFO } from '@/utils/constants';
import AnimatedSection from './AnimatedSection';

interface HeroProps {
  title: string;
  subtitle: string;
  showImage?: boolean;
}

const Hero = ({ title, subtitle, showImage = true }: HeroProps) => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contacto');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="pt-16 bg-gradient-to-br from-primary via-industrial to-steel text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-transparent"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
        <AnimatedSection delay={0}>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              {title}
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl">
              {subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={scrollToContact}
                className="bg-secondary text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-red-700 transition-colors shadow-lg flex items-center justify-center"
              >
                <Calculator className="mr-2" size={20} />
                Solicitar Cotización
              </button>
              <a
                href={`tel:${COMPANY_INFO.phone}`}
                className="bg-accent text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-700 transition-colors shadow-lg flex items-center justify-center"
              >
                <Phone className="mr-2" size={20} />
                Llamar Ahora
              </a>
            </div>
          </AnimatedSection>
          
          {showImage && (
            <AnimatedSection delay={0.2} direction="right" className="hidden lg:block">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                <div className="aspect-video rounded-lg overflow-hidden">
                  <img 
                    src="https://storage.googleapis.com/tecnimant_page_assets/images/equipos-industriales.jpg" 
                    alt="Técnicos trabajando en mantenimiento de equipos industriales"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </AnimatedSection>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;
