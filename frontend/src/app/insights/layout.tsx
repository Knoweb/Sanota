import { Metadata } from 'next';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Engineering Insights & Technical Knowledge Base',
  description:
    'Explore technical guides, engineering insights, and practical frameworks on industrial automation, tea process optimization, machinery retrofitting, and smart agriculture IoT.',
  keywords: [
    'industrial automation engineering insights',
    'tea factory automation case study',
    'machinery modernization practical guide',
    'smart agriculture fertigation engineering',
    'industrial IoT dashboard integration'
  ],
  alternates: {
    canonical: 'https://www.sanotaglobal.com/insights',
  },
  openGraph: {
    title: 'Engineering Insights & Technical Knowledge Base | Sanota Global',
    description:
      'Practical engineering knowledge on automation, retrofitting, tea processing, and industrial IoT from Sanota Global engineers.',
    url: 'https://www.sanotaglobal.com/insights',
    type: 'website',
  },
};

const insightsPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Sanota Engineering Insights & Technical Articles',
  url: 'https://www.sanotaglobal.com/insights',
  description:
    'A curated knowledge base of industrial automation, smart agriculture, IoT, and machinery modernization articles.',
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
        id="insights-collection-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(insightsPageSchema) }}
      />
      {children}
    </>
  );
}
