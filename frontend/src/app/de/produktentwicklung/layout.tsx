import { Metadata } from 'next';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Mechatronische Produktentwicklung & Prototypenbau | Sanota',
  description:
    'Von der Idee zum fertigen Produkt: Ingenieurdienstleistungen für Mechatronik, Hardware- und Softwareentwicklung, Prototypenbau und Serienreife.',
  keywords: [
    'Kundenspezifische Produktentwicklung',
    'Prototypenbau & Pilotanlagen',
    'Mechatronische Produktentwicklung',
    'Elektronikentwicklung & Embedded Systems',
    'Sondermaschinenbau & Prototypen',
    'Hardware- und Softwareentwicklung',
    'Serienreife Entwicklung'
  ],
  alternates: {
    canonical: 'https://www.sanotaglobal.com/de/produktentwicklung',
  },
  openGraph: {
    title: 'Mechatronische Produktentwicklung & Prototypenbau | Sanota',
    description:
      'Ganzheitliche Ingenieurdienstleistungen für Startups, Mittelstand und Industrieunternehmen.',
    url: 'https://www.sanotaglobal.com/de/produktentwicklung',
    type: 'website',
    locale: 'de_DE',
  },
};

const devSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Mechatronische Produktentwicklung & Prototypenbau',
  provider: {
    '@type': 'Organization',
    name: 'Sanota Global',
    url: 'https://www.sanotaglobal.com',
  },
  serviceType: 'R&D Mechatronics & Prototyping',
  areaServed: ['DE', 'AT', 'CH'],
  description:
    'Ingenieurdienstleistungen von der Machbarkeit über den Prototypenbau bis zur Serienreife für Mechatronik, Embedded Systems und Sondermaschinen.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Script
        id="de-dev-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(devSchema) }}
      />
      {children}
    </>
  );
}
