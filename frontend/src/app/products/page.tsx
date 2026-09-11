"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowRight, Settings, Coffee, Sprout, Activity, Truck, Zap, Trash2, Lightbulb, PackageSearch, Layers, Wrench, ShieldCheck, ChevronLeft, ChevronRight } from "lucide-react";

const productCategories = [
  {
    number: "01",
    title: "Industrial Machinery & Automation Systems",
    intro: "Sanota develops and integrates machinery and automation solutions intended to improve productivity, consistency, safety and operational control. Solutions may involve new machinery, special-purpose equipment, automated stations or the modernization of existing machines.",
    color: "from-blue-600 to-cyan-500",
    icon: Settings,
    image: "/images/products/industrial_automation.jpg",
    items: [
      "Custom industrial machinery",
      "Special-purpose machines",
      "Automated production equipment",
      "Assembly and handling stations",
      "Machine-control systems",
      "PLC-based automation",
      "HMI and operator-control interfaces",
      "Sensor and instrumentation systems",
      "Motor and drive-control systems",
      "Production monitoring",
      "Machine safety improvements",
      "Existing-machine automation",
      "Control-panel development",
      "Machinery retrofit and modernization"
    ],
    clientNeeds: [
      "Automate a manual operation",
      "Improve machine productivity",
      "Replace outdated controls",
      "Reduce repetitive handling",
      "Improve process consistency",
      "Add monitoring to existing equipment",
      "Develop machinery for a unique requirement"
    ],
    link: "#"
  },
  {
    number: "02",
    title: "Food, Beverage & Tea Processing Systems",
    intro: "Sanota supports the development, integration and improvement of machinery and systems used in food, beverage and tea-related operations. Solutions can be developed for individual processing stages or as part of a wider production system.",
    color: "from-orange-500 to-amber-500",
    icon: Coffee,
    image: "/images/products/food_processing.jpg",
    items: [
      "Food-processing machinery",
      "Beverage-processing equipment",
      "Tea-processing machinery and systems",
      "Drying and environmental-control systems",
      "Mixing and blending equipment",
      "Filling, feeding and handling systems",
      "Conveyor and transfer systems",
      "Temperature and humidity monitoring",
      "Process automation",
      "Production-control systems",
      "Retrofit of existing processing equipment",
      "IoT-enabled production monitoring",
      "Custom production-line integration"
    ],
    clientNeeds: [
      "Improve production efficiency",
      "Automate a processing stage",
      "Control temperature, humidity or airflow",
      "Modernize existing machinery",
      "Improve process visibility",
      "Develop specialized equipment",
      "Connect processing systems to digital monitoring"
    ],
    link: "#"
  },
  {
    number: "03",
    title: "Smart Agriculture Systems",
    intro: "Sanota develops engineering and technology solutions to support controlled agriculture, efficient resource use and better operational visibility. These solutions may combine irrigation, fertigation, environmental monitoring, automation, IoT platforms and mobile or web-based access.",
    color: "from-emerald-500 to-teal-500",
    icon: Sprout,
    image: "/images/products/smart_agriculture.jpg",
    items: [
      "Smart-greenhouse systems",
      "Automated irrigation",
      "Fertigation systems",
      "Climate and environmental monitoring",
      "Temperature and humidity control",
      "Soil and growing-condition monitoring",
      "Water-level and flow monitoring",
      "Sensor networks",
      "Remote equipment control",
      "Agricultural dashboards",
      "Alerts and automated reports",
      "Crop-environment data collection",
      "Nursery and protected-agriculture systems",
      "Customized agri-technology solutions"
    ],
    clientNeeds: [
      "Improve the control of growing conditions",
      "Reduce manual monitoring",
      "Use water and inputs more efficiently",
      "Access agricultural information remotely",
      "Automate irrigation or fertigation",
      "Develop a controlled-environment project",
      "Connect agricultural operations through IoT"
    ],
    link: "#"
  },
  {
    number: "04",
    title: "IoT, Monitoring & Tracking Solutions",
    intro: "Sanota helps organizations connect machinery, equipment, assets and facilities to digital monitoring and management platforms. Through its collaboration with Knoweb, Sanota can combine engineering systems with software, cloud platforms, dashboards, web applications and mobile technologies.",
    color: "from-indigo-500 to-purple-500",
    icon: Activity,
    image: "/images/products/iot_monitoring.jpg",
    items: [
      "Industrial IoT systems",
      "Machine-condition monitoring",
      "Production monitoring",
      "Equipment and asset monitoring",
      "Environmental monitoring",
      "Energy and utility monitoring",
      "Temperature and humidity monitoring",
      "Water-level and flow monitoring",
      "Location and movement tracking",
      "Fleet or mobile-asset tracking",
      "Remote-control systems",
      "Operational dashboards",
      "Alert and notification systems",
      "Automated reporting",
      "Web and mobile applications",
      "Cloud-based data platforms",
      "Integration with existing business systems"
    ],
    clientNeeds: [
      "Monitor operations remotely",
      "Receive alerts when conditions change",
      "Collect information from equipment",
      "Improve operational visibility",
      "Track assets or movement",
      "Create digital reports and dashboards",
      "Connect engineering equipment with software systems"
    ],
    link: "#"
  },
  {
    number: "05",
    title: "Material Handling & Logistics Systems",
    intro: "Sanota develops and integrates systems intended to improve the movement, handling, storage and tracking of materials and products. Solutions can range from individual handling equipment to automated and connected logistics systems.",
    color: "from-blue-500 to-indigo-600",
    icon: Truck,
    image: "/images/products/material_handling.jpg",
    items: [
      "Conveyor systems",
      "Product-transfer systems",
      "Automated guided vehicles",
      "Mobile material-handling platforms",
      "Loading and unloading support equipment",
      "Sorting and routing systems",
      "Automated movement controls",
      "Warehouse-support systems",
      "Asset and inventory tracking",
      "Sensor-based movement monitoring",
      "Custom lifting or positioning equipment",
      "Integration with production systems",
      "Retrofit of existing handling equipment"
    ],
    clientNeeds: [
      "Reduce manual material movement",
      "Improve warehouse efficiency",
      "Connect production and storage operations",
      "Track goods or equipment",
      "Automate repetitive transfer activities",
      "Develop specialized handling equipment"
    ],
    link: "#"
  },
  {
    number: "06",
    title: "Energy & Resource-Efficiency Solutions",
    intro: "Sanota supports organizations seeking better visibility and control over the use of energy, water and other operational resources. Solutions may involve monitoring, control, automation, reporting and improvements to existing machinery or facilities.",
    color: "from-yellow-400 to-orange-500",
    icon: Zap,
    image: "/images/products/energy_efficiency.jpg",
    items: [
      "Energy-monitoring systems",
      "Electrical-parameter monitoring",
      "Utility-monitoring dashboards",
      "Water-level and flow monitoring",
      "Pump and motor-control systems",
      "Automated equipment scheduling",
      "Resource-consumption reporting",
      "Performance alerts",
      "Remote monitoring",
      "Control-system optimization",
      "Energy-related machinery improvements",
      "Integration with existing facility systems"
    ],
    clientNeeds: [
      "Understand resource consumption",
      "Detect unusual operating conditions",
      "Improve equipment control",
      "Reduce avoidable resource loss",
      "Monitor multiple locations",
      "Support operational and sustainability decisions"
    ],
    link: "#"
  },
  {
    number: "07",
    title: "Environmental & Waste Solutions",
    intro: "Sanota develops and integrates engineering systems that support environmental management, waste handling and resource recovery. The exact solution is designed around the type of material, process, operating conditions and intended outcome.",
    color: "from-green-500 to-emerald-600",
    icon: Trash2,
    image: "/images/products/environmental_waste.jpg",
    items: [
      "Waste-handling equipment",
      "Sorting and separation systems",
      "Material-processing equipment",
      "Recycling-support machinery",
      "Organic-waste processing systems",
      "Composting-related equipment",
      "Liquid and solid waste monitoring",
      "Environmental-condition monitoring",
      "Process automation",
      "Sensor and control integration",
      "IoT-based environmental reporting",
      "Custom resource-recovery systems"
    ],
    clientNeeds: [
      "Improve waste handling",
      "Introduce sorting or separation",
      "Automate an environmental process",
      "Monitor environmental conditions",
      "Develop specialized recycling equipment",
      "Convert waste-related concepts into practical systems"
    ],
    link: "#"
  },
  {
    number: "08",
    title: "Custom Products, Prototypes & Integrated Systems",
    intro: "Some operational challenges cannot be solved using an off-the-shelf product. Sanota works with clients, innovators and organizations to transform ideas and technical requirements into practical products, prototypes, machinery and complete systems.",
    color: "from-purple-500 to-pink-500",
    icon: Lightbulb,
    image: "/images/products/custom_prototypes.jpg",
    items: [
      "Engineering-product development",
      "Prototype development",
      "Special-purpose equipment",
      "Custom electronics",
      "Sensor-enabled products",
      "Connected products",
      "IoT devices and systems",
      "Software-supported engineering products",
      "Research and development support",
      "Proof-of-concept development",
      "Product improvement and redesign",
      "Testing and validation",
      "Pilot systems",
      "Scalable integrated solutions"
    ],
    clientNeeds: [
      "Convert an idea into a working prototype",
      "Develop a new engineering product",
      "Improve an existing product",
      "Add electronics, IoT or software to a product",
      "Test a concept before wider implementation",
      "Develop a complete solution involving several technologies"
    ],
    link: "#"
  }
];

