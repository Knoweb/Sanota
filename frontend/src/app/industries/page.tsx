"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FeaturedProjectCardCopy from "@/components/FeaturedProjectCardCopy";
import VideosAndDemonstrations from "@/components/VideosAndDemonstrations";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, PlayCircle, Plus, Minus, CheckCircle2, Factory, Sprout, Coffee, Leaf, Truck, Zap, Recycle, Building2, Stethoscope, Lightbulb, Search, PenTool, Wrench, Network, Play, RefreshCw, ShieldCheck, TrendingUp } from "lucide-react";

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
      "Greenhouse engineering and automation", "Irrigation and fertigation systems", "Hydroponic and aquaponic systems",
      "Soil and coir-based cultivation systems", "Climate and environmental control", "Plant and soil monitoring",
      "Automated dosing and pumping", "Web and mobile dashboards", "Alerts and remote control", "Maintenance and system support"
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
      "Withering systems", "Tea rollers", "Green and black tea dryers", "Mini tea-factory systems",
      "Specialty tea-processing machinery", "Airflow and environmental control", "Automated louver control",
      "Energy and process monitoring", "Plantation and smallholder software", "Machinery modernization and AMC support"
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
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeAdditional, setActiveAdditional] = useState<number | null>(0);
  const [activeSupportTab, setActiveSupportTab] = useState<'modernization' | 'amc'>('modernization');

  return (
    <div className="flex flex-col min-h-screen bg-transparent">
      <Header />
      <main className="flex-grow">
        
        {/* 1. Page Hero */}
        <section className="relative pt-32 lg:pt-48 pb-20 lg:pb-32 overflow-hidden border-b border-slate-800 bg-transparent min-h-[60vh] lg:min-h-[70vh] flex flex-col justify-center">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
            style={{ backgroundImage: "url('/industries_hero_bg.jpg')" }}
          />
          <div className="absolute inset-0 bg-[#050B14]/60 z-0" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050B14]/20 to-[#050B14]/90 z-0" />
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-[#E8B84B] font-bold tracking-widest uppercase text-sm mb-5"
            >
              Industries We Support
            </motion.p>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 }}
              className="text-4xl sm:text-6xl font-black text-white tracking-tight mb-8 leading-tight max-w-5xl mx-auto"
            >
              Integrated Engineering Across <span className="text-[#E8B84B]">Diverse Operational Environments</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-slate-300 max-w-4xl mx-auto mb-6 font-medium leading-relaxed"
            >
              Sanota helps organizations design, develop, automate, modernize and maintain machinery, processes and operational systems across a wide range of industries.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="text-lg text-slate-400 max-w-4xl mx-auto mb-10 leading-relaxed"
            >
              We combine engineering, automation, IoT and software to develop practical solutions around the requirements of each industry and customer.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-col sm:flex-row justify-center gap-4"
            >
              <a href="#industries" className="px-8 py-4 bg-[#E8B84B] hover:bg-[#d4a643] text-[#0B1220] font-bold rounded-lg transition-colors flex items-center justify-center">
                Select Your Industry <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <Link href="/tell-us-your-challenge" className="px-8 py-4 bg-[#131C2E]/80 hover:bg-slate-800 text-white font-bold rounded-lg border border-slate-700 transition-colors flex items-center justify-center">
                Discuss Your Requirement
              </Link>
            </motion.div>
          </div>
        </section>

        {/* 2. Industry-Focused Engineering */}
        <section className="relative py-24 bg-[#0B1220] overflow-hidden">
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#131C2E]/40 to-transparent opacity-50 pointer-events-none" />
          
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
              
              <div className="lg:col-span-7">
                <div className="inline-block px-5 py-2 rounded-full border border-[#E8B84B]/30 bg-[#E8B84B]/10 mb-8">
                  <h2 className="text-[#E8B84B] font-bold tracking-widest uppercase text-xs">Industry-Focused Engineering</h2>
                </div>
                <h3 className="text-4xl lg:text-5xl font-bold text-white mb-8 leading-tight">Solutions Developed Around How Your Industry Operates</h3>
                <p className="text-slate-300 text-xl leading-relaxed mb-8">
                  Every industry has different processes, operating conditions and technical priorities. A solution that works in one environment may not be suitable for another.
                </p>
                <div className="h-px w-24 bg-gradient-to-r from-[#E8B84B] to-transparent mb-8" />
                <p className="text-white text-lg font-semibold mb-8">Sanota begins by understanding your operation, including:</p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-8 mb-8">
                  {operationalUnderstanding.map((item, idx) => (
                    <div key={idx} className="flex items-center group">
                      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#131C2E] border border-slate-700 group-hover:border-[#E8B84B] transition-colors shrink-0 mr-4 shadow-sm shadow-black/50">
                        <div className="w-2 h-2 rounded-full bg-[#E8B84B] group-hover:scale-150 transition-transform" />
                      </div>
                      <span className="text-slate-300 text-base font-medium group-hover:text-white transition-colors leading-snug">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-5 flex items-center justify-center">
                <div className="glowing-card relative w-full bg-gradient-to-br from-[#131C2E] to-[#0B1220] border border-slate-700/50 rounded-3xl p-8 lg:p-10 flex flex-col justify-center overflow-hidden group hover:border-[#E8B84B]/40 transition-colors shadow-2xl">
                  {/* Decorative Quote Icon */}
                  <div className="absolute -top-6 -right-6 p-8 opacity-[0.03] text-white group-hover:text-[#E8B84B] transition-colors duration-500 transform group-hover:scale-110">
                    <svg width="200" height="200" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                  </div>
                  
                  <p className="text-white text-2xl lg:text-3xl font-medium leading-relaxed relative z-10">
                    We then combine the appropriate engineering and technology capabilities to develop a <span className="text-[#E8B84B] font-bold">practical and scalable solution.</span>
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 3. Priority Industries (Interactive) */}
        <section id="industries" className="relative py-24 min-h-[90vh] flex items-center overflow-hidden bg-[#050B14]">
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
              {priorityIndustries.map((ind, idx) => (
                <button 
                  key={idx} 
                  onClick={() => setActiveIndex(idx)}
                  onMouseEnter={() => setActiveIndex(idx)}
                  className={`text-left text-3xl sm:text-4xl lg:text-[40px] font-black uppercase tracking-widest transition-all duration-300 border-l-4 pl-6 py-2
                    ${idx === activeIndex 
                      ? 'text-white border-[#E8B84B] translate-x-2' 
                      : 'text-slate-600 border-transparent hover:text-slate-400'}`}
                >
                  {ind.shortTitle}
                </button>
              ))}
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
                      {priorityIndustries[activeIndex].title}
                    </h3>
                  </div>
                  <p className="text-[#2E5EAA] font-bold text-lg mb-6 tracking-wide">
                    {priorityIndustries[activeIndex].subtitle}
                  </p>
                  <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-2xl">
                    {priorityIndustries[activeIndex].desc}
                  </p>
                  
                  <p className="text-slate-500 font-bold text-xs uppercase tracking-widest mb-4">Our support can include:</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6 mb-10 max-w-3xl">
                    {priorityIndustries[activeIndex].points.map((pt, i) => (
                      <div key={i} className="flex items-start">
                        <CheckCircle2 className="w-5 h-5 text-[#E8B84B] mr-3 shrink-0" />
                        <span className="text-slate-300 font-medium">{pt}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Link href="#" className="inline-flex items-center px-8 py-4 bg-[#E8B84B] hover:bg-[#d4a643] text-[#0B1220] font-bold rounded-lg transition-colors text-sm shadow-lg shadow-[#E8B84B]/20">
                    {priorityIndustries[activeIndex].buttonText} <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </motion.div>
              </AnimatePresence>
            </div>
            
          </div>
        </section>

        {/* 4. Additional Industries (Premium Accordion Layout) */}
        <section className="py-24 bg-[#0B1220] border-t border-slate-800/50 bg-transparent relative overflow-hidden">
          {/* Subtle background ambient light */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#2E5EAA]/5 blur-[120px] rounded-full pointer-events-none -z-10" />
          
          <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-[#E8B84B] font-bold tracking-widest uppercase text-sm mb-4">Additional Industries</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">Broad Operational Support</h3>
              <p className="text-slate-400 text-[15px] max-w-2xl mx-auto leading-relaxed">
                Beyond our core sectors, Sanota provides highly specialized engineering and digital integration for a variety of demanding operational environments.
              </p>
            </div>

            <div className="flex flex-col space-y-2">
              {additionalIndustries.map((ind, idx) => {
                const isActive = activeAdditional === idx;
                
                return (
                  <div 
                    key={idx} 
                    className={`border-b border-slate-800/60 transition-colors duration-500 ${isActive ? 'border-[#E8B84B]/30' : 'hover:border-slate-600'}`}
                  >
                    <button
                      onClick={() => setActiveAdditional(isActive ? null : idx)}
                      className="w-full py-6 flex items-center justify-between text-left group focus:outline-none"
                    >
                      <div className="flex items-center space-x-6">
                        <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500 ${isActive ? 'bg-[#E8B84B]/10 border border-[#E8B84B]/30 shadow-[0_0_15px_rgba(232,184,75,0.2)]' : 'bg-slate-800/30 border border-slate-700/50 group-hover:bg-slate-800'}`}>
                          <ind.icon className={`w-5 h-5 transition-colors duration-500 ${isActive ? 'text-[#E8B84B]' : 'text-slate-400 group-hover:text-white'}`} />
                        </div>
                        <h4 className={`text-xl sm:text-2xl font-bold transition-colors duration-500 ${isActive ? 'text-white' : 'text-slate-300 group-hover:text-white'}`}>
                          {ind.title}
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
                            <p className="text-[#2E5EAA] font-bold text-sm mb-4 uppercase tracking-wide">{ind.subtitle}</p>
                            <p className="text-slate-400 text-[15px] leading-relaxed mb-6 max-w-3xl">
                              {ind.desc}
                            </p>
                            <Link 
                              href="#" 
                              className="inline-flex items-center text-[13px] font-bold uppercase tracking-widest text-[#E8B84B] hover:text-white transition-colors group/link"
                            >
                              {ind.button} <ArrowRight className="ml-2 w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
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
        <section className="py-24 bg-[#050B14] border-t border-slate-800/50 bg-transparent">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 max-w-3xl mx-auto">
              <h2 className="text-[#E8B84B] font-bold tracking-widest uppercase text-sm mb-4">How Sanota Helps Industries</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">Support Across the Complete Engineering Journey</h3>
              <p className="text-slate-400 text-lg leading-relaxed">
                Sanota’s support is not limited to supplying a machine or individual technology. Depending on the requirement, we can assist across the complete solution lifecycle.
              </p>
            </div>

            <div className="relative mt-24 mb-20">
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
                {engineeringJourney.map((step, idx) => (
                  <div key={idx} className="flex flex-col items-center text-center group relative">
                    
                    {/* Elegant Step Indicator */}
                    <div className="absolute -top-6 text-[11px] font-black tracking-[0.2em] text-[#2E5EAA] opacity-0 group-hover:opacity-100 group-hover:-translate-y-1 transition-all duration-500">
                      PHASE 0{idx + 1}
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
                      <div className="absolute inset-[1px] rounded-[17px] bg-[#0B1220] group-hover:bg-[#131C2E] transition-colors duration-500 z-20 overflow-hidden">
                        {/* Subtle sweep gradient inside the diamond */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
                      </div>
                      
                      <div className="-rotate-45 relative z-30">
                        <step.icon className="w-8 h-8 text-[#E8B84B] group-hover:scale-110 transition-transform duration-500" />
                      </div>
                    </div>
                    
                    <h4 className="text-xl font-bold text-white mb-3 group-hover:text-[#E8B84B] transition-colors duration-300">
                      {step.title}
                    </h4>
                    <p className="text-slate-400 text-[14.5px] leading-relaxed max-w-[260px] group-hover:text-slate-300 transition-colors duration-300">
                      {step.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center">
              <Link href="/services" className="inline-flex items-center px-8 py-4 bg-[#E8B84B] hover:bg-[#d4a643] text-[#0B1220] font-bold rounded-lg transition-colors">
                Explore Our Services <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* 6. Engineering and Digital Technology Together (Premium Image Overlay Design) */}
        <section className="py-20 bg-[#050B14] relative overflow-hidden">
          {/* Subtle background ambient light */}
          <div className="absolute top-1/2 right-0 w-1/3 h-[500px] bg-[#2E5EAA]/5 blur-[120px] rounded-full pointer-events-none -translate-y-1/2" />

          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            
            {/* Header Text */}
            <div className="mb-10 max-w-4xl">
               <h2 className="text-[#E8B84B] font-bold tracking-widest uppercase text-sm mb-3">Engineering & Digital Integration</h2>
               <h3 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">Physical Systems Connected with Intelligent Technology</h3>
               <p className="text-slate-400 text-lg leading-relaxed max-w-3xl">
                 Modern industries increasingly require machinery, automation and digital systems to work together. Sanota combines its engineering capabilities with the software and digital expertise of Knoweb, enabling us to develop integrated systems seamlessly.
               </p>
            </div>

            <div className="flex flex-col lg:flex-row items-center relative mt-8">
              
              {/* Left: The High-Tech Image */}
              <div className="w-full lg:w-5/12 h-[350px] lg:h-[500px] relative rounded-[30px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] z-0 group">
                <Image 
                  src="/ind_manufacturing_1788515164504.jpg" 
                  alt="Industrial Machinery and Digital Technology" 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-1000 ease-in-out"
                />
                {/* Tech overlay effects */}
                <div className="absolute inset-0 bg-[#2E5EAA]/20 mix-blend-overlay" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050B14] via-transparent to-[#050B14]/40" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#050B14]/80 via-transparent to-transparent" />
                
                {/* Floating animated data tag on the image */}
                <div className="absolute top-8 left-8 bg-[#0B1220]/80 backdrop-blur-md border border-[#E8B84B]/30 rounded-xl px-4 py-2 flex items-center shadow-lg">
                  <div className="w-2 h-2 rounded-full bg-[#E8B84B] animate-pulse mr-3" />
                  <span className="text-white text-xs font-bold tracking-widest uppercase">System Online</span>
                </div>
              </div>

              {/* Right: The Overlapping Glass Card */}
              <div className="w-full lg:w-7/12 mt-8 lg:mt-0 lg:-ml-20 relative z-10">
                <div className="bg-[#131C2E]/80 backdrop-blur-2xl border border-slate-700/80 rounded-[30px] p-8 lg:p-10 shadow-[0_30px_60px_rgba(0,0,0,0.6)]">
                  
                  <p className="text-white text-xl font-bold leading-relaxed mb-6">
                    This combination helps customers move from isolated machinery and manual records toward more <span className="text-[#E8B84B]">connected and visible operations.</span>
                  </p>
                  
                  <div className="h-px w-full bg-gradient-to-r from-slate-700 to-transparent mb-6" />
                  
                  <p className="text-[#2E5EAA] font-bold uppercase tracking-widest text-xs mb-5">Connected Solutions Incorporating:</p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6 mb-8">
                    {digitalTechList.map((tech, idx) => (
                      <div key={idx} className="flex items-center group cursor-default">
                        <div className="w-6 h-6 rounded-full bg-[#0B1220] border border-slate-700 group-hover:border-[#E8B84B]/60 flex items-center justify-center shrink-0 mr-4 transition-colors duration-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#2E5EAA] group-hover:text-[#E8B84B] transition-colors duration-300" />
                        </div>
                        <span className="text-slate-300 text-[14.5px] font-medium group-hover:text-white transition-colors duration-300">{tech}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Link href="/services" className="inline-flex items-center px-8 py-4 bg-[#E8B84B] hover:bg-[#d4a643] text-[#0B1220] font-bold rounded-xl transition-all shadow-[0_10px_20px_rgba(232,184,75,0.2)] hover:shadow-[0_15px_30px_rgba(232,184,75,0.4)] hover:-translate-y-1">
                    Explore Automation & IoT <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>

                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 7 & 8. Lifecycle Support (Interactive Tabs) */}
        <section className="py-24 bg-[#0B1220] border-t border-slate-800/50 bg-transparent">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-[#E8B84B] font-bold tracking-widest uppercase text-sm mb-4">Lifecycle & Operations Support</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">Sustaining and Improving Critical Systems</h3>
              <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                Beyond new system development, Sanota ensures your existing machinery and infrastructure continue to operate reliably and efficiently.
              </p>
            </div>

            {/* Custom Tabs */}
            <div className="flex justify-center mb-12">
              <div className="bg-[#131C2E]/80 backdrop-blur-md border border-slate-700/80 p-1.5 rounded-2xl inline-flex relative shadow-[0_10px_30px_rgba(0,0,0,0.5)] min-w-[320px] sm:min-w-[400px]">
                <button
                  onClick={() => setActiveSupportTab('modernization')}
                  className={`relative z-10 w-1/2 py-3.5 rounded-xl font-bold transition-colors duration-300 flex items-center justify-center ${activeSupportTab === 'modernization' ? 'text-[#0B1220]' : 'text-slate-400 hover:text-white'}`}
                >
                  <RefreshCw className="w-4 h-4 mr-2 hidden sm:block" /> Modernization
                </button>
                <button
                  onClick={() => setActiveSupportTab('amc')}
                  className={`relative z-10 w-1/2 py-3.5 rounded-xl font-bold transition-colors duration-300 flex items-center justify-center ${activeSupportTab === 'amc' ? 'text-[#0B1220]' : 'text-slate-400 hover:text-white'}`}
                >
                  <ShieldCheck className="w-4 h-4 mr-2 hidden sm:block" /> AMC & Support
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
                    className="bg-gradient-to-br from-[#131C2E]/90 to-[#0B1220]/90 backdrop-blur-xl border border-slate-700/60 rounded-[30px] p-8 sm:p-12 overflow-hidden relative shadow-2xl"
                  >
                    <div className="absolute -top-32 -left-32 w-64 h-64 bg-[#E8B84B]/5 blur-[80px] rounded-full pointer-events-none" />
                    
                    <div className="flex flex-col lg:flex-row gap-12 relative z-10 items-center">
                      <div className="w-full lg:w-5/12 flex flex-col">
                        <RefreshCw className="w-12 h-12 text-[#E8B84B] mb-6 opacity-90" />
                        <h3 className="text-3xl font-bold text-white mb-6 leading-tight">Improve Existing Operations Before Replacement</h3>
                        <p className="text-slate-300 leading-relaxed mb-8">
                          Many organizations operate valuable machinery and systems that have become unreliable, inefficient or difficult to maintain. Sanota assesses whether existing assets can be modernized to extend life and reduce costs.
                        </p>
                        <Link href="/contact" className="inline-flex items-center px-6 py-4 bg-white/5 hover:bg-white/10 border border-slate-600 text-white font-bold rounded-xl transition-colors mt-auto self-start">
                          Request Assessment <ArrowRight className="ml-2 w-4 h-4" />
                        </Link>
                      </div>
                      
                      <div className="w-full lg:w-7/12 lg:border-l border-slate-700/50 lg:pl-12">
                        <p className="text-[#E8B84B] font-bold uppercase tracking-widest text-xs mb-6">Modernization approaches include:</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-5 gap-x-6 mb-8">
                          {modernizationImprovements.map((item, idx) => (
                            <div key={idx} className="flex items-start group">
                              <CheckCircle2 className="w-4 h-4 text-[#2E5EAA] group-hover:text-[#E8B84B] mr-3 mt-0.5 shrink-0 transition-colors" />
                              <span className="text-slate-300 text-[14.5px] leading-snug group-hover:text-white transition-colors">{item}</span>
                            </div>
                          ))}
                        </div>
                        <div className="bg-[#0B1220]/50 border border-slate-800 rounded-xl p-5 mt-auto">
                          <p className="text-slate-400 text-[13px] leading-relaxed italic">
                            This approach can extend equipment life, improve reliability and reduce the cost and disruption of complete replacement.
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
                    className="bg-gradient-to-br from-[#131C2E]/90 to-[#0B1220]/90 backdrop-blur-xl border border-slate-700/60 rounded-[30px] p-8 sm:p-12 overflow-hidden relative shadow-2xl"
                  >
                    <div className="absolute -bottom-32 -right-32 w-64 h-64 bg-[#2E5EAA]/10 blur-[80px] rounded-full pointer-events-none" />
                    
                    <div className="flex flex-col lg:flex-row gap-12 relative z-10 items-center">
                      <div className="w-full lg:w-5/12 flex flex-col">
                        <ShieldCheck className="w-12 h-12 text-[#E8B84B] mb-6 opacity-90" />
                        <h3 className="text-3xl font-bold text-white mb-6 leading-tight">Keep Critical Systems Operating Reliably</h3>
                        <p className="text-slate-300 leading-relaxed mb-8">
                          Sanota provides Annual Maintenance Contracts and technical support for Sanota-built systems. We also support eligible third-party equipment following an initial technical and condition assessment.
                        </p>
                        <Link href="/contact" className="inline-flex items-center px-6 py-4 bg-[#E8B84B] hover:bg-[#d4a643] text-[#0B1220] font-bold rounded-xl transition-colors mt-auto self-start shadow-[0_5px_20px_rgba(232,184,75,0.2)]">
                          Request AMC Info <ArrowRight className="ml-2 w-4 h-4" />
                        </Link>
                      </div>
                      
                      <div className="w-full lg:w-7/12 lg:border-l border-slate-700/50 lg:pl-12">
                        <p className="text-[#E8B84B] font-bold uppercase tracking-widest text-xs mb-6">AMC programmes may cover:</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-5 gap-x-6 mb-8">
                          {amcCoverage.map((item, idx) => (
                            <div key={idx} className="flex items-start group">
                              <div className="w-1.5 h-1.5 rounded-full bg-[#2E5EAA] group-hover:bg-[#E8B84B] mr-3 mt-2 shrink-0 transition-colors" />
                              <span className="text-slate-300 text-[14.5px] leading-snug group-hover:text-white transition-colors">{item}</span>
                            </div>
                          ))}
                        </div>
                        <div className="bg-[#0B1220]/50 border border-slate-800 rounded-xl p-5 mt-auto">
                          <p className="text-slate-400 text-[13px] leading-relaxed italic">
                            Each AMC is developed according to the equipment, operating environment, criticality and support requirements of the customer.
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
        <section className="py-12 lg:py-16 relative overflow-hidden bg-[#050B14] border-t border-slate-800/50">
          {/* Dynamic Background with Image and Shader Gradient */}
          {/* Dynamic Background with Guaranteed Visible Animation */}
          <div className="absolute inset-0 z-0 bg-[#050B14] overflow-hidden">
            {/* Highly Visible Animated Background Orbs */}
            <motion.div 
              className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-[#2E5EAA] rounded-full"
              style={{ filter: 'blur(80px)' }}
              animate={{ 
                x: [0, 200, 0],
                y: [0, 100, 0],
                scale: [1, 1.2, 1],
                opacity: [0.5, 0.8, 0.5]
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
                opacity: [0.4, 0.7, 0.4]
              }}
              transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            />

            <motion.div 
              className="absolute top-[30%] left-[40%] w-[400px] h-[400px] bg-[#1E3A8A] rounded-full"
              style={{ filter: 'blur(70px)' }}
              animate={{ 
                x: [-100, 100, -100],
                y: [-50, 50, -50],
                opacity: [0.4, 0.7, 0.4]
              }}
              transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            />
            
            {/* Texture Layer - Extremely subtle so it doesn't block the crazy bright lights */}
            <Image 
              src="/ind_tea_1788515252795.jpg" 
              alt="Industry Partnership Environment" 
              fill 
              className="object-cover opacity-10 pointer-events-none mix-blend-overlay"
            />
          </div>

          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-4xl mx-auto mb-8">
              <h2 className="text-[#E8B84B] font-bold tracking-widest uppercase text-sm mb-3">Collaborative Innovation</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">A Partner for Established and Emerging Industries</h3>
              <div className="bg-[#131C2E]/40 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6 shadow-[0_20px_40px_rgba(0,0,0,0.4)] inline-block relative overflow-hidden">
                {/* Subtle shine on the text box */}
                <div className="absolute top-0 left-[-100%] w-1/2 h-full bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12 animate-[runRight_8s_linear_infinite]" />
                
                <p className="text-slate-300 text-base md:text-lg leading-relaxed max-w-3xl relative z-10">
                  Whether the requirement involves a complete new system, an individual machine, an automation upgrade, a digital platform or ongoing technical support, Sanota can help develop an appropriate path forward.
                </p>
              </div>
            </div>

            <p className="text-center text-slate-500 font-bold uppercase tracking-widest text-xs mb-6">We work with organizations across all stages:</p>

            {/* Floating Badges Grid */}
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 max-w-5xl mx-auto">
              {partnerTypes.map((partner, idx) => (
                <motion.div 
                  key={idx} 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: idx * 0.05, duration: 0.6, type: "spring", stiffness: 100 }}
                  whileHover={{ y: -5, scale: 1.05 }}
                  className="bg-[#131C2E]/60 backdrop-blur-xl border border-slate-700/50 hover:border-[#E8B84B]/50 hover:bg-[#131C2E] px-6 py-4 rounded-full shadow-[0_10px_20px_rgba(0,0,0,0.3)] hover:shadow-[0_15px_30px_rgba(232,184,75,0.15)] transition-all cursor-default flex items-center group"
                >
                  <div className="relative mr-3 flex items-center justify-center w-2 h-2 shrink-0">
                    <motion.div 
                      className="absolute inset-0 rounded-full bg-[#E8B84B]"
                      animate={{ 
                        boxShadow: ['0 0 0px rgba(232,184,75,0)', '0 0 12px rgba(232,184,75,0.9)', '0 0 0px rgba(232,184,75,0)'],
                        opacity: [0.3, 1, 0.3]
                      }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: idx * 0.15 }}
                    />
                    <div className="relative w-full h-full rounded-full bg-[#E8B84B] group-hover:bg-white transition-colors" />
                  </div>
                  <span className="text-slate-300 group-hover:text-white font-medium text-sm sm:text-[15px] transition-colors">{partner}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 10. Call to Action (Sleek Edge-to-Edge Animated Design) */}
        <section className="py-20 relative overflow-hidden bg-[#02050A] border-t border-slate-900">
          
          {/* Animated Scanning Laser Lines */}
          <div className="absolute inset-0 z-0 opacity-60">
            {/* Horizontal scanning line */}
            <motion.div 
              className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#E8B84B] to-transparent shadow-[0_0_15px_rgba(232,184,75,0.8)]"
              animate={{ top: ['0%', '100%', '0%'] }}
              transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            />
            {/* Vertical scanning line */}
            <motion.div 
              className="absolute top-0 bottom-0 left-1/3 w-[2px] bg-gradient-to-b from-transparent via-[#2E5EAA] to-transparent shadow-[0_0_15px_rgba(46,94,170,0.8)]"
              animate={{ left: ['0%', '100%', '0%'] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
          </div>

          {/* Massive Scrolling Background Text */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] overflow-hidden z-0 pointer-events-none opacity-20 flex mix-blend-screen">
            <motion.h2 
              className="text-[12vw] font-black text-transparent whitespace-nowrap"
              style={{ WebkitTextStroke: '2px #E8B84B' }}
              animate={{ x: [0, -1000] }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            >
              TAKE ACTION • INNOVATE • MODERNIZE • TAKE ACTION • INNOVATE • MODERNIZE
            </motion.h2>
          </div>

          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h3 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight tracking-tight">
                What Does Your Industry <br className="hidden md:block"/> Need to <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E8B84B] to-[#F1D08A]">Improve?</span>
              </h3>
              
              <p className="text-slate-400 text-lg md:text-xl mb-12 leading-relaxed max-w-3xl mx-auto font-light">
                Whether it's a production challenge, an inefficient process, an outdated machine, or a new product idea—tell us what you need to achieve. We'll connect you with the appropriate engineering and technology capabilities.
              </p>

              <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-16">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto">
                  <Link href="/tell-us-your-challenge" className="relative group w-full sm:w-auto px-8 py-5 bg-white text-[#0B1220] font-bold rounded-full overflow-hidden transition-all flex items-center justify-center">
                    <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#E8B84B] to-[#d4a643] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <span className="relative z-10 flex items-center">Discuss Your Requirement <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" /></span>
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto">
                  <Link href="/contact" className="w-full sm:w-auto px-8 py-5 bg-transparent hover:bg-white/5 text-white font-bold rounded-full border border-slate-700 hover:border-white transition-all flex items-center justify-center">
                    Request Technical Consultation
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
              <p className="text-slate-600 font-bold text-xs uppercase tracking-widest mb-8">Additional Enquiry Options</p>
              <div className="flex flex-wrap justify-center gap-4 sm:gap-6 max-w-4xl mx-auto">
                {[
                  "Industrial Assessment", 
                  "Modernization Assessment", 
                  "AMC Assessment", 
                  "Product Information", 
                  "Development Partnership"
                ].map((option, idx) => (
                  <motion.div 
                    key={idx}
                    whileHover={{ y: -4, scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="group cursor-pointer"
                  >
                    <Link href="/contact" className="flex items-center gap-3 px-6 py-3 rounded-full border border-slate-800/80 bg-[#0B1220]/40 backdrop-blur-md hover:bg-[#0B1220] hover:border-[#E8B84B]/40 transition-all text-sm font-medium text-slate-400 group-hover:text-white shadow-[0_4px_15px_rgba(0,0,0,0.2)] group-hover:shadow-[0_8px_20px_rgba(232,184,75,0.1)]">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-700 group-hover:bg-[#E8B84B] group-hover:shadow-[0_0_8px_#E8B84B] transition-all" />
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
