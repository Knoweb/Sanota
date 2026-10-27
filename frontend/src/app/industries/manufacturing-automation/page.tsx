import { Metadata } from "next";
import Script from "next/script";
import ManufacturingClient from "./ManufacturingClient";

export const metadata: Metadata = {
  title: "Industrial Manufacturing Automation & Assembly Systems in Sri Lanka | Sanota",
  description:
    "Factory production line automation, custom assembly jigs, pneumatic material handling, and PLC machine synchronization engineered in Sri Lanka.",
  alternates: {
    canonical: "https://www.sanotaglobal.com/industries/manufacturing-automation",
  },
  openGraph: {
    title: "Industrial Manufacturing Automation Solutions | Sanota Sri Lanka",
    description:
      "Turnkey assembly line automation, automated test stations, and production line synchronization for Sri Lankan rubber, plastic, textile, and hardware manufacturers.",
    url: "https://www.sanotaglobal.com/industries/manufacturing-automation",
    type: "website",
  },
};

const industrySchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://www.sanotaglobal.com/industries/manufacturing-automation#service",
      name: "Industrial Manufacturing Automation & Assembly Line Integration",
      provider: {
        "@type": "LocalBusiness",
        "@id": "https://www.sanotaglobal.com/#business",
        name: "Sanota",
      },
      serviceType: "Factory Automation, Production Engineering & SPM Integration",
      areaServed: {
        "@type": "Country",
        name: "Sri Lanka",
      },
      description:
        "Comprehensive automation engineering for manufacturing plants in Sri Lanka, delivering synchronized assembly conveyors, pneumatic pick-and-place fixtures, end-of-line testing benches, and real-time SCADA throughput monitoring.",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.sanotaglobal.com/" },
        { "@type": "ListItem", position: 2, name: "Industries", item: "https://www.sanotaglobal.com/industries" },
        {
          "@type": "ListItem",
          position: 3,
          name: "Manufacturing Automation",
          item: "https://www.sanotaglobal.com/industries/manufacturing-automation",
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What manufacturing sectors in Sri Lanka does Sanota provide automation for?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sanota serves diverse manufacturing industries including rubber and tire products, plastic injection molding and blow molding, apparel and textile finishing, corrugated carton packaging, consumer goods assembly, and metal fabrication plants across Sri Lanka.",
          },
        },
        {
          "@type": "Question",
          name: "How does Sanota automate legacy semi-manual manufacturing lines?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We evaluate your manual bottlenecks, then design modular automated stations—such as pneumatic part clamp fixtures, pick-and-place transfer arms, and indexing conveyors—that integrate directly into your existing line layout without requiring a complete factory rebuild.",
          },
        },
        {
          "@type": "Question",
          name: "Can Sanota integrate automated quality control and pass/fail testing stations?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. We build automated testing fixtures equipped with load cells, pneumatic leak detectors, vision cameras, and laser distance gauges that automatically verify parts and stamp or sort rejects without operator intervention.",
          },
        },
        {
          "@type": "Question",
          name: "What safety systems are incorporated into automated manufacturing lines?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "All automated systems comply with international machinery safety standards (ISO 13849 Category 3/4), featuring safety light curtains, dual-channel emergency stop pull-cords, interlocked poly-carbonate safety doors, and monitored safety dump valves.",
          },
        },
        {
          "@type": "Question",
          name: "How do you minimize factory disruption during automation installation?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We pre-build, wire, program, and simulate all automated cells at our Galle workshop. On-site installation is scheduled during scheduled factory maintenance pauses or weekends to prevent loss of customer production shifts.",
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
        id="manufacturing-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(industrySchema) }}
      />
      <ManufacturingClient />
    </>
  );
}
