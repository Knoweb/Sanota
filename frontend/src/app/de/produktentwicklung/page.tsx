"use client";

import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import { 
  Rocket, 
  Cpu, 
  Settings, 
  Wrench, 
  CheckCircle2, 
  ArrowRight, 
  PenTool, 
  Layers, 
  CircuitBoard,
  Sparkles
} from "lucide-react";
import { HERO_BLUR_DATA } from "@/lib/heroBlurData";

const devStages = [
  {
    title: "Kundenspezifische Produktentwicklung",
    subtitle: "Von der Anforderung zur soliden Systemarchitektur",
    description: "Ganzheitliche Begleitung bei der Neu- und Weiterentwicklung mechatronischer Geräte und Industriehardware mit klarer Ausrichtung auf Herstellbarkeit (Design for Manufacturing).",
    points: [
      "Machbarkeitsstudien & Technologieauswahl",
      "Anforderungs- & Lastenhefterstellung",
      "Kosten- & Risikoanalysen vor Entwicklungsstart",
      "Meilensteinbasierte Projektierung nach DIN ISO"
    ],
    icon: PenTool
  },
  {
    title: "Prototypenbau & Pilotanlagen",
    subtitle: "Schnelle physische Validierung unter realen Bedingungen",
    description: "Aufbau funktionsfähiger Labormuster, Funktionsprototypen und kleinskaliger Pilotanlagen zur Erprobung mechanischer Belastung und thermischer Eigenschaften.",
    points: [
      "Präzisions-CNC-Fräsen & 3D-Druck (FDM/SLA/SLS)",
      "Aufbau mechanischer Rahmen & Baugruppen",
      "Funktionsprüfungen & Belastungstests",
      "Iterative Optimierungsschleifen vor Serienfreigabe"
    ],
    icon: Wrench
  },
  {
    title: "Elektronikentwicklung & Embedded Systems",
    subtitle: "Maßgeschneiderte Leiterplatten (PCB) & Firmware",
    description: "Schaltungsdesign, PCB-Layout und hardwarenahe Firmware-Entwicklung für Sensorknoten, Motorsteuerungen und drahtlose IoT-Module.",
    points: [
      "Schaltplanentwurf & Multilayer-PCB-Layout",
      "Mikrocontroller-Programmierung (STM32, ESP32, ARM Cortex)",
      "EMV-gerechtes Schaltungsdesign & Pre-Compliance-Messungen",
      "Kabellose Kommunikation: BLE, LoRaWAN, Wi-Fi & Zigbee"
    ],
    icon: CircuitBoard
  },
  {
    title: "Sondermaschinenbau & Funktionsmuster",
    subtitle: "Individuelle Speziallösungen für besondere Prozesse",
    description: "Entwicklung maßgeschneiderter Vorrichtungen, automatisierter Prüfstände und Sondermaschinen für Spezialanwendungen in Produktion und Labor.",
    points: [
      "Kombination aus Pneumatik, Servomotoren & Sensorik",
      "Integrierte Sicherheitsfunktionen nach Maschinenrichtlinie",
      "CE-Konformitätsbewertung & Dokumentation",
      "Komplette Montage & Funktionstest im Haus"
    ],
    icon: Settings
  },
  {
    title: "Hardware- & Softwareentwicklung",
    subtitle: "Full-Stack Ingenieurdienstleistungen aus einer Hand",
    description: "Nahtlose Verknüpfung von Hardware mit intuitiven Steuerungs-Apps, HMI-Touchscreens und sicheren Cloud-Backends für modernste Nutzererlebnisse.",
    points: [
      "Embedded Linux & Real-Time OS (RTOS)",
      "Touch-Bedienoberflächen & moderne Web-Dashboards",
      "Sichere Over-The-Air (OTA) Firmware-Updates",
      "REST APIs & Industrieprotokolle (Modbus, CANopen, MQTT)"
    ],
    icon: Cpu
  },
  {
    title: "Serienreife Entwicklung (Industrialisierung)",
    subtitle: "Optimierung für wirtschaftliche Serienfertigung",
    description: "Überführung validierter Prototypen in serientaugliche Produktionsprozesse, inklusive Lieferantenauswahl, Prüfkonzepte und Fertigungsunterlagen.",
    points: [
      "Toleranzanalysen & Fertigungsoptimierung",
      "Erstellung von Prüfmitteln für die End-of-Line Prüfung",
      "BOM-Optimierung zur Kostenreduktion",
      "Unterstützung bei Zertifizierungen (CE, RoHS, WEEE)"
    ],
    icon: Rocket
  }
];

