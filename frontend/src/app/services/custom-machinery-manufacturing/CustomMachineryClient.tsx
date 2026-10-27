"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import {
  Cog,
  Wrench,
  PenTool,
  CheckCircle2,
  ChevronDown,
  ArrowRight,
  Shield,
  Layers,
  Settings,
  PhoneCall,
  Zap,
  Box,
  Truck,
  FileCheck,
} from "lucide-react";

const machineTypes = [
  {
    title: "Special Purpose Machinery (SPM)",
    desc: "Dedicated automated machines custom-tailored to perform specific, non-standard manufacturing operations—such as multi-axis drilling, automated folding, pressing, or winding.",
    icon: Cog,
  },
  {
    title: "Automated Assembly & Feeder Systems",
    desc: "Rotary dial indexing tables, pneumatic pick-and-place arms, vibratory bowl feeders, and synchronized linear conveyor lines that replace repetitive manual assembly operations.",
    icon: Layers,
  },
  {
    title: "Quality Assurance & Test Benches",
    desc: "Precision end-of-line test rigs with digital load cells, pressure decay leak testers, torque transducers, and automated pass/fail barcode labeling systems.",
    icon: FileCheck,
  },
  {
    title: "Food & Agricultural Processing Units",
    desc: "Sanitary stainless steel 304/316 conveyorized sorting belts, automated spice dehydrators, fruit pulping vats, and computerized liquid dosing blenders.",
    icon: Box,
  },
  {
    title: "Hydraulic & Pneumatic Presses",
    desc: "Precision forming, stamping, and shearing presses featuring programmable tonnage, multi-stage pressure ramping, and opto-electronic safety curtains.",
    icon: Wrench,
  },
  {
    title: "Material Handling & Transfer Gantries",
    desc: "Overhead automated cartesian transfer gantries, heavy roller conveyors, and custom scissor lifts optimized for cramped factory floor layouts.",
    icon: Truck,
  },
];

const processSteps = [
  {
    step: "01",
    title: "Operational Brief & Functional Requirement",
    desc: "We define cycle times, throughput targets, payload weights, dimensional constraints, and operator safety requirements.",
  },
  {
    step: "02",
    title: "3D CAD Modeling & Kinematic Simulation",
    desc: "Parametric mechanical modeling in SolidWorks, structural stress calculation (FEA), and virtual 3D walkthroughs with your engineering team.",
  },
  {
    step: "03",
    title: "Component Selection & Tolerance Design",
    desc: "Sourcing premium linear guideways, ball screws, pneumatic actuators, and electric motors with high domestic availability.",
  },
  {
    step: "04",
    title: "Precision Workshop Machining & Fabrication",
    desc: "Laser cutting, CNC milling, precision lathe turning, TIG/MIG welding, and powder-coating inside our Galle workshop.",
  },
  {
    step: "05",
    title: "Electrical, Pneumatic & PLC Integration",
    desc: "Wiring of custom control panels, valve manifolds, touchscreen HMIs, and interlocking safety guard sensors.",
  },
  {
    step: "06",
    title: "Factory Dry Run, FAT & Site Commissioning",
    desc: "Rigorous test runs with actual customer materials, fine-tuning of cycle times, comprehensive manuals, and warranty signoff.",
  },
];

const faqs = [
  {
    q: "What types of custom machinery does Sanota design and build?",
    a: "Sanota builds Special Purpose Machines (SPMs), automated parts assembly fixtures, spice and crop dehydrators, conveyor sorting lines, hydraulic presses, automated liquid dosing systems, and custom quality inspection test benches.",
  },
  {
    q: "How does Sanota validate the design before starting mechanical fabrication?",
    a: "We create full 3D CAD parametric models in SolidWorks/Autodesk Inventor, perform Finite Element Analysis (FEA) for structural stresses, and review detailed digital simulations with your team prior to cutting steel or ordering actuators.",
  },
  {
    q: "Where are the machines manufactured and assembled?",
    a: "All structural fabrication, precision machining, electrical panel building, and sensor wiring are completed inside our dedicated engineering workshop in Bataganwila, Galle, Sri Lanka.",
  },
  {
    q: "Do you supply spare parts and technical support in Sri Lanka?",
    a: "Yes. Because every machine is engineered locally, all bearings, pneumatic cylinders, sensors, and electrical components are standardized for local availability, eliminating reliance on overseas vendor lead times.",
  },
  {
    q: "Can Sanota manufacture machines adhering to food-grade hygiene standards?",
    a: "Yes. For food, tea, and pharmaceutical processing, we construct contact surfaces using AISI 304 or 316 stainless steel with sanitary welds, food-grade lubricants, and washdown IP66 electrical enclosures.",
  },
];

