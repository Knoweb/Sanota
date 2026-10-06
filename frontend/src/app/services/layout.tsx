import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Engineering Services | Sanota Global',
  description: 'Discover our comprehensive engineering services including automation, electrical systems, software, and mechanical design.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
