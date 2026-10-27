"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import {
  ShieldCheck,
  Clock,
  Activity,
  CheckCircle2,
  ChevronDown,
  ArrowRight,
  Shield,
  Layers,
  Settings,
  PhoneCall,
  Zap,
  HardDrive,
  AlertTriangle,
  FileText,
  MapPin,
} from "lucide-react";

const amcBenefits = [
  {
    title: "Thermal Infrared Panel Inspection",
    desc: "Thermal imaging of main breakers, contactors, and busbars to identify resistive hotspots and loose terminations before electrical fires or sudden phase dropouts occur.",
    icon: Zap,
  },
  {
    title: "Vibration & Acoustic Bearing Analysis",
    desc: "Periodic vibration spectrum monitoring on heavy conveyor drives, blowers, and pumps to spot roller bearing pitting weeks before mechanical seizure.",
    icon: Activity,
  },
  {
    title: "Guaranteed SLA Breakdown Response",
    desc: "Contracted priority callout response windows: 2–4 hours in Galle/Southern Province and 4–8 hours across Colombo and the Western industrial zones.",
    icon: Clock,
  },
  {
    title: "Secure PLC/HMI Cloud Code Archives",
    desc: "Complete program extraction and off-site cloud backups of all programmable controllers and drive parameters, preventing catastrophic data loss during power surges.",
    icon: HardDrive,
  },
  {
    title: "Pneumatics & Hydraulics Integrity Auditing",
    desc: "Comprehensive testing of pressure regulators, seals, filter-regulator-lubricator (FRL) units, and proportional valves to prevent slow cycle lag and pressure drops.",
    icon: Settings,
  },
  {
    title: "Executive Health Logs & Audit Reports",
    desc: "Detailed digital maintenance logs after every service visit, satisfying international compliance audits (ISO 9001, HACCP, GMP) and insurance requirements.",
    icon: FileText,
  },
];

const tiers = [
  {
    name: "Essential Care",
    badge: "Quarterly Routine",
    desc: "Ideal for small manufacturing workshops and single-shift operations looking to prevent unexpected electrical stoppages.",
    features: [
      "Quarterly on-site preventive service visits",
      "Thermal infrared panel scanning",
      "Full PLC/HMI program cloud backup",
      "General lubrication and pneumatic filter cleaning",
      "Standard priority emergency breakdown response",
      "10% discount on replacement spare parts",
    ],
  },
  {
    name: "Comprehensive Industrial",
    badge: "Most Popular",
    desc: "Designed for continuous 2-shift processing plants, tea factories, and food packaging lines with tight delivery deadlines.",
    features: [
      "Monthly scheduled maintenance visits",
      "Full thermal imaging & vibration analysis",
      "Bi-annual sensor recalibration",
      "Guaranteed 2–4 hour response window (Southern Province)",
      "24/7 on-call telephone engineering support",
      "Emergency spare part priority reservation",
      "Complimentary annual operator safety refresher",
    ],
  },
  {
    name: "Mission-Critical 24/7",
    badge: "Continuous Operations",
    desc: "Engineered for 24/7 continuous process plants, export manufacturing, and high-throughput beverage/food operations.",
    features: [
      "Bi-weekly on-site inspection visits",
      "Dedicated primary engineer assigned to plant",
      "Continuous IIoT remote telemetry health monitoring",
      "Instant 2-hour on-site dispatch 365 days a year",
      "Stocked on-site critical spare parts kit",
      "All emergency labor included in contract fee",
      "Full regulatory and insurance audit certification",
    ],
  },
];

const faqs = [
  {
    q: "What does an industrial machinery AMC from Sanota include?",
    a: "A Sanota Annual Maintenance Contract covers scheduled monthly or quarterly on-site mechanical and electrical inspections, thermal imaging of breaker panels, motor vibration checks, sensor calibration, PLC/HMI program cloud backups, and discounted priority emergency breakdown calls.",
  },
  {
    q: "What is your emergency breakdown response time in the Southern Province?",
    a: "For contract clients located in Galle, Matara, Bentota, and Ambalangoda, our engineering team responds on-site within 2 to 4 hours of notification. For clients in Colombo and the Western Province, response is within 4 to 8 hours.",
  },
  {
    q: "Can Sanota maintain machines built by other overseas manufacturers?",
    a: "Yes. The majority of machines we service were originally imported from China, India, Italy, Germany, or Taiwan. Our multi-disciplinary engineers reverse-engineer schematics and troubleshoot control faults regardless of the original equipment manufacturer.",
  },
  {
    q: "Do you keep backup copies of machine PLC software programs?",
    a: "Yes. During our initial onboarding audit, we upload and archive clean source code copies of all PLCs, HMIs, and VFD drive parameters to secure cloud storage and provide a physical backup drive kept inside your factory.",
  },
  {
    q: "How does preventive maintenance save factory operating costs?",
    a: "Preventive maintenance detects loose electrical terminals, bearing wear, and pneumatic leaks before they trigger catastrophic motor burnout or unscheduled multi-day production halts. Plants under regular maintenance typically reduce emergency downtime by 60% to 80%.",
  },
];