export default function ProduktentwicklungPage() {
  return (
    <div className="min-h-screen bg-[#FAF8F5] dark:bg-[#0B1120] text-slate-800 dark:text-slate-100 transition-colors duration-300">
      <Header />

      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-28 pb-16">
        <div className="absolute inset-0 z-0">
          <Image
            src="/about_hero_bg.webp"
            alt="Mechatronische Produktentwicklung Sanota Global"
            fill
            priority
            unoptimized={true}
            placeholder="blur"
            blurDataURL={HERO_BLUR_DATA["about_hero_bg"]}
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-[#0B1120]/85 dark:bg-[#060A12]/90 backdrop-blur-[1px]" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B1120] via-transparent to-transparent opacity-80" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E5A93C]/15 border border-[#E5A93C]/30 text-[#E5A93C] text-xs sm:text-sm font-semibold mb-6">
            <Sparkles className="w-4 h-4" />
            <span>Forschung & Entwicklung | Prototypenbau | Industrialisierung</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
            Mechatronische Produktentwicklung & Prototypenbau
          </h1>

          <p className="text-base sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-10 font-normal">
            Von der ersten Konzeptskizze zum serienreifen Industrieprodukt: Wir vereinen Mechanik, Embedded Electronics und Steuerungssoftware zu ganzheitlichen Engineering-Lösungen.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/ihre-herausforderung"
              className="w-full sm:w-auto px-8 py-4 bg-[#E5A93C] hover:bg-[#F0B74C] text-[#0B1120] font-bold rounded-lg transition-all shadow-lg shadow-[#E5A93C]/20 hover:scale-[1.02] flex items-center justify-center gap-2"
            >
              <span>Projektidee einreichen</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-16">
        <div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#17135B] dark:text-white mb-4">
            Ganzheitliche Ingenieurskompetenz über alle Entwicklungsphasen
          </h2>
          <p className="text-slate-600 dark:text-slate-300 max-w-3xl text-base sm:text-lg leading-relaxed">
            Ob hardwareorientiertes Startup, mittelständischer Sondermaschinenbauer oder Industrieunternehmen: Sanota agiert als Ihr agiler Entwicklungs- und Fertigungspartner für anspruchsvolle Mechatronikprojekte.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {devStages.map((stage, idx) => {
            const Icon = stage.icon;
            return (
              <div
                key={idx}
                className="bg-white dark:bg-[#131C2E] border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-7 hover:border-[#E5A93C]/50 transition-all shadow-sm hover:shadow-xl flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#17135B]/10 dark:bg-[#E5A93C]/10 flex items-center justify-center text-[#17135B] dark:text-[#E5A93C] mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-[#17135B] dark:text-white mb-1">
                    {stage.title}
                  </h3>
                  <p className="text-xs font-semibold text-[#E5A93C] mb-3">
                    {stage.subtitle}
                  </p>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-5">
                    {stage.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {stage.points.map((pt, pIdx) => (
                      <li key={pIdx} className="flex items-start text-xs text-slate-700 dark:text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981] mr-2 shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="pt-3 border-t border-slate-100 dark:border-slate-800">
                  <Link
                    href="/ihre-herausforderung"
                    className="text-xs font-bold text-[#17135B] dark:text-[#E5A93C] hover:underline inline-flex items-center gap-1"
                  >
                    Machbarkeit anfragen <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* NDA & IP Protection Banner */}
        <section className="bg-gradient-to-br from-[#0F0C3B] to-[#1A1658] border border-[#D4AF37]/40 rounded-3xl p-8 sm:p-10 text-white text-center shadow-xl">
          <h2 className="text-2xl sm:text-3xl font-extrabold mb-3">
            Schutz Ihres geistigen Eigentums (NDA & IP Security)
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto text-sm sm:text-base mb-6 leading-relaxed">
            Vertraulichkeit hat für uns höchste Priorität. Vor dem Austausch von CAD-Daten, Schaltplänen oder Geschäftsgeheimnissen unterzeichnen wir standardmäßig eine rechtssichere Geheimhaltungsvereinbarung (NDA).
          </p>
          <Link
            href="/ihre-herausforderung"
            className="inline-flex items-center gap-2 px-8 py-3 bg-[#E5A93C] hover:bg-[#F0B74C] text-[#0B1120] font-bold rounded-lg transition-all"
          >
            <span>Vertrauliches Erstgespräch vereinbaren</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </section>
      </main>

      <Footer />
    </div>
  );
}
