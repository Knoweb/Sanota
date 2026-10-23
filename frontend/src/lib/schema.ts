export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': 'https://www.sanotaglobal.com/#organization',
  name: 'Sanota Global',
  alternateName: 'Sanota',
  legalName: 'Sanota (Pvt) Ltd',
  url: 'https://www.sanotaglobal.com',
  logo: 'https://www.sanotaglobal.com/sanota.png',
  image: 'https://www.sanotaglobal.com/sanota.png',
  description:
    'Sanota is an integrated engineering technology partner delivering industrial machinery, automation, smart agriculture systems, tea processing automation, and IoT solutions.',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Colombo',
    addressCountry: 'LK',
  },
  contactPoint: [
    {
      '@type': 'ContactPoint',
      telephone: '+94 740 70 99 89',
      contactType: 'technical support and sales',
      email: 'info@sanotaglobal.com',
      availableLanguage: ['English', 'German', 'Spanish', 'Japanese', 'Arabic'],
    },
  ],
  areaServed: [
    { '@type': 'Country', name: 'Sri Lanka' },
    { '@type': 'Country', name: 'Germany' },
    { '@type': 'Country', name: 'United Arab Emirates' },
    { '@type': 'Country', name: 'Japan' },
    { '@type': 'AdministrativeArea', name: 'Global' },
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Sanota Engineering Capabilities & Solutions',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Tea Process Automation Systems',
          description:
            'Automated tea trough withering humidity control, fluidized bed tea dryer retrofit, and factory IoT data logging.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Smart Agriculture & Agri-IoT Integration',
          description:
            'Automated greenhouse climate control, commercial smart fertigation dosing systems, and IoT soil moisture analytics.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Machinery Retrofitting & Modernization',
          description:
            'Obsolete PLC panel replacement, custom industrial machinery retrofitting, and factory machine electrical modernization.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Industrial Automation & SCADA Control Panels',
          description:
            'Custom PLC SCADA control panel assembly, motor speed and conveyor automation, and IIoT predictive maintenance sensors.',
        },
      },
    ],
  },
};

export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': 'https://www.sanotaglobal.com/#website',
  url: 'https://www.sanotaglobal.com',
  name: 'Sanota Global',
  description: 'Integrated Engineering for Evolving Industries',
  publisher: {
    '@type': 'Organization',
    '@id': 'https://www.sanotaglobal.com/#organization',
    name: 'Sanota Global',
  },
};