export default function CustomMachineryClient() {
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
            <span className="text-slate-900 dark:text-slate-200 font-medium">Custom Machinery Manufacturing</span>
          </nav>
        </div>

        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-700 dark:text-amber-400 text-xs sm:text-sm font-semibold mb-6">
            <Cog className="w-4 h-4" />
            <span>Turnkey Special Purpose Machinery (SPM) • Galle Workshop</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-6 leading-tight">
            Custom Machinery Design &amp; Special Purpose Machine (SPM) Manufacturing
          </h1>

          {/* 50-Word Direct Answer Box */}
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-amber-500/30 shadow-lg shadow-amber-500/5 mb-8">
            <p className="text-base sm:text-lg leading-relaxed text-slate-700 dark:text-slate-300">
              <strong className="text-amber-600 dark:text-amber-400 font-semibold">Direct Answer:</strong> Sanota designs, manufactures, and commissions custom industrial machinery and automated assembly stations in Galle, Sri Lanka. Combining 3D CAD modeling, precision workshop fabrication, and automated PLC control systems, we produce high-durability production equipment tailored to your exact factory floor specifications without expensive overseas imports.
            </p>
          </div>

          {/* Quick Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
            <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
              <div className="text-2xl font-bold text-amber-600 dark:text-amber-400">100% Custom</div>
              <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">Built to Your Exact Production Spec</div>
            </div>
            <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">SolidWorks 3D</div>
              <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">Full Digital Simulation &amp; FEA</div>
            </div>
            <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
              <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">SS304 / SS316</div>
              <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">Food-Grade &amp; Washdown Options</div>
            </div>
            <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
              <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">Local Spares</div>
              <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">Zero Reliance on Foreign OEM Leads</div>
            </div>
          </div>
        </section>

        {/* Categories of Custom Machinery */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-3">
              Custom Industrial Machines We Engineer
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
              Engineered from the ground up to solve manufacturing bottlenecks that off-the-shelf equipment cannot handle.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {machineTypes.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center mb-4">
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
              <span className="text-xs font-semibold uppercase tracking-wider text-amber-600 dark:text-amber-400">
                End-To-End Development
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mt-1">
                How We Take A Machine Concept From CAD To Reality
              </h2>
              <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">
                Our collaborative engineering process ensures you review and approve every 3D model and mechanism before manufacturing begins.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {processSteps.map((step, idx) => (
                <div key={idx} className="relative p-6 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-700/60">
                  <span className="text-3xl font-black text-amber-600/30 dark:text-amber-400/30 mb-2 block">
                    {step.step}
                  </span>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">{step.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Engineering Specifications Matrix */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
              Machinery Manufacturing Standards &amp; Fabrication Capabilities
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm border-collapse">
                <thead>
                  <tr className="border-b border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-400 font-semibold">
                    <th className="py-3 px-4">Discipline</th>
                    <th className="py-3 px-4">Workshop Capabilities</th>
                    <th className="py-3 px-4">Customer Benefit</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-slate-700 dark:text-slate-300">
                  <tr>
                    <td className="py-3 px-4 font-semibold text-slate-900 dark:text-white">Structural Materials</td>
                    <td className="py-3 px-4">Mild Steel (MS 1018/1020), Stainless Steel (AISI 304 / 316L), Extruded Aluminum Profiles</td>
                    <td className="py-3 px-4">Optimized rigidity, vibration damping, or food-grade hygiene</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-semibold text-slate-900 dark:text-white">Machining Tolerances</td>
                    <td className="py-3 px-4">Precision CNC milling &amp; lathe turning down to ±0.02 mm</td>
                    <td className="py-3 px-4">Smooth bearing fits, zero play on slides, and extended fatigue life</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-semibold text-slate-900 dark:text-white">Pneumatic &amp; Hydraulic Systems</td>
                    <td className="py-3 px-4">Festo, SMC, and Yuken directional valves, cylinders, and power packs</td>
                    <td className="py-3 px-4">Rapid cycle speeds, uniform clamping force, and leak-free reliability</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-semibold text-slate-900 dark:text-white">Safety Compliance</td>
                    <td className="py-3 px-4">ISO 13849 Category 3/4 dual-channel safety circuits, interlocked guarding</td>
                    <td className="py-3 px-4">Protection for operators, passed international safety audits</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-semibold text-slate-900 dark:text-white">Surface Finishing</td>
                    <td className="py-3 px-4">Zinc electroplating, hard chrome plating, industrial epoxy powder coating</td>
                    <td className="py-3 px-4">Resistant to coastal humidity, steam, washdown sprays, and acids</td>
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
                Frequently Asked Questions: Custom Machine Design
              </h2>
              <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">
                Key questions about development timelines, CAD reviews, and maintenance.
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
                        openFaq === idx ? "rotate-180 text-amber-600" : ""
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
          <div className="rounded-3xl p-8 sm:p-12 bg-gradient-to-br from-amber-600 via-orange-700 to-slate-900 text-white relative overflow-hidden shadow-xl">
            <div className="relative z-10 max-w-2xl">
              <span className="text-xs font-semibold tracking-wider uppercase text-amber-200">
                Custom Machine Engineering
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mt-2 mb-4 leading-tight">
                Have A Machine Concept You Need Built In Sri Lanka?
              </h2>
              <p className="text-amber-100 text-sm sm:text-base mb-8 leading-relaxed">
                Book a consultation with our mechanical and automation team. Bring your product samples, sketches, or production targets, and let&apos;s build an engineered solution together.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/tell-us-your-challenge"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white text-amber-800 hover:bg-amber-50 font-semibold shadow-md transition-all text-sm"
                >
                  <span>Discuss Your Custom Machine</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href="https://wa.me/94740709989?text=Hi%20Sanota,%20I%20have%20a%20custom%20machine%20design%20or%20manufacturing%20inquiry."
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
