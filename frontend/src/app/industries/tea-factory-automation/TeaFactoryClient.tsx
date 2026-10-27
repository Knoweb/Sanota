"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import {
  Leaf,
  Wind,
  Flame,
  Gauge,
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
  Thermometer,
} from "lucide-react";

const solutions = [
  {
    title: "Automated Trough Withering Humidity & Airflow Control",
    desc: "Digital psychrometric sensors and modulating motorized dampers continuously regulate hygrometric depression and trough airflow, guaranteeing even 53%–55% leaf withering even during heavy tropical monsoon humidity.",
    icon: Wind,
  },
  {
    title: "Fluidized Bed Dryer (FBD) Temperature Automation",
    desc: "PID control retrofits for existing tea dryers utilizing multi-zone RTD probes and modulating burner/damper actuators to maintain tight ±1.5°C drying envelopes, eliminating leaf scorching and saving up to 20% in boiler fuel.",
    icon: Flame,
  },
  {
    title: "Green Leaf Reception & Telemetry Weighing",
    desc: "Automated load cell integration with RFID estate pouch scanning that logs green leaf intake directly into cloud databases, eliminating manual ledger recording errors and leaf pilferage.",
    icon: BarChart3,
  },
  {
    title: "Roller & Rotorvane Motor VFD Upgrades",
    desc: "Variable frequency drive conversions on legacy tea rolling tables and rotorvanes providing soft-start torque control, reducing electrical demand peaks and allowing exact RPM tuning per leaf flush.",
    icon: Zap,
  },
  {
    title: "Continuous Fermentation Floor Climate Automation",
    desc: "Precision ultrasonic misting nozzles, laminar air ducts, and temperature sensors that maintain optimal 95%+ relative humidity and 22°C–25°C fermentation conditions for maximum theaflavin (TF) development.",
    icon: Thermometer,
  },
  {
    title: "Factory-Wide Power Factor & Energy Monitoring",
    desc: "Sub-metering networks monitoring peak electrical loads on heavy sifter, cutter, and fan motors with automated alerts to avoid CEB maximum demand penalties.",
    icon: Gauge,
  },
];

const processSteps = [
  {
    step: "01",
    title: "On-Site Factory Walkthrough & Moisture Audit",
    desc: "Our engineers inspect your existing trough layout, fan CFM outputs, boiler heat exchangers, and historical auction valuation grades.",
  },
  {
    step: "02",
    title: "Psychrometric & Airflow Modeling",
    desc: "We calculate the exact airflow distribution and thermal requirements needed to maintain uniform leaf moisture evaporation across all troughs.",
  },
  {
    step: "03",
    title: "Control Panel & Damper Actuator Fabrication",
    desc: "Custom IP55 tea dust-proof control panels, weather-shielded sensors, and motorized damper assemblies manufactured in our Galle workshop.",
  },
  {
    step: "04",
    title: "Low-Downtime Weekend Installation",
    desc: "Mounted during off-peak manufacturing windows between leaf flushes, ensuring zero disruption to your daily processing schedule.",
  },
  {
    step: "05",
    title: "Dryer PID & Withering Calibration Trials",
    desc: "Fine-tuning sensor thresholds with your factory tea maker during live batches to match exact orthodox or CTC leaf characteristics.",
  },
  {
    step: "06",
    title: "Operator Training & Seasonal AMC Support",
    desc: "Simple Sinhala & English touchscreen training for withering operators, accompanied by seasonal calibration visits before peak cropping months.",
  },
];

const faqs = [
  {
    q: "How does an automated tea trough withering humidity control system improve leaf quality?",
    a: "Sanota’s automated trough withering controllers dynamically adjust airflow fans and intake louvers based on continuous dry-bulb/wet-bulb or digital hygrometer readings. This eliminates under-withering and case-hardening, delivering uniform 53–55% moisture target withering regardless of ambient rainy weather, which significantly boosts auction grade valuations.",
  },
  {
    q: "Can existing fluidized bed tea dryers (FBD) be retrofitted with smart temperature controllers?",
    a: "Yes. Sanota retrofits legacy fluid bed dryers with modulating burner valve actuators, multi-zone RTD temperature sensors, and PID logic. This maintains precise inlet and exhaust temperatures (e.g. ±1.5°C), saving up to 18% in firewood or burner fuel while preventing tea scorching.",
  },
  {
    q: "How does Sanota support tea factories located in Galle, Matara, Ratnapura, and the Upcountry?",
    a: "Our headquarters and engineering workshop in Galle is ideally positioned to service low-country and mid-country tea estates across Galle, Matara, and Ratnapura with rapid same-day on-site response, complemented by cellular IoT telemetry for remote diagnostics.",
  },
  {
    q: "What firewood or energy savings can a tea factory expect from dryer automation?",
    a: "By replacing manual air intake chokes and guesswork with automated VFD fan modulation and PID temperature control, tea estates typically achieve 12% to 22% reduction in firewood or boiler fuel consumption within the first three months of operation.",
  },
  {
    q: "Is the trough automation system simple enough for factory withering staff to operate?",
    a: "Yes. The system features a simple Sinhala/English touchscreen interface where operators simply select the leaf condition (wet, normal, damp) or enter target moisture percentage, allowing the PLC to automatically control air volume and heater cycling.",
  },
];

