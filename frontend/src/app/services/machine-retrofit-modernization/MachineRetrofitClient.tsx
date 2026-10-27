"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import {
  Wrench,
  Cpu,
  RefreshCw,
  CheckCircle2,
  ChevronDown,
  ArrowRight,
  Shield,
  Layers,
  Settings,
  PhoneCall,
  Zap,
  Gauge,
  Clock,
  Sliders,
} from "lucide-react";

const retrofitCapabilities = [
  {
    title: "Obsolete PLC & Controller Migration",
    desc: "Migrate legacy Omron Sysmac, Siemens S5/early S7, Mitsubishi FX1N/FX2N, and obscure proprietary controller boards to modern, easily sourcable Delta, Siemens S7-1200, or Schneider Modicon platforms.",
    icon: Cpu,
  },
  {
    title: "Relay-to-PLC Panel Overhaul",
    desc: "Replace chaotic, aging electro-mechanical relay logic banks with clean, compact DIN-rail PLC panels. Drastically reduce wiring failure points, false trips, and diagnostic headaches.",
    icon: RefreshCw,
  },
  {
    title: "Touchscreen HMI Integration",
    desc: "Replace worn-out pushbuttons, rotary switches, and analog dials with 7-inch to 15-inch industrial touchscreens showing recipe memories, real-time alarms, cycle timers, and diagnostic screens.",
    icon: Sliders,
  },
  {
    title: "VFD & Servo Motor Modernization",
    desc: "Upgrade inefficient direct-on-line (DOL) starters with variable frequency drives (VFD) and precision closed-loop servo motors for superior speed control and up to 30% electrical energy savings.",
    icon: Zap,
  },
  {
    title: "Hydraulic & Pneumatic Valving Re-Automation",
    desc: "Integrate modern proportional valves, digital pressure transducers, and solid-state limit sensors to eliminate cycle lag, fluid hammer, and repeatability drift on heavy industrial presses.",
    icon: Gauge,
  },
  {
    title: "Safety Interlock & Cat-3/4 Compliance",
    desc: "Incorporate safety door switches, dual-channel emergency stop circuits, safety relays, and optical light curtains to protect operators and achieve compliance with international factory audit standards.",
    icon: Shield,
  },
];

const processSteps = [
  {
    step: "01",
    title: "On-Site Audit & Machine Assessment",
    desc: "Our engineers inspect your machine on the factory floor, trace legacy wiring, document I/O points, and evaluate mechanical actuator conditions.",
  },
  {
    step: "02",
    title: "Functional Specification & Hardware Selection",
    desc: "We formulate a detailed retrofit proposal specifying modern PLC/HMI models, power supplies, safety devices, and estimated payback periods.",
  },
  {
    step: "03",
    title: "Electrical CAD Schematics & Ladder Logic",
    desc: "Full schematic drafting in EPLAN/AutoCAD Electrical, complete with wire numbering schedules and modular ladder logic code development.",
  },
  {
    step: "04",
    title: "Workshop Panel Fabrication & Pre-Testing",
    desc: "Custom control panel fabrication, terminal block wiring, and hardware simulation inside our Galle engineering workshop prior to site delivery.",
  },
  {
    step: "05",
    title: "Fast-Track On-Site Installation (2–4 Days)",
    desc: "Coordinated installation during scheduled factory maintenance or weekend shift pauses to keep your production downtime to an absolute minimum.",
  },
  {
    step: "06",
    title: "Commissioning, Operator Training & Documentation",
    desc: "Full-speed production trial runs, hands-on operator training, printed wiring manuals, and backup program files delivered on USB flash storage.",
  },
];

const faqs = [
  {
    q: "Can Sanota replace obsolete PLC panels without replacing mechanical machinery?",
    a: "Yes. Sanota specializes in replacing obsolete or discontinued PLCs (such as older Omron, Siemens S5, or Mitsubishi FX series) with modern Delta, Siemens S7-1200, or Schneider PLCs while keeping your existing mechanical actuators, motors, and hydraulic frames intact.",
  },
  {
    q: "What is the typical cost saving of retrofitting compared to buying a new machine?",
    a: "Retrofitting an industrial machine typically costs between 15% and 35% of the capital expenditure required to purchase and import a brand new machine. It also avoids long international shipping lead times and costly customs tariffs.",
  },
  {
    q: "How much factory downtime is required during an electrical panel retrofit?",
    a: "Sanota designs, fabricates, wires, and pre-tests the entire control panel at our Galle workshop before delivery. On-site installation and field rewiring usually requires only 2 to 4 days of scheduled plant downtime.",
  },
  {
    q: "Do you supply complete electrical schematic drawings with the retrofitted machine?",
    a: "Yes. Every machine retrofit delivered by Sanota includes complete CAD electrical schematics, ferruled wiring numbers, an updated bill of materials, and annotated PLC ladder logic documentation.",
  },
  {
    q: "Does Sanota provide emergency on-site support if an upgraded machine encounters an issue?",
    a: "Yes. We offer rapid on-site breakdown response across the Southern and Western Provinces, backed by optional secure cellular remote diagnostics modules for immediate online troubleshooting.",
  },
];

