"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import Carousel from "@/components/Carousel";
import { ArrowRight, Search, PenTool, Wrench, Cpu, RefreshCw, Rocket, Shield, GraduationCap, Layers, ChevronDown, HelpCircle, CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { servicesES } from "@/locales/es/services";
import { servicesDE } from "@/locales/de/services";
import { servicesJA } from "@/locales/ja/services";
import { servicesAR } from "@/locales/ar/services";
import { HERO_BLUR_DATA } from "@/lib/heroBlurData";
import { servicesFaqData } from "@/lib/faqData";

const services = [
  {
    number: "01",
    icon: Search,
    title: "Engineering Consultation & Problem Analysis",
    intro: "Every successful solution begins with a clear understanding of the requirement.",
    description: "Sanota works with clients to assess operational problems, technical limitations, improvement opportunities and new project concepts. The objective is to define the actual need before recommending machinery, automation, software or other technologies.",
    items: [
      "Initial technical consultation",
      "Operational and process review",
      "Machinery and system assessment",
      "Problem and root-cause analysis",
      "Feasibility evaluation",
      "Requirement definition",
      "Solution-concept development",
      "Preliminary project planning",
    ],
    clientNeeds: [
      "\"We know there is a problem, but we are not sure what solution is required.\"",
      "\"Our current process is inefficient.\"",
      "\"We want to improve production but need technical guidance.\"",
      "\"We have an idea that requires engineering evaluation.\"",
    ],
    color: "from-blue-600 to-cyan-500",
    link: "#",
  },
  {
    number: "02",
    icon: PenTool,
    title: "System & Product Design",
    intro: "Sanota develops engineering concepts into clearly defined systems, machinery and product designs.",
    description: "The design process considers functionality, operating conditions, safety, maintainability, integration requirements and future scalability. Depending on the project, the work may involve mechanical, electrical, electronic, automation, IoT and software design.",
    items: [
      "Engineering concept development",
      "Mechanical and electrical design",
      "System architecture",
      "Equipment and component selection",
      "Control-system design",
      "IoT and software architecture",
      "Technical drawings and documentation",
      "Prototype planning",
      "Design review and improvement",
    ],
    clientNeeds: [
      "\"We need a system designed around our operation.\"",
      "\"We want to develop a new machine or product.\"",
      "\"Our existing concept needs further engineering.\"",
      "\"Several technologies must work together as one system.\"",
    ],
    color: "from-amber-500 to-orange-500",
    link: "#",
  },
  {
    number: "03",
    icon: Wrench,
    title: "Custom Machinery & Product Development",
    intro: "When standard equipment does not fully address an operational requirement, Sanota can develop machinery, equipment and products around the client's specific need.",
    description: "The service can cover the journey from initial concept and engineering design to fabrication, assembly, testing, installation and improvement.",
    items: [
      "Custom industrial machinery retrofitting and fabrication",
      "Special-purpose equipment development",
      "Production and processing equipment",
      "Product and prototype engineering",
      "Mechanical and electrical integration",
      "Control and automation integration",
      "Fabrication and assembly",
      "Testing and validation",
      "Installation and commissioning",
      "Product or machine improvement",
    ],
    clientNeeds: [
      "\"The machinery available in the market does not meet our requirement.\"",
      "\"We need equipment designed for a particular product or process.\"",
      "\"We want to convert an idea into a working prototype.\"",
      "\"We need to improve or localize an existing machine.\"",
    ],
    color: "from-emerald-500 to-teal-500",
    link: "#",
  },
  {
    number: "04",
    icon: Cpu,
    title: "Automation, IoT & Digital Integration",
    intro: "Sanota helps clients automate operations, connect equipment and gain better visibility over performance.",
    description: "Solutions can combine industrial automation, sensors, control systems, connectivity, cloud platforms, dashboards, alerts, reports and software applications. Where software and advanced digital capability are required, Sanota works with Knoweb, an affiliated IT company under common ownership.",
    items: [
      "Industrial automation & SCADA integration",
      "Custom PLC SCADA control panel assembly",
      "HMI and operator interfaces",
      "Factory IIoT predictive maintenance sensors integration",
      "Machine and process monitoring",
      "IoT system development",
      "Cloud-connected platforms",
      "Web and mobile applications",
      "Dashboards, alerts and reporting",
      "Equipment tracking",
      "Data collection and operational visibility",
      "Integration with existing systems",
    ],
    clientNeeds: [
      "\"We want to reduce manual work.\"",
      "\"We need better control over a process.\"",
      "\"We want to monitor machinery or facilities remotely.\"",
      "\"We need alerts, reports or dashboards.\"",
      "\"Our engineering system requires a software component.\"",
    ],
    color: "from-purple-600 to-pink-500",
    link: "#",
  },
  {
    number: "05",
    icon: RefreshCw,
    title: "Retrofit, Refurbishment & Modernization",
    intro: "Existing machinery and systems may continue to have operational value even when components, controls or technologies have become outdated.",
    description: "Sanota assesses existing equipment and develops practical modernization solutions intended to improve reliability, productivity, safety, maintainability or digital visibility.",
    items: [
      "Machinery condition assessment",
      "Mechanical refurbishment",
      "Legacy factory machine electrical upgrade and modernization",
      "Obsolete PLC panel replacement service for factories",
      "PLC and HMI upgrades",
      "Automation retrofits",
      "Obsolete-component replacement",
      "Sensor and instrumentation upgrades",
      "Safety improvements",
      "IoT and monitoring additions",
      "Performance and capacity improvement",
      "Documentation updates",
    ],
    clientNeeds: [
      "\"Our machinery is mechanically useful, but the controls are outdated.\"",
      "\"Replacement parts are becoming difficult to obtain.\"",
      "\"We want to automate an existing machine.\"",
      "\"We need better performance without replacing the complete system.\"",
      "\"We want to add monitoring to existing equipment.\"",
    ],
    color: "from-sky-500 to-indigo-500",
    link: "#",
  },
  {
    number: "06",
    icon: Rocket,
    title: "Project Execution, Installation & Commissioning",
    intro: "Sanota coordinates the practical delivery of engineering and technology solutions from approved design to operational handover.",
    description: "This service brings together project planning, procurement coordination, fabrication, system integration, installation, testing and commissioning.",
    items: [
      "Project planning and coordination",
      "Engineering and technical documentation",
      "Equipment and component sourcing support",
      "Fabrication and assembly",
      "Mechanical installation",
      "Electrical installation",
      "Automation and software integration",
      "Site coordination",
      "System testing",
      "Commissioning",
      "Performance verification",
      "Operational handover",
    ],
    clientNeeds: [
      "\"We require one team to coordinate several technical disciplines.\"",
      "\"We need a complete system installed and commissioned.\"",
      "\"Our project includes machinery, controls, IoT and software.\"",
      "\"We need support from design through to working operation.\"",
    ],
    color: "from-rose-500 to-red-500",
    link: "#",
  },
  {
    number: "07",
    icon: Shield,
    title: "AMC, Maintenance & Lifecycle Support",
    intro: "Engineering support should not end when a project is commissioned.",
    description: "Sanota provides maintenance and lifecycle services intended to protect reliability, reduce avoidable interruptions and identify opportunities for improvement. Support is available for systems developed by Sanota and for eligible third-party machinery, automation, electrical, control, IoT and software systems following an initial technical assessment.",
    items: [
      "Annual Maintenance Contracts",
      "Preventive-maintenance planning",
      "Periodic inspections",
      "Breakdown-support arrangements",
      "Machinery and system servicing",
      "Automation and control support",
      "Electrical and electronic support",
      "IoT and software support",
      "Service reporting",
      "Component and obsolescence review",
      "Performance monitoring",
      "Modernization recommendations",
      "Technical lifecycle planning",
    ],
    clientNeeds: [
      "\"We need reliable ongoing support after project completion.\"",
      "\"Our machinery requires a preventive-maintenance programme.\"",
      "\"We need one support arrangement for an integrated system.\"",
      "\"We require maintenance support for equipment supplied by another company.\"",
      "\"We want to reduce breakdown risk and plan future upgrades.\"",
    ],
    color: "from-[#E8B84B] to-amber-600",
    link: "#",
    primaryAction: { label: "Request an AMC Assessment", href: "/tell-us-your-challenge" },
  },
  {
    number: "08",
    icon: GraduationCap,
    title: "Training & Technical Capability Development",
    intro: "Sanota helps client teams understand, operate and maintain engineering and technology systems more effectively.",
    description: "Training can be provided as part of a project handover or as a separate technical-capability programme.",
    items: [
      "Equipment operation training",
      "Automation and control-system familiarization",
      "IoT and software-user training",
      "Basic maintenance guidance",
      "Safety and operating-procedure support",
      "Technical documentation",
      "System-administration guidance",
      "Customized technical workshops",
      "Train-the-trainer programmes",
      "Post-commissioning refresher training",
    ],
    clientNeeds: [
      "\"Our operators need to understand a new system.\"",
      "\"Our maintenance team needs equipment-specific guidance.\"",
      "\"We need structured training as part of project handover.\"",
      "\"We want to strengthen our internal technical capability.\"",
    ],
    color: "from-violet-600 to-purple-500",
    link: "#",
  },
];

export default function ServicesPage() {
  const { language } = useLanguage();
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const isEs = language === "es";
  const isDe = language === "de";
  const isJa = language === "ja";
  const isAr = language === "ar";
  const s = isAr ? servicesAR : isJa ? servicesJA : isDe ? servicesDE : isEs ? servicesES : null;

  return (
    <div className="flex flex-col min-h-screen bg-transparent">
      <Header />
      <main className="flex-grow">

        {/* Hero Section */}
        <section className="relative pt-24 lg:pt-32 pb-12 lg:pb-16 overflow-hidden border-b border-slate-200 dark:border-slate-800 bg-transparent min-h-[60vh] lg:min-h-[70vh] flex flex-col justify-center">
          <div className="page-hero-bg">
            <Image
              src="/services_hero_bg.webp"
              alt="Engineering Services Background"
              fill
              priority
              unoptimized
              placeholder="blur"
              blurDataURL={HERO_BLUR_DATA.services_hero_bg}
              className="object-cover"
            />
          </div>
          <div className="page-hero-overlay" />

          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-[#C59B27] dark:text-[#E8B84B] font-bold tracking-widest uppercase text-sm mb-5"
            >
              {isAr ? "الخدمات الهندسية" : isJa ? "エンジニアリングサービス" : isDe ? "Ingenieurdienstleistungen" : isEs ? "Servicios de ingeniería" : "Engineering Services"}
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 }}
              className="text-4xl sm:text-6xl font-black text-[#17135B] dark:text-white tracking-tight mb-6 leading-tight"
            >
              {s ? (
                s.hero.heading
              ) : (
                <>
                  Integrated Services for<br className="hidden sm:block" />
                  <span className="text-[#C59B27] dark:text-[#2E5EAA]"> Real Operational Challenges</span>
                </>
              )}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-[#17135B] dark:text-slate-300 max-w-3xl mx-auto mb-4 font-semibold"
            >
              {s ? s.hero.subheading : "From problem analysis and engineering design to implementation, automation and long-term support."}
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="text-lg text-[#555E75] dark:text-slate-400 max-w-3xl mx-auto mb-10 leading-relaxed"
            >
              {s ? s.hero.description : "Sanota helps industries solve technical and operational challenges through coordinated engineering and technology services. Depending on the requirement, a solution may combine mechanical engineering, electrical and electronic systems, automation, IoT, software, fabrication, installation, commissioning and lifecycle support."}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-col sm:flex-row justify-center gap-4 mb-12"
            >
              <Link
                href="/tell-us-your-challenge"
                className="px-8 py-4 bg-[#E5A93C] hover:bg-[#F0B74C] text-[#111424] font-bold rounded-lg shadow-md transition-colors flex items-center justify-center"
              >
                {s ? s.hero.primaryButton : "Tell Us Your Challenge"} <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <a
                href="#services-list"
                className="px-8 py-4 bg-white dark:bg-[#131C2E]/80 hover:bg-slate-50 dark:hover:bg-slate-800 text-[#17135B] dark:text-white font-bold rounded-lg border border-[#17135B]/20 dark:border-slate-700 shadow-sm transition-colors flex items-center justify-center"
              >
                {s ? s.hero.secondaryButton : "Explore Our Services"}
              </a>
            </motion.div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-[#C59B27] dark:text-[#E8B84B] font-bold text-xs tracking-widest uppercase"
            >
              {s ? s.hero.supportLine : (
                <>Consult <span className="mx-2 text-slate-400 dark:text-slate-600">•</span> Design <span className="mx-2 text-slate-400 dark:text-slate-600">•</span> Develop <span className="mx-2 text-slate-400 dark:text-slate-600">•</span> Integrate <span className="mx-2 text-slate-400 dark:text-slate-600">•</span> Implement <span className="mx-2 text-slate-400 dark:text-slate-600">•</span> Maintain</>
              )}
            </motion.p>
          </div>
        </section>

        {/* Introduction */}
        <section className="relative py-16 lg:py-24 bg-gradient-to-b from-[#FAF8F5] via-white to-[#FAF8F5] dark:from-[#0B1220] dark:via-[#080E1A] dark:to-[#050B14] overflow-hidden border-t border-slate-200/80 dark:border-slate-800/80">
          {/* Subtle Ambient Glows - pure CSS */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/5 dark:bg-[#2E5EAA]/10 rounded-full blur-[140px] pointer-events-none -z-0" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-amber-500/5 dark:bg-[#E8B84B]/8 rounded-full blur-[120px] pointer-events-none -z-0" />

          <div className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-3xl md:text-5xl font-black text-[#17135B] dark:text-white mb-6 leading-tight tracking-tight">
                {s ? s.intro.title : (
                  <>
                    More Than a <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C59B27] via-[#E8B84B] to-[#9A7210] dark:from-[#E8B84B] dark:via-[#F1D08A] dark:to-[#E8B84B]">Single Service</span>
                  </>
                )}
              </h2>

              <p className="text-[#17135B] dark:text-slate-100 text-lg md:text-xl leading-relaxed mb-4 font-semibold max-w-2xl mx-auto">
                {s ? s.intro.description1 : "Industrial challenges rarely belong to only one technical discipline."}
              </p>

              <p className="text-[#555E75] dark:text-slate-300 text-base md:text-lg leading-relaxed mb-8 font-normal max-w-3xl mx-auto">
                {s ? s.intro.description2 : "A machinery problem may require mechanical modifications, new electrical controls, automation, software monitoring and ongoing maintenance. A new product may require concept development, engineering design, prototyping, testing and production support."}
              </p>

              {/* Redesigned Executive Highlight Card */}
              <div className="mt-8 relative max-w-3xl mx-auto rounded-3xl p-[1px] overflow-hidden shadow-xl dark:shadow-[0_25px_60px_rgba(0,0,0,0.6)] bg-gradient-to-r from-[#2E5EAA]/30 via-[#E8B84B]/40 to-[#2E5EAA]/30 dark:from-[#E8B84B]/40 dark:via-slate-700/40 dark:to-[#E8B84B]/40 group transition-all duration-300 hover:shadow-2xl">
                <div className="relative rounded-[calc(1.5rem-1px)] p-7 sm:p-10 overflow-hidden text-center flex flex-col items-center bg-white/95 dark:bg-[#131C2E]/90 backdrop-blur-xl border border-slate-200/80 dark:border-slate-800">
                  {/* Internal ambient corner glows */}
                  <div className="absolute -top-16 -right-16 w-48 h-48 bg-amber-500/10 dark:bg-[#E8B84B]/15 rounded-full blur-3xl pointer-events-none group-hover:bg-amber-500/15 dark:group-hover:bg-[#E8B84B]/25 transition-all duration-700" />
                  <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-blue-500/10 dark:bg-[#2E5EAA]/20 rounded-full blur-3xl pointer-events-none group-hover:bg-blue-500/15 dark:group-hover:bg-[#2E5EAA]/30 transition-all duration-700" />
                  
                  {/* Top Badge */}
                  <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 dark:bg-[#E8B84B]/10 border border-amber-500/30 dark:border-[#E8B84B]/30 mb-5 relative z-10">
                    <span className="w-2 h-2 rounded-full bg-[#C59B27] dark:bg-[#E8B84B] animate-pulse" />
                    <span className="text-[11px] font-bold tracking-widest uppercase text-[#9A7210] dark:text-[#E8B84B]">
                      {isAr ? "تقديم حلول هندسية متكاملة" : isJa ? "統合エンジニアリングの提供" : isDe ? "Integrierte Engineering-Bereitstellung" : isEs ? "Entrega de ingeniería integrada" : "Integrated Engineering Delivery"}
                    </span>
                  </div>

                  {/* High Impact Lead Typography */}
                  <h3 className="text-xl sm:text-2xl font-bold text-[#17135B] dark:text-white mb-3 leading-snug relative z-10 max-w-2xl">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2E5EAA] via-[#17135B] to-[#C59B27] dark:from-[#E8B84B] dark:via-[#F3D78A] dark:to-[#E8B84B] font-extrabold">
                      {isAr ? "سانوتا تجمع بين جميع الإمكانات المطلوبة" : isJa ? "Sanotaは必要な能力を統合します" : isDe ? "Sanota bündelt die erforderlichen Kompetenzen" : isEs ? "Sanota reúne las capacidades necesarias" : "Sanota brings the required capabilities together"}
                    </span>{" "}
                    {isAr ? "لتلبية متطلباتكم التشغيلية بدقة." : isJa ? "お客様の運用上のニーズに合わせて。" : isDe ? "für Ihre betrieblichen Anforderungen." : isEs ? "en torno a sus necesidades operativas." : "around your operational need."}
                  </h3>

                  {/* Supporting Narrative */}
                  <p className="text-[#555E75] dark:text-slate-200 text-base sm:text-lg leading-relaxed font-normal relative z-10 max-w-2xl">
                    {s ? s.intro.description3 : "This provides clients with a more coordinated path from initial requirement to a practical, scalable and reliable working solution."}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services List */}
        <section id="services-list" className="py-10 lg:py-16 bg-transparent">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">

            <div className="text-center mb-8">
              <h2 className="text-[#C59B27] dark:text-[#E8B84B] font-bold tracking-widest uppercase text-sm mb-4">
                {isAr ? "ركائز الخدمات" : isJa ? "サービスピラー" : isDe ? "Servicesäulen" : isEs ? "Pilares de servicio" : "Service Pillars"}
              </h2>
              <h3 className="text-3xl md:text-4xl font-bold text-[#17135B] dark:text-white">
                {isAr ? "كيف يمكن لسانوتا دعم أعمالكم" : isJa ? "Sanotaの包括的な支援体制" : isDe ? "Wie Sanota Sie unterstützen kann" : isEs ? "Cómo Sanota puede apoyarle" : "How Sanota Can Support You"}
              </h3>
            </div>

            <div className="mt-4 overflow-hidden relative">
              <Carousel
                autoplay={true}
                autoplayDelay={10000}
                loop={true}
                round={false}
                baseWidth={1300}
                items={services.map((service, idx) => {
                  const sp = s?.pillars?.[idx];
                  const title = sp ? sp.title.replace(/^\d+\.\s*/, '') : service.title;
                  const intro = sp ? sp.summary : service.intro;
                  const clientNeeds = sp ? sp.clientNeeds : service.clientNeeds;
                  const items = sp ? sp.services : service.items;
                  const linkText = sp ? sp.linkText : `Explore ${service.title}`;

                  return {
                    id: idx,
                    content: (
                      <div className="relative group w-full h-full rounded-3xl p-[1px] overflow-hidden shadow-lg dark:shadow-[0_20px_50px_rgba(0,0,0,0.4)]">
                        {/* Flowing light effect */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] h-[200%] bg-[conic-gradient(from_0deg,transparent_0_280deg,#C59B27_360deg)] dark:bg-[conic-gradient(from_0deg,transparent_0_280deg,#E8B84B_360deg)] animate-[spin_6s_linear_infinite] opacity-30 group-hover:opacity-100 transition-opacity duration-500" />
                        
                        {/* Inner content box */}
                        <div 
                          dir={isAr ? "rtl" : "ltr"}
                          className="relative bg-white dark:bg-[#0F1523] border border-slate-200 dark:border-transparent w-full h-full p-5 lg:p-8 rounded-[calc(1.5rem-1px)] flex flex-col z-10 shadow-sm"
                        >
                          <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 relative z-10 h-full">

                          {/* Left: Header + Description */}
                          <div className={`lg:w-1/2 flex flex-col pb-5 lg:pb-0 mb-5 lg:mb-0 ${isAr ? "pl-0 lg:pl-6 border-b lg:border-b-0 lg:border-l border-slate-200 dark:border-slate-800/50" : "pr-0 lg:pr-6 border-b lg:border-b-0 lg:border-r border-slate-200 dark:border-slate-800/50"}`}>
                            
                            <div className="flex items-start mb-5">
                              {/* Colorful Glowing Icon */}
                              <div className={`relative shrink-0 ${isAr ? "ml-5" : "mr-5"}`}>
                                <div className={`absolute -inset-2 bg-gradient-to-br ${service.color} rounded-2xl blur-xl opacity-20 dark:opacity-30 group-hover:opacity-40 transition-opacity duration-500`} />
                                <div className={`relative w-12 h-12 rounded-xl p-[1px] bg-gradient-to-br ${service.color}`}>
                                  <div className="w-full h-full bg-[#FAF8F5] dark:bg-[#0F1523] rounded-[11px] flex items-center justify-center">
                                    <service.icon className="w-6 h-6 text-[#17135B] dark:text-white" />
                                  </div>
                                </div>
                              </div>

                              <div className="flex flex-col justify-center">
                                <span className="text-[#C59B27] dark:text-slate-500 font-bold tracking-[0.2em] text-[11px] uppercase mb-1">
                                  {service.number}
                                </span>
                                <h3 className="text-3xl font-black text-[#17135B] dark:text-white leading-tight transition-colors duration-300">
                                  {title}
                                </h3>
                              </div>
                            </div>

                            <p className="text-[17px] text-[#17135B] dark:text-slate-200 mb-3 font-semibold leading-relaxed">
                              {intro}
                            </p>
                            
                            {!sp && (
                              <p className="text-[#555E75] dark:text-slate-400 text-[14px] leading-relaxed mb-5">
                                {service.description}
                              </p>
                            )}

                            {/* Client Needs Box */}
                            <div className="bg-[#FAF8F5] dark:bg-[#050B14] rounded-xl p-4 lg:p-5 border border-slate-200 dark:border-slate-800/80 relative overflow-hidden group/box mt-auto">
                              <div className="absolute inset-0 bg-gradient-to-br from-[#C59B27]/5 to-transparent opacity-0 group-hover/box:opacity-100 transition-opacity duration-500" />
                              <h4 className="flex items-center text-[#C59B27] dark:text-[#E8B84B] font-bold text-[10px] uppercase tracking-widest mb-3">
                                <span className={`w-1.5 h-1.5 rounded-full bg-[#C59B27] dark:bg-[#E8B84B] shadow-[0_0_8px_rgba(197,155,39,0.8)] ${isAr ? "ml-2" : "mr-2"}`} />
                                {isAr ? "احتياجات العميل النموذجية" : isJa ? "代表的なお客様のご要望" : isDe ? "Typische Kundenanforderungen" : isEs ? "Necesidades típicas del cliente" : "Typical Client Needs"}
                              </h4>
                              <div className="grid grid-cols-1 gap-2.5">
                                {clientNeeds.map((need, nIdx) => (
                                  <div key={nIdx} className="flex items-start">
                                     <span className={`text-slate-400 dark:text-slate-600 font-serif text-2xl leading-none mt-0.5 ${isAr ? "ml-2.5" : "mr-2.5"}`}>"</span>
                                     <p className="text-[#555E75] dark:text-slate-300 text-[13px] italic leading-relaxed">
                                       {need.replace(/["“”]/g, '')}
                                     </p>
                                  </div>
                                ))}
                              </div>
                            </div>

                          </div>

                          {/* Right: Services list */}
                          <div className="lg:w-1/2 flex flex-col h-full">
                            <p className="text-[#17135B] dark:text-slate-500 font-bold text-[10px] uppercase tracking-widest mb-3">
                              {sp?.servicesTitle || (isAr ? "قد تشمل الخدمات ما يلي:" : isJa ? "提供サービス内容：" : isDe ? "Leistungen können umfassen:" : isEs ? "Los servicios pueden incluir:" : "Services may include")}
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-5">
                              {items.map((item, itemIdx) => (
                                <div key={itemIdx} className="flex items-center bg-[#FAF8F5] dark:bg-[#151D2F] rounded-lg px-4 py-3 border border-slate-200 dark:border-transparent hover:border-[#C59B27] dark:hover:border-slate-700 transition-colors shadow-sm dark:shadow-none">
                                  <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-br ${service.color} shrink-0 shadow-lg ${isAr ? "ml-3" : "mr-3"}`} />
                                  <span className="text-[#17135B] dark:text-slate-200 text-[13.5px] font-semibold leading-snug">{item}</span>
                                </div>
                              ))}
                            </div>
                            
                            <div className="mt-auto flex justify-end">
                              <a href={service.link} className="inline-flex items-center text-[#17135B] dark:text-[#3B82F6] hover:text-[#C59B27] dark:hover:text-blue-400 text-[14px] font-bold transition-all duration-300 group/link bg-[#17135B]/8 dark:bg-[#3B82F6]/10 px-5 py-2.5 rounded-full hover:bg-[#17135B]/15">
                                {linkText}
                                <span className={`${isAr ? "mr-2" : "ml-2"} w-6 h-6 rounded-full bg-[#17135B]/10 dark:bg-blue-500/20 flex items-center justify-center transition-colors duration-300`}>
                                  <ArrowRight className={`w-3 h-3 text-[#17135B] dark:text-[#3B82F6] transition-all duration-300 ${isAr ? "rotate-180 group-hover/link:-translate-x-0.5" : "group-hover/link:translate-x-0.5"}`} />
                                </span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      </div>
                    )
                  };
                })}
              />
            </div>
          </div>
        </section>
        {/* Integrated Service Model */}
        <section className="py-10 lg:py-14 bg-transparent border-t border-slate-200 dark:border-slate-800/50">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8 lg:mb-12">
              <h2 className="text-[#C59B27] dark:text-[#E8B84B] font-bold tracking-widest uppercase text-sm mb-4">
                {s ? s.integratedModel.heading : "Integrated Service Model"}
              </h2>
              <h3 className="text-3xl md:text-4xl font-bold text-[#17135B] dark:text-white mb-6">
                {isAr ? "متطلب تشغيلي واحد قد يستفيد من عدة خدمات من سانوتا" : isJa ? "1つの要件に対して複数のSanotaサービスを組み合わせ可能" : isDe ? "Eine Anforderung kann mehrere Sanota-Services erfordern" : isEs ? "Un requisito puede requerir varios servicios de Sanota" : "One Requirement May Use Several Sanota Services"}
              </h3>
              <p className="text-[#555E75] dark:text-slate-400 text-lg max-w-2xl mx-auto">
                {s ? s.integratedModel.description : "A client does not need to decide which technical departments should be involved. Sanota first studies the requirement and then identifies the appropriate combination of services."}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-14">
              {(s ? s.integratedModel.examples.map((ex, idx) => ({
                title: ex.title,
                steps: ex.steps,
                color: idx === 0 ? "from-blue-600 to-cyan-500" : idx === 1 ? "from-emerald-500 to-teal-500" : "from-purple-600 to-pink-500"
              })) : [
                { title: "Modernizing an Existing Machine", steps: ["Consultation and assessment", "Mechanical and electrical redesign", "Automation and control upgrade", "IoT monitoring", "Installation and commissioning", "AMC and lifecycle support"], color: "from-blue-600 to-cyan-500" },
                { title: "Developing a New Product", steps: ["Requirement definition", "Engineering and product design", "Prototype development", "Electronics and software integration", "Testing and improvement", "Production-development support"], color: "from-emerald-500 to-teal-500" },
                { title: "Automating an Industrial Process", steps: ["Process analysis", "Automation design", "Machinery and controls integration", "Dashboard or software development", "Installation and commissioning", "Training and ongoing support"], color: "from-purple-600 to-pink-500" },
              ]).map((example, idx) => (
                <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }} className="bg-white dark:bg-[#131C2E]/50 border border-slate-200 dark:border-slate-800 rounded-2xl p-7 hover:border-[#C59B27] dark:hover:border-slate-700 shadow-sm dark:shadow-none transition-colors">
                  <div className={`w-10 h-1 rounded-full bg-gradient-to-r ${example.color} mb-5`} />
                  <h4 className="text-[#17135B] dark:text-white font-bold text-lg mb-6 leading-snug">{example.title}</h4>
                  <div className="space-y-3">
                    {example.steps.map((step, sIdx) => (
                      <div key={sIdx} className="flex items-start">
                        <span className="text-xs font-black mr-3 mt-0.5 text-slate-400 dark:text-slate-500 shrink-0">{String(sIdx + 1).padStart(2, '0')}</span>
                        <p className="text-[#555E75] dark:text-slate-400 text-sm leading-relaxed">{step}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="text-center">
              <Link href="/tell-us-your-challenge" className="inline-flex items-center px-8 py-4 bg-[#E5A93C] hover:bg-[#F0B74C] text-[#111424] font-bold rounded-lg shadow-md transition-colors">
                {s ? s.integratedModel.button : "Tell Us Your Challenge"} <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* How to Engage */}
        <section className="py-10 lg:py-14 bg-transparent border-t border-slate-200 dark:border-slate-800/50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8 lg:mb-12">
              <h2 className="text-[#C59B27] dark:text-[#E8B84B] font-bold tracking-widest uppercase text-sm mb-4">
                {s ? s.howToEngage.heading : "How to Engage Sanota"}
              </h2>
              <h3 className="text-3xl md:text-4xl font-bold text-[#17135B] dark:text-white mb-6">
                {s ? s.howToEngage.subheading : "Start With the Operational Need"}
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-12">
              {(s ? s.howToEngage.steps.map(step => ({ n: step.num, title: step.title, desc: step.desc })) : [
                { n: "1", title: "Tell Us the Challenge", desc: "Explain what is not working, what needs improvement or what you want to develop." },
                { n: "2", title: "Initial Technical Review", desc: "Sanota reviews the requirement and identifies the relevant capabilities and specialists." },
                { n: "3", title: "Consultation or Assessment", desc: "The next step may include a discussion, document review, site visit or technical inspection." },
                { n: "4", title: "Recommended Approach", desc: "Sanota defines the proposed solution pathway, scope and implementation requirements." },
                { n: "5", title: "Design and Delivery", desc: "Following agreement, the solution moves through design, development, integration, implementation and commissioning." },
                { n: "6", title: "Continued Support", desc: "Training, maintenance, AMC and future modernization support can be provided where required." },
              ]).map((step, idx) => (
                <motion.div key={idx} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.07 }} className="glowing-card flex bg-white dark:bg-[#131C2E]/40 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 hover:bg-[#FAF8F5] dark:hover:bg-[#131C2E]/80 shadow-sm dark:shadow-none transition-colors">
                  <div className="w-10 h-10 rounded-full bg-[#C59B27]/10 dark:bg-[#E8B84B]/10 border border-[#C59B27]/25 dark:border-[#E8B84B]/20 flex items-center justify-center mr-5 flex-shrink-0">
                    <span className="text-[#C59B27] dark:text-[#E8B84B] font-black text-sm">{step.n}</span>
                  </div>
                  <div>
                    <h4 className="text-[#17135B] dark:text-white font-bold mb-2">{step.title}</h4>
                    <p className="text-[#555E75] dark:text-slate-400 text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="bg-[#17135B]/5 dark:bg-[#2E5EAA]/10 border border-[#17135B]/15 dark:border-[#2E5EAA]/20 rounded-2xl p-6 text-center">
              <p className="text-[#555E75] dark:text-slate-300 leading-relaxed">
                {s ? s.howToEngage.note : (
                  <>
                    <span className="font-bold text-[#17135B] dark:text-white">You do not need to prepare a complete technical specification before contacting Sanota.</span> Begin with the problem or desired outcome.
                  </>
                )}
              </p>
            </div>
          </div>
        </section>

        {/* Industries Supported */}
        <section className="relative py-10 lg:py-14 bg-transparent overflow-hidden border-t border-slate-200 dark:border-slate-800/40">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-[#17135B]/5 to-[#C59B27]/5 dark:from-[#2E5EAA]/10 dark:to-[#E8B84B]/5 rounded-full blur-[120px] pointer-events-none -translate-y-1/3 translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-[#C59B27]/5 to-transparent dark:from-[#E8B84B]/5 rounded-full blur-[100px] pointer-events-none translate-y-1/3 -translate-x-1/4" />
          
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-center">
              
              {/* Left Column: Text & CTA */}
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="lg:col-span-5 relative"
              >
                <div className="absolute -left-6 md:-left-10 top-2 bottom-10 w-1 bg-gradient-to-b from-[#C59B27] via-[#C59B27]/20 to-transparent dark:from-[#E8B84B] dark:via-[#E8B84B]/20 rounded-full opacity-60" />
                
                <h2 className="flex items-center text-[#C59B27] dark:text-[#E8B84B] font-bold tracking-[0.2em] uppercase text-xs mb-6">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C59B27] dark:bg-[#E8B84B] mr-3 animate-pulse shadow-[0_0_10px_rgba(197,155,39,0.8)]" />
                  {isAr ? "القطاعات المدعومة" : isJa ? "対応産業分野" : isDe ? "Unterstützte Branchen" : isEs ? "Sectores a los que apoyamos" : "Industries Supported"}
                </h2>
                
                <h3 className="text-4xl md:text-5xl lg:text-[44px] font-black text-[#17135B] dark:text-white mb-8 leading-[1.15]">
                  {isAr ? (
                    <>
                      خدمات مصممة لتلائم <br className="hidden md:block" />
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C59B27] to-[#17135B] dark:from-[#E8B84B] dark:to-amber-600">بيئات التشغيل المختلفة</span>
                    </>
                  ) : isJa ? (
                    <>
                      多様な運用環境に <br className="hidden md:block" />
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C59B27] to-[#17135B] dark:from-[#E8B84B] dark:to-amber-600">最適化されたサービス</span>
                    </>
                  ) : isDe ? (
                    <>
                      Dienstleistungen für <br className="hidden md:block" />
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C59B27] to-[#17135B] dark:from-[#E8B84B] dark:to-amber-600">vielfältige Betriebsumgebungen</span>
                    </>
                  ) : isEs ? (
                    <>
                      Servicios adaptados a <br className="hidden md:block" />
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C59B27] to-[#17135B] dark:from-[#E8B84B] dark:to-amber-600">diversos entornos operativos</span>
                    </>
                  ) : (
                    <>
                      Services Shaped Around <br className="hidden md:block" />
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C59B27] to-[#17135B] dark:from-[#E8B84B] dark:to-amber-600">Different Operating Environments</span>
                    </>
                  )}
                </h3>
                
                <p className="text-[#555E75] dark:text-slate-400 text-lg leading-relaxed mb-10 max-w-xl">
                  {isAr ? "تغطي خدمات سانوتا المتطلبات عبر مجموعة واسعة من القطاعات الصناعية. يتم تطوير الحل النهائي وفقاً لبيئة التشغيل الفعلية للعميل والمتطلبات الفنية والأولويات التجارية." : isJa ? "Sanotaのサービスは多岐にわたる産業分野のニーズに対応します。最終的なソリューションは、お客様の実際の稼働環境、技術要件、およびビジネスの優先事項に合わせて構築されます。" : isDe ? "Die Dienstleistungen von Sanota decken Anforderungen in einer Vielzahl von Branchen ab. Die endgültige Lösung wird auf der Grundlage der tatsächlichen Betriebsumgebung, der technischen Anforderungen und der geschäftlichen Prioritäten des Kunden entwickelt." : isEs ? "Los servicios de Sanota cubren requisitos en una amplia gama de industrias. La solución final se desarrolla en función del entorno operativo real del cliente, los requisitos técnicos y las prioridades comerciales." : "Sanota's services can support requirements across a wide range of industries. The final solution is developed around the client's actual operating environment, technical requirements and business priorities."}
                </p>
                
                <Link 
                  href="/industries" 
                  className="inline-flex items-center px-8 py-4 bg-[#E5A93C] hover:bg-[#F0B74C] text-[#111424] font-bold rounded-xl transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-1 group"
                >
                  {isAr ? "استكشف الصناعات" : isJa ? "産業分野を見る" : isDe ? "Branchen entdecken" : isEs ? "Explorar industrias" : "Explore Industries"} 
                  <span className="ml-3 w-8 h-8 rounded-full bg-[#111424]/10 flex items-center justify-center group-hover:bg-[#111424]/20 transition-colors">
                    <ArrowRight className="w-4 h-4 text-[#111424] group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </Link>
              </motion.div>

              {/* Right Column: Industry Cards */}
              <div className="lg:col-span-7">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
                  {(isAr ? [
                    "التصنيع والأتمتة الصناعية", 
                    "الزراعة الذكية والتكنولوجيا الزراعية", 
                    "معالجة الأغذية والمشروبات", 
                    "حلول صناعة الشاي", 
                    "الخدمات اللوجستية والتخزين ومناولة المواد", 
                    "كفاءة الطاقة والموارد", 
                    "الإدارة البيئية ومعالجة النفايات", 
                    "البنية التحتية والمرافق الذكية", 
                    "الرعاية الصحية والهندسة الطبية الحيوية", 
                    "البحث والابتكار وتطوير المنتجات"
                  ] : isJa ? [
                    "製造および産業オートメーション", 
                    "スマート農業およびアグリテック", 
                    "食品および飲料加工", 
                    "茶葉加工産業ソリューション", 
                    "物流、倉庫管理および資材搬送", 
                    "エネルギーおよび資源効率化", 
                    "環境および廃棄物管理", 
                    "インフラおよびスマートファシリティ", 
                    "ヘルスケアおよびバイオメディカルエンジニアリング", 
                    "研究開発・イノベーション・新製品開発"
                  ] : isDe ? [
                    "Fertigung und Industrieautomation", 
                    "Intelligente Landwirtschaft und Agrartechnologie", 
                    "Lebensmittel- und Getränkeverarbeitung", 
                    "Lösungen für die Teeindustrie", 
                    "Logistik, Lagerung und Materialtransport", 
                    "Energie- und Ressourceneffizienz", 
                    "Umwelt- und Abfallmanagement", 
                    "Infrastruktur und intelligente Einrichtungen", 
                    "Gesundheitswesen und biomedizinische Technik", 
                    "Forschung, Innovation und Produktentwicklung"
                  ] : isEs ? [
                    "Fabricación y automatización industrial", 
                    "Agricultura inteligente y agrotecnología", 
                    "Procesamiento de alimentos y bebidas", 
                    "Soluciones para la industria del té", 
                    "Logística, almacenamiento y manipulación", 
                    "Eficiencia energética y de recursos", 
                    "Gestión ambiental y de residuos", 
                    "Infraestructura e instalaciones inteligentes", 
                    "Ingeniería sanitaria y biomédica", 
                    "Investigación, innovación y desarrollo de productos"
                  ] : [
                    "Manufacturing and industrial automation", 
                    "Smart agriculture and agri-technology", 
                    "Food and beverage processing", 
                    "Tea", 
                    "Logistics, warehousing and material handling", 
                    "Energy and resource efficiency", 
                    "Environmental and waste management", 
                    "Infrastructure and smart facilities", 
                    "Healthcare and biomedical engineering", 
                    "Research, innovation and product development"
                  ]).map((industry, idx) => (
                    <motion.div 
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 0.5, delay: 0.05 * idx }}
                      className="group flex items-center bg-white dark:bg-[#131C2E]/40 hover:bg-[#FAF8F5] dark:hover:bg-[#1A2640]/80 backdrop-blur-sm border border-slate-200 dark:border-slate-800/60 hover:border-[#C59B27] dark:hover:border-slate-600 rounded-2xl p-5 transition-all duration-300 shadow-sm dark:shadow-none hover:-translate-y-1 cursor-default relative overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.03] to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                      
                      <div className="relative w-2 h-2 rounded-full bg-slate-300 dark:bg-slate-700 group-hover:bg-[#C59B27] dark:group-hover:bg-[#E8B84B] mr-4 flex-shrink-0 transition-colors duration-300">
                        <div className="absolute inset-0 bg-[#C59B27] dark:bg-[#E8B84B] rounded-full blur-[4px] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                      
                      <span className="text-[#17135B] dark:text-slate-300 text-[15px] font-semibold leading-snug group-hover:text-[#C59B27] dark:group-hover:text-white transition-colors duration-300 relative z-10">
                        {industry}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Sanota + Knoweb */}
        <section className="relative py-10 lg:py-14 bg-transparent overflow-hidden border-t border-slate-200 dark:border-slate-800/40">
          <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-[#C59B27]/10 dark:bg-[#E8B84B]/10 rounded-full blur-[150px] pointer-events-none -translate-y-1/2 -translate-x-1/2" />
          <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-[#17135B]/10 dark:bg-[#3B82F6]/10 rounded-full blur-[150px] pointer-events-none -translate-y-1/2 translate-x-1/2" />
          
          <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8 }}
              className="relative p-10 md:p-16 rounded-[40px] bg-white/95 dark:bg-[#0A101A]/80 backdrop-blur-2xl border border-slate-200 dark:border-slate-800/50 shadow-xl dark:shadow-[0_20px_60px_rgba(0,0,0,0.5)] overflow-hidden text-center group hover:border-[#C59B27]/40 dark:hover:border-slate-700/80 transition-all duration-700"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#C59B27]/10 via-transparent to-[#17135B]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none" />
              
              <div className="relative z-10">
                <div className="inline-flex items-center justify-center space-x-4 mb-8">
                  <div className="relative">
                    <div className="absolute inset-0 bg-[#C59B27] dark:bg-[#E8B84B] blur-[10px] opacity-60 rounded-full group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="w-3 h-3 bg-[#C59B27] dark:bg-[#E8B84B] rounded-full relative z-10" />
                  </div>
                  <div className="h-px w-12 bg-gradient-to-r from-[#C59B27] to-[#17135B] opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative">
                    <div className="absolute inset-0 bg-[#17135B] dark:bg-[#3B82F6] blur-[10px] opacity-60 rounded-full group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="w-3 h-3 bg-[#17135B] dark:bg-[#3B82F6] rounded-full relative z-10" />
                  </div>
                </div>

                <h2 className="text-[#C59B27] dark:text-[#E8B84B] font-bold tracking-[0.25em] uppercase text-xs mb-4">
                  {s ? s.knowebCollab.heading : "Sanota + Knoweb"}
                </h2>
                
                <h3 className="text-4xl md:text-5xl lg:text-[52px] font-black text-[#17135B] dark:text-white mb-10 leading-tight">
                  {isAr ? (
                    <>
                      قدرات هندسية معززة <br className="hidden md:block" />
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C59B27] to-[#17135B] dark:from-[#3B82F6] dark:to-cyan-400">بالبرمجيات والحلول الرقمية</span>
                    </>
                  ) : isJa ? (
                    <>
                      ソフトウェアとデジタル技術で強化された <br className="hidden md:block" />
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C59B27] to-[#17135B] dark:from-[#3B82F6] dark:to-cyan-400">エンジニアリング能力</span>
                    </>
                  ) : isDe ? (
                    <>
                      Ingenieurwesen gestärkt durch <br className="hidden md:block" />
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C59B27] to-[#17135B] dark:from-[#3B82F6] dark:to-cyan-400">Software und digitale Kompetenz</span>
                    </>
                  ) : isEs ? (
                    <>
                      Ingeniería reforzada por <br className="hidden md:block" />
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C59B27] to-[#17135B] dark:from-[#3B82F6] dark:to-cyan-400">software y capacidades digitales</span>
                    </>
                  ) : (
                    <>
                      Engineering Strengthened by <br className="hidden md:block" />
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C59B27] to-[#17135B] dark:from-[#3B82F6] dark:to-cyan-400">Software & Digital</span>
                    </>
                  )}
                </h3>
                
                <div className="space-y-6 text-[#555E75] dark:text-slate-300 text-[17px] leading-relaxed mb-12 max-w-3xl mx-auto font-medium">
                  <p>{s ? s.knowebCollab.description : "Through its collaboration with Knoweb, Sanota can integrate engineering solutions with software, cloud platforms, IoT applications, web and mobile systems, dashboards and enterprise technologies."}</p>
                  <p className="text-[#646C82] dark:text-slate-400">
                    {isAr ? "تتيح هذه الشراكة للعملاء الوصول إلى القدرات الهندسية والرقمية من خلال بيئة عمل موحدة ومنسقة. تظل سانوتا مسؤولة عن فهم وتنسيق المتطلبات الهندسية الشاملة، بينما تساهم Knoweb بالخبرة المتخصصة في تكنولوجيا المعلومات والبرمجيات عند الحاجة." : isJa ? "この提携により、クライアントは単一の協調環境を通じてエンジニアリングとデジタル機能にアクセスできます。Sanotaは全体的な要件の把握と統括を担当し、Knowebは必要に応じて専門的なITおよびソフトウェア機能を提供します。" : isDe ? "Diese Beziehung ermöglicht es Kunden, über eine einzige koordinierte Umgebung auf Ingenieur- und Digitalkapazitäten zuzugreifen. Sanota bleibt für das Verständnis und die Koordination der Gesamtanforderungen verantwortlich, während Knoweb bei Bedarf spezialisierte IT- und Softwarekompetenz beisteuert." : isEs ? "Esta relación permite a los clientes acceder a ingeniería y capacidades digitales a través de un único entorno coordinado. Sanota es responsable de comprender el requerimiento global, mientras que Knoweb aporta experiencia de software e IT especializada." : "This relationship allows clients to access engineering and digital capability through one coordinated solution environment. Sanota remains responsible for understanding and coordinating the overall engineering requirement, while Knoweb contributes specialized IT and software capability where required."}
                  </p>
                </div>
                
                <Link 
                  href="#services-list" 
                  className="inline-flex items-center px-8 py-4 bg-white dark:bg-transparent border border-[#17135B]/20 dark:border-slate-700 text-[#17135B] dark:text-white hover:bg-slate-50 dark:hover:bg-white/5 text-[14px] font-bold uppercase tracking-wider rounded-full shadow-sm transition-all duration-300 group/link"
                >
                  {s ? s.knowebCollab.button : "Explore IoT & Digital Integration"} 
                  <ArrowRight className="ml-3 w-4 h-4 text-[#17135B] dark:text-[#3B82F6] group-hover/link:translate-x-1 transition-all duration-300" />
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Why Work With Sanota */}
        <section className="relative py-10 lg:py-14 bg-transparent overflow-hidden border-t border-slate-200 dark:border-slate-800/40">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#C59B27]/5 dark:bg-[#E8B84B]/5 rounded-full blur-[150px] pointer-events-none -translate-y-1/2" />
          
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-8 lg:mb-12">
              <h2 className="flex items-center justify-center text-[#C59B27] dark:text-[#E8B84B] font-bold tracking-[0.2em] uppercase text-xs mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C59B27] dark:bg-[#E8B84B] mr-3 animate-pulse shadow-[0_0_10px_rgba(197,155,39,0.8)]" />
                {s ? s.whySanota.heading : "Why Work With Sanota?"}
                <span className="w-1.5 h-1.5 rounded-full bg-[#C59B27] dark:bg-[#E8B84B] ml-3 animate-pulse shadow-[0_0_10px_rgba(197,155,39,0.8)]" />
              </h2>
              <h3 className="text-4xl md:text-5xl font-black text-[#17135B] dark:text-white mb-6 leading-tight">
                {isAr ? (
                  <>
                    قدرة عملية تنفيذية عبر <br className="hidden md:block" />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C59B27] to-[#17135B] dark:from-[#E8B84B] dark:to-amber-600">كامل دورة حياة الحلول الهندسية</span>
                  </>
                ) : isJa ? (
                  <>
                    ソリューションのライフサイクル全体にわたる <br className="hidden md:block" />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C59B27] to-[#17135B] dark:from-[#E8B84B] dark:to-amber-600">実践的な実行能力</span>
                  </>
                ) : isDe ? (
                  <>
                    Praktische Leistungsfähigkeit über den <br className="hidden md:block" />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C59B27] to-[#17135B] dark:from-[#E8B84B] dark:to-amber-600">gesamten Lösungslebenszyklus</span>
                  </>
                ) : isEs ? (
                  <>
                    Capacidad práctica a lo largo de <br className="hidden md:block" />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C59B27] to-[#17135B] dark:from-[#E8B84B] dark:to-amber-600">todo el ciclo de vida de la solución</span>
                  </>
                ) : (
                  <>
                    Practical Capability Across the <br className="hidden md:block" />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C59B27] to-[#17135B] dark:from-[#E8B84B] dark:to-amber-600">Complete Solution Lifecycle</span>
                  </>
                )}
              </h3>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
              {(s ? s.whySanota.reasons : [
                "Multi-disciplinary engineering and technology capability", 
                "Solutions designed around real operational requirements", 
                "Experience supporting different industries in Sri Lanka", 
                "Custom machinery, product and system development", 
                "Integration of engineering, automation, IoT and software", 
                "Modernization of existing machinery and systems", 
                "Project execution from design to commissioning", 
                "AMC support for Sanota-built and eligible third-party systems", 
                "Training and long-term technical assistance", 
                "One coordinated point of responsibility"
              ]).map((point, idx) => (
                <motion.div 
                  key={idx} 
                  initial={{ opacity: 0, y: 20 }} 
                  whileInView={{ opacity: 1, y: 0 }} 
                  viewport={{ once: true, margin: "-50px" }} 
                  transition={{ delay: idx * 0.05, duration: 0.5 }} 
                  className="group relative flex items-start bg-white dark:bg-[#0A101A]/80 backdrop-blur-md border border-slate-200 dark:border-slate-800/60 hover:border-[#C59B27]/40 dark:hover:border-[#E8B84B]/30 rounded-2xl p-6 shadow-sm dark:shadow-none transition-all duration-500 hover:-translate-y-1 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative w-2 h-2 rounded-full bg-slate-300 dark:bg-slate-700 group-hover:bg-[#C59B27] dark:group-hover:bg-[#E8B84B] mt-1.5 mr-4 shrink-0 transition-colors duration-500">
                    <div className="absolute inset-0 bg-[#C59B27] dark:bg-[#E8B84B] rounded-full blur-[4px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                  <p className="relative z-10 text-[#17135B] dark:text-slate-300 text-[14.5px] font-semibold leading-relaxed group-hover:text-[#C59B27] dark:group-hover:text-white transition-colors duration-500">{point}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Completed Work */}
        <section className="relative py-10 lg:py-14 bg-transparent overflow-hidden border-t border-slate-200 dark:border-slate-800/40">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h2 className="flex items-center justify-center text-[#C59B27] dark:text-[#E8B84B] font-bold tracking-[0.2em] uppercase text-xs mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C59B27] dark:bg-[#E8B84B] mr-3 animate-pulse shadow-[0_0_10px_rgba(197,155,39,0.8)]" />
              {isAr ? "المشاريع المنجزة" : isJa ? "納入実績・プロジェクト事例" : isDe ? "Abgeschlossene Arbeiten" : isEs ? "Trabajos completados" : "Completed Work"}
              <span className="w-1.5 h-1.5 rounded-full bg-[#C59B27] dark:bg-[#E8B84B] ml-3 animate-pulse shadow-[0_0_10px_rgba(197,155,39,0.8)]" />
            </h2>
            <h3 className="text-4xl md:text-5xl font-black text-[#17135B] dark:text-white mb-8 leading-tight">
              {isAr ? (
                <>
                  تعرف على كيفية تطبيق سانوتا <br className="hidden md:block" />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C59B27] to-[#17135B] dark:from-[#E8B84B] dark:to-amber-600">لهذه الخدمات الهندسية</span>
                </>
              ) : isJa ? (
                <>
                  Sanotaのサービスがどのように <br className="hidden md:block" />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C59B27] to-[#17135B] dark:from-[#E8B84B] dark:to-amber-600">適用されるかをご覧ください</span>
                </>
              ) : isDe ? (
                <>
                  Erfahren Sie, wie Sanota <br className="hidden md:block" />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C59B27] to-[#17135B] dark:from-[#E8B84B] dark:to-amber-600">diese Dienste einsetzt</span>
                </>
              ) : isEs ? (
                <>
                  Vea cómo Sanota aplica <br className="hidden md:block" />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C59B27] to-[#17135B] dark:from-[#E8B84B] dark:to-amber-600">estos servicios</span>
                </>
              ) : (
                <>
                  See How Sanota Applies <br className="hidden md:block" />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C59B27] to-[#17135B] dark:from-[#E8B84B] dark:to-amber-600">These Services</span>
                </>
              )}
            </h3>
            <div className="space-y-4 text-[#555E75] dark:text-slate-400 text-lg leading-relaxed mb-12 max-w-3xl mx-auto">
              {isAr ? (
                <>
                  <p>استكشف أمثلة لتطوير الآلات، والأتمتة الصناعية، والزراعة الذكية، وتكامل إنترنت الأشياء، وتحسين العمليات، والتحديث، والدعم الفني.</p>
                  <p>توضح قصة كل مشروع التحدي المطروح، والخدمات المنسقة، والحل العملي النهائي الذي تم تحقيقه.</p>
                </>
              ) : isJa ? (
                <>
                  <p>機械開発、産業オートメーション、スマート農業、IoT統合、プロセス改善、近代化、および技術サポートの事例をご覧ください。</p>
                  <p>各プロジェクトストーリーでは、課題、結集されたサービス、そして実現した機能的なソリューションを紹介しています。</p>
                </>
              ) : isDe ? (
                <>
                  <p>Entdecken Sie Beispiele für Maschinenbau, industrielle Automatisierung, intelligente Landwirtschaft, IoT-Integration, Prozessoptimierung, Modernisierung und technischen Support.</p>
                  <p>Jede Projektgeschichte veranschaulicht die Herausforderung, die kombinierten Dienstleistungen und die resultierende betriebsfähige Lösung.</p>
                </>
              ) : isEs ? (
                <>
                  <p>Explore ejemplos de desarrollo de maquinaria, automatización industrial, agricultura inteligente, integración de IoT, mejora de procesos, modernización y soporte técnico.</p>
                  <p>Cada historia de proyecto demuestra el desafío, los servicios reunidos y la solución funcional resultante.</p>
                </>
              ) : (
                <>
                  <p>Explore examples of machinery development, industrial automation, smart agriculture, IoT integration, process improvement, modernization and technical support.</p>
                  <p>Each project story demonstrates the challenge, the services brought together and the resulting working solution.</p>
                </>
              )}
            </div>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-5">
              <Link 
                href="/media" 
                className="inline-flex items-center px-8 py-4 bg-[#E5A93C] hover:bg-[#F0B74C] text-[#111424] font-bold rounded-xl transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-1 group w-full sm:w-auto justify-center"
              >
                {isAr ? "عرض المشاريع المنجزة" : isJa ? "納入実績を見る" : isDe ? "Abgeschlossene Arbeiten ansehen" : isEs ? "Ver trabajos completados" : "View Completed Work"} 
                <span className="ml-3 w-8 h-8 rounded-full bg-[#111424]/10 flex items-center justify-center group-hover:bg-[#111424]/20 transition-colors">
                  <ArrowRight className="w-4 h-4 text-[#111424] group-hover:translate-x-0.5 transition-transform" />
                </span>
              </Link>
              <Link 
                href="/media" 
                className="inline-flex items-center px-8 py-4 bg-white dark:bg-[#0F1523]/80 backdrop-blur-md border border-[#17135B]/20 dark:border-slate-700 text-[#17135B] dark:text-white hover:bg-slate-50 dark:hover:bg-slate-800 text-[15px] font-bold rounded-xl transition-all duration-300 shadow-sm w-full sm:w-auto justify-center"
              >
                {isAr ? "زيارة المركز الإعلامي" : isJa ? "メディアセンターを見る" : isDe ? "Medienbereich besuchen" : isEs ? "Visitar centro de medios" : "Visit the Media Centre"}
              </Link>
            </div>
          </div>
        </section>

        {/* Engineering FAQ & Technical Capabilities Section (Answer-First GEO & Search Engine Optimization) */}
        <section id="faq" className="py-16 bg-white/40 dark:bg-[#0B1220]/40 border-t border-slate-200 dark:border-slate-800/60">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 dark:bg-[#E8B84B]/10 border border-amber-500/30 dark:border-[#E8B84B]/30 mb-4">
                <HelpCircle className="w-4 h-4 text-[#C59B27] dark:text-[#E8B84B]" />
                <span className="text-xs font-bold uppercase tracking-widest text-[#9A7210] dark:text-[#E8B84B]">
                  {(servicesFaqData[language] || servicesFaqData.en).badge}
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#17135B] dark:text-white tracking-tight mb-4">
                {(servicesFaqData[language] || servicesFaqData.en).heading}
              </h2>
              <p className="text-[#555E75] dark:text-slate-300 text-base max-w-2xl mx-auto">
                {(servicesFaqData[language] || servicesFaqData.en).description}
              </p>
            </div>

            <div className="space-y-4 max-w-4xl mx-auto">
              {(servicesFaqData[language] || servicesFaqData.en).items.map((faq, idx) => {
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

        {/* Final CTA */}
        <section className="relative py-10 lg:py-14 bg-transparent overflow-hidden border-t border-slate-200 dark:border-slate-800/40">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#C59B27]/5 dark:bg-[#E8B84B]/5 rounded-full blur-[150px] pointer-events-none" />
          
          <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8 }}
              className="p-10 md:p-16 rounded-[40px] bg-white/95 dark:bg-[#0A101A]/60 backdrop-blur-xl border border-slate-200 dark:border-slate-800/50 shadow-xl dark:shadow-2xl group hover:border-[#C59B27]/40 dark:hover:border-[#E8B84B]/30 transition-all duration-700"
            >
              <h2 className="flex items-center justify-center text-[#C59B27] dark:text-[#E8B84B] font-bold tracking-[0.2em] uppercase text-xs mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C59B27] dark:bg-[#E8B84B] mr-3 animate-pulse shadow-[0_0_10px_rgba(197,155,39,0.8)]" />
                {isAr ? "هل أنت مستعد للبدء؟" : isJa ? "始める準備はできましたか？" : isDe ? "Bereit zu starten?" : isEs ? "¿Listo para empezar?" : "Ready To Start?"}
                <span className="w-1.5 h-1.5 rounded-full bg-[#C59B27] dark:bg-[#E8B84B] ml-3 animate-pulse shadow-[0_0_10px_rgba(197,155,39,0.8)]" />
              </h2>
              
              <h2 className="text-4xl md:text-5xl lg:text-[52px] font-black text-[#17135B] dark:text-white mb-8 leading-tight">
                {isAr ? (
                  <>
                    ما هو التحدي الذي يمكننا <br className="hidden sm:block" />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C59B27] to-[#17135B] dark:from-[#E8B84B] dark:to-amber-600">مساعدتكم في حله؟</span>
                  </>
                ) : isJa ? (
                  <>
                    どのような課題の解決を <br className="hidden sm:block" />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C59B27] to-[#17135B] dark:from-[#E8B84B] dark:to-amber-600">サポートできますか？</span>
                  </>
                ) : isDe ? (
                  <>
                    Welche Herausforderung dürfen wir <br className="hidden sm:block" />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C59B27] to-[#17135B] dark:from-[#E8B84B] dark:to-amber-600">für Sie lösen?</span>
                  </>
                ) : isEs ? (
                  <>
                    ¿Qué reto podemos <br className="hidden sm:block" />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C59B27] to-[#17135B] dark:from-[#E8B84B] dark:to-amber-600">ayudarle a resolver?</span>
                  </>
                ) : (
                  <>
                    What Challenge Can <br className="hidden sm:block" />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C59B27] to-[#17135B] dark:from-[#E8B84B] dark:to-amber-600">We Help You Solve?</span>
                  </>
                )}
              </h2>
              <p className="text-[#555E75] dark:text-slate-300 text-[17px] mb-12 leading-relaxed max-w-3xl mx-auto font-medium">
                {s ? s.cta.description : "Tell us what is not working, what needs improvement or what you want to develop. Sanota will review the requirement and guide you towards the appropriate engineering, automation, digital, implementation or maintenance solution."}
              </p>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-5 mb-12">
                <Link 
                  href="/tell-us-your-challenge" 
                  className="inline-flex items-center px-8 py-4 bg-[#E5A93C] hover:bg-[#F0B74C] text-[#111424] font-bold rounded-xl transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-1 group/btn w-full sm:w-auto justify-center"
                >
                  {s ? s.cta.primaryButton : "Tell Us Your Challenge"} 
                  <span className="ml-3 w-8 h-8 rounded-full bg-[#111424]/10 flex items-center justify-center group-hover/btn:bg-[#111424]/20 transition-colors">
                    <ArrowRight className="w-4 h-4 text-[#111424] group-hover/btn:translate-x-0.5 transition-transform" />
                  </span>
                </Link>
                <Link 
                  href="/contact" 
                  className="inline-flex items-center px-8 py-4 bg-white dark:bg-[#0F1523]/80 backdrop-blur-md border border-[#17135B]/20 dark:border-slate-700 text-[#17135B] dark:text-white hover:bg-slate-50 dark:hover:bg-slate-800 text-[15px] font-bold rounded-xl shadow-sm transition-all duration-300 w-full sm:w-auto justify-center"
                >
                  {s ? s.cta.secondaryButton : "Contact Sanota"}
                </Link>
              </div>
              <p className="inline-flex items-center px-6 py-2.5 bg-[#FAF8F5] dark:bg-[#0B1220]/50 rounded-full border border-slate-200 dark:border-slate-700/50 text-[#555E75] dark:text-slate-400 text-[13px] uppercase tracking-widest font-semibold transition-colors">
                {s ? s.cta.closingLine : "From operational challenge to integrated engineering solution."}
              </p>
            </motion.div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
