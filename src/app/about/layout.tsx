import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nosotros - Tecnimant | Mantenimiento Industrial en Colombia',
  description: 'Conoce la historia de Tecnimant, nuestro equipo de técnicos especializados y nuestra misión de prevenir fallas en equipos industriales.',
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

