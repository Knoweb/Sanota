import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Engineering Services & Machinery Retrofitting | Sanota Global',
  description:
    'Custom industrial machinery retrofitting contractor, obsolete PLC panel replacement service, custom PLC SCADA control panel assembly, and electrical modernization for global factories.',
  keywords: [
    'custom industrial machinery retrofitting contractor',
    'obsolete plc panel replacement service for factories',
    'legacy factory machine electrical upgrade and modernization',
    'custom PLC SCADA control panel assembly',
    'industrial automation system integrator sri lanka',
    'factory IIoT predictive maintenance sensors integration',
    'engineering consultation and problem analysis'
  ],
  alternates: {
    canonical: 'https://www.sanotaglobal.com/services',
  },
  openGraph: {
    title: 'Engineering Services & Machinery Retrofitting | Sanota Global',
    description:
      'Turnkey industrial automation, obsolete PLC replacement, custom control panel assembly, and legacy machine electrical modernization.',
    url: 'https://www.sanotaglobal.com/services',
    type: 'website',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
