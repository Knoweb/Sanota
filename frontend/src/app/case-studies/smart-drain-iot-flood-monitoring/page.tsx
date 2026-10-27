import { Metadata } from 'next';
import Script from 'next/script';
import SmartDrainClient from '@/app/case-studies/smart-drain-iot-flood-monitoring/SmartDrainClient';

export const metadata: Metadata = {
  title: 'Smart Drain IoT Monitoring Case Study | Sanota',
  description:
    'How Sanota served as the commissioning and industrial IoT partner for the 2025 WIPO Global Award-winning Smart Drain system at Batapola, Ambalangoda, Sri Lanka.',
  alternates: {
    canonical: 'https://www.sanotaglobal.com/case-studies/smart-drain-iot-flood-monitoring',
  },
  openGraph: {
    title: 'Smart Drain IoT Monitoring Case Study | Sanota',
    description:
      'Sanota supported commissioning and IoT integration for the WIPO Global Award 2025 winning Smart Drain system, chosen from 780 applications across 95 countries.',
    url: 'https://www.sanotaglobal.com/case-studies/smart-drain-iot-flood-monitoring',
    type: 'article',
  },
};

const caseStudySchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      '@id': 'https://www.sanotaglobal.com/case-studies/smart-drain-iot-flood-monitoring#article',
      isPartOf: {
        '@type': 'WebSite',
        '@id': 'https://www.sanotaglobal.com/#website',
        name: 'Sanota',
        url: 'https://www.sanotaglobal.com/',
      },
      headline: 'Smart Drain: Commissioning & IoT for a WIPO Global Award-Winning Flood Monitoring Solution',
      description:
        'Technical case study detailing Sanota’s role as the commissioning and IoT technology partner for the Smart Drain project in Batapola, Ambalangoda, Sri Lanka.',
      url: 'https://www.sanotaglobal.com/case-studies/smart-drain-iot-flood-monitoring',
      author: {
        '@type': 'Organization',
        '@id': 'https://www.sanotaglobal.com/#org',
        name: 'Sanota',
      },
      publisher: {
        '@type': 'Organization',
        '@id': 'https://www.sanotaglobal.com/#org',
      },
      datePublished: '2025-07-15',
      dateModified: '2026-10-27',
      about: [
        { '@type': 'Thing', name: 'IoT Telemetry' },
        { '@type': 'Thing', name: 'Flood Monitoring' },
        { '@type': 'Thing', name: 'WIPO Global Awards 2025' },
        { '@type': 'Thing', name: 'Industrial Commissioning' },
      ],
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.sanotaglobal.com/' },
        { '@type': 'ListItem', position: 2, name: 'Case Studies', item: 'https://www.sanotaglobal.com/media' },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Smart Drain IoT Monitoring',
          item: 'https://www.sanotaglobal.com/case-studies/smart-drain-iot-flood-monitoring',
        },
      ],
    },
  ],
};

export default function Page() {
  return (
    <>
      <Script
        id="smart-drain-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(caseStudySchema) }}
      />
      <SmartDrainClient />
    </>
  );
}
