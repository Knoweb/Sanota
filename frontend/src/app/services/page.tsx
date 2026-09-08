"use client";

import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowRight, Search, PenTool, Wrench, Cpu, RefreshCw, Rocket, Shield, GraduationCap } from "lucide-react";

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
    <div className="flex flex-col min-h-screen bg-[#050B14]">
      <Header />
      <main className="flex-grow pt-24">

        {/* Hero Section */}
        <section className="relative py-32 overflow-hidden border-b border-slate-800">
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
        <section className="py-20 bg-[#0B1220] border-b border-slate-800/50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">More Than a Single Service</h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-6">
              <span className="font-bold text-slate-300">Industrial challenges rarely belong to only one technical discipline.</span> A machinery problem may require mechanical modifications, new electrical controls, automation, software monitoring and ongoing maintenance. A new product may require concept development, engineering design, prototyping, testing and production support.
            </p>
            <p className="text-slate-400 text-lg leading-relaxed">
              Sanota brings the required capabilities together around the client's operational need. This provides clients with a more coordinated path from the initial requirement to a practical working solution.
            </p>
          </div>
        </section>

        {/* Services List */}
        <section id="services-list" className="py-24 bg-[#050B14]">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center mb-16">
              <h2 className="text-[#E8B84B] font-bold tracking-widest uppercase text-sm mb-4">Service Pillars</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-white">How Sanota Can Support You</h3>
            </div>

            <div className="space-y-8">
              {services.map((service, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.05 * (idx % 4) }}
                  className="bg-[#131C2E]/50 border border-slate-800 rounded-3xl p-8 md:p-10 hover:border-slate-700 transition-colors"
                >
                  <div className="flex flex-col lg:flex-row gap-10">
                    
                    {/* Left: Header + Description */}
                    <div className="lg:w-2/5">
                      <div className="flex items-start mb-6">
                        <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} p-0.5 mr-5 flex-shrink-0`}>
                          <div className="w-full h-full bg-[#0D1829] rounded-[14px] flex items-center justify-center">
                            <service.icon className="w-7 h-7 text-white" />
                          </div>
                        </div>
                        <div>
                          <span className="text-slate-600 font-bold text-xs tracking-widest uppercase block mb-1">{service.number}</span>
                          <h3 className="text-xl md:text-2xl font-bold text-white leading-snug">{service.title}</h3>
                        </div>
                      </div>
                      <p className="text-slate-300 font-semibold mb-4 leading-relaxed">{service.intro}</p>
                      <p className="text-slate-400 leading-relaxed mb-6">{service.description}</p>
                      
                      {/* Client Needs */}
                      <div className="bg-[#0B1220] border border-slate-800 rounded-xl p-5">
                        <p className="text-[#E8B84B] font-bold text-xs uppercase tracking-widest mb-3">Typical client needs</p>
                        <div className="space-y-2">
                          {service.clientNeeds.map((need, nIdx) => (
                            <p key={nIdx} className="text-slate-400 text-sm italic leading-relaxed">{need}</p>
                          ))}
                        </div>
                      </div>

                      {service.primaryAction && (
                        <Link
                          href={service.primaryAction.href}
                          className="mt-6 inline-flex items-center px-6 py-3 bg-[#E8B84B] hover:bg-[#d4a643] text-[#0B1220] font-bold rounded-lg transition-colors text-sm"
                        >
                          {service.primaryAction.label} <ArrowRight className="ml-2 w-4 h-4" />
                        </Link>
                      )}
                    </div>

                    {/* Right: Services list */}
                    <div className="lg:w-3/5">
                      <p className="text-slate-500 font-bold text-xs uppercase tracking-widest mb-5">Services may include</p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {service.items.map((item, itemIdx) => (
                          <div key={itemIdx} className="flex items-start bg-[#0B1220]/60 border border-slate-800/60 rounded-lg px-4 py-3">
                            <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-br ${service.color} mt-2 mr-3 shrink-0`} />
                            <span className="text-slate-300 text-sm leading-relaxed">{item}</span>
                          </div>
                        ))}
                      </div>

                      <div className="mt-8 flex justify-end">
                        <a href={service.link} className="flex items-center text-[#2E5EAA] hover:text-white text-sm font-semibold transition-colors group">
                          Explore {service.title} <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
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
        <section className="py-24 bg-[#0B1220] border-t border-slate-800/50">
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
        <section className="py-24 bg-[#050B14] border-t border-slate-800/50">
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
                <motion.div key={idx} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.07 }} className="flex bg-[#131C2E]/40 border border-slate-800 rounded-2xl p-6 hover:bg-[#131C2E]/80 transition-colors">
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
        <section className="py-24 bg-[#0B1220] border-t border-slate-800/50">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-[#E8B84B] font-bold tracking-widest uppercase text-sm mb-4">Industries Supported</h2>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">Services Shaped Around Different Operating Environments</h3>
                <p className="text-slate-400 text-lg leading-relaxed mb-8">Sanota's services can support requirements across a wide range of industries. The final solution is developed around the client's actual operating environment, technical requirements and business priorities.</p>
                <Link href="/industries" className="inline-flex items-center px-7 py-3.5 bg-[#131C2E] hover:bg-slate-800 text-white font-bold rounded-lg border border-slate-700 transition-colors">
                  Explore Industries <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {["Manufacturing and industrial automation", "Smart agriculture and agri-technology", "Food and beverage processing", "Tea", "Logistics, warehousing and material handling", "Energy and resource efficiency", "Environmental and waste management", "Infrastructure and smart facilities", "Healthcare and biomedical engineering", "Research, innovation and product development"].map((industry, idx) => (
                  <div key={idx} className="flex items-center bg-[#131C2E]/60 border border-slate-800 rounded-xl px-4 py-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#E8B84B] mr-3 shrink-0" />
                    <span className="text-slate-300 text-sm">{industry}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Sanota + Knoweb */}
        <section className="py-24 bg-[#050B14] border-t border-slate-800/50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-[#E8B84B] font-bold tracking-widest uppercase text-sm mb-4">Sanota + Knoweb</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-8">Engineering Strengthened by Software and Digital Capability</h3>
            <div className="space-y-5 text-slate-400 text-lg leading-relaxed mb-10 max-w-3xl mx-auto">
              <p>Through its collaboration with Knoweb, Sanota can integrate engineering solutions with software, cloud platforms, IoT applications, web and mobile systems, dashboards and enterprise technologies.</p>
              <p>This relationship allows clients to access engineering and digital capability through one coordinated solution environment.</p>
              <p>Sanota remains responsible for understanding and coordinating the overall engineering requirement, while Knoweb contributes specialized IT and software capability where required.</p>
            </div>
            <Link href="#automation-iot" className="inline-flex items-center px-7 py-3.5 bg-[#131C2E] hover:bg-slate-800 text-white font-bold rounded-lg border border-slate-700 transition-colors">
              Explore IoT & Digital Integration <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </section>

        {/* Why Work With Sanota */}
        <section className="py-24 bg-[#131C2E] border-t border-slate-800">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2 className="text-[#E8B84B] font-bold tracking-widest uppercase text-sm mb-4">Why Work With Sanota?</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-white">Practical Capability Across the Complete Solution Lifecycle</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {["Multi-disciplinary engineering and technology capability", "Solutions designed around real operational requirements", "Experience supporting different industries in Sri Lanka", "Custom machinery, product and system development", "Integration of engineering, automation, IoT and software", "Modernization of existing machinery and systems", "Project execution from design to commissioning", "AMC support for Sanota-built and eligible third-party systems", "Training and long-term technical assistance", "One coordinated point of responsibility"].map((point, idx) => (
                <motion.div key={idx} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.04 }} className="flex items-start bg-[#0B1220]/60 border border-slate-800 rounded-xl px-5 py-4">
                  <div className="w-2 h-2 rounded-full bg-[#E8B84B] mt-1.5 mr-3 shrink-0" />
                  <p className="text-slate-300 text-sm leading-relaxed">{point}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Completed Work */}
        <section className="py-24 bg-[#050B14] border-t border-slate-800/50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-[#E8B84B] font-bold tracking-widest uppercase text-sm mb-4">Completed Work</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">See How Sanota Applies These Services</h3>
            <div className="space-y-4 text-slate-400 text-lg leading-relaxed mb-12 max-w-3xl mx-auto">
              <p>Explore examples of machinery development, industrial automation, smart agriculture, IoT integration, process improvement, modernization and technical support.</p>
              <p>Each project story demonstrates the challenge, the services brought together and the resulting working solution.</p>
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

        {/* Final CTA */}
        <section className="py-24 bg-[#131C2E] border-t border-slate-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
              What Challenge Can We Help You Solve?
            </h2>
            <p className="text-slate-400 text-lg mb-12 leading-relaxed max-w-3xl mx-auto">
              Tell us what is not working, what needs improvement or what you want to develop. Sanota will review the requirement and guide you towards the appropriate engineering, automation, digital, implementation or maintenance solution.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-10">
              <Link href="/tell-us-your-challenge" className="px-8 py-4 bg-[#E8B84B] hover:bg-[#d4a643] text-[#0B1220] font-bold rounded-lg transition-colors flex items-center justify-center">
                Tell Us Your Challenge <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link href="/contact" className="px-8 py-4 bg-[#0B1220] hover:bg-slate-800 text-white font-bold rounded-lg border border-slate-700 transition-colors flex items-center justify-center">
                Contact Sanota
              </Link>
            </div>
            <p className="text-slate-500 text-sm italic">From operational challenge to integrated engineering solution.</p>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
