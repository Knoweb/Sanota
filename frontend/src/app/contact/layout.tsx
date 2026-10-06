import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | Sanota Global',
  description: 'Get in touch with Sanota Global for inquiries regarding mechanical engineering, industrial automation, and technical solutions.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
