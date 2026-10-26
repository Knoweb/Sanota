"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FeaturedProjectCardCopy from "@/components/FeaturedProjectCardCopy";
import VideosAndDemonstrations from "@/components/VideosAndDemonstrations";
import Link from "next/link";
import Image from "next/image";
import dynamic from 'next/dynamic';
import { ArrowRight, PlayCircle, Plus, Minus, CheckCircle2, ChevronDown, HelpCircle, Factory, Sprout, Coffee, Leaf, Truck, Zap, Recycle, Building2, Stethoscope, Lightbulb, Search, PenTool, Wrench, Network, Play, RefreshCw, ShieldCheck, TrendingUp } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { industriesES } from "@/locales/es/industries";
import { industriesDE } from "@/locales/de/industries";
import { industriesJA } from "@/locales/ja/industries";
import { industriesAR } from "@/locales/ar/industries";
import { HERO_BLUR_DATA } from "@/lib/heroBlurData";
import { industriesFaqData } from "@/lib/faqData";

// Data Structures

const operationalUnderstanding = [
  "The process or activity being performed", "Existing machinery and systems", "Production or service requirements",
  "Operational limitations", "Safety and quality expectations", "Resource and energy use",
  "Maintenance requirements", "Opportunities for automation and digitalization", "Future expansion plans"
];

const priorityIndustries = [
  {
    title: "Manufacturing & Industrial Automation",
    shortTitle: "Manufacturing",
    subtitle: "Modernize, Automate and Improve Production",
    desc: "Sanota helps manufacturers improve production, equipment reliability, safety and process control through custom machinery, industrial automation, connected monitoring and modernization of existing assets.",
    icon: Factory,
    bgImage: "/ind_manufacturing_1788515164504.jpg",
    points: [
      "Custom and special-purpose machinery", "Production and process automation", "PLC, HMI, sensor and drive integration",
      "Automated testing and inspection systems", "Machine monitoring and data collection", "Material-handling systems",
      "Machinery refurbishment", "Control-system replacement", "Preventive maintenance and AMC support"
    ],
    buttonText: "Explore Manufacturing & Industrial Automation"
  },
  {
    title: "Smart Agriculture & Agri-Technology",
    shortTitle: "Smart Agriculture",
    subtitle: "Engineering Smarter and More Resource-Efficient Agriculture",
    desc: "Sanota develops controlled-agriculture, automation and monitoring systems that help growers manage water, nutrients, climate and crop conditions with greater precision.",
    icon: Sprout,
    bgImage: "/ind_agri_1788515181352.jpg",
    points: [
      "Automated greenhouse climate control systems",
      "Commercial smart fertigation dosing system integration",
      "IoT soil moisture and EC monitoring platform for farms",
      "Hydroponic and controlled-environment cultivation",
      "Climate, humidity and environmental ventilation control",
      "Plant and soil sensor analytics",
      "Automated dosing, valve and pumping manifolds",
      "Web and mobile telemetry dashboards",
      "Alerts and remote supervisory control",
      "Preventive maintenance and ongoing system support"
    ],
    buttonText: "Explore Smart Agriculture"
  },
  {
    title: "Food & Beverage Processing",
    shortTitle: "Food & Beverage",
    subtitle: "Turn Raw Materials into Consistent, Market-Ready Products",
    desc: "Sanota designs food-processing equipment and integrated systems that support better hygiene, process control, preservation, throughput and value addition.",
    icon: Coffee,
    bgImage: "/ind_food_1788515232491.jpg",
    points: [
      "Washing and preparation systems", "Cutting and shredding equipment", "Drying and preservation systems",
      "Cooking and incubation equipment", "Conveyors and product handling", "Processing-line integration",
      "Automation and safety controls", "Temperature and humidity monitoring", "Packaging-flow support", "Maintenance and AMC services"
    ],
    buttonText: "Explore Food & Beverage Processing"
  },
  {
    title: "Tea Industry Solutions",
    shortTitle: "Tea Industry",
    subtitle: "Modern Engineering for Sri Lanka’s Tea Value Chain",
    desc: "Sanota supports tea factories, estates, smallholders and specialty producers with processing machinery, automation, environmental control, digital monitoring and lifecycle support.",
    icon: Leaf,
    bgImage: "/ind_tea_1788515252795.jpg",
    points: [
      "Automated tea trough withering humidity control system",
      "Fluidized bed tea dryer temperature controller retrofit",
      "Smart tea factory automation system vendor solutions",
      "Tea processing plant IoT data logging solution",
      "Automated louver and withering trough airflow automation",
      "Tea rolling and CTC automation controls",
      "Green and black tea dryer thermal regulation",
      "Mini tea-factory and specialty tea processing equipment",
      "Factory-wide energy, humidity and process monitoring",
      "Machinery modernization and AMC support"
    ],
    buttonText: "Explore Tea Industry Solutions"
  }
];

const additionalIndustries = [
  {
    title: "Logistics, Warehousing & Material Handling",
    subtitle: "Move Materials Safely, Intelligently and Visibly",
    desc: "Sanota helps factories, warehouses and distribution operations improve internal material movement, asset visibility and workflow coordination. Solutions may include automated guided vehicles, conveyors, unloading systems, RFID tracking, operational dashboards and customized material-handling equipment.",
    icon: Truck,
    button: "Explore Logistics & Warehousing Solutions"
  },
  {
    title: "Energy & Resource Efficiency",
    subtitle: "Measure, Control and Optimize Resources",
    desc: "Sanota supports industrial, commercial, agricultural and institutional facilities in improving their understanding and control of energy and resource use. Solutions may include energy monitoring, smart control systems, solar thermal systems, operational analytics, heating-system improvements and resource-efficiency initiatives.",
    icon: Zap,
    button: "Explore Energy & Resource Solutions"
  },
  {
    title: "Environmental & Waste Solutions",
    subtitle: "Practical Engineering for Cleaner and More Resilient Operations",
    desc: "Sanota develops machinery and connected systems for waste handling, compaction, processing, environmental monitoring and waterway protection. Solutions may include bale machines, food-waste processors, smart drain monitoring, waste interception systems, environmental sensors and operational dashboards.",
    icon: Recycle,
    button: "Explore Environmental & Waste Solutions"
  },
  {
    title: "Infrastructure & Smart Facilities",
    subtitle: "Connect Infrastructure with Intelligent Monitoring and Control",
    desc: "Sanota integrates automation, communication and monitoring technologies to improve the visibility, coordination, safety and reliability of infrastructure and facilities. Solutions may include traffic-control systems, utility monitoring, facility automation, alarm integration, environmental monitoring and centralized control platforms.",
    icon: Building2,
    button: "Explore Infrastructure & Smart Facilities"
  },
  {
    title: "Healthcare & Biomedical Engineering",
    subtitle: "Engineering Support for Healthcare Innovation",
    desc: "Sanota supports hospitals, researchers, institutions and innovators through customized equipment development and collaborative biomedical engineering. Our capabilities may include mechanical equipment, electronic devices, control systems, prototypes, monitoring solutions and technical support for eligible healthcare equipment.",
    icon: Stethoscope,
    button: "Explore Healthcare & Biomedical Engineering"
  },
  {
    title: "Research, Innovation & Custom Product Development",
    subtitle: "From Idea and Research Challenge to Engineered Product",
    desc: "Sanota works with inventors, universities, research institutions, startups and businesses to translate concepts and difficult technical requirements into practical prototypes, products and operational systems. Our support may include engineering feasibility, concept development, mechanical and electronic design, embedded systems, automation, IoT, software, testing and production engineering.",
    icon: Lightbulb,
    button: "Explore Innovation & Custom Development"
  }
];

const engineeringJourney = [
  { title: "Assess", desc: "Understand the operation, identify challenges and define improvement opportunities.", icon: Search },
  { title: "Design", desc: "Develop the mechanical, electrical, automation and digital architecture required for the solution.", icon: PenTool },
  { title: "Develop", desc: "Build machinery, prototypes, control systems, software and connected platforms.", icon: Wrench },
  { title: "Integrate", desc: "Connect equipment, controls, sensors, software, utilities and operating processes.", icon: Network },
  { title: "Implement", desc: "Install, test, commission and hand over the completed system.", icon: Play },
  { title: "Modernize", desc: "Restore existing machinery, replace obsolete controls and improve system performance.", icon: RefreshCw },
  { title: "Maintain", desc: "Provide preventive maintenance, breakdown support, upgrades and Annual Maintenance Contracts.", icon: ShieldCheck },
  { title: "Improve", desc: "Review performance and identify further opportunities for efficiency, scalability and operational development.", icon: TrendingUp }
];

const digitalTechList = [
  "Industrial machinery", "PLC and HMI control", "Sensors and instrumentation", "IoT connectivity", "Cloud platforms",
  "Web and mobile applications", "Operational dashboards", "Asset tracking", "Alerts and reporting",
  "Remote monitoring and control", "Enterprise-system integration"
];

const modernizationImprovements = [
  "Mechanical restoration", "Electrical repairs and rewiring", "Controller replacement", "Sensor and instrumentation upgrades",
  "PLC and HMI integration", "Automation improvements", "Safety-system upgrades", "Software and monitoring integration",
  "Energy and performance optimization", "Operator and maintenance training"
];

const amcCoverage = [
  "Machinery and processing equipment", "Electrical panels and control systems", "PLCs, HMIs and industrial drives",
  "Sensors and instrumentation", "Conveyors and material-handling systems", "Agricultural and environmental controls",
  "IoT devices and monitoring platforms", "Software and operational dashboards", "Integrated production and processing systems"
];

const partnerTypes = [
  "Established industrial companies", "Small and medium enterprises", "Export-oriented manufacturers",
  "Agricultural enterprises", "Tea estates and factories", "Food processors",
  "Government and public-sector organizations", "Universities and research institutions",
  "Inventors and startups", "International technology and business partners"
];

