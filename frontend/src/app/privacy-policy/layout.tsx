import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | Sanota (Private) Limited',
  description:
    'Privacy Policy for Sanota (Private) Limited (PV 74540) in accordance with the Sri Lanka Personal Data Protection Act No. 9 of 2022 (PDPA).',
  alternates: {
    canonical: 'https://www.sanotaglobal.com/privacy-policy',
  },
  openGraph: {
    title: 'Privacy Policy | Sanota (Private) Limited',
    description:
      'Information on how Sanota (Private) Limited collects, uses, and safeguards personal data submitted across our digital platforms.',
    url: 'https://www.sanotaglobal.com/privacy-policy',
  },
};

export default function PrivacyPolicyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
