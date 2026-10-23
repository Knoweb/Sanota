import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Engineering Team | Request a Project Quote | Sanota Global',
  description:
    'Contact Sanota about an operational challenge, machine modernization, industrial automation project, smart agriculture, or long-term AMC technical support.',
  keywords: [
    'industrial automation system integrator sri lanka',
    'custom industrial machinery retrofitting contractor',
    'request quote for industrial machine retrofitting',
    'contact Sanota Global',
    'engineering consultation'
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

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
