"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import {
  Factory,
  Cog,
  CheckCircle2,
  ChevronDown,
  ArrowRight,
  Shield,
  Layers,
  Settings,
  PhoneCall,
  Zap,
  Activity,
  BarChart3,
  Sliders,
  Box,
  Truck,
  RotateCw,
} from "lucide-react";

const solutions = [
  {
    title: "Synchronized Assembly & Conveyor Lines",
    desc: "Modular belt, slat, and roller assembly conveyors with synchronized indexing stations, variable speed motor drives, and optical part presence sensors for continuous workflow.",
    icon: RotateCw,
  },
  {
    title: "Pneumatic Pick-and-Place & Transfer Gantries",
    desc: "Cartesian 2-axis and 3-axis pneumatic and servo transfer mechanisms for automated part feeding, mold unloading, and packaging carton collation.",
    icon: Box,
  },
  {
    title: "End-of-Line Quality Assurance Test Rigs",
    desc: "Automated test benches with integrated pressure decay leak testers, torque meters, load cells, and vision cameras that reject out-of-spec products automatically.",
    icon: Shield,
  },
  {
    title: "Plant-Wide SCADA & Production Counters",
    desc: "Centralized factory floor displays showing live cycle times, hourly unit counts, Overall Equipment Effectiveness (OEE), and automated downtime Pareto charts.",
    icon: BarChart3,
  },
  {
    title: "Hydraulic & Mechanical Press Automation",
    desc: "Automated die clamping, programmable tonnage regulation, two-hand anti-tie-down safety interlocks, and optical light curtains for high-speed stamping operations.",
    icon: Cog,
  },
  {
    title: "Safety Enclosures & Category 3/4 Interlocking",
    desc: "Extruded aluminum safety enclosures, safety-rated interlock tongue switches, and dual-channel safety relays ensuring operator protection and audit compliance.",
    icon: Activity,
  },
];

const processSteps = [
  {
    step: "01",
    title: "Line Bottleneck & Cycle Time Study",
    desc: "We analyze your takt time, part transit buffers, manual handling stages, and reject rates across your current production line.",
  },
  {
    step: "02",
    title: "Cell Layout & Kinematic 3D Simulation",
    desc: "Drafting 3D CAD factory layouts, sizing pneumatic/servo strokes, and verifying clearance envelopes to ensure smooth line integration.",
  },
  {
    step: "03",
    title: "Mechanical Fabrication & Sensor Fitting",
    desc: "Precision machining of guide rails, tooling nests, cylinder mounting plates, and pneumatic manifold banks in our Galle workshop.",
  },
  {
    step: "04",
    title: "PLC Logic & Safety Circuit Assembly",
    desc: "Multi-axis motion programming, fault recovery routines, emergency stop circuits, and touchscreen operator consoles.",
  },
  {
    step: "05",
    title: "Off-Site Workshop Simulation (FAT)",
    desc: "Full cycle dry-running with customer product blanks to verify cycle times, clamping stability, and sensor repeatability.",
  },
  {
    step: "06",
    title: "Weekend Site Commissioning & Line Ramp",
    desc: "Rapid mechanical bolting, electrical hookup, and on-site operator training completed over scheduled plant shifts.",
  },
];

const faqs = [
  {
    q: "What manufacturing sectors in Sri Lanka does Sanota provide automation for?",
    a: "Sanota serves diverse manufacturing industries including rubber and tire products, plastic injection molding and blow molding, apparel and textile finishing, corrugated carton packaging, consumer goods assembly, and metal fabrication plants across Sri Lanka.",
  },
  {
    q: "How does Sanota automate legacy semi-manual manufacturing lines?",
    a: "We evaluate your manual bottlenecks, then design modular automated stations—such as pneumatic part clamp fixtures, pick-and-place transfer arms, and indexing conveyors—that integrate directly into your existing line layout without requiring a complete factory rebuild.",
  },
  {
    q: "Can Sanota integrate automated quality control and pass/fail testing stations?",
    a: "Yes. We build automated testing fixtures equipped with load cells, pneumatic leak detectors, vision cameras, and laser distance gauges that automatically verify parts and stamp or sort rejects without operator intervention.",
  },
  {
    q: "What safety systems are incorporated into automated manufacturing lines?",
    a: "All automated systems comply with international machinery safety standards (ISO 13849 Category 3/4), featuring safety light curtains, dual-channel emergency stop pull-cords, interlocked poly-carbonate safety doors, and monitored safety dump valves.",
  },
  {
    q: "How do you minimize factory disruption during automation installation?",
    a: "We pre-build, wire, program, and simulate all automated cells at our Galle workshop. On-site installation is scheduled during scheduled factory maintenance pauses or weekends to prevent loss of customer production shifts.",
  },
];

