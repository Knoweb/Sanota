import { Metadata } from 'next';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Completed Work, Case Studies & Project Stories',
  description:
    'Explore completed engineering projects, industrial automation case studies, machinery installations, video demonstrations, and company updates from Sanota Global.',
  keywords: [
    'industrial automation projects sri lanka',
    'machinery engineering portfolio',
    'tea factory automation case study',
    'smart agriculture installations'
  ],
  alternates: {
    canonical: 'https://www.sanotaglobal.com/media',
  },
  openGraph: {
    title: 'Media, Completed Work & Project Stories | Sanota Global',
    description:
      'Explore completed engineering projects, machinery installations, and project stories from Sanota Global.',
    url: 'https://www.sanotaglobal.com/media',
    type: 'website',
  },
};

const mediaPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Sanota Global Completed Projects & Media',
  url: 'https://www.sanotaglobal.com/media',
  description:
    'Case studies, completed engineering projects, video demonstrations, and photo galleries of Sanota Global implementations.',
  publisher: {
    '@type': 'Organization',
    name: 'Sanota Global',
    url: 'https://www.sanotaglobal.com',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Script
        id="media-collection-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(mediaPageSchema) }}
      />
      {children}
    </>
  );
}
