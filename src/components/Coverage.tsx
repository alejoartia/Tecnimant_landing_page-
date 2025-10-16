'use client';

import { Check, Building2, Mountain } from 'lucide-react';
import { COVERAGE_AREAS } from '@/utils/constants';
import AnimatedSection from './AnimatedSection';

const iconMap = {
  city: Building2,
  mountain: Mountain,
};

const Coverage = () => {
  return (
    <section id="cobertura" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Con Presencia en Bogotá y Villavicencio
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nuestro equipo técnico está listo para atender tus requerimientos en las dos ciudades, brindando un servicio rápido y eficiente
          </p>
        </AnimatedSection>
        
        <div className="grid md:grid-cols-2 gap-8">
          {COVERAGE_AREAS.map((area, index) => {
            const IconComponent = iconMap[area.icon as keyof typeof iconMap];
            const gradientClass = area.color === 'primary' 
              ? 'from-primary to-blue-700' 
              : 'from-accent to-green-600';
            const textColor = area.color === 'primary' ? 'text-blue-100' : 'text-green-100';
            
            return (
              <AnimatedSection
                key={area.city}
                delay={index * 0.2}
                className={`bg-gradient-to-br ${gradientClass} text-white rounded-xl shadow-lg p-8 text-center`}
              >
                <div className="mb-6">
                  <IconComponent className="mx-auto mb-4" size={64} />
                  <h3 className="text-3xl font-bold mb-2">{area.city}</h3>
                  <p className={textColor}>{area.subtitle}</p>
                </div>
                
                <ul className={`space-y-2 ${textColor}`}>
                  {area.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center justify-center">
                      <Check className="mr-2 flex-shrink-0" size={16} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Coverage;
