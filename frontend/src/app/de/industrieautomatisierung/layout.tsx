import { Metadata } from 'next';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Industrieautomatisierung & SPS Steuerung | Sanota Global',
  description:
    'Maßgeschneiderte Lösungen für Industrieautomatisierung, SPS-Programmierung, Schaltschrankbau und Maschinenmodernisierung für den modernen Fertigungsbetrieb.',
  keywords: [
    'Industrieautomatisierung Lösungen',
    'SPS Programmierung & Steuerungstechnik',
    'Schaltschrankbau & Anlagensteuerung',
    'Maschinenmodernisierung & Retrofit',
    'Sondermaschinenbau'
  ],
  alternates: {
    canonical: 'https://www.sanotaglobal.com/de/industrieautomatisierung',
  },
};

const automationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Industrieautomatisierung & SPS Steuerung',
  provider: {
    '@type': 'Organization',
    name: 'Sanota Global',
    url: 'https://www.sanotaglobal.com',
  },
  serviceType: 'Industrial Automation & PLC Engineering',
  areaServed: ['DE', 'AT', 'CH'],
  description:
    'SPS-Programmierung, Schaltschrankbau und Maschinenmodernisierung nach DIN EN 61439 und europäischen Sicherheitsstandards.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Script
        id="de-auto-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(automationSchema) }}
      />
      {children}
    </>
  );
}
