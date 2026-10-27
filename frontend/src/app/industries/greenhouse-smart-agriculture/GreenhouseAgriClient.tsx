"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import {
  Sprout,
  Droplets,
  Sun,
  CloudRain,
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
  ThermometerSun,
  Cpu,
} from "lucide-react";

const agriSolutions = [
  {
    title: "Commercial Multi-Channel Smart Fertigation",
    desc: "Automated inline fertilizer injection skids featuring Tank A, Tank B, and Acid dosing channels with continuous toroidal EC and pH sensor feedback for exact parts-per-million (PPM) nutrient feeding.",
    icon: Droplets,
  },
  {
    title: "VPD-Driven Climate Automation",
    desc: "Real-time Vapor Pressure Deficit (VPD) algorithmic control orchestrating motorized ridge vents, roll-up side curtains, internal shade screens, and circulating fans to prevent leaf tip burn and fungal mildew.",
    icon: ThermometerSun,
  },
  {
    title: "High-Pressure Fogging & Misting Systems",
    desc: "70-bar stainless misting lines with anti-drip ceramic nozzles designed to lower internal polyhouse temperatures by 4°C–8°C during peak tropical afternoon radiation without wetting foliage.",
    icon: CloudRain,
  },
  {
    title: "Multi-Zone Solenoid Irrigation Manifolds",
    desc: "Pressure-compensating drip manifolds divided into multiple crop blocks, scheduled dynamically based on volumetric soil moisture sensors (TDR) or solar radiation accumulation (Joules/cm²).",
    icon: Layers,
  },
  {
    title: "Off-Grid Solar PV & Battery Field Automation",
    desc: "Ruggedized solar power packages designed for remote agricultural lands in Hambantota, Dambulla, or Nuwara Eliya, providing autonomous continuous operation without grid reliance.",
    icon: Sun,
  },
  {
    title: "Cloud Agronomy Dashboard & Mobile Alerts",
    desc: "4G cellular IoT gateways streaming live EC, pH, substrate water content, and water meter cubic-meter flow rates to smartphone apps with automated SMS alarms for pipe bursts or dry tanks.",
    icon: BarChart3,
  },
];

const processSteps = [
  {
    step: "01",
    title: "Farm Agronomy & Water Quality Assessment",
    desc: "We analyze your raw irrigation water analysis (bicarbonates, SAR, baseline EC/pH), polyhouse dimensions, and target crop nutrient curves.",
  },
  {
    step: "02",
    title: "Hydraulic Sizing & Manifold CAD Design",
    desc: "Calculating exact flow rates (m³/h), pipe head losses, dosing pump capacities, and dividing the farm into balanced irrigation blocks.",
  },
  {
    step: "03",
    title: "Fertigation Skid & Control Panel Assembly",
    desc: "Complete assembly of stainless steel framing, industrial dosing pumps, mixing tanks, and IP66 PLC electrical panels in our Galle workshop.",
  },
  {
    step: "04",
    title: "On-Site Piping, Sensor & Valve Deployment",
    desc: "Plumbing connections to main reservoirs, laying solenoid control cables, and calibrating soil and climate sensor probes inside the polyhouse.",
  },
  {
    step: "05",
    title: "Closed-Loop EC/pH Calibration Trials",
    desc: "Running full water test batches with actual fertilizer stock solutions to calibrate proportional dosing loops and establish safety cutoffs.",
  },
  {
    step: "06",
    title: "Agronomist Handover & Routine Sensor Servicing",
    desc: "Staff training on recipe changes, supplying electrode cleaning solutions, and periodic sensor recalibration under our agricultural AMC.",
  },
];

const faqs = [
  {
    q: "What components are included in a commercial smart fertigation dosing system integration?",
    a: "A Sanota commercial fertigation system incorporates multi-channel proportional fertilizer dosing channels (Tank A, Tank B, Acid/pH corrector), industrial-grade toroidal EC and glass-electrode pH transmitters, a stainless mixing chamber, multi-valve solenoid manifold for zone irrigation, and a central PLC with touchscreen recipe controls.",
  },
  {
    q: "What is the typical ROI and cost justification for an automated greenhouse climate control system?",
    a: "Commercial growers in Sri Lanka cultivating bell peppers, tomatoes, strawberries, and cut foliage typically recover their automation investment within 8 to 14 months through 25%–35% yield increases, 40% reduction in water and fertilizer runoff, and prevention of thermal blossom drop during midday heat spikes.",
  },
  {
    q: "Can Sanota’s agricultural systems operate in remote farms with unstable grid electricity?",
    a: "Yes. We engineer complete off-grid solar PV and LiFePO4 battery-buffered automation skids capable of running irrigation valves, dosing pumps, and cellular telemetry continuously without reliance on the electrical grid.",
  },
  {
    q: "Does the system calculate Vapor Pressure Deficit (VPD)?",
    a: "Yes. Our controllers measure canopy temperature, ambient air temperature, and relative humidity in real time to calculate true VPD, automatically triggering high-pressure fogging or ridge vent motors to keep plants in the optimal transpiration sweet spot.",
  },
  {
    q: "Can farm managers monitor irrigation and greenhouse climate from their smartphones?",
    a: "Yes. Every system includes an integrated cellular 4G IoT gateway that uploads soil moisture logs, EC/pH records, water consumption totals, and climate graphs to a secure cloud dashboard with instant SMS alerts for line pressure drops or dosing alarms.",
  },
];

