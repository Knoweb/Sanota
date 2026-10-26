import { Metadata } from 'next';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Tell Us Your Challenge | Engineering Assessment & Consultation | Sanota Global',
  description:
    'Submit your machinery, automation, process control, or modernization requirement. Sanota provides technical evaluation, concept feasibility, and engineering proposals.',
  keywords: [
    'request quote for industrial machine retrofitting',
    'custom industrial machinery retrofitting contractor',
    'obsolete plc panel replacement service for factories',
    'engineering challenge assessment',
    'Sanota Global'
  ],
  alternates: {
    canonical: 'https://www.sanotaglobal.com/tell-us-your-challenge',
  },
  openGraph: {
    title: 'Tell Us Your Challenge | Engineering Assessment & Consultation | Sanota Global',
    description:
      'Submit your operational challenge and get direct technical feedback from Sanota engineering specialists.',
    url: 'https://www.sanotaglobal.com/tell-us-your-challenge',
    type: 'website',
  },
};

const challengeSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Submit Your Engineering Challenge',
  url: 'https://www.sanotaglobal.com/tell-us-your-challenge',
  description:
    'Submit your industrial automation, machinery modernization, or IoT challenge for expert assessment and feasibility analysis.',
  mainEntity: {
    '@type': 'Organization',
    name: 'Sanota Global',
    url: 'https://www.sanotaglobal.com',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+94 740 70 99 89',
      contactType: 'technical support',
      email: 'info@sanotaglobal.com',
    },
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Script
        id="challenge-page-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(challengeSchema) }}
      />
      {children}
    </>
  );
}
