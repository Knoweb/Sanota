import { Metadata } from 'next';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Didaktische Schulungssysteme & SPS Panels | Sanota Global',
  description:
    'Interaktive Lern- und Schulungspanels für Automatisierungstechnik, Mechatronik und Industrie 4.0 in der Ausbildung für Berufsschulen, Technikerakademien und Universitäten.',
  keywords: [
    'SPS Schulungssysteme & Trainingsboards',
    'Ausbildungssysteme Automatisierungstechnik',
    'Laborprüfstände Mechatronik',
    'Didaktische Steuerungs- und Regelungstechnik',
    'Elektronik & Elektrotechnik Ausbildungstafeln',
    'Trainingssysteme für Industrie 4.0'
  ],
  alternates: {
    canonical: 'https://www.sanotaglobal.com/de/ausbildungssysteme',
  },
  openGraph: {
    title: 'Didaktische Schulungssysteme & SPS Panels | Sanota Global',
    description:
      'Praxisorientierte Trainingsboards und modulare Laborprüfstände für die mechatronische und elektrotechnische Ausbildung.',
    url: 'https://www.sanotaglobal.com/de/ausbildungssysteme',
    type: 'website',
    locale: 'de_DE',
  },
};

const educationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Didaktische Schulungssysteme & SPS Ausbildungspanels',
  provider: {
    '@type': 'Organization',
    name: 'Sanota Global',
    url: 'https://www.sanotaglobal.com',
  },
  serviceType: 'Educational Hardware & Training Systems',
  areaServed: ['DE', 'AT', 'CH'],
  description:
    'Entwicklung und Bau didaktischer Trainingssysteme, SPS-Übungsboards und Mechatronik-Prüfstände für Berufsschulen und Weiterbildungszentren.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Script
        id="de-education-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(educationSchema) }}
      />
      {children}
    </>
  );
}
