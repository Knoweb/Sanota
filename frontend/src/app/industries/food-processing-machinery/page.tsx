import { Metadata } from "next";
import Script from "next/script";
import FoodMachineryClient from "./FoodMachineryClient";

export const metadata: Metadata = {
  title: "Food & Spice Processing Machinery Manufacturing in Sri Lanka | Sanota",
  description:
    "Industrial spice dehydrators, commercial food dryers, stainless steel conveyor sorting tables, and automated packaging systems engineered in Galle, Sri Lanka.",
  alternates: {
    canonical: "https://www.sanotaglobal.com/industries/food-processing-machinery",
  },
  openGraph: {
    title: "Food & Spice Processing Machinery | Sanota Sri Lanka",
    description:
      "Custom food-grade stainless machinery, cinnamon & spice dryers, automated liquid dosing, and packaging automation for Sri Lankan food processors.",
    url: "https://www.sanotaglobal.com/industries/food-processing-machinery",
    type: "website",
  },
};

const industrySchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://www.sanotaglobal.com/industries/food-processing-machinery#service",
      name: "Food & Spice Processing Machinery Manufacturing",
      provider: {
        "@type": "LocalBusiness",
        "@id": "https://www.sanotaglobal.com/#business",
        name: "Sanota",
      },
      serviceType: "Food Processing Machinery & Spice Dehydration Automation",
      areaServed: {
        "@type": "Country",
        name: "Sri Lanka",
      },
      description:
        "Design, fabrication, and automation of food-grade stainless steel processing machinery, commercial cinnamon and pepper dehydrators, fruit dryers, and automated filling systems in Sri Lanka.",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.sanotaglobal.com/" },
        { "@type": "ListItem", position: 2, name: "Industries", item: "https://www.sanotaglobal.com/industries" },
        {
          "@type": "ListItem",
          position: 3,
          name: "Food Processing Machinery",
          item: "https://www.sanotaglobal.com/industries/food-processing-machinery",
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What kinds of spice and crop dehydrators does Sanota manufacture in Sri Lanka?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sanota designs and builds multi-tray batch dehydrators, continuous conveyor tunnel dryers, and heat pump drying cabinets tailored for Ceylon cinnamon quills, black pepper, cardamoms, cloves, desiccated coconut, and dehydrated tropical fruits (mango, pineapple, banana).",
          },
        },
        {
          "@type": "Question",
          name: "Are the machines compliant with food safety standards such as HACCP, GMP, and ISO 22000?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. All contact parts are fabricated from certified AISI 304 or 316 stainless steel with sanitary continuous TIG welds, polished food-safe radiused corners, USDA-grade lubricants, and washdown IP66 electrical enclosures.",
          },
        },
        {
          "@type": "Question",
          name: "How does automated drying temperature control preserve spice essential oils and color?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Our PLC controllers follow programmed multi-stage drying curves that begin with gentle low-temperature moisture extraction (45°C–50°C) before stepping up, preventing case-hardening and volatilization of delicate essential oils like cinnamaldehyde and piperine.",
          },
        },
        {
          "@type": "Question",
          name: "Can Sanota automate existing manual food packaging and bottle filling lines?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. We build custom conveyorized indexers, automated peristaltic/piston liquid filling stations, cap-torquing jigs, and batch inkjet code printing integrations that turn labor-heavy manual lines into semi-automatic or fully automatic packaging lines.",
          },
        },
        {
          "@type": "Question",
          name: "Where are the food machines built and where can I view a demonstration?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "All design, CAD modeling, stainless steel sheet fabrication, and testing take place in our Bataganwila workshop in Galle. Factory owners and food producers are welcome to visit our facility to view active machine fabrications and test dry runs with their product samples.",
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
        id="food-machinery-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(industrySchema) }}
      />
      <FoodMachineryClient />
    </>
  );
}
