"use client";

import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import { 
  GraduationCap, 
  Cpu, 
  Settings, 
  Layers, 
  CheckCircle2, 
  ArrowRight, 
  BookOpen, 
  Sliders, 
  ShieldCheck,
  Zap
} from "lucide-react";
import { HERO_BLUR_DATA } from "@/lib/heroBlurData";

const educationalSolutions = [
  {
    title: "SPS Schulungssysteme & Trainingsboards",
    subtitle: "Siemens S7-1200 / 1500, LOGO! & TIA Portal",
    description: "Modulare Trainingsracks mit originalen Industrie-SPS-Steuerungen, integrierten 24V-Netzteilen, Simulationsschaltern, LED-Statusanzeigen und Sicherheitslaborbuchsen.",
    points: [
      "Originale Siemens SIMATIC oder Schneider Steuerungen",
      "Integrierte HMI-Touchpanels für Visualisierungsübungen",
      "Fehlersimulationsschalter zur didaktischen Störungssuche",
      "Kompakter Koffer- oder 19-Zoll-Rack-Aufbau",
      "Kompatibel mit gängigen Lehrmaterialien nach IHK-Standard"
    ],
    icon: Cpu
  },
  {
    title: "Laborprüfstände Mechatronik & Pneumatik",
    subtitle: "Pneumatische, hydraulische & mechanische Aktoren",
    description: "Praxisorientierte Prüfstände mit echten Zylindern, Ventilen, Förderbändern und Schrittmotoren zur praktischen Verknüpfung von Mechanik, Elektronik und Steuerung.",
    points: [
      "Elektropneumatische Funktionsbaugruppen (Festo-Standard)",
      "Schrittmotor- und Servomotor-Achsen mit Positionsrückführung",
      "Optische, induktive und kapazitive Näherungsschalter",
      "Stabiles eloxiertes Aluminium-Profilsystem",
      "Transparente Schutzabdeckungen und integrierte Not-Halt-Kette"
    ],
    icon: Settings
  },
  {
    title: "Didaktische Steuerungs- und Regelungstechnik",
    subtitle: "PID-Regelstrecken für Temperatur, Füllstand & Druck",
    description: "Anschauliche Experimentierstationen zur praktischen Erprobung von P-, PI- und PID-Regelalgorithmen, Systemreaktionen und Frequenzgang-Untersuchungen.",
    points: [
      "Transparente Flüssigkeitsbehälter für Füllstandsregelung",
      "Heizstrecken mit Pt100- und Thermoelement-Sensorik",
      "Echtzeit-Signalerfassung und Oszilloskop-Abgriffe",
      "Intuitive Parametrierung über HMI oder PC-Software",
      "Umfassende Versuchsunterlagen mit Lösungen"
    ],
    icon: Sliders
  },
  {
    title: "Elektronik & Elektrotechnik Ausbildungstafeln",
    subtitle: "Sicherheitsgerechte Grundlagen- & Verdrahtungsübungen",
    description: "Robuste Tisch- und Wandlehrtafeln für Schützschaltungen, Drehstrommotoren, Stern-Dreieck-Anläufe und digitale Grundschaltungen.",
    points: [
      "4mm-Sicherheitslaborbuchsen (berührungssicher)",
      "Industrietaugliche Schütze, Motorschutzschalter & Relais",
      "Messbuchsen für Spannung, Strom und Leistungsfaktoren",
      "Kratzfeste, siebbedruckte Schaltsymbole nach DIN EN 60617",
      "CE-zertifizierte Ausführung für den Schulbetrieb"
    ],
    icon: Zap
  },
  {
    title: "Trainingssysteme für Industrie 4.0",
    subtitle: "Cyber-physische Lernfabriken & IoT-Konnektivität",
    description: "Vernetzte Schulungsanlagen mit RFID-Teileidentifikation, dezentraler Sensorik, MQTT-Cloud-Anbindung und digitalem Zwilling (Digital Twin).",
    points: [
      "Modulare Förderstrecke mit RFID-Werkstückträgern",
      "Edge-Gateways mit Node-RED & OPC UA Schnittstelle",
      "Dashboard-Visualisierung auf Tablets & PCs",
      "Vermittlung von IT/OT-Kompetenzen in der Ausbildung",
      "Erweiterbar um kollaborative Roboter (Cobots)"
    ],
    icon: Layers
  }
];

