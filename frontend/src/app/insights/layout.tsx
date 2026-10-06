import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Insights & Articles | Sanota Global',
  description: 'Read the latest insights, articles, and news on industrial automation, mechanical engineering, and technology trends from Sanota.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
