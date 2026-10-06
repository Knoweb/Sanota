import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.sanotaglobal.com'),
  title: {
    default: "Sanota | Integrated Engineering for Evolving Industries",
    template: "%s | Sanota Global",
  },
  description: "Sanota helps industries solve operational challenges by bringing together mechanical engineering, electrical systems, automation, IoT, software, implementation and technical support through one coordinated team. Whether the requirement involves a machine, process, product, digital platform or complete operational system, we help develop a practical way forward.",
  keywords: ["Engineering Solutions Sri Lanka", "Industrial Automation", "Mechanical Engineering", "IoT", "sanota"],
  openGraph: {
    title: "Sanota | Integrated Engineering for Evolving Industries",
    description: "Sanota helps industries solve operational challenges by bringing together mechanical engineering, electrical systems, automation, IoT, software, implementation and technical support through one coordinated team.",
    url: "https://www.sanotaglobal.com",
    siteName: "Sanota Global",
    images: [
      {
        url: "/sanota.png",
        width: 1200,
        height: 630,
        alt: "Sanota Global - Engineering Solutions in Sri Lanka",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sanota | Integrated Engineering for Evolving Industries",
    description: "Sanota helps industries solve operational challenges by bringing together mechanical engineering, electrical systems, automation, IoT, software, implementation and technical support.",
    images: ["/sanota.png"],
  }
};

import AnimatedBackground from "@/components/AnimatedBackground";
import AmbientGlow from "@/components/AmbientGlow";
import GlobalGlow from "@/components/GlobalGlow";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-0DFYHW9ETK"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-0DFYHW9ETK');
          `}
        </Script>
      </head>
      <body className="min-h-full flex flex-col relative text-slate-300">
        <AnimatedBackground />
        <AmbientGlow />
        <GlobalGlow />
        {children}
      </body>
    </html>
  );
}
