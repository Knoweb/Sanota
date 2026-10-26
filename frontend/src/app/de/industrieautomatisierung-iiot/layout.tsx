import { Metadata } from 'next';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Industrieautomatisierung & IIoT-Lösungen | Sanota Global',
  description:
    'Maßgeschneiderte Industrieautomatisierung, SPS-Programmierung und IIoT-Lösungen. Optimieren Sie Ihre Produktion mit vorausschauender Wartung und intelligenter Prozesssteuerung.',
  keywords: [
    'Industrieautomatisierung Lösungen',
    'SPS Programmierung & Steuerungstechnik',
    'Schaltschrankbau & Anlagensteuerung',
    'Maschinenmodernisierung & Retrofit',
    'Industrielles Internet der Dinge (IIoT)',
    'Vorausschauende Wartung (Predictive Maintenance)',
    'Fernüberwachung & Zustandserfassung',
    'Sondermaschinenbau',
    'Sanota Global Deutschland'
  ],
  alternates: {
    canonical: 'https://www.sanotaglobal.com/de/industrieautomatisierung-iiot',
    languages: {
      de: 'https://www.sanotaglobal.com/de/industrieautomatisierung-iiot',
      en: 'https://www.sanotaglobal.com/services',
    },
  },
  openGraph: {
    title: 'Industrieautomatisierung & IIoT-Lösungen | Sanota Global',
    description:
      'Effiziente Steuerungstechnik, lückenlose Vernetzung und datengestützte Prozessoptimierung für den modernen Maschinenbau und Fertigungsbetrieb.',
    url: 'https://www.sanotaglobal.com/de/industrieautomatisierung-iiot',
    type: 'website',
    locale: 'de_DE',
  },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Industrieautomatisierung & Industrielles IoT',
  provider: {
    '@type': 'Organization',
    name: 'Sanota Global',
    url: 'https://www.sanotaglobal.com',
  },
  serviceType: 'Industrial Automation & IIoT Solutions',
  areaServed: ['DE', 'AT', 'CH'],
  description:
    'Herstellung und Integration von Automatisierungssystemen, SPS-Programmierung, Schaltschrankbau und IIoT-Lösungen für die Industrie.',
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Welche SPS-Systeme und Steuerungsplattformen unterstützt Sanota?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sanota realisiert herstellerunabhängige SPS-Programmierung und Steuerungstechnik für alle führenden Industriestandards, darunter Siemens (SIMATIC S7-1200/1500, TIA Portal), Schneider Electric, Omron, Beckhoff und Delta. Wir integrieren auch HMI-Visualisierungen und SCADA-Systeme gemäß DIN ISO Normen.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wie läuft eine Maschinenmodernisierung (Retrofit) bei bestehenden Industrieanlagen ab?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Bei einem Retrofit analysieren unsere Ingenieure die bestehende mechanische Substanz und ersetzen abgekündigte Schaltschränke, Relaissteuerungen und veraltete Antriebe durch moderne SPS-Systeme und Frequenzumrichter. Dies senkt Ausfallrisiken um bis zu 85 % bei einem Bruchteil der Kosten einer Neuinvestition.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wie funktioniert die Vorausschauende Wartung (Predictive Maintenance) über IIoT?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Industrielle IoT-Sensoren erfassen Schwingungen, Lagertemperaturen und Motorströme in Echtzeit. Edge-Gateways übertragen die Daten verschlüsselt via MQTT oder OPC UA an ein zentrales Dashboard. Auffälligkeiten und Verschleiß werden erkannt, bevor es zu ungeplanten Produktionsstillständen kommt.',
      },
    },
    {
      '@type': 'Question',
      name: 'Bietet Sanota schlüsselfertigen Schaltschrankbau nach europäischen Sicherheitsnormen an?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja, Sanota fertigt Schaltschränke und Steuerpulte nach internationalen und europäischen Normen (u. a. DIN EN 61439 und CE-Konformität) mit vollständiger Dokumentation, Klemmenplänen und Verdrahtungsprüfungen.',
      },
    },
  ],
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Script
        id="de-service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <Script
        id="de-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {children}
    </>
  );
}
