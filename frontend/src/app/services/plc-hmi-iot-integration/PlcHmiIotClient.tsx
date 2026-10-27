"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import {
  Cpu,
  Monitor,
  Radio,
  CheckCircle2,
  ChevronDown,
  ArrowRight,
  Shield,
  Layers,
  Settings,
  PhoneCall,
  Zap,
  Activity,
  HardDrive,
  Database,
  Sliders,
} from "lucide-react";

const capabilities = [
  {
    title: "Multi-Brand PLC Programming",
    desc: "Robust, modular ladder logic and structured text programming for Siemens S7-1200/1500, Delta DVP/AS, Mitsubishi iQ-R/F, Schneider Modicon, and Omron controllers.",
    icon: Cpu,
  },
  {
    title: "Touchscreen HMI & Scada Design",
    desc: "High-contrast, intuitive operator touchscreens (Delta DOP, Siemens Comfort/Basic, Weintek) featuring animated mimics, recipe management, batch logging, and multilevel password security.",
    icon: Monitor,
  },
  {
    title: "Industrial IoT & Cloud Telemetry",
    desc: "Cellular 4G/GPRS & Ethernet edge gateways transmitting live production counts, motor health, and temperature readings over secure MQTT to cloud dashboards and smartphone alerts.",
    icon: Radio,
  },
  {
    title: "Custom Control Panel Fabrication",
    desc: "IP54, IP55, and IP65 industrial enclosures designed, laser-cut, powder-coated, populated, and neatly ferruled to IEC standards inside our Southern Province engineering workshop.",
    icon: Layers,
  },
  {
    title: "Predictive Condition Monitoring",
    desc: "Non-invasive installation of tri-axial vibration sensors and thermal monitoring probes on heavy motor bearings, gearboxes, and pumps to predict mechanical failure weeks in advance.",
    icon: Activity,
  },
  {
    title: "VFD & Motion Control Systems",
    desc: "Integration of variable frequency drives, stepper controllers, and closed-loop AC servos for high-speed synchronized conveyor lines, packaging feeders, and precision gantry axes.",
    icon: Zap,
  },
];

const processSteps = [
  {
    step: "01",
    title: "Process Architecture & I/O Mapping",
    desc: "We analyze your machine sequence of operations, tally digital and analog I/O points, and select the optimal controller topology.",
  },
  {
    step: "02",
    title: "Electrical CAD & Panel Layout Drafting",
    desc: "Detailed drafting of 3-phase power distribution, 24VDC control circuits, terminal strips, and panel component layouts.",
  },
  {
    step: "03",
    title: "Workshop Assembly & Ferruled Wiring",
    desc: "Clean enclosure fabrication, DIN rail layout, wire ducting, and neat thermal-printed ferrule labeling inside our Galle workshop.",
  },
  {
    step: "04",
    title: "PLC Logic & HMI Graphics Development",
    desc: "Modular state-machine programming, interlock safety routines, alarm handling tables, and crisp vector HMI graphic screens.",
  },
  {
    step: "05",
    title: "Factory Acceptance Test (FAT) Simulation",
    desc: "Comprehensive bench testing with signal generators, dummy loads, and dry-run sequencing before the panel leaves our facility.",
  },
  {
    step: "06",
    title: "On-Site Commissioning & Operator Handover",
    desc: "Field wiring termination, sensor calibration, live production trials, operator training, and USB handover of all source codes.",
  },
];

