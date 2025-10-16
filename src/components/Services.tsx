'use client';

import { Check, Wrench, BarChart3, Zap, Settings } from 'lucide-react';
import { SERVICES } from '@/utils/constants';
import AnimatedSection from './AnimatedSection';

const iconMap = {
  tools: Wrench,
  wrench: Wrench,
  'chart-line': BarChart3,
  zap: Zap,
  settings: Settings,
};

const Services = () => {
  return (
    <section id="servicios" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Nuestros Servicios
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Soluciones completas de mantenimiento industrial y servicios eléctricos para mantener tus equipos funcionando al máximo rendimiento
          </p>
        </AnimatedSection>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((service, index) => {
            const IconComponent = iconMap[service.icon as keyof typeof iconMap];
            const isSpecial = 'isSpecial' in service && service.isSpecial;
            
            return (
              <AnimatedSection
                key={service.id}
                delay={index * 0.2}
                className={`rounded-xl shadow-lg p-8 border border-gray-200 hover:shadow-xl transition-shadow ${
                  isSpecial 
                    ? 'bg-gradient-to-br from-accent to-green-600 text-white' 
                    : 'bg-white'
                }`}
              >
                <div className="text-center mb-6">
                  <div className={`${
                    isSpecial ? 'bg-white text-accent' : `bg-${service.color} text-white`
                  } w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <IconComponent size={32} />
                  </div>
                  <h3 className={`text-2xl font-bold mb-4 ${
                    isSpecial ? 'text-white' : 'text-gray-900'
                  }`}>
                    {service.title}
                  </h3>
                </div>
                
                {isSpecial ? (
                  <div className="space-y-4">
                    <p className="text-green-100">
                      <strong>Este es nuestro diferenciador principal.</strong> Durante el mantenimiento preventivo, incluimos un análisis predictivo para informarte sobre piezas con desgaste o que se acercan al final de su vida útil.
                    </p>
                    <p className="text-green-100">
                      Te entregamos una cotización para el cambio antes de que la falla ocurra, ahorrándote costos y tiempo de inactividad inesperado.
                    </p>
                  </div>
                ) : (
                  <ul className="space-y-3 text-gray-600">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <Check className="text-accent mr-3 mt-1 flex-shrink-0" size={16} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
