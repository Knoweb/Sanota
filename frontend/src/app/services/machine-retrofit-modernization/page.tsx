import { Metadata } from "next";
import Script from "next/script";
import MachineRetrofitClient from "./MachineRetrofitClient";

export const metadata: Metadata = {
  title: "Industrial Machine Retrofit & PLC Modernization in Sri Lanka | Sanota",
  description:
    "Upgrade obsolete PLC panels, replace failed relay controls, and retrofit industrial machinery in Sri Lanka. Extend asset lifespan without purchasing expensive new machines.",
  alternates: {
    canonical: "https://www.sanotaglobal.com/services/machine-retrofit-modernization",
  },
  openGraph: {
    title: "Industrial Machine Retrofit & PLC Modernization | Sanota Sri Lanka",
    description:
      "Specialized machinery retrofitting, obsolete PLC panel replacement, and electrical automation upgrades across Galle, Colombo, and all industrial zones in Sri Lanka.",
    url: "https://www.sanotaglobal.com/services/machine-retrofit-modernization",
    type: "website",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://www.sanotaglobal.com/services/machine-retrofit-modernization#service",
      name: "Industrial Machine Retrofit & Modernization",
      provider: {
        "@type": "LocalBusiness",
        "@id": "https://www.sanotaglobal.com/#business",
        name: "Sanota",
      },
      serviceType: "Machinery Modernization & PLC Panel Retrofit",
      areaServed: {
        "@type": "Country",
        name: "Sri Lanka",
      },
      description:
        "Comprehensive industrial machine retrofitting including obsolete PLC migration, electrical panel rewiring, relay-to-microcontroller upgrades, and safety interlock integration.",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.sanotaglobal.com/" },
        { "@type": "ListItem", position: 2, name: "Services", item: "https://www.sanotaglobal.com/services" },
        {
          "@type": "ListItem",
          position: 3,
          name: "Machine Retrofit & Modernization",
          item: "https://www.sanotaglobal.com/services/machine-retrofit-modernization",
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Can Sanota replace obsolete PLC panels without replacing mechanical machinery?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Sanota specializes in replacing obsolete or discontinued PLCs (such as older Omron, Siemens S5, or Mitsubishi FX series) with modern Delta, Siemens S7-1200, or Schneider PLCs while keeping your existing mechanical actuators, motors, and hydraulic frames intact.",
          },
        },
        {
          "@type": "Question",
          name: "What is the typical cost saving of retrofitting compared to buying a new machine?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Retrofitting an industrial machine typically costs between 15% and 35% of the capital expenditure required to purchase and import a brand new machine. It also avoids long international shipping lead times and costly customs tariffs.",
          },
        },
        {
          "@type": "Question",
          name: "How much factory downtime is required during an electrical panel retrofit?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sanota designs, fabricates, wires, and pre-tests the entire control panel at our Galle workshop before delivery. On-site installation and field rewiring usually requires only 2 to 4 days of scheduled plant downtime.",
          },
        },
        {
          "@type": "Question",
          name: "Do you supply complete electrical schematic drawings with the retrofitted machine?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Every machine retrofit delivered by Sanota includes complete CAD electrical schematics, ferruled wiring numbers, an updated bill of materials, and annotated PLC ladder logic documentation.",
          },
        },
        {
          "@type": "Question",
          name: "Does Sanota provide emergency on-site support if an upgraded machine encounters an issue?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. We offer rapid on-site breakdown response across the Southern and Western Provinces, backed by optional secure cellular remote diagnostics modules for immediate online troubleshooting.",
          },
        },
      ],
    },
  ],
};

export default function Page() {
  return (
    <>
      <Script
        id="machine-retrofit-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <MachineRetrofitClient />
    </>
  );
}
