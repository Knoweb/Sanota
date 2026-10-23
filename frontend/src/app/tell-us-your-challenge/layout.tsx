import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tell Us Your Challenge | Engineering Solution Assessment | Sanota Global',
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
    title: 'Tell Us Your Challenge | Engineering Solution Assessment | Sanota Global',
    description:
      'Submit your operational challenge and get direct technical feedback from Sanota engineering specialists.',
    url: 'https://www.sanotaglobal.com/tell-us-your-challenge',
    type: 'website',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
