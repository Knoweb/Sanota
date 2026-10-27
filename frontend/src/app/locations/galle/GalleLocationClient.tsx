"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import {
  MapPin,
  Clock,
  PhoneCall,
  CheckCircle2,
  ChevronDown,
  ArrowRight,
  Shield,
  Layers,
  Settings,
  Zap,
  Building,
  Factory,
  Wrench,
  Cpu,
  Mail,
  Truck,
  Leaf,
} from "lucide-react";

const southernIndustries = [
  {
    title: "Tea Factories & Estate Lofts",
    desc: "Automated trough withering controls, fluidized bed dryer retrofits, and leaf weighing telemetry across Galle (Elpitiya, Hiniduma, Neluwa, Karandeniya) and Matara districts.",
    icon: Leaf,
  },
  {
    title: "Koggala BOI Export Processing Zone",
    desc: "Apparel line conveyors, compressed air optimization, packaging machinery automation, and electrical control panel upgrades for multinational export manufacturers.",
    icon: Factory,
  },
  {
    title: "Hotels & Commercial Laundries",
    desc: "Industrial laundry machinery overhauls, commercial washer-extractor PLC replacements, boiler temperature controls, and wastewater pump telemetry along the Southern coastal belt.",
    icon: Building,
  },
  {
    title: "Cinnamon & Spice Processing",
    desc: "Custom stainless steel cinnamon dehydrators, cardamom curing controls, and black pepper grading conveyor tables manufactured inside our Galle workshop.",
    icon: Layers,
  },
  {
    title: "Rubber & Plastics Manufacturing",
    desc: "Hydraulic press automation, mold temperature controllers, curing timer retrofits, and optical safety curtain installations for Southern rubber plants.",
    icon: Wrench,
  },
  {
    title: "Municipal & Environmental IoT",
    desc: "Smart flood monitoring, canal level telemetry, and remote pump station automation—including our 2025 WIPO Global Award-winning Smart Drain project in Batapola.",
    icon: Cpu,
  },
];

const coverageAreas = [
  "Galle City & Fort",
  "Koggala BOI Zone",
  "Elpitiya & Karandeniya",
  "Ambalangoda & Batapola",
  "Hikkaduwa & Baddegama",
  "Matara & Weligama",
  "Bentota & Balapitiya",
  "Hambantota & Tangalle",
];

const faqs = [
  {
    q: "Where is Sanota’s engineering workshop located in Galle?",
    a: "Sanota’s registered office is at 441/2C Wackwella Road, Galle 80000, with our specialized machinery fabrication and testing workshop located in Bataganwila, Galle, Sri Lanka.",
  },
  {
    q: "What Southern Province regions do your engineers service on-site?",
    a: "We provide rapid on-site automation and breakdown support across all Southern industrial hubs, including Galle Fort, Koggala BOI Export Processing Zone, Ambalangoda, Bentota, Hikkaduwa, Karandeniya, Matara, Weligama, and Hambantota.",
  },
  {
    q: "What is your emergency breakdown response time in the Southern Province?",
    a: "For contract clients under our Annual Maintenance Contract (AMC), our engineering team responds on-site within 2 to 4 hours anywhere in the Galle and Matara districts.",
  },
  {
    q: "Can factory managers in the Southern Province visit the Galle workshop?",
    a: "Yes. Plant managers, engineers, and estate superintendents are welcome to visit our Bataganwila workshop by appointment to inspect control panel wiring, observe machine dry runs, or discuss custom machinery prototypes.",
  },
  {
    q: "Do you supply spare parts directly from the Galle workshop?",
    a: "Yes. We maintain a stock of industrial PLCs, VFD drives, temperature controllers, pneumatic cylinders, proximity sensors, and thermal imaging gear in Galle for rapid same-day factory replacement.",
  },
];

