import { Metadata } from 'next';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Industrielles IoT & Prozessüberwachung | Sanota Global',
  description:
    'IIoT-Plattformen, vorausschauende Wartung (Predictive Maintenance) und Sensorik-Integration für Industrie 4.0 und moderne Fertigungsbetriebe.',
  keywords: [
    'Industrielles Internet der Dinge (IIoT)',
    'Vorausschauende Wartung (Predictive Maintenance)',
    'Fernüberwachung & Zustandserfassung',
    'IoT-Sensorik & Gateways',
    'OPC UA MQTT Modbus'
  ],
  alternates: {
    canonical: 'https://www.sanotaglobal.com/de/iiot-loesungen',
  },
};

const iiotSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Industrielles IoT & Prozessüberwachung',
  provider: {
    '@type': 'Organization',
    name: 'Sanota Global',
    url: 'https://www.sanotaglobal.com',
  },
  serviceType: 'Industrial IoT & Predictive Maintenance',
  areaServed: ['DE', 'AT', 'CH'],
  description:
    'Sensorintegration, Maschinendatenerfassung und predictive Instandhaltungslösungen für Industrie 4.0.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Script
        id="de-iiot-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(iiotSchema) }}
      />
      {children}
    </>
  );
}
