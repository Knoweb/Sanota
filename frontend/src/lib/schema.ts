export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': ['Organization', 'LocalBusiness'],
  '@id': 'https://www.sanotaglobal.com/#org',
  name: 'Sanota',
  legalName: 'Sanota (Private) Limited',
  alternateName: ['Sanota Global', 'Sanota Pvt Ltd', 'Sanota_lk'],
  url: 'https://www.sanotaglobal.com/',
  logo: 'https://www.sanotaglobal.com/lg.png',
  image: 'https://www.sanotaglobal.com/sanota.png',
  description:
    'Sri Lankan industrial engineering and automation company: custom machinery, PLC/HMI/IoT integration, machine retrofits, tea automation, and AMC since 2010.',
  foundingDate: '2010',
  founder: {
    '@type': 'Person',
    name: 'Sahan C. Ranasinghe',
    alumniOf: 'University of Moratuwa',
    jobTitle: 'Principal Engineer & Founder',
  },
  identifier: 'PV 74540',
  telephone: '+94740709989',
  email: 'info@sanotaglobal.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '441/2C Wackwella Road',
    addressLocality: 'Galle',
    postalCode: '80000',
    addressRegion: 'Southern Province',
    addressCountry: 'LK',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 6.0535,
    longitude: 80.221,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:30',
      closes: '17:30',
    },
  ],
  areaServed: [
    { '@type': 'Country', name: 'Sri Lanka' },
    { '@type': 'Country', name: 'Germany' },
    { '@type': 'Country', name: 'United Arab Emirates' },
    { '@type': 'Country', name: 'Japan' },
    { '@type': 'AdministrativeArea', name: 'Global' },
  ],
  knowsAbout: [
    'Industrial automation',
    'PLC programming',
    'Machine retrofit',
    'Obsolete PLC panel replacement',
    'Tea withering control',
    'Fluidized bed tea dryer retrofit',
    'Greenhouse climate control',
    'Commercial smart fertigation',
    'Smart Drain IoT flood monitoring',
    'SCADA dashboard development',
    'Special purpose machinery',
    'Machinery AMC',
  ],
  sameAs: [
    'https://www.facebook.com/SanotaPrivateLimited',
    'https://www.linkedin.com/company/sanotalk',
    'https://www.instagram.com/sanota_lk/',
  ],
  contactPoint: [
    {
      '@type': 'ContactPoint',
      telephone: '+94 740 70 99 89',
      contactType: 'technical support and sales',
      email: 'info@sanotaglobal.com',
      availableLanguage: ['English', 'German', 'Spanish', 'Japanese', 'Arabic'],
    },
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
  url: 'https://www.sanotaglobal.com/',
  name: 'Sanota',
  alternateName: 'Sanota Global',
  description: 'Industrial Automation, Custom Machinery & Smart Systems in Sri Lanka',
  publisher: {
    '@type': 'Organization',
    '@id': 'https://www.sanotaglobal.com/#org',
  },
};
