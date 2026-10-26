"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import { 
  Cpu, 
  Settings, 
  Activity, 
  ShieldCheck, 
  Zap, 
  Layers, 
  Wrench, 
  BarChart3, 
  Radio, 
  CheckCircle2, 
  ChevronDown, 
  ArrowRight, 
  HelpCircle, 
  Globe2, 
  Server, 
  Sliders
} from "lucide-react";
import { HERO_BLUR_DATA } from "@/lib/heroBlurData";

const automationServices = [
  {
    title: "SPS-Programmierung & Steuerungstechnik",
    subtitle: "Herstellerunabhängige Programmierung & Integration",
    description: "Entwicklung und Optimierung robuster SPS-Software für hochpräzise Ablaufsteuerungen. Wir programmieren nach IEC 61131-3 Standards für Siemens SIMATIC (TIA Portal), Schneider Electric, Omron, Beckhoff und Delta.",
    points: [
      "Siemens S7-1200 / S7-1500 & TIA Portal",
      "HMI-Visualisierung & SCADA-Anbindung",
      "Frequenzumrichter- & Servomotor-Parametrierung",
      "Strukturierte Programmierung nach IEC 61131-3",
      "Sicherheitsgerichtete Steuerungen (Safety SPS)"
    ],
    icon: Cpu,
    tag: "Steuerungstechnik"
  },
  {
    title: "Schaltschrankbau & Anlagensteuerung",
    subtitle: "Fertigung nach DIN EN 61439 & CE-Konformität",
    description: "Planung, Verdrahtung und Prüfung von Niederspannungsschaltanlagen und dezentralen Steuerpulten. Saubere Dokumentation mit EPLAN-Schaltplänen und vollständiger Stückliste.",
    points: [
      "Schaltschrankfertigung nach DIN EN 61439",
      "EMV-gerechte Verdrahtung & Überspannungsschutz",
      "Klemmenpläne, Aufbaupläne & Stromlaufpläne",
      "Inbetriebnahme & 100% Stückprüfung vor Auslieferung",
      "Ergonomische Bedienpulte & Touchpanel-Integration"
    ],
    icon: Settings,
    tag: "Schaltschrankbau"
  },
  {
    title: "Maschinenmodernisierung & Retrofit",
    subtitle: "Lebensdauerverlängerung bestehender Produktionsanlagen",
    description: "Kosteneffiziente Nachrüstung mechanisch intakter Maschinen. Wir ersetzen abgekündigte Steuerungen, veraltete Relais und störanfällige Antriebe durch zeitgemäße Digitaltechnik.",
    points: [
      "Austausch abgekündigter SPS-Baugruppen",
      "Umrüstung von Gleichstromantrieben auf moderne Drehstrom-Servos",
      "Nachrüstung moderner Schutzeinrichtungen & Not-Halt-Konzepte",
      "Reduzierung von Rüstzeiten & Stillständen um bis zu 85 %",
      "Minimale Produktionsunterbrechung durch Vorab-Simulation"
    ],
    icon: Wrench,
    tag: "Retrofit & Modernisierung"
  },
  {
    title: "Sondermaschinenbau & Automatisierungskonzepte",
    subtitle: "Individuelle Fertigungslösungen von der Machbarkeit bis zur Serie",
    description: "Konzeptionierung und Bau maßgeschneiderter Sondermaschinen für spezielle Handhabungs-, Montage- und Prüfprozesse, exakt abgestimmt auf Ihre Taktzeit und Bauteilgeometrie.",
    points: [
      "Mechanische Konstruktion & 3D-CAD-Entwicklung",
      "Pneumatische & elektromechanische Greifsysteme",
      "Integrierte Qualitätskontrolle mit Sensorsystemen",
      "Prototypenbau & schrittweise Serienüberführung",
      "CE-Kennzeichnung & Risikobeurteilung"
    ],
    icon: Sliders,
    tag: "Sondermaschinenbau"
  }
];

