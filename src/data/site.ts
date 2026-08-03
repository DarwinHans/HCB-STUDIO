export const siteConfig = {
  siteUrl: 'https://hcbstudio.cl',
  brand: {
    name: 'HCB Studio',
    shortName: 'HCB',
    tagline: 'Barbería premium en Valdivia',
    logo: {
      src: '/logo.webp',
      alt: 'HCB Studio',
      width: 200,
      height: 200,
    },
  },
  seo: {
    title: 'HCB Studio Valdivia · Barbería Premium · Cortes y Perfilado de Barba',
    description:
      'Barbería premium en Valdivia. Cortes de cabello, perfilado de barba y experiencia personalizada. Aníbal Pinto 1962. Reserva tu hora en HCB Studio.',
    keywords: [
      'barbería valdivia',
      'barbería en valdivia',
      'barbero valdivia',
      'corte de cabello hombre valdivia',
      'perfilado de barba valdivia',
      'barbería premium valdivia',
    ],
    ogImage: '/og-image.png',
  },
  bookingUrl: 'https://hcbstudio.site.agendapro.com/cl/sucursal/135553',
  instagramUrl: 'https://www.instagram.com/hcb_studio/',
  instagramHandle: '@hcb_studio',
  phone: '+56 9 8642 6840',
  whatsappPhone: '+56986426840',
  location: {
    streetAddress: 'Anibal Pinto 1962',
    addressLocality: 'Valdivia',
    addressRegion: 'Los Rios',
    postalCode: '5111002',
    addressCountry: 'CL',
    mapEmbedUrl:
      'https://www.google.com/maps?q=Anibal%20Pinto%201962%2C%20Valdivia%2C%20Chile&output=embed',
  },
  hours: [
    'Lunes a viernes: 10:00 - 19:30',
    'Sábado: 11:00 - 13:30',
    'Domingo: Cerrado',
  ],
  nav: [
    { label: 'Nosotros', href: '#nosotros' },
    { label: 'Servicios', href: '#servicios' },
    { label: 'Equipo', href: '#equipo' },
    { label: 'Galería', href: '#galeria' },
    { label: 'Testimonios', href: '#testimonios' },
    { label: 'Ubicación', href: '#ubicacion' },
  ],
  hero: {
    eyebrow: 'HCB Studio · Barbería Premium',
    title: ['Barbería', 'en Valdivia'],
    description:
      'Servicio personalizado que entrega seguridad y confianza a través de un buen corte de cabello, perfilado de barba y asesoramiento de imagen masculina.',
    primaryCta: 'Reserva tu hora',
    secondaryCta: 'Ver servicios',
    backgroundImage:
      'https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&w=1800&q=80',
  },
  about: {
    kicker: 'Nosotros · La práctica hace la perfección',
    title: 'Barbería en Valdivia',
    lead:
      'Nuestra filosofía en HCB Studio es entregar una experiencia única a cada cliente, a través de un servicio de excelencia dedicado minuciosamente.',
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
          price: '$16.000',
          description:
            'Corte de cabello con previo estudio de estructura craneal para estilizar y rejuvenecer tu apariencia.',
          image:
            'https://images.unsplash.com/photo-1517832606299-7ae9b720a186?auto=format&fit=crop&w=1200&q=80',
        },
        {
          name: 'Corte de cabello + ceja',
          duration: '1 hr',
          price: '$18.000',
          description:
            'Corte de cabello con estudio de estructura craneal y perfilado de cejas para un acabado más limpio y definido.',
          image:
            'https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=1200&q=80',
        },
        {
          name: 'Perfilado de corte',
          duration: '30 min',
          price: '$10.000',
          description:
            'Limpieza de contorno de corte de cabello, definiendo terminaciones en patilla y nuca para refrescar tu estilo.',
          image:
            'https://images.unsplash.com/photo-1503951458645-643d53bfd90f?auto=format&fit=crop&w=1200&q=80',
        },
        {
          name: 'Perfilado de corte más perfilado de barba simple',
          duration: '45 min',
          price: '$19.000',
          description:
            'Limpieza de contorno de corte de cabello en patilla y nuca, complementado con perfilado de barba simple realizado con máquinas.',
          image:
            'https://images.unsplash.com/photo-1512690459411-b0d9c4022c48?auto=format&fit=crop&w=1200&q=80',
        },
        {
          name: 'Corte de cabello más perfilado de barba simple',
          duration: '1 hr 30 min',
          price: '$24.000',
          description:
            'Corte de cabello con previo estudio de estructura craneal que ayude a estilizar y rejuvenecer tu apariencia, junto a perfilado de barba simple.',
          image:
            'https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&w=1200&q=80',
        },
        {
          name: 'Corte de cabello más perfilado de barba ritual',
          duration: '2 hrs',
          price: '$29.000',
          description:
            'Corte de cabello con previo estudio de estructura craneal y ritual de barba premium para una experiencia completa de cuidado masculino.',
          image:
            'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&w=1200&q=80',
        },
        {
          name: 'Corte de cabello, perfilado de barba ritual más perfilado de cejas',
          duration: '2 hrs',
          price: '$31.000',
          description:
            'Servicio integral con corte de cabello, perfilado de barba ritual y perfilado de cejas, incluyendo peinado y terminaciones de alto detalle.',
          image:
            'https://images.unsplash.com/photo-1519415943484-9fa1873496d4?auto=format&fit=crop&w=1200&q=80',
        },
        {
          name: 'Corte de cabello, perfilado de barba simple más perfilado de cejas',
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
          name: 'Perfilado de barba simple + ceja',
          duration: '45 min',
          price: '$14.000',
          description:
            'Perfilado de barba simple con máquinas, complementado con perfilado de ceja para un acabado limpio y armonioso.',
          image:
            'https://images.unsplash.com/photo-1512690459411-b0d9c4022c48?auto=format&fit=crop&w=1200&q=80',
        },
        {
          name: 'Perfilado de barba simple',
          duration: '45 min',
          price: '$12.000',
          description:
            'Perfilado de barba simple realizado con máquinas, definido para una apariencia limpia y precisa.',
          image:
            'https://images.unsplash.com/photo-1512690459411-b0d9c4022c48?auto=format&fit=crop&w=1200&q=80',
        },
        {
          name: 'Perfilado de barba ritual + ceja',
          duration: '1 hr',
          price: '$18.000',
          description:
            'Perfilado de barba ritual con toallas calientes, navaja y acabado premium, complementado con perfilado de ceja para una imagen completa.',
          image:
            'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&w=1200&q=80',
        },
        {
          name: 'Perfilado de barba ritual',
          duration: '1 hr',
          price: '$16.000',
          description:
            'Perfilado de barba ritual con toallas calientes, vapor frío y afeitado con navaja para un acabado premium pensado para destacar tus facciones.',
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
    title: ['Tu Barbero', 'en Valdivia'],
    members: [
      {
        name: 'Hernán Castillo',
        bio:
          'Barbero en Valdivia, experto en cortes, perfilado de barba y técnicas de afeitado ritual, transformando cada visita en una experiencia premium de cuidado masculino, resultados que hablan solos.',
        image: '/team/hernan.webp',
        imageAlt: 'Hernán Castillo trabajando en un servicio de barbería',
        instagramHandle: '@hernan_hcb',
        instagramUrl:
          'https://www.instagram.com/hernan_hcb?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGn8Vdg4I0CCBmXEXMC1VPfzvUuOaG2w_Z9vMWUU5_dUt2XpUTGVK_Rj6TnPis_aem_t2JbeB-W24GOIPHfgHkCLw',
      },
    ],
  },
  gallery: {
    kicker: 'Nuestro trabajo',
    title: 'Galería',
    images: [
      { src: '/images/1.webp', alt: 'Corte de cabello masculino en HCB Studio', type: 'image' },
      { src: '/images/2.webp', alt: 'Perfilado de barba premium en Valdivia', type: 'image' },
      { src: '/images/3.webp', alt: 'Detalle de fade y perfilado masculino', type: 'image' },
      { src: '/images/6.webp', alt: 'Ambiente y estilo en HCB Studio', type: 'image' },
      { src: '/images/7.webp', alt: 'Trabajo de barbería premium', type: 'image' },
    ],
  },
  instagram: {
    images: [
      { src: '/images/3.webp', alt: 'Servicio de corte en HCB Studio' },
      { src: '/images/2.webp', alt: 'Perfilado de barba premium en HCB Studio Valdivia' },
      { src: '/team/hernan.webp', alt: 'Hernán Castillo — Barbero HCB Studio' },
    ],
  },
  testimonials: {
    kicker: 'Testimonios',
    title: 'Lo que dicen nuestros clientes',
    items: [
      {
        quote:
          'Excelente barbería. Muy buena atención. Totalmente recomendada.',
        author: 'Felipe Coronado Medina',
      },
      {
        quote:
          'El mejor barbero de Valdivia. Perfecta atención y dedicación. Nada que decir, 10/10.',
        author: 'Antonio Muñoz',
      },
      {
        quote: 'Excelente atención.',
        author: 'Matías Sepúlveda',
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
