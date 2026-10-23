import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Industrial Machinery & Automation Systems | Sanota Global',
  description:
    'Custom PLC SCADA control panel assembly, industrial motor speed and conveyor automation controller, smart manufacturing data acquisition dashboards, and precision machinery.',
  keywords: [
    'custom PLC SCADA control panel assembly',
    'industrial motor speed and conveyor automation controller',
    'smart manufacturing data acquisition dashboard development',
    'factory IIoT predictive maintenance sensors integration',
    'custom industrial machinery',
    'special-purpose machines',
    'automated material handling systems'
  ],
  alternates: {
    canonical: 'https://www.sanotaglobal.com/products',
  },
  openGraph: {
    title: 'Industrial Machinery & Automation Systems | Sanota Global',
    description:
      'Engineered products, special-purpose machinery, custom automation stations, and data logging dashboards for evolving factories.',
    url: 'https://www.sanotaglobal.com/products',
    type: 'website',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