export default function IndustriesPage() {
  const { language } = useLanguage();
  const isEs = language === "es";
  const isDe = language === "de";
  const isJa = language === "ja";
  const isAr = language === "ar";
  const ind = isAr ? industriesAR : isJa ? industriesJA : isDe ? industriesDE : isEs ? industriesES : null;

  const [activeIndex, setActiveIndex] = useState(0);
  const [activeAdditional, setActiveAdditional] = useState<number | null>(0);
  const [activeSupportTab, setActiveSupportTab] = useState<'modernization' | 'amc'>('modernization');
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % priorityIndustries.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-transparent">
      <Header />
      <main className="flex-grow">
        
        {/* 1. Page Hero */}
        <section className="relative pt-24 lg:pt-32 pb-12 lg:pb-16 overflow-hidden border-b border-slate-200 dark:border-slate-800 bg-transparent min-h-[60vh] lg:min-h-[70vh] flex flex-col justify-center">
          <div className="page-hero-bg">
            <Image
              src="/industries_hero_bg.webp"
              alt="Industries We Support Background"
              fill
              priority
              unoptimized
              placeholder="blur"
              blurDataURL={HERO_BLUR_DATA.industries_hero_bg}
              className="object-cover"
            />
          </div>
          <div className="page-hero-overlay" />
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-[#E8B84B] font-bold tracking-widest uppercase text-sm mb-5"
            >
              {ind ? ind.hero.heading : "Industries We Support"}
            </motion.p>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 }}
              className="text-4xl sm:text-6xl font-black text-white tracking-tight mb-8 leading-tight max-w-5xl mx-auto"
            >
              {ind ? (
                ind.hero.subheading
              ) : (
                <>
                  Integrated Engineering Across <span className="text-[#E8B84B]">Diverse Operational Environments</span>
                </>
              )}
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-slate-300 max-w-4xl mx-auto mb-6 font-medium leading-relaxed"
            >
              {ind ? ind.hero.description : "Sanota helps organizations design, develop, automate, modernize and maintain machinery, processes and operational systems across a wide range of industries."}
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="text-lg text-slate-400 max-w-4xl mx-auto mb-10 leading-relaxed"
            >
              {isAr ? "نحن نجمع بين الهندسة والأتمتة وإنترنت الأشياء والبرمجيات لتطوير حلول عملية تلبي متطلبات كل صناعة وعميل." : isJa ? "当社はエンジニアリング、自動化、IoT、ソフトウェアを組み合わせ、各業界および顧客の要件に応じた実用的なソリューションを開発しています。" : isDe ? "Wir kombinieren Ingenieurwesen, Automatisierung, IoT und Software, um praxisnahe Lösungen für die Anforderungen jeder Branche und jedes Kunden zu entwickeln." : isEs ? "Combinamos ingeniería, automatización, IoT y software para desarrollar soluciones prácticas en torno a los requisitos de cada industria y cliente." : "We combine engineering, automation, IoT and software to develop practical solutions around the requirements of each industry and customer."}
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-col sm:flex-row justify-center gap-4"
            >
              <a href="#industries" className="px-8 py-4 bg-[#E8B84B] hover:bg-[#d4a643] text-[#0B1220] font-bold rounded-lg transition-colors flex items-center justify-center">
                {ind ? ind.hero.primaryButton : "Select Your Industry"} <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <Link href="/tell-us-your-challenge" className="px-8 py-4 bg-[#131C2E]/80 hover:bg-slate-800 text-white font-bold rounded-lg border border-slate-700 transition-colors flex items-center justify-center">
                {ind ? ind.hero.secondaryButton : "Discuss Your Requirement"}
              </Link>
            </motion.div>
          </div>
        </section>

        {/* 2. Industry-Focused Engineering */}
        <section className="relative py-16 lg:py-24 bg-gradient-to-b from-[#FAF8F5] via-white to-[#FAF8F5] dark:from-[#0B1220] dark:via-[#080E1A] dark:to-[#050B14] overflow-hidden border-t border-slate-200/80 dark:border-slate-800/80">
          {/* Subtle Ambient Glows - pure CSS, zero canvas overhead */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/5 dark:bg-[#2E5EAA]/10 rounded-full blur-[140px] pointer-events-none -z-0" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-amber-500/5 dark:bg-[#E8B84B]/8 rounded-full blur-[120px] pointer-events-none -z-0" />
          
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
              
              <div className="lg:col-span-7 pr-0 lg:pr-4">
                <div className="inline-flex items-center px-3.5 py-1.5 rounded-full border border-[#2E5EAA]/20 dark:border-[#E8B84B]/30 bg-blue-500/10 dark:bg-[#E8B84B]/10 mb-4 backdrop-blur-sm">
                  <span className="w-2 h-2 rounded-full bg-[#2E5EAA] dark:bg-[#E8B84B] mr-2" />
                  <p className="text-[#2E5EAA] dark:text-[#E8B84B] font-bold tracking-widest uppercase text-[10px] lg:text-xs">
                    {ind ? ind.approach.heading : "Industry-Focused Engineering"}
                  </p>
                </div>
                
                <h2 className="text-3xl lg:text-4xl font-extrabold text-[#17135B] dark:text-white mb-4 leading-tight tracking-tight">
                  {ind ? (
                    ind.approach.subheading
                  ) : (
                    <>
                      Solutions Developed Around How <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2E5EAA] via-[#17135B] to-[#C59B27] dark:from-[#4C84E0] dark:via-white dark:to-[#E8B84B]">Your Industry Operates</span>
                    </>
                  )}
                </h2>
                
                <p className="text-[#555E75] dark:text-slate-300 text-base lg:text-lg leading-relaxed mb-6 max-w-2xl font-normal">
                  {ind ? ind.approach.description : "Every industry has different processes, operating conditions and technical priorities. A solution that works in one environment may not be suitable for another."}
                </p>
                
                <div className="h-px w-full max-w-md bg-gradient-to-r from-[#2E5EAA]/40 via-amber-400/40 to-transparent mb-6" />
                
                <p className="text-[#17135B] dark:text-white text-base lg:text-lg font-bold mb-4">
                  {isAr ? "تبدأ سانوتا بفهم عملياتك التشغيلية بعمق، بما في ذلك:" : isJa ? "サノタは、以下を含む顧客の業務の理解から始めます：" : isDe ? "Sanota beginnt damit, Ihre Betriebsabläufe zu verstehen, einschließlich:" : isEs ? "Sanota comienza por comprender su operación, incluyendo:" : "Sanota begins by understanding your operation, including:"}
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-0">
                  {(() => {
                    const items = ind ? ind.approach.evaluationPoints : operationalUnderstanding;
                    return items.map((item, idx) => {
                      const isLastOdd = idx === items.length - 1 && items.length % 2 !== 0;
                      return (
                        <div 
                          key={idx} 
                          className={`flex items-center gap-3.5 p-3.5 rounded-2xl bg-white dark:bg-[#131C2E]/60 border border-slate-200/90 dark:border-slate-800 shadow-xs hover:shadow-md hover:border-[#2E5EAA]/40 dark:hover:border-[#E8B84B]/40 hover:-translate-y-0.5 transition-all duration-300 group cursor-default ${
                            isLastOdd ? "sm:col-span-2" : ""
                          }`}
                        >
                          <div className="flex items-center justify-center w-7 h-7 rounded-xl bg-blue-50 dark:bg-[#0B1220] border border-blue-200/80 dark:border-[#E8B84B]/30 group-hover:border-[#2E5EAA] dark:group-hover:border-[#E8B84B] shrink-0 transition-colors">
                            <CheckCircle2 className="w-4 h-4 text-[#2E5EAA] dark:text-[#E8B84B]" />
                          </div>
                          <span className="text-[#17135B] dark:text-slate-200 text-xs sm:text-[13.5px] font-semibold leading-snug group-hover:text-[#2E5EAA] dark:group-hover:text-[#E8B84B] transition-colors">
                            {item}
                          </span>
                        </div>
                      );
                    });
                  })()}
                </div>
              </div>

              <div className="lg:col-span-5 mt-8 lg:mt-0 relative z-10">
                <div className="rounded-3xl p-8 lg:p-10 overflow-hidden group transition-all duration-300 shadow-xl dark:shadow-[0_20px_50px_rgba(0,0,0,0.4)] relative border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-[#131C2E]/70 backdrop-blur-md flex flex-col justify-between">
                  {/* Subtle top accent gradient */}
                  <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#2E5EAA] via-[#E8B84B] to-[#2E5EAA]" />
                  
                  {/* Badge & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-[11px] font-bold tracking-widest uppercase text-[#9A7210] dark:text-[#E8B84B] bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
                      Engineering Principle
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-[#2E5EAA]/10 dark:bg-[#2E5EAA]/20 flex items-center justify-center border border-[#2E5EAA]/20 text-[#2E5EAA] dark:text-[#4C84E0]">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                      </svg>
                    </div>
                  </div>
                  
                  <blockquote className="text-[#17135B] dark:text-white text-lg lg:text-xl font-bold leading-relaxed mb-6">
                    {isAr ? (
                      <>ثم نجمع بين القدرات الهندسية والتكنولوجية المناسبة لتطوير <span className="text-[#9A7210] dark:text-[#E8B84B]">حل عملي وقابل للتوسع.</span></>
                    ) : isJa ? (
                      <>その後、適切なエンジニアリングおよび技術力を結集し、<span className="text-[#9A7210] dark:text-[#E8B84B]">実用的で拡張性のあるソリューションを開発します。</span></>
                    ) : isDe ? (
                      <>Anschließend bündeln wir die passenden Engineering- und Technologiekompetenzen, um eine <span className="text-[#9A7210] dark:text-[#E8B84B]">praktische und skalierbare Lösung zu entwickeln.</span></>
                    ) : isEs ? (
                      <>Luego combinamos las capacidades adecuadas de ingeniería y tecnología para desarrollar una <span className="text-[#9A7210] dark:text-[#E8B84B]">solución práctica y escalable.</span></>
                    ) : (
                      <>We then combine the appropriate engineering and technology capabilities to develop a <span className="text-[#9A7210] dark:text-[#E8B84B]">practical and scalable solution.</span></>
                    )}
                  </blockquote>

                  {/* 3 Value Pillars */}
                  <div className="pt-5 border-t border-slate-100 dark:border-slate-800 space-y-2.5 mb-6">
                    <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#2E5EAA]" />
                      Customized to specific site and operating constraints
                    </div>
                    <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#E8B84B]" />
                      Multi-disciplinary team coordination under one roof
                    </div>
                    <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#2E5EAA]" />
                      Full lifecycle support from design through AMC
                    </div>
                  </div>

                  <Link 
                    href="/tell-us-your-challenge" 
                    className="inline-flex justify-center items-center w-full px-6 py-3.5 bg-[#2E5EAA] hover:bg-[#1f427d] text-white font-bold text-sm rounded-xl transition-all shadow-md hover:shadow-lg gap-2"
                  >
                    <span>Tell Us Your Challenge</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 3. Priority Industries (Interactive) */}
        <section id="priority-industries" className="relative py-10 lg:py-14 min-h-[90vh] flex items-center overflow-hidden bg-[#050B14]">
          {/* Background Images with AnimatePresence */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 0.7, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
              className="absolute inset-0 z-0"
              style={{
                backgroundImage: `url(${priorityIndustries[activeIndex].bgImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
          </AnimatePresence>
          
          {/* Dark gradient overlay to make text readable */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#050B14] via-[#050B14]/80 to-[#050B14]/40 z-0" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050B14] via-transparent to-[#050B14]/30 z-0" />

          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex flex-col lg:flex-row gap-12 lg:gap-24 items-center">
            
            {/* Left Column: Titles */}
            <div className="lg:w-1/3 flex flex-col space-y-8">
              {priorityIndustries.map((item, idx) => {
                const arShortTitles = ["التصنيع", "الزراعة", "الأغذية", "الشاي"];
                const esShortTitles = ["Fabricación", "Agricultura", "Alimentos", "Té"];
                const deShortTitles = ["Fertigung", "Landwirtschaft", "Lebensmittel", "Tee"];
                const jaShortTitles = ["製造業", "スマート農業", "食品・飲料", "茶葉"];
                const titleText = isAr ? arShortTitles[idx] || item.shortTitle : isJa ? jaShortTitles[idx] || item.shortTitle : isDe ? deShortTitles[idx] || item.shortTitle : isEs ? esShortTitles[idx] || item.shortTitle : item.shortTitle;
                return (
                  <button 
                    key={idx} 
                    onClick={() => setActiveIndex(idx)}
                    onMouseEnter={() => setActiveIndex(idx)}
                    className={`text-left text-3xl sm:text-4xl lg:text-[40px] font-black uppercase tracking-widest transition-all duration-300 border-l-4 pl-6 py-2
                      ${idx === activeIndex 
                        ? 'text-white border-[#E8B84B] translate-x-2' 
                        : 'text-slate-600 border-transparent hover:text-slate-400'}`}
                  >
                    {titleText}
                  </button>
                );
              })}
            </div>

            {/* Right Column: Content */}
            <div className="lg:w-2/3 border-l border-white/10 pl-8 lg:pl-16 py-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="flex items-center mb-4">
                    {(() => {
                      const Icon = priorityIndustries[activeIndex].icon;
                      return <Icon className="w-8 h-8 text-[#E8B84B] mr-4" />;
                    })()}
                    <h3 className="text-2xl sm:text-4xl font-bold text-white leading-tight">
                      {ind && ind.prioritySectors[activeIndex] 
                        ? ind.prioritySectors[activeIndex].title 
                        : priorityIndustries[activeIndex].title}
                    </h3>
                  </div>
                  <p className="text-[#2E5EAA] font-bold text-lg mb-6 tracking-wide">
                    {ind && ind.prioritySectors[activeIndex] 
                      ? ind.prioritySectors[activeIndex].tagline 
                      : priorityIndustries[activeIndex].subtitle}
                  </p>
                  <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-2xl">
                    {ind && ind.prioritySectors[activeIndex] 
                      ? ind.prioritySectors[activeIndex].description 
                      : priorityIndustries[activeIndex].desc}
                  </p>
                  
                  <p className="text-slate-500 font-bold text-xs uppercase tracking-widest mb-4">
                    {isAr ? "يمكن أن يشمل دعمنا ما يلي:" : isJa ? "当社のサポート内容：" : isDe ? "Unsere Unterstützung umfasst:" : isEs ? "Nuestro apoyo puede incluir:" : "Our support can include:"}
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6 mb-10 max-w-3xl">
                    {(ind && ind.prioritySectors[activeIndex]
                      ? ind.prioritySectors[activeIndex].supportIncludes
                      : priorityIndustries[activeIndex].points
                    ).map((pt, i) => (
                      <div key={i} className="flex items-start">
                        <CheckCircle2 className="w-5 h-5 text-[#E8B84B] mr-3 shrink-0" />
                        <span className="text-slate-300 font-medium">{pt}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Link href="#" className="inline-flex items-center px-8 py-4 bg-[#E8B84B] hover:bg-[#d4a643] text-[#0B1220] font-bold rounded-lg transition-colors text-sm shadow-lg shadow-[#E8B84B]/20">
                    {ind && ind.prioritySectors[activeIndex] 
                      ? ind.prioritySectors[activeIndex].button 
                      : priorityIndustries[activeIndex].buttonText} <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </motion.div>
              </AnimatePresence>
            </div>
            
          </div>
        </section>

        {/* 4. Additional Industries (Premium Accordion Layout) */}
        <section className="pt-24 pb-12 border-t border-slate-200 dark:border-slate-800/50 bg-transparent relative overflow-hidden">
          {/* Subtle background ambient light */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#2E5EAA]/5 blur-[120px] rounded-full pointer-events-none -z-10" />
          
          <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8 lg:mb-12">
              <h2 className="text-[#C59B27] dark:text-[#E8B84B] font-bold tracking-widest uppercase text-sm mb-4">
                {ind ? ind.additionalIndustries.heading : "Additional Industries"}
              </h2>
              <h3 className="text-3xl md:text-4xl font-bold text-[#17135B] dark:text-white mb-6">
                {isAr ? "دعم تشغيلي شامل" : isJa ? "広範な運用サポート" : isDe ? "Umfassende betriebliche Unterstützung" : isEs ? "Amplio apoyo operativo" : "Broad Operational Support"}
              </h3>
              <p className="text-slate-500 dark:text-slate-400 text-[15px] max-w-2xl mx-auto leading-relaxed">
                {isAr ? "إلى جانب قطاعاتنا الأساسية، تقدم سانوتا هندسة متخصصة للغاية وتكاملاً رقمياً لمجموعة متنوعة من البيئات التشغيلية كثيفة المتطلبات." : isJa ? "中核となる分野以外にも、サノタは要求の厳しい多様な運用環境に対して高度に専門化されたエンジニアリングとデジタル統合を提供します。" : isDe ? "Über unsere Kernbereiche hinaus bietet Sanota hochspezialisierte Ingenieurleistungen und digitale Integration für eine Vielzahl anspruchsvoller Betriebsumgebungen." : isEs ? "Más allá de nuestros sectores principales, Sanota proporciona ingeniería altamente especializada e integración digital para una variedad de entornos operativos exigentes." : "Beyond our core sectors, Sanota provides highly specialized engineering and digital integration for a variety of demanding operational environments."}
              </p>
            </div>

            <div className="flex flex-col space-y-2">
              {additionalIndustries.map((item, idx) => {
                const isActive = activeAdditional === idx;
                const localizedItem = ind && ind.additionalIndustries.sectors[idx] ? ind.additionalIndustries.sectors[idx] : null;
                const title = localizedItem ? localizedItem.title : item.title;
                const subtitle = (localizedItem && 'subtitle' in localizedItem && localizedItem.subtitle) ? (localizedItem as any).subtitle : item.subtitle;
                const desc = localizedItem ? localizedItem.desc : item.desc;
                const buttonText = localizedItem ? localizedItem.linkText : item.button;
                
                return (
                  <div 
                    key={idx} 
                    className={`border-b border-slate-200 dark:border-slate-800/60 transition-colors duration-500 ${isActive ? 'border-[#C59B27]/30 dark:border-[#E8B84B]/30' : 'hover:border-slate-300 dark:hover:border-slate-600'}`}
                  >
                    <button
                      onClick={() => setActiveAdditional(isActive ? null : idx)}
                      className="w-full py-6 flex items-center justify-between text-left group focus:outline-none"
                    >
                      <div className="flex items-center space-x-6">
                        <motion.div 
                          className="w-12 h-12 rounded-full flex items-center justify-center bg-slate-100 dark:bg-slate-800/30 group-hover:bg-slate-200 dark:group-hover:bg-slate-800/60"
                          animate={{ 
                            borderColor: ['rgba(76,132,224,0.5)', 'rgba(232,184,75,0.5)', 'rgba(168,85,247,0.5)', 'rgba(16,185,129,0.5)', 'rgba(76,132,224,0.5)'],
                            boxShadow: ['0 0 15px rgba(76,132,224,0.3)', '0 0 15px rgba(232,184,75,0.3)', '0 0 15px rgba(168,85,247,0.3)', '0 0 15px rgba(16,185,129,0.3)', '0 0 15px rgba(76,132,224,0.3)'],
                            color: ['#4C84E0', '#E8B84B', '#A855F7', '#10B981', '#4C84E0']
                          }}
                          transition={{ duration: 4, delay: idx * 0.5, repeat: Infinity, ease: "linear" }}
                          style={{ borderStyle: 'solid', borderWidth: '1px' }}
                        >
                          <item.icon className="w-5 h-5" />
                        </motion.div>
                        <h4 className={`text-xl sm:text-2xl font-bold transition-colors duration-500 ${isActive ? 'text-[#17135B] dark:text-white' : 'text-slate-500 dark:text-slate-300 group-hover:text-[#17135B] dark:group-hover:text-white'}`}>
                          {title}
                        </h4>
                      </div>
                      <div className={`shrink-0 ml-4 transition-transform duration-500 ${isActive ? 'rotate-180' : ''}`}>
                        <svg className={`w-6 h-6 ${isActive ? 'text-[#E8B84B]' : 'text-slate-500 group-hover:text-white'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </button>
                    
                    <AnimatePresence>
                      {isActive && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.4, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <div className="pl-24 pr-4 pb-8 pt-2">
                            <p className="text-[#2E5EAA] font-bold text-sm mb-4 uppercase tracking-wide">{subtitle}</p>
                            <p className="text-slate-500 dark:text-slate-400 text-[15px] leading-relaxed mb-6 max-w-3xl">
                              {desc}
                            </p>
                            <Link 
                              href="#" 
                              className="inline-flex items-center text-[13px] font-bold uppercase tracking-widest text-[#E8B84B] hover:text-white transition-colors group/link"
                            >
                              {buttonText} <ArrowRight className="ml-2 w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                            </Link>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
            
          </div>
        </section>

        {/* 5. How Sanota Helps Industries */}
        <section className="pt-12 pb-24 border-t border-slate-200 dark:border-slate-800/50 bg-transparent">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8 lg:mb-12 max-w-3xl mx-auto">
              <h2 className="text-[#C59B27] dark:text-[#E8B84B] font-bold tracking-widest uppercase text-sm mb-4">
                {ind ? ind.lifecycle.heading : "How Sanota Helps Industries"}
              </h2>
              <h3 className="text-3xl md:text-4xl font-bold text-[#17135B] dark:text-white mb-6">
                {ind ? ind.lifecycle.subheading : "Support Across the Complete Engineering Journey"}
              </h3>
              <p className="text-slate-500 dark:text-slate-400 text-lg leading-relaxed">
                {isAr ? "لا يقتصر دعم سانوتا على توريد آلة أو تقنية فردية، بل نساعدك عبر دورة حياة الحل الهندسية الكاملة وفقاً لمتطلباتك." : isJa ? "サノタのサポートは、単一の機械や個別の技術の提供にとどまりません。要件に応じて、ソリューションのライフサイクル全体を通じて支援します。" : isDe ? "Die Unterstützung durch Sanota beschränkt sich nicht auf die Lieferung einer Maschine oder einzelner Technologien. Je nach Anforderung unterstützen wir über den gesamten Lebenszyklus der Lösung." : isEs ? "El soporte de Sanota no se limita al suministro de una máquina o tecnología individual. Según los requisitos, ayudamos a lo largo de todo el ciclo de vida de la solución." : "Sanota’s support is not limited to supplying a machine or individual technology. Depending on the requirement, we can assist across the complete solution lifecycle."}
              </p>
            </div>

            <div className="relative mt-24 mb-10 lg:mb-12">
              {/* Connecting Background Circuit Lines (Desktop) */}
              <div className="hidden lg:block absolute top-[40px] left-[12%] right-[12%] h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent z-0 overflow-hidden">
                {/* Moving light on the top line */}
                <motion.div 
                  className="absolute top-0 bottom-0 w-[200px] bg-gradient-to-r from-transparent via-[#E8B84B] to-transparent opacity-80"
                  animate={{ left: ["-20%", "120%"] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                />
              </div>
              <div className="hidden lg:block absolute top-[calc(50%+40px)] left-[12%] right-[12%] h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent z-0 overflow-hidden">
                {/* Moving light on the bottom line */}
                <motion.div 
                  className="absolute top-0 bottom-0 w-[200px] bg-gradient-to-r from-transparent via-[#E8B84B] to-transparent opacity-80"
                  animate={{ left: ["-20%", "120%"] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "linear", delay: 3 }}
                />
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-20 relative z-10">
                {engineeringJourney.map((step, idx) => {
                  const localizedStep = ind && ind.lifecycle.steps[idx] ? ind.lifecycle.steps[idx] : null;
                  const stepTitle = localizedStep ? localizedStep.name : step.title;
                  const stepDesc = localizedStep ? localizedStep.desc : step.desc;

                  return (
                    <div key={idx} className="flex flex-col items-center text-center group relative">
                      
                      {/* Elegant Step Indicator */}
                      <div className="absolute -top-6 text-[11px] font-black tracking-[0.2em] text-[#2E5EAA] opacity-0 group-hover:opacity-100 group-hover:-translate-y-1 transition-all duration-500">
                        {isAr ? `المرحلة 0${idx + 1}` : isJa ? `フェーズ 0${idx + 1}` : isDe ? `PHASE 0${idx + 1}` : isEs ? `FASE 0${idx + 1}` : `PHASE 0${idx + 1}`}
                      </div>

                      {/* Diamond Node with Spinning Border Light */}
                      <div className="w-20 h-20 rounded-[18px] rotate-45 flex items-center justify-center mb-10 shadow-[0_10px_30px_rgba(0,0,0,0.5)] group-hover:shadow-[0_0_40px_rgba(232,184,75,0.2)] transition-all duration-500 relative cursor-pointer">
                        
                        {/* Outer container for the spinning border */}
                        <div className="absolute inset-0 rounded-[18px] overflow-hidden">
                          {/* Default static border */}
                          <div className="absolute inset-0 rounded-[18px] border border-slate-700/80 group-hover:border-transparent transition-colors duration-500 z-10" />
                          
                          {/* Spinning Light Element */}
                          <motion.div 
                            className="absolute inset-[-150%] bg-[conic-gradient(from_0deg,transparent_0%,transparent_75%,rgba(232,184,75,0.9)_100%)] opacity-30 group-hover:opacity-100 transition-opacity duration-500 z-0"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                          />
                        </div>

                        {/* Inner dark background */}
                        <div className="absolute inset-[1px] rounded-[17px] bg-[#F5F3EF] dark:bg-[#0B1220] group-hover:bg-[#ECE7DD] dark:group-hover:bg-[#131C2E] transition-colors duration-500 z-20 overflow-hidden">
                          {/* Subtle sweep gradient inside the diamond */}
                          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
                        </div>
                        
                        <div className="-rotate-45 relative z-30">
                          <step.icon className="w-8 h-8 text-[#E8B84B] group-hover:scale-110 transition-transform duration-500" />
                        </div>
                      </div>
                      
                      <h4 className="text-xl font-bold text-[#17135B] dark:text-white mb-3 group-hover:text-[#C59B27] dark:group-hover:text-[#E8B84B] transition-colors duration-300">
                        {stepTitle}
                      </h4>
                      <p className="text-slate-500 dark:text-slate-400 text-[14.5px] leading-relaxed max-w-[260px] group-hover:text-slate-700 dark:group-hover:text-slate-300 transition-colors duration-300">
                        {stepDesc}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="text-center">
              <Link href="/services" className="inline-flex items-center px-8 py-4 bg-[#E8B84B] hover:bg-[#d4a643] text-[#0B1220] font-bold rounded-lg transition-colors">
                {ind ? ind.lifecycle.button : "Explore Our Services"} <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* 6. Engineering and Digital Technology Together (Premium Image Overlay Design) */}
        <section className="py-8 lg:py-12 bg-[#F5F3EF]/80 dark:bg-[#050B14] relative overflow-hidden border-t border-slate-200 dark:border-slate-900">
          {/* Subtle background ambient light */}
          <div className="absolute top-1/2 right-0 w-1/3 h-[500px] bg-[#2E5EAA]/5 blur-[120px] rounded-full pointer-events-none -translate-y-1/2" />

          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            
            {/* Header Text */}
            <div className="mb-10 max-w-4xl">
               <h2 className="text-[#C59B27] dark:text-[#E8B84B] font-bold tracking-widest uppercase text-sm mb-3">
                 {isAr ? "الهندسة والتكامل الرقمي" : isJa ? "エンジニアリングとデジタル統合" : isDe ? "Engineering & Digitale Integration" : isEs ? "Integración digital y de ingeniería" : "Engineering & Digital Integration"}
               </h2>
               <h3 className="text-4xl md:text-5xl font-bold text-[#17135B] dark:text-white mb-4 leading-tight">
                 {isAr ? "أنظمة مادية متصلة بتقنيات ذكية" : isJa ? "インテリジェント技術と連携した物理システム" : isDe ? "Physische Systeme, vernetzt mit intelligenter Technologie" : isEs ? "Sistemas físicos conectados con tecnología inteligente" : "Physical Systems Connected with Intelligent Technology"}
               </h3>
               <p className="text-slate-500 dark:text-slate-400 text-lg leading-relaxed max-w-3xl">
                 {isAr ? "تتطلب الصناعات الحديثة بشكل متزايد أن تعمل الآلات والأتمتة والأنظمة الرقمية بتنسيق متكامل. تجمع سانوتا بين قدراتها الهندسية والخبرة البرمجية والرقمية لشركة Knoweb لتطوير أنظمة متكاملة بسلاسة." : isJa ? "現代の産業では、機械、自動化、デジタルシステムが協調して動作することがますます求められています。サノタはエンジニアリング機能とKnowebのソフトウェア・デジタル専門知識を組み合わせ、シームレスに統合されたシステムを開発します。" : isDe ? "Moderne Industrien erfordern zunehmend, dass Maschinen, Automatisierung und digitale Systeme koordiniert zusammenarbeiten. Sanota kombiniert seine Engineering-Kompetenz mit dem Software- und Digitalwissen von Knoweb, um nahtlos integrierte Systeme zu entwickeln." : isEs ? "Las industrias modernas requieren cada vez más que la maquinaria, la automatización y los sistemas digitales trabajen de forma coordinada. Sanota combina su experiencia en ingeniería con el conocimiento digital de Knoweb para desarrollar sistemas integrados y conectados." : "Modern industries increasingly require machinery, automation and digital systems to work together. Sanota combines its engineering capabilities with the software and digital expertise of Knoweb, enabling us to develop integrated systems seamlessly."}
               </p>
            </div>

            <div className="flex flex-col lg:flex-row items-center relative mt-8">
              
              {/* Left: The High-Tech Image */}
              <div className="w-full lg:w-5/12 h-[350px] lg:h-[500px] relative rounded-[30px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] z-0 group">
                <Image 
                  src="/ind_manufacturing_1788515164504.jpg" 
                  alt="Industrial Machinery and Digital Technology" 
                  fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" 
                  className="object-cover group-hover:scale-105 transition-transform duration-1000 ease-in-out"
                />
                {/* Tech overlay effects */}
                <div className="absolute inset-0 bg-[#2E5EAA]/20 mix-blend-overlay" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050B14] via-transparent to-[#050B14]/40" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#050B14]/80 via-transparent to-transparent" />
                
                {/* Floating animated data tag on the image */}
                <div className="absolute top-8 left-8 bg-[#0B1220]/80 backdrop-blur-md border border-[#E8B84B]/30 rounded-xl px-4 py-2 flex items-center shadow-lg">
                  <div className="w-2 h-2 rounded-full bg-[#E8B84B] animate-pulse mr-3" />
                  <span className="text-white text-xs font-bold tracking-widest uppercase">
                    {isAr ? "النظام متصل" : isJa ? "システム稼働中" : isDe ? "System online" : isEs ? "Sistema en línea" : "System Online"}
                  </span>
                </div>
              </div>

              {/* Right: The Overlapping Glass Card */}
              <div className="w-full lg:w-7/12 mt-8 lg:mt-0 lg:-ml-20 relative z-10">
                <div className="bg-white dark:bg-[#131C2E]/80 backdrop-blur-2xl border border-slate-200 dark:border-slate-700/80 rounded-[30px] p-8 lg:p-10 shadow-lg dark:shadow-[0_30px_60px_rgba(0,0,0,0.6)]">
                  
                  <p className="text-[#17135B] dark:text-white text-xl font-bold leading-relaxed mb-6">
                    {isAr ? (
                      <>يساعد هذا التكامل العملاء على الانتقال من الآلات المعزولة والسجلات اليدوية إلى <span className="text-[#C59B27] dark:text-[#E8B84B]">عمليات تشغيلية أكثر اتصالاً وشفافية.</span></>
                    ) : isJa ? (
                      <>この組み合わせにより、顧客は孤立した機械や手動記録から、より<span className="text-[#C59B27] dark:text-[#E8B84B]">接続され可視化された運用へと移行できます。</span></>
                    ) : isDe ? (
                      <>Diese Kombination hilft Kunden, von isolierten Maschinen und manuellen Aufzeichnungen zu <span className="text-[#C59B27] dark:text-[#E8B84B]">vernetzten und transparenten Abläufen überzugehen.</span></>
                    ) : isEs ? (
                      <>Esta combinación ayuda a los clientes a pasar de maquinaria aislada y registros manuales a <span className="text-[#C59B27] dark:text-[#E8B84B]">operaciones más conectadas y visibles.</span></>
                    ) : (
                      <>This combination helps customers move from isolated machinery and manual records toward more <span className="text-[#C59B27] dark:text-[#E8B84B]">connected and visible operations.</span></>
                    )}
                  </p>
                  
                  <div className="h-px w-full bg-gradient-to-r from-slate-200 dark:from-slate-700 to-transparent mb-6" />
                  
                  <p className="text-[#2E5EAA] font-bold uppercase tracking-widest text-xs mb-5">
                    {isAr ? "حلول متصلة تدمج ما يلي:" : isJa ? "以下を組み込んだコネクテッドソリューション：" : isDe ? "Vernetzte Lösungen, die Folgendes beinhalten:" : isEs ? "Soluciones conectadas que incorporan:" : "Connected Solutions Incorporating:"}
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6 mb-8">
                    {(isAr ? [
                      "الآلات الصناعية", "التحكم عبر PLC و HMI", "المستشعرات وأجهزة القياس", 
                      "اتصال إنترنت الأشياء (IoT)", "المنصات السحابية", "تطبيقات الويب والهواتف المحمولة", 
                      "لوحات التحكم التشغيلية", "التتبع والرؤية اللحظية", "التنبيهات وإصدار التقارير", 
                      "المراقبة والتحكم عن بُعد", "التكامل مع أنظمة المؤسسات"
                    ] : isJa ? [
                      "産業機械", "PLCおよびHMI制御", "センサーと計測機器", 
                      "IoT接続", "クラウドプラットフォーム", "Webおよびモバイルアプリ", 
                      "運用ダッシュボード", "追跡およびトレーサビリティ", "アラートとレポート", 
                      "遠隔監視・制御", "エンタープライズシステムとの統合"
                    ] : isDe ? [
                      "Industriemaschinen", "SPS- und HMI-Steuerung", "Sensoren und Instrumentierung", 
                      "IoT-Konnektivität", "Cloud-Plattformen", "Web- und mobile Anwendungen", 
                      "Betriebs-Dashboards", "Nachverfolgung und Rückverfolgbarkeit", "Warnungen und Berichte", 
                      "Fernüberwachung und -steuerung", "Integration mit Unternehmenssystemen"
                    ] : isEs ? [
                      "Maquinaria industrial", "Control por PLC y HMI", "Sensores e instrumentación", 
                      "Conectividad IoT", "Plataformas en la nube", "Aplicaciones web y móviles", 
                      "Paneles de control operativos", "Seguimiento y trazabilidad", "Alertas e informes", 
                      "Monitorización y control remotos", "Integración con sistemas empresariales"
                    ] : digitalTechList).map((tech, idx) => (
                      <div key={idx} className="flex items-center group cursor-default">
                        <div className="w-6 h-6 rounded-full bg-[#F5F3EF] dark:bg-[#0B1220] border border-slate-200 dark:border-slate-700 group-hover:border-[#C59B27]/60 dark:group-hover:border-[#E8B84B]/60 flex items-center justify-center shrink-0 mr-4 transition-colors duration-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#2E5EAA] group-hover:text-[#E8B84B] transition-colors duration-300" />
                        </div>
                        <span className="text-slate-600 dark:text-slate-300 text-[14.5px] font-medium group-hover:text-[#17135B] dark:group-hover:text-white transition-colors duration-300">{tech}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Link href="/services" className="inline-flex items-center px-8 py-4 bg-[#E8B84B] hover:bg-[#d4a643] text-[#0B1220] font-bold rounded-xl transition-all shadow-[0_10px_20px_rgba(232,184,75,0.2)] hover:shadow-[0_15px_30px_rgba(232,184,75,0.4)] hover:-translate-y-1">
                    {isAr ? "استكشف الأتمتة وإنترنت الأشياء" : isJa ? "自動化・IoTを探求する" : isDe ? "Automatisierung & IoT erkunden" : isEs ? "Explorar la automatización e IoT" : "Explore Automation & IoT"} <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>

                </div>
              </div>

            </div>
          </div>
        </section>
                  
        {/* 7 & 8. Lifecycle Support (Interactive Tabs) */}
        <section className="py-10 lg:py-14 border-t border-slate-200 dark:border-slate-800/50 bg-transparent">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-[#C59B27] dark:text-[#E8B84B] font-bold tracking-widest uppercase text-sm mb-4">
                {isAr ? "دعم دورة الحياة والعمليات" : isJa ? "ライフサイクルおよび運用サポート" : isDe ? "Lebenszyklus- & Betriebsunterstützung" : isEs ? "Soporte de ciclo de vida y operaciones" : "Lifecycle & Operations Support"}
              </h2>
              <h3 className="text-3xl md:text-4xl font-bold text-[#17135B] dark:text-white mb-6">
                {isAr ? "الحفاظ على الأنظمة الحيوية وتحسينها" : isJa ? "重要システムの維持と改善" : isDe ? "Erhalt und Optimierung kritischer Systeme" : isEs ? "Mantenimiento y mejora de sistemas críticos" : "Sustaining and Improving Critical Systems"}
              </h3>
              <p className="text-slate-500 dark:text-slate-400 text-lg max-w-2xl mx-auto">
                {isAr ? "إلى جانب تطوير الأنظمة الجديدة، تضمن سانوتا استمرار عمل أجهزتك وبنيتك التحتية الحالية بموثوقية وكفاءة تامة." : isJa ? "新しいシステム開発にとどまらず、サノタは既存の機械設備やインフラが信頼性と効率性を維持しながら稼働し続けることを保証します。" : isDe ? "Über die Entwicklung neuer Systeme hinaus stellt Sanota sicher, dass Ihre vorhandenen Maschinen und Ihre Infrastruktur weiterhin zuverlässig und effizient arbeiten." : isEs ? "Más allá del desarrollo de nuevos sistemas, Sanota garantiza que su maquinaria e infraestructura existentes continúen funcionando de manera confiable y eficiente." : "Beyond new system development, Sanota ensures your existing machinery and infrastructure continue to operate reliably and efficiently."}
              </p>
            </div>

            {/* Custom Tabs */}
            <div className="flex justify-center mb-12">
              <div className="bg-[#F5F3EF] dark:bg-[#131C2E]/80 backdrop-blur-md border border-slate-200 dark:border-slate-700/80 p-1.5 rounded-2xl inline-flex relative shadow-sm dark:shadow-[0_10px_30px_rgba(0,0,0,0.5)] min-w-[320px] sm:min-w-[400px]">
                <button
                  onClick={() => setActiveSupportTab('modernization')}
                  className={`relative z-10 w-1/2 py-3.5 rounded-xl font-bold transition-colors duration-300 flex items-center justify-center ${activeSupportTab === 'modernization' ? 'text-[#0B1220]' : 'text-slate-500 dark:text-slate-400 hover:text-[#17135B] dark:hover:text-white'}`}
                >
                  <RefreshCw className="w-4 h-4 mr-2 hidden sm:block" /> {isAr ? "التحديث" : isJa ? "近代化" : isDe ? "Modernisierung" : isEs ? "Modernización" : "Modernization"}
                </button>
                <button
                  onClick={() => setActiveSupportTab('amc')}
                  className={`relative z-10 w-1/2 py-3.5 rounded-xl font-bold transition-colors duration-300 flex items-center justify-center ${activeSupportTab === 'amc' ? 'text-[#0B1220]' : 'text-slate-500 dark:text-slate-400 hover:text-[#17135B] dark:hover:text-white'}`}
                >
                  <ShieldCheck className="w-4 h-4 mr-2 hidden sm:block" /> {isAr ? "عقود الصيانة والدعم" : isJa ? "AMC・サポート" : isDe ? "AMC & Support" : isEs ? "AMC y soporte" : "AMC & Support"}
                </button>
                
                {/* Active Tab Background indicator */}
                <div 
                  className="absolute top-1.5 bottom-1.5 left-0 w-[calc(50%-6px)] bg-[#E8B84B] rounded-xl transition-transform duration-500 ease-out z-0 shadow-[0_0_15px_rgba(232,184,75,0.4)]"
                  style={{ transform: activeSupportTab === 'modernization' ? 'translateX(6px)' : 'translateX(calc(100% + 6px))' }}
                />
              </div>
            </div>

            {/* Tab Content Panels */}
            <div className="relative min-h-[400px]">
              <AnimatePresence mode="wait">
                {activeSupportTab === 'modernization' && (
                  <motion.div
                    key="modernization"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.4 }}
                    className="bg-gradient-to-br from-white dark:from-[#131C2E]/90 to-[#FAF8F5] dark:to-[#0B1220]/90 backdrop-blur-xl border border-slate-200 dark:border-slate-700/60 rounded-[30px] p-8 sm:p-12 overflow-hidden relative shadow-lg dark:shadow-2xl"
                  >
                    <div className="absolute -top-32 -left-32 w-64 h-64 bg-[#C59B27]/5 dark:bg-[#E8B84B]/5 blur-[80px] rounded-full pointer-events-none" />
                    
                    <div className="flex flex-col lg:flex-row gap-12 relative z-10 items-center">
                      <div className="w-full lg:w-5/12 flex flex-col">
                        <RefreshCw className="w-12 h-12 text-[#C59B27] dark:text-[#E8B84B] mb-6 opacity-90" />
                        <h3 className="text-3xl font-bold text-[#17135B] dark:text-white mb-6 leading-tight">
                          {ind ? ind.modernizationBanner.subheading : "Improve Existing Operations Before Replacement"}
                        </h3>
                        <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
                          {ind ? ind.modernizationBanner.description : "Many organizations operate valuable machinery and systems that have become unreliable, inefficient or difficult to maintain. Sanota assesses whether existing assets can be modernized to extend life and reduce costs."}
                        </p>
                        <Link href="/contact" className="inline-flex items-center px-6 py-4 bg-[#17135B] dark:bg-white/5 hover:bg-[#0f0d45] dark:hover:bg-white/10 border border-[#17135B] dark:border-slate-600 text-white font-bold rounded-xl transition-colors mt-auto self-start">
                          {ind ? ind.modernizationBanner.button : "Request Assessment"} <ArrowRight className="ml-2 w-4 h-4" />
                        </Link>
                      </div>
                      
                      <div className="w-full lg:w-7/12 lg:border-l border-slate-200 dark:border-slate-700/50 lg:pl-12">
                        <p className="text-[#C59B27] dark:text-[#E8B84B] font-bold uppercase tracking-widest text-xs mb-6">
                          {isAr ? "تشمل أساليب التحديث ما يلي:" : isJa ? "近代化のアプローチ内容：" : isDe ? "Modernisierungsansätze umfassen:" : isEs ? "Los enfoques de modernización incluyen:" : "Modernization approaches include:"}
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-5 gap-x-6 mb-8">
                          {(isAr ? [
                            "الترميم والتجديد الميكانيكي",
                            "الإصلاحات الكهربائية وإعادة التوصيل",
                            "استبدال وحدات التحكم القديمة",
                            "ترقية المستشعرات وأجهزة القياس",
                            "تكامل وحدات PLC و HMI",
                            "تحسينات الأتمتة وضبط العمليات",
                            "ترقية أنظمة ومعايير السلامة",
                            "تكامل البرمجيات والمراقبة",
                            "تحسين كفاءة الطاقة والأداء",
                            "تدريب المشغلين وفرق الصيانة"
                          ] : isJa ? [
                            "機械的オーバーホール",
                            "電気系統の修理と再配線",
                            "コントローラーの交換",
                            "センサーおよび計装のアップグレード",
                            "PLCおよびHMIの統合",
                            "自動化の改善",
                            "安全性のアップグレード",
                            "ソフトウェアおよび監視の統合",
                            "エネルギーとパフォーマンスの最適化",
                            "オペレーターおよびメンテナンスのトレーニング"
                          ] : isDe ? [
                            "Mechanische Überholung",
                            "Elektrische Reparaturen und Neuverkabelung",
                            "Austausch von Steuerungen",
                            "Upgrades für Sensoren und Instrumentierung",
                            "SPS- und HMI-Integration",
                            "Automatisierungsverbesserungen",
                            "Sicherheits-Upgrades",
                            "Software- und Monitoring-Integration",
                            "Energie- und Leistungsoptimierung",
                            "Bediener- und Wartungsschulung"
                          ] : isEs ? [
                            "Restauración mecánica",
                            "Reparaciones eléctricas y recableado",
                            "Sustitución de controladores",
                            "Actualizaciones de sensores e instrumentación",
                            "Integración de PLC y HMI",
                            "Mejoras de automatización",
                            "Actualizaciones de sistemas de seguridad",
                            "Integración de software y monitorización",
                            "Optimización energética y de rendimiento",
                            "Capacitación de operadores y mantenimiento"
                          ] : modernizationImprovements).map((item, idx) => (
                            <div key={idx} className="flex items-start group">
                              <CheckCircle2 className="w-4 h-4 text-[#2E5EAA] group-hover:text-[#E8B84B] mr-3 mt-0.5 shrink-0 transition-colors" />
                              <span className="text-slate-600 dark:text-slate-300 text-[14.5px] leading-snug group-hover:text-[#17135B] dark:group-hover:text-white transition-colors">{item}</span>
                            </div>
                          ))}
                        </div>
                        <div className="bg-slate-50 dark:bg-[#0B1220]/50 border border-slate-200 dark:border-slate-800 rounded-xl p-5 mt-auto">
                          <p className="text-slate-500 dark:text-slate-400 text-[13px] leading-relaxed italic">
                            {isAr ? "يمكن لهذا النهج إطالة عمر المعدات، وتعزيز الموثوقية، وتقليل التكاليف والاضطرابات الناجمة عن الاستبدال الكامل." : isJa ? "このアプローチにより、機器の寿命を延ばし、信頼性を高め、完全な交換に伴うコストや業務の中断を軽減できます。" : isDe ? "Dieser Ansatz kann die Lebensdauer der Ausrüstung verlängern, die Zuverlässigkeit verbessern und die Kosten sowie Betriebsunterbrechungen eines kompletten Austauschs reduzieren." : isEs ? "Este enfoque puede extender la vida útil de los equipos, mejorar la confiabilidad y reducir el costo e interrupción de un reemplazo total." : "This approach can extend equipment life, improve reliability and reduce the cost and disruption of complete replacement."}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {activeSupportTab === 'amc' && (
                  <motion.div
                    key="amc"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.4 }}
                    className="bg-gradient-to-br from-white dark:from-[#131C2E]/90 to-[#FAF8F5] dark:to-[#0B1220]/90 backdrop-blur-xl border border-slate-200 dark:border-slate-700/60 rounded-[30px] p-8 sm:p-12 overflow-hidden relative shadow-lg dark:shadow-2xl"
                  >
                    <div className="absolute -bottom-32 -right-32 w-64 h-64 bg-[#2E5EAA]/10 blur-[80px] rounded-full pointer-events-none" />
                    
                    <div className="flex flex-col lg:flex-row gap-12 relative z-10 items-center">
                      <div className="w-full lg:w-5/12 flex flex-col">
                        <ShieldCheck className="w-12 h-12 text-[#C59B27] dark:text-[#E8B84B] mb-6 opacity-90" />
                        <h3 className="text-3xl font-bold text-[#17135B] dark:text-white mb-6 leading-tight">
                          {isAr ? "الحفاظ على تشغيل الأنظمة الحيوية بموثوقية" : isJa ? "重要システムの信頼性の高い稼働を維持" : isDe ? "Kritische Systeme zuverlässig in Betrieb halten" : isEs ? "Mantenga los sistemas críticos funcionando de manera confiable" : "Keep Critical Systems Operating Reliably"}
                        </h3>
                        <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
                          {isAr ? "توفر سانوتا عقود صيانة سنوية (AMC) ودعماً فنياً للأنظمة المبنية من قبلها، بالإضافة إلى دعم المعدات المؤهلة لأطراف ثالثة بعد التقييم الفني." : isJa ? "サノタは、当社が構築したシステムに対して年間保守契約（AMC）および技術サポートを提供します。また、事前の技術評価を経て、対象となるサードパーティ製機器もサポートします。" : isDe ? "Sanota bietet jährliche Wartungsverträge (AMC) und technischen Support für Sanota-Systeme. Nach einer technischen Zustandsbewertung unterstützen wir auch geeignete Drittsysteme." : isEs ? "Sanota proporciona contratos de mantenimiento anual y soporte técnico para sistemas construidos por Sanota. También admitimos equipos de terceros elegibles tras una evaluación técnica inicial." : "Sanota provides Annual Maintenance Contracts and technical support for Sanota-built systems. We also support eligible third-party equipment following an initial technical and condition assessment."}
                        </p>
                        <Link href="/contact" className="inline-flex items-center px-6 py-4 bg-[#E8B84B] hover:bg-[#d4a643] text-[#0B1220] font-bold rounded-xl transition-colors mt-auto self-start shadow-[0_5px_20px_rgba(232,184,75,0.2)]">
                          {isAr ? "طلب تفاصيل عقود الصيانة (AMC)" : isJa ? "AMC情報をリクエストする" : isDe ? "AMC-Informationen anfordern" : isEs ? "Solicitar información de AMC" : "Request AMC Info"} <ArrowRight className="ml-2 w-4 h-4" />
                        </Link>
                      </div>
                      
                      <div className="w-full lg:w-7/12 lg:border-l border-slate-200 dark:border-slate-700/50 lg:pl-12">
                        <p className="text-[#C59B27] dark:text-[#E8B84B] font-bold uppercase tracking-widest text-xs mb-6">
                          {isAr ? "تغطي برامج عقود الصيانة السنوية:" : isJa ? "AMCプログラムの対象範囲：" : isDe ? "AMC-Programme können abdecken:" : isEs ? "Los programas de AMC pueden cubrir:" : "AMC programmes may cover:"}
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-5 gap-x-6 mb-8">
                          {(isAr ? [
                            "الآلات ومعدات المعالجة والإنتاج",
                            "اللوحات الكهربائية وأنظمة التحكم",
                            "وحدات PLC و HMI والمحركات الصناعية",
                            "المستشعرات وأجهزة القياس الدقيقة",
                            "السيور وأنظمة مناولة المواد",
                            "أنظمة التحكم الزراعي والبيئي",
                            "أجهزة إنترنت الأشياء ومنصات المراقبة",
                            "البرمجيات ولوحات المعلومات التشغيلية",
                            "أنظمة الإنتاج والتصنيع المتكاملة"
                          ] : isJa ? [
                            "機械および加工機器",
                            "電気パネルおよび制御システム",
                            "PLC、HMI、産業用ドライブ",
                            "センサーおよび計装機器",
                            "コンベアおよびマテリアルハンドリングシステム",
                            "農業および環境制御",
                            "IoTデバイスおよび監視プラットフォーム",
                            "ソフトウェアおよび運用ダッシュボード",
                            "統合生産・加工システム"
                          ] : isDe ? [
                            "Maschinen und Verarbeitungsanlagen",
                            "Schaltschränke und Steuerungssysteme",
                            "SPS, HMIs und Industrieantriebe",
                            "Sensoren und Instrumentierung",
                            "Fördertechnik und Materialtransportsysteme",
                            "Agrar- und Umweltsteuerungen",
                            "IoT-Geräte und Überwachungsplattformen",
                            "Software und Betriebs-Dashboards",
                            "Integrierte Produktions- und Verarbeitungssysteme"
                          ] : isEs ? [
                            "Maquinaria y equipos de procesamiento",
                            "Cuadros eléctricos y sistemas de control",
                            "PLCs, HMIs y variadores industriales",
                            "Sensores e instrumentación",
                            "Transportadores y sistemas de manipulación de materiales",
                            "Controles agrícolas y ambientales",
                            "Dispositivos IoT y plataformas de monitoreo",
                            "Software y paneles operativos",
                            "Sistemas integrados de producción y procesamiento"
                          ] : amcCoverage).map((item, idx) => (
                            <div key={idx} className="flex items-start group">
                              <div className="w-1.5 h-1.5 rounded-full bg-[#2E5EAA] group-hover:bg-[#E8B84B] mr-3 mt-2 shrink-0 transition-colors" />
                              <span className="text-slate-600 dark:text-slate-300 text-[14.5px] leading-snug group-hover:text-[#17135B] dark:group-hover:text-white transition-colors">{item}</span>
                            </div>
                          ))}
                        </div>
                        <div className="bg-slate-50 dark:bg-[#0B1220]/50 border border-slate-200 dark:border-slate-800 rounded-xl p-5 mt-auto">
                          <p className="text-slate-500 dark:text-slate-400 text-[13px] leading-relaxed italic">
                            {isAr ? "يتم صياغة كل عقد صيانة سنوي (AMC) وفقاً لطبيعة المعدات، وبيئة التشغيل، ومدى الحيوية، ومتطلبات الدعم الخاصة بالعميل." : isJa ? "各AMC契約は、顧客の機器、動作環境、重要度、およびサポート要件に合わせて個別に策定されます。" : isDe ? "Jeder AMC-Vertrag wird individuell auf Ausrüstung, Betriebsumgebung, Kritikalität und Supportanforderungen des Kunden abgestimmt." : isEs ? "Cada AMC se desarrolla según el equipo, el entorno operativo, la criticidad y los requisitos de soporte del cliente." : "Each AMC is developed according to the equipment, operating environment, criticality and support requirements of the customer."}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </section>

        {/* 9. A Partner for Established and Emerging Industries (Creative Animated Design) */}
        <section className="py-12 lg:py-16 relative overflow-hidden bg-[#F5F3EF]/60 dark:bg-[#050B14] border-t border-slate-200 dark:border-slate-800/50">
          <div className="absolute inset-0 z-0 bg-[#F5F3EF]/60 dark:bg-[#050B14] overflow-hidden">
            <motion.div 
              className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-[#2E5EAA] rounded-full"
              style={{ filter: 'blur(80px)' }}
              animate={{ 
                x: [0, 200, 0],
                y: [0, 100, 0],
                scale: [1, 1.2, 1],
                opacity: [0.15, 0.35, 0.15]
              }}
              transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            />
            
            <motion.div 
              className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-[#E8B84B] rounded-full"
              style={{ filter: 'blur(80px)' }}
              animate={{ 
                x: [0, -200, 0],
                y: [0, -100, 0],
                scale: [1, 1.3, 1],
                opacity: [0.15, 0.35, 0.15]
              }}
              transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            />

            <motion.div 
              className="absolute top-[30%] left-[40%] w-[400px] h-[400px] bg-[#1E3A8A] rounded-full"
              style={{ filter: 'blur(70px)' }}
              animate={{ 
                x: [-100, 100, -100],
                y: [-50, 50, -50],
                opacity: [0.15, 0.35, 0.15]
              }}
              transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            />
            
            <Image 
              src="/ind_tea_1788515252795.jpg" 
              alt="Industry Partnership Environment" 
              fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" 
              className="object-cover opacity-5 dark:opacity-10 pointer-events-none mix-blend-overlay"
            />
          </div>

          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-4xl mx-auto mb-8">
              <h2 className="text-[#C59B27] dark:text-[#E8B84B] font-bold tracking-widest uppercase text-sm mb-3">
                {isAr ? "الابتكار التعاوني" : isJa ? "協創によるイノベーション" : isDe ? "Kollaborative Innovation" : isEs ? "Innovación colaborativa" : "Collaborative Innovation"}
              </h2>
              <h3 className="text-3xl md:text-4xl font-bold text-[#17135B] dark:text-white mb-6 leading-tight">
                {isAr ? "شريك للصناعات الراسخة والناشئة" : isJa ? "既存産業と新興産業のパートナー" : isDe ? "Ein Partner für etablierte und aufstrebende Branchen" : isEs ? "Un socio para industrias establecidas y emergentes" : "A Partner for Established and Emerging Industries"}
              </h3>
              <div className="bg-white/80 dark:bg-[#131C2E]/40 backdrop-blur-xl border border-slate-200 dark:border-slate-700/50 rounded-2xl p-6 shadow-sm dark:shadow-[0_20px_40px_rgba(0,0,0,0.4)] inline-block relative overflow-hidden">
                <div className="absolute top-0 left-[-100%] w-1/2 h-full bg-gradient-to-r from-transparent via-[#C59B27]/10 dark:via-white/5 to-transparent skew-x-12 animate-[runRight_8s_linear_infinite]" />
                
                <p className="text-slate-600 dark:text-slate-300 text-base md:text-lg leading-relaxed max-w-3xl relative z-10">
                  {isAr ? "سواء كان المتطلب يتضمن نظاماً جديداً بالكامل، أو آلة فردية، أو ترقية للأتمتة، أو منصة رقمية، أو دعماً فنياً مستمراً، فإن شركة سانوتا يمكنها المساعدة في تطوير مسار مناسب للمضي قدماً." : isJa ? "完全な新システム、単体の機械、自動化のアップグレード、デジタルプラットフォーム、あるいは継続的な技術サポートなど、どのような要件であっても、サノタは最適な前進の道を切り拓くお手伝いをします。" : isDe ? "Ob es sich um ein komplett neues System, eine einzelne Maschine, ein Automatisierungs-Upgrade, eine digitale Plattform oder kontinuierlichen technischen Support handelt – Sanota hilft Ihnen, den passenden Weg nach vorn zu entwickeln." : isEs ? "Ya sea que el requisito implique un sistema completamente nuevo, una máquina individual, una actualización de automatización, una plataforma digital o soporte técnico continuo, Sanota puede ayudar a desarrollar el camino más adecuado." : "Whether the requirement involves a complete new system, an individual machine, an automation upgrade, a digital platform or ongoing technical support, Sanota can help develop an appropriate path forward."}
                </p>
              </div>
            </div>

            <p className="text-center text-slate-500 dark:text-slate-500 font-bold uppercase tracking-widest text-xs mb-6">
              {isAr ? "نحن نعمل مع منظمات في جميع المراحل:" : isJa ? "私たちはあらゆるステージの組織と協働します：" : isDe ? "Wir arbeiten mit Organisationen in allen Phasen:" : isEs ? "Trabajamos con organizaciones en todas las etapas:" : "We work with organizations across all stages:"}
            </p>

            {/* Floating Badges Grid */}
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 max-w-5xl mx-auto">
              {(isAr ? [
                "الشركات الصناعية الراسخة",
                "المؤسسات الصغيرة والمتوسطة",
                "الشركات المصنعة الموجهة للتصدير",
                "المشاريع الزراعية",
                "مزارع الشاي ومصانع الشاي",
                "معالجات الأغذية",
                "المنظمات الحكومية ومنظمات القطاع العام",
                "الجامعات ومؤسسات البحث",
                "المخترعون والشركات الناشئة",
                "شركاء دوليون في مجال التكنولوجيا والأعمال"
              ] : isJa ? [
                "確立された産業企業",
                "中小企業（SME）",
                "輸出志向の製造業者",
                "農業事業者",
                "茶園および製茶工場",
                "食品加工業者",
                "政府および公的機関",
                "大学および研究機関",
                "発明家およびスタートアップ",
                "国際的な技術・ビジネスパートナー"
              ] : isDe ? [
                "Etablierte Industrieunternehmen",
                "Kleine und mittlere Unternehmen",
                "Exportorientierte Hersteller",
                "Landwirtschaftliche Betriebe",
                "Teeplantagen und -fabriken",
                "Lebensmittelverarbeiter",
                "Regierungs- und öffentlich-rechtliche Organisationen",
                "Universitäten und Forschungseinrichtungen",
                "Erfinder und Start-ups",
                "Internationale Technologie- und Geschäftspartner"
              ] : isEs ? [
                "Empresas industriales consolidadas",
                "Pequeñas y medianas empresas",
                "Fabricantes orientados a la exportación",
                "Empresas agrícolas",
                "Plantaciones y fábricas de té",
                "Procesadores de alimentos",
                "Organizaciones gubernamentales y del sector público",
                "Universidades e instituciones de investigación",
                "Inventores y empresas emergentes",
                "Socios tecnológicos y comerciales internacionales"
              ] : partnerTypes).map((partner, idx) => (
                <motion.div 
                  key={idx} 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: idx * 0.05, duration: 0.6, type: "spring", stiffness: 100 }}
                  whileHover={{ y: -5, scale: 1.05 }}
                  className="bg-white/80 dark:bg-[#131C2E]/60 backdrop-blur-xl border border-slate-200 dark:border-slate-700/50 hover:border-[#C59B27]/50 dark:hover:border-[#E8B84B]/50 hover:bg-white dark:hover:bg-[#131C2E] px-6 py-4 rounded-full shadow-sm dark:shadow-[0_10px_20px_rgba(0,0,0,0.3)] hover:shadow-md dark:hover:shadow-[0_15px_30px_rgba(232,184,75,0.15)] transition-all cursor-default flex items-center group"
                >
                  <div className="relative mr-3 flex items-center justify-center w-2 h-2 shrink-0">
                    <motion.div 
                      className="absolute inset-0 rounded-full bg-[#C59B27] dark:bg-[#E8B84B]"
                      animate={{ 
                        boxShadow: ['0 0 0px rgba(232,184,75,0)', '0 0 12px rgba(232,184,75,0.9)', '0 0 0px rgba(232,184,75,0)'],
                        opacity: [0.3, 1, 0.3]
                      }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: idx * 0.15 }}
                    />
                    <div className="relative w-full h-full rounded-full bg-[#C59B27] dark:bg-[#E8B84B] group-hover:bg-[#17135B] dark:group-hover:bg-white transition-colors" />
                  </div>
                  <span className="text-slate-600 dark:text-slate-300 group-hover:text-[#17135B] dark:group-hover:text-white font-medium text-sm sm:text-[15px] transition-colors">{partner}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Technical FAQ & Solutions Architecture Section (GEO & Intent Optimization) */}
        <section id="faq" className="py-16 bg-white/40 dark:bg-[#0B1220]/40 border-t border-slate-200 dark:border-slate-800/60">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 dark:bg-[#E8B84B]/10 border border-amber-500/30 dark:border-[#E8B84B]/30 mb-4">
                <HelpCircle className="w-4 h-4 text-[#C59B27] dark:text-[#E8B84B]" />
                <span className="text-xs font-bold uppercase tracking-widest text-[#9A7210] dark:text-[#E8B84B]">
                  {(industriesFaqData[language] || industriesFaqData.en).badge}
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#17135B] dark:text-white tracking-tight mb-4">
                {(industriesFaqData[language] || industriesFaqData.en).heading}
              </h2>
              <p className="text-[#555E75] dark:text-slate-300 text-base max-w-2xl mx-auto">
                {(industriesFaqData[language] || industriesFaqData.en).description}
              </p>
            </div>

            <div className="space-y-4 max-w-4xl mx-auto">
              {(industriesFaqData[language] || industriesFaqData.en).items.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div
                    key={idx}
                    className="border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden bg-white dark:bg-[#131C2E]/80 backdrop-blur-md transition-all shadow-sm hover:shadow-md"
                  >
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                      className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 font-bold text-lg text-[#17135B] dark:text-white"
                      aria-expanded={isOpen}
                    >
                      <span className="flex items-center gap-3">
                        <span className="w-7 h-7 rounded-full bg-amber-500/10 text-[#C59B27] dark:text-[#E8B84B] flex items-center justify-center text-xs font-black shrink-0">
                          0{idx + 1}
                        </span>
                        {faq.q}
                      </span>
                      <ChevronDown
                        className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180 text-[#C59B27] dark:text-[#E8B84B]" : ""}`}
                      />
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25 }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-6 pt-1 text-slate-600 dark:text-slate-300 text-base leading-relaxed border-t border-slate-100 dark:border-slate-800/50">
                            <p className="mb-3">{faq.a}</p>
                            <Link
                              href={faq.link}
                              className="inline-flex items-center text-sm font-bold text-[#C59B27] dark:text-[#E8B84B] hover:underline"
                            >
                              <CheckCircle2 className="w-4 h-4 mr-1.5" />
                              {faq.linkText} &rarr;
                            </Link>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 10. Call to Action (Sleek Edge-to-Edge Animated Design) */}
        <section className="py-8 lg:py-12 relative overflow-hidden bg-slate-100 dark:bg-[#02050A] border-t border-slate-200 dark:border-slate-900">
          
          {/* Animated Scanning Laser Lines */}
          <div className="absolute inset-0 z-0 opacity-40 dark:opacity-60 pointer-events-none">
            <motion.div 
              className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#C59B27] dark:via-[#E8B84B] to-transparent shadow-[0_0_15px_rgba(232,184,75,0.8)]"
              animate={{ top: ['0%', '100%', '0%'] }}
              transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            />
            <motion.div 
              className="absolute top-0 bottom-0 left-1/3 w-[2px] bg-gradient-to-b from-transparent via-[#2E5EAA] to-transparent shadow-[0_0_15px_rgba(46,94,170,0.8)]"
              animate={{ left: ['0%', '100%', '0%'] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
          </div>

          {/* Massive Scrolling Background Text */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] overflow-hidden z-0 pointer-events-none opacity-10 dark:opacity-20 flex mix-blend-screen">
            <motion.h2 
              className="text-[12vw] font-black text-transparent whitespace-nowrap"
              style={{ WebkitTextStroke: '2px #C59B27' }}
              animate={{ x: [0, -1000] }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            >
              {isAr ? "بادر • ابتكر • حدّث • بادر • ابتكر • حدّث" : isJa ? "行動 • 革新 • 近代化 • 行動 • 革新 • 近代化" : isDe ? "HANDELN • INNOVATION • MODERNISIERUNG • HANDELN • INNOVATION • MODERNISIERUNG" : isEs ? "ACTÚE • INNOVE • MODERNISE • ACTÚE • INNOVE • MODERNISE" : "TAKE ACTION • INNOVATE • MODERNIZE • TAKE ACTION • INNOVATE • MODERNIZE"}
            </motion.h2>
          </div>

          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h3 className="text-5xl md:text-7xl font-black text-[#17135B] dark:text-white mb-6 leading-tight tracking-tight">
                {isAr ? (
                  <>
                    ما الذي يحتاجه قطاعك <br className="hidden md:block"/> إلى <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C59B27] dark:from-[#E8B84B] to-[#F1D08A]">تحسينه وتطويره؟</span>
                  </>
                ) : isJa ? (
                  <>
                    貴社の業界で何を <br className="hidden md:block"/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C59B27] dark:from-[#E8B84B] to-[#F1D08A]">改善する必要がありますか？</span>
                  </>
                ) : isDe ? (
                  <>
                    Was muss Ihre Branche <br className="hidden md:block"/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C59B27] dark:from-[#E8B84B] to-[#F1D08A]">verbessern?</span>
                  </>
                ) : isEs ? (
                  <>
                    ¿Qué necesita mejorar <br className="hidden md:block"/> su <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C59B27] dark:from-[#E8B84B] to-[#F1D08A]">sector?</span>
                  </>
                ) : (
                  <>
                    What Does Your Industry <br className="hidden md:block"/> Need to <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C59B27] dark:from-[#E8B84B] to-[#F1D08A]">Improve?</span>
                  </>
                )}
              </h3>
              
              <p className="text-slate-600 dark:text-slate-400 text-lg md:text-xl mb-12 leading-relaxed max-w-3xl mx-auto font-light">
                {ind ? ind.cta.description : "Whether it's a production challenge, an inefficient process, an outdated machine, or a new product idea—tell us what you need to achieve. We'll connect you with the appropriate engineering and technology capabilities."}
              </p>

              <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-8 lg:mb-12">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto">
                  <Link href="/tell-us-your-challenge" className="relative group w-full sm:w-auto px-8 py-5 bg-[#E8B84B] hover:bg-[#d4a643] text-[#0B1220] font-bold rounded-full overflow-hidden transition-all flex items-center justify-center shadow-lg shadow-[#E8B84B]/20">
                    <span className="relative z-10 flex items-center">{ind ? ind.cta.primaryButton : "Discuss Your Requirement"} <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" /></span>
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto">
                  <Link href="/contact" className="w-full sm:w-auto px-8 py-5 bg-white dark:bg-transparent hover:bg-slate-50 dark:hover:bg-white/5 text-[#17135B] dark:text-white font-bold rounded-full border border-slate-300 dark:border-slate-700 hover:border-[#17135B] dark:hover:border-white transition-all flex items-center justify-center shadow-sm dark:shadow-none">
                    {ind ? ind.cta.secondaryButton : "Request Technical Consultation"}
                  </Link>
                </motion.div>
              </div>
            </motion.div>

            {/* Floating Enquiries Minimalist Style */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <p className="text-slate-500 dark:text-slate-600 font-bold text-xs uppercase tracking-widest mb-8">
                {isAr ? "خيارات استفسار إضافية" : isJa ? "その他の問い合わせオプション" : isDe ? "Zusätzliche Anfrageoptionen" : isEs ? "Opciones de consulta adicionales" : "Additional Enquiry Options"}
              </p>
              <div className="flex flex-wrap justify-center gap-4 sm:gap-6 max-w-4xl mx-auto">
                {(isAr ? [
                  "التقييم الصناعي", 
                  "تقييم التحديث", 
                  "تقييم عقود الصيانة (AMC)", 
                  "معلومات المنتجات", 
                  "شراكة التطوير"
                ] : isJa ? [
                  "産業評価", 
                  "近代化評価", 
                  "AMC評価", 
                  "製品情報", 
                  "開発パートナーシップ"
                ] : isDe ? [
                  "Industriebewertung", 
                  "Modernisierungsbewertung", 
                  "AMC-Bewertung", 
                  "Produktinformationen", 
                  "Entwicklungspartnerschaft"
                ] : isEs ? [
                  "Evaluación industrial", 
                  "Evaluación de modernización", 
                  "Evaluación de AMC", 
                  "Información del producto", 
                  "Asociación de desarrollo"
                ] : [
                  "Industrial Assessment", 
                  "Modernization Assessment", 
                  "AMC Assessment", 
                  "Product Information", 
                  "Development Partnership"
                ]).map((option, idx) => (
                  <motion.div 
                    key={idx}
                    whileHover={{ y: -4, scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="group cursor-pointer"
                  >
                    <Link href="/contact" className="flex items-center gap-3 px-6 py-3 rounded-full border border-slate-200 dark:border-slate-800/80 bg-white/80 dark:bg-[#0B1220]/40 backdrop-blur-md hover:bg-white dark:hover:bg-[#0B1220] hover:border-[#C59B27]/40 dark:hover:border-[#E8B84B]/40 transition-all text-sm font-medium text-slate-600 dark:text-slate-400 group-hover:text-[#17135B] dark:group-hover:text-white shadow-sm dark:shadow-[0_4px_15px_rgba(0,0,0,0.2)] hover:shadow-md dark:group-hover:shadow-[0_8px_20px_rgba(232,184,75,0.1)]">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-slate-700 group-hover:bg-[#C59B27] dark:group-hover:bg-[#E8B84B] group-hover:shadow-[0_0_8px_#E8B84B] transition-all" />
                      {option}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Hidden Sections */}
        <FeaturedProjectCardCopy />
        <VideosAndDemonstrations />

      </main>
      <Footer />
    </div>
  );
}
