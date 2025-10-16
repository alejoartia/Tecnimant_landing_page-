import type { Metadata } from 'next';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import AnimatedSection from '@/components/AnimatedSection';
import MotionDiv from '@/components/MotionDiv';
import { Target, Eye, Heart, Check, User, UserCog, HardHat, BarChart3, Clock, Award, Shield, TrendingUp } from 'lucide-react';
import { TEAM_MEMBERS, WHY_CHOOSE_US } from '@/utils/constants';

export const metadata: Metadata = {
  title: 'Nosotros - Tecnimant | Mantenimiento Industrial en Colombia',
  description: 'Conoce la historia de Tecnimant, nuestro equipo de técnicos especializados y nuestra misión de prevenir fallas en equipos industriales.',
  keywords: 'Tecnimant, mantenimiento industrial, equipo técnico, Colombia, historia empresa',
};

const iconMap = {
  'user-tie': User,
  'user-cog': UserCog,
  'user-hard-hat': HardHat,
  'chart-line': BarChart3,
  'clock': Clock,
  'certificate': Award,
  'shield-alt': Shield,
};

const AboutPage = () => {
  return (
    <main className="bg-gray-50">
      <Header />
      <Hero
        title="Sobre Nosotros"
        subtitle="Conoce la historia, misión y valores que nos impulsan a ser líderes en mantenimiento industrial en Colombia"
        showImage={false}
      />

      {/* Our Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection direction="left">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Nuestra Historia</h2>
              <div className="space-y-4 text-gray-600 text-lg">
                <p>
                  Tecnimant nació en 2020 con una visión clara: revolucionar el mantenimiento industrial en Colombia. 
                  Fundada por un equipo de ingenieros con más de 15 años de experiencia en el sector, 
                  identificamos una necesidad crítica en el mercado.
                </p>
                <p>
                  La mayoría de empresas esperaban a que sus equipos fallaran para actuar, generando costos 
                  exorbitantes y tiempo de inactividad que afectaba directamente su rentabilidad. 
                  Nos propusimos cambiar este paradigma.
                </p>
                <p>
                  Hoy, con presencia en Bogotá y Villavicencio, hemos desarrollado un sistema único de 
                  mantenimiento predictivo que ha ayudado a más de 200 empresas a optimizar sus operaciones 
                  y reducir costos de mantenimiento en un 40%.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2} direction="right" className="rounded-xl overflow-hidden">
              <div className="aspect-video rounded-lg overflow-hidden">
                <img 
                  src="https://storage.googleapis.com/tecnimant_page_assets/images/oficinas-talleres.jpg" 
                  alt="Oficinas y talleres de Tecnimant"
                  className="w-full h-full object-cover"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Nuestra Propuesta de Valor</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Los principios que guían cada decisión y cada servicio que ofrecemos
            </p>
          </AnimatedSection>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Mission */}
            <MotionDiv
              delay={0.1}
              className="bg-white rounded-xl shadow-lg p-8 text-center"
            >
              <div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Misión</h3>
              <p className="text-gray-600">
                Prevenir fallas antes de que ocurran mediante tecnología predictiva y mantenimiento especializado, 
                garantizando la continuidad operacional de nuestros clientes y maximizando su rentabilidad.
              </p>
            </MotionDiv>

            {/* Vision */}
            <MotionDiv
              delay={0.2}
              className="bg-white rounded-xl shadow-lg p-8 text-center"
            >
              <div className="bg-accent text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Eye size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Visión</h3>
              <p className="text-gray-600">
                Ser la empresa líder en mantenimiento predictivo en Colombia, reconocida por nuestra innovación 
                tecnológica y por transformar la forma en que las empresas gestionan sus equipos industriales.
              </p>
            </MotionDiv>

            {/* Values */}
            <MotionDiv
              delay={0.3}
              className="bg-white rounded-xl shadow-lg p-8 text-center"
            >
              <div className="bg-secondary text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Valores</h3>
              <ul className="text-gray-600 space-y-2 text-left">
                <li className="flex items-center">
                  <Check className="text-accent mr-2" size={16} />
                  Excelencia técnica
                </li>
                <li className="flex items-center">
                  <Check className="text-accent mr-2" size={16} />
                  Innovación constante
                </li>
                <li className="flex items-center">
                  <Check className="text-accent mr-2" size={16} />
                  Transparencia total
                </li>
                <li className="flex items-center">
                  <Check className="text-accent mr-2" size={16} />
                  Compromiso con resultados
                </li>
              </ul>
            </MotionDiv>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Nuestro Equipo</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Profesionales altamente capacitados con experiencia en diferentes sectores industriales
            </p>
          </AnimatedSection>
          
          <div className="grid md:grid-cols-3 gap-8">
            {TEAM_MEMBERS.map((member, index) => {
              const IconComponent = iconMap[member.icon as keyof typeof iconMap];
              const gradientClass = member.color === 'steel' 
                ? 'from-steel to-industrial' 
                : member.color === 'accent' 
                ? 'from-accent to-green-600' 
                : 'from-warning to-orange-600';
              
              return (
              <AnimatedSection
                key={member.name}
                delay={index * 0.2}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
              >
                  <div className={`aspect-square bg-gradient-to-br ${gradientClass} flex items-center justify-center`}>
                    <div className="text-center text-white">
                      <IconComponent size={64} className="mb-4" />
                      <p className="text-sm">Foto del {member.position}</p>
                    </div>
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                    <p className="text-secondary font-semibold mb-2">{member.position}</p>
                    <p className="text-gray-600 text-sm">
                      {member.description}
                    </p>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">¿Por Qué Elegir Tecnimant?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nuestras ventajas competitivas que nos distinguen en el mercado
            </p>
          </AnimatedSection>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {WHY_CHOOSE_US.map((item, index) => {
              const IconComponent = iconMap[item.icon as keyof typeof iconMap];
              
              return (
                <AnimatedSection
                  key={item.title}
                  delay={index * 0.1}
                  className="text-center"
                >
                  <div className={`bg-${item.color} text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <IconComponent size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-industrial text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">¿Listo para Optimizar tu Mantenimiento?</h2>
            <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
              Únete a las más de 200 empresas que ya confían en Tecnimant para mantener sus equipos funcionando al máximo rendimiento
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contacto"
                className="bg-secondary text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-red-700 transition-colors shadow-lg inline-flex items-center justify-center"
              >
                <TrendingUp className="mr-2" size={20} />
                Solicitar Cotización
              </a>
              <a
                href="tel:+573001234567"
                className="bg-accent text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-700 transition-colors shadow-lg inline-flex items-center justify-center"
              >
                <Clock className="mr-2" size={20} />
                Llamar Ahora
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default AboutPage;