export default function ManufacturingClient() {
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
            <Link href="/industries" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              Industries
            </Link>
            <span>/</span>
            <span className="text-slate-900 dark:text-slate-200 font-medium">Manufacturing Automation</span>
          </nav>
        </div>

        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-700 dark:text-blue-400 text-xs sm:text-sm font-semibold mb-6">
            <Factory className="w-4 h-4" />
            <span>Industrial Line Automation &amp; Production Engineering</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-6 leading-tight">
            Industrial Manufacturing Automation &amp; Production Line Engineering in Sri Lanka
          </h1>

          {/* 50-Word Direct Answer Box */}
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-blue-500/30 shadow-lg shadow-blue-500/5 mb-8">
            <p className="text-base sm:text-lg leading-relaxed text-slate-700 dark:text-slate-300">
              <strong className="text-blue-600 dark:text-blue-400 font-semibold">Direct Answer:</strong> Sanota engineers custom manufacturing automation solutions, synchronized assembly lines, and automated testing jigs for industrial producers across Sri Lanka. By combining precision mechanical fabrication in Galle with multi-brand PLC programming and safety interlocks, we boost plant throughput by 30–50% while reducing labor costs and defect rates.
            </p>
          </div>

          {/* Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
            <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">30%–50%</div>
              <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">Throughput Increase</div>
            </div>
            <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
              <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">Cat 3 / Cat 4</div>
              <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">ISO 13849 Safety Compliance</div>
            </div>
            <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
              <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">Real-Time OEE</div>
              <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">SCADA Floor Metrics Tracking</div>
            </div>
            <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
              <div className="text-2xl font-bold text-amber-600 dark:text-amber-400">Galle Workshop</div>
              <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">Pre-Tested FAT Deployments</div>
            </div>
          </div>
        </section>

        {/* Solutions Grid */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-3">
              Automated Manufacturing Systems We Deliver
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
              Custom-engineered automation built to eradicate bottlenecks on rubber, plastics, packaging, and hardware production lines.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutions.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* 6-Phase Engineering Flow */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
            <div className="max-w-3xl mb-10">
              <span className="text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                Turnkey Delivery
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mt-1">
                Our 6-Step Manufacturing Automation Methodology
              </h2>
              <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">
                We simulate and dry-run every mechanical station in our workshop before entering your plant.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {processSteps.map((step, idx) => (
                <div key={idx} className="relative p-6 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-700/60">
                  <span className="text-3xl font-black text-blue-600/30 dark:text-blue-400/30 mb-2 block">
                    {step.step}
                  </span>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">{step.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technical Spec Matrix */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
              Factory Automation Technical Parameters &amp; Standards
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm border-collapse">
                <thead>
                  <tr className="border-b border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-400 font-semibold">
                    <th className="py-3 px-4">Discipline</th>
                    <th className="py-3 px-4">Automation Specification</th>
                    <th className="py-3 px-4">Plant Benefit</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-slate-700 dark:text-slate-300">
                  <tr>
                    <td className="py-3 px-4 font-semibold text-slate-900 dark:text-white">Motion &amp; Actuation</td>
                    <td className="py-3 px-4">Festo / SMC guided pneumatic slides &amp; AC servo actuators (±0.05mm repeatability)</td>
                    <td className="py-3 px-4">High-speed, jitter-free part placement without product scratching</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-semibold text-slate-900 dark:text-white">Conveyor Systems</td>
                    <td className="py-3 px-4">Modular plastic chain, aluminum profile frame, flat rubber, and powered rollers</td>
                    <td className="py-3 px-4">Low maintenance, quiet operation, and quick line reconfiguration</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-semibold text-slate-900 dark:text-white">Inspection Sensors</td>
                    <td className="py-3 px-4">Laser distance sensors, photoelectric contrast scanners &amp; Keyence vision cameras</td>
                    <td className="py-3 px-4">Instant part presence, orientation, and dimensional defect verification</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-semibold text-slate-900 dark:text-white">Safety Architecture</td>
                    <td className="py-3 px-4">Safety PLC / Safety relays with dual-channel E-stops &amp; Type-4 optical light curtains</td>
                    <td className="py-3 px-4">Protects machine operators, satisfies multinational buyer compliance</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-semibold text-slate-900 dark:text-white">SCADA / IoT Reporting</td>
                    <td className="py-3 px-4">Real-time MQTT telemetry reporting to floor display boards and manager phones</td>
                    <td className="py-3 px-4">Immediate notification of line bottlenecks or micro-stoppages</td>
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
                Frequently Asked Questions: Manufacturing Automation
              </h2>
              <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">
                Answers to common questions regarding line retrofitting, safety, and cycle times.
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
                        openFaq === idx ? "rotate-180 text-blue-600" : ""
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
          <div className="rounded-3xl p-8 sm:p-12 bg-gradient-to-br from-blue-600 via-indigo-700 to-slate-900 text-white relative overflow-hidden shadow-xl">
            <div className="relative z-10 max-w-2xl">
              <span className="text-xs font-semibold tracking-wider uppercase text-blue-200">
                Elevate Factory Productivity
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mt-2 mb-4 leading-tight">
                Automate Your Plant Production Lines With Sanota
              </h2>
              <p className="text-blue-100 text-sm sm:text-base mb-8 leading-relaxed">
                Invite our production automation engineers for an on-site takt time and bottleneck evaluation. We will propose automated cell concepts that pay for themselves within months.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/tell-us-your-challenge"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white text-blue-700 hover:bg-blue-50 font-semibold shadow-md transition-all text-sm"
                >
                  <span>Request Factory Automation Audit</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href="https://wa.me/94740709989?text=Hi%20Sanota,%20I%20am%20interested%20in%20manufacturing%20automation%20or%20assembly%20line%20systems."
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
