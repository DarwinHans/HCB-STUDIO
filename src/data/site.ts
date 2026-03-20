export const siteConfig = {
  siteUrl: 'https://hcbstudio.cl',
  brand: {
    name: 'HCB Studio',
    shortName: 'HCB',
    tagline: 'Barberia premium en Valdivia',
    logo: {
      src: '/logo.svg',
      alt: 'HCB Studio',
      width: 220,
      height: 60,
    },
  },
  seo: {
    title: 'HCB Studio | Barberia premium en Valdivia',
    description:
      'Barberia premium en Valdivia con cortes de cabello, perfilado de barba y experiencia personalizada. Reserva tu hora en HCB Studio.',
    keywords: [
      'barberia valdivia',
      'barberia en valdivia',
      'barbero valdivia',
      'corte de cabello hombre valdivia',
      'perfilado de barba valdivia',
      'barberia premium valdivia',
    ],
    ogImage: '/og-image.svg',
  },
  bookingUrl: 'https://hcbstudio.site.agendapro.com/cl/sucursal/135553',
  instagramUrl: 'https://www.instagram.com/hcb_studio/',
  instagramHandle: '@hcb_studio',
  phone: '+56 9 5789 9062',
  whatsappPhone: '+56957899062',
  location: {
    streetAddress: 'Anibal Pinto 1962, Oficina 12',
    addressLocality: 'Valdivia',
    addressRegion: 'Los Rios',
    postalCode: '5111002',
    addressCountry: 'CL',
    mapEmbedUrl:
      'https://www.google.com/maps?q=Anibal%20Pinto%201962%20Oficina%2012%2C%20Valdivia%2C%20Chile&output=embed',
  },
  hours: [
    'Lunes a viernes: 10:00 - 19:30',
    'Sabado: 11:00 - 13:30',
    'Domingo: Cerrado',
  ],
  nav: [
    { label: 'Nosotros', href: '#nosotros' },
    { label: 'Servicios', href: '#servicios' },
    { label: 'Equipo', href: '#equipo' },
    { label: 'Galeria', href: '#galeria' },
    { label: 'Testimonios', href: '#testimonios' },
    { label: 'Ubicacion', href: '#ubicacion' },
  ],
  hero: {
    eyebrow: 'Barberia premium en Valdivia',
    title: ['HCB', 'Studio'],
    description:
      'Servicio personalizado que entrega seguridad y confianza a traves de un buen corte de cabello, perfilado de barba y asesoramiento de imagen masculina.',
    primaryCta: 'Reserva tu hora',
    secondaryCta: 'Ver servicios',
    backgroundImage:
      'https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&w=1800&q=80',
  },
  about: {
    kicker: 'La practica hace la perfeccion',
    title: 'Nosotros',
    lead:
      'Nuestra filosofia en HCB Studio es entregar una experiencia unica a cada cliente, a traves de un servicio de excelencia dedicado minuciosamente.',
    paragraphs: [
      'Para conseguir esto, nuestro primer objetivo fue ponernos en el lugar de cada cliente. Con eso conseguimos entender la necesidad y el servicio esperado.',
      'Trabajamos diariamente en perfeccionarnos, abiertos a escuchar, aprender y seguir creciendo para alcanzar cortes y perfiles que se vean tan bien como se sienten.',
    ],
  },
  serviceCategories: [
    {
      id: 'cabello',
      label: 'Cabello',
      icon: '✂',
      services: [
        {
          name: 'Corte de cabello',
          duration: '1 hr',
          price: '$15.000',
          description:
            'Corte de cabello con previo estudio de estructura craneal para estilizar y rejuvenecer tu apariencia.',
          image:
            'https://images.unsplash.com/photo-1517832606299-7ae9b720a186?auto=format&fit=crop&w=1200&q=80',
        },
        {
          name: 'Corte de cabello + ceja',
          duration: '1 hr',
          price: '$17.000',
          description:
            'Corte de cabello con estudio de estructura craneal y perfilado de cejas para un acabado mas limpio y definido.',
          image:
            'https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=1200&q=80',
        },
        {
          name: 'Perfilado de corte',
          duration: '30 min',
          price: '$9.000',
          description:
            'Limpieza de contorno de corte de cabello, definiendo terminaciones en patilla y nuca para refrescar tu estilo.',
          image:
            'https://images.unsplash.com/photo-1503951458645-643d53bfd90f?auto=format&fit=crop&w=1200&q=80',
        },
        {
          name: 'Perfilado de corte mas perfilado de barba simple',
          duration: '45 min',
          price: '$18.000',
          description:
            'Limpieza de contorno de corte de cabello en patilla y nuca, complementado con perfilado de barba simple realizado con maquinas.',
          image:
            'https://images.unsplash.com/photo-1512690459411-b0d9c4022c48?auto=format&fit=crop&w=1200&q=80',
        },
        {
          name: 'Corte de cabello mas perfilado de barba simple',
          duration: '1 hr 30 min',
          price: '$23.000',
          description:
            'Corte de cabello con previo estudio de estructura craneal que ayude a estilizar y rejuvenecer tu apariencia, junto a perfilado de barba simple.',
          image:
            'https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&w=1200&q=80',
        },
        {
          name: 'Corte de cabello mas perfilado de barba ritual',
          duration: '2 hrs',
          price: '$28.000',
          description:
            'Corte de cabello con previo estudio de estructura craneal y ritual de barba premium para una experiencia completa de cuidado masculino.',
          image:
            'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&w=1200&q=80',
        },
        {
          name: 'Corte de cabello, perfilado de barba ritual mas perfilado de cejas',
          duration: '2 hrs',
          price: '$30.000',
          description:
            'Servicio integral con corte de cabello, perfilado de barba ritual y perfilado de cejas, incluyendo peinado y terminaciones de alto detalle.',
          image:
            'https://images.unsplash.com/photo-1519415943484-9fa1873496d4?auto=format&fit=crop&w=1200&q=80',
        },
        {
          name: 'Corte de cabello, perfilado de barba simple mas perfilado de cejas',
          duration: '2 hrs',
          price: '$28.000',
          description:
            'Corte de cabello con estudio previo, perfilado de barba simple y perfilado de cejas para lograr una imagen prolija y armoniosa.',
          image:
            'https://images.unsplash.com/photo-1517832606299-7ae9b720a186?auto=format&fit=crop&w=1200&q=80',
        },
      ],
    },
    {
      id: 'barba',
      label: 'Barba',
      icon: '✦',
      services: [
        {
          name: 'Perfilado de barba simple',
          duration: '45 min',
          price: '$11.000',
          description:
            'Perfilado de barba simple realizado con maquinas, definido para una apariencia limpia y precisa.',
          image:
            'https://images.unsplash.com/photo-1512690459411-b0d9c4022c48?auto=format&fit=crop&w=1200&q=80',
        },
        {
          name: 'Perfilado premium',
          duration: '1 hr',
          price: '$14.000',
          description:
            'Perfilado con toallas calientes, precision en contornos y acabado pensado para destacar tus facciones.',
          image:
            'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&w=1200&q=80',
        },
      ],
    },
    {
      id: 'otros',
      label: 'Otros',
      icon: '◉',
      services: [
        {
          name: 'Ceja',
          duration: '15 min',
          price: '$3.000',
          description:
            'Perfilado de contorno y recorte de ceja para mantener un acabado sobrio y natural.',
          image:
            'https://images.unsplash.com/photo-1519415943484-9fa1873496d4?auto=format&fit=crop&w=1200&q=80',
        },
      ],
    },
  ],
  team: {
    kicker: 'Nuestro equipo',
    title: 'Profesionales de Elite',
    members: [
      {
        name: 'Hernan Castillo',
        bio:
          'Experto en cortes, perfilado de barba y tecnicas de afeitado ritual, transformando cada visita en una experiencia premium de cuidado masculino, resultados que hablan solos',
        image: '/team/hernan.png',
        imageAlt: 'Hernan Castillo trabajando en un servicio de barberia',
        instagramHandle: '@hernan_hcb',
        instagramUrl:
          'https://www.instagram.com/hernan_hcb?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGn8Vdg4I0CCBmXEXMC1VPfzvUuOaG2w_Z9vMWUU5_dUt2XpUTGVK_Rj6TnPis_aem_t2JbeB-W24GOIPHfgHkCLw',
      },
      {
        name: 'Felipe Seguel',
        bio:
          'Especialista en cortes clasicos y modernos con enfoque en detalle, precision y una experiencia cercana para cada cliente.',
        image: '/team/felipe.png',
        imageAlt: 'Felipe Seguel realizando un corte de cabello',
        instagramHandle: '@felipeignacio.barbero',
        instagramUrl: 'https://www.instagram.com/felipeignacio.barbero/',
      },
    ],
  },
  gallery: {
    kicker: 'Nuestro trabajo',
    title: 'Galeria',
    images: [
      { src: '/images/1.JPEG', alt: 'Corte de cabello masculino en HCB Studio', type: 'image' },
      { src: '/images/2.WEBP', alt: 'Perfilado de barba premium en Valdivia', type: 'image' },
      { src: '/images/3.JPG', alt: 'Detalle de fade y perfilado masculino', type: 'image' },
      { src: '/images/8.MP4', alt: 'Servicio de barberia HCB Studio Valdivia', type: 'video' },
      { src: '/images/6.PNG', alt: 'Ambiente y estilo en HCB Studio', type: 'image' },
      { src: '/images/7.PNG', alt: 'Trabajo de barberia premium', type: 'image' },
      { src: '/images/4.mov', alt: 'Experiencia HCB Studio Valdivia', type: 'video' },
    ],
  },
  instagram: {
    images: [
      { src: '/images/3.JPG', alt: 'Servicio de corte en HCB Studio' },
      { src: '/team/felipe.png', alt: 'Felipe Seguel — Barbero HCB Studio' },
      { src: '/team/hernan.png', alt: 'Hernan Castillo — Barbero HCB Studio' },
    ],
  },
  testimonials: {
    kicker: 'Testimonios',
    title: 'Lo que dicen nuestros clientes',
    items: [
      {
        quote:
          'Excelente barberia. Muy buena atencion. Totalmente recomendada.',
        author: 'Felipe Coronado Medina',
      },
      {
        quote:
          'El mejor barbero de Valdivia. Perfecta atencion y dedicacion. Nada que decir, 10/10.',
        author: 'Antonio Munoz',
      },
      {
        quote: 'Excelente atencion.',
        author: 'Matias Sepulveda',
      },
    ],
  },
} as const;