const iiotServices = [
  {
    title: "Fernüberwachung (Remote Monitoring)",
    subtitle: "Echtzeit-Maschinenparameter & Zustandsüberwachung",
    description: "Zentrale Erfassung und weltweiter Fernzugriff auf Betriebsdaten, Taktzeiten und Störmeldungen über hochsichere Web-Dashboards und mobile Anwendungen.",
    points: [
      "Webbasierte Live-Dashboards mit KPIs & OEE-Kennzahlen",
      "Push-Benachrichtigungen bei Grenzwertüberschreitung",
      "Historische Datenspeicherung & Trendanalysen",
      "Standortübergreifende Flottenüberwachung für Maschinenbauer",
      "Sicherer VPN-Tunnel & Rollen-Rechte-Management"
    ],
    icon: Activity,
    tag: "Remote Monitoring"
  },
  {
    title: "Vorausschauende Wartung (Predictive Maintenance)",
    subtitle: "Ausfallzeiten vermeiden durch smarte Schwingungs- & Temperaturanalyse",
    description: "Früherkennung mechanischer und thermischer Verschleißerscheinungen an Lagern, Motoren und Getrieben durch kontinuierliche Messung und algorithmische Trendbewertung.",
    points: [
      "Vibrations- & Schwingungsanalyse an rotierenden Teilen",
      "Thermische Überwachung kritischer Wicklungen & Getriebe",
      "Automatische Berechnung verbleibender Nutzungsdauer",
      "Vermeidung teurer Folgeschäden und ungeplanter Stillstände",
      "Nahtlose Integration in betriebliche ERP- & Instandhaltungs-Systeme"
    ],
    icon: BarChart3,
    tag: "Predictive Maintenance"
  },
  {
    title: "IoT-Sensorik & Industrielle Gateways",
    subtitle: "Standardisierte Schnittstellen: Modbus, MQTT, OPC UA",
    description: "Nachrüstung smarter Sensoren und robuster Edge-Gateways an bestehenden Anlagen zur lückenlosen Datenerfassung ohne Eingriff in die zertifizierte Steuerung.",
    points: [
      "OPC UA, MQTT, Modbus TCP/RTU & PROFINET Gateways",
      "Druck-, Durchfluss-, Feuchte- & Energiezähler-Integration",
      "Drahtlose & kabelgebundene Sensornetzwerke",
      "Robuste Industriegehäuse mit Schutzart IP65/IP67",
      "Vorverarbeitung und Filterung direkt an der Edge"
    ],
    icon: Radio,
    tag: "Sensorik & Gateways"
  },
  {
    title: "Sichere Datenübertragung & Edge-Architektur",
    subtitle: "Datensicherheit nach Industriestandard (OT- & IT-Konvergenz)",
    description: "Trennung sensibler Steuerungsnetze (OT) von Unternehmensnetzwerken (IT) durch Firewall-Konzepte, TLS-Verschlüsselung und lokale Zwischenspeicherung bei Netzausfall.",
    points: [
      "Ende-zu-Ende TLS 1.3 Verschlüsselung aller Messdaten",
      "Lokaler Ringspeicher (Buffer) gegen Datenverlust bei Netzausfall",
      "Härtung von Edge-Betriebssystemen gegen Cyber-Bedrohungen",
      "Souveräne Datenhaltung (On-Premise oder DSGVO-konforme Cloud)",
      "Standardisierte REST APIs für Datenaustausch"
    ],
    icon: Server,
    tag: "OT/IT-Sicherheit"
  }
];

