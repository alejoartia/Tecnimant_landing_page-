'use client';

import { Calendar, ArrowRight, Settings, BarChart3, Flame, Zap, Lightbulb } from 'lucide-react';
import { BLOG_POSTS } from '@/utils/constants';
import AnimatedSection from './AnimatedSection';

const iconMap = {
  cogs: Settings,
  'chart-line': BarChart3,
  fire: Flame,
  zap: Zap,
  lightbulb: Lightbulb,
};

const Blog = () => {
  return (
    <section id="blog" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Blog Técnico
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Mantente informado sobre las últimas tendencias en mantenimiento industrial y consejos para optimizar tus equipos
          </p>
        </AnimatedSection>
        
        <div className="grid md:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post, index) => {
            const IconComponent = iconMap[post.icon as keyof typeof iconMap];
            const gradientClass = post.color === 'steel' 
              ? 'from-steel to-industrial' 
              : post.color === 'accent' 
              ? 'from-accent to-green-600' 
              : 'from-warning to-orange-600';
            
            return (
              <AnimatedSection
                key={post.title}
                delay={index * 0.2}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className={`aspect-video bg-gradient-to-br ${gradientClass} flex items-center justify-center`}>
                  <div className="text-center text-white">
                    <IconComponent size={32} className="mx-auto mb-2" />
                    <p className="text-sm">Imagen del artículo</p>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <Calendar className="mr-2" size={16} />
                    <span>{post.date}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4">
                    {post.description}
                  </p>
                  
                  <a
                    href="#"
                    className="text-secondary font-semibold hover:text-red-700 transition-colors flex items-center"
                  >
                    Leer más <ArrowRight className="ml-1" size={16} />
                  </a>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
        
        <AnimatedSection delay={0.4} className="text-center mt-12">
          <a
            href="#"
            className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors inline-flex items-center"
          >
            Ver Todos los Artículos <ArrowRight className="ml-2" size={16} />
          </a>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Blog;