export default function GalleLocationClient() {
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
            <Link href="/contact" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              Locations
            </Link>
            <span>/</span>
            <span className="text-slate-900 dark:text-slate-200 font-medium">Galle Engineering Center</span>
          </nav>
        </div>

        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-700 dark:text-blue-400 text-xs sm:text-sm font-semibold mb-6">
            <MapPin className="w-4 h-4" />
            <span>Southern Province Engineering Hub • Galle, Sri Lanka</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-6 leading-tight">
            Industrial Automation &amp; Machinery Engineering in Galle, Sri Lanka
          </h1>

          {/* 50-Word Direct Answer Box */}
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-blue-500/30 shadow-lg shadow-blue-500/5 mb-8">
            <p className="text-base sm:text-lg leading-relaxed text-slate-700 dark:text-slate-300">
              <strong className="text-blue-600 dark:text-blue-400 font-semibold">Direct Answer:</strong> Sanota operates a dedicated industrial automation and machinery fabrication workshop in Bataganwila, Galle, with head offices at 441/2C Wackwella Road. Serving tea factories, Koggala BOI manufacturers, and industrial processors across the Southern Province, we provide custom machine manufacturing, PLC panel retrofits, and 2–4 hour emergency breakdown response.
            </p>
          </div>

          {/* Quick Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
            <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">2–4 Hours</div>
              <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">Southern Emergency Response</div>
            </div>
            <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
              <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">Galle Workshop</div>
              <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">Bataganwila Fabrication Facility</div>
            </div>
            <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
              <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">WIPO 2025</div>
              <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">Award-Winning Local Team</div>
            </div>
            <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
              <div className="text-2xl font-bold text-amber-600 dark:text-amber-400">Local Spares</div>
              <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">PLCs, Sensors &amp; Drives in Stock</div>
            </div>
          </div>
        </section>

        {/* Workshop Profile & NAP Card */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* NAP Card */}
            <div className="lg:col-span-1 p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm h-fit">
              <h2 className="text-xl font-bold mb-4 text-slate-900 dark:text-white flex items-center gap-2">
                <Building className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                Galle Office &amp; Workshop
              </h2>
              <dl className="space-y-4 text-sm divide-y divide-slate-100 dark:divide-slate-800">
                <div className="pt-2">
                  <dt className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Registered Office Address</dt>
                  <dd className="font-medium text-slate-800 dark:text-slate-200 mt-0.5">
                    Sanota (Private) Limited<br />
                    441/2C Wackwella Road,<br />
                    Galle 80000, Sri Lanka
                  </dd>
                </div>
                <div className="pt-3">
                  <dt className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Fabrication Workshop</dt>
                  <dd className="font-medium text-slate-800 dark:text-slate-200 mt-0.5">
                    Bataganwila, Galle, Sri Lanka
                  </dd>
                </div>
                <div className="pt-3">
                  <dt className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Direct Phone / Hotline</dt>
                  <dd className="font-semibold text-blue-600 dark:text-blue-400 mt-0.5 flex items-center gap-1.5">
                    <PhoneCall className="w-4 h-4" />
                    <a href="tel:+94740709989">+94 74 070 9989</a>
                  </dd>
                </div>
                <div className="pt-3">
                  <dt className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Engineering Inquiries</dt>
                  <dd className="font-medium text-slate-800 dark:text-slate-200 mt-0.5 flex items-center gap-1.5">
                    <Mail className="w-4 h-4 text-slate-400" />
                    <a href="mailto:info@sanotaglobal.com" className="hover:underline">info@sanotaglobal.com</a>
                  </dd>
                </div>
                <div className="pt-3">
                  <dt className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Operational Hours</dt>
                  <dd className="font-medium text-slate-800 dark:text-slate-200 mt-0.5">
                    Mon – Sat: 8:30 AM – 5:30 PM<br />
                    <span className="text-xs text-emerald-600 dark:text-emerald-400 font-semibold">24/7 Breakdown Dispatch for AMC Clients</span>
                  </dd>
                </div>
              </dl>
            </div>

            {/* Coverage & Services Narrative */}
            <div className="lg:col-span-2 space-y-8">
              <div className="p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                  Southern Province Industrial Automation Partner
                </h2>
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                  Southern Sri Lanka hosts a dynamic industrial ecosystem spanning orthodox tea processing in the Galle and Matara hinterlands, export manufacturing at the Koggala BOI Zone, cinnamon and spice curing, and continuous hospitality operations along the coastline.
                </p>
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
                  Previously, southern factory managers faced days of lost production waiting for technicians to travel from Colombo or overseas. Sanota was established to provide the Southern Province with a local, Moratuwa-trained engineering workshop capable of designing, building, and repairing precision industrial machinery right here in Galle.
                </p>

                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-3">
                  Southern Regions We Actively Service:
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  {coverageAreas.map((area, idx) => (
                    <div
                      key={idx}
                      className="px-3 py-2 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-700 text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-300 flex items-center gap-1.5"
                    >
                      <MapPin className="w-3.5 h-3.5 text-blue-500 flex-shrink-0" />
                      <span>{area}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Southern Industries Served */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-3">
              Specialized Engineering For Southern Industrial Sectors
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
              Custom engineering, rapid spare parts, and dedicated maintenance agreements for regional producers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {southernIndustries.map((item, idx) => {
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

        {/* FAQs */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
                Frequently Asked Questions: Galle Workshop &amp; Services
              </h2>
              <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">
                Information regarding workshop visits, southern response SLAs, and local spare parts inventory.
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
                Galle &amp; Southern Province
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mt-2 mb-4 leading-tight">
                Schedule A Visit To Our Galle Engineering Workshop
              </h2>
              <p className="text-blue-100 text-sm sm:text-base mb-8 leading-relaxed">
                Connect with our Galle team directly. Whether you need an emergency breakdown engineer dispatched to your plant or want to inspect a machine under fabrication, we are ready to assist.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white text-blue-700 hover:bg-blue-50 font-semibold shadow-md transition-all text-sm"
                >
                  <span>View Contact Details</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href="https://wa.me/94740709989?text=Hi%20Sanota,%20I%20am%20located%20in%20the%20Southern%20Province%20and%20need%20engineering%20assistance."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-semibold shadow-md transition-all text-sm"
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>Call / WhatsApp: +94 74 070 9989</span>
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
