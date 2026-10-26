import { Metadata } from 'next';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Contact Engineering Team | Request a Project Quote | Sanota Global',
  description:
    'Contact Sanota about an operational challenge, machine modernization, industrial automation project, smart agriculture, or long-term AMC technical support.',
  keywords: [
    'industrial automation system integrator sri lanka',
    'custom industrial machinery retrofitting contractor',
    'request quote for industrial machine retrofitting',
    'contact Sanota Global',
    'engineering consultation sri lanka'
  ],
  alternates: {
    canonical: 'https://www.sanotaglobal.com/contact',
  },
  openGraph: {
    title: 'Contact Engineering Team | Request a Project Quote | Sanota Global',
    description:
      'Discuss your requirement with Sanota engineers. Custom machinery, automation, IoT monitoring, and technical maintenance.',
    url: 'https://www.sanotaglobal.com/contact',
    type: 'website',
  },
};

const contactPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: 'Contact Sanota Global Engineering Team',
  url: 'https://www.sanotaglobal.com/contact',
  description:
    'Submit an industrial automation inquiry, request a quote for machinery retrofitting, or schedule an engineering consultation.',
  mainEntity: {
    '@type': 'Organization',
    name: 'Sanota Global',
    url: 'https://www.sanotaglobal.com',
    telephone: '+94 740 70 99 89',
    email: 'info@sanotaglobal.com',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Colombo',
      addressCountry: 'LK',
    },
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Script
        id="contact-page-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }}
      />
      {children}
    </>
  );
}
