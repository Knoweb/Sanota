import { Metadata } from "next";
import Script from "next/script";
import GreenhouseAgriClient from "./GreenhouseAgriClient";

export const metadata: Metadata = {
  title: "Greenhouse Automation & Smart Fertigation in Sri Lanka | Sanota",
  description:
    "Commercial greenhouse climate controllers, automated A/B fertilizer dosing units, EC/pH balancing, and IoT agricultural telemetry engineered in Sri Lanka.",
  alternates: {
    canonical: "https://www.sanotaglobal.com/industries/greenhouse-smart-agriculture",
  },
  openGraph: {
    title: "Greenhouse Automation & Smart Fertigation Systems | Sanota Sri Lanka",
    description:
      "Precision polyhouse climate control, VPD tracking, automated fertigation rigs, and off-grid solar IoT irrigation for high-value export crop growers.",
    url: "https://www.sanotaglobal.com/industries/greenhouse-smart-agriculture",
    type: "website",
  },
};

const industrySchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://www.sanotaglobal.com/industries/greenhouse-smart-agriculture#service",
      name: "Commercial Greenhouse Automation & Smart Fertigation Systems",
      provider: {
        "@type": "LocalBusiness",
        "@id": "https://www.sanotaglobal.com/#business",
        name: "Sanota",
      },
      serviceType: "Protected Agriculture Automation & Fertigation Machinery",
      areaServed: {
        "@type": "Country",
        name: "Sri Lanka",
      },
      description:
        "Custom engineered automation for commercial polyhouses, net-houses, and hydroponic farms in Sri Lanka, featuring multi-channel EC/pH fertilizer dosing, automated shade screen and ventilation control, and cellular IoT crop telemetry.",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.sanotaglobal.com/" },
        { "@type": "ListItem", position: 2, name: "Industries", item: "https://www.sanotaglobal.com/industries" },
        {
          "@type": "ListItem",
          position: 3,
          name: "Greenhouse & Smart Agriculture",
          item: "https://www.sanotaglobal.com/industries/greenhouse-smart-agriculture",
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What components are included in a commercial smart fertigation dosing system integration?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A Sanota commercial fertigation system incorporates multi-channel proportional fertilizer dosing channels (Tank A, Tank B, Acid/pH corrector), industrial-grade toroidal EC and glass-electrode pH transmitters, a stainless mixing chamber, multi-valve solenoid manifold for zone irrigation, and a central PLC with touchscreen recipe controls.",
          },
        },
        {
          "@type": "Question",
          name: "What is the typical ROI and cost justification for an automated greenhouse climate control system?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Commercial growers in Sri Lanka cultivating bell peppers, tomatoes, strawberries, and cut foliage typically recover their automation investment within 8 to 14 months through 25%–35% yield increases, 40% reduction in water and fertilizer runoff, and prevention of thermal blossom drop during midday heat spikes.",
          },
        },
        {
          "@type": "Question",
          name: "Can Sanota’s agricultural systems operate in remote farms with unstable grid electricity?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. We engineer complete off-grid solar PV and LiFePO4 battery-buffered automation skids capable of running irrigation valves, dosing pumps, and cellular telemetry continuously without reliance on the electrical grid.",
          },
        },
        {
          "@type": "Question",
          name: "Does the system calculate Vapor Pressure Deficit (VPD)?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Our controllers measure canopy temperature, ambient air temperature, and relative humidity in real time to calculate true VPD, automatically triggering high-pressure fogging or ridge vent motors to keep plants in the optimal transpiration sweet spot.",
          },
        },
        {
          "@type": "Question",
          name: "Can farm managers monitor irrigation and greenhouse climate from their smartphones?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Every system includes an integrated cellular 4G IoT gateway that uploads soil moisture logs, EC/pH records, water consumption totals, and climate graphs to a secure cloud dashboard with instant SMS alerts for line pressure drops or dosing alarms.",
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
        id="greenhouse-agri-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(industrySchema) }}
      />
      <GreenhouseAgriClient />
    </>
  );
}
