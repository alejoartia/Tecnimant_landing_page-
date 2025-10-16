'use client';

import { Check, Utensils, Building, Home } from 'lucide-react';
import { INDUSTRIES } from '@/utils/constants';
import AnimatedSection from './AnimatedSection';

const iconMap = {
  utensils: Utensils,
  building: Building,
  home: Home,
};

const Industries = () => {
  return (
    <section id="por-que-elegirnos" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Soluciones a la Medida de Tu Negocio
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Atendemos diferentes industrias con soluciones especializadas para cada sector
          </p>
        </AnimatedSection>
        
        <div className="grid md:grid-cols-2 gap-8">
          {INDUSTRIES.map((industry, index) => {
            const IconComponent = iconMap[industry.icon as keyof typeof iconMap];
            
            return (
              <AnimatedSection
                key={industry.title}
                delay={index * 0.2}
                className="bg-white rounded-xl shadow-lg p-8 border border-gray-200 hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center mb-6">
                  <div className={`bg-${industry.color} text-white w-12 h-12 rounded-full flex items-center justify-center mr-4`}>
                    <IconComponent size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {industry.title}
                  </h3>
                </div>
                
                <p className="text-gray-600 mb-4">
                  {industry.description}
                </p>
                
                <ul className="space-y-2 text-gray-600">
                  {industry.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="text-accent mr-3 flex-shrink-0" size={16} />
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

export default Industries;
