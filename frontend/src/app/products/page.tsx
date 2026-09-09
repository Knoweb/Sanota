"use client";

import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowRight, Settings, Coffee, Sprout, Activity, Truck, Zap, Trash2, Lightbulb, PackageSearch, Layers, Wrench, ShieldCheck } from "lucide-react";

const productCategories = [
  {
    number: "01",
    title: "Industrial Machinery & Automation Systems",
    intro: "Sanota develops and integrates machinery and automation solutions intended to improve productivity, consistency, safety and operational control. Solutions may involve new machinery, special-purpose equipment, automated stations or the modernization of existing machines.",
    color: "from-blue-600 to-cyan-500",
    icon: Settings,
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
        <section className="py-20 bg-[#0B1220] border-b border-slate-800/50 bg-transparent">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">From Individual Equipment to Complete Integrated Solutions</h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-6">
              Some clients require a specific machine or product. Others require a complete operational system involving equipment, controls, sensors, software and implementation. <strong className="text-slate-300">Sanota supports both.</strong>
            </p>
            <p className="text-slate-400 text-lg leading-relaxed mb-6">
              Depending on the requirement, Sanota can provide:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto mb-8 text-left">
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
                <div key={idx} className="flex items-center bg-[#131C2E]/60 border border-slate-800 rounded-xl px-4 py-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#E8B84B] mr-3 shrink-0" />
                  <span className="text-slate-300 text-sm">{item}</span>
                </div>
              ))}
            </div>
            <p className="text-slate-400 text-lg leading-relaxed">
              The appropriate approach is determined after understanding the client’s application, operating environment and expected outcome.
            </p>
          </div>
        </section>

        {/* Categories */}
        <section id="categories" className="py-24 bg-[#050B14] bg-transparent">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-[#E8B84B] font-bold tracking-widest uppercase text-sm mb-4">Product and System Categories</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-white">Explore Sanota’s Product and System Capabilities</h3>
            </div>

            <div className="space-y-8">
              {productCategories.map((category, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.05 * (idx % 4) }}
                  className="glowing-card bg-[#131C2E]/50 border border-slate-800 rounded-3xl p-8 md:p-10 hover:border-slate-700 transition-colors"
                >
                  <div className="flex flex-col lg:flex-row gap-10">
                    <div className="lg:w-2/5">
                      <div className="flex items-start mb-6">
                        <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${category.color} p-0.5 mr-5 flex-shrink-0`}>
                          <div className="w-full h-full bg-[#0D1829] rounded-[14px] flex items-center justify-center">
                            <category.icon className="w-7 h-7 text-white" />
                          </div>
                        </div>
                        <div>
                          <span className="text-slate-600 font-bold text-xs tracking-widest uppercase block mb-1">{category.number}</span>
                          <h3 className="text-xl md:text-2xl font-bold text-white leading-snug">{category.title}</h3>
                        </div>
                      </div>
                      <p className="text-slate-400 leading-relaxed mb-6">{category.intro}</p>
                      
                      <div className="bg-[#0B1220] border border-slate-800 rounded-xl p-5">
                        <p className="text-[#E8B84B] font-bold text-xs uppercase tracking-widest mb-3">Suitable for organizations seeking to:</p>
                        <div className="space-y-2">
                          {category.clientNeeds.map((need, nIdx) => (
                            <p key={nIdx} className="text-slate-400 text-sm italic leading-relaxed">{need}</p>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="lg:w-3/5">
                      <p className="text-slate-500 font-bold text-xs uppercase tracking-widest mb-5">Solutions may include</p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {category.items.map((item, itemIdx) => (
                          <div key={itemIdx} className="flex items-start bg-[#0B1220]/60 border border-slate-800/60 rounded-lg px-4 py-3">
                            <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-br ${category.color} mt-2 mr-3 shrink-0`} />
                            <span className="text-slate-300 text-sm leading-relaxed">{item}</span>
                          </div>
                        ))}
                      </div>

                      <div className="mt-8 flex justify-end">
                        <a href={category.link} className="flex items-center text-[#2E5EAA] hover:text-white text-sm font-semibold transition-colors group">
                          Explore {category.title} <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* How Sanota Classifies an Offering */}
        <section className="py-24 bg-[#0B1220] border-t border-slate-800/50 bg-transparent">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-[#E8B84B] font-bold tracking-widest uppercase text-sm mb-4">How Sanota Classifies an Offering</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">Product, System or Custom Solution?</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {[
                { title: "Product", desc: "A defined item of machinery, equipment, hardware or software that can be supplied or adapted for an application.", icon: PackageSearch },
                { title: "System", desc: "A coordinated combination of products, equipment, controls and technologies working together to achieve an operational outcome.", icon: Layers },
                { title: "Custom Solution", desc: "A product or system designed or significantly modified around a client’s specific requirement.", icon: Wrench },
                { title: "Integrated Solution", desc: "A complete response that may combine engineering, machinery, automation, IoT, software, implementation and long-term support.", icon: ShieldCheck }
              ].map((item, idx) => (
                <div key={idx} className="glowing-card bg-[#131C2E]/40 border border-slate-800 rounded-2xl p-6 hover:bg-[#131C2E]/80 transition-colors flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-[#E8B84B]/10 flex items-center justify-center mb-4">
                    <item.icon className="w-6 h-6 text-[#E8B84B]" />
                  </div>
                  <h4 className="text-white font-bold mb-3">{item.title}</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
            
            <div className="text-center">
              <p className="text-slate-400 text-lg">Sanota will help determine which approach is most appropriate after reviewing the requirement.</p>
            </div>
          </div>
        </section>

        {/* Selected Solution Areas */}
        <section className="py-24 bg-[#050B14] border-t border-slate-800/50 bg-transparent">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2 className="text-[#E8B84B] font-bold tracking-widest uppercase text-sm mb-4">Selected Solution Areas</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">Examples of What Sanota Can Develop and Integrate</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-10">
              {selectedSolutions.map((sol, idx) => (
                <div key={idx} className="flex items-center bg-[#0B1220]/60 border border-slate-800 rounded-xl px-4 py-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#E8B84B] mr-3 shrink-0" />
                  <span className="text-slate-300 text-sm">{sol}</span>
                </div>
              ))}
            </div>
            <div className="text-center">
              <p className="text-slate-400 italic">The final configuration, specifications and scope will depend on the client’s application and technical assessment.</p>
            </div>
          </div>
        </section>

        {/* New Systems and Existing Equipment */}
        <section className="py-24 bg-[#131C2E] border-t border-slate-800 bg-transparent">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-[#E8B84B] font-bold tracking-widest uppercase text-sm mb-4">New Systems and Existing Equipment</h2>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">Develop New. Improve Existing. Connect What Already Works.</h3>
                <p className="text-slate-300 text-lg leading-relaxed mb-6">Sanota’s role is not limited to developing new machinery and systems.</p>
                <p className="text-slate-400 text-lg leading-relaxed mb-8">Existing equipment may still have significant operational value but require improved controls, new components, automation, digital monitoring or structured maintenance.</p>
                <Link href="/services" className="inline-flex items-center px-7 py-3.5 bg-[#0B1220] hover:bg-slate-800 text-white font-bold rounded-lg border border-slate-700 transition-colors">
                  Explore Retrofit & Modernization <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
              <div>
                <p className="text-slate-300 font-bold mb-6">Sanota can assess existing machinery and systems to identify opportunities for:</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {existingEquipments.map((eq, idx) => (
                    <div key={idx} className="flex items-center bg-[#0B1220]/40 border border-slate-800 rounded-xl px-4 py-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#E8B84B] mr-3 shrink-0" />
                      <span className="text-slate-300 text-sm">{eq}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sanota + Knoweb */}
        <section className="py-24 bg-[#050B14] border-t border-slate-800/50 bg-transparent">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {knowebItems.map((item, idx) => (
                    <div key={idx} className="flex items-center bg-[#131C2E]/60 border border-slate-800 rounded-xl px-4 py-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#E8B84B] mr-3 shrink-0" />
                      <span className="text-slate-300 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <h2 className="text-[#E8B84B] font-bold tracking-widest uppercase text-sm mb-4">Sanota + Knoweb</h2>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">Engineering Products Connected by Digital Technology</h3>
                <p className="text-slate-400 text-lg leading-relaxed mb-6">Modern engineering products increasingly depend on software, connectivity and access to operational information.</p>
                <p className="text-slate-400 text-lg leading-relaxed mb-8">Through Knoweb, an affiliated IT company under common ownership, Sanota can strengthen engineering products and systems.</p>
                <p className="text-slate-400 text-lg leading-relaxed mb-8">Sanota coordinates the overall engineering requirement, while Knoweb contributes specialized software and digital capability where required.</p>
                <Link href="#automation-iot" className="inline-flex items-center px-7 py-3.5 bg-[#131C2E] hover:bg-slate-800 text-white font-bold rounded-lg border border-slate-700 transition-colors">
                  Explore Automation, IoT & Digital Integration <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* How a Solution is Developed */}
        <section className="py-24 bg-[#0B1220] border-t border-slate-800/50 bg-transparent">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-[#E8B84B] font-bold tracking-widest uppercase text-sm mb-4">How a Solution is Developed</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">From Requirement to Working System</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-12">
              {[
                { n: "1", title: "Understand the Requirement", desc: "Sanota studies the operational challenge, intended outcome and working environment." },
                { n: "2", title: "Assess the Application", desc: "Existing equipment, processes, constraints, risks and integration requirements are reviewed." },
                { n: "3", title: "Define the Solution", desc: "The appropriate product, system or custom-development approach is identified." },
                { n: "4", title: "Design and Develop", desc: "Mechanical, electrical, automation, IoT and software elements are developed as required." },
                { n: "5", title: "Integrate and Test", desc: "Components and technologies are assembled, programmed, connected and tested." },
                { n: "6", title: "Install and Commission", desc: "The solution is implemented and verified in the intended operating environment." },
                { n: "7", title: "Train and Support", desc: "Operator guidance, technical documentation, maintenance and AMC support can be provided." }
              ].map((step, idx) => (
                <motion.div key={idx} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.07 }} className="glowing-card flex bg-[#131C2E]/40 border border-slate-800 rounded-2xl p-6 hover:bg-[#131C2E]/80 transition-colors">
                  <div className="w-10 h-10 rounded-full bg-[#E8B84B]/10 border border-[#E8B84B]/20 flex items-center justify-center mr-5 flex-shrink-0">
                    <span className="text-[#E8B84B] font-black text-sm">{step.n}</span>
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-2">{step.title}</h4>
                    <p className="text-slate-400 text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="text-center">
              <Link href="/tell-us-your-challenge" className="inline-flex items-center px-8 py-4 bg-[#E8B84B] hover:bg-[#d4a643] text-[#0B1220] font-bold rounded-lg transition-colors">
                Tell Us Your Requirement <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* Support After Implementation */}
        <section className="py-24 bg-[#131C2E] border-t border-slate-800 bg-transparent">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-[#E8B84B] font-bold tracking-widest uppercase text-sm mb-4">Support After Implementation</h2>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">Protecting the Value of the Solution</h3>
                <p className="text-slate-400 text-lg leading-relaxed mb-8">Sanota can continue supporting products and systems after installation and commissioning. AMC and maintenance support may also be available for eligible third-party machinery and systems following a technical assessment.</p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/contact" className="inline-flex items-center justify-center px-7 py-3.5 bg-[#E8B84B] hover:bg-[#d4a643] text-[#0B1220] font-bold rounded-lg transition-colors">
                    Request an AMC Assessment <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                  <Link href="/services" className="inline-flex items-center justify-center px-7 py-3.5 bg-[#0B1220] hover:bg-slate-800 text-white font-bold rounded-lg border border-slate-700 transition-colors">
                    Explore Lifecycle Support
                  </Link>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {supportItems.map((item, idx) => (
                  <div key={idx} className="flex items-center bg-[#0B1220]/60 border border-slate-800 rounded-xl px-4 py-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#E8B84B] mr-3 shrink-0" />
                    <span className="text-slate-300 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Industries Served */}
        <section className="py-24 bg-[#0B1220] border-t border-slate-800/50 bg-transparent">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2 className="text-[#E8B84B] font-bold tracking-widest uppercase text-sm mb-4">Industries Served</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">Products and Systems for Diverse Operating Environments</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 mb-10">
              {industries.map((ind, idx) => (
                <div key={idx} className="flex items-center bg-[#131C2E]/60 border border-slate-800 rounded-xl px-4 py-3 text-center justify-center hover:bg-[#131C2E] transition-colors">
                  <span className="text-slate-300 text-sm">{ind}</span>
                </div>
              ))}
            </div>
            <div className="text-center">
              <Link href="/industries" className="inline-flex items-center px-7 py-3.5 bg-[#131C2E] hover:bg-slate-800 text-white font-bold rounded-lg border border-slate-700 transition-colors">
                Explore Industries <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Completed Work */}
        <section className="py-24 bg-[#050B14] border-t border-slate-800/50 bg-transparent">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-[#E8B84B] font-bold tracking-widest uppercase text-sm mb-4">Completed Work</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">See Sanota Products and Systems in Operation</h3>
            <p className="text-slate-400 text-lg leading-relaxed mb-6 max-w-3xl mx-auto">
              Explore machinery, automation, smart-agriculture systems, IoT platforms, modernization projects and custom engineering solutions developed for real operating environments.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-10 text-slate-300 text-sm italic">
              <span>• The client’s challenge</span>
              <span>• The product or system required</span>
              <span>• The technologies brought together</span>
              <span>• Sanota’s role</span>
              <span>• The implemented outcome</span>
            </div>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/media" className="px-8 py-4 bg-[#E8B84B] hover:bg-[#d4a643] text-[#0B1220] font-bold rounded-lg transition-colors flex items-center justify-center">
                View Completed Work <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link href="/media" className="px-8 py-4 bg-[#131C2E] hover:bg-slate-800 text-white font-bold rounded-lg border border-slate-700 transition-colors flex items-center justify-center">
                Visit the Media Centre
              </Link>
            </div>
          </div>
        </section>

        {/* Find the Right Solution */}
        <section className="py-24 bg-[#0B1220] border-t border-slate-800/50 bg-transparent">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-[#E8B84B] font-bold tracking-widest uppercase text-sm mb-4">Find the Right Solution</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">Not Sure Which Product or System You Need?</h3>
            <p className="text-slate-300 text-lg leading-relaxed mb-6">You do not need to begin with a product name or technical specification. Tell us:</p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-10 text-slate-400">
              {["What is happening now", "What needs to work better", "What you want to develop", "Where the solution will operate", "What result you expect"].map((item, idx) => (
                <div key={idx} className="bg-[#131C2E]/60 border border-slate-800 rounded-full px-5 py-2 text-sm">{item}</div>
              ))}
            </div>

            <p className="text-slate-400 text-lg leading-relaxed mb-10">Sanota will review the requirement and guide you towards the appropriate product, system or custom-engineering pathway.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/tell-us-your-challenge" className="px-8 py-4 bg-[#E8B84B] hover:bg-[#d4a643] text-[#0B1220] font-bold rounded-lg transition-colors flex items-center justify-center">
                Tell Us Your Challenge <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link href="/contact" className="px-8 py-4 bg-[#131C2E] hover:bg-slate-800 text-white font-bold rounded-lg border border-slate-700 transition-colors flex items-center justify-center">
                Request Engineering Consultation
              </Link>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 bg-[#131C2E] border-t border-slate-800 bg-transparent">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
              What Do You Need to Build, Improve, Automate or Connect?
            </h2>
            <p className="text-slate-400 text-lg mb-12 leading-relaxed max-w-3xl mx-auto">
              From individual machinery and products to complete integrated systems, Sanota brings together the engineering and technology capabilities required to move from concept to working solution.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-10">
              <Link href="/tell-us-your-challenge" className="px-8 py-4 bg-[#E8B84B] hover:bg-[#d4a643] text-[#0B1220] font-bold rounded-lg transition-colors flex items-center justify-center">
                Tell Us Your Requirement <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link href="/contact" className="px-8 py-4 bg-[#0B1220] hover:bg-slate-800 text-white font-bold rounded-lg border border-slate-700 transition-colors flex items-center justify-center">
                Contact Sanota
              </Link>
            </div>
            <p className="text-slate-500 text-sm italic">Designed around the requirement. Integrated for the operation. Supported throughout the lifecycle.</p>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
