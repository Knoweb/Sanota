import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sanota | Integrated Engineering for Evolving Industries",
  description: "Sanota designs, develops, automates, modernizes and maintains machinery, products, processes and operational systems for industries in Sri Lanka and international markets.",
};

import AnimatedBackground from "@/components/AnimatedBackground";
import AmbientGlow from "@/components/AmbientGlow";
import GlobalGlow from "@/components/GlobalGlow";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col relative text-slate-300">
        <AnimatedBackground />
        <AmbientGlow />
        <GlobalGlow />
        {children}
      </body>
    </html>
  );
}