const faqs = [
  {
    q: "Which PLC brands does Sanota program and support in Sri Lanka?",
    a: "Sanota supports major industrial automation brands including Siemens (S7-1200, S7-1500, LOGO!), Delta Electronics (DVP, AS series), Mitsubishi Electric (iQ-F, FX series), Schneider Electric (Modicon), and Omron, as well as custom microcontroller embedded systems.",
  },
  {
    q: "Can Sanota add Industrial IoT monitoring to existing factory machinery?",
    a: "Yes. Using non-invasive current transformers, vibration sensors, RTD temperature probes, and Modbus-to-MQTT edge gateways, we can overlay IIoT dashboards onto legacy machines without modifying existing safety or PLC code.",
  },
  {
    q: "Do you assemble custom IP55 / IP65 control panels locally?",
    a: "Yes. All control panels are assembled, wired, ferruled, and bench-tested inside our Galle workshop according to IEC electrical standards before on-site installation anywhere in Sri Lanka.",
  },
  {
    q: "What communication protocols do you implement for plant data collection?",
    a: "We implement standard industrial fieldbuses including Modbus RTU/TCP, PROFINET, Ethernet/IP, CAN bus, and modern cloud telemetry protocols such as MQTT, HTTP REST, and OPC-UA.",
  },
  {
    q: "Does Sanota provide training for factory technicians after commissioning?",
    a: "Yes. Every project includes comprehensive operational training for machine operators and maintenance technicians, along with annotated wiring diagrams, alarm code tables, and complete PLC source code backups.",
  },
];

