import { Metadata } from 'next';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Smart Agriculture & Gewächshaus-Automatisierung | Sanota',
  description:
    'Smarte Sensorik, automatische Bewässerung, präzise Fertigation und IoT-Umweltmonitoring für die moderne gewerbliche Präzisionslandwirtschaft und Gewächshäuser.',
  keywords: [
    'Smarte Landwirtschaft & AgriTech',
    'Intelligente Gewächshaussteuerung',
    'Automatische Bewässerung & Fertigation',
    'Agrar-IoT & Umweltmonitoring',
    'Präzisionslandwirtschaft Systeme',
    'Hydrokultur & Vertikales Gärtnern'
  ],
  alternates: {
    canonical: 'https://www.sanotaglobal.com/de/smarte-landwirtschaft',
  },
  openGraph: {
    title: 'Smart Agriculture & Gewächshaus-Automatisierung | Sanota',
    description:
      'Integrierte Umwelt- und Fertigationsautomatisierung für maximale Erträge und nachhaltige Ressourcennutzung.',
    url: 'https://www.sanotaglobal.com/de/smarte-landwirtschaft',
    type: 'website',
    locale: 'de_DE',
  },
};

const agriSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Smart Agriculture & Gewächshaus-Automatisierung',
  provider: {
    '@type': 'Organization',
    name: 'Sanota Global',
    url: 'https://www.sanotaglobal.com',
  },
  serviceType: 'Smart AgTech & Climate Control Systems',
  areaServed: ['DE', 'AT', 'CH'],
  description:
    'Planung und Installation von automatischen Bewässerungs-, Fertigations- und Gewächshausklimasteuerungen mit IoT-Monitoring.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Script
        id="de-agri-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(agriSchema) }}
      />
      {children}
    </>
  );
}
