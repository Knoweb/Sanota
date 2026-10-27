import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms and Conditions | Sanota (Private) Limited',
  description:
    'Terms and Conditions governing the use of the Sanota Global website and engineering engagement terms under the laws of Sri Lanka.',
  alternates: {
    canonical: 'https://www.sanotaglobal.com/terms',
  },
  openGraph: {
    title: 'Terms and Conditions | Sanota (Private) Limited',
    description:
      'Commercial terms, intellectual property, and engineering service policies for Sanota (Private) Limited.',
    url: 'https://www.sanotaglobal.com/terms',
  },
};

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
