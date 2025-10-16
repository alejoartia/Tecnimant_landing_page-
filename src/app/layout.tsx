import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://tecnimant.com'),
  title: 'Tecnimant - Mantenimiento Preventivo y Correctivo para Negocios',
  description: 'Servicio de mantenimiento predictivo para equipos industriales y comerciales en Bogotá y Villavicencio. Prevenimos fallas antes de que ocurran.',
  keywords: 'mantenimiento industrial, mantenimiento preventivo, mantenimiento correctivo, Bogotá, Villavicencio, equipos industriales',
  authors: [{ name: 'Tecnimant' }],
  robots: 'index, follow',
  openGraph: {
    title: 'Tecnimant - Mantenimiento Industrial en Colombia',
    description: 'Servicio de mantenimiento predictivo para equipos industriales y comerciales en Bogotá y Villavicencio.',
    type: 'website',
    locale: 'es_CO',
    images: [
      {
        url: 'https://storage.googleapis.com/tecnimant_page_assets/images/equipos-industriales.jpg',
        width: 1200,
        height: 630,
        alt: 'Técnicos trabajando en mantenimiento de equipos industriales',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tecnimant - Mantenimiento Industrial en Colombia',
    description: 'Servicio de mantenimiento predictivo para equipos industriales y comerciales en Bogotá y Villavicencio.',
    images: ['https://storage.googleapis.com/tecnimant_page_assets/images/equipos-industriales.jpg'],
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
