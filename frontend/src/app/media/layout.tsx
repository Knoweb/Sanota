import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Media & News | Sanota Global",
  description: "Stay updated with Sanota's latest media releases, events, and company news.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
