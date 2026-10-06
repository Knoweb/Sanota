import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Industries We Support | Sanota Global',
  description: 'Sanota provides engineering solutions across multiple sectors including manufacturing, food processing, agriculture, and logistics.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
