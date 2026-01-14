export const generateStructuredData = () => {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': 'https://glaswerkelements.de/#organization',
        name: 'Glaswerk Elements',
        url: 'https://glaswerkelements.de',
        logo: {
          '@type': 'ImageObject',
          url: 'https://glaswerkelements.de/og-image.jpg',
        },
        contactPoint: {
          '@type': 'ContactPoint',
          contactType: 'Kundenservice',
          availableLanguage: ['de'],
        },
      },
      {
        '@type': 'WebSite',
        '@id': 'https://glaswerkelements.de/#website',
        url: 'https://glaswerkelements.de',
        name: 'Glaswerk Elements',
        publisher: {
          '@id': 'https://glaswerkelements.de/#organization',
        },
        inLanguage: 'de',
      },
      {
        '@type': 'WebPage',
        '@id': 'https://glaswerkelements.de/#webpage',
        url: 'https://glaswerkelements.de',
        name: 'Glaswerk Elements - Moderne Fenster, Türen & Überdachungen',
        description:
          'Premium Fenster, Haustüren und Überdachungen aus Glas & Aluminium. Energieeffizient, modern und individuell.',
        isPartOf: {
          '@id': 'https://glaswerkelements.de/#website',
        },
        inLanguage: 'de',
      },
      {
        '@type': 'BreadcrumbList',
        '@id': 'https://glaswerkelements.de/#breadcrumb',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: 'https://glaswerkelements.de',
          },
        ],
      },
      {
        '@type': 'Service',
        serviceType: 'Fenster und Türenmontage',
        provider: {
          '@id': 'https://glaswerkelements.de/#organization',
        },
        areaServed: {
          '@type': 'Country',
          name: 'Deutschland',
        },
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Bauelemente Services',
          itemListElement: [
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Kostenlose Beratung',
                description: 'Individuelle Beratung für Fenster, Türen und Überdachungen',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Professionelle Montage',
                description: 'Fachgerechte Installation durch erfahrene Monteure',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Wartung und Service',
                description: 'Regelmäßige Wartung und Reparatur von Bauelementen',
              },
            },
          ],
        },
      },
    ],
  };
};

export const seoConfig = {
  defaultTitle: 'Glaswerk Elements - Moderne Fenster, Türen & Überdachungen aus Glas & Aluminium',
  defaultDescription:
    'Premium Fenster, Haustüren und Überdachungen aus Glas & Aluminium. Energieeffizient, modern und individuell. Kostenlose Beratung & Montage deutschlandweit. Jetzt anfragen!',
  siteUrl: 'https://glaswerkelements.de',
  defaultImage: 'https://glaswerkelements.de/og-image.jpg',
  twitterHandle: '@glaswerk_elements',
};
