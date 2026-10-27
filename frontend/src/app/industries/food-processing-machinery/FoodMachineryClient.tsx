"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import {
  Apple,
  Flame,
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
  Box,
  Truck,
  Sparkles,
} from "lucide-react";

const foodSolutions = [
  {
    title: "Commercial Spice & Cinnamon Dehydrators",
    desc: "Multi-stage temperature and humidity ramping drying cabinets engineered specifically to retain vital essential oils, volatile aromatics, and vibrant color in Ceylon cinnamon, black pepper, cardamoms, and cloves.",
    icon: Flame,
  },
  {
    title: "Sanitary Stainless Steel Conveyors & Sorting Belts",
    desc: "AISI 304/316 washdown modular belt and roller conveyors with variable frequency speed drives, pneumatic reject kickers, and ergonomic inspection lighting for fruit, seafood, and bakery sorting.",
    icon: Layers,
  },
  {
    title: "Automated Liquid Dosing & Filling Stations",
    desc: "Multi-head positive displacement and peristaltic liquid fillers with anti-drip diving nozzles designed for sauces, oils, fruit concentrates, honey, and herbal syrups with precise ±0.5% fill accuracy.",
    icon: Sparkles,
  },
  {
    title: "Industrial Fruit & Vegetable Drying Tunnels",
    desc: "Energy-efficient heat pump and convective airflow drying tunnels for dehydrated mango, pineapple slices, jackfruit, and culinary herbs with uniform air distribution across all stainless mesh trays.",
    icon: Apple,
  },
  {
    title: "Rotary Powder Blenders & Mixing Vats",
    desc: "Double-cone and ribbon blenders with food-grade mirror-polished interiors, dust-tight discharge valves, and automated timer-interlocked speed cycling for spice mixes and powdered beverages.",
    icon: Settings,
  },
  {
    title: "End-of-Line Packaging & Capping Machines",
    desc: "Semi-automatic and continuous motorized screw-capping jigs, automated induction foil sealers, and synchronized inkjet date-coder brackets that streamline final export carton packaging.",
    icon: Box,
  },
];

const processSteps = [
  {
    step: "01",
    title: "Product Characteristics & Moisture Profile",
    desc: "We analyze your food product: starting water activity (aw), initial moisture percentage, heat sensitivity thresholds, and required hourly throughput.",
  },
  {
    step: "02",
    title: "Sanitary 3D CAD Modeling & Airflow CFD",
    desc: "Designing smooth, crevice-free frames in SolidWorks, calculating thermal airflow CFD to eliminate cold spots, and verifying cleanability.",
  },
  {
    step: "03",
    title: "Certified Food-Grade SS304/316 Fabrication",
    desc: "TIG welding with argon gas purging, sanitary passivated seams, bead blasting, and food-safe seals inside our Galle engineering workshop.",
  },
  {
    step: "04",
    title: "Washdown IP66 Electrical & PLC Control",
    desc: "Mounting waterproof electrical panels, stainless cable glands, RTD temperature probes, and intuitive touchscreen recipe profiles.",
  },
  {
    step: "05",
    title: "Hygiene Validation & Live Food Trials",
    desc: "Comprehensive Factory Acceptance Testing (FAT) using actual customer crop samples to establish exact drying curve parameters.",
  },
  {
    step: "06",
    title: "Site Delivery, Commissioning & HACCP Log",
    desc: "On-site installation, sanitization protocol training, and complete documentation packages for HACCP and GMP regulatory audits.",
  },
];

const faqs = [
  {
    q: "What kinds of spice and crop dehydrators does Sanota manufacture in Sri Lanka?",
    a: "Sanota designs and builds multi-tray batch dehydrators, continuous conveyor tunnel dryers, and heat pump drying cabinets tailored for Ceylon cinnamon quills, black pepper, cardamoms, cloves, desiccated coconut, and dehydrated tropical fruits (mango, pineapple, banana).",
  },
  {
    q: "Are the machines compliant with food safety standards such as HACCP, GMP, and ISO 22000?",
    a: "Yes. All contact parts are fabricated from certified AISI 304 or 316 stainless steel with sanitary continuous TIG welds, polished food-safe radiused corners, USDA-grade lubricants, and washdown IP66 electrical enclosures.",
  },
  {
    q: "How does automated drying temperature control preserve spice essential oils and color?",
    a: "Our PLC controllers follow programmed multi-stage drying curves that begin with gentle low-temperature moisture extraction (45°C–50°C) before stepping up, preventing case-hardening and volatilization of delicate essential oils like cinnamaldehyde and piperine.",
  },
  {
    q: "Can Sanota automate existing manual food packaging and bottle filling lines?",
    a: "Yes. We build custom conveyorized indexers, automated peristaltic/piston liquid filling stations, cap-torquing jigs, and batch inkjet code printing integrations that turn labor-heavy manual lines into semi-automatic or fully automatic packaging lines.",
  },
  {
    q: "Where are the food machines built and where can I view a demonstration?",
    a: "All design, CAD modeling, stainless steel sheet fabrication, and testing take place in our Bataganwila workshop in Galle. Factory owners and food producers are welcome to visit our facility to view active machine fabrications and test dry runs with their product samples.",
  },
];