const selectedSolutions = [
  "Automated machinery",
  "Special-purpose equipment",
  "Processing machinery",
  "Production and handling systems",
  "Smart-greenhouse solutions",
  "Irrigation and fertigation systems",
  "Environmental-control systems",
  "Industrial automation systems",
  "PLC and HMI solutions",
  "IoT monitoring platforms",
  "Remote-control systems",
  "Dashboards and reporting tools",
  "Asset and location-tracking systems",
  "Material-handling equipment",
  "Conveyor systems",
  "Automated guided vehicles",
  "Energy and utility monitoring",
  "Waste-processing equipment",
  "Sensor-enabled products",
  "Custom prototypes",
  "Integrated industrial and facility systems"
];

const existingEquipments = [
  "Mechanical improvement",
  "Electrical-system upgrades",
  "Control replacement",
  "Automation",
  "Sensor integration",
  "IoT connectivity",
  "Software monitoring",
  "Safety improvement",
  "Capacity improvement",
  "Obsolescence management",
  "Preventive maintenance",
  "Long-term lifecycle support"
];

const knowebItems = [
  "IoT platforms",
  "Cloud connectivity",
  "Web applications",
  "Mobile applications",
  "Dashboards",
  "Alerts and notifications",
  "Automated reporting",
  "Data management",
  "User-management systems",
  "Integration with existing software"
];

const supportItems = [
  "Preventive maintenance",
  "Periodic inspections",
  "Breakdown-support arrangements",
  "Mechanical and electrical servicing",
  "Automation and control support",
  "IoT and software support",
  "Performance reviews",
  "Component-replacement planning",
  "Modernization recommendations",
  "Operator and maintenance training",
  "Annual Maintenance Contracts"
];

const industries = [
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
];

