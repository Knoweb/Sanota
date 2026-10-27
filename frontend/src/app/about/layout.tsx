import { Metadata } from 'next';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'About Sanota: Sri Lankan Engineering Company Since 2010',
  description:
    'Sanota (Pvt) Ltd, founded in 2010 by engineer Sahan C. Ranasinghe, designs, automates and maintains machinery and smart systems for Sri Lankan industry.',
  keywords: [
    'about Sanota',
    'sanota engineering company',
    'sanota pvt ltd',
    'engineering company galle',
    'Sahan C Ranasinghe',
    'industrial automation engineering company',
  ],
  alternates: {
    canonical: 'https://www.sanotaglobal.com/about',
  },
  openGraph: {
    title: 'About Sanota: Sri Lankan Engineering Company Since 2010',
    description:
      'Sanota (Pvt) Ltd, founded in 2010 by engineer Sahan C. Ranasinghe, designs, automates and maintains machinery and smart systems for Sri Lankan industry.',
    url: 'https://www.sanotaglobal.com/about',
    type: 'website',
  },
};

const aboutPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  name: 'About Sanota (Private) Limited',
  url: 'https://www.sanotaglobal.com/about',
  description:
    'Sanota (Private) Limited (PV 74540) is a Sri Lankan industrial engineering and automation company founded in 2010 by engineer Sahan C. Ranasinghe.',
  mainEntity: {
    '@type': 'Organization',
    '@id': 'https://www.sanotaglobal.com/#org',
    name: 'Sanota',
    legalName: 'Sanota (Private) Limited',
    url: 'https://www.sanotaglobal.com',
    logo: 'https://www.sanotaglobal.com/lg.png',
    founder: {
      '@type': 'Person',
      name: 'Sahan C. Ranasinghe',
      alumniOf: 'University of Moratuwa',
    },
    sameAs: [
      'https://www.facebook.com/SanotaPrivateLimited',
      'https://www.linkedin.com/company/sanotalk',
      'https://www.instagram.com/sanota_lk/',
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
