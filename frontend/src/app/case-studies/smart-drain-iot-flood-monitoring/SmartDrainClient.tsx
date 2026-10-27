"use client";

import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import {
  Award,
  CheckCircle2,
  ArrowRight,
  Cpu,
  Zap,
  Clock,
  MapPin,
  Activity,
  Layers,
  PhoneCall,
} from "lucide-react";

export default function SmartDrainClient() {
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
            <Link href="/media" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              Case Studies
            </Link>
            <span>/</span>
            <span className="text-slate-900 dark:text-slate-200 font-medium">Smart Drain IoT Monitoring</span>
          </nav>
        </div>

        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-700 dark:text-amber-400 text-xs sm:text-sm font-semibold mb-6">
            <Award className="w-4 h-4" />
            <span>WIPO Global Award 2025 Winner Partner • Geneva</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-6 leading-tight">
            Smart Drain: Commissioning &amp; Industrial IoT for a WIPO Global Award-Winning Flood Monitoring Solution
          </h1>

          {/* 50-word Direct Answer / Executive Summary Box */}
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-blue-500/30 shadow-lg shadow-blue-500/5 mb-8">
            <p className="text-base sm:text-lg leading-relaxed text-slate-700 dark:text-slate-300">
              <strong className="text-blue-600 dark:text-blue-400 font-semibold">Executive Summary:</strong> Sanota served as the commissioning and industrial IoT integration partner for the Smart Drain flood monitoring project in Batapola, Ambalangoda, Sri Lanka. Selected among 10 global winners out of 780 applications across 95 countries at the 2025 WIPO Global Awards in Geneva, the system delivers real-time telemetry, automated water-level alerts, and solar-buffered cellular IoT monitoring.
            </p>
          </div>

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-12">
            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
              <div className="text-2xl sm:text-3xl font-bold text-blue-600 dark:text-blue-400">10 / 780</div>
              <div className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">WIPO Global Award 2025</div>
            </div>
            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
              <div className="text-2xl sm:text-3xl font-bold text-emerald-600 dark:text-emerald-400">45 Mins</div>
              <div className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">Early Flood Warning Lead Time</div>
            </div>
            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
              <div className="text-2xl sm:text-3xl font-bold text-purple-600 dark:text-purple-400">100%</div>
              <div className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">Monsoon Uptime Telemetry</div>
            </div>
            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
              <div className="text-2xl sm:text-3xl font-bold text-amber-600 dark:text-amber-400">Solar + GPRS</div>
              <div className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">Off-Grid Autonomous Field Node</div>
            </div>
          </div>
        </section>

        {/* Project Snapshot & Context Grid */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Snapshot Box (Left col 1) */}
            <div className="lg:col-span-1 p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm h-fit">
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2 text-slate-900 dark:text-white">
                <Layers className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                Project Snapshot
              </h2>
              <dl className="space-y-4 text-sm divide-y divide-slate-100 dark:divide-slate-800">
                <div className="pt-2">
                  <dt className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Initiative &amp; Invention</dt>
                  <dd className="font-medium text-slate-800 dark:text-slate-200 mt-0.5">
                    Smart Drain (Urban Inventors / Dr. Nadeesha Chandrasena)
                  </dd>
                </div>
                <div className="pt-3">
                  <dt className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Sanota&apos;s Engineering Role</dt>
                  <dd className="font-medium text-slate-800 dark:text-slate-200 mt-0.5">
                    Commissioning &amp; Industrial IoT Integration Partner
                  </dd>
                </div>
                <div className="pt-3">
                  <dt className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Location</dt>
                  <dd className="font-medium text-slate-800 dark:text-slate-200 mt-0.5 flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-red-500" /> Batapola, Ambalangoda, Sri Lanka
                  </dd>
                </div>
                <div className="pt-3">
                  <dt className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Recognition</dt>
                  <dd className="font-medium text-amber-600 dark:text-amber-400 mt-0.5 flex items-center gap-1">
                    <Award className="w-3.5 h-3.5" /> 2025 WIPO Global Awards Winner (Geneva)
                  </dd>
                </div>
                <div className="pt-3">
                  <dt className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Hardware &amp; Protocols</dt>
                  <dd className="font-medium text-slate-800 dark:text-slate-200 mt-0.5">
                    Ultrasonic Depth Sensors, IP67 Telemetry Node, MQTT / HTTP, Solar MPPT Battery Management, GSM/GPRS
                  </dd>
                </div>
                <div className="pt-3">
                  <dt className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Timeline &amp; Status</dt>
                  <dd className="font-medium text-slate-800 dark:text-slate-200 mt-0.5">
                    Commissioned in 2025 • Active Monitoring
                  </dd>
                </div>
              </dl>
            </div>

            {/* In-depth Narrative (Right col 2-3) */}
            <div className="lg:col-span-2 space-y-8">
              {/* Challenge */}
              <div className="p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500"></span>
                  The Challenge: Tropical Flash Floods &amp; Blind Drainage Inundation
                </h2>
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                  Batapola, located in the low-lying wetland belt of Ambalangoda in Sri Lanka&apos;s Southern Province, experiences heavy monsoon downpours that repeatedly submerge regional thoroughfares, local marketplaces, and roadside drainage infrastructure. Municipal response teams previously had no advance visibility into culvert siltation or rising backwaters until roadways were already waterlogged, stalling traffic and causing local economic disruption.
                </p>
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                  The solution demanded an autonomous, rugged, solar-powered field station capable of enduring torrential monsoon humidity, submergence-prone stormwater conditions, and intermittent cellular connectivity without requiring AC mains power.
                </p>
              </div>

              {/* Engineering Solution */}
              <div className="p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-blue-500"></span>
                  Sanota&apos;s Engineering Contribution &amp; IoT Commissioning
                </h2>
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                  Working closely with project lead Dr. Nadeesha Chandrasena, Sanota engineered and commissioned the physical industrial IoT field integration:
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="font-semibold text-slate-900 dark:text-white">IP67 Harsh-Environment Telemetry Enclosure:</strong> Engineered a corrosion-proof, UV-stabilized enclosure mounted directly above storm culverts with anti-tamper brackets.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="font-semibold text-slate-900 dark:text-white">Dual Ultrasonic &amp; Hydrostatic Level Sensing:</strong> Calibrated non-contact ultrasonic transducers with temperature compensation algorithms to accurately gauge water heights even during turbulent surface flows.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="font-semibold text-slate-900 dark:text-white">Solar MPPT Power &amp; Ultra-Low-Power Wakeup:</strong> Designed a battery buffer system that allows the node to operate for 14 continuous overcast monsoon days while transmitting data at 5-minute intervals.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="font-semibold text-slate-900 dark:text-white">Automated MQTT Cloud Broker &amp; SMS Broadcast:</strong> Configured failover cloud ingestion pipelines with automated trigger alerts dispatched directly to regional disaster management officers.
                    </div>
                  </li>
                </ul>
              </div>

              {/* Measurable Results */}
              <div className="p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                  Measurable Impact &amp; Global Acclaim
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-700">
                    <div className="font-semibold text-slate-900 dark:text-white flex items-center gap-2">
                      <Clock className="w-4 h-4 text-blue-500" /> 45-Minute Window
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">
                      Local authorities received clear advance warning before water overtopped the canal banks, enabling timely traffic diversion.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-700">
                    <div className="font-semibold text-slate-900 dark:text-white flex items-center gap-2">
                      <Activity className="w-4 h-4 text-emerald-500" /> Zero False Positives
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">
                      Signal filtering and wave-dampening math eliminated sensor noise caused by debris floating in drainage channels.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-700">
                    <div className="font-semibold text-slate-900 dark:text-white flex items-center gap-2">
                      <Zap className="w-4 h-4 text-amber-500" /> Continuous Self-Power
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">
                      Operated completely off-grid throughout the wet season with zero battery depletion or field service trips required.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-700">
                    <div className="font-semibold text-slate-900 dark:text-white flex items-center gap-2">
                      <Award className="w-4 h-4 text-purple-500" /> Global UN Recognition
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">
                      Showcased at the World Intellectual Property Organization headquarters in Geneva as a leading sustainable technology.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800 text-sm text-blue-900 dark:text-blue-200">
                  <strong>Engineering Transparency Note:</strong> The Smart Drain concept and patent belong to Urban Inventors and Dr. Nadeesha Chandrasena. Sanota is proud to have served as the technical engineering, IoT electronics, and field commissioning partner that brought this system from concept to deployed reality.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Capabilities Matrix */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
              Engineering Specifications &amp; Commissioning Parameters
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm border-collapse">
                <thead>
                  <tr className="border-b border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-400 font-semibold">
                    <th className="py-3 px-4">Parameter</th>
                    <th className="py-3 px-4">Specification</th>
                    <th className="py-3 px-4">Operational Benefit</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-slate-700 dark:text-slate-300">
                  <tr>
                    <td className="py-3 px-4 font-semibold text-slate-900 dark:text-white">Water Level Sensor</td>
                    <td className="py-3 px-4">Ultrasonic Rangefinder (0.3m to 5.0m, ±2mm resolution)</td>
                    <td className="py-3 px-4">Non-submerged, immune to corrosion from sewage and sludge</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-semibold text-slate-900 dark:text-white">Telemetry Controller</td>
                    <td className="py-3 px-4">Industrial Microcontroller with Low-Power Deep Sleep</td>
                    <td className="py-3 px-4">&lt;15μA standby draw ensures prolonged battery autonomy</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-semibold text-slate-900 dark:text-white">Connectivity</td>
                    <td className="py-3 px-4">Multi-band 2G/4G Cellular Modem with Fallback</td>
                    <td className="py-3 px-4">Guarantees message delivery across remote rural Sri Lankan cell towers</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-semibold text-slate-900 dark:text-white">Solar Generation</td>
                    <td className="py-3 px-4">Monocrystalline PV Panel + LiFePO4 Cell with MPPT</td>
                    <td className="py-3 px-4">Extended 2000+ cycle battery life under tropical ambient temperatures</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-semibold text-slate-900 dark:text-white">Cloud Architecture</td>
                    <td className="py-3 px-4">Encrypted MQTT to TimescaleDB &amp; Grafana Dashboards</td>
                    <td className="py-3 px-4">Sub-second telemetry ingestion with historical trend analytics</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl p-8 sm:p-12 bg-gradient-to-br from-blue-600 via-indigo-700 to-slate-900 text-white relative overflow-hidden shadow-xl">
            <div className="relative z-10 max-w-2xl">
              <span className="text-xs font-semibold tracking-wider uppercase text-blue-200">
                Partner With Sanota
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mt-2 mb-4 leading-tight">
                Need Custom Industrial IoT, Telemetry, or Machinery Automation?
              </h2>
              <p className="text-blue-100 text-sm sm:text-base mb-8 leading-relaxed">
                Whether you are developing a new smart environmental monitor, retrofitting factory machinery, or designing a custom PLC telemetry panel, our Moratuwa-trained engineers bring award-winning execution to your project.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/tell-us-your-challenge"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white text-blue-700 hover:bg-blue-50 font-semibold shadow-md transition-all text-sm"
                >
                  <span>Request Technical Consultation</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href="https://wa.me/94740709989?text=Hi%20Sanota,%20I%20am%20interested%20in%20an%20IoT%20or%20machinery%20automation%20project."
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
