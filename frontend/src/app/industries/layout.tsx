import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Industries | Tea Automation & Smart Agriculture Solutions | Sanota Global',
  description:
    'Advanced tea process automation, automated tea trough withering humidity control, fluidized bed tea dryer retrofits, automated greenhouse climate control, and smart fertigation systems.',
  keywords: [
    'automated tea trough withering humidity control system',
    'fluidized bed tea dryer temperature controller retrofit',
    'smart tea factory automation system vendor',
    'tea processing plant IoT data logging solution',
    'automated greenhouse climate control system cost',
    'commercial smart fertigation dosing system integration',
    'IoT soil moisture and EC monitoring platform for farms',
    'tea factory automation',
    'smart agriculture IoT'
  ],
  alternates: {
    canonical: 'https://www.sanotaglobal.com/industries',
  },
  openGraph: {
    title: 'Industries | Tea Automation & Smart Agriculture Solutions | Sanota Global',
    description:
      'Engineered automation systems for tea manufacturing, commercial greenhouses, precision agriculture, and modern food processing.',
    url: 'https://www.sanotaglobal.com/industries',
    type: 'website',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
