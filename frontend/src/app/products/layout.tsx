import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Products & Systems | Sanota Global',
  description: 'Explore our range of innovative products, from automated machines to complete operational systems tailored for various industries.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