const faqs = [
  {
    q: "Welche SPS-Systeme und Steuerungsplattformen unterstützt Sanota?",
    a: "Sanota bietet herstellerunabhängige SPS-Programmierung und Steuerungstechnik für alle marktführenden Systeme: Siemens (SIMATIC S7-1200, S7-1500, LOGO!, TIA Portal), Schneider Electric (Modicon), Omron, Beckhoff und Delta. Wir erstellen zudem intuitive HMI-Visualisierungen und SCADA-Systeme nach gängigen europäischen Industriestandards."
  },
  {
    q: "Wie läuft eine Maschinenmodernisierung (Retrofit) bei bestehenden Industrieanlagen ab?",
    a: "Unsere Ingenieure erfassen zunächst den Ist-Zustand Ihrer Anlage vor Ort oder anhand von Schaltplänen. Anschließend entwickeln wir ein schlüsselfertiges Retrofit-Konzept: Abgekündigte Steuerungen, Schaltschränke und Antriebe werden durch moderne SPS-Systeme und Servoumrichter ersetzt. Die Vorinbetriebnahme erfolgt in unserer Werkstatt, sodass die Stillstandszeit in Ihrem Werk auf ein Minimum reduziert wird."
  },
  {
    q: "Wie funktioniert die Vorausschauende Wartung (Predictive Maintenance) über IIoT?",
    a: "Hochpräzise Schwingungs-, Strom- und Temperatursensoren werden an Motoren, Pumpen und Getrieben angebracht. Ein industrielles IoT-Gateway erfasst diese Messwerte und überträgt sie via MQTT oder OPC UA an ein zentrales Dashboard. Überschreiten Schwingungsmuster definierte Schwellenwerte, sendet das System automatische Warnmeldungen, lange bevor es zum Lagerschaden kommt."
  },
  {
    q: "Bietet Sanota schlüsselfertigen Schaltschrankbau nach europäischen Sicherheitsnormen an?",
    a: "Ja, wir planen und fertigen Schaltschränke nach internationalen und europäischen Vorschriften (u. a. DIN EN 61439, VDE-Bestimmungen und CE-Richtlinien). Jeder Schaltschrank wird mit vollständigen Klemmenplänen, EPLAN-Dokumentation und Prüfprotokoll ausgeliefert."
  },
  {
    q: "Können bestehende Bestandsmaschinen ohne moderne Schnittstellen nachgerüstet werden?",
    a: "Absolut. Mithilfe nicht-invasiver Sensoren (z. B. Stromwandler, magnetische Vibrationssensoren, externe Druckmessumformer) und Edge-Gateways erfassen wir Prozessparameter autark, ohne die bestehende Maschinensteuerung verändern oder die Gewährleistung berühren zu müssen."
  }
];

