import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

import { organizationSchema, websiteSchema } from "@/lib/schema";

export const metadata: Metadata = {
  metadataBase: new URL('https://www.sanotaglobal.com'),
  title: {
    default: "Industrial Automation, Custom Machinery & Smart Systems in Sri Lanka | Sanota",
    template: "%s | Sanota",
  },
  description: "Custom machinery, PLC & IoT automation, machine retrofits and AMC from one Sri Lankan engineering team since 2010. Tell us your challenge today.",
  keywords: [
    "Industrial automation system integrator sri lanka",
    "automated tea trough withering humidity control system",
    "fluidized bed tea dryer temperature controller retrofit",
    "smart tea factory automation system vendor",
    "tea processing plant IoT data logging solution",
    "automated greenhouse climate control system cost",
    "commercial smart fertigation dosing system integration",
    "IoT soil moisture and EC monitoring platform for farms",
    "obsolete plc panel replacement service for factories",
    "custom industrial machinery retrofitting contractor",
    "legacy factory machine electrical upgrade and modernization",
    "custom PLC SCADA control panel assembly",
    "factory IIoT predictive maintenance sensors integration",
    "industrial motor speed and conveyor automation controller",
    "smart manufacturing data acquisition dashboard development",
    "Engineering Solutions Sri Lanka",
    "Industrial Automation",
    "Sanota Global"
  ],
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
  },
  verification: {
    google: "NtCpFHq8U9fApwEEfNixiwDhDkazjMdedT11ciHSAY8",
  },
};

import AnimatedBackground from "@/components/AnimatedBackground";
import AmbientGlow from "@/components/AmbientGlow";
import GlobalGlow from "@/components/GlobalGlow";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { ThemeProvider } from "@/context/ThemeContext";
import { LanguageProvider } from "@/context/LanguageContext";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased light`} data-theme="light" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var saved = localStorage.getItem('sanota-theme-v2');
                  if (saved === 'dark') {
                    document.documentElement.classList.add('dark');
                    document.documentElement.classList.remove('light');
                    document.documentElement.setAttribute('data-theme', 'dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                    document.documentElement.classList.add('light');
                    document.documentElement.setAttribute('data-theme', 'light');
                    if (!saved) {
                      localStorage.setItem('sanota-theme-v2', 'light');
                      localStorage.setItem('sanota-theme', 'light');
                    }
                  }
                  
                  var savedLang = localStorage.getItem('sanota-lang') || 'en';
                  document.documentElement.setAttribute('lang', savedLang);
                  if (savedLang === 'ar') {
                    document.documentElement.setAttribute('dir', 'rtl');
                    document.documentElement.classList.add('rtl');
                  } else {
                    document.documentElement.setAttribute('dir', 'ltr');
                    document.documentElement.classList.remove('rtl');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
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
        {/* Schema.org Structured Data for SEO & GEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className="min-h-full flex flex-col relative text-slate-300">
        <LanguageProvider>
          <ThemeProvider>
            <AnimatedBackground />
            <AmbientGlow />
            <GlobalGlow />
            <FloatingWhatsApp />
            {children}
          </ThemeProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