export default function AmcMaintenanceClient() {
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
            <span className="text-slate-900 dark:text-slate-200 font-medium">Machinery AMC &amp; Maintenance</span>
          </nav>
        </div>

        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-700 dark:text-emerald-400 text-xs sm:text-sm font-semibold mb-6">
            <ShieldCheck className="w-4 h-4" />
            <span>Guaranteed Uptime &amp; Rapid Breakdown Support • Sri Lanka</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-6 leading-tight">
            Industrial Machinery AMC &amp; Preventive Maintenance Contracts
          </h1>

          {/* 50-Word Direct Answer Box */}
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-emerald-500/30 shadow-lg shadow-emerald-500/5 mb-8">
            <p className="text-base sm:text-lg leading-relaxed text-slate-700 dark:text-slate-300">
              <strong className="text-emerald-600 dark:text-emerald-400 font-semibold">Direct Answer:</strong> Sanota provides Annual Maintenance Contracts (AMC) and rapid breakdown response for factory machinery across Sri Lanka. Our services include monthly/quarterly mechanical servicing, infrared panel thermography, PLC/HMI cloud backups, and guaranteed 2–4 hour on-site dispatch in the Southern Province, slashing unplanned plant downtime by up to 80%.
            </p>
          </div>

          {/* Quick Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
            <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
              <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">2–4 Hours</div>
              <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">Southern Province Emergency SLA</div>
            </div>
            <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">60%–80%</div>
              <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">Average Downtime Reduction</div>
            </div>
            <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
              <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">100% Backed Up</div>
              <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">PLC/HMI Cloud Recovery Files</div>
            </div>
            <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
              <div className="text-2xl font-bold text-amber-600 dark:text-amber-400">IR Thermography</div>
              <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">Electrical Panel Fire Prevention</div>
            </div>
          </div>
        </section>

        {/* What Our AMC Covers */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-3">
              Comprehensive Machine Health &amp; Reliability Scope
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
              Predictive diagnostics and rigorous mechanical care that stop expensive breakdowns before they happen.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {amcBenefits.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Service Tier Matrix */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
              Tailored Coverage
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mt-1">
              Select The Right Maintenance Level For Your Facility
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {tiers.map((tier, idx) => (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                    {tier.badge}
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-4 mb-2">{tier.name}</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">{tier.desc}</p>
                  <ul className="space-y-3 mb-8">
                    {tier.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <Link
                  href="/tell-us-your-challenge"
                  className="w-full text-center py-3 rounded-xl bg-slate-100 hover:bg-emerald-500 hover:text-white text-slate-900 dark:bg-slate-800 dark:text-slate-100 dark:hover:bg-emerald-600 font-semibold transition-all text-sm"
                >
                  Request Quote For {tier.name}
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* FAQs */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
                Frequently Asked Questions: Industrial AMC
              </h2>
              <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">
                Questions on response times, imported machines, and contract terms.
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
                        openFaq === idx ? "rotate-180 text-emerald-600" : ""
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
          <div className="rounded-3xl p-8 sm:p-12 bg-gradient-to-br from-emerald-600 via-teal-700 to-slate-900 text-white relative overflow-hidden shadow-xl">
            <div className="relative z-10 max-w-2xl">
              <span className="text-xs font-semibold tracking-wider uppercase text-emerald-200">
                Prevent Factory Stoppages
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mt-2 mb-4 leading-tight">
                Protect Your Plant With A Dedicated Engineering AMC
              </h2>
              <p className="text-emerald-100 text-sm sm:text-base mb-8 leading-relaxed">
                Contact our maintenance engineering division in Galle for a preliminary site inspection. We will audit your machinery inventory and propose a tailored annual support plan.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/tell-us-your-challenge"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white text-emerald-800 hover:bg-emerald-50 font-semibold shadow-md transition-all text-sm"
                >
                  <span>Request Factory Site Audit</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href="https://wa.me/94740709989?text=Hi%20Sanota,%20I%20am%20interested%20in%20an%20industrial%20machinery%20AMC%20or%20maintenance%20contract."
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