export default function FoodMachineryClient() {
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
            <span className="text-slate-900 dark:text-slate-200 font-medium">Food Processing Machinery</span>
          </nav>
        </div>

        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-700 dark:text-orange-400 text-xs sm:text-sm font-semibold mb-6">
            <Apple className="w-4 h-4" />
            <span>Food-Grade Stainless Automation &amp; Dehydration Skids</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-6 leading-tight">
            Food &amp; Spice Processing Machinery Manufacturing in Sri Lanka
          </h1>

          {/* 50-Word Direct Answer Box */}
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-orange-500/30 shadow-lg shadow-orange-500/5 mb-8">
            <p className="text-base sm:text-lg leading-relaxed text-slate-700 dark:text-slate-300">
              <strong className="text-orange-600 dark:text-orange-400 font-semibold">Direct Answer:</strong> Sanota manufactures food-grade stainless steel processing machinery, commercial spice dehydrators, and automated bottling lines in Galle, Sri Lanka. Built to HACCP and GMP hygienic standards using certified AISI 304/316 steel and programmable PLC controls, our machines preserve natural spice flavors, boost throughput, and meet strict international export criteria.
            </p>
          </div>

          {/* Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
            <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
              <div className="text-2xl font-bold text-orange-600 dark:text-orange-400">SS304 / 316</div>
              <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">Certified Food-Contact Alloys</div>
            </div>
            <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
              <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">HACCP &amp; GMP</div>
              <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">Sanitary Design Compliance</div>
            </div>
            <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">Multi-Stage</div>
              <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">Essential Oil Retention Drying</div>
            </div>
            <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
              <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">Galle Workshop</div>
              <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">Full Local Spares Availability</div>
            </div>
          </div>
        </section>

        {/* Machinery Categories */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-3">
              Food &amp; Agricultural Processing Equipment
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
              Custom machinery manufactured in Sri Lanka for spice exporters, fruit processors, beverage bottlers, and commercial kitchens.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {foodSolutions.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="w-12 h-12 rounded-xl bg-orange-500/10 text-orange-600 dark:text-orange-400 flex items-center justify-center mb-4">
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
              <span className="text-xs font-semibold uppercase tracking-wider text-orange-600 dark:text-orange-400">
                Hygienic Standards
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mt-1">
                How We Engineer Food Machinery In 6 Stages
              </h2>
              <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">
                Every weld, gasket, and motor is verified against strict sanitary food-contact requirements prior to factory deployment.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {processSteps.map((step, idx) => (
                <div key={idx} className="relative p-6 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-700/60">
                  <span className="text-3xl font-black text-orange-600/30 dark:text-orange-400/30 mb-2 block">
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
              Food &amp; Spice Machinery Technical Specifications
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm border-collapse">
                <thead>
                  <tr className="border-b border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-400 font-semibold">
                    <th className="py-3 px-4">Component</th>
                    <th className="py-3 px-4">Fabrication Specification</th>
                    <th className="py-3 px-4">Food Safety &amp; Quality Value</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-slate-700 dark:text-slate-300">
                  <tr>
                    <td className="py-3 px-4 font-semibold text-slate-900 dark:text-white">Contact Surfaces</td>
                    <td className="py-3 px-4">AISI 304 or 316 Stainless Steel with Ra &lt; 0.8 μm sanitary polish</td>
                    <td className="py-3 px-4">Prevents bacterial adhesion and passes export swab testing</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-semibold text-slate-900 dark:text-white">Drying Heating Units</td>
                    <td className="py-3 px-4">Indirect heat exchanger (clean air), Heat Pump, or Electric Ceramic heaters</td>
                    <td className="py-3 px-4">Zero smoke, flue gas, or fuel odors contact the drying food</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-semibold text-slate-900 dark:text-white">Conveyor Belting</td>
                    <td className="py-3 px-4">FDA-approved polyurethane (PU), modular acetal plastic, or SS wire mesh</td>
                    <td className="py-3 px-4">Resistant to animal fats, fruit acids, and frequent hot chemical washdowns</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-semibold text-slate-900 dark:text-white">Control Panel Protection</td>
                    <td className="py-3 px-4">IP66 Stainless Enclosure with slope roof and silicone hygienic seals</td>
                    <td className="py-3 px-4">Endures direct high-pressure hose sprays during nightly sanitation</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-semibold text-slate-900 dark:text-white">Liquid Dosing Precision</td>
                    <td className="py-3 px-4">Servo-driven rotary valve or sanitary peristaltic tube (±0.5% tolerance)</td>
                    <td className="py-3 px-4">Zero product giveaway and exact weight compliance on pre-packaged goods</td>
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
                Frequently Asked Questions: Food Machinery
              </h2>
              <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">
                Key questions on spice drying recipes, stainless certifications, and workshop demonstrations.
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
                        openFaq === idx ? "rotate-180 text-orange-600" : ""
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
          <div className="rounded-3xl p-8 sm:p-12 bg-gradient-to-br from-orange-600 via-amber-700 to-slate-900 text-white relative overflow-hidden shadow-xl">
            <div className="relative z-10 max-w-2xl">
              <span className="text-xs font-semibold tracking-wider uppercase text-orange-200">
                Food Engineering Excellence
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mt-2 mb-4 leading-tight">
                Scale Your Food Or Spice Processing Capacity
              </h2>
              <p className="text-orange-100 text-sm sm:text-base mb-8 leading-relaxed">
                Visit our workshop in Galle or arrange a virtual design review with our engineers. Let&apos;s build durable, food-grade machinery customized to your production line.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/tell-us-your-challenge"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white text-orange-800 hover:bg-orange-50 font-semibold shadow-md transition-all text-sm"
                >
                  <span>Request Food Machinery Consultation</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href="https://wa.me/94740709989?text=Hi%20Sanota,%20I%20am%20interested%20in%20food%20or%20spice%20processing%20machinery."
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
