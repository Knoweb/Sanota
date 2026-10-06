import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Tell Us Your Challenge | Sanota Global",
  description: "Have an operational challenge? Let Sanota's engineering team help you develop a practical way forward.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