export default function GreenhouseAgriClient() {
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
            <span className="text-slate-900 dark:text-slate-200 font-medium">Greenhouse &amp; Smart Agriculture</span>
          </nav>
        </div>

        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-700 dark:text-emerald-400 text-xs sm:text-sm font-semibold mb-6">
            <Sprout className="w-4 h-4" />
            <span>Precision Polyhouse Automation &amp; Smart Dosing Skids</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-6 leading-tight">
            Commercial Greenhouse Climate Control &amp; Smart Fertigation Systems in Sri Lanka
          </h1>

          {/* 50-Word Direct Answer Box */}
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-emerald-500/30 shadow-lg shadow-emerald-500/5 mb-8">
            <p className="text-base sm:text-lg leading-relaxed text-slate-700 dark:text-slate-300">
              <strong className="text-emerald-600 dark:text-emerald-400 font-semibold">Direct Answer:</strong> Sanota manufactures automated greenhouse climate systems and closed-loop smart fertigation skids for commercial growers across Sri Lanka. Our systems automate multi-channel A/B nutrient dosing, EC/pH stabilization, motorized roof ventilation, and high-pressure fogging, increasing crop yields by 25–35% while slashing fertilizer waste and labor costs.
            </p>
          </div>

          {/* Quick Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
            <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
              <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">25%–35%</div>
              <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">Export Crop Yield Increase</div>
            </div>
            <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">±0.05 EC/pH</div>
              <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">Closed-Loop Dosing Precision</div>
            </div>
            <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
              <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">VPD Control</div>
              <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">Automatic Microclimate Tuning</div>
            </div>
            <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
              <div className="text-2xl font-bold text-amber-600 dark:text-amber-400">Solar Off-Grid</div>
              <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">PV Battery Skid Options Available</div>
            </div>
          </div>
        </section>

        {/* Solutions Grid */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-3">
              Protected Agriculture &amp; Commercial Fertigation Technologies
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
              Engineered for bell peppers, export tomatoes, melons, strawberries, and cut foliage cultivation in Sri Lanka.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {agriSolutions.map((item, idx) => {
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

        {/* 6-Phase Engineering Flow */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
            <div className="max-w-3xl mb-10">
              <span className="text-xs font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                Agronomic Precision
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mt-1">
                How We Deploy Smart Agriculture In 6 Structured Steps
              </h2>
              <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">
                From water chemistry evaluation to automated cloud dosing, engineered specifically for Sri Lankan agro-climatic conditions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {processSteps.map((step, idx) => (
                <div key={idx} className="relative p-6 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-700/60">
                  <span className="text-3xl font-black text-emerald-600/30 dark:text-emerald-400/30 mb-2 block">
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
              Smart Fertigation &amp; Climate Automation Specifications
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm border-collapse">
                <thead>
                  <tr className="border-b border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-400 font-semibold">
                    <th className="py-3 px-4">Sub-System</th>
                    <th className="py-3 px-4">Engineering Specification</th>
                    <th className="py-3 px-4">Grower Advantage</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-slate-700 dark:text-slate-300">
                  <tr>
                    <td className="py-3 px-4 font-semibold text-slate-900 dark:text-white">Fertilizer Dosing Channels</td>
                    <td className="py-3 px-4">3 to 6 In-Line Dosing Channels (A, B, C, Acid, Booster) with Venturi/Diaphragm pumps</td>
                    <td className="py-3 px-4">Prevents phosphate and calcium precipitation; exact recipe dosing</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-semibold text-slate-900 dark:text-white">Sensor Transmitters</td>
                    <td className="py-3 px-4">Toroidal Inductive EC (0–10 mS/cm) &amp; Sealed Glass Combination pH (0–14)</td>
                    <td className="py-3 px-4">Industrial longevity in fertilizer concentrates; zero drift weekly</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-semibold text-slate-900 dark:text-white">Climate Motors &amp; Actuators</td>
                    <td className="py-3 px-4">24VDC / 400V Tubular Gearmotors for Ridge Vents, Side Curtains &amp; Thermal Screens</td>
                    <td className="py-3 px-4">Smooth micro-step opening without tearing poly sheets or cables</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-semibold text-slate-900 dark:text-white">Telemetry &amp; Data Logging</td>
                    <td className="py-3 px-4">Integrated 4G GSM Gateway transmitting to Cloud Dashboard &amp; Mobile App</td>
                    <td className="py-3 px-4">Full visibility of substrate moisture, EC runoff, and water used</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-semibold text-slate-900 dark:text-white">Safety Protection</td>
                    <td className="py-3 px-4">Dual High/Low EC cutoffs, low pressure interlocks, and dry-run pump safety</td>
                    <td className="py-3 px-4">Zero risk of overdosing crop roots with high salinity water</td>
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
                Frequently Asked Questions: Smart Agriculture
              </h2>
              <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">
                Clear answers for commercial farm owners, agronomists, and polyhouse project managers.
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
          <div className="rounded-3xl p-8 sm:p-12 bg-gradient-to-br from-emerald-600 via-green-700 to-slate-900 text-white relative overflow-hidden shadow-xl">
            <div className="relative z-10 max-w-2xl">
              <span className="text-xs font-semibold tracking-wider uppercase text-emerald-200">
                High-Yield Agriculture
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mt-2 mb-4 leading-tight">
                Automate Your Farm&apos;s Fertigation &amp; Climate Today
              </h2>
              <p className="text-emerald-100 text-sm sm:text-base mb-8 leading-relaxed">
                Send us your farm layout, polyhouse count, and water test reports. Our engineering team will configure a turnkey automated fertigation skid and microclimate setup.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/tell-us-your-challenge"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white text-emerald-800 hover:bg-emerald-50 font-semibold shadow-md transition-all text-sm"
                >
                  <span>Request Fertigation Proposal</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href="https://wa.me/94740709989?text=Hi%20Sanota,%20I%20am%20interested%20in%20greenhouse%20climate%20automation%20or%20smart%20fertigation."
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
