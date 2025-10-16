'use client';

import { useState } from 'react';
import { Send, Loader2 } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const Contact = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    negocio: '',
    email: '',
    telefono: '',
    ciudad: '',
    servicio: '',
    mensaje: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!formData.nombre || !formData.negocio || !formData.email || !formData.telefono || !formData.ciudad || !formData.servicio) {
      alert('Por favor, completa todos los campos obligatorios.');
      return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert('Por favor, ingresa un email válido.');
      return;
    }
    
    // Phone validation
    const phoneRegex = /^[\d\s\-\+\(\)]+$/;
    if (!phoneRegex.test(formData.telefono)) {
      alert('Por favor, ingresa un teléfono válido.');
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      alert('¡Gracias por tu solicitud! Nos pondremos en contacto contigo en menos de 24 horas.');
      setFormData({
        nombre: '',
        negocio: '',
        email: '',
        telefono: '',
        ciudad: '',
        servicio: '',
        mensaje: '',
      });
      setIsSubmitting(false);
    }, 2000);
  };

  return (
    <section id="contacto" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Solicita tu Diagnóstico o Cotización Hoy Mismo
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Completa el formulario y nos pondremos en contacto contigo en menos de 24 horas
          </p>
        </AnimatedSection>
        
        <AnimatedSection delay={0.2} className="max-w-4xl mx-auto">
          <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-lg p-8">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-2">
                  Nombre *
                </label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent focus-ring"
                />
              </div>
              <div>
                <label htmlFor="negocio" className="block text-sm font-medium text-gray-700 mb-2">
                  Nombre del Negocio *
                </label>
                <input
                  type="text"
                  id="negocio"
                  name="negocio"
                  value={formData.negocio}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent focus-ring"
                />
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent focus-ring"
                />
              </div>
              <div>
                <label htmlFor="telefono" className="block text-sm font-medium text-gray-700 mb-2">
                  Teléfono *
                </label>
                <input
                  type="tel"
                  id="telefono"
                  name="telefono"
                  value={formData.telefono}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent focus-ring"
                />
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="ciudad" className="block text-sm font-medium text-gray-700 mb-2">
                  Ciudad *
                </label>
                <select
                  id="ciudad"
                  name="ciudad"
                  value={formData.ciudad}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent focus-ring"
                >
                  <option value="">Selecciona una ciudad</option>
                  <option value="bogota">Bogotá</option>
                  <option value="villavicencio">Villavicencio</option>
                </select>
              </div>
              <div>
                <label htmlFor="servicio" className="block text-sm font-medium text-gray-700 mb-2">
                  Servicio Requerido *
                </label>
                <select
                  id="servicio"
                  name="servicio"
                  value={formData.servicio}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent focus-ring"
                >
                  <option value="">Selecciona un servicio</option>
                  <option value="preventivo">Mantenimiento Preventivo</option>
                  <option value="correctivo">Mantenimiento Correctivo</option>
                  <option value="electrico">Servicios Eléctricos</option>
                  <option value="predictivo">Mantenimiento Predictivo</option>
                  <option value="emergencias">Emergencias 24/7</option>
                </select>
              </div>
            </div>
            
            <div className="mb-6">
              <label htmlFor="mensaje" className="block text-sm font-medium text-gray-700 mb-2">
                Mensaje
              </label>
              <textarea
                id="mensaje"
                name="mensaje"
                rows={4}
                value={formData.mensaje}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent focus-ring"
                placeholder="Cuéntanos más detalles sobre tu requerimiento..."
              />
            </div>
            
            <div className="text-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-secondary text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-red-700 transition-colors shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center mx-auto"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 animate-spin" size={20} />
                    Enviando...
                  </>
                ) : (
                  <>
                    <Send className="mr-2" size={20} />
                    Enviar Solicitud
                  </>
                )}
              </button>
            </div>
          </form>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Contact;