export default function AusbildungssystemePage() {
  return (
    <div className="min-h-screen bg-[#FAF8F5] dark:bg-[#0B1120] text-slate-800 dark:text-slate-100 transition-colors duration-300">
      <Header />

      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-28 pb-16">
        <div className="absolute inset-0 z-0">
          <Image
            src="/products_hero_bg.webp"
            alt="Didaktische Schulungssysteme Sanota Global"
            fill
            priority
            unoptimized={true}
            placeholder="blur"
            blurDataURL={HERO_BLUR_DATA["products_hero_bg"]}
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-[#0B1120]/85 dark:bg-[#060A12]/90 backdrop-blur-[1px]" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B1120] via-transparent to-transparent opacity-80" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E5A93C]/15 border border-[#E5A93C]/30 text-[#E5A93C] text-xs sm:text-sm font-semibold mb-6">
            <GraduationCap className="w-4 h-4" />
            <span>Berufsschulen | Technikerschulen | Hochschulen | Ausbildungszentren</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
            Didaktische Schulungssysteme & SPS Ausbildungspanels
          </h1>

          <p className="text-base sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-10 font-normal">
            Praxisorientierte Trainingsboards, modulare Mechatronik-Laborprüfstände und Industrie 4.0 Lernsysteme nach europäischen Ausbildungsstandards.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/ihre-herausforderung"
              className="w-full sm:w-auto px-8 py-4 bg-[#E5A93C] hover:bg-[#F0B74C] text-[#0B1120] font-bold rounded-lg transition-all shadow-lg shadow-[#E5A93C]/20 hover:scale-[1.02] flex items-center justify-center gap-2"
            >
              <span>Ausbildungssysteme anfragen</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-16">
        <div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#17135B] dark:text-white mb-4">
            Modulare Ausbildungssysteme für die Fachkräfte von morgen
          </h2>
          <p className="text-slate-600 dark:text-slate-300 max-w-3xl text-base sm:text-lg leading-relaxed">
            Sanota entwickelt didaktisch durchdachte Trainingsgeräte, die Theorie und industrielle Praxis nahtlos verbinden. Robuste Industriekomponenten sorgen für Langlebigkeit im harten Schul- und Laboralltag.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {educationalSolutions.map((item, idx) => {
            const Icon = item.icon;
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
                    {item.title}
                  </h3>
                  <p className="text-xs font-semibold text-[#E5A93C] mb-3">
                    {item.subtitle}
                  </p>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-5">
                    {item.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {item.points.map((pt, pIdx) => (
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
                    Technische Daten anfordern <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Customization Callout */}
        <section className="bg-gradient-to-br from-[#0F0C3B] to-[#1A1658] border border-[#D4AF37]/40 rounded-3xl p-8 sm:p-10 text-white text-center shadow-xl">
          <h2 className="text-2xl sm:text-3xl font-extrabold mb-3">
            Sonderanfertigungen für Ihr Ausbildungslabor
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto text-sm sm:text-base mb-6 leading-relaxed">
            Haben Sie spezielle Anforderungen an Lehrpläne, SPS-Fabrikate oder Abmessungen? Wir fertigen kundenspezifische Ausbildungstafeln und Versuchsstände exakt nach Ihren Vorgaben.
          </p>
          <Link
            href="/ihre-herausforderung"
            className="inline-flex items-center gap-2 px-8 py-3 bg-[#E5A93C] hover:bg-[#F0B74C] text-[#0B1120] font-bold rounded-lg transition-all"
          >
            <span>Laborausstattung anfragen</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </section>
      </main>

      <Footer />
    </div>
  );
}
