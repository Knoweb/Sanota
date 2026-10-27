import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Industrial Automation & Smart Engineering Solutions',
  description:
    'Advanced tea process automation, automated tea trough withering humidity control, fluidized bed tea dryer retrofits, automated greenhouse climate control, and smart fertigation systems.',
  keywords: [
    'automated tea trough withering humidity control system',
    'fluidized bed tea dryer temperature controller retrofit',
    'smart tea factory automation system vendor',
    'tea processing plant IoT data logging solution',
    'automated greenhouse climate control system cost',
    'commercial smart fertigation dosing system integration',
    'IoT soil moisture and EC monitoring platform for farms',
    'tea factory automation',
    'smart agriculture IoT'
  ],
  alternates: {
    canonical: 'https://www.sanotaglobal.com/industries',
    languages: {
      'en': 'https://www.sanotaglobal.com/industries',
      'de': 'https://www.sanotaglobal.com/de/smarte-landwirtschaft',
      'x-default': 'https://www.sanotaglobal.com/industries',
    },
  },
  openGraph: {
    title: 'Industries | Tea Automation & Smart Agriculture Solutions | Sanota Global',
    description:
      'Engineered automation systems for tea manufacturing, commercial greenhouses, precision agriculture, and modern food processing.',
    url: 'https://www.sanotaglobal.com/industries',
    type: 'website',
  },
};

const industriesServiceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': 'https://www.sanotaglobal.com/industries#service',
  name: 'Tea Process Automation & Smart Agriculture Engineering Solutions',
  serviceType: 'Agricultural Technology & Food Processing Automation',
  provider: {
    '@type': 'Organization',
    '@id': 'https://www.sanotaglobal.com/#organization',
    name: 'Sanota Global',
  },
  areaServed: {
    '@type': 'AdministrativeArea',
    name: 'Global',
  },
  description:
    'Turnkey industrial automation for tea manufacturing factories, commercial automated greenhouse climate control, and smart fertigation dosing systems.',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Tea & Agricultural Automation Offerings',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Automated Tea Trough Withering Humidity Control System',
          description:
            'Automated louver and airflow control systems for tea withering troughs to stabilize moisture removal independent of weather variations.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Fluidized Bed Tea Dryer Temperature Controller Retrofit',
          description:
            'Precision thermal and airflow control retrofit for commercial fluidized bed tea dryers to optimize fuel economy and dry leaf consistency.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Commercial Smart Fertigation Dosing System Integration',
          description:
            'Automated EC and pH monitored fertilizer and irrigation dosing hardware integration for greenhouses and precision farm estates.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'IoT Soil Moisture and EC Monitoring Platform for Farms',
          description:
            'Multi-depth wireless soil sensor networks with real-time web and mobile dashboards for commercial cultivation monitoring.',
        },
      },
    ],
  },
};

const industriesFaqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How does an automated tea trough withering humidity control system improve leaf quality?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sanota’s automated tea trough withering system monitors real-time ambient temperature and humidity, modulating automated louvers and variable-speed fan airflow. This ensures uniform moisture loss across the entire trough bed, preventing overwithered or underwithered leaves regardless of unpredictable weather conditions.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can existing fluidized bed tea dryers be retrofitted with smart temperature controllers?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Sanota provides complete fluidized bed tea dryer retrofit solutions. We install high-precision PID temperature controllers, automated damper actuators, and exhaust humidity sensors directly onto legacy tea dryers to stabilize drying temperatures, reduce firewood/energy waste, and eliminate burnt particles.',
      },
    },
    {
      '@type': 'Question',
      name: 'What components are included in a commercial smart fertigation dosing system integration?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Our commercial fertigation integration combines multi-channel venturi dosing injectors, real-time electrical conductivity (EC) and pH sensors, automated solenoid manifold valves, and PLC automation. Growers can deliver precise nutrient recipes automatically based on soil demand.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the typical ROI for an automated greenhouse climate control system?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Automated greenhouse climate control optimizes temperature, humidity, and venting through sensor-driven motor drives. Commercial growers typically achieve ROI within 12 to 18 months through 25-35% water savings, reduced crop disease, and consistent year-round yields.',
      },
    },
  ],
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(industriesServiceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(industriesFaqSchema) }}
      />
      {children}
    </>
  );
}