export default function PlcHmiIotClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors">
      <Header />

      <main className="pt-28 pb-20">
        {/* Breadcrumb */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
          <nav aria-label="Breadcrumb" className="flex items-center space-x-2 text-xs sm:text-sm text-slate-500 dark:text-slate-400">
            <Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/services" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              Services
            </Link>
            <span>/</span>
            <span className="text-slate-900 dark:text-slate-200 font-medium">PLC, HMI &amp; IoT Integration</span>
          </nav>
        </div>

        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-700 dark:text-cyan-400 text-xs sm:text-sm font-semibold mb-6">
            <Cpu className="w-4 h-4" />
            <span>Turnkey Industrial Automation &amp; Cloud Telemetry</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-6 leading-tight">
            PLC Programming, HMI Panels &amp; Industrial IoT (IIoT) Integration
          </h1>

          {/* 50-Word Direct Answer Box */}
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-cyan-500/30 shadow-lg shadow-cyan-500/5 mb-8">
            <p className="text-base sm:text-lg leading-relaxed text-slate-700 dark:text-slate-300">
              <strong className="text-cyan-600 dark:text-cyan-400 font-semibold">Direct Answer:</strong> Sanota engineers custom PLC control panels, intuitive touchscreen HMIs, and cellular Industrial IoT telemetry systems for manufacturing facilities across Sri Lanka. Utilizing proven Siemens, Delta, and Schneider platforms, our Moratuwa-trained engineers deliver complete CAD schematics, fail-safe ladder programming, and real-time cloud analytics with local workshop support.
            </p>
          </div>

          {/* Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
            <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
              <div className="text-2xl font-bold text-cyan-600 dark:text-cyan-400">Multi-Vendor</div>
              <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">Siemens, Delta, Schneider, Mitsubishi</div>
            </div>
            <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">IP55 / IP65</div>
              <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">Industrial Enclosure Builds</div>
            </div>
            <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
              <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">MQTT / Modbus</div>
              <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">Real-Time Cloud Dashboards</div>
            </div>
            <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
              <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">100% Owned</div>
              <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">Unencrypted Source Code Provided</div>
            </div>
          </div>
        </section>

        {/* Capabilities Grid */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-3">
              Automation &amp; Connected Telemetry Solutions
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
              From discrete machine sequence controllers to factory-wide SCADA data acquisition, we bridge rugged electrical engineering with modern cloud connectivity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="w-12 h-12 rounded-xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* 6-Step Engineering Methodology */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
            <div className="max-w-3xl mb-10">
              <span className="text-xs font-semibold uppercase tracking-wider text-cyan-600 dark:text-cyan-400">
                Precision Standards
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mt-1">
                Our 6-Stage Control Panel &amp; Software Delivery Flow
              </h2>
              <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">
                We simulate all logic sequences and alarm scenarios on physical test rigs in our Galle workshop before field deployment.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {processSteps.map((step, idx) => (
                <div key={idx} className="relative p-6 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-700/60">
                  <span className="text-3xl font-black text-cyan-600/30 dark:text-cyan-400/30 mb-2 block">
                    {step.step}
                  </span>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">{step.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technical Matrix Table */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
              Supported Platforms, Protocols &amp; Hardware Specifications
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm border-collapse">
                <thead>
                  <tr className="border-b border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-400 font-semibold">
                    <th className="py-3 px-4">Layer</th>
                    <th className="py-3 px-4">Supported Technologies</th>
                    <th className="py-3 px-4">Primary Application</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-slate-700 dark:text-slate-300">
                  <tr>
                    <td className="py-3 px-4 font-semibold text-slate-900 dark:text-white">PLC Controllers</td>
                    <td className="py-3 px-4">Siemens S7-1200 / S7-1500, Delta DVP / AS300, Schneider M221, Mitsubishi FX5U</td>
                    <td className="py-3 px-4">Machine sequence, interlocking, PID control, high-speed counting</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-semibold text-slate-900 dark:text-white">Operator Touchscreens (HMI)</td>
                    <td className="py-3 px-4">Delta DOP-100, Siemens KTP Basic/Comfort, Weintek cMT, Kinco (4.3&quot; to 15&quot;)</td>
                    <td className="py-3 px-4">Real-time graphic display, recipe parameters, fault history logs</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-semibold text-slate-900 dark:text-white">Fieldbus Communication</td>
                    <td className="py-3 px-4">Modbus RTU (RS485), Modbus TCP, PROFINET, Ethernet/IP, CANopen</td>
                    <td className="py-3 px-4">Inter-device telemetry, remote I/O islands, VFD drive coordination</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-semibold text-slate-900 dark:text-white">IoT Cloud &amp; Telemetry</td>
                    <td className="py-3 px-4">MQTT Brokers, InfluxDB / TimescaleDB, Grafana Dashboards, Node-RED</td>
                    <td className="py-3 px-4">Executive smartphone dashboards, automated Telegram/SMS alarms</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-semibold text-slate-900 dark:text-white">Enclosure Protection</td>
                    <td className="py-3 px-4">Mild Steel Powder-Coated (IP55/IP65) &amp; Stainless Steel 304/316 (IP66)</td>
                    <td className="py-3 px-4">Humid, dusty, or washdown food/tea processing environments</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
                Frequently Asked Questions: PLC &amp; IIoT Systems
              </h2>
              <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">
                Engineering questions answered regarding hardware choice, panel building, and software handoff.
              </p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <div
                  key={idx}
                  className="rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 font-semibold text-slate-900 dark:text-white text-base hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-colors"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`w-5 h-5 flex-shrink-0 text-slate-400 transition-transform ${
                        openFaq === idx ? "rotate-180 text-cyan-600" : ""
                      }`}
                    />
                  </button>
                  {openFaq === idx && (
                    <div className="px-5 pb-5 text-sm text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-slate-800 pt-4">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl p-8 sm:p-12 bg-gradient-to-br from-cyan-600 via-blue-700 to-slate-900 text-white relative overflow-hidden shadow-xl">
            <div className="relative z-10 max-w-2xl">
              <span className="text-xs font-semibold tracking-wider uppercase text-cyan-200">
                Custom Automation Engineering
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mt-2 mb-4 leading-tight">
                Ready to Commission a New Control Panel or IIoT System?
              </h2>
              <p className="text-cyan-100 text-sm sm:text-base mb-8 leading-relaxed">
                Connect with our automation engineers in Galle. We will review your I/O points, machinery specs, and telemetry requirements to prepare a detailed hardware bill of materials.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/tell-us-your-challenge"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white text-cyan-800 hover:bg-cyan-50 font-semibold shadow-md transition-all text-sm"
                >
                  <span>Request Engineering Proposal</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href="https://wa.me/94740709989?text=Hi%20Sanota,%20I%20am%20looking%20for%20a%20PLC%20control%20panel%20or%20IIoT%20solution."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-semibold shadow-md transition-all text-sm"
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>WhatsApp: +94 74 070 9989</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