export default function TeaFactoryClient() {
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
            <span className="text-slate-900 dark:text-slate-200 font-medium">Tea Factory Automation</span>
          </nav>
        </div>

        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-700 dark:text-emerald-400 text-xs sm:text-sm font-semibold mb-6">
            <Leaf className="w-4 h-4" />
            <span>Smart Ceylon Tea Processing &amp; Withering Controls</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-6 leading-tight">
            Tea Factory Automation &amp; Trough Withering Humidity Control in Sri Lanka
          </h1>

          {/* 50-Word Direct Answer Box */}
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-emerald-500/30 shadow-lg shadow-emerald-500/5 mb-8">
            <p className="text-base sm:text-lg leading-relaxed text-slate-700 dark:text-slate-300">
              <strong className="text-emerald-600 dark:text-emerald-400 font-semibold">Direct Answer:</strong> Sanota automates tea trough withering, fluidized bed dryers, and fermentation climate systems for orthodox and CTC tea factories across Sri Lanka. By continuously modulating airflow, damper positions, and dryer burners with precision industrial PLCs, we eliminate weather-dependent quality variations and cut factory firewood consumption by up to 20%.
            </p>
          </div>

          {/* Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
            <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
              <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">53%–55%</div>
              <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">Consistent Withering Target</div>
            </div>
            <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
              <div className="text-2xl font-bold text-amber-600 dark:text-amber-400">12%–22%</div>
              <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">Firewood &amp; Fuel Savings</div>
            </div>
            <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">±1.5°C</div>
              <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">FBD Dryer PID Accuracy</div>
            </div>
            <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
              <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">Galle Workshop</div>
              <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">Same-Day Southern Support</div>
            </div>
          </div>
        </section>

        {/* Solutions Grid */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-3">
              Engineered Automation Solutions for Ceylon Tea Producers
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
              Modernize critical tea manufacturing stages without the massive capital expenditure of buying new machinery from overseas.
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

        {/* 6-Step Implementation Flow */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
            <div className="max-w-3xl mb-10">
              <span className="text-xs font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                Zero Harvest Disruption
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mt-1">
                How We Modernize Your Tea Factory In 6 Phases
              </h2>
              <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">
                Designed specifically for operational tea factories with strict production schedules and daily leaf intakes.
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

        {/* Performance Spec Matrix */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
              Tea Withering &amp; Drying Automation Technical Parameters
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm border-collapse">
                <thead>
                  <tr className="border-b border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-400 font-semibold">
                    <th className="py-3 px-4">Stage</th>
                    <th className="py-3 px-4">Control Methodology</th>
                    <th className="py-3 px-4">Tea Master Benefit</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-slate-700 dark:text-slate-300">
                  <tr>
                    <td className="py-3 px-4 font-semibold text-slate-900 dark:text-white">Withering Trough Airflow</td>
                    <td className="py-3 px-4">VFD Fan Modulation + Psychrometric ΔT (Dry/Wet bulb) feedback</td>
                    <td className="py-3 px-4">Eliminates leaf red-spotting, scorching, and damp leaf pockets</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-semibold text-slate-900 dark:text-white">Fluid Bed Dryer (FBD)</td>
                    <td className="py-3 px-4">Multi-loop PID algorithm driving motorized modulating air/steam dampers</td>
                    <td className="py-3 px-4">Eliminates burnt liquor flavor; guarantees 2.5–3.0% residual moisture</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-semibold text-slate-900 dark:text-white">Fermentation Floor</td>
                    <td className="py-3 px-4">High-pressure misting + temperature interlocks (22°C–24°C, 95% RH)</td>
                    <td className="py-3 px-4">Bright, coppery infused leaf color and enhanced aromatic compounds</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-semibold text-slate-900 dark:text-white">Operator Interface</td>
                    <td className="py-3 px-4">7&quot; / 10&quot; Industrial HMI with Bilingual Sinhala/English screens</td>
                    <td className="py-3 px-4">Fast operator onboarding with zero complex coding required by staff</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-semibold text-slate-900 dark:text-white">Management Telemetry</td>
                    <td className="py-3 px-4">Cellular 4G IoT Gateway logging withering curves to cloud dashboards</td>
                    <td className="py-3 px-4">Estates managers inspect live trough curves from smartphones anywhere</td>
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
                Frequently Asked Questions: Tea Factory Automation
              </h2>
              <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">
                Practical answers to questions regarding tea withering controls, dryer retrofits, and estate ROI.
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
          <div className="rounded-3xl p-8 sm:p-12 bg-gradient-to-br from-emerald-700 via-teal-800 to-slate-900 text-white relative overflow-hidden shadow-xl">
            <div className="relative z-10 max-w-2xl">
              <span className="text-xs font-semibold tracking-wider uppercase text-emerald-200">
                Ceylon Tea Innovation
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mt-2 mb-4 leading-tight">
                Upgrade Your Withering Troughs &amp; Dryers This Season
              </h2>
              <p className="text-emerald-100 text-sm sm:text-base mb-8 leading-relaxed">
                Invite our tea automation engineering team for an on-site evaluation of your withering lofts and dryer burners across Galle, Matara, Ratnapura, or the Hill Country.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/tell-us-your-challenge"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white text-emerald-800 hover:bg-emerald-50 font-semibold shadow-md transition-all text-sm"
                >
                  <span>Request Estate Automation Audit</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href="https://wa.me/94740709989?text=Hi%20Sanota,%20I%20am%20interested%20in%20tea%20factory%20automation%20or%20withering%20controls."
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
