"use client";

import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import { 
  Sprout, 
  Droplets, 
  SunMedium, 
  Activity, 
  CheckCircle2, 
  ArrowRight, 
  Layers, 
  Wind,
  Gauge
} from "lucide-react";
import { HERO_BLUR_DATA } from "@/lib/heroBlurData";

const agriSolutions = [
  {
    title: "Intelligente Gewächshaussteuerung",
    subtitle: "Klimacomputer für Lüftung, Schattierung & Heizung",
    description: "Automatisierte Regelung des Mikroklimas basierend auf solarer Strahlung, Temperatur, relativer Luftfeuchtigkeit und CO2-Gehalt für optimales Pflanzenwachstum.",
    points: [
      "Stufenlose First- & Seitenlüftungssteuerung",
      "Thermische Energieschirme & Schattierungsrollos",
      "CO2-Begasungsregelung & Umluftventilatoren",
      "Sturmsicherung & automatische Regenschließung",
      "Zentrales Touch-Bedientableau & Fernzugriff per Smartphone"
    ],
    icon: SunMedium
  },
  {
    title: "Automatische Bewässerung & Fertigation",
    subtitle: "Präzise Nährstoff- und Wasserdosierung",
    description: "Multi-Kanal-Mischsysteme für A/B-Düngelösungen mit kontinuierlicher pH- und EC-Wert-Kompensation für geschlossene Kreisläufe und Tropfbewässerung.",
    points: [
      "Automatisches Dosieren von bis zu 4 Düngerkomponenten",
      "Präzise pH- & EC-Regelung in Echtzeit",
      "Bedarfsgerechte Zonensteuerung nach Einstrahlungsmenge",
      "Wassersparende Kreislaufführung (Drainage-Recycling)",
      "Verstopfungsüberwachung & Druckausgleich"
    ],
    icon: Droplets
  },
  {
    title: "Agrar-IoT & Umweltmonitoring",
    subtitle: "Boden-, Substrat- & Wetterdaten in Echtzeit",
    description: "Kabellose LoRaWAN- und Mobilfunk-Sensoren erfassen Bodenfeuchte, elektrische Leitfähigkeit (EC), Bodentemperatur und mikroklimatische Bedingungen im Feld.",
    points: [
      "Mehrpunkt-Bodenfeuchteprofile (VWC) bis 1m Tiefe",
      "Lokale Wetterstation mit Regen-, Wind- & Globalstrahlungsmessung",
      "Batteriebetriebene Funksensoren mit bis zu 5 Jahren Laufzeit",
      "Automatisierte Frost- & Hitzewarnungen per SMS/E-Mail",
      "Exportierbare Daten für Zertifizierungen (GlobalG.A.P.)"
    ],
    icon: Activity
  },
  {
    title: "Präzisionslandwirtschaft Systeme (Precision Farming)",
    subtitle: "Ressourceneffiziente Bewirtschaftung & Ertragssteigerung",
    description: "Verknüpfung historischer Sensordaten mit Wachstumsmodellen zur exakten Vorhersage von Bewässerungszeiten und Nährstoffbedarf.",
    points: [
      "Einsparung von Wasser und Düngemitteln um bis zu 40 %",
      "Vermeidung von Wurzelstress und Pilzkrankheiten",
      "Webbasierte Kartenansicht mit Zonenstatus",
      "Offene Schnittstellen für Drittanbieter-Farm-Management-Software"
    ],
    icon: Gauge
  },
  {
    title: "Hydrokultur & Vertikales Gärtnern (Vertical Farming)",
    subtitle: "Kontrollierte Anbausysteme (CEA) für Spezialkulturen",
    description: "Komplette steuerungstechnische Ausstattung geschlossener Vertical-Farming-Anlagen, NFT-Rinnensysteme und Ebbe-Flut-Tische.",
    points: [
      "LED-Wachstumslichtsteuerung mit dynamischen Spektren",
      "Vollklimatisierte Racks mit laminarer Luftführung",
      "Nährlösungs-Sauerstoffanreicherung (O2-Eintrag)",
      "Raumeffiziente, mehrstöckige Automatisierungskonzepte"
    ],
    icon: Layers
  }
];

export default function SmarteLandwirtschaftPage() {
  return (
    <div className="min-h-screen bg-[#FAF8F5] dark:bg-[#0B1120] text-slate-800 dark:text-slate-100 transition-colors duration-300">
      <Header />

      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-28 pb-16">
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero_agri.webp"
            alt="Smarte Landwirtschaft Sanota Global"
            fill
            priority
            unoptimized={true}
            placeholder="blur"
            blurDataURL={HERO_BLUR_DATA["hero_agri"]}
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-[#0B1120]/85 dark:bg-[#060A12]/90 backdrop-blur-[1px]" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B1120] via-transparent to-transparent opacity-80" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E5A93C]/15 border border-[#E5A93C]/30 text-[#E5A93C] text-xs sm:text-sm font-semibold mb-6">
            <Sprout className="w-4 h-4" />
            <span>Gewächshausbetreiber | Agrarbetriebe | Vertical Farming</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
            Smart Agriculture & Gewächshaus-Automatisierung
          </h1>

          <p className="text-base sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-10 font-normal">
            Smarte Sensorik, automatische Bewässerung, exakte Fertigation und IoT-Umweltmonitoring für die moderne gewerbliche Präzisionslandwirtschaft.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/ihre-herausforderung"
              className="w-full sm:w-auto px-8 py-4 bg-[#E5A93C] hover:bg-[#F0B74C] text-[#0B1120] font-bold rounded-lg transition-all shadow-lg shadow-[#E5A93C]/20 hover:scale-[1.02] flex items-center justify-center gap-2"
            >
              <span>AgriTech-Lösung anfragen</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-16">
        <div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#17135B] dark:text-white mb-4">
            Automatisierte Systeme für maximale Ernteerträge und Ressourcenschonung
          </h2>
          <p className="text-slate-600 dark:text-slate-300 max-w-3xl text-base sm:text-lg leading-relaxed">
            Sanota stattet landwirtschaftliche Betriebe und Gewächshäuser mit robuster Automatisierungs- und Sensortechnik aus, die Wasser, Energie und Nährstoffe spart und gleichzeitig Erntequalität und Planbarkeit steigert.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {agriSolutions.map((sol, idx) => {
            const Icon = sol.icon;
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
                    {sol.title}
                  </h3>
                  <p className="text-xs font-semibold text-[#E5A93C] mb-3">
                    {sol.subtitle}
                  </p>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-5">
                    {sol.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {sol.points.map((pt, pIdx) => (
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
                    Projekt planen <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Customization Callout */}
        <section className="bg-gradient-to-br from-[#0F0C3B] to-[#1A1658] border border-[#D4AF37]/40 rounded-3xl p-8 sm:p-10 text-white text-center shadow-xl">
          <h2 className="text-2xl sm:text-3xl font-extrabold mb-3">
            Planen Sie ein neues Gewächshaus oder eine Modernisierung?
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto text-sm sm:text-base mb-6 leading-relaxed">
            Sprechen Sie mit unseren AgriTech-Spezialisten über Ihr Vorhaben. Wir erstellen Ihnen ein maßgeschneidertes Bewässerungs- und Steuerungs-Konzept.
          </p>
          <Link
            href="/ihre-herausforderung"
            className="inline-flex items-center gap-2 px-8 py-3 bg-[#E5A93C] hover:bg-[#F0B74C] text-[#0B1120] font-bold rounded-lg transition-all"
          >
            <span>Gewächshaus-Beratung anfragen</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </section>
      </main>

      <Footer />
    </div>
  );
}
