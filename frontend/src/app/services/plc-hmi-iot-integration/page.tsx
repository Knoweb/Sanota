import { Metadata } from "next";
import Script from "next/script";
import PlcHmiIotClient from "./PlcHmiIotClient";

export const metadata: Metadata = {
  title: "PLC, HMI & Industrial IoT (IIoT) Integration in Sri Lanka | Sanota",
  description:
    "Expert PLC programming, custom control panel fabrication, touchscreen HMI design, and Industrial IoT cloud telemetry in Sri Lanka. Siemens, Delta, Schneider & Mitsubishi.",
  alternates: {
    canonical: "https://www.sanotaglobal.com/services/plc-hmi-iot-integration",
  },
  openGraph: {
    title: "Industrial PLC, HMI & IIoT Integration Services | Sanota Sri Lanka",
    description:
      "Turnkey PLC panel assembly, SCADA systems, remote telemetry, and sensor integration engineered by Moratuwa-trained automation specialists.",
    url: "https://www.sanotaglobal.com/services/plc-hmi-iot-integration",
    type: "website",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://www.sanotaglobal.com/services/plc-hmi-iot-integration#service",
      name: "Industrial PLC, HMI & IoT Integration",
      provider: {
        "@type": "LocalBusiness",
        "@id": "https://www.sanotaglobal.com/#business",
        name: "Sanota",
      },
      serviceType: "Industrial Automation, Control Panel Assembly & IoT Telemetry",
      areaServed: {
        "@type": "Country",
        name: "Sri Lanka",
      },
      description:
        "Custom electrical control panel building, multi-vendor PLC ladder logic programming, touchscreen HMI visualization, and IIoT sensor cloud connectivity.",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.sanotaglobal.com/" },
        { "@type": "ListItem", position: 2, name: "Services", item: "https://www.sanotaglobal.com/services" },
        {
          "@type": "ListItem",
          position: 3,
          name: "PLC, HMI & IoT Integration",
          item: "https://www.sanotaglobal.com/services/plc-hmi-iot-integration",
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Which PLC brands does Sanota program and support in Sri Lanka?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sanota supports major industrial automation brands including Siemens (S7-1200, S7-1500, LOGO!), Delta Electronics (DVP, AS series), Mitsubishi Electric (iQ-F, FX series), Schneider Electric (Modicon), and Omron, as well as custom microcontroller embedded systems.",
          },
        },
        {
          "@type": "Question",
          name: "Can Sanota add Industrial IoT monitoring to existing factory machinery?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Using non-invasive current transformers, vibration sensors, RTD temperature probes, and Modbus-to-MQTT edge gateways, we can overlay IIoT dashboards onto legacy machines without modifying existing safety or PLC code.",
          },
        },
        {
          "@type": "Question",
          name: "Do you assemble custom IP55 / IP65 control panels locally?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. All control panels are assembled, wired, ferruled, and bench-tested inside our Galle workshop according to IEC electrical standards before on-site installation anywhere in Sri Lanka.",
          },
        },
        {
          "@type": "Question",
          name: "What communication protocols do you implement for plant data collection?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We implement standard industrial fieldbuses including Modbus RTU/TCP, PROFINET, Ethernet/IP, CAN bus, and modern cloud telemetry protocols such as MQTT, HTTP REST, and OPC-UA.",
          },
        },
        {
          "@type": "Question",
          name: "Does Sanota provide training for factory technicians after commissioning?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Every project includes comprehensive operational training for machine operators and maintenance technicians, along with annotated wiring diagrams, alarm code tables, and complete PLC source code backups.",
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
        id="plc-hmi-iot-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <PlcHmiIotClient />
    </>
  );
}
