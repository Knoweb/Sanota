import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | Sanota Global',
  description: 'Learn about Sanota, a Sri Lankan engineering powerhouse providing industrial automation, mechanical engineering, and innovative technological solutions.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