export default function MachineRetrofitClient() {
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
            <span className="text-slate-900 dark:text-slate-200 font-medium">Machine Retrofit &amp; Modernization</span>
          </nav>
        </div>

        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-700 dark:text-blue-400 text-xs sm:text-sm font-semibold mb-6">
            <Wrench className="w-4 h-4" />
            <span>Industrial Machinery Life Extension • Sri Lanka</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-6 leading-tight">
            Industrial Machine Retrofit &amp; Obsolete PLC Modernization
          </h1>

          {/* 50-Word Direct Answer Box */}
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-blue-500/30 shadow-lg shadow-blue-500/5 mb-8">
            <p className="text-base sm:text-lg leading-relaxed text-slate-700 dark:text-slate-300">
              <strong className="text-blue-600 dark:text-blue-400 font-semibold">Direct Answer:</strong> Industrial machine retrofitting replaces discontinued PLCs, burnt relay logic, and faulty electrical controls with modern programmable automation, touchscreen HMIs, and VFD drives while preserving heavy mechanical frames. Sanota delivers custom panel design, CAD schematics, and rapid 2–4 day on-site commissioning across Sri Lanka at 15–35% of new machinery costs.
            </p>
          </div>

          {/* Quick Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
            <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">15%–35%</div>
              <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">Cost vs. New Machine Import</div>
            </div>
            <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
              <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">2–4 Days</div>
              <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">Typical On-Site Factory Downtime</div>
            </div>
            <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
              <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">100% CAD</div>
              <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">Full Ferruled Wiring Documentation</div>
            </div>
            <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
              <div className="text-2xl font-bold text-amber-600 dark:text-amber-400">Galle + Islandwide</div>
              <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">Workshop Pre-Built &amp; Field Tested</div>
            </div>
          </div>
        </section>

        {/* Capabilities Grid */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-3">
              Comprehensive Machine Retrofit Capabilities
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
              From standalone hydraulic presses and tea processing machinery to continuous packaging lines, we engineer turnkey electrical, electronic, and software overhauls.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {retrofitCapabilities.map((item, idx) => {
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

        {/* 6-Step Engineering Methodology */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
            <div className="max-w-3xl mb-10">
              <span className="text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                Rigorous Execution
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mt-1">
                Our 6-Step Machine Retrofitting Process
              </h2>
              <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">
                Every panel is pre-wired and bench-tested at our Galle facility before arriving at your factory floor, guaranteeing minimal disruption.
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

        {/* Comparative Spec Matrix */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
              Retrofitting vs. Importing New Machinery: Comparison
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm border-collapse">
                <thead>
                  <tr className="border-b border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-400 font-semibold">
                    <th className="py-3 px-4">Decision Factor</th>
                    <th className="py-3 px-4 text-blue-600 dark:text-blue-400">Sanota Machine Retrofit</th>
                    <th className="py-3 px-4 text-slate-500">Importing Brand New Machinery</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-slate-700 dark:text-slate-300">
                  <tr>
                    <td className="py-3 px-4 font-semibold text-slate-900 dark:text-white">Capital Cost (CAPEX)</td>
                    <td className="py-3 px-4 font-medium text-emerald-600 dark:text-emerald-400">15% – 35% of machine cost (LKR/USD)</td>
                    <td className="py-3 px-4">100% full foreign currency purchase + import duty</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-semibold text-slate-900 dark:text-white">Lead Time to Commission</td>
                    <td className="py-3 px-4 font-medium text-emerald-600 dark:text-emerald-400">3 – 6 Weeks total turnaround</td>
                    <td className="py-3 px-4">4 – 9 Months overseas manufacturing &amp; freight</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-semibold text-slate-900 dark:text-white">Spare Parts Availability</td>
                    <td className="py-3 px-4 font-medium text-emerald-600 dark:text-emerald-400">Standard, off-the-shelf industrial parts in Sri Lanka</td>
                    <td className="py-3 px-4">Proprietary OEM cards requiring overseas air freight</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-semibold text-slate-900 dark:text-white">Mechanical Operator Adaptation</td>
                    <td className="py-3 px-4 font-medium text-emerald-600 dark:text-emerald-400">Zero retraining needed on physical machine operation</td>
                    <td className="py-3 px-4">Substantial downtime to train operators on new mechanics</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-semibold text-slate-900 dark:text-white">Local Engineering Support</td>
                    <td className="py-3 px-4 font-medium text-emerald-600 dark:text-emerald-400">Direct on-site support from Galle workshop</td>
                    <td className="py-3 px-4">Costly overseas technician flight &amp; visa fees</td>
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
                Frequently Asked Questions: Machine Retrofitting
              </h2>
              <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">
                Clear engineering answers for plant managers, maintenance heads, and operational directors.
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

        {/* High Conversion CTA Banner */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl p-8 sm:p-12 bg-gradient-to-br from-blue-600 via-indigo-700 to-slate-900 text-white relative overflow-hidden shadow-xl">
            <div className="relative z-10 max-w-2xl">
              <span className="text-xs font-semibold tracking-wider uppercase text-blue-200">
                Extend Machine Life Today
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mt-2 mb-4 leading-tight">
                Have a Failing Machine or Obsolete Control Panel?
              </h2>
              <p className="text-blue-100 text-sm sm:text-base mb-8 leading-relaxed">
                Send us a photo or video of your existing control panel and machine nameplate. Our engineering team in Galle will evaluate your setup and provide a free preliminary retrofit assessment.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/tell-us-your-challenge"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white text-blue-700 hover:bg-blue-50 font-semibold shadow-md transition-all text-sm"
                >
                  <span>Request Machine Retrofit Assessment</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href="https://wa.me/94740709989?text=Hi%20Sanota,%20I%20have%20an%20industrial%20machine%20or%20PLC%20panel%20that%20needs%20retrofitting."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-semibold shadow-md transition-all text-sm"
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>WhatsApp Photo/Video: +94 74 070 9989</span>
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
