'use client';

import Link from 'next/link';
import { Phone, Mail, MapPin } from 'lucide-react';
import { COMPANY_INFO, NAVIGATION_LINKS } from '@/utils/constants';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">{COMPANY_INFO.name}</h3>
            <p className="text-gray-300 mb-4">
              {COMPANY_INFO.tagline}
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Servicios</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link href="#servicios" className="hover:text-white transition-colors">
                  Mantenimiento Preventivo
                </Link>
              </li>
              <li>
                <Link href="#servicios" className="hover:text-white transition-colors">
                  Mantenimiento Correctivo
                </Link>
              </li>
              <li>
                <Link href="#servicios" className="hover:text-white transition-colors">
                  Mantenimiento Predictivo
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contacto</h4>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center">
                <Phone className="mr-2" size={16} />
                {COMPANY_INFO.phone}
              </li>
              <li className="flex items-center">
                <Mail className="mr-2" size={16} />
                {COMPANY_INFO.email}
              </li>
              <li className="flex items-center">
                <MapPin className="mr-2" size={16} />
                {COMPANY_INFO.cities.join(' y ')}
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Enlaces</h4>
            <ul className="space-y-2 text-gray-300">
              {NAVIGATION_LINKS.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; 2024 {COMPANY_INFO.name}. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

