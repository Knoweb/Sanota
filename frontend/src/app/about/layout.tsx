import { Metadata } from 'next';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'About Sanota Global | Integrated Engineering & Industrial Automation Partner',
  description:
    'Learn about Sanota Global, a multidisciplinary engineering technology partner delivering custom machinery, industrial automation, tea process automation, and smart agriculture systems.',
  keywords: [
    'about Sanota Global',
    'industrial automation engineering company',
    'custom machinery manufacturer sri lanka',
    'tea factory automation engineering',
    'smart agriculture technology partner'
  ],
  alternates: {
    canonical: 'https://www.sanotaglobal.com/about',
  },
  openGraph: {
    title: 'About Sanota Global | Integrated Engineering & Industrial Automation Partner',
    description:
      'Sanota combines mechanical engineering, automation, embedded systems, and industrial software to modernize manufacturing and agriculture.',
    url: 'https://www.sanotaglobal.com/about',
    type: 'website',
  },
};

const aboutPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  name: 'About Sanota Global',
  url: 'https://www.sanotaglobal.com/about',
  description:
    'Sanota is an integrated engineering technology partner providing industrial automation, machinery modernization, smart agriculture, and IoT solutions.',
  mainEntity: {
    '@type': 'Organization',
    name: 'Sanota Global',
    url: 'https://www.sanotaglobal.com',
    logo: 'https://www.sanotaglobal.com/sanota.png',
    sameAs: [
      'https://www.linkedin.com/company/sanotalk/',
      'https://web.facebook.com/SanotaPrivateLimited/',
      'https://www.instagram.com/sanota_lk/'
    ],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Script
        id="about-page-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageSchema) }}
      />
      {children}
    </>
  );
}
