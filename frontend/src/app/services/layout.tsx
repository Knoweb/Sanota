import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Engineering Services & Machinery Retrofitting | Sanota Global',
  description:
    'Custom industrial machinery retrofitting contractor, obsolete PLC panel replacement service, custom PLC SCADA control panel assembly, and electrical modernization for global factories.',
  keywords: [
    'custom industrial machinery retrofitting contractor',
    'obsolete plc panel replacement service for factories',
    'legacy factory machine electrical upgrade and modernization',
    'custom PLC SCADA control panel assembly',
    'industrial automation system integrator sri lanka',
    'factory IIoT predictive maintenance sensors integration',
    'engineering consultation and problem analysis'
  ],
  alternates: {
    canonical: 'https://www.sanotaglobal.com/services',
    languages: {
      'en': 'https://www.sanotaglobal.com/services',
      'de': 'https://www.sanotaglobal.com/de/industrieautomatisierung-iiot',
      'x-default': 'https://www.sanotaglobal.com/services',
    },
  },
  openGraph: {
    title: 'Engineering Services & Machinery Retrofitting | Sanota Global',
    description:
      'Turnkey industrial automation, obsolete PLC replacement, custom control panel assembly, and legacy machine electrical modernization.',
    url: 'https://www.sanotaglobal.com/services',
    type: 'website',
  },
};

const servicesSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': 'https://www.sanotaglobal.com/services#service',
  name: 'Custom Industrial Machinery Retrofitting & PLC Automation Services',
  serviceType: 'Industrial Engineering, Automation & Retrofitting',
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
    'Turnkey engineering services for custom industrial machinery retrofitting, obsolete PLC panel replacement, custom PLC SCADA control panel assembly, and factory IIoT predictive maintenance sensor integration.',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Core Industrial Automation Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Obsolete PLC Panel Replacement Service for Factories',
          description:
            'Replacement of failing or unsupported legacy PLC hardware with modern industrial controllers, touch HMI screens, and cloud diagnostics without disrupting mechanical assets.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Custom Industrial Machinery Retrofitting Contractor',
          description:
            'Comprehensive machinery refurbishment, mechanical modifications, control automation retrofits, and electrical rewiring to extend production equipment lifespan.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Custom PLC SCADA Control Panel Assembly',
          description:
            'Engineering design, assembly, wiring, and commissioning of custom PLC and SCADA control panels adhering to international industrial standards.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Factory IIoT Predictive Maintenance Sensors Integration',
          description:
            'Retrofit vibration, temperature, current, and pressure sensors onto factory machines with connected dashboards to eliminate unplanned downtime.',
        },
      },
    ],
  },
};

const servicesFaqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Can Sanota replace obsolete PLC panels without replacing mechanical machinery?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Sanota specializes in obsolete PLC panel replacement and control system retrofitting. We upgrade legacy, discontinued, or failing PLCs (such as older Siemens, Omron, Mitsubishi, and Allen-Bradley units) with modern controllers and touch HMIs while preserving your existing mechanical machinery.',
      },
    },
    {
      '@type': 'Question',
      name: 'What services does a custom industrial machinery retrofitting contractor provide?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'As an industrial machinery retrofitting contractor, Sanota modernizes existing factory production lines by replacing obsolete electrical controls, rewiring power panels, integrating modern variable frequency drives (VFDs), adding automated safety interlocks, and installing IIoT monitoring sensors.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can Sanota assemble custom PLC SCADA control panels for international standards?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Sanota designs, fabricates, and tests custom PLC and SCADA control panels adhering to international electrical and safety standards, featuring intuitive HMI touchscreen interfaces, industrial fieldbus protocols (Modbus, Profinet, EtherNet/IP), and cloud IoT integration.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does predictive maintenance IIoT sensor integration prevent factory downtime?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'By retrofitting industrial vibration, temperature, current, and pressure sensors directly onto existing rotating assets and production lines, Sanota’s IIoT platforms detect mechanical degradation and electrical anomalies before catastrophic failure occurs, reducing unplanned downtime by up to 45%.',
      },
    },
  ],
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesFaqSchema) }}
      />
      {children}
    </>
  );
}