export default function IndustrieautomatisierungPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-[#FAF8F5] dark:bg-[#0B1120] text-slate-800 dark:text-slate-100 transition-colors duration-300">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-28 lg:pt-36 pb-16 lg:pb-24 overflow-hidden border-b border-slate-200 dark:border-slate-800 bg-transparent min-h-[60vh] lg:min-h-[72vh] flex flex-col justify-center">
        <div className="page-hero-bg">
          <Image
            src="/services_hero_bg.webp"
            alt="Industrieautomatisierung & IIoT-Lösungen Sanota Global"
            fill
            priority
            unoptimized={true}
            placeholder="blur"
            blurDataURL={HERO_BLUR_DATA["services_hero_bg"]}
            className="object-cover"
          />
        </div>
        <div className="page-hero-overlay" />

        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E5A93C]/15 border border-[#E5A93C]/30 text-[#92400E] dark:text-[#E5A93C] text-xs sm:text-sm font-bold mb-6 tracking-wide"
          >
            <Globe2 className="w-4 h-4 text-[#92400E] dark:text-[#E5A93C]" />
            <span>Engineering Partner für die DACH-Region (DE | AT | CH)</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-6xl font-black text-[#0A0732] dark:text-white tracking-tight mb-6 leading-tight max-w-5xl mx-auto"
          >
            Intelligente Industrieautomatisierung & <span className="text-[#C59B27] dark:text-[#2E5EAA]">Industrielles IoT (IIoT)</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-base sm:text-xl text-[#1E293B] dark:text-slate-300 max-w-3xl mx-auto leading-relaxed mb-10 font-medium"
          >
            Effiziente Steuerungstechnik, lückenlose Vernetzung und datengestützte Prozessoptimierung für den modernen Maschinenbau und Fertigungsbetrieb.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              href="/ihre-herausforderung"
              className="w-full sm:w-auto px-8 py-4 bg-[#E5A93C] hover:bg-[#F0B74C] text-[#0B1120] font-bold rounded-lg transition-all shadow-lg shadow-[#E5A93C]/20 hover:scale-[1.02] flex items-center justify-center gap-2"
            >
              <span>Jetzt Beratung anfragen</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="#leistungen"
              className="w-full sm:w-auto px-8 py-4 bg-white/90 dark:bg-white/10 hover:bg-white text-slate-800 dark:text-white font-semibold rounded-lg border border-slate-300 dark:border-white/20 transition-all hover:scale-[1.02]"
            >
              Lösungen entdecken
            </a>
          </motion.div>
        </div>
      </section>

      {/* Trust & Competency Bar */}
      <section className="bg-white dark:bg-[#0F172A] border-y border-slate-200 dark:border-slate-800 py-6">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-[#17135B] dark:text-[#E5A93C]">DIN ISO</div>
              <div className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1 font-medium">Normgerechte Entwicklung</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-[#17135B] dark:text-[#E5A93C]">SPS / SCADA</div>
              <div className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1 font-medium">Siemens, Omron & Beckhoff</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-[#17135B] dark:text-[#E5A93C]">-85 %</div>
              <div className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1 font-medium">Stillstandzeit durch Retrofit</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-[#17135B] dark:text-[#E5A93C]">Industrie 4.0</div>
              <div className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1 font-medium">MQTT, OPC UA & Sensorik</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <main id="leistungen" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-24">
        
        {/* Category A: Industrieautomatisierung */}
        <section>
          <div className="mb-12">
            <span className="text-xs font-bold tracking-wider uppercase text-[#E5A93C] bg-[#E5A93C]/10 px-3 py-1 rounded-md">
              Kategorie A
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#17135B] dark:text-white mt-3 mb-4">
              Maßgeschneiderte Automatisierungslösungen nach höchsten Standards
            </h2>
            <p className="text-slate-600 dark:text-slate-300 max-w-3xl text-base sm:text-lg leading-relaxed">
              Von der Planung schlüsselfertiger Steuerungen bis zur Modernisierung bestehender Fertigungsstraßen: Sanota liefert zuverlässige Automatisierungstechnik, die Qualität, Taktzeit und Betriebssicherheit dauerhaft sichert.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {automationServices.map((service, idx) => {
              const Icon = service.icon;
              return (
                <div
                  key={idx}
                  className="bg-white dark:bg-[#131C2E] border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-8 hover:border-[#E5A93C]/50 transition-all shadow-sm hover:shadow-xl flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-xl bg-[#17135B]/10 dark:bg-[#E5A93C]/10 flex items-center justify-center text-[#17135B] dark:text-[#E5A93C]">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                        {service.tag}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-[#17135B] dark:text-white mb-2">
                      {service.title}
                    </h3>
                    <p className="text-xs font-semibold text-[#E5A93C] mb-3">
                      {service.subtitle}
                    </p>
                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                      {service.description}
                    </p>
                    <ul className="space-y-2 mb-6">
                      {service.points.map((pt, pIdx) => (
                        <li key={pIdx} className="flex items-start text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                          <CheckCircle2 className="w-4 h-4 text-[#10B981] mr-2 shrink-0 mt-0.5" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
                    <Link
                      href="/ihre-herausforderung"
                      className="text-xs sm:text-sm font-bold text-[#17135B] dark:text-[#E5A93C] hover:underline inline-flex items-center gap-1.5"
                    >
                      Projekt anfragen <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Category B: Industrielles Internet der Dinge (IIoT) */}
        <section>
          <div className="mb-12">
            <span className="text-xs font-bold tracking-wider uppercase text-[#E5A93C] bg-[#E5A93C]/10 px-3 py-1 rounded-md">
              Kategorie B
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#17135B] dark:text-white mt-3 mb-4">
              Nahtlose Vernetzung & Smarte Sensorik für Industrie 4.0
            </h2>
            <p className="text-slate-600 dark:text-slate-300 max-w-3xl text-base sm:text-lg leading-relaxed">
              Bringen Sie Transparenz auf Ihren Hallenboden: Unsere IIoT-Lösungen verbinden bestehende und neue Anlagen mit intelligenten Analysewerkzeugen für maximale Transparenz und automatisierte Früherkennung.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {iiotServices.map((service, idx) => {
              const Icon = service.icon;
              return (
                <div
                  key={idx}
                  className="bg-white dark:bg-[#131C2E] border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-8 hover:border-[#E5A93C]/50 transition-all shadow-sm hover:shadow-xl flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-xl bg-[#17135B]/10 dark:bg-[#E5A93C]/10 flex items-center justify-center text-[#17135B] dark:text-[#E5A93C]">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                        {service.tag}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-[#17135B] dark:text-white mb-2">
                      {service.title}
                    </h3>
                    <p className="text-xs font-semibold text-[#E5A93C] mb-3">
                      {service.subtitle}
                    </p>
                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                      {service.description}
                    </p>
                    <ul className="space-y-2 mb-6">
                      {service.points.map((pt, pIdx) => (
                        <li key={pIdx} className="flex items-start text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                          <CheckCircle2 className="w-4 h-4 text-[#10B981] mr-2 shrink-0 mt-0.5" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
                    <Link
                      href="/ihre-herausforderung"
                      className="text-xs sm:text-sm font-bold text-[#17135B] dark:text-[#E5A93C] hover:underline inline-flex items-center gap-1.5"
                    >
                      IIoT-Konzept besprechen <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Technical FAQ Accordion Section */}
        <section className="bg-white dark:bg-[#131C2E] border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-10 shadow-sm">
          <div className="flex items-center gap-3 mb-3">
            <HelpCircle className="w-5 h-5 text-[#E5A93C]" />
            <span className="text-xs font-bold tracking-wider uppercase text-[#E5A93C]">
              Häufig gestellte Fragen (FAQ)
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#17135B] dark:text-white mb-8">
            Technische Fragen zu Industrieautomatisierung, SPS & IIoT
          </h2>

          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className="border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full flex items-center justify-between p-5 text-left bg-slate-50/50 dark:bg-slate-900/40 hover:bg-slate-100/60 dark:hover:bg-slate-900/80 transition-colors"
                  >
                    <span className="font-bold text-sm sm:text-base text-[#17135B] dark:text-white pr-4">
                      {faq.q}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-slate-500 shrink-0 transition-transform duration-200 ${
                        isOpen ? "rotate-180 text-[#E5A93C]" : ""
                      }`}
                    />
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="p-5 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-[#131C2E]"
                      >
                        {faq.a}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </section>

        {/* Bottom CTA Card */}
        <section className="bg-gradient-to-br from-[#0F0C3B] to-[#1A1658] border border-[#D4AF37]/40 rounded-3xl p-8 sm:p-12 text-center text-white shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#E5A93C]/10 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />
          <h2 className="text-2xl sm:text-4xl font-extrabold mb-4 relative z-10">
            Haben Sie ein konkretes Projekt oder eine Automatisierungsaufgabe?
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto text-sm sm:text-base mb-8 relative z-10 leading-relaxed">
            Schildern Sie unseren Ingenieuren Ihre technischen Anforderungen. Wir erstellen eine fundierte Machbarkeitseinschätzung und ein unverbindliches Konzept.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
            <Link
              href="/ihre-herausforderung"
              className="w-full sm:w-auto px-8 py-3.5 bg-[#E5A93C] hover:bg-[#F0B74C] text-[#0B1120] font-bold rounded-lg transition-all shadow-lg hover:scale-[1.02]"
            >
              Herausforderung einreichen
            </Link>
            <Link
              href="/kontakt"
              className="w-full sm:w-auto px-8 py-3.5 bg-white/10 hover:bg-white/15 text-white font-semibold rounded-lg border border-white/20 transition-all hover:scale-[1.02]"
            >
              Ingenieur-Team kontaktieren
            </Link>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
