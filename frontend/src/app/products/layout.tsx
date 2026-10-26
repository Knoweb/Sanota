import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Industrial Machinery & Automation Systems | Sanota Global',
  description:
    'Custom PLC SCADA control panel assembly, industrial motor speed and conveyor automation controller, smart manufacturing data acquisition dashboards, and precision machinery.',
  keywords: [
    'custom PLC SCADA control panel assembly',
    'industrial motor speed and conveyor automation controller',
    'smart manufacturing data acquisition dashboard development',
    'factory IIoT predictive maintenance sensors integration',
    'custom industrial machinery',
    'special-purpose machines',
    'automated material handling systems'
  ],
  alternates: {
    canonical: 'https://www.sanotaglobal.com/products',
    languages: {
      'en': 'https://www.sanotaglobal.com/products',
      'de': 'https://www.sanotaglobal.com/de/ausbildungssysteme',
      'x-default': 'https://www.sanotaglobal.com/products',
    },
  },
  openGraph: {
    title: 'Industrial Machinery & Automation Systems | Sanota Global',
    description:
      'Engineered products, special-purpose machinery, custom automation stations, and data logging dashboards for evolving factories.',
    url: 'https://www.sanotaglobal.com/products',
    type: 'website',
  },
};

const productsCatalogSchema = {
  '@context': 'https://schema.org',
  '@type': 'OfferCatalog',
  '@id': 'https://www.sanotaglobal.com/products#catalog',
  name: 'Sanota Industrial Machinery & Automation Systems Catalog',
  itemListElement: [
    {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Product',
        name: 'Custom PLC SCADA Control Panel Assembly',
        description:
          'Engineered custom control panels with Siemens, Omron, or Allen-Bradley PLCs, touchscreen HMIs, and SCADA connectivity.',
      },
    },
    {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Product',
        name: 'Industrial Motor Speed and Conveyor Automation Controller',
        description:
          'Variable frequency drive (VFD) integrated motor speed controllers, automated conveyor synchronization, and material handling systems.',
      },
    },
    {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Product',
        name: 'Smart Manufacturing Data Acquisition Dashboard Development',
        description:
          'Real-time telemetry and IoT data logging platforms collecting machine cycle time, production yield, and energy metrics.',
      },
    },
    {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Product',
        name: 'Factory IIoT Predictive Maintenance Sensors Integration',
        description:
          'Plug-and-play vibration, bearing temperature, and motor current monitoring sensor networks with automated failure alerts.',
      },
    },
  ],
};

const productsFaqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What PLC brands and fieldbus protocols does Sanota support for custom control panel assembly?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sanota builds custom PLC SCADA control panel assemblies using leading global automation brands including Siemens, Allen-Bradley (Rockwell), Mitsubishi, Schneider Electric, and Omron. We support industrial communications including Profinet, Modbus TCP/RTU, EtherNet/IP, and MQTT for cloud IIoT.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do industrial motor speed and conveyor automation controllers improve throughput?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Our conveyor controllers integrate variable frequency drives (VFDs) and optical/proximity sensors to dynamically adjust line speeds, synchronize multi-stage transfer points, eliminate product bottlenecks, and reduce mechanical shock on conveyor belts and gearboxes.',
      },
    },
    {
      '@type': 'Question',
      name: 'What data is gathered by smart manufacturing data acquisition dashboards?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sanota’s data acquisition dashboards collect real-time machine run-time, overall equipment effectiveness (OEE), cycle counts, downtime root causes, ambient temperature, humidity, and energy consumption, presented on responsive web and mobile displays with exportable audit reports.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can Sanota manufacture special-purpose machinery tailored to custom factory footprints?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Every special-purpose machine and automation station is engineered to fit your specific factory layout, throughput targets, and worker safety requirements, from 3D CAD modeling and precision machining to electrical wiring and on-site commissioning.',
      },
    },
  ],
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productsCatalogSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productsFaqSchema) }}
      />
      {children}
    </>
  );
}
