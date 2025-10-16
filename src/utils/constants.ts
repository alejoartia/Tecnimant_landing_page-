export const COMPANY_INFO = {
  name: 'Tecnimant',
  tagline: 'Nos adelantamos a las fallas para que tu negocio nunca se detenga.',
  phone: '+57 3183929374',
  phone2: '+57 3202893697',
  phone3: '+57 3213510873',
  email: 'admin@tecnimant.co',
  cities: ['Bogotá', 'Villavicencio'],
} as const;

export const NAVIGATION_LINKS = [
  { name: 'Servicios', href: '#servicios' },
  { name: 'Industrias', href: '#por-que-elegirnos' },
  { name: 'Blog', href: '#blog' },
  { name: 'Nosotros', href: '/about' },
  { name: 'Cobertura', href: '#cobertura' },
  { name: 'Contacto', href: '#contacto' },
] as const;

export const SERVICES = [
  {
    id: 'mantenimiento-preventivo',
    title: 'Mantenimiento Preventivo',
    icon: 'tools',
    color: 'primary',
    features: [
      'Limpieza general de equipos industriales',
      'Revisión de conexiones eléctricas y ajuste de partes móviles',
      'Especializado en Gas: Limpieza de quemadores y calibración de llama',
      'Especializado en Refrigeración: Limpieza de sensores, evaporadores y unidades condensadoras',
      'Mantenimiento de sistemas eléctricos y tableros',
    ],
  },
  {
    id: 'mantenimiento-correctivo',
    title: 'Mantenimiento Correctivo y Repuestos',
    icon: 'wrench',
    color: 'secondary',
    features: [
      'Diagnóstico y reparación de equipos dañados',
      'Suministro e instalación de repuestos originales',
      'Reparación de motores eléctricos y bombas',
      'Solución de problemas en tableros eléctricos',
      'Compromiso de Calidad: Intentamos siempre utilizar partes originales para garantizar la durabilidad',
    ],
  },
  {
    id: 'servicios-electricos',
    title: 'Servicios Eléctricos',
    icon: 'zap',
    color: 'accent',
    features: [
      'Instalaciones eléctricas residenciales y comerciales',
      'Cableado estructurado y redes eléctricas',
      'Instalación de tableros eléctricos y protecciones',
      'Sistemas de iluminación LED y eficiencia energética',
      'Reparación de sistemas de iluminación',
    ],
  },
  {
    id: 'mantenimiento-predictivo',
    title: 'Mantenimiento Predictivo',
    icon: 'chart-line',
    color: 'warning',
    isSpecial: true,
    description: 'Este es nuestro diferenciador principal. Durante el mantenimiento preventivo, incluimos un análisis predictivo para informarte sobre piezas con desgaste o que se acercan al final de su vida útil. Te entregamos una cotización para el cambio antes de que la falla ocurra, ahorrándote costos y tiempo de inactividad inesperado.',
    features: [
      'Análisis predictivo de sistemas eléctricos e industriales',
      'Identificación temprana de desgaste en componentes',
      'Emergencias 24/7 para equipos críticos',
      'Garantía de 6 meses en todos nuestros servicios',
      'Ahorro de costos y tiempo de inactividad',
    ],
  },
] as const;

export const INDUSTRIES = [
  {
    title: 'Restaurantes y Locales de Comida',
    icon: 'utensils',
    color: 'primary',
    description: 'Pizzerías, restaurantes de pasta, puestos de empanadas y más. Tenemos amplia experiencia en:',
    features: [
      'Hornos industriales y comerciales',
      'Estufas y planchas',
      'Freidoras y equipos de cocina',
      'Sistemas eléctricos para cocinas industriales',
    ],
  },
  {
    title: 'Administraciones de Edificios',
    icon: 'building',
    color: 'secondary',
    description: 'Unidades residenciales, comerciales e industriales. Servicios especializados:',
    features: [
      'Mantenimiento de bombas eléctricas',
      'Cambio de bombillería',
      'Sistemas de refrigeración central',
      'Instalaciones eléctricas residenciales y comerciales',
    ],
  },
] as const;

export const COVERAGE_AREAS = [
  {
    city: 'Bogotá',
    subtitle: 'Capital de Colombia',
    icon: 'city',
    color: 'primary',
    features: [
      'Servicio en toda la ciudad',
      'Respuesta rápida',
      'Técnicos especializados',
    ],
  },
  {
    city: 'Villavicencio',
    subtitle: 'Puerta de los Llanos',
    icon: 'mountain',
    color: 'accent',
    features: [
      'Cobertura completa',
      'Atención especializada',
      'Mantenimiento local',
    ],
  },
] as const;

export const BLOG_POSTS = [
  {
    title: '5 Señales de que tu Equipo Necesita Mantenimiento Urgente',
    date: '15 de Diciembre, 2024',
    description: 'Aprende a identificar las señales tempranas de desgaste en equipos industriales y cómo el mantenimiento preventivo puede ahorrarte miles de pesos.',
    icon: 'cogs',
    color: 'steel',
  },
  {
    title: 'Mantenimiento Predictivo: El Futuro de la Industria',
    date: '10 de Diciembre, 2024',
    description: 'Descubre cómo la tecnología IoT y el análisis de datos están revolucionando el mantenimiento industrial en Colombia.',
    icon: 'chart-line',
    color: 'accent',
  },
  {
    title: 'Optimización de Hornos en Restaurantes: Guía Completa',
    date: '5 de Diciembre, 2024',
    description: 'Consejos prácticos para mantener hornos de pizza y equipos de cocina industrial funcionando al máximo rendimiento.',
    icon: 'fire',
    color: 'warning',
  },
] as const;

export const TEAM_MEMBERS = [
  {
    name: 'Carlos Mendoza',
    position: 'Director General',
    description: 'Ingeniero Mecánico con 15 años de experiencia en mantenimiento industrial. Especialista en sistemas predictivos y gestión de equipos críticos.',
    icon: 'user-tie',
    color: 'steel',
  },
  {
    name: 'Ana Rodríguez',
    position: 'Jefa Técnica',
    description: 'Ingeniera Eléctrica especializada en sistemas de refrigeración y gas. Certificada en mantenimiento predictivo y análisis de vibraciones.',
    icon: 'user-cog',
    color: 'accent',
  },
  {
    name: 'Miguel Torres',
    position: 'Supervisor de Campo',
    description: 'Técnico Mecánico con 12 años de experiencia en equipos industriales. Especialista en hornos, estufas y sistemas de cocina comercial.',
    icon: 'user-hard-hat',
    color: 'warning',
  },
] as const;

export const WHY_CHOOSE_US = [
  {
    title: 'Tecnología Predictiva',
    description: 'Análisis avanzado que identifica fallas antes de que ocurran',
    icon: 'chart-line',
    color: 'primary',
  },
  {
    title: 'Respuesta Rápida',
    description: 'Servicio 24/7 con tiempos de respuesta menores a 2 horas',
    icon: 'clock',
    color: 'accent',
  },
  {
    title: 'Certificaciones',
    description: 'Técnicos certificados en las mejores marcas del mercado',
    icon: 'certificate',
    color: 'secondary',
  },
  {
    title: 'Garantía Total',
    description: 'Garantía de 6 meses en todos nuestros servicios',
    icon: 'shield-alt',
    color: 'warning',
  },
] as const;

