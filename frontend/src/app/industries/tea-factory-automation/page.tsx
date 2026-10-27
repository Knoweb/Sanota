import { Metadata } from "next";
import Script from "next/script";
import TeaFactoryClient from "./TeaFactoryClient";

export const metadata: Metadata = {
  title: "Tea Factory Automation & Trough Withering Control in Sri Lanka | Sanota",
  description:
    "Automate tea trough withering, fluid bed dryers, and processing lines in Sri Lanka. Precision humidity, airflow & temperature control for orthodox & CTC tea factories.",
  alternates: {
    canonical: "https://www.sanotaglobal.com/industries/tea-factory-automation",
  },
  openGraph: {
    title: "Tea Factory Automation & Trough Withering Controls | Sanota Sri Lanka",
    description:
      "Engineered automation for Sri Lankan tea estates. Upgrade trough withering with automated humidity dampers, retrofit dryer burners, and track real-time moisture loss.",
    url: "https://www.sanotaglobal.com/industries/tea-factory-automation",
    type: "website",
  },
};

const industrySchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://www.sanotaglobal.com/industries/tea-factory-automation#service",
      name: "Tea Factory Automation & Withering Control Systems",
      provider: {
        "@type": "LocalBusiness",
        "@id": "https://www.sanotaglobal.com/#business",
        name: "Sanota",
      },
      serviceType: "Tea Processing Machinery Automation & Temperature Retrofit",
      areaServed: {
        "@type": "Country",
        name: "Sri Lanka",
      },
      description:
        "Turnkey engineering automation for orthodox and CTC tea factories in Sri Lanka, including automated trough withering humidity dampers, fluidized bed dryer temperature controllers, and leaf weighing telemetry.",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.sanotaglobal.com/" },
        { "@type": "ListItem", position: 2, name: "Industries", item: "https://www.sanotaglobal.com/industries" },
        {
          "@type": "ListItem",
          position: 3,
          name: "Tea Factory Automation",
          item: "https://www.sanotaglobal.com/industries/tea-factory-automation",
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How does an automated tea trough withering humidity control system improve leaf quality?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sanota’s automated trough withering controllers dynamically adjust airflow fans and intake louvers based on continuous dry-bulb/wet-bulb or digital hygrometer readings. This eliminates under-withering and case-hardening, delivering uniform 53–55% moisture target withering regardless of ambient rainy weather, which significantly boosts auction grade valuations.",
          },
        },
        {
          "@type": "Question",
          name: "Can existing fluidized bed tea dryers (FBD) be retrofitted with smart temperature controllers?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Sanota retrofits legacy fluid bed dryers with modulating burner valve actuators, multi-zone RTD temperature sensors, and PID logic. This maintains precise inlet and exhaust temperatures (e.g. ±1.5°C), saving up to 18% in firewood or burner fuel while preventing tea scorching.",
          },
        },
        {
          "@type": "Question",
          name: "How does Sanota support tea factories located in Galle, Matara, Ratnapura, and the Upcountry?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Our headquarters and engineering workshop in Galle is ideally positioned to service low-country and mid-country tea estates across Galle, Matara, and Ratnapura with rapid same-day on-site response, complemented by cellular IoT telemetry for remote diagnostics.",
          },
        },
        {
          "@type": "Question",
          name: "What firewood or energy savings can a tea factory expect from dryer automation?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "By replacing manual air intake chokes and guesswork with automated VFD fan modulation and PID temperature control, tea estates typically achieve 12% to 22% reduction in firewood or boiler fuel consumption within the first three months of operation.",
          },
        },
        {
          "@type": "Question",
          name: "Is the trough automation system simple enough for factory withering staff to operate?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. The system features a simple Sinhala/English touchscreen interface where operators simply select the leaf condition (wet, normal, damp) or enter target moisture percentage, allowing the PLC to automatically control air volume and heater cycling.",
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
        id="tea-factory-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(industrySchema) }}
      />
      <TeaFactoryClient />
    </>
  );
}
