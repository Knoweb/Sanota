"use client";

import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import AeroShards from "@/components/AeroShards";
import { ArrowRight, Search, PenTool, Wrench, Cpu, RefreshCw, Rocket, Shield, GraduationCap, Layers } from "lucide-react";

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
      "Custom machinery development",
      "Special-purpose equipment",
      "Production and processing equipment",
      "Product and prototype development",
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
      "Industrial automation",
      "PLC and control-system development",
      "HMI and operator interfaces",
      "Sensor and instrumentation integration",
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
      "Electrical-system improvement",
      "Control-system replacement",
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
  return (
    <div className="flex flex-col min-h-screen bg-transparent">
      <Header />
      <main className="flex-grow">

        {/* Hero Section */}
        <section className="relative pt-32 lg:pt-48 pb-20 lg:pb-32 overflow-hidden border-b border-slate-800 bg-transparent min-h-[60vh] lg:min-h-[70vh] flex flex-col justify-center">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/services_hero_bg.jpg')" }}
          />
          <div className="absolute inset-0 bg-[#050B14]/60" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050B14]/20 to-[#050B14]/90" />

          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-[#E8B84B] font-bold tracking-widest uppercase text-sm mb-5"
            >
              Engineering Services
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 }}
              className="text-4xl sm:text-6xl font-black text-white tracking-tight mb-6 leading-tight"
            >
              Integrated Services for<br className="hidden sm:block" />
              <span className="text-[#2E5EAA]"> Real Operational Challenges</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-slate-300 max-w-3xl mx-auto mb-4 font-medium"
            >
              From problem analysis and engineering design to implementation, automation and long-term support.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="text-lg text-slate-400 max-w-3xl mx-auto mb-10 leading-relaxed"
            >
              Sanota helps industries solve technical and operational challenges through coordinated engineering and technology services. Depending on the requirement, a solution may combine mechanical engineering, electrical and electronic systems, automation, IoT, software, fabrication, installation, commissioning and lifecycle support.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-col sm:flex-row justify-center gap-4 mb-12"
            >
              <Link
                href="/tell-us-your-challenge"
                className="px-8 py-4 bg-[#E8B84B] hover:bg-[#d4a643] text-[#0B1220] font-bold rounded-lg transition-colors flex items-center justify-center"
              >
                Tell Us Your Challenge <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <a
                href="#services-list"
                className="px-8 py-4 bg-[#131C2E]/80 hover:bg-slate-800 text-white font-bold rounded-lg border border-slate-700 transition-colors flex items-center justify-center"
              >
                Explore Our Services
              </a>
            </motion.div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-[#E8B84B] font-bold text-xs tracking-widest uppercase"
            >
              Consult <span className="mx-2 text-slate-600">•</span> Design <span className="mx-2 text-slate-600">•</span> Develop <span className="mx-2 text-slate-600">•</span> Integrate <span className="mx-2 text-slate-600">•</span> Implement <span className="mx-2 text-slate-600">•</span> Maintain
            </motion.p>
          </div>
        </section>

        {/* Introduction */}
        <section className="relative py-8 lg:py-12 bg-[#0B1220] overflow-hidden">
          {/* Slowly moving AeroShards Background */}
          <div className="absolute inset-0 overflow-hidden z-0">
            <AeroShards
              backgroundColor="#0B1220"
              shardColor="#1A1813"
              accentColor="#E8B84B"
              placement="full"
              flow="stream"
              material="pearl"
              detail="fine"
              effect="none"
              scale={1}
              spread={1.2}
              depth={1}
              speed={0.3}
              spin={0.2}
              interaction="none"
              density={1}
              shardSize={0.8}
              stretch={1}
              turbulence={0.5}
              glow={0.3}
              edgeSoftness={2}
              bloom={0.1}
              grain={0.01}
              chromaticAberration={0}
              transitionDuration={2}
              interactionRadius={0}
              interactionStrength={0}
              rippleIntensity={0}
              holdToGather={false}
              paused={false}
            />
          </div>
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#131C2E]/60 to-transparent opacity-60 pointer-events-none z-0" />

          <div className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-3xl md:text-5xl font-black text-white mb-8 leading-tight">
                More Than a <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E8B84B] to-[#F1D08A]">Single Service</span>
              </h2>

              <p className="text-slate-300 text-lg md:text-xl leading-relaxed mb-6 font-medium">
                Industrial challenges rarely belong to only one technical discipline.
              </p>

              <p className="text-slate-400 text-base md:text-lg leading-relaxed mb-6">
                A machinery problem may require mechanical modifications, new electrical controls, automation, software monitoring and ongoing maintenance. A new product may require concept development, engineering design, prototyping, testing and production support.
              </p>

              <div className="mt-8 p-6 sm:p-8 rounded-2xl bg-[#131C2E]/50 border border-slate-700/50 border-l-4 border-l-[#E8B84B] shadow-lg relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-r from-[#E8B84B]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                <p className="text-white text-base md:text-lg leading-relaxed relative z-10 font-medium">
                  <span className="text-[#E8B84B]">Sanota brings the required capabilities together</span> around the client's operational need. This provides clients with a more coordinated path from the initial requirement to a practical working solution.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services List */}
        <section id="services-list" className="py-24 bg-[#050B14] bg-transparent">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">

            <div className="text-center mb-16">
              <h2 className="text-[#E8B84B] font-bold tracking-widest uppercase text-sm mb-4">Service Pillars</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-white">How Sanota Can Support You</h3>
            </div>

            <div className="space-y-8">
              {services.map((service, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: 0.05 * (idx % 4) }}
                  className="relative group bg-[#0F1523] border border-slate-800/60 rounded-[28px] p-8 lg:p-12 mb-10 last:mb-0 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)] hover:-translate-y-1 overflow-hidden"
                >
                  <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 relative z-10">

                    {/* Left: Header + Description */}
                    <div className="lg:w-1/2 flex flex-col">
                      <div className="flex items-start mb-8">
                        {/* Icon with prominent glow */}
                        <div className="relative mr-6 shrink-0">
                          {/* Intense blur behind the icon */}
                          <div className={`absolute -inset-3 bg-gradient-to-br ${service.color} rounded-full blur-[24px] opacity-40 group-hover:opacity-60 transition-opacity duration-500`} />

                          {/* Icon Container */}
                          <div className={`relative w-[60px] h-[60px] rounded-2xl p-[1px] bg-gradient-to-br ${service.color}`}>
                            <div className="w-full h-full bg-[#0F1523] rounded-[15px] flex items-center justify-center">
                              <service.icon className="w-7 h-7 text-white" />
                            </div>
                          </div>
                        </div>

                        <div className="flex flex-col justify-center pt-1">
                          <span className="text-slate-500 font-bold text-[11px] tracking-widest uppercase mb-1.5">{service.number}</span>
                          <h3 className="text-2xl md:text-[32px] font-bold text-white leading-tight">{service.title}</h3>
                        </div>
                      </div>

                      <p className="text-white text-lg font-bold mb-5 leading-relaxed">{service.intro}</p>
                      <p className="text-slate-400 text-[15px] leading-relaxed mb-8">{service.description}</p>

                      {/* Client Needs */}
                      <div className="bg-[#0A0F1A] rounded-[20px] p-7 mt-auto relative">
                        {/* Decorative subtle left border glow */}
                        <div className="absolute left-0 top-6 bottom-6 w-[2px] bg-gradient-to-b from-transparent via-slate-700 to-transparent group-hover:via-[#E8B84B] transition-colors duration-500" />

                        <p className="text-[#E8B84B] font-bold text-[11px] uppercase tracking-[0.15em] mb-5 flex items-center">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#E8B84B] mr-2.5" />
                          Typical client needs
                        </p>
                        <div className="space-y-4">
                          {service.clientNeeds.map((need, nIdx) => (
                            <p key={nIdx} className="text-slate-300 text-[14px] italic leading-relaxed">
                              {need}
                            </p>
                          ))}
                        </div>
                      </div>

                    </div>

                    {/* Right: Services list */}
                    <div className="lg:w-1/2 pt-2 flex flex-col">
                      <p className="text-slate-500 font-bold text-[11px] uppercase tracking-[0.15em] mb-6">Services may include</p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                        {service.items.map((item, itemIdx) => (
                          <div key={itemIdx} className="flex items-center bg-[#151D2F] rounded-xl px-5 py-4">
                            <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-br ${service.color} mr-4 shrink-0`} />
                            <span className="text-slate-300 text-[14.5px] font-medium leading-snug">{item}</span>
                          </div>
                        ))}
                      </div>

                      <div className="mt-auto flex justify-end">
                        <a href={service.link} className="inline-flex items-center text-[#3B82F6] hover:text-blue-400 text-[15px] font-semibold transition-all duration-300 group/link">
                          Explore {service.title}
                          <span className="ml-3 w-8 h-8 rounded-full bg-[#151D2F] flex items-center justify-center group-hover/link:bg-[#1E293B] transition-colors duration-300">
                            <ArrowRight className="w-4 h-4 text-[#3B82F6] group-hover/link:text-blue-400 group-hover/link:translate-x-0.5 transition-all" />
                          </span>
                        </a>
                      </div>
                    </div>

                  </div>
                </motion.div>
              ))}
            </div>

          </div>
        </section>

        {/* Integrated Service Model */}
        <section className="py-24 bg-[#0B1220] border-t border-slate-800/50 bg-transparent">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-[#E8B84B] font-bold tracking-widest uppercase text-sm mb-4">Integrated Service Model</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">One Requirement May Use Several Sanota Services</h3>
              <p className="text-slate-400 text-lg max-w-2xl mx-auto">A client does not need to decide which technical departments should be involved. Sanota first studies the requirement and then identifies the appropriate combination of services.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-14">
              {[
                { title: "Modernizing an Existing Machine", steps: ["Consultation and assessment", "Mechanical and electrical redesign", "Automation and control upgrade", "IoT monitoring", "Installation and commissioning", "AMC and lifecycle support"], color: "from-blue-600 to-cyan-500" },
                { title: "Developing a New Product", steps: ["Requirement definition", "Engineering and product design", "Prototype development", "Electronics and software integration", "Testing and improvement", "Production-development support"], color: "from-emerald-500 to-teal-500" },
                { title: "Automating an Industrial Process", steps: ["Process analysis", "Automation design", "Machinery and controls integration", "Dashboard or software development", "Installation and commissioning", "Training and ongoing support"], color: "from-purple-600 to-pink-500" },
              ].map((example, idx) => (
                <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }} className="bg-[#131C2E]/50 border border-slate-800 rounded-2xl p-7 hover:border-slate-700 transition-colors">
                  <div className={`w-10 h-1 rounded-full bg-gradient-to-r ${example.color} mb-5`} />
                  <h4 className="text-white font-bold text-lg mb-6 leading-snug">{example.title}</h4>
                  <div className="space-y-3">
                    {example.steps.map((step, sIdx) => (
                      <div key={sIdx} className="flex items-start">
                        <span className="text-xs font-black mr-3 mt-0.5 text-slate-500 shrink-0">{String(sIdx + 1).padStart(2, '0')}</span>
                        <p className="text-slate-400 text-sm leading-relaxed">{step}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="text-center">
              <Link href="/tell-us-your-challenge" className="inline-flex items-center px-8 py-4 bg-[#E8B84B] hover:bg-[#d4a643] text-[#0B1220] font-bold rounded-lg transition-colors">
                Tell Us Your Challenge <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* How to Engage */}
        <section className="py-24 bg-[#050B14] border-t border-slate-800/50 bg-transparent">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-[#E8B84B] font-bold tracking-widest uppercase text-sm mb-4">How to Engage Sanota</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">Start With the Operational Need</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-12">
              {[
                { n: "1", title: "Tell Us the Challenge", desc: "Explain what is not working, what needs improvement or what you want to develop." },
                { n: "2", title: "Initial Technical Review", desc: "Sanota reviews the requirement and identifies the relevant capabilities and specialists." },
                { n: "3", title: "Consultation or Assessment", desc: "The next step may include a discussion, document review, site visit or technical inspection." },
                { n: "4", title: "Recommended Approach", desc: "Sanota defines the proposed solution pathway, scope and implementation requirements." },
                { n: "5", title: "Design and Delivery", desc: "Following agreement, the solution moves through design, development, integration, implementation and commissioning." },
                { n: "6", title: "Continued Support", desc: "Training, maintenance, AMC and future modernization support can be provided where required." },
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
            <div className="bg-[#2E5EAA]/10 border border-[#2E5EAA]/20 rounded-2xl p-6 text-center">
              <p className="text-slate-300 leading-relaxed">
                <span className="font-bold text-white">You do not need to prepare a complete technical specification before contacting Sanota.</span> Begin with the problem or desired outcome.
              </p>
            </div>
          </div>
        </section>

        {/* Industries Supported */}
        <section className="relative py-24 bg-transparent overflow-hidden border-t border-slate-800/40">
          {/* Ambient Background Effects */}
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-[#2E5EAA]/10 to-[#E8B84B]/5 rounded-full blur-[120px] pointer-events-none -translate-y-1/3 translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-[#E8B84B]/5 to-transparent rounded-full blur-[100px] pointer-events-none translate-y-1/3 -translate-x-1/4" />
          
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
                {/* Decorative side accent */}
                <div className="absolute -left-6 md:-left-10 top-2 bottom-10 w-1 bg-gradient-to-b from-[#E8B84B] via-[#E8B84B]/20 to-transparent rounded-full opacity-60" />
                
                <h2 className="flex items-center text-[#E8B84B] font-bold tracking-[0.2em] uppercase text-xs mb-6">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E8B84B] mr-3 animate-pulse shadow-[0_0_10px_rgba(232,184,75,0.8)]" />
                  Industries Supported
                </h2>
                
                <h3 className="text-4xl md:text-5xl lg:text-[44px] font-black text-white mb-8 leading-[1.15]">
                  Services Shaped Around <br className="hidden md:block" />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E8B84B] to-amber-600">Different Operating Environments</span>
                </h3>
                
                <p className="text-slate-400 text-lg leading-relaxed mb-10 max-w-xl">
                  Sanota's services can support requirements across a wide range of industries. The final solution is developed around the client's actual operating environment, technical requirements and business priorities.
                </p>
                
                <Link 
                  href="/industries" 
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#E8B84B] to-[#d4a643] text-[#0B1220] font-bold rounded-xl transition-all duration-300 hover:shadow-[0_15px_30px_rgba(232,184,75,0.25)] hover:-translate-y-1 group"
                >
                  Explore Industries 
                  <span className="ml-3 w-8 h-8 rounded-full bg-[#0B1220]/10 flex items-center justify-center group-hover:bg-[#0B1220]/20 transition-colors">
                    <ArrowRight className="w-4 h-4 text-[#0B1220] group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </Link>
              </motion.div>

              {/* Right Column: Industry Cards */}
              <div className="lg:col-span-7">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
                  {[
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
                  ].map((industry, idx) => (
                    <motion.div 
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 0.5, delay: 0.05 * idx }}
                      className="group flex items-center bg-[#131C2E]/40 hover:bg-[#1A2640]/80 backdrop-blur-sm border border-slate-800/60 hover:border-slate-600 rounded-2xl p-5 transition-all duration-300 hover:shadow-[0_15px_40px_rgba(0,0,0,0.4)] hover:-translate-y-1 cursor-default relative overflow-hidden"
                    >
                      {/* Hover light effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.03] to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                      
                      <div className="relative w-2 h-2 rounded-full bg-slate-700 group-hover:bg-[#E8B84B] mr-4 flex-shrink-0 transition-colors duration-300">
                        <div className="absolute inset-0 bg-[#E8B84B] rounded-full blur-[4px] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                      
                      <span className="text-slate-300 text-[15px] font-semibold leading-snug group-hover:text-white transition-colors duration-300 relative z-10">
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
        <section className="relative py-24 bg-transparent overflow-hidden border-t border-slate-800/40">
          
          {/* Merging Glows representing Partnership */}
          <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-[#E8B84B]/10 rounded-full blur-[150px] pointer-events-none -translate-y-1/2 -translate-x-1/2" />
          <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-[#3B82F6]/10 rounded-full blur-[150px] pointer-events-none -translate-y-1/2 translate-x-1/2" />
          
          <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8 }}
              className="relative p-10 md:p-16 rounded-[40px] bg-[#0A101A]/80 backdrop-blur-2xl border border-slate-800/50 overflow-hidden text-center group hover:border-slate-700/80 hover:shadow-[0_20px_60px_rgba(0,0,0,0.5)] transition-all duration-700"
            >
              {/* Animated Border Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#E8B84B]/10 via-transparent to-[#3B82F6]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none" />
              
              <div className="relative z-10">
                <div className="inline-flex items-center justify-center space-x-4 mb-8">
                  {/* Two glowing dots representing the companies */}
                  <div className="relative">
                    <div className="absolute inset-0 bg-[#E8B84B] blur-[10px] opacity-60 rounded-full group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="w-3 h-3 bg-[#E8B84B] rounded-full relative z-10" />
                  </div>
                  <div className="h-px w-12 bg-gradient-to-r from-[#E8B84B] to-[#3B82F6] opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative">
                    <div className="absolute inset-0 bg-[#3B82F6] blur-[10px] opacity-60 rounded-full group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="w-3 h-3 bg-[#3B82F6] rounded-full relative z-10" />
                  </div>
                </div>

                <h2 className="text-[#E8B84B] font-bold tracking-[0.25em] uppercase text-xs mb-4">Sanota + Knoweb</h2>
                
                <h3 className="text-4xl md:text-5xl lg:text-[52px] font-black text-white mb-10 leading-tight">
                  Engineering Strengthened by <br className="hidden md:block" />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3B82F6] to-cyan-400">Software & Digital</span>
                </h3>
                
                <div className="space-y-6 text-slate-300 text-[17px] leading-relaxed mb-12 max-w-3xl mx-auto font-medium">
                  <p>Through its collaboration with Knoweb, Sanota can integrate engineering solutions with software, cloud platforms, IoT applications, web and mobile systems, dashboards and enterprise technologies.</p>
                  <p className="text-slate-400">This relationship allows clients to access engineering and digital capability through one coordinated solution environment. Sanota remains responsible for understanding and coordinating the overall engineering requirement, while Knoweb contributes specialized IT and software capability where required.</p>
                </div>
                
                <Link 
                  href="#automation-iot" 
                  className="inline-flex items-center px-8 py-4 bg-transparent border border-slate-700 text-white hover:bg-white/5 hover:border-slate-500 text-[14px] font-bold uppercase tracking-wider rounded-full transition-all duration-300 group/link"
                >
                  Explore IoT & Digital Integration 
                  <ArrowRight className="ml-3 w-4 h-4 text-[#3B82F6] group-hover/link:text-cyan-400 group-hover/link:translate-x-1 transition-all duration-300" />
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Why Work With Sanota */}
        <section className="relative py-24 bg-transparent overflow-hidden border-t border-slate-800/40">
          {/* Ambient Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#E8B84B]/5 rounded-full blur-[150px] pointer-events-none -translate-y-1/2" />
          
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
              <h2 className="flex items-center justify-center text-[#E8B84B] font-bold tracking-[0.2em] uppercase text-xs mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E8B84B] mr-3 animate-pulse shadow-[0_0_10px_rgba(232,184,75,0.8)]" />
                Why Work With Sanota?
                <span className="w-1.5 h-1.5 rounded-full bg-[#E8B84B] ml-3 animate-pulse shadow-[0_0_10px_rgba(232,184,75,0.8)]" />
              </h2>
              <h3 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
                Practical Capability Across the <br className="hidden md:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E8B84B] to-amber-600">Complete Solution Lifecycle</span>
              </h3>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
              {[
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
              ].map((point, idx) => (
                <motion.div 
                  key={idx} 
                  initial={{ opacity: 0, y: 20 }} 
                  whileInView={{ opacity: 1, y: 0 }} 
                  viewport={{ once: true, margin: "-50px" }} 
                  transition={{ delay: idx * 0.05, duration: 0.5 }} 
                  className="group relative flex items-start bg-[#0A101A]/80 backdrop-blur-md border border-slate-800/60 hover:border-[#E8B84B]/30 rounded-2xl p-6 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_15px_30px_rgba(232,184,75,0.08)] overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative w-2 h-2 rounded-full bg-slate-700 group-hover:bg-[#E8B84B] mt-1.5 mr-4 shrink-0 transition-colors duration-500">
                    <div className="absolute inset-0 bg-[#E8B84B] rounded-full blur-[4px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                  <p className="relative z-10 text-slate-300 text-[14.5px] font-medium leading-relaxed group-hover:text-white transition-colors duration-500">{point}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Completed Work */}
        <section className="relative py-24 bg-transparent overflow-hidden border-t border-slate-800/40">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h2 className="flex items-center justify-center text-[#E8B84B] font-bold tracking-[0.2em] uppercase text-xs mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E8B84B] mr-3 animate-pulse shadow-[0_0_10px_rgba(232,184,75,0.8)]" />
              Completed Work
              <span className="w-1.5 h-1.5 rounded-full bg-[#E8B84B] ml-3 animate-pulse shadow-[0_0_10px_rgba(232,184,75,0.8)]" />
            </h2>
            <h3 className="text-4xl md:text-5xl font-black text-white mb-8 leading-tight">
              See How Sanota Applies <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E8B84B] to-amber-600">These Services</span>
            </h3>
            <div className="space-y-4 text-slate-400 text-lg leading-relaxed mb-12 max-w-3xl mx-auto">
              <p>Explore examples of machinery development, industrial automation, smart agriculture, IoT integration, process improvement, modernization and technical support.</p>
              <p>Each project story demonstrates the challenge, the services brought together and the resulting working solution.</p>
            </div>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-5">
              <Link 
                href="/media" 
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#E8B84B] to-[#d4a643] text-[#0B1220] font-bold rounded-xl transition-all duration-300 hover:shadow-[0_15px_30px_rgba(232,184,75,0.25)] hover:-translate-y-1 group w-full sm:w-auto justify-center"
              >
                View Completed Work 
                <span className="ml-3 w-8 h-8 rounded-full bg-[#0B1220]/10 flex items-center justify-center group-hover:bg-[#0B1220]/20 transition-colors">
                  <ArrowRight className="w-4 h-4 text-[#0B1220] group-hover:translate-x-0.5 transition-transform" />
                </span>
              </Link>
              <Link 
                href="/media" 
                className="inline-flex items-center px-8 py-4 bg-[#0F1523]/80 backdrop-blur-md border border-slate-700 text-white hover:bg-slate-800 hover:border-slate-500 text-[15px] font-bold rounded-xl transition-all duration-300 w-full sm:w-auto justify-center"
              >
                Visit the Media Centre
              </Link>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="relative py-24 bg-transparent overflow-hidden border-t border-slate-800/40">
          {/* Subtle CTA Background Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#E8B84B]/5 rounded-full blur-[150px] pointer-events-none" />
          
          <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8 }}
              className="p-10 md:p-16 rounded-[40px] bg-[#0A101A]/60 backdrop-blur-xl border border-slate-800/50 shadow-2xl group hover:border-[#E8B84B]/30 hover:shadow-[0_20px_60px_rgba(232,184,75,0.1)] transition-all duration-700"
            >
              <h2 className="flex items-center justify-center text-[#E8B84B] font-bold tracking-[0.2em] uppercase text-xs mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E8B84B] mr-3 animate-pulse shadow-[0_0_10px_rgba(232,184,75,0.8)]" />
                Ready To Start?
                <span className="w-1.5 h-1.5 rounded-full bg-[#E8B84B] ml-3 animate-pulse shadow-[0_0_10px_rgba(232,184,75,0.8)]" />
              </h2>
              
              <h2 className="text-4xl md:text-5xl lg:text-[52px] font-black text-white mb-8 leading-tight">
                What Challenge Can <br className="hidden sm:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E8B84B] to-amber-600">We Help You Solve?</span>
              </h2>
              <p className="text-slate-300 text-[17px] mb-12 leading-relaxed max-w-3xl mx-auto font-medium">
                Tell us what is not working, what needs improvement or what you want to develop. Sanota will review the requirement and guide you towards the appropriate engineering, automation, digital, implementation or maintenance solution.
              </p>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-5 mb-12">
                <Link 
                  href="/tell-us-your-challenge" 
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#E8B84B] to-[#d4a643] text-[#0B1220] font-bold rounded-xl transition-all duration-300 hover:shadow-[0_15px_30px_rgba(232,184,75,0.25)] hover:-translate-y-1 group/btn w-full sm:w-auto justify-center"
                >
                  Tell Us Your Challenge 
                  <span className="ml-3 w-8 h-8 rounded-full bg-[#0B1220]/10 flex items-center justify-center group-hover/btn:bg-[#0B1220]/20 transition-colors">
                    <ArrowRight className="w-4 h-4 text-[#0B1220] group-hover/btn:translate-x-0.5 transition-transform" />
                  </span>
                </Link>
                <Link 
                  href="/contact" 
                  className="inline-flex items-center px-8 py-4 bg-[#0F1523]/80 backdrop-blur-md border border-slate-700 text-white hover:bg-slate-800 hover:border-slate-500 text-[15px] font-bold rounded-xl transition-all duration-300 w-full sm:w-auto justify-center"
                >
                  Contact Sanota
                </Link>
              </div>
              <p className="inline-flex items-center px-6 py-2.5 bg-[#0B1220]/50 rounded-full border border-slate-700/50 text-slate-400 text-[13px] uppercase tracking-widest font-semibold group-hover:border-[#E8B84B]/20 transition-colors">
                From operational challenge to integrated engineering solution.
              </p>
            </motion.div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
