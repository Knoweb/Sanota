import { Metadata } from "next";
import Script from "next/script";
import GalleLocationClient from "./GalleLocationClient";

export const metadata: Metadata = {
  title: "Industrial Automation & Machinery Engineering in Galle, Sri Lanka | Sanota",
  description:
    "Galle engineering workshop in Bataganwila. Fast on-site machine retrofits, custom machinery manufacturing, PLC panel wiring, and factory AMC across Southern Province.",
  alternates: {
    canonical: "https://www.sanotaglobal.com/locations/galle",
  },
  openGraph: {
    title: "Galle Industrial Automation & Machinery Engineering | Sanota Sri Lanka",
    description:
      "Southern Province machinery automation, tea factory trough controls, custom machinery fabrication, and 2–4 hour emergency breakdown support from our Galle workshop.",
    url: "https://www.sanotaglobal.com/locations/galle",
    type: "website",
  },
};

const locationSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://www.sanotaglobal.com/locations/galle#business",
      name: "Sanota - Galle Engineering Workshop & Head Office",
      image: "https://www.sanotaglobal.com/images/og-image.jpg",
      url: "https://www.sanotaglobal.com/locations/galle",
      telephone: "+94740709989",
      email: "info@sanotaglobal.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "441/2C Wackwella Road",
        addressLocality: "Galle",
        postalCode: "80000",
        addressCountry: "LK",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 6.0535,
        longitude: 80.221,
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          opens: "08:30",
          closes: "17:30",
        },
      ],
      areaServed: [
        { "@type": "AdministrativeArea", name: "Southern Province, Sri Lanka" },
        { "@type": "City", name: "Galle" },
        { "@type": "City", name: "Matara" },
        { "@type": "City", name: "Hambantota" },
        { "@type": "City", name: "Ambalangoda" },
        { "@type": "City", name: "Bentota" },
      ],
      priceRange: "$$",
      description:
        "Head engineering office and machinery fabrication workshop of Sanota in Galle, Sri Lanka. Specializing in tea factory automation, custom machinery manufacturing, obsolete PLC modernization, and factory maintenance contracts across the Southern Province.",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.sanotaglobal.com/" },
        { "@type": "ListItem", position: 2, name: "Locations", item: "https://www.sanotaglobal.com/contact" },
        {
          "@type": "ListItem",
          position: 3,
          name: "Galle Workshop & Engineering Center",
          item: "https://www.sanotaglobal.com/locations/galle",
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Where is Sanota’s engineering workshop located in Galle?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sanota’s registered office is at 441/2C Wackwella Road, Galle 80000, with our specialized machinery fabrication and testing workshop located in Bataganwila, Galle, Sri Lanka.",
          },
        },
        {
          "@type": "Question",
          name: "What Southern Province regions do your engineers service on-site?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We provide rapid on-site automation and breakdown support across all Southern industrial hubs, including Galle Fort, Koggala BOI Export Processing Zone, Ambalangoda, Bentota, Hikkaduwa, Karandeniya, Matara, Weligama, and Hambantota.",
          },
        },
        {
          "@type": "Question",
          name: "What is your emergency breakdown response time in the Southern Province?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "For contract clients under our Annual Maintenance Contract (AMC), our engineering team responds on-site within 2 to 4 hours anywhere in the Galle and Matara districts.",
          },
        },
        {
          "@type": "Question",
          name: "Can factory managers in the Southern Province visit the Galle workshop?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Plant managers, engineers, and estate superintendents are welcome to visit our Bataganwila workshop by appointment to inspect control panel wiring, observe machine dry runs, or discuss custom machinery prototypes.",
          },
        },
        {
          "@type": "Question",
          name: "Do you supply spare parts directly from the Galle workshop?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. We maintain a stock of industrial PLCs, VFD drives, temperature controllers, pneumatic cylinders, proximity sensors, and thermal imaging gear in Galle for rapid same-day factory replacement.",
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
        id="galle-location-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(locationSchema) }}
      />
      <GalleLocationClient />
    </>
  );
}