export const businessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BarberShop',
  name: siteConfig.brand.name,
  image: `${siteConfig.siteUrl}${siteConfig.seo.ogImage}`,
  url: siteConfig.siteUrl,
  telephone: siteConfig.phone,
  email: siteConfig.email,
  address: {
    '@type': 'PostalAddress',
    streetAddress: siteConfig.location.streetAddress,
    addressLocality: siteConfig.location.addressLocality,
    addressRegion: siteConfig.location.addressRegion,
    postalCode: siteConfig.location.postalCode,
    addressCountry: siteConfig.location.addressCountry,
  },
  areaServed: ['Valdivia', 'Los Rios'],
  geo: {
    '@type': 'GeoCoordinates',
    latitude: -39.8142,
    longitude: -73.2459,
  },
  sameAs: [
    siteConfig.instagramUrl,
    siteConfig.bookingUrl,
    'https://share.google/cLZ8omcwXJeYSf7Ts',
  ],
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '10:00',
      closes: '19:30',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Saturday',
      opens: '11:00',
      closes: '13:30',
    },
  ],
  priceRange: '$$',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Servicios HCB Studio',
    itemListElement: siteConfig.serviceCategories.flatMap((category) =>
      category.services.map((service) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: service.name,
          description: service.description,
        },
        price: service.price.replace(/[^\d]/g, ''),
        priceCurrency: 'CLP',
      })),
    ),
  },
};