export default function ProductsPage() {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setActiveCategoryIndex((prev) => (prev + 1) % productCategories.length);
    }, 8000); // Auto-advance every 8 seconds
    return () => clearInterval(interval);
  }, [isHovered]);

  const nextSlide = () => {
    setActiveCategoryIndex((prev) => (prev + 1) % productCategories.length);
  };

  const prevSlide = () => {
    setActiveCategoryIndex((prev) => (prev - 1 + productCategories.length) % productCategories.length);
  };

  return (
    <div className="flex flex-col min-h-screen bg-transparent">
      <Header />
      <main className="flex-grow">
        
        {/* Hero Section */}
        <section className="relative pt-32 lg:pt-48 pb-20 lg:pb-32 overflow-hidden border-b border-slate-800 bg-transparent min-h-[60vh] lg:min-h-[70vh] flex flex-col justify-center">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
            style={{ backgroundImage: "url('/products_hero_bg.jpg')" }}
          />
          <div className="absolute inset-0 bg-[#050B14]/60 z-0" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050B14]/20 to-[#050B14]/90 z-0" />
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-[#E8B84B] font-bold tracking-widest uppercase text-sm mb-5"
            >
              Engineering Products & Integrated Systems
            </motion.p>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 }}
              className="text-4xl sm:text-6xl font-black text-white tracking-tight mb-6 leading-tight max-w-5xl mx-auto"
            >
              Products and Systems Developed Around <span className="text-[#2E5EAA]">Real Operational Requirements</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-slate-300 max-w-3xl mx-auto mb-4 font-medium leading-relaxed"
            >
              Machinery, automation, connected technologies and integrated systems designed to solve practical industry needs.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="text-lg text-slate-400 max-w-3xl mx-auto mb-10 leading-relaxed"
            >
              Sanota develops, integrates and supports engineering products and systems for industrial, agricultural, commercial and infrastructure applications. Our solutions can combine mechanical engineering, electrical and electronic systems, automation, IoT, software, fabrication, installation and lifecycle support.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-col sm:flex-row justify-center gap-4 mb-12"
            >
              <a
                href="#categories"
                className="px-8 py-4 bg-[#E8B84B] hover:bg-[#d4a643] text-[#0B1220] font-bold rounded-lg transition-colors flex items-center justify-center"
              >
                Explore Products & Systems
              </a>
              <Link
                href="/tell-us-your-challenge"
                className="px-8 py-4 bg-[#131C2E]/80 hover:bg-slate-800 text-white font-bold rounded-lg border border-slate-700 transition-colors flex items-center justify-center"
              >
                Tell Us Your Requirement <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-[#E8B84B] font-bold text-xs tracking-widest uppercase"
            >
              Machinery <span className="mx-2 text-slate-600">•</span> Automation <span className="mx-2 text-slate-600">•</span> IoT <span className="mx-2 text-slate-600">•</span> Software <span className="mx-2 text-slate-600">•</span> Integrated Systems
            </motion.p>
          </div>
        </section>

        {/* Introduction */}
        <section className="relative py-16 lg:py-20 bg-transparent overflow-hidden border-b border-slate-800/40">
          {/* Ambient Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#E8B84B]/5 rounded-full blur-[150px] pointer-events-none" />

          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              className="text-4xl md:text-5xl font-black text-white mb-8 leading-tight"
            >
              From Individual Equipment to <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E8B84B] to-amber-600">Complete Integrated Solutions</span>
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: 0.1 }}
              className="text-slate-300 text-lg leading-relaxed mb-6 font-medium max-w-3xl mx-auto"
            >
              Some clients require a specific machine or product. Others require a complete operational system involving equipment, controls, sensors, software and implementation. <strong className="text-white">Sanota supports both.</strong>
            </motion.p>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: 0.15 }}
              className="text-slate-400 text-lg leading-relaxed mb-10"
            >
              Depending on the requirement, Sanota can provide:
            </motion.p>
            
            <div className="relative max-w-4xl mx-auto mb-14 mt-8 group">
              {/* Outer ambient glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-[#E8B84B]/20 via-transparent to-amber-600/20 rounded-[2rem] blur-2xl opacity-40 group-hover:opacity-80 transition duration-1000 pointer-events-none" />
              
              <div className="relative bg-[#050B14]/90 backdrop-blur-3xl border border-slate-800/80 rounded-[2rem] p-8 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden transition-all duration-500 hover:border-[#E8B84B]/30">
                {/* Top highlight line */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-[2px] bg-gradient-to-r from-transparent via-[#E8B84B]/40 to-transparent" />
                
                {/* Faint internal texture */}
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 pointer-events-none mix-blend-overlay" />
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-4 relative z-10">
                  {[
                    "An existing or adaptable product concept",
                    "A system configured around the client’s operation",
                    "Custom machinery or equipment",
                    "Automation and control integration",
                    "IoT and software-enabled systems",
                    "A complete multi-disciplinary project",
                    "Modernization of existing equipment",
                    "AMC and long-term lifecycle support"
                  ].map((item, idx) => (
                    <motion.div 
                      key={idx} 
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ delay: 0.1 + (idx * 0.05) }}
                      className="flex items-center group/item cursor-default p-3 hover:bg-slate-800/40 rounded-2xl transition-all duration-300"
                    >
                      {/* Premium Circle Icon */}
                      <div className="relative w-12 h-12 rounded-full bg-[#0A101A] border border-slate-700/60 flex items-center justify-center mr-5 shrink-0 group-hover/item:border-[#E8B84B]/60 group-hover/item:shadow-[0_0_20px_rgba(232,184,75,0.2)] transition-all duration-300">
                        <div className="w-2.5 h-2.5 rounded-full bg-slate-500 group-hover/item:bg-[#E8B84B] transition-colors duration-300" />
                        {/* Ping animation ring */}
                        <div className="absolute inset-0 rounded-full border border-[#E8B84B]/0 group-hover/item:border-[#E8B84B]/50 group-hover/item:animate-ping opacity-0 group-hover/item:opacity-100 transition-all duration-500 pointer-events-none" />
                      </div>
                      
                      <span className="text-slate-300 text-[15px] font-medium leading-relaxed group-hover/item:text-white group-hover/item:translate-x-1 transition-all duration-300">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
            
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="inline-flex items-center px-6 py-3 bg-[#0B1220]/50 rounded-2xl border border-slate-700/50 text-slate-400 text-sm font-semibold max-w-3xl mx-auto leading-relaxed"
            >
              The appropriate approach is determined after understanding the client’s application, operating environment and expected outcome.
            </motion.p>
          </div>
        </section>

        {/* Categories Carousel */}
        <section id="categories" className="relative py-16 lg:py-20 bg-transparent overflow-hidden border-t border-slate-800/40">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#E8B84B]/5 rounded-full blur-[150px] pointer-events-none" />

          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-12">
              <h2 className="text-[#E8B84B] font-bold tracking-widest uppercase text-sm mb-4">Product and System Categories</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-white">Explore Sanota’s Product and System Capabilities</h3>
            </div>

            <div 
              className="relative max-w-6xl mx-auto"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCategoryIndex}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="bg-[#0A101A]/90 backdrop-blur-2xl border border-slate-800/60 rounded-[2.5rem] shadow-2xl relative overflow-hidden group"
                >
                  <div className={`absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-to-br ${productCategories[activeCategoryIndex].color} opacity-[0.03] rounded-full blur-[80px] pointer-events-none -translate-y-1/3 translate-x-1/3`} />
                  
                  {/* Background Image Layer */}
                  <div className="absolute inset-0 z-0 overflow-hidden rounded-[2.5rem] bg-[#0A101A]">
                    <img 
                      src={productCategories[activeCategoryIndex].image} 
                      alt={productCategories[activeCategoryIndex].title}
                      className="absolute inset-0 w-full h-full object-cover object-right lg:object-center opacity-40 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000" 
                    />
                    
                    {/* Smart Gradients: Heavy on the left (text), transparent on the right (image) */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#0A101A] via-[#0A101A]/95 lg:via-[#0A101A]/90 to-transparent transition-all duration-1000 group-hover:to-[#0A101A]/20" />
                    
                    {/* Top and Bottom edge darkening for contrast */}
                    <div className="absolute inset-0 bg-gradient-to-b from-[#0A101A]/50 via-transparent to-[#0A101A]/80" />
                  </div>
                  
                  <div className="p-8 md:p-12 flex flex-col lg:flex-row gap-10 relative z-10 h-full">
                    <div className="lg:w-5/12 flex flex-col justify-center">
                      <div className="flex items-start mb-6">
                        <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${productCategories[activeCategoryIndex].color} p-0.5 mr-5 flex-shrink-0 shadow-lg`}>
                          <div className="w-full h-full bg-[#0D1829] rounded-[14px] flex items-center justify-center">
                            {(() => {
                              const IconComponent = productCategories[activeCategoryIndex].icon;
                              return <IconComponent className="w-7 h-7 text-white" />;
                            })()}
                          </div>
                        </div>
                        <div>
                          <span className="text-slate-400 font-bold text-xs tracking-widest uppercase block mb-1">{productCategories[activeCategoryIndex].number}</span>
                          <h3 className="text-2xl md:text-3xl font-black text-white leading-tight drop-shadow-md">{productCategories[activeCategoryIndex].title}</h3>
                        </div>
                      </div>
                      <p className="text-slate-300 text-[15px] leading-relaxed mb-8 drop-shadow-sm">{productCategories[activeCategoryIndex].intro}</p>
                      
                      <div className="bg-[#050B14]/80 backdrop-blur-xl border border-slate-700/50 rounded-xl p-5 shadow-2xl relative overflow-hidden group/box hover:border-slate-500/50 transition-colors">
                        <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-slate-400 to-slate-700" />
                        <p className="text-slate-300 font-bold text-[11px] uppercase tracking-widest mb-3 ml-2">Suitable for organizations seeking to:</p>
                        <div className="space-y-2.5 ml-2">
                          {productCategories[activeCategoryIndex].clientNeeds.map((need, nIdx) => (
                            <p key={nIdx} className="text-slate-400 text-sm italic leading-relaxed flex items-start">
                              <span className="mr-2 text-slate-500 font-serif">"</span>
                              {need}
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="lg:w-7/12 flex flex-col justify-center">
                      <div className="bg-[#0A101A]/30 group-hover:bg-[#0A101A]/10 transition-colors duration-700 rounded-3xl p-6 lg:p-8 border border-white/5 backdrop-blur-sm">
                        <p className="text-white/80 font-bold text-xs uppercase tracking-[0.2em] mb-6 drop-shadow-md flex items-center">
                          <span className="w-2 h-2 rounded-full bg-white/50 mr-3 animate-pulse" />
                          Solutions may include
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                          {productCategories[activeCategoryIndex].items.map((item, itemIdx) => (
                            <div 
                              key={itemIdx} 
                              className="flex items-start bg-[#050B14]/70 hover:bg-[#131C2E]/90 backdrop-blur-md border border-slate-700/60 hover:border-white/30 rounded-xl px-4 py-3.5 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(0,0,0,0.5)] cursor-default group/item"
                            >
                              <div className={`w-2 h-2 rounded-full bg-gradient-to-br ${productCategories[activeCategoryIndex].color} mt-1.5 mr-3 shrink-0 shadow-[0_0_10px_rgba(255,255,255,0.3)] group-hover/item:scale-150 transition-transform`} />
                              <span className="text-slate-200 text-sm font-medium leading-snug group-hover/item:text-white transition-colors">{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Navigation Controls */}
              <button 
                onClick={prevSlide} 
                className="absolute top-1/2 -left-4 md:-left-6 lg:-left-8 -translate-y-1/2 w-12 h-12 rounded-full bg-[#131C2E]/90 border border-slate-700/80 flex items-center justify-center text-white hover:bg-[#E8B84B] hover:text-[#0B1220] transition-colors shadow-2xl z-20 group"
                aria-label="Previous Category"
              >
                <ChevronLeft className="w-6 h-6 group-hover:-translate-x-0.5 transition-transform" />
              </button>
              
              <button 
                onClick={nextSlide} 
                className="absolute top-1/2 -right-4 md:-right-6 lg:-right-8 -translate-y-1/2 w-12 h-12 rounded-full bg-[#131C2E]/90 border border-slate-700/80 flex items-center justify-center text-white hover:bg-[#E8B84B] hover:text-[#0B1220] transition-colors shadow-2xl z-20 group"
                aria-label="Next Category"
              >
                <ChevronRight className="w-6 h-6 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>

            {/* Pagination Dots */}
            <div className="flex justify-center mt-10 space-x-2">
              {productCategories.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveCategoryIndex(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    activeCategoryIndex === idx 
                      ? "w-8 bg-gradient-to-r from-[#E8B84B] to-amber-500 shadow-[0_0_8px_rgba(232,184,75,0.6)]" 
                      : "w-2 bg-slate-700 hover:bg-slate-500"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </section>

        {/* How Sanota Classifies an Offering */}
        <section className="relative py-16 lg:py-20 bg-transparent overflow-hidden border-t border-slate-800/40">
          {/* Subtle Ambient Background */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[500px] bg-gradient-to-r from-[#2E5EAA]/5 to-[#E8B84B]/5 rounded-full blur-[120px] pointer-events-none" />

          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
              <h2 className="flex items-center justify-center text-[#E8B84B] font-bold tracking-[0.2em] uppercase text-xs mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E8B84B] mr-3 animate-pulse shadow-[0_0_10px_rgba(232,184,75,0.8)]" />
                How Sanota Classifies an Offering
                <span className="w-1.5 h-1.5 rounded-full bg-[#E8B84B] ml-3 animate-pulse shadow-[0_0_10px_rgba(232,184,75,0.8)]" />
              </h2>
              <h3 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">Product, System or</span> <br className="hidden md:block" />
                Custom Solution?
              </h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {[
                { title: "Product", desc: "A defined item of machinery, equipment, hardware or software that can be supplied or adapted for an application.", icon: PackageSearch },
                { title: "System", desc: "A coordinated combination of products, equipment, controls and technologies working together to achieve an operational outcome.", icon: Layers },
                { title: "Custom Solution", desc: "A product or system designed or significantly modified around a client’s specific requirement.", icon: Wrench },
                { title: "Integrated Solution", desc: "A complete response that may combine engineering, machinery, automation, IoT, software, implementation and long-term support.", icon: ShieldCheck }
              ].map((item, idx) => (
                <motion.div 
                  key={idx} 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: idx * 0.1, duration: 0.6 }}
                  className="group relative bg-[#0A101A]/60 backdrop-blur-xl border border-slate-800/60 hover:border-slate-600 rounded-[2rem] p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] overflow-hidden flex flex-col items-center text-center"
                >
                  {/* Hover gradient sweep */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#E8B84B]/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  
                  {/* Top glowing line */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[2px] bg-gradient-to-r from-transparent via-[#E8B84B]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative w-20 h-20 mb-8 mt-2">
                    <div className="absolute inset-0 bg-[#E8B84B]/10 rounded-full blur-xl group-hover:bg-[#E8B84B]/20 transition-colors duration-500" />
                    <div className="relative w-full h-full bg-[#131C2E] border border-slate-700/50 rounded-2xl flex items-center justify-center rotate-3 group-hover:rotate-0 transition-transform duration-500 shadow-inner">
                      <item.icon className="w-8 h-8 text-[#E8B84B] group-hover:scale-110 transition-transform duration-500" />
                    </div>
                  </div>
                  
                  <h4 className="text-xl text-white font-black mb-4 tracking-wide">{item.title}</h4>
                  <p className="text-slate-400 text-[15px] leading-relaxed relative z-10 group-hover:text-slate-300 transition-colors duration-500">{item.desc}</p>
                </motion.div>
              ))}
            </div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="text-center"
            >
              <p className="inline-flex items-center px-6 py-3 bg-[#0B1220]/50 rounded-2xl border border-slate-700/50 text-slate-400 text-sm font-semibold max-w-3xl mx-auto leading-relaxed">
                Sanota will help determine which approach is most appropriate after reviewing the requirement.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Selected Solution Areas */}
        <section className="relative py-16 lg:py-20 bg-transparent overflow-hidden border-t border-slate-800/40">
          {/* Subtle Background Glow */}
          <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-[#E8B84B]/5 rounded-full blur-[150px] pointer-events-none" />

          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
              <h2 className="flex items-center justify-center text-[#E8B84B] font-bold tracking-[0.2em] uppercase text-xs mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E8B84B] mr-3 animate-pulse shadow-[0_0_10px_rgba(232,184,75,0.8)]" />
                Selected Solution Areas
                <span className="w-1.5 h-1.5 rounded-full bg-[#E8B84B] ml-3 animate-pulse shadow-[0_0_10px_rgba(232,184,75,0.8)]" />
              </h2>
              <h3 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
                Examples of What Sanota Can <br className="hidden md:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E8B84B] to-amber-600">Develop and Integrate</span>
              </h3>
            </div>
            
            {/* Premium Compact Multi-Column List with Container */}
            <div className="max-w-6xl mx-auto px-4 sm:px-6 relative group mb-16 z-10">
              {/* Decorative ambient background elements */}
              <div className="absolute -inset-1 bg-gradient-to-r from-[#E8B84B]/20 to-amber-600/20 rounded-3xl blur-2xl opacity-40 group-hover:opacity-100 transition duration-1000 group-hover:duration-300 pointer-events-none" />
              
              <div className="relative bg-[#0A101A]/90 backdrop-blur-3xl border border-slate-800/80 group-hover:border-[#E8B84B]/30 rounded-3xl p-8 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden transition-all duration-500">
                
                {/* Faint Grid Background */}
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 pointer-events-none mix-blend-overlay" />
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-4 relative z-10">
                  {selectedSolutions.map((sol, idx) => (
                    <motion.div 
                      key={idx} 
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ delay: (idx % 3) * 0.05, duration: 0.4 }}
                      className="flex items-start group/item cursor-default p-2 hover:bg-slate-800/40 rounded-lg transition-colors"
                    >
                      <div className="mt-1.5 mr-4 w-1.5 h-1.5 rounded-full bg-[#E8B84B] opacity-50 group-hover/item:opacity-100 group-hover/item:shadow-[0_0_10px_rgba(232,184,75,0.8)] transition-all shrink-0" />
                      <span className="text-slate-300 text-[15px] font-medium group-hover/item:text-white transition-colors leading-snug">{sol}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="text-center"
            >
              <p className="inline-flex items-center px-6 py-3 bg-[#0B1220]/50 rounded-2xl border border-slate-700/50 text-slate-400 text-sm font-semibold italic max-w-3xl mx-auto leading-relaxed">
                The final configuration, specifications and scope will depend on the client’s application and technical assessment.
              </p>
            </motion.div>
          </div>
        </section>

        {/* New Systems and Existing Equipment */}
        <section className="relative py-16 lg:py-20 bg-transparent overflow-hidden border-t border-slate-800/40">
          <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-gradient-to-br from-[#E8B84B]/5 to-transparent rounded-full blur-[150px] pointer-events-none -translate-x-1/4 -translate-y-1/4" />

          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="flex items-center text-[#E8B84B] font-bold tracking-[0.2em] uppercase text-xs mb-6">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E8B84B] mr-3 animate-pulse shadow-[0_0_10px_rgba(232,184,75,0.8)]" />
                  New Systems and Existing Equipment
                </h2>
                <h3 className="text-4xl md:text-5xl font-black text-white mb-8 leading-tight">
                  Develop New. Improve Existing. <br className="hidden xl:block" />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E8B84B] to-amber-500">Connect What Already Works.</span>
                </h3>
                <p className="text-slate-300 text-lg leading-relaxed mb-6 font-medium">Sanota’s role is not limited to developing new machinery and systems.</p>
                <p className="text-slate-400 text-lg leading-relaxed mb-10">Existing equipment may still have significant operational value but require improved controls, new components, automation, digital monitoring or structured maintenance.</p>
                
                <Link href="/services" className="inline-flex items-center px-8 py-4 bg-[#0B1220]/80 backdrop-blur-md border border-slate-700 text-white font-bold rounded-xl transition-all duration-300 hover:bg-[#131C2E] hover:border-[#E8B84B]/50 hover:-translate-y-1 group shadow-[0_10px_30px_rgba(0,0,0,0.2)]">
                  Explore Retrofit & Modernization 
                  <ArrowRight className="ml-3 w-5 h-5 text-slate-400 group-hover:text-[#E8B84B] group-hover:translate-x-1 transition-all" />
                </Link>
              </motion.div>
              
              <div className="relative rounded-[2.5rem] overflow-hidden group/card shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-slate-800/80 hover:border-[#E8B84B]/30 transition-all duration-500 min-h-[600px] flex flex-col">
                {/* Continuous Ken Burns Background Photo */}
                <div className="absolute inset-0 z-0 bg-[#0A101A] overflow-hidden">
                  <motion.img 
                    src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop" 
                    alt="Industrial Machinery Retrofitting" 
                    animate={{ scale: [1, 1.08, 1], x: ["0%", "-3%", "0%"] }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover/card:opacity-70 transition-opacity duration-1000" 
                  />
                  
                  {/* High-tech Hover Scanline */}
                  <motion.div 
                    animate={{ top: ["-10%", "110%"] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#E8B84B]/60 to-transparent shadow-[0_0_20px_rgba(232,184,75,0.8)] z-0 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500"
                  />
                  
                  {/* Smart Gradients for readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A101A] via-[#0A101A]/95 to-[#0A101A]/40 transition-all duration-1000 group-hover/card:via-[#0A101A]/80" />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#0A101A]/80 to-transparent" />
                </div>
                
                <div className="relative p-8 md:p-10 z-10 flex-1 flex flex-col justify-end perspective-1000">
                  <div className="bg-[#0A101A]/50 group-hover/card:bg-[#0A101A]/40 transition-all duration-700 rounded-3xl p-6 lg:p-8 border border-white/5 backdrop-blur-md group-hover/card:-translate-y-3 group-hover/card:shadow-[0_20px_40px_rgba(0,0,0,0.6)]">
                    <p className="text-white/90 font-bold mb-8 text-lg drop-shadow-md flex items-center">
                       <span className="w-2 h-2 rounded-full bg-[#E8B84B] mr-3 animate-pulse" />
                       Sanota can assess existing machinery and systems to identify opportunities for:
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                      {existingEquipments.map((eq, idx) => (
                        <motion.div 
                          key={idx} 
                          initial={{ opacity: 0, y: 15 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true, margin: "-50px" }}
                          transition={{ delay: (idx % 6) * 0.1, duration: 0.5 }}
                          className="flex items-start bg-[#050B14]/70 hover:bg-[#131C2E]/90 backdrop-blur-md border border-slate-700/60 hover:border-[#E8B84B]/40 rounded-xl px-4 py-3.5 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(0,0,0,0.5)] cursor-default group/item"
                        >
                          <div className="w-2 h-2 rounded-full bg-slate-500 mt-1.5 mr-3 shrink-0 shadow-[0_0_10px_rgba(255,255,255,0.1)] group-hover/item:bg-[#E8B84B] group-hover/item:scale-150 group-hover/item:shadow-[0_0_10px_rgba(232,184,75,0.8)] transition-all" />
                          <span className="text-slate-200 text-sm font-medium leading-snug group-hover/item:text-white transition-colors">{eq}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sanota + Knoweb */}
        <section className="relative py-16 lg:py-20 bg-transparent overflow-hidden border-t border-slate-800/40">
          {/* Dual Theme Background Glow */}
          <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-[#E8B84B]/5 rounded-full blur-[150px] pointer-events-none -translate-y-1/2 -translate-x-1/2" />
          <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[150px] pointer-events-none -translate-y-1/2 translate-x-1/2" />

          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-5xl mx-auto flex flex-col items-center">
              
              {/* Top Side: Typography */}
              <div className="text-center mb-16 w-full">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="flex flex-col items-center"
                >
                  <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#131C2E]/80 border border-slate-700/50 mb-6 shadow-lg backdrop-blur-md">
                    <span className="text-[#E8B84B] font-black tracking-widest uppercase text-xs">Sanota</span>
                    <span className="mx-3 text-slate-500 font-bold">+</span>
                    <span className="text-cyan-400 font-black tracking-widest uppercase text-xs">Knoweb</span>
                  </div>
                  
                  <h3 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
                    Engineering Products <br className="hidden md:block" />
                    Connected by <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Digital Tech</span>
                  </h3>
                  
                  <div className="space-y-6 mb-10 max-w-3xl mx-auto text-center">
                    <p className="text-slate-300 text-lg leading-relaxed">
                      Modern engineering products increasingly depend on software, connectivity and access to operational information. Through Knoweb, an affiliated IT company under common ownership, Sanota can strengthen engineering products and systems.
                    </p>
                    <p className="text-slate-400 text-lg leading-relaxed">
                      <strong className="text-white">Sanota</strong> coordinates the overall engineering requirement, while <strong className="text-white">Knoweb</strong> contributes specialized software and digital capability where required.
                    </p>
                  </div>
                  
                  <Link href="#automation-iot" className="relative inline-flex items-center px-8 py-4 bg-[#0A101A] overflow-hidden rounded-xl group border border-slate-700 transition-all hover:border-cyan-500/50 hover:shadow-[0_0_30px_rgba(6,182,212,0.2)]">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#E8B84B]/10 to-cyan-500/10 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500" />
                    <span className="relative z-10 text-white font-bold group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#E8B84B] group-hover:to-cyan-400 transition-all duration-300">
                      Explore Automation & IoT
                    </span>
                    <div className="relative z-10 ml-4 w-8 h-8 rounded-full bg-[#131C2E] border border-slate-700 flex items-center justify-center group-hover:border-cyan-500/50 transition-colors">
                      <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-cyan-400 group-hover:translate-x-0.5 transition-all" />
                    </div>
                  </Link>
                </motion.div>
              </div>

              {/* Bottom Side: Glassmorphic Interface */}
              <div className="relative w-full max-w-4xl mx-auto group">
                {/* Decorative ambient background elements */}
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/30 to-blue-600/30 rounded-3xl blur-2xl opacity-40 group-hover:opacity-100 transition duration-1000 group-hover:duration-300 pointer-events-none" />
                
                <div className="relative bg-[#050B14]/90 backdrop-blur-3xl rounded-3xl border border-slate-800/80 group-hover:border-cyan-500/50 shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden transition-all duration-500">
                  
                  {/* Inner glowing radial beam */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-gradient-to-b from-cyan-500/10 to-transparent rounded-full blur-3xl pointer-events-none" />

                  {/* Faint Grid Background */}
                  <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 pointer-events-none mix-blend-overlay" />
                  
                  <div className="p-8 md:p-12 relative z-10">
                    <div className="flex flex-col items-center justify-center mb-12 text-center">
                       <motion.div 
                         whileHover={{ scale: 1.1, rotate: 5 }}
                         className="w-20 h-20 rounded-[2rem] bg-[#0A101A] border border-cyan-500/40 flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(6,182,212,0.2)] group-hover:shadow-[0_0_50px_rgba(6,182,212,0.4)] transition-all duration-500 relative"
                       >
                         {/* Hover ping ring for the icon */}
                         <div className="absolute inset-0 rounded-[2rem] border border-cyan-400/50 opacity-0 group-hover:opacity-100 group-hover:animate-ping pointer-events-none" />
                         <Activity className="w-10 h-10 text-cyan-400 group-hover:text-cyan-300 transition-colors" />
                       </motion.div>
                       <h4 className="text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-500 tracking-wide mb-2">
                         Digital Capabilities
                       </h4>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                      {[
                        "IoT platforms",
                        "Cloud connectivity",
                        "Web applications",
                        "Mobile applications",
                        "Dashboards",
                        "Alerts and notifications",
                        "Automated reporting",
                        "Data management",
                        "User-management systems",
                        "Integration with existing software"
                      ].map((item, idx) => (
                        <motion.div 
                          key={idx} 
                          initial={{ opacity: 0, scale: 0.9, y: 10 }}
                          whileInView={{ opacity: 1, scale: 1, y: 0 }}
                          whileHover={{ y: -3, scale: 1.02 }}
                          viewport={{ once: true }}
                          transition={{ delay: idx * 0.05, duration: 0.4, type: "spring", bounce: 0.5 }}
                          className="flex items-center px-5 py-4 bg-[#0A101A]/80 backdrop-blur-md border border-slate-700/60 hover:border-cyan-500/50 hover:bg-[#131C2E] hover:shadow-[0_10px_20px_rgba(6,182,212,0.15)] rounded-2xl transition-all duration-300 group/item cursor-default"
                        >
                           {/* Status Dot */}
                           <div className="relative w-2 h-2 mr-4 flex items-center justify-center shrink-0">
                             <div className="absolute inset-0 rounded-full bg-cyan-500/40 group-hover/item:animate-ping" />
                             <div className="relative w-1.5 h-1.5 rounded-full bg-cyan-500 group-hover/item:bg-cyan-400 shadow-[0_0_8px_rgba(6,182,212,0.8)] transition-colors" />
                           </div>
                           
                           {/* Text */}
                           <span className="text-slate-300 text-[14px] font-semibold group-hover/item:text-white transition-colors leading-tight">{item}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* How a Solution is Developed */}
        <section className="relative py-16 lg:py-20 bg-transparent overflow-hidden border-t border-slate-800/40">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#E8B84B]/5 rounded-full blur-[150px] pointer-events-none" />
          
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-20">
              <h2 className="flex items-center justify-center text-[#E8B84B] font-bold tracking-[0.2em] uppercase text-xs mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E8B84B] mr-3 animate-pulse shadow-[0_0_10px_rgba(232,184,75,0.8)]" />
                How a Solution is Developed
                <span className="w-1.5 h-1.5 rounded-full bg-[#E8B84B] ml-3 animate-pulse shadow-[0_0_10px_rgba(232,184,75,0.8)]" />
              </h2>
              <h3 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
                From Requirement to <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E8B84B] to-amber-500">Working System</span>
              </h3>
            </div>
            
            <div className="relative max-w-5xl mx-auto">
              {/* Connecting Line */}
              <div className="hidden md:block absolute left-1/2 top-10 bottom-10 w-px bg-gradient-to-b from-transparent via-[#E8B84B]/30 to-transparent -translate-x-1/2" />
              
              <div className="space-y-6 md:space-y-0 relative z-10">
                {[
                  { n: "1", title: "Understand the Requirement", desc: "Sanota studies the operational challenge, intended outcome and working environment." },
                  { n: "2", title: "Assess the Application", desc: "Existing equipment, processes, constraints, risks and integration requirements are reviewed." },
                  { n: "3", title: "Define the Solution", desc: "The appropriate product, system or custom-development approach is identified." },
                  { n: "4", title: "Design and Develop", desc: "Mechanical, electrical, automation, IoT and software elements are developed as required." },
                  { n: "5", title: "Integrate and Test", desc: "Components and technologies are assembled, programmed, connected and tested." },
                  { n: "6", title: "Install and Commission", desc: "The solution is implemented and verified in the intended operating environment." },
                  { n: "7", title: "Train and Support", desc: "Operator guidance, technical documentation, maintenance and AMC support can be provided." }
                ].map((step, idx) => (
                  <motion.div 
                    key={idx} 
                    initial={{ opacity: 0, y: 20 }} 
                    whileInView={{ opacity: 1, y: 0 }} 
                    viewport={{ once: true, margin: "-50px" }} 
                    transition={{ delay: idx * 0.1, duration: 0.5 }} 
                    className={`flex flex-col md:flex-row items-center justify-between group ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                  >
                    <div className="md:w-5/12" />
                    
                    {/* Center Node */}
                    <div className="w-14 h-14 rounded-full bg-[#0A101A] border-2 border-slate-700/50 flex items-center justify-center relative z-10 my-4 md:my-0 group-hover:border-[#E8B84B] group-hover:shadow-[0_0_20px_rgba(232,184,75,0.4)] transition-all duration-500">
                      <span className="text-[#E8B84B] font-black text-lg">{step.n}</span>
                      {/* Pulse ring on hover */}
                      <div className="absolute inset-0 rounded-full border border-[#E8B84B]/0 group-hover:border-[#E8B84B]/50 scale-100 group-hover:scale-150 opacity-100 group-hover:opacity-0 transition-all duration-1000" />
                    </div>
                    
                    {/* Content Card */}
                    <div className={`md:w-5/12 ${idx % 2 === 0 ? 'md:text-right' : 'md:text-left'} text-center md:text-left`}>
                      <div className="bg-[#0A101A]/60 backdrop-blur-md border border-slate-800/60 rounded-2xl p-6 hover:bg-[#131C2E]/80 hover:border-[#E8B84B]/30 transition-all duration-300 relative overflow-hidden">
                        <div className={`absolute top-0 bottom-0 w-1 bg-[#E8B84B] opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${idx % 2 === 0 ? 'right-0' : 'left-0'}`} />
                        <h4 className="text-xl font-bold text-white mb-2">{step.title}</h4>
                        <p className="text-slate-400 text-[15px] leading-relaxed">{step.desc}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <motion.div 
              initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.8 }}
              className="text-center mt-16"
            >
              <Link href="/tell-us-your-challenge" className="relative inline-flex items-center px-8 py-4 bg-[#E8B84B] text-[#0B1220] font-black rounded-xl overflow-hidden group transition-all hover:shadow-[0_0_30px_rgba(232,184,75,0.3)] hover:-translate-y-1">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                <span className="relative z-10">Tell Us Your Requirement</span>
                <div className="relative z-10 ml-3 w-8 h-8 rounded-full bg-[#0B1220]/10 flex items-center justify-center group-hover:bg-[#0B1220]/20 transition-colors">
                  <ArrowRight className="w-4 h-4 text-[#0B1220] group-hover:translate-x-0.5 transition-transform" />
                </div>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Support After Implementation */}
        <section className="relative py-16 lg:py-20 bg-transparent overflow-hidden border-t border-slate-800/40">
          <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gradient-to-tl from-[#E8B84B]/5 to-transparent rounded-full blur-[150px] pointer-events-none translate-x-1/4 translate-y-1/4" />

          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div 
                initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
              >
                <h2 className="flex items-center text-[#E8B84B] font-bold tracking-[0.2em] uppercase text-xs mb-6">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E8B84B] mr-3 animate-pulse shadow-[0_0_10px_rgba(232,184,75,0.8)]" />
                  Support After Implementation
                </h2>
                <h3 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
                  Protecting the Value <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E8B84B] to-amber-500">of the Solution</span>
                </h3>
                <p className="text-slate-300 text-lg leading-relaxed mb-10">
                  Sanota can continue supporting products and systems after installation and commissioning. AMC and maintenance support may also be available for eligible third-party machinery and systems following a technical assessment.
                </p>
                <div className="flex flex-col sm:flex-row gap-5 mt-4">
                  <Link href="/contact" className="relative group overflow-hidden px-8 py-4 bg-gradient-to-r from-[#E8B84B] to-amber-500 text-[#0A101A] font-black rounded-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_30px_rgba(232,184,75,0.3)] flex items-center justify-center">
                    <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                    <span className="relative z-10 flex items-center">
                      Request an AMC Assessment
                      <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Link>
                  
                  <Link href="/services" className="relative group px-8 py-4 bg-[#0B1220]/80 backdrop-blur-md border border-slate-700 hover:border-[#E8B84B]/60 text-white font-bold rounded-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_30px_rgba(0,0,0,0.4)] flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#E8B84B]/0 via-[#E8B84B]/10 to-[#E8B84B]/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                    <span className="relative z-10">Explore Lifecycle Support</span>
                  </Link>
                </div>
              </motion.div>

              <div className="relative rounded-[2.5rem] overflow-hidden group/card shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-slate-800/80 hover:border-[#E8B84B]/30 transition-all duration-500 min-h-[600px] flex flex-col">
                {/* Continuous Ken Burns Background Photo */}
                <div className="absolute inset-0 z-0 bg-[#0A101A] overflow-hidden">
                  <motion.img 
                    src="https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?q=80&w=2070&auto=format&fit=crop" 
                    alt="Sanota Maintenance Support" 
                    animate={{ scale: [1, 1.08, 1], x: ["0%", "-3%", "0%"] }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover/card:opacity-60 transition-opacity duration-1000 mix-blend-screen" 
                  />
                  
                  {/* High-tech Hover Scanline */}
                  <motion.div 
                    animate={{ top: ["-10%", "110%"] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#E8B84B]/60 to-transparent shadow-[0_0_20px_rgba(232,184,75,0.8)] z-0 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500"
                  />
                  
                  {/* Smart Gradients for readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A101A] via-[#0A101A]/95 to-[#0A101A]/40 transition-all duration-1000 group-hover/card:via-[#0A101A]/80" />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#0A101A]/90 to-transparent" />
                </div>
                
                <div className="relative p-8 md:p-10 z-10 flex-1 flex flex-col justify-end perspective-1000">
                  <div className="bg-[#0A101A]/50 group-hover/card:bg-[#0A101A]/40 transition-all duration-700 rounded-3xl p-6 lg:p-8 border border-white/5 backdrop-blur-md group-hover/card:-translate-y-3 group-hover/card:shadow-[0_20px_40px_rgba(0,0,0,0.6)]">
                    <p className="text-white/90 font-bold mb-6 text-xs uppercase tracking-widest drop-shadow-md flex items-center">
                       <span className="w-2 h-2 rounded-full bg-[#E8B84B] mr-3 animate-pulse" />
                       Comprehensive Support Cover
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                      {[
                        { name: "Preventive maintenance", icon: ShieldCheck },
                        { name: "Periodic inspections", icon: PackageSearch },
                        { name: "Breakdown-support", icon: Wrench },
                        { name: "Mechanical & electrical servicing", icon: Zap },
                        { name: "Automation & control support", icon: Settings },
                        { name: "IoT & software support", icon: Layers },
                        { name: "Performance reviews", icon: Activity },
                        { name: "Component-replacement planning", icon: Layers },
                        { name: "Modernization recommendations", icon: Lightbulb },
                        { name: "Operator & maintenance training", icon: Activity },
                        { name: "Annual Maintenance Contracts", icon: ShieldCheck },
                      ].map((item, idx) => {
                        const Icon = item.icon;
                        return (
                          <motion.div 
                            key={idx} 
                            initial={{ opacity: 0, y: 15 }} 
                            whileInView={{ opacity: 1, y: 0 }} 
                            viewport={{ once: true, margin: "-50px" }} 
                            transition={{ delay: (idx % 6) * 0.05, duration: 0.4 }}
                            className="flex items-start bg-[#050B14]/70 hover:bg-[#131C2E]/90 backdrop-blur-md border border-slate-700/60 hover:border-[#E8B84B]/40 rounded-xl px-4 py-3.5 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(0,0,0,0.5)] cursor-default group/item"
                          >
                            <div className="w-8 h-8 rounded-full bg-[#0A101A] border border-slate-700/50 flex items-center justify-center mr-3 shrink-0 group-hover/item:border-[#E8B84B]/50 group-hover/item:shadow-[0_0_10px_rgba(232,184,75,0.3)] transition-all duration-300">
                               <Icon className="w-3.5 h-3.5 text-slate-400 group-hover/item:text-[#E8B84B] transition-colors duration-300" />
                            </div>
                            <span className="text-slate-200 text-sm font-medium leading-snug group-hover/item:text-white transition-colors pt-1.5">{item.name}</span>
                          </motion.div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Industries Served */}
        <section className="relative py-16 lg:py-20 bg-transparent overflow-hidden border-t border-slate-800/40">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
              <h2 className="flex items-center justify-center text-[#E8B84B] font-bold tracking-[0.2em] uppercase text-xs mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E8B84B] mr-3 animate-pulse shadow-[0_0_10px_rgba(232,184,75,0.8)]" />
                Industries Served
                <span className="w-1.5 h-1.5 rounded-full bg-[#E8B84B] ml-3 animate-pulse shadow-[0_0_10px_rgba(232,184,75,0.8)]" />
              </h2>
              <h3 className="text-4xl md:text-5xl font-black text-white mb-6">
                Products and Systems for <br className="hidden md:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E8B84B] to-amber-500">Diverse Operating Environments</span>
              </h3>
            </div>
            
            {/* Premium Industry Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-5 mb-16 max-w-[1400px] mx-auto">
              {[
                { name: "Manufacturing and industrial automation", icon: Settings, color: "#f97316" }, // Orange
                { name: "Smart agriculture and agri-technology", icon: Sprout, color: "#10b981" }, // Emerald
                { name: "Food and beverage processing", icon: Coffee, color: "#f59e0b" }, // Amber
                { name: "Tea", icon: Sprout, color: "#84cc16" }, // Lime
                { name: "Logistics, warehousing and material handling", icon: Truck, color: "#3b82f6" }, // Blue
                { name: "Energy and resource efficiency", icon: Zap, color: "#eab308" }, // Yellow
                { name: "Environmental and waste management", icon: Trash2, color: "#14b8a6" }, // Teal
                { name: "Infrastructure and smart facilities", icon: Layers, color: "#8b5cf6" }, // Violet
                { name: "Healthcare and biomedical engineering", icon: Activity, color: "#ec4899" }, // Pink
                { name: "Research, innovation and product development", icon: Lightbulb, color: "#06b6d4" }, // Cyan
              ].map((ind, idx) => {
                const Icon = ind.icon;
                return (
                  <motion.div 
                    key={idx} 
                    initial={{ opacity: 0, y: 20 }} 
                    whileInView={{ opacity: 1, y: 0 }} 
                    viewport={{ once: true, margin: "-50px" }} 
                    transition={{ delay: idx * 0.05, duration: 0.5 }}
                    className="group relative h-full"
                  >
                    {/* Hover Glow Background */}
                    <div 
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl blur-xl"
                      style={{ backgroundImage: `linear-gradient(to bottom right, ${ind.color}33, transparent)` }} 
                    />
                    
                    {/* Card */}
                    <div className="relative h-full flex flex-col justify-center items-center text-center bg-[#0A101A]/80 backdrop-blur-xl border border-slate-800/80 hover:border-slate-600 rounded-3xl p-6 transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] overflow-hidden cursor-default">
                      
                      {/* Continuous Auto-Highlight Pulse (Inner border/glow) */}
                      <motion.div
                        animate={{ opacity: [0, 1, 0] }}
                        transition={{ 
                          duration: 10, 
                          repeat: Infinity, 
                          delay: idx * 1, // Slow, sequential cascading delay (1s per card)
                          times: [0, 0.05, 1], // Flash quickly, fade slowly
                          ease: "easeOut"
                        }}
                        className="absolute inset-0 rounded-3xl pointer-events-none"
                        style={{ 
                          border: `1px solid ${ind.color}80`,
                          boxShadow: `inset 0 0 30px ${ind.color}15`
                        }}
                      />

                      {/* Faint large icon in background */}
                      <Icon 
                         className="absolute -bottom-4 -right-4 w-24 h-24 opacity-10 group-hover:opacity-20 transition-opacity duration-500 -rotate-12" 
                         style={{ color: ind.color }}
                      />
                      
                      {/* Main Icon */}
                      <div 
                        className="w-14 h-14 rounded-2xl bg-[#131C2E] border border-slate-700/50 flex items-center justify-center mb-5 transition-all duration-300 relative z-10 shadow-inner group-hover:shadow-lg overflow-hidden"
                      >
                         {/* Hover Background */}
                         <div 
                           className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300" 
                           style={{ backgroundColor: ind.color }}
                         />
                         
                         {/* Continuous Pulse Background */}
                         <motion.div 
                           animate={{ opacity: [0, 0.3, 0] }}
                           transition={{ 
                             duration: 10, 
                             repeat: Infinity, 
                             delay: idx * 1, 
                             times: [0, 0.05, 1], 
                             ease: "easeOut" 
                           }}
                           className="absolute inset-0 pointer-events-none" 
                           style={{ backgroundColor: ind.color }}
                         />
                         
                         <Icon className="w-6 h-6 transition-transform duration-300 group-hover:scale-110 relative z-10" style={{ color: ind.color }} />
                      </div>
                      
                      {/* Text */}
                      <span className="text-slate-300 text-[14px] leading-snug font-medium group-hover:text-white transition-colors duration-300 relative z-10">
                        {ind.name}
                      </span>
                    </div>
                  </motion.div>
                );
              })}
            </div>
            
            <div className="text-center">
              <Link href="/industries" className="inline-flex items-center px-8 py-4 bg-[#0A101A] backdrop-blur-md border border-slate-700 text-white font-bold rounded-xl transition-all hover:bg-[#131C2E] hover:border-[#E8B84B]/50 hover:-translate-y-1 group">
                Explore Industries <ArrowRight className="ml-3 w-4 h-4 text-slate-400 group-hover:text-[#E8B84B] group-hover:translate-x-1 transition-all" />
              </Link>
            </div>
          </div>
        </section>

        {/* Completed Work & Final CTA - Combined Premium Footer Section */}
        <section className="relative pt-32 pb-16 bg-transparent overflow-hidden border-t border-slate-800/40">
          {/* Massive Central Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gradient-to-br from-[#E8B84B]/10 to-[#2E5EAA]/10 rounded-full blur-[200px] pointer-events-none" />
          
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-32">
            
            {/* Completed Work Module */}
            <div className="text-center">
              <h2 className="flex items-center justify-center text-[#E8B84B] font-bold tracking-[0.2em] uppercase text-xs mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E8B84B] mr-3 animate-pulse shadow-[0_0_10px_rgba(232,184,75,0.8)]" />
                Completed Work
                <span className="w-1.5 h-1.5 rounded-full bg-[#E8B84B] ml-3 animate-pulse shadow-[0_0_10px_rgba(232,184,75,0.8)]" />
              </h2>
              <h3 className="text-4xl md:text-5xl font-black text-white mb-6">See Sanota Products and Systems in Operation</h3>
              <p className="text-slate-300 text-lg leading-relaxed mb-16 max-w-3xl mx-auto">
                Explore machinery, automation, smart-agriculture systems, IoT platforms, modernization projects and custom engineering solutions developed for real operating environments.
              </p>
              
              {/* Premium 5-Step Case Study Flow */}
              <div className="relative max-w-5xl mx-auto mb-16 px-4">
                {/* Background track line */}
                <div className="hidden md:block absolute top-6 left-[10%] right-[10%] h-[1px] bg-slate-800/50" />
                
                {/* Animated glowing progress line */}
                <motion.div 
                  initial={{ width: 0, opacity: 0 }}
                  whileInView={{ width: "80%", opacity: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  className="hidden md:block absolute top-[23px] left-[10%] h-[2px] bg-gradient-to-r from-transparent via-[#E8B84B] to-[#E8B84B]/10 shadow-[0_0_10px_rgba(232,184,75,0.6)] rounded-full" 
                />
                
                <div className="flex flex-col md:flex-row justify-between items-start gap-8 md:gap-4 relative z-10">
                  {[
                    "The client’s challenge", 
                    "The product or system required", 
                    "The technologies brought together", 
                    "Sanota’s role", 
                    "The implemented outcome"
                  ].map((item, idx) => (
                    <motion.div 
                      key={idx} 
                      initial={{ opacity: 0, scale: 0.5, y: 30 }} 
                      whileInView={{ opacity: 1, scale: 1, y: 0 }} 
                      whileHover={{ y: -10, scale: 1.05 }}
                      viewport={{ once: true, margin: "-50px" }} 
                      transition={{ delay: idx * 0.25, duration: 0.6, type: "spring", bounce: 0.5 }}
                      className="group flex flex-col items-center flex-1 w-full cursor-pointer"
                    >
                      <div className="w-12 h-12 rounded-2xl bg-[#0B1220] backdrop-blur-md border border-slate-700/60 flex items-center justify-center mb-5 group-hover:border-[#E8B84B] group-hover:bg-[#E8B84B]/10 group-hover:shadow-[0_0_25px_rgba(232,184,75,0.4)] transition-all duration-300 relative z-10">
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-[#E8B84B]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        
                        {/* Ping animation effect when appearing */}
                        <motion.div 
                          initial={{ scale: 0.8, opacity: 0 }}
                          whileInView={{ scale: 1.6, opacity: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: (idx * 0.25) + 0.4, duration: 1, repeat: 0 }}
                          className="absolute inset-0 rounded-2xl border-2 border-[#E8B84B] pointer-events-none"
                        />

                        {/* Hover Ping Ring */}
                        <div className="absolute inset-0 rounded-2xl border border-[#E8B84B]/50 opacity-0 group-hover:opacity-100 group-hover:animate-ping pointer-events-none" />

                        <span className="text-[#E8B84B] font-black text-sm relative z-10 group-hover:scale-110 transition-transform">{idx + 1}</span>
                      </div>
                      <span className="text-slate-400 text-sm font-medium text-center group-hover:text-white transition-colors duration-300 leading-relaxed px-2">
                        {item}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row justify-center gap-5">
                <Link href="/media" className="px-8 py-4 bg-gradient-to-r from-[#E8B84B] to-[#d4a643] text-[#0B1220] font-black rounded-xl transition-all hover:shadow-[0_0_20px_rgba(232,184,75,0.3)] hover:-translate-y-1 flex items-center justify-center group">
                  View Completed Work <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link href="/media" className="px-8 py-4 bg-[#0A101A] backdrop-blur-md border border-slate-700 hover:border-[#E8B84B]/50 hover:bg-[#131C2E] text-white font-bold rounded-xl transition-all hover:-translate-y-1 flex items-center justify-center">
                  Visit the Media Centre
                </Link>
              </div>
            </div>

            {/* Restored Original Final CTA Box - Home Page Style */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative text-center mt-10 mb-20"
            >
              <div className="bg-[#050B14] border border-slate-800/60 rounded-[2.5rem] p-10 md:p-16 max-w-5xl mx-auto relative overflow-hidden shadow-2xl">
                {/* Background ambient glow inside the box */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-t from-[#E8B84B]/10 to-transparent rounded-[100%] blur-3xl pointer-events-none" />

                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-4 relative z-10">
                  Not Sure Which Product or <br className="hidden sm:block" />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">System You Need?</span>
                </h2>
                
                <p className="text-lg text-white font-semibold mb-8 relative z-10">
                  You do not need to begin with a product name or technical specification. Tell us:
                </p>
                
                <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-12 max-w-4xl mx-auto relative z-10">
                  {[
                    "What is happening now",
                    "What needs to work better",
                    "What you want to develop",
                    "Where the solution will operate",
                    "What result you expect"
                  ].map((item, idx) => (
                    <span 
                      key={idx}
                      className="inline-flex items-center px-6 py-3 border border-slate-700/60 rounded-full text-slate-300 text-[14px] font-medium bg-[#0B1220]/50 hover:bg-[#131C2E] hover:text-white hover:border-[#E8B84B]/50 transition-colors shadow-sm cursor-default"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-[#E8B84B] mr-3" />
                      {item}
                    </span>
                  ))}
                </div>

                <p className="text-[16px] text-slate-400 mb-12 max-w-3xl mx-auto leading-relaxed relative z-10">
                  Sanota will review the requirement and guide you towards the appropriate product, system or custom-engineering pathway.
                </p>

                <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 relative z-10">
                  <Link
                    href="/tell-us-your-challenge"
                    className="inline-flex justify-center items-center px-10 py-4 border border-transparent text-[14px] font-bold rounded-lg text-[#0B1220] bg-[#E8B84B] hover:bg-[#d4a643] transition-all transform hover:scale-105 shadow-[0_0_30px_rgba(232,184,75,0.3)] w-full sm:w-auto group"
                  >
                    Tell Us Your Challenge <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex justify-center items-center px-10 py-4 border border-slate-700 text-[14px] font-bold rounded-lg text-white hover:bg-slate-800 transition-all w-full sm:w-auto"
                  >
                    Request Engineering Consultation
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* Final CTA in Home Page Style */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative mt-16 text-center"
            >
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-6">
                What Do You Need to Build, <br className="hidden md:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E8B84B] to-[#2E5EAA]">Improve, Automate or Connect?</span>
              </h3>
              <p className="text-[16px] text-slate-400 mb-12 max-w-3xl mx-auto leading-relaxed">
                From individual machinery and products to complete integrated systems, Sanota brings together the engineering and technology capabilities required to move from concept to working solution.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 mb-16">
                <Link
                  href="/tell-us-your-challenge"
                  className="inline-flex justify-center items-center px-10 py-4 border border-transparent text-[14px] font-bold rounded-lg text-[#0B1220] bg-[#E8B84B] hover:bg-[#d4a643] transition-all transform hover:scale-105 shadow-[0_0_30px_rgba(232,184,75,0.3)] w-full sm:w-auto group"
                >
                  Tell Us Your Requirement <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex justify-center items-center px-10 py-4 border border-slate-700 text-[14px] font-bold rounded-lg text-white hover:bg-slate-800 transition-all w-full sm:w-auto"
                >
                  Contact Sanota
                </Link>
              </div>

              <p className="text-[#E8B84B] text-[11px] font-bold tracking-[0.2em] uppercase">
                Designed around the requirement. Integrated for the operation. Supported throughout the lifecycle.
              </p>
            </motion.div>

          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
