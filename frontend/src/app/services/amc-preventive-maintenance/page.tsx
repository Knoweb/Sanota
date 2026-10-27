import { Metadata } from "next";
import Script from "next/script";
import AmcMaintenanceClient from "./AmcMaintenanceClient";

export const metadata: Metadata = {
  title: "Industrial Machinery AMC & Preventive Maintenance in Sri Lanka | Sanota",
  description:
    "Annual maintenance contracts (AMC), scheduled electrical/mechanical servicing, thermography, vibration analysis, and breakdown response in Galle, Colombo & Southern Province.",
  alternates: {
    canonical: "https://www.sanotaglobal.com/services/amc-preventive-maintenance",
  },
  openGraph: {
    title: "Machinery AMC & Preventive Maintenance Services | Sanota Sri Lanka",
    description:
      "Keep your production lines running with scheduled machinery servicing, PLC backups, thermal imaging, and priority emergency breakdown support.",
    url: "https://www.sanotaglobal.com/services/amc-preventive-maintenance",
    type: "website",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://www.sanotaglobal.com/services/amc-preventive-maintenance#service",
      name: "Industrial Machinery AMC & Preventive Maintenance",
      provider: {
        "@type": "LocalBusiness",
        "@id": "https://www.sanotaglobal.com/#business",
        name: "Sanota",
      },
      serviceType: "Factory Machinery Maintenance & Emergency Breakdown Support",
      areaServed: {
        "@type": "Country",
        name: "Sri Lanka",
      },
      description:
        "Comprehensive annual maintenance contracts (AMC) for factories, tea processing plants, and food packaging facilities including periodic mechanical lubrication, thermal panel scanning, PLC program backups, and guaranteed emergency response windows.",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.sanotaglobal.com/" },
        { "@type": "ListItem", position: 2, name: "Services", item: "https://www.sanotaglobal.com/services" },
        {
          "@type": "ListItem",
          position: 3,
          name: "Machinery AMC & Maintenance",
          item: "https://www.sanotaglobal.com/services/amc-preventive-maintenance",
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What does an industrial machinery AMC from Sanota include?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A Sanota Annual Maintenance Contract covers scheduled monthly or quarterly on-site mechanical and electrical inspections, thermal imaging of breaker panels, motor vibration checks, sensor calibration, PLC/HMI program cloud backups, and discounted priority emergency breakdown calls.",
          },
        },
        {
          "@type": "Question",
          name: "What is your emergency breakdown response time in the Southern Province?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "For contract clients located in Galle, Matara, Bentota, and Ambalangoda, our engineering team responds on-site within 2 to 4 hours of notification. For clients in Colombo and the Western Province, response is within 4 to 8 hours.",
          },
        },
        {
          "@type": "Question",
          name: "Can Sanota maintain machines built by other overseas manufacturers?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. The majority of machines we service were originally imported from China, India, Italy, Germany, or Taiwan. Our multi-disciplinary engineers reverse-engineer schematics and troubleshoot control faults regardless of the original equipment manufacturer.",
          },
        },
        {
          "@type": "Question",
          name: "Do you keep backup copies of machine PLC software programs?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. During our initial onboarding audit, we upload and archive clean source code copies of all PLCs, HMIs, and VFD drive parameters to secure cloud storage and provide a physical backup drive kept inside your factory.",
          },
        },
        {
          "@type": "Question",
          name: "How does preventive maintenance save factory operating costs?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Preventive maintenance detects loose electrical terminals, bearing wear, and pneumatic leaks before they trigger catastrophic motor burnout or unscheduled multi-day production halts. Plants under regular maintenance typically reduce emergency downtime by 60% to 80%.",
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
        id="amc-maintenance-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <AmcMaintenanceClient />
    </>
  );
}
