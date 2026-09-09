"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Factory, Sprout, Coffee, Leaf, Truck, Zap, Recycle, Building2, Stethoscope, Lightbulb, Search, PenTool, Wrench, Network, Play, RefreshCw, ShieldCheck, TrendingUp } from "lucide-react";

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

        {/* 4. Additional Industries */}
        <section className="py-24 bg-[#0B1220] border-t border-slate-800/50 bg-transparent">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-[#E8B84B] font-bold tracking-widest uppercase text-sm mb-4">Additional Industries</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-white">Broad Operational Support</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {additionalIndustries.map((ind, idx) => (
                <div key={idx} className="glowing-card bg-[#131C2E]/60 border border-slate-800 rounded-3xl p-8 hover:border-[#2E5EAA]/50 transition-colors flex flex-col">
                  <div className="w-14 h-14 rounded-2xl bg-[#0B1220] border border-slate-700 flex items-center justify-center mb-6">
                    <ind.icon className="w-7 h-7 text-[#E8B84B]" />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">{ind.title}</h4>
                  <p className="text-[#2E5EAA] font-bold text-sm mb-4">{ind.subtitle}</p>
                  <p className="text-slate-400 text-sm leading-relaxed mb-8 flex-grow">{ind.desc}</p>
                  <Link href="#" className="inline-flex items-center text-sm font-bold text-[#E8B84B] hover:text-white transition-colors mt-auto">
                    {ind.button} <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              ))}
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

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {engineeringJourney.map((step, idx) => (
                <div key={idx} className="glowing-card bg-[#131C2E]/40 border border-slate-800 rounded-2xl p-6 relative group hover:-translate-y-1 transition-transform">
                  <div className="absolute top-6 right-6 text-slate-800 font-black text-4xl opacity-50 group-hover:text-slate-700 transition-colors">0{idx + 1}</div>
                  <step.icon className="w-8 h-8 text-[#E8B84B] mb-6 relative z-10" />
                  <h4 className="text-lg font-bold text-white mb-3 relative z-10">{step.title}</h4>
                  <p className="text-slate-400 text-sm leading-relaxed relative z-10">{step.desc}</p>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Link href="/services" className="inline-flex items-center px-8 py-4 bg-[#E8B84B] hover:bg-[#d4a643] text-[#0B1220] font-bold rounded-lg transition-colors">
                Explore Our Services <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* 6. Engineering and Digital Technology Together */}
        <section className="py-24 bg-[#0B1220] border-t border-slate-800/50 bg-transparent">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="glowing-card order-2 lg:order-1 bg-[#131C2E]/60 border border-slate-800 rounded-3xl p-8 sm:p-12">
                <p className="text-white text-xl font-bold leading-relaxed mb-8">
                  This combination helps customers move from isolated machinery and manual records toward more connected and visible operations.
                </p>
                <p className="text-slate-400 font-bold uppercase tracking-widest text-xs mb-6">Connected Solutions Incorporating:</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-2 mb-10">
                  {digitalTechList.map((tech, idx) => (
                    <div key={idx} className="flex items-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#E8B84B] mr-3 shrink-0" />
                      <span className="text-slate-300 text-sm">{tech}</span>
                    </div>
                  ))}
                </div>
                <Link href="/services" className="inline-flex items-center px-6 py-3 bg-[#0B1220] hover:bg-slate-800 border border-slate-700 text-white font-bold rounded-lg transition-colors w-full sm:w-auto justify-center">
                  Explore Automation, IoT & Digital Integration
                </Link>
              </div>

              <div className="order-1 lg:order-2">
                <h2 className="text-[#E8B84B] font-bold tracking-widest uppercase text-sm mb-4">Engineering and Digital Technology Together</h2>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">Physical Systems Connected with Intelligent Technology</h3>
                <p className="text-slate-300 text-lg leading-relaxed mb-6">
                  Modern industries increasingly require machinery, automation and digital systems to work together.
                </p>
                <p className="text-slate-400 text-lg leading-relaxed">
                  Sanota combines its engineering capabilities with the software and digital expertise of Knoweb, an affiliated IT company under common ownership. This enables us to develop integrated systems seamlessly.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 7 & 8. Modernization & AMC */}
        <section className="py-24 bg-[#050B14] border-t border-slate-800/50 bg-transparent">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              
              {/* Modernization */}
              <div className="glowing-card bg-[#131C2E]/40 border border-slate-800 rounded-3xl p-10 flex flex-col">
                <RefreshCw className="w-10 h-10 text-[#E8B84B] mb-6" />
                <h2 className="text-[#E8B84B] font-bold tracking-widest uppercase text-sm mb-4">Modernization Across Industries</h2>
                <h3 className="text-2xl font-bold text-white mb-6">Improve Existing Operations Before Unnecessary Replacement</h3>
                <p className="text-slate-300 leading-relaxed mb-6">
                  Many organizations operate valuable machinery and systems that have become unreliable, inefficient or difficult to maintain. Sanota assesses whether existing assets can be improved through:
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 text-sm">
                  {modernizationImprovements.map((item, idx) => (
                    <div key={idx} className="flex items-start">
                      <CheckCircle2 className="w-4 h-4 text-[#2E5EAA] mr-2 mt-0.5 shrink-0" />
                      <span className="text-slate-400 leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="bg-[#0B1220] border border-slate-800 rounded-xl p-5 mb-8 flex-grow">
                  <p className="text-slate-300 text-sm leading-relaxed italic">
                    This approach can extend equipment life, improve reliability and reduce the cost and disruption of complete replacement.
                  </p>
                </div>

                <Link href="/contact" className="inline-flex items-center px-6 py-3 bg-[#131C2E] hover:bg-slate-800 border border-slate-700 text-white font-bold rounded-lg transition-colors mt-auto self-start">
                  Request a Modernization Assessment <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>

              {/* AMC */}
              <div className="glowing-card bg-[#131C2E]/40 border border-slate-800 rounded-3xl p-10 flex flex-col">
                <ShieldCheck className="w-10 h-10 text-[#E8B84B] mb-6" />
                <h2 className="text-[#E8B84B] font-bold tracking-widest uppercase text-sm mb-4">AMC and Industry Lifecycle Support</h2>
                <h3 className="text-2xl font-bold text-white mb-6">Keep Critical Systems Operating Reliably</h3>
                <p className="text-slate-300 leading-relaxed mb-6">
                  Sanota provides Annual Maintenance Contracts and technical support for Sanota-built machinery, automation and integrated systems. We can also support eligible third-party equipment following an initial technical and condition assessment.
                </p>
                
                <p className="text-slate-400 font-bold text-sm mb-4">AMC programmes may cover:</p>
                <div className="space-y-3 mb-8 text-sm">
                  {amcCoverage.map((item, idx) => (
                    <div key={idx} className="flex items-start">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#E8B84B] mt-1.5 mr-3 shrink-0" />
                      <span className="text-slate-400 leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="bg-[#0B1220] border border-slate-800 rounded-xl p-5 mb-8 flex-grow">
                  <p className="text-slate-300 text-sm leading-relaxed italic">
                    Each AMC is developed according to the equipment, operating environment, criticality and support requirements of the customer.
                  </p>
                </div>

                <Link href="/contact" className="inline-flex items-center px-6 py-3 bg-[#E8B84B] hover:bg-[#d4a643] text-[#0B1220] font-bold rounded-lg transition-colors mt-auto self-start">
                  Request an AMC Assessment <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>

            </div>
          </div>
        </section>

        {/* 9. A Partner for Established and Emerging Industries */}
        <section className="py-24 bg-[#0B1220] bg-transparent">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h3 className="text-3xl font-bold text-white mb-6 leading-tight">A Partner for Established and Emerging Industries</h3>
                <p className="text-slate-400 text-lg leading-relaxed mb-8">
                  Sanota works with organizations at different stages of development, including:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6 mb-8">
                  {partnerTypes.map((partner, idx) => (
                    <div key={idx} className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-[#2E5EAA] mr-3 mt-0.5 shrink-0" />
                      <span className="text-slate-300 text-sm leading-relaxed">{partner}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-gradient-to-br from-[#131C2E] to-[#0B1220] border border-slate-700 rounded-3xl p-10 h-full flex flex-col justify-center">
                <p className="text-white text-2xl font-bold leading-relaxed">
                  Whether the requirement involves a complete new system, an individual machine, an automation upgrade, a digital platform or ongoing technical support, Sanota can help develop an appropriate path forward.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 10. Call to Action */}
        <section className="py-32 bg-[#050B14] relative overflow-hidden border-t border-slate-800 bg-transparent">
          <div className="absolute inset-0 bg-gradient-to-t from-[#131C2E]/50 to-transparent pointer-events-none" />
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h2 className="text-[#E8B84B] font-bold tracking-widest uppercase text-sm mb-4">Take Action</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
              What Does Your Industry Need to Improve?
            </h3>
            <p className="text-slate-300 text-lg mb-8 leading-relaxed max-w-3xl mx-auto">
              Your requirement may begin with a production challenge, inefficient process, outdated machine, monitoring need, maintenance problem or new product idea.
            </p>
            <p className="text-slate-400 text-lg mb-12">
              Tell us about the operation and what you need to achieve. Sanota will review the requirement and connect you with the appropriate engineering and technology capabilities.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
              <Link href="/tell-us-your-challenge" className="px-8 py-4 bg-[#E8B84B] hover:bg-[#d4a643] text-[#0B1220] font-bold rounded-lg transition-colors flex items-center justify-center">
                Discuss Your Requirement <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link href="/contact" className="px-8 py-4 bg-[#131C2E] hover:bg-slate-800 text-white font-bold rounded-lg border border-slate-700 transition-colors flex items-center justify-center">
                Request a Technical Consultation
              </Link>
            </div>

            <p className="text-slate-500 font-bold text-xs uppercase tracking-widest mb-6">Additional Enquiry Options:</p>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-8 max-w-2xl mx-auto">
              <Link href="/contact" className="text-sm font-bold text-[#2E5EAA] hover:text-white transition-colors">Request an Industrial Assessment</Link>
              <Link href="/contact" className="text-sm font-bold text-[#2E5EAA] hover:text-white transition-colors">Request a Modernization Assessment</Link>
              <Link href="/contact" className="text-sm font-bold text-[#2E5EAA] hover:text-white transition-colors">Request an AMC Assessment</Link>
              <Link href="/contact" className="text-sm font-bold text-[#2E5EAA] hover:text-white transition-colors">Request Product Information</Link>
              <Link href="/contact" className="text-sm font-bold text-[#2E5EAA] hover:text-white transition-colors">Explore a Development Partnership</Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
