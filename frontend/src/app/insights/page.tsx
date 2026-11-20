"use client";

import React, { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import { 
  ArrowRight, 
  ArrowLeft,
  Settings, 
  Cpu, 
  Activity, 
  Sprout, 
  Zap, 
  ShieldCheck, 
  Lightbulb, 
  ClipboardList, 
  ChevronRight, 
  ChevronLeft,
  Download, 
  User, 
  Tag, 
  Calendar, 
  Search, 
  FileText, 
  CheckCircle2, 
  Sparkles,
  HelpCircle,
  ExternalLink
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { insightsES } from "@/locales/es/insights";
import { insightsDE } from "@/locales/de/insights";
import { insightsJA } from "@/locales/ja/insights";
import { HERO_BLUR_DATA } from "@/lib/heroBlurData";
import { getArticles, Article } from "@/lib/api";
import { staticArticles, StaticArticle } from "@/data/articlesData";

interface DomainCategory {
  id: string;
  title: string;
  shortTitle: string;
  desc: string;
  icon: React.ComponentType<{ className?: string }>;
  topics: string[];
  operationalValue: string;
}

const domainCategories: DomainCategory[] = [
  {
    id: "automation",
    title: "Engineering & Industrial Automation",
    shortTitle: "Automation",
    desc: "Understand how custom machinery, smart controls, sensors, and PLC-based automation enhance industrial throughput and consistency.",
    icon: Settings,
    topics: [
      "Identifying processes suitable for automated handling",
      "Selecting appropriate PLC, HMI, and drive architectures",
      "Ensuring machine operator safety and fail-safe interlocking",
      "Minimizing cycle bottlenecks and manual error rates"
    ],
    operationalValue: "Reduces operating expenditure, eliminates batch inconsistencies, and scales production without linear labor increases."
  },
  {
    id: "iot",
    title: "IoT & Digital Transformation",
    shortTitle: "IoT & Digital",
    desc: "Connect physical shop-floor assets to real-time telemetry dashboards, remote alert engines, and centralized ERP systems.",
    icon: Activity,
    topics: [
      "Machinery-to-cloud telemetry and dashboard visualization",
      "Real-time event triggering and predictive anomaly alerts",
      "Sensor bus integration (RS-485, Modbus, MQTT, OPC-UA)",
      "Secure operational data isolation and local caching"
    ],
    operationalValue: "Delivers complete operational transparency, enabling swift diagnostic responses and data-backed management decisions."
  },
  {
    id: "modernization",
    title: "Machinery Modernization & Retrofitting",
    shortTitle: "Modernization",
    desc: "Upgrade legacy equipment through mechanical rebuilds, electrical panel rewiring, and state-of-the-art digital controllers.",
    icon: Cpu,
    topics: [
      "Determining retrofit feasibility vs. full equipment replacement",
      "Phased replacement of obsolete or unserviceable PLCs and drives",
      "Integrating digital telemetry sensors into analog machinery",
      "Extending operational asset lifespan by 10 to 15 years"
    ],
    operationalValue: "Achieves modern machine performance and reliability at a fraction of the capital cost of purchasing new foreign machinery."
  },
  {
    id: "smart-agri",
    title: "Smart Agriculture & Environmental Control",
    shortTitle: "Smart Agri",
    desc: "Deploy precision agriculture through closed-loop automated irrigation, microclimate monitoring, and fertigation systems.",
    icon: Sprout,
    topics: [
      "Automated greenhouse climate control (temperature, humidity, CO2)",
      "Sensor-driven precision irrigation and EC/pH fertigation",
      "Solar-backed remote monitoring for distant farmland",
      "Water resource conservation through closed-loop dosing"
    ],
    operationalValue: "Maximizes yield per hectare, minimizes fertilizer runoff, and safeguards harvests against unpredictable weather swings."
  },
  {
    id: "energy",
    title: "Energy & Resource Efficiency",
    shortTitle: "Energy & Utilities",
    desc: "Monitor power factor, harmonic distortion, fuel consumption, and industrial water usage to curtail operational utility costs.",
    icon: Zap,
    topics: [
      "Sub-metering high-draw inductive motors and compressor banks",
      "VFD integration for variable-load pumps and ventilation fans",
      "Automated leak detection in chilled water and compressed air lines",
      "Utility compliance reporting and carbon-footprint tracking"
    ],
    operationalValue: "Reveals hidden energy waste and typically recovers implementation capital within 6 to 18 months via utility savings."
  },
  {
    id: "lifecycle",
    title: "Maintenance & Asset Lifecycle (AMC)",
    shortTitle: "Maintenance & AMC",
    desc: "Transition from reactive fire-fighting to proactive predictive maintenance with comprehensive Service Level Agreements.",
    icon: ShieldCheck,
    topics: [
      "Structuring multi-tier Annual Maintenance Contracts (AMC)",
      "Establishing predictive vibration, thermal, and oil analysis schedules",
      "Comprehensive spare-parts inventory and obsolescence management",
      "Operator training, SOP creation, and digitized maintenance logging"
    ],
    operationalValue: "Prevents catastrophic equipment downtime, protects production timelines, and sustains machine accuracy over decades."
  },
  {
    id: "innovation",
    title: "Product Development & Prototyping",
    shortTitle: "Innovation & R&D",
    desc: "Transform proprietary concepts from rough engineering sketches into fully functional, production-ready electromechanical prototypes.",
    icon: Lightbulb,
    topics: [
      "Translating functional briefs into 3D CAD mechanical assemblies",
      "Rapid prototyping, PCB fabrication, and firmware development",
      "Rigorous bench testing, stress analysis, and safety compliance",
      "Low-volume pilot runs and manufacturing handover support"
    ],
    operationalValue: "De-risks capital-heavy R&D cycles by validating proof-of-concept units before committing to commercial-scale fabrication."
  }
];

const excludedLegacySlugs = new Set([
  'smart-drainage-system',
  'nerve-stimulator',
  'asmp-food-processing'
]);

export default function InsightsPage() {
  const { language } = useLanguage();
  const isEs = language === "es";
  const isDe = language === "de";
  const isJa = language === "ja";
  const isAr = language === "ar";
  const ins = isJa ? insightsJA : isDe ? insightsDE : isEs ? insightsES : null;

  // Step-by-step Domain Explorer State
  const [activeDomainIdx, setActiveDomainIdx] = useState<number>(0);

  // Article Filters, Search & Pagination State
  const [apiArticles, setApiArticles] = useState<Article[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const articlesPerPage = 6;

  useEffect(() => {
    getArticles(24).then((res) => {
      if (res && res.length > 0) {
        setApiArticles(res);
      }
    });
  }, []);

  // Merge Strapi articles with real student articles (staticArticles), excluding legacy projects
  const allArticles = useMemo(() => {
    // Filter out old legacy demo projects from Strapi
    const validApi = apiArticles.filter((art) => !excludedLegacySlugs.has(art.slug));

    const mappedApi: StaticArticle[] = validApi.map((art) => ({
      id: art.id,
      slug: art.slug,
      title: art.title,
      summary: art.content ? art.content.replace(/<[^>]*>?/gm, '').replace(/[#*_\n]/g, ' ').substring(0, 140) + "..." : "Explore insights on this engineering development.",
      category: art.category || "Engineering",
      author: art.author || "Sanota Team",
      date: art.date || new Date().toISOString(),
      readingTime: "5 min read",
      coverImage: art.coverImage?.url || (
        art.slug === 'role-of-piezoelectric-technology-modern-society' ? '/piezoelectric-technology.jpg' :
        art.slug === 'thermal-imaging-electrical-faults' ? '/thermal-camera-inspection.jpg' :
        art.slug === 'cnc-machining-vs-3d-printing' ? '/cnc-vs-3d-printing.jpg' :
        art.slug === 'smart-manufacturing-sri-lankan-smes' ? '/smart-manufacturing-smes.jpg' :
        art.slug === 'microgreen-greenhouse-monitoring' ? '/microgreen-monitoring.jpg' : '/sanota.png'
      ),
      content: art.content || ""
    }));

    const apiSlugs = new Set(mappedApi.map(a => a.slug));
    const remainingStatics = staticArticles.filter(f => !apiSlugs.has(f.slug) && !excludedLegacySlugs.has(f.slug));
    const merged = [...mappedApi, ...remainingStatics];
    return merged.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  }, [apiArticles]);

  // Dynamic category pills that automatically include any new category added in Strapi
  const categoryPills = useMemo(() => {
    const defaultPills = ["All", "Smart Agriculture", "Automation", "Product Development", "Maintenance & Reliability"];
    const fromArticles = allArticles.map((a) => a.category).filter(Boolean);
    return Array.from(new Set([...defaultPills, ...fromArticles]));
  }, [allArticles]);

  // Filtered articles based on search and category
  const filteredArticles = useMemo(() => {
    return allArticles.filter((item) => {
      const matchesSearch = 
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.category.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesCategory = 
        selectedCategory === "All" || 
        item.category.toLowerCase().includes(selectedCategory.toLowerCase());

      return matchesSearch && matchesCategory;
    });
  }, [allArticles, searchQuery, selectedCategory]);

  // Pagination calculation
  const totalPages = Math.ceil(filteredArticles.length / articlesPerPage) || 1;
  const paginatedArticles = useMemo(() => {
    const startIndex = (currentPage - 1) * articlesPerPage;
    return filteredArticles.slice(startIndex, startIndex + articlesPerPage);
  }, [filteredArticles, currentPage]);

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
    const element = document.getElementById("articles-grid");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const currentDomain = domainCategories[activeDomainIdx];
  const DomainIcon = currentDomain.icon;

  const handleNextDomain = () => {
    setActiveDomainIdx((prev) => (prev + 1) % domainCategories.length);
  };

  const handlePrevDomain = () => {
    setActiveDomainIdx((prev) => (prev - 1 + domainCategories.length) % domainCategories.length);
  };

  return (
    <div className="flex flex-col min-h-screen bg-transparent">
      <Header />

      <main className="flex-grow">
        {/* ========================================================= */}
        {/* HERO SECTION                                             */}
        {/* ========================================================= */}
        <section className="relative pt-24 lg:pt-32 pb-16 overflow-hidden border-b border-slate-200 dark:border-slate-800 bg-transparent min-h-[50vh] flex flex-col justify-center">
          <div className="page-hero-bg">
            <Image
              src="/insights_hero_bg.webp"
              alt="Engineering & Technology Insights Background"
              fill
              priority
              unoptimized
              placeholder="blur"
              blurDataURL={HERO_BLUR_DATA.insights_hero_bg}
              className="object-cover"
            />
          </div>
          <div className="page-hero-overlay" />

          <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#C59B27]/10 dark:bg-[#E8B84B]/10 border border-[#C59B27]/30 dark:border-[#E8B84B]/30 mb-5"
            >
              <Sparkles className="w-4 h-4 text-[#C59B27] dark:text-[#E8B84B]" />
              <span className="text-[#C59B27] dark:text-[#E8B84B] font-bold tracking-wider uppercase text-xs">
                {isJa ? "エンジニアリング＆テクノロジーの知見" : isDe ? "Einblicke in Engineering & Technologie" : isEs ? "Perspectivas de Ingeniería y Tecnología" : "Engineering & Technology Insights"}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 }}
              className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#17135B] dark:text-white tracking-tight mb-6 leading-tight max-w-4xl mx-auto"
            >
              {isJa ? (
                <>産業の進化を支える<span className="text-[#2E5EAA]">実践的エンジニアリング知見</span></>
              ) : isDe ? (
                <>Praktische Einblicke in die Ingenieurwissenschaften für <span className="text-[#2E5EAA]">sich entwickelnde Branchen</span></>
              ) : isEs ? (
                <>Ideas prácticas de ingeniería para <span className="text-[#2E5EAA]">industrias en evolución</span></>
              ) : (
                <>Practical Engineering Insights for <span className="text-[#2E5EAA]">Evolving Industries</span></>
              )}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-base sm:text-lg text-slate-700 dark:text-slate-300 max-w-2xl mx-auto mb-8 font-normal leading-relaxed"
            >
              {ins ? ins.hero.subheading : "Concise engineering perspectives, technical blueprints, and field insights to help organizations make confident operational decisions."}
            </motion.p>

            {/* Quick Action Navigation Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <a
                href="#domain-explorer"
                className="px-6 py-3 bg-[#C59B27] hover:bg-[#B38A22] dark:bg-[#E8B84B] dark:hover:bg-[#d4a643] text-white dark:text-[#0B1220] font-bold text-sm rounded-lg transition-colors flex items-center justify-center shadow-md hover:shadow-lg"
              >
                {isJa ? "テーマ別ステップで見る" : isDe ? "Nach Themen entdecken" : isEs ? "Explorar por Temas" : "Explore Domains Step-by-Step"}
                <ArrowRight className="ml-2 w-4 h-4" />
              </a>
              <a
                href="#articles-grid"
                className="px-6 py-3 bg-white/90 dark:bg-[#131C2E]/80 hover:bg-slate-100 dark:hover:bg-slate-800 text-[#17135B] dark:text-white font-bold text-sm rounded-lg border border-slate-300 dark:border-slate-700 transition-colors flex items-center justify-center shadow-sm"
              >
                {isJa ? "最新の記事を読む" : isDe ? "Neueste Artikel lesen" : isEs ? "Ver Artículos" : "Browse Latest Articles"}
              </a>
            </motion.div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* STEP-BY-STEP DOMAIN EXPLORER                              */}
        {/* Replaces 8 stacked vertical blocks with an interactive UI */}
        {/* ========================================================= */}
        <section id="domain-explorer" className="py-12 lg:py-16 bg-transparent border-b border-slate-200 dark:border-slate-800/60">
          <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <span className="text-[#C59B27] dark:text-[#E8B84B] font-bold tracking-widest uppercase text-xs mb-2 block">
                {isJa ? "インタラクティブ・ガイド" : isDe ? "Interaktiver Leitfaden" : isEs ? "Guía Interactiva" : "Interactive Domain Explorer"}
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-[#17135B] dark:text-white">
                {isJa ? "主要エンジニアリング領域をステップで探す" : isDe ? "Schritt für Schritt nach Themengebieten" : isEs ? "Explore Áreas de Ingeniería Paso a Paso" : "Step Through Our Core Engineering Disciplines"}
              </h2>
              <p className="text-slate-600 dark:text-slate-400 text-sm max-w-xl mx-auto mt-2">
                Click a category below to explore specific technological architectures, scope of work, and operational benefits.
              </p>
            </div>

            {/* Step Selection Tabs / Navigation Bar */}
            <div className="flex items-center justify-start lg:justify-center overflow-x-auto pb-4 gap-2 mb-8 no-scrollbar">
              {domainCategories.map((domain, idx) => {
                const IconComponent = domain.icon;
                const isActive = activeDomainIdx === idx;
                return (
                  <button
                    key={domain.id}
                    onClick={() => setActiveDomainIdx(idx)}
                    className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm whitespace-nowrap transition-all duration-200 border ${
                      isActive
                        ? "bg-[#17135B] dark:bg-[#E8B84B] text-white dark:text-[#0B1220] border-[#17135B] dark:border-[#E8B84B] shadow-md scale-105"
                        : "bg-white/80 dark:bg-[#131C2E]/60 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-800 hover:border-[#C59B27] dark:hover:border-[#E8B84B]"
                    }`}
                  >
                    <IconComponent className={`w-4 h-4 ${isActive ? "text-[#E8B84B] dark:text-[#0B1220]" : "text-slate-500"}`} />
                    <span>{domain.shortTitle}</span>
                  </button>
                );
              })}
            </div>

            {/* Active Domain Step Card (Interactive Display) */}
            <div className="relative bg-white dark:bg-[#131C2E]/60 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-10 shadow-xl overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#C59B27] via-[#2E5EAA] to-[#E8B84B]" />

              <AnimatePresence mode="wait">
                <motion.div
                  key={currentDomain.id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.25 }}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
                >
                  {/* Left Column: Domain Overview */}
                  <div className="lg:col-span-5 flex flex-col">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-2xl bg-amber-500/10 dark:bg-[#E8B84B]/10 border border-amber-500/20 dark:border-[#E8B84B]/20 flex items-center justify-center shrink-0">
                        <DomainIcon className="w-6 h-6 text-[#C59B27] dark:text-[#E8B84B]" />
                      </div>
                      <div>
                        <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                          Step {activeDomainIdx + 1} of {domainCategories.length}
                        </span>
                        <h3 className="text-xl sm:text-2xl font-black text-[#17135B] dark:text-white leading-tight">
                          {currentDomain.title}
                        </h3>
                      </div>
                    </div>

                    <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                      {currentDomain.desc}
                    </p>

                    <div className="bg-slate-50 dark:bg-[#0B1220]/70 rounded-2xl p-4 border border-slate-200/80 dark:border-slate-800/80 mb-6">
                      <h4 className="text-xs font-bold text-[#17135B] dark:text-[#E8B84B] uppercase tracking-wider mb-2 flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5 text-[#C59B27]" /> Operational ROI & Impact
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                        {currentDomain.operationalValue}
                      </p>
                    </div>

                    <div className="flex items-center gap-3">
                      <Link
                        href="/tell-us-your-challenge"
                        className="inline-flex items-center px-5 py-2.5 bg-[#C59B27] hover:bg-[#B38A22] dark:bg-[#E8B84B] dark:hover:bg-[#d4a643] text-white dark:text-[#0B1220] font-bold text-xs sm:text-sm rounded-xl transition-colors shadow-sm"
                      >
                        Consult on This Domain <ArrowRight className="w-4 h-4 ml-1.5" />
                      </Link>
                      <Link
                        href="/contact"
                        className="inline-flex items-center px-4 py-2.5 bg-slate-100 dark:bg-[#0B1220] hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold text-xs sm:text-sm rounded-xl border border-slate-300 dark:border-slate-700 transition-colors"
                      >
                        Contact Engineers
                      </Link>
                    </div>
                  </div>

                  {/* Right Column: Focus Areas & Checklist */}
                  <div className="lg:col-span-7 bg-slate-50 dark:bg-[#0B1220]/50 border border-slate-200 dark:border-slate-800 rounded-2xl p-6">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-4 flex items-center justify-between">
                      <span>Core Technical Topics & Scope</span>
                      <span className="text-[#C59B27] dark:text-[#E8B84B] lowercase">{currentDomain.topics.length} key areas</span>
                    </h4>

                    <div className="space-y-3">
                      {currentDomain.topics.map((topic, tIdx) => (
                        <div key={tIdx} className="flex items-start bg-white dark:bg-[#131C2E]/60 border border-slate-200/60 dark:border-slate-800 rounded-xl p-3.5 shadow-sm">
                          <CheckCircle2 className="w-4 h-4 text-[#C59B27] dark:text-[#E8B84B] mr-3 mt-0.5 shrink-0" />
                          <span className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-medium leading-relaxed">
                            {topic}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Step Navigation Controls */}
                    <div className="flex items-center justify-between pt-6 mt-6 border-t border-slate-200 dark:border-slate-800">
                      <button
                        onClick={handlePrevDomain}
                        className="inline-flex items-center text-xs font-bold text-slate-600 dark:text-slate-400 hover:text-[#17135B] dark:hover:text-white transition-colors"
                      >
                        <ChevronLeft className="w-4 h-4 mr-1" /> Previous Domain
                      </button>

                      <div className="flex items-center gap-1.5">
                        {domainCategories.map((_, dotIdx) => (
                          <button
                            key={dotIdx}
                            onClick={() => setActiveDomainIdx(dotIdx)}
                            className={`w-2.5 h-2.5 rounded-full transition-all ${
                              activeDomainIdx === dotIdx
                                ? "w-6 bg-[#C59B27] dark:bg-[#E8B84B]"
                                : "bg-slate-300 dark:bg-slate-700"
                            }`}
                            aria-label={`Go to domain ${dotIdx + 1}`}
                          />
                        ))}
                      </div>

                      <button
                        onClick={handleNextDomain}
                        className="inline-flex items-center text-xs font-bold text-[#C59B27] dark:text-[#E8B84B] hover:text-[#B38A22] dark:hover:text-[#d4a643] transition-colors"
                      >
                        Next Domain <ChevronRight className="w-4 h-4 ml-1" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* ARTICLES & INSIGHTS GRID (FILTERED & PAGINATED)           */}
        {/* Clean, modular card layout ready for student/intern posts */}
        {/* ========================================================= */}
        <section id="articles-grid" className="py-12 lg:py-16 bg-transparent">
          <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header & Search */}
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
              <div>
                <span className="text-[#C59B27] dark:text-[#E8B84B] font-bold tracking-widest uppercase text-xs mb-2 block">
                  {isJa ? "最新の技術記事" : isDe ? "Neueste Publikationen" : isEs ? "Artículos y Publicaciones" : "Curated Articles & Technical Blogs"}
                </span>
                <h2 className="text-2xl sm:text-4xl font-black text-[#17135B] dark:text-white">
                  {isJa ? "実践エンジニアリング・記事一覧" : isDe ? "Aktuelle Einblicke & Berichte" : isEs ? "Publicaciones de Ingeniería" : "Knowledge Base & Insights Library"}
                </h2>
              </div>

              {/* Search Bar */}
              <div className="relative w-full md:w-80">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search articles or topics..."
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setCurrentPage(1);
                  }}
                  className="w-full bg-white dark:bg-[#131C2E] border border-slate-200 dark:border-slate-800 rounded-xl pl-10 pr-4 py-2.5 text-xs sm:text-sm text-slate-800 dark:text-white placeholder-slate-400 focus:outline-none focus:border-[#C59B27] dark:focus:border-[#E8B84B] shadow-sm transition-colors"
                />
              </div>
            </div>

            {/* Category Filter Pills */}
            <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
              {categoryPills.map((cat) => (
                <button
                  key={cat}
                  onClick={() => {
                    setSelectedCategory(cat);
                    setCurrentPage(1);
                  }}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all whitespace-nowrap ${
                    selectedCategory === cat
                      ? "bg-[#C59B27] dark:bg-[#E8B84B] text-white dark:text-[#0B1220] shadow-sm"
                      : "bg-white dark:bg-[#131C2E] border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:text-[#17135B] dark:hover:text-white"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Articles Grid (Responsive 3 columns) */}
            {paginatedArticles.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-10">
                {paginatedArticles.map((article) => (
                  <article
                    key={article.id}
                    className="bg-white dark:bg-[#131C2E]/60 rounded-2xl overflow-hidden flex flex-col h-full group border border-slate-200 dark:border-slate-800 hover:border-[#C59B27] dark:hover:border-[#E8B84B]/60 transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-1"
                  >
                    <div className="relative h-48 w-full overflow-hidden bg-slate-100 dark:bg-slate-800">
                      <Image
                        src={article.coverImage}
                        alt={article.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full text-[11px] font-semibold text-white">
                        {article.readingTime}
                      </div>
                    </div>

                    <div className="p-5 sm:p-6 flex flex-col flex-grow">
                      <div className="flex items-center text-[11px] text-slate-500 dark:text-slate-400 mb-3 gap-3">
                        <span className="flex items-center font-semibold text-[#2E5EAA] dark:text-[#E8B84B]">
                          <Tag className="w-3 h-3 mr-1" /> {article.category}
                        </span>
                        <span>•</span>
                        <span className="flex items-center">
                          <User className="w-3 h-3 mr-1" /> {article.author}
                        </span>
                      </div>

                      <h3 className="text-base sm:text-lg font-bold text-[#17135B] dark:text-white leading-snug mb-3 group-hover:text-[#C59B27] dark:group-hover:text-[#E8B84B] transition-colors line-clamp-2">
                        {article.title}
                      </h3>

                      <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm leading-relaxed mb-6 flex-grow line-clamp-3">
                        {article.summary}
                      </p>

                      <div className="mt-auto border-t border-slate-100 dark:border-slate-800/80 pt-4 flex items-center justify-between">
                        <span className="flex items-center text-[11px] text-slate-400 font-medium">
                          <Calendar className="w-3 h-3 mr-1 text-slate-400" />
                          {new Date(article.date).toLocaleDateString()}
                        </span>

                        <Link
                          href={`/blog-details/${article.slug}`}
                          className="text-xs font-bold text-[#C59B27] dark:text-[#E8B84B] hover:text-[#17135B] dark:hover:text-white transition-colors flex items-center gap-1 group-hover:translate-x-0.5 duration-200"
                        >
                          Read Article <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              <div className="text-center py-16 bg-white dark:bg-[#131C2E]/40 border border-slate-200 dark:border-slate-800 rounded-2xl mb-10">
                <FileText className="w-10 h-10 text-slate-400 mx-auto mb-3" />
                <h3 className="text-lg font-bold text-[#17135B] dark:text-white mb-1">No articles found</h3>
                <p className="text-slate-500 text-xs sm:text-sm mb-4">Try clearing your search query or picking another category filter.</p>
                <button
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedCategory("All");
                  }}
                  className="px-4 py-2 bg-[#C59B27] dark:bg-[#E8B84B] text-white dark:text-[#0B1220] font-bold text-xs rounded-lg"
                >
                  Reset Filters
                </button>
              </div>
            )}

            {/* Pagination Controls */}
            {totalPages > 1 && (
              <div className="flex items-center justify-center gap-2 pt-4">
                <button
                  onClick={() => handlePageChange(Math.max(currentPage - 1, 1))}
                  disabled={currentPage === 1}
                  className="px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#131C2E] text-xs font-bold text-slate-600 dark:text-slate-300 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-slate-50 dark:hover:bg-slate-800"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>

                {Array.from({ length: totalPages }).map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => handlePageChange(idx + 1)}
                    className={`w-9 h-9 rounded-lg text-xs font-bold transition-colors ${
                      currentPage === idx + 1
                        ? "bg-[#C59B27] dark:bg-[#E8B84B] text-white dark:text-[#0B1220]"
                        : "border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#131C2E] text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800"
                    }`}
                  >
                    {idx + 1}
                  </button>
                ))}

                <button
                  onClick={() => handlePageChange(Math.min(currentPage + 1, totalPages))}
                  disabled={currentPage === totalPages}
                  className="px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#131C2E] text-xs font-bold text-slate-600 dark:text-slate-300 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-slate-50 dark:hover:bg-slate-800"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>
        </section>

        {/* ========================================================= */}
        {/* PRACTICAL ENGINEERING TOOLKITS (COMPACT 3 CARDS)          */}
        {/* Replaces multiple long tables and checklists              */}
        {/* ========================================================= */}
        <section className="py-12 lg:py-16 bg-slate-50/60 dark:bg-[#0B1220]/40 border-t border-slate-200 dark:border-slate-800/60">
          <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <span className="text-[#C59B27] dark:text-[#E8B84B] font-bold tracking-widest uppercase text-xs mb-2 block">
                Engineering Resources
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-[#17135B] dark:text-white">
                Practical Toolkits & Decision Checklists
              </h2>
              <p className="text-slate-600 dark:text-slate-400 text-sm max-w-xl mx-auto mt-2">
                Structured frameworks to evaluate modernization, prepare automation scopes, and formalize lifecycle agreements.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Card 1 */}
              <div className="bg-white dark:bg-[#131C2E]/60 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-8 flex flex-col shadow-sm hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-xl bg-[#C59B27]/10 dark:bg-[#E8B84B]/10 flex items-center justify-center mb-5 text-[#C59B27] dark:text-[#E8B84B]">
                  <Cpu className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-[#17135B] dark:text-white mb-2">
                  Modernization Feasibility Guide
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm leading-relaxed mb-6 flex-grow">
                  Learn how to assess equipment mechanical wear, obsolete PLC components, and determine whether retrofitting yields higher ROI than total replacement.
                </p>
                <Link
                  href="/tell-us-your-challenge"
                  className="inline-flex items-center text-xs font-bold text-[#C59B27] dark:text-[#E8B84B] hover:underline"
                >
                  Request Assessment Framework <ArrowRight className="w-3.5 h-3.5 ml-1" />
                </Link>
              </div>

              {/* Card 2 */}
              <div className="bg-white dark:bg-[#131C2E]/60 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-8 flex flex-col shadow-sm hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-xl bg-[#2E5EAA]/10 flex items-center justify-center mb-5 text-[#2E5EAA]">
                  <Activity className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-[#17135B] dark:text-white mb-2">
                  Industrial IoT Planning Checklist
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm leading-relaxed mb-6 flex-grow">
                  A 7-point roadmap covering sensor selection, bus protocols, cloud network isolation, and configuring high-value anomaly alerts.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center text-xs font-bold text-[#2E5EAA] hover:underline"
                >
                  Explore IoT Implementation <ArrowRight className="w-3.5 h-3.5 ml-1" />
                </Link>
              </div>

              {/* Card 3 */}
              <div className="bg-white dark:bg-[#131C2E]/60 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-8 flex flex-col shadow-sm hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center mb-5 text-[#C59B27] dark:text-[#E8B84B]">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-[#17135B] dark:text-white mb-2">
                  AMC & Reliability Architecture
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm leading-relaxed mb-6 flex-grow">
                  Standard Operating Procedures for multi-vendor industrial asset maintenance, emergency response SLAs, and scheduled preventive overhauls.
                </p>
                <Link
                  href="/tell-us-your-challenge"
                  className="inline-flex items-center text-xs font-bold text-[#C59B27] dark:text-[#E8B84B] hover:underline"
                >
                  Structure an AMC Plan <ArrowRight className="w-3.5 h-3.5 ml-1" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* FOCUSED HIGH-IMPACT CALL TO ACTION                        */}
        {/* ========================================================= */}
        <section className="py-14 bg-gradient-to-br from-[#17135B] to-[#0d0a3d] text-white">
          <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl sm:text-4xl font-black mb-4 tracking-tight">
              Have an Engineering Challenge or Automation Need?
            </h2>
            <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto mb-8 leading-relaxed font-normal">
              You do not need an exhaustive engineering specification to get started. Describe your current setup, operating constraints, and desired outcome — our engineering team will identify the right pathway.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/tell-us-your-challenge"
                className="w-full sm:w-auto px-8 py-3.5 bg-[#C59B27] hover:bg-[#B38A22] text-white font-bold text-sm rounded-xl transition-colors shadow-lg flex items-center justify-center"
              >
                Tell Us Your Challenge <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
              <Link
                href="/contact"
                className="w-full sm:w-auto px-8 py-3.5 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-sm rounded-xl transition-colors flex items-center justify-center"
              >
                Contact Engineering Office
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
