import { Metadata } from "next";
import Script from "next/script";
import CustomMachineryClient from "./CustomMachineryClient";

export const metadata: Metadata = {
  title: "Custom Machinery Design & Manufacturing in Sri Lanka | Sanota",
  description:
    "Custom special-purpose machines (SPM), automated assembly stations, precision test rigs, and processing machinery engineered and fabricated in Galle, Sri Lanka.",
  alternates: {
    canonical: "https://www.sanotaglobal.com/services/custom-machinery-manufacturing",
  },
  openGraph: {
    title: "Custom Machinery Manufacturing & SPM Design | Sanota Sri Lanka",
    description:
      "Turnkey mechanical, electrical, and pneumatic machinery manufacturing for Sri Lankan industrial producers. From concept 3D CAD to factory floor commissioning.",
    url: "https://www.sanotaglobal.com/services/custom-machinery-manufacturing",
    type: "website",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://www.sanotaglobal.com/services/custom-machinery-manufacturing#service",
      name: "Custom Machinery Manufacturing & Special Purpose Machinery (SPM)",
      provider: {
        "@type": "LocalBusiness",
        "@id": "https://www.sanotaglobal.com/#business",
        name: "Sanota",
      },
      serviceType: "Mechanical Engineering & Custom Machine Fabrication",
      areaServed: {
        "@type": "Country",
        name: "Sri Lanka",
      },
      description:
        "End-to-end design, precision fabrication, electrical integration, and commissioning of custom industrial machinery, testing jigs, and automated production stations.",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.sanotaglobal.com/" },
        { "@type": "ListItem", position: 2, name: "Services", item: "https://www.sanotaglobal.com/services" },
        {
          "@type": "ListItem",
          position: 3,
          name: "Custom Machinery Manufacturing",
          item: "https://www.sanotaglobal.com/services/custom-machinery-manufacturing",
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What types of custom machinery does Sanota design and build?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sanota builds Special Purpose Machines (SPMs), automated parts assembly fixtures, spice and crop dehydrators, conveyor sorting lines, hydraulic presses, automated liquid dosing systems, and custom quality inspection test benches.",
          },
        },
        {
          "@type": "Question",
          name: "How does Sanota validate the design before starting mechanical fabrication?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We create full 3D CAD parametric models in SolidWorks/Autodesk Inventor, perform Finite Element Analysis (FEA) for structural stresses, and review detailed digital simulations with your team prior to cutting steel or ordering actuators.",
          },
        },
        {
          "@type": "Question",
          name: "Where are the machines manufactured and assembled?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "All structural fabrication, precision machining, electrical panel building, and sensor wiring are completed inside our dedicated engineering workshop in Bataganwila, Galle, Sri Lanka.",
          },
        },
        {
          "@type": "Question",
          name: "Do you supply spare parts and technical support in Sri Lanka?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Because every machine is engineered locally, all bearings, pneumatic cylinders, sensors, and electrical components are standardized for local availability, eliminating reliance on overseas vendor lead times.",
          },
        },
        {
          "@type": "Question",
          name: "Can Sanota manufacture machines adhering to food-grade hygiene standards?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. For food, tea, and pharmaceutical processing, we construct contact surfaces using AISI 304 or 316 stainless steel with sanitary welds, food-grade lubricants, and washdown IP66 electrical enclosures.",
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
        id="custom-machinery-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <CustomMachineryClient />
    </>
  );
}
