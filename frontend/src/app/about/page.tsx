"use client";

import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowRight, Target, Compass, CheckCircle2, Factory, Cpu, Network, PenTool, Wrench, RefreshCw, BarChart4, Lightbulb, Users, Globe2, ShieldCheck, Cog, ClipboardCheck } from "lucide-react";

// Data Structures
const technicalDisciplines = [
  "Mechanical engineering", "Electrical and electronic engineering", "Industrial automation", 
  "PLC, HMI and control systems", "Sensors and instrumentation", "IoT and connected monitoring", 
  "Software and digital platforms", "Machinery fabrication and integration", "Product development", 
  "Retrofit and modernization", "Maintenance and lifecycle support"
];

const customerChallenges = [
  "A production problem", "An inefficient process", "An outdated or unreliable machine", 
  "A requirement to reduce manual work", "A need for better monitoring and control", "A product or machinery concept", 
  "A requirement to improve energy or resource use", "A need for maintenance or technical support", "An opportunity to introduce automation or digital technology"
];

const integratedCapabilities = [
  { title: "Engineering Design", desc: "We develop machinery, mechanical systems, electrical designs, control architectures and integrated technical solutions around customer requirements.", icon: PenTool },
  { title: "Custom Machinery and Product Development", desc: "We design and develop special-purpose machinery, processing equipment, testing systems, prototypes and customized products.", icon: Factory },
  { title: "Industrial Automation", desc: "We integrate PLCs, HMIs, sensors, actuators, motor controls, drives, servo systems and industrial safety functions.", icon: Cpu },
  { title: "IoT and Digital Integration", desc: "We connect machinery, assets and operating environments to cloud platforms, dashboards, mobile applications, alerts and reporting systems.", icon: Network },
  { title: "Retrofit and Modernization", desc: "We restore machinery, replace obsolete control systems, improve safety and introduce automation to extend equipment life and improve performance.", icon: RefreshCw },
  { title: "Project Implementation", desc: "We support procurement, fabrication, assembly, programming, installation, testing, integration, commissioning, training and handover.", icon: ClipboardCheck },
  { title: "AMC and Lifecycle Support", desc: "We provide planned maintenance, technical assistance, breakdown support, system upgrades and Annual Maintenance Contracts for Sanota-built and eligible third-party systems.", icon: ShieldCheck }
];

const industrySupport = [
  "Developing machinery for production and processing", "Automating industrial equipment and workflows", "Restoring non-operational and ageing machinery", 
  "Replacing outdated control systems", "Introducing connected monitoring and reporting", "Developing food and agricultural processing equipment", 
  "Supporting tea-processing modernization", "Improving material handling and asset visibility", "Developing waste and environmental solutions", 
  "Supporting technical education and research", "Collaborating on healthcare and specialized products", "Helping customers develop new products and prototypes"
];

const engineeringApproach = [
  { title: "Understand Before Designing", desc: "We begin by understanding the process, problem, operating conditions, limitations and expected outcome." },
  { title: "Integrate the Complete System", desc: "We consider the relationship between machinery, controls, electrical systems, software, people and operating procedures." },
  { title: "Modernize Where Practical", desc: "We evaluate whether existing machinery can be restored, retrofitted or improved before recommending complete replacement." },
  { title: "Design for Long-Term Use", desc: "We consider maintainability, operator usability, availability of components, future expansion and lifecycle support." },
  { title: "Remain Accountable Through Implementation", desc: "Our involvement can continue from initial assessment and design through development, installation, commissioning, training and maintenance." }
];

const knowebExpertise = [
  "Software development", "IoT connectivity", "Cloud platforms", "Web and mobile applications", 
  "Operational dashboards", "Enterprise systems", "Database development", "Digital reporting", 
  "Remote monitoring and control", "Data and systems integration"
];

const collaborationCapabilities = [
  "Requirement and feasibility analysis", "Engineering concept development", "Prototype design", 
  "Mechanical and electronic development", "Embedded systems", "Automation and control", 
  "IoT and software integration", "Testing and design improvement", "Pilot systems", 
  "Production engineering", "Technical support for commercialization"
];

const missionPoints = [
  "Combining engineering and digital capabilities", "Developing solutions around customer requirements", 
  "Supporting modernization and efficient resource use", "Taking responsibility from concept to implementation", 
  "Building long-term customer and technical partnerships", "Supporting innovation and industry development"
];

const guidingPrinciples = [
  { title: "Practicality", desc: "Solutions must be suitable for real operating conditions and implementation requirements." },
  { title: "Reliability", desc: "Systems must be designed to perform consistently and support long-term operation." },
  { title: "Integration", desc: "Engineering, automation and digital technologies should work as one coordinated system." },
  { title: "Innovation", desc: "New technologies should be applied where they create meaningful operational value." },
  { title: "Responsibility", desc: "We remain focused on the quality, safety, maintainability and performance of the solution." },
  { title: "Partnership", desc: "We work closely with customers and collaborators to achieve shared technical and operational objectives." },
  { title: "Continuous Improvement", desc: "We support the ongoing optimization, modernization and development of customer operations." }
];

const whyWorkWithUs = [
  { title: "One Accountable Partner", desc: "Customers can access mechanical engineering, electrical systems, automation, IoT, software and implementation support through one coordinated relationship.", icon: CheckCircle2 },
  { title: "Multi-Industry Experience", desc: "Our work across diverse sectors helps us understand different operating environments and develop adaptable solutions.", icon: Globe2 },
  { title: "Custom Engineering Capability", desc: "We can develop specialized solutions where standard machinery or technology does not fully meet the requirement.", icon: Wrench },
  { title: "Retrofit and Modernization Expertise", desc: "We help customers extend machinery life, replace obsolete controls and improve existing operations.", icon: RefreshCw },
  { title: "Physical and Digital Integration", desc: "We connect machinery and operating systems with monitoring, software, dashboards and data.", icon: Network },
  { title: "End-to-End Delivery", desc: "Our support can cover assessment, design, development, installation, commissioning, training and lifecycle care.", icon: Cog },
  { title: "Long-Term Technical Support", desc: "We offer maintenance, Annual Maintenance Contracts, troubleshooting, upgrades and performance-improvement support.", icon: ShieldCheck }
];

const atAGlance = [
  { title: "Established in 2010", desc: "Engineering and technology experience developed across changing industrial requirements." },
  { title: "1,250+ Client Engagements", desc: "Experience supporting organizations through products, projects, technical services and engineering requirements." },
  { title: "Multi-Industry Experience", desc: "Solutions developed across manufacturing, agriculture, food processing, tea, logistics, energy, environmental management, infrastructure and healthcare." },
  { title: "Integrated Technical Capability", desc: "Mechanical engineering, electrical and electronic systems, automation, IoT and software working together." },
  { title: "Local Strength with International Potential", desc: "Sri Lankan engineering capability supporting local industries and international customers, projects and partnerships." },
  { title: "Complete Lifecycle Support", desc: "From operational assessment and design through project delivery, AMC and continuous improvement." }
];

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-transparent">
      <Header />
      <main className="flex-grow">
        
        {/* 1. Page Hero */}
        <section className="relative pt-32 lg:pt-48 pb-20 lg:pb-32 overflow-hidden border-b border-slate-800 bg-transparent min-h-[60vh] lg:min-h-[70vh] flex flex-col justify-center">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
            style={{ backgroundImage: "url('/about_hero_bg.jpg')" }}
          />
          <div className="absolute inset-0 bg-[#050B14]/60 z-0" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050B14]/20 to-[#050B14]/90 z-0" />
          
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-[#E8B84B] font-bold tracking-widest uppercase text-sm mb-5"
            >
              About Sanota
            </motion.p>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 }}
              className="text-4xl sm:text-6xl font-black text-white tracking-tight mb-8 leading-tight max-w-5xl mx-auto"
            >
              Practical Engineering. Connected Technology. <span className="text-[#E8B84B]">Lasting Operational Value.</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-slate-300 max-w-4xl mx-auto mb-6 font-medium leading-relaxed"
            >
              Sanota is an integrated engineering and technology solutions company that helps industries design, develop, automate, modernize, maintain and improve machinery, products, processes and operational systems.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="text-lg text-slate-400 max-w-4xl mx-auto mb-10 leading-relaxed"
            >
              Established in Sri Lanka in 2010, we combine engineering experience, practical implementation and digital technology to develop solutions around real operational requirements.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-col sm:flex-row justify-center gap-4"
            >
              <Link href="/tell-us-your-challenge" className="px-8 py-4 bg-[#E8B84B] hover:bg-[#d4a643] text-[#0B1220] font-bold rounded-lg transition-colors flex items-center justify-center">
                Discuss Your Requirement <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link href="/media" className="px-8 py-4 bg-[#131C2E]/80 hover:bg-slate-800 text-white font-bold rounded-lg border border-slate-700 transition-colors flex items-center justify-center">
                Explore Our Projects
              </Link>
            </motion.div>
          </div>
        </section>

        {/* 2 & 3. Who We Are & Our Story */}
        <section className="py-24 bg-[#0B1220] bg-transparent">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
              
              {/* Who We Are */}
              <div>
                <h2 className="text-[#E8B84B] font-bold tracking-widest uppercase text-sm mb-4">Who We Are</h2>
                <h3 className="text-3xl font-bold text-white mb-6 leading-tight">Engineering Solutions Built Around Real Requirements</h3>
                <p className="text-slate-300 text-lg leading-relaxed mb-8">
                  Sanota (Pvt) Ltd works with organizations to understand operational challenges and develop practical engineering solutions that improve productivity, reliability, safety, visibility and resource efficiency.
                </p>
                <p className="text-slate-400 mb-6 font-bold">Our work brings together multiple technical disciplines, including:</p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  {technicalDisciplines.map((item, idx) => (
                    <div key={idx} className="flex items-start">
                      <div className="w-2 h-2 rounded-full bg-[#E8B84B] mt-2 mr-3 shrink-0" />
                      <span className="text-slate-400 text-sm leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
                
                <div className="bg-[#131C2E]/60 border border-slate-800 rounded-xl p-6">
                  <p className="text-slate-300 italic text-sm leading-relaxed">
                    This integrated capability allows Sanota to take responsibility for more than an individual machine or isolated technology. We consider how the complete system must operate, how it will be implemented and how it can be supported over the long term.
                  </p>
                </div>
              </div>

              {/* Our Story */}
              <div>
                <h2 className="text-[#E8B84B] font-bold tracking-widest uppercase text-sm mb-4">Our Story</h2>
                <h3 className="text-3xl font-bold text-white mb-6 leading-tight">Developing Engineering Solutions Since 2010</h3>
                <div className="space-y-6 text-slate-400 text-lg leading-relaxed">
                  <p>
                    Sanota was founded in 2010 by Mr. Sahan C. Ranasinghe with the objective of identifying real industrial and operational problems and developing practical technical solutions to address them.
                  </p>
                  <p>
                    Since its establishment, Sanota has expanded its capabilities across machinery development, industrial automation, electronics, IoT, software, product development and integrated engineering systems.
                  </p>
                  <p>
                    The company has worked across a wide range of sectors, supporting requirements in manufacturing, agriculture, food processing, tea, logistics, energy, environmental management, infrastructure, healthcare and research.
                  </p>
                  <p>
                    Through more than 1,250 client engagements, Sanota has gained experience in developing new systems, improving existing operations, modernizing ageing machinery and creating specialized solutions for requirements that cannot always be met through standard products.
                  </p>
                  <p className="text-white font-bold">
                    Today, Sanota continues to strengthen its role as a Sri Lankan engineering and technology company with the capability to support both local and international customers, projects and partnerships.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 4. What We Do */}
        <section className="py-24 bg-[#050B14] border-t border-slate-800/50 bg-transparent">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 max-w-3xl mx-auto">
              <h2 className="text-[#E8B84B] font-bold tracking-widest uppercase text-sm mb-4">What We Do</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">From Operational Challenge to Engineered Solution</h3>
              <p className="text-slate-400 text-lg leading-relaxed">
                Customers do not always need to approach Sanota with a completed technical specification. They may come to us with:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {customerChallenges.map((challenge, idx) => (
                <div key={idx} className="bg-[#131C2E]/40 border border-slate-800 rounded-2xl p-6 flex items-start group hover:border-[#E8B84B]/50 transition-colors">
                  <CheckCircle2 className="w-6 h-6 text-[#2E5EAA] mr-4 shrink-0 mt-1" />
                  <p className="text-slate-300 font-medium group-hover:text-white transition-colors">{challenge}</p>
                </div>
              ))}
            </div>

            <div className="max-w-4xl mx-auto text-center space-y-6 bg-[#0B1220] border border-slate-800 rounded-3xl p-10">
              <p className="text-white text-xl font-bold leading-relaxed">
                Our role is to study the requirement, understand the operating environment and develop an appropriate engineering response.
              </p>
              <p className="text-slate-400 text-lg leading-relaxed mb-8">
                Depending on the project, this may involve machinery design, fabrication, electrical systems, automation, sensors, IoT, software, dashboards, installation, commissioning, maintenance or a combination of these capabilities.
              </p>
              <Link href="/services" className="inline-flex items-center px-8 py-4 bg-[#E8B84B] hover:bg-[#d4a643] text-[#0B1220] font-bold rounded-lg transition-colors">
                Explore Our Services <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* 5. Our Integrated Capabilities */}
        <section className="py-24 bg-[#0B1220] bg-transparent">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-[#E8B84B] font-bold tracking-widest uppercase text-sm mb-4">Our Integrated Capabilities</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">One Connected Engineering Approach</h3>
              <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                Sanota’s principal strength is the ability to coordinate different engineering and technology disciplines within one solution.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {integratedCapabilities.map((cap, idx) => (
                <div key={idx} className={`bg-[#131C2E]/60 border border-slate-800 rounded-3xl p-8 hover:border-[#2E5EAA]/50 transition-colors flex flex-col ${idx === 6 ? 'md:col-span-2 lg:col-span-3 xl:col-span-1' : ''}`}>
                  <div className="w-14 h-14 rounded-2xl bg-[#0B1220] border border-slate-700 flex items-center justify-center mb-6">
                    <cap.icon className="w-7 h-7 text-[#E8B84B]" />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-4">{cap.title}</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">{cap.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6 & 7. Supporting Industries & Engineering Approach */}
        <section className="py-24 bg-[#050B14] border-t border-slate-800/50 bg-transparent">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
              
              {/* Supporting Sri Lankan Industries */}
              <div>
                <h2 className="text-[#E8B84B] font-bold tracking-widest uppercase text-sm mb-4">Supporting Sri Lankan Industries</h2>
                <h3 className="text-3xl font-bold text-white mb-6 leading-tight">Engineering Progress Across Diverse Sectors</h3>
                <p className="text-slate-300 text-lg leading-relaxed mb-8">
                  Sanota has extended engineering and technical support across a broad range of industries in Sri Lanka.
                </p>
                
                <p className="text-slate-400 mb-6 font-bold">Our work has included:</p>
                <div className="space-y-4 mb-8">
                  {industrySupport.map((item, idx) => (
                    <div key={idx} className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-[#2E5EAA] mr-3 mt-0.5 shrink-0" />
                      <span className="text-slate-400 text-sm leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="bg-[#131C2E]/40 border border-slate-800 rounded-xl p-6 mb-8">
                  <p className="text-slate-300 text-sm leading-relaxed mb-4 font-medium">
                    Through these activities, Sanota contributes to local engineering development, industrial productivity, technology adoption, value addition and import-substitution opportunities.
                  </p>
                  <p className="text-slate-400 text-sm leading-relaxed italic">
                    Our experience across different industries also enables us to transfer relevant knowledge and technologies from one operational environment to another.
                  </p>
                </div>

                <Link href="/industries" className="inline-flex items-center px-8 py-4 bg-[#131C2E] hover:bg-slate-800 border border-slate-700 text-white font-bold rounded-lg transition-colors">
                  Explore Industries <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </div>

              {/* Our Engineering Approach */}
              <div>
                <h2 className="text-[#E8B84B] font-bold tracking-widest uppercase text-sm mb-4">Our Engineering Approach</h2>
                <h3 className="text-3xl font-bold text-white mb-6 leading-tight">Practical Solutions Designed for Implementation</h3>
                <p className="text-slate-300 text-lg leading-relaxed mb-8">
                  Sanota approaches every project with an understanding that a successful engineering solution must work reliably within the customer’s actual operating environment.
                </p>
                
                <p className="text-[#E8B84B] font-bold mb-8 uppercase tracking-widest text-sm">Our approach is guided by five principles:</p>
                
                <div className="space-y-6">
                  {engineeringApproach.map((item, idx) => (
                    <div key={idx} className="flex gap-6 relative before:absolute before:inset-0 before:ml-[19px] before:-translate-x-px before:h-full before:w-0.5 before:bg-slate-800 last:before:hidden">
                      <div className="relative z-10 w-10 h-10 rounded-full bg-[#0B1220] border-2 border-[#E8B84B] flex items-center justify-center shrink-0">
                        <span className="text-[#E8B84B] font-bold text-sm">{idx + 1}</span>
                      </div>
                      <div className="pb-8">
                        <h4 className="text-white font-bold text-xl mb-2">{item.title}</h4>
                        <p className="text-slate-400 text-base leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 8 & 9. Sanota and Knoweb & Innovation */}
        <section className="py-24 bg-[#0B1220] bg-transparent">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
              
              {/* Sanota and Knoweb */}
              <div className="bg-[#131C2E]/60 border border-slate-800 rounded-3xl p-10 flex flex-col">
                <h2 className="text-[#E8B84B] font-bold tracking-widest uppercase text-sm mb-4">Sanota and Knoweb</h2>
                <h3 className="text-3xl font-bold text-white mb-6">Engineering Connected by Digital Technology</h3>
                <p className="text-slate-300 text-lg leading-relaxed mb-8">
                  Sanota’s integrated engineering capability is supported by Knoweb, an affiliated information technology company under common ownership.
                </p>
                
                <p className="text-slate-400 font-bold mb-6">Knoweb contributes specialist expertise in:</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                  {knowebExpertise.map((item, idx) => (
                    <div key={idx} className="flex items-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#E8B84B] mr-3 shrink-0" />
                      <span className="text-slate-400 text-sm">{item}</span>
                    </div>
                  ))}
                </div>

                <p className="text-slate-300 text-base leading-relaxed mb-6 font-medium">
                  This relationship enables Sanota to combine physical engineering systems with digital technologies. A machine can therefore become part of a connected operational system incorporating sensors, automation, cloud access, dashboards, alerts, traceability and management reporting.
                </p>
                <p className="text-slate-400 text-sm leading-relaxed italic mb-8 flex-grow">
                  Sanota remains the principal engineering and client-solution partner, while Knoweb strengthens the software and digital components required for connected solutions.
                </p>

                <Link href="/services" className="inline-flex items-center justify-center px-8 py-4 bg-[#131C2E] hover:bg-slate-800 border border-slate-700 text-white font-bold rounded-lg transition-colors mt-auto">
                  Explore Automation, IoT & Digital Integration <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </div>

              {/* Innovation and Collaboration */}
              <div className="bg-[#131C2E]/60 border border-slate-800 rounded-3xl p-10 flex flex-col">
                <h2 className="text-[#E8B84B] font-bold tracking-widest uppercase text-sm mb-4">Innovation and Collaboration</h2>
                <h3 className="text-3xl font-bold text-white mb-6">Turning Ideas into Practical Solutions</h3>
                <p className="text-slate-300 text-lg leading-relaxed mb-8">
                  Sanota works with businesses, inventors, universities, researchers, institutions and technology partners to develop solutions for specialized and emerging requirements.
                </p>
                
                <p className="text-slate-400 font-bold mb-6">Our collaborative development capability can include:</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-2 mb-8">
                  {collaborationCapabilities.map((item, idx) => (
                    <div key={idx} className="flex items-start">
                      <div className="w-6 h-6 rounded-md bg-[#0B1220] border border-slate-700 flex items-center justify-center mr-3 shrink-0 mt-0.5">
                        <CheckCircle2 className="w-4 h-4 text-[#2E5EAA]" />
                      </div>
                      <span className="text-slate-400 text-sm leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="bg-[#0B1220] border border-slate-800 rounded-xl p-6 mb-8 flex-grow">
                  <p className="text-slate-300 text-base leading-relaxed font-medium">
                    This approach allows Sanota to contribute not only as a supplier, but also as an engineering development partner.
                  </p>
                </div>

                <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-[#E8B84B] hover:bg-[#d4a643] text-[#0B1220] font-bold rounded-lg transition-colors mt-auto">
                  Explore a Collaboration <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </div>

            </div>
          </div>
        </section>

        {/* 10 & 11. Vision & Mission */}
        <section className="py-24 from-[#0B1220] to-[#131C2E] border-t border-slate-800/50 bg-transparent">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              
              {/* Vision */}
              <div className="text-center lg:text-left">
                <Target className="w-16 h-16 text-[#E8B84B] mx-auto lg:mx-0 mb-6" />
                <h2 className="text-[#E8B84B] font-bold tracking-widest uppercase text-sm mb-4">Our Vision</h2>
                <h3 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                  To Advance Industries Through Practical Engineering and Intelligent Technology
                </h3>
                <p className="text-slate-300 text-xl leading-relaxed">
                  Our vision is to become a trusted engineering and technology partner for industries seeking practical, reliable, sustainable and future-ready operational solutions.
                </p>
              </div>

              {/* Mission */}
              <div className="bg-[#0B1220]/80 backdrop-blur-sm border border-slate-700 rounded-3xl p-10">
                <Compass className="w-12 h-12 text-[#2E5EAA] mb-6" />
                <h2 className="text-[#E8B84B] font-bold tracking-widest uppercase text-sm mb-4">Our Mission</h2>
                <p className="text-white text-xl font-bold leading-relaxed mb-8">
                  Our mission is to understand real operational challenges and deliver integrated engineering solutions that create measurable and long-term value for our customers.
                </p>
                <p className="text-slate-400 font-bold uppercase tracking-widest text-xs mb-6">We pursue this mission by:</p>
                <div className="space-y-4">
                  {missionPoints.map((item, idx) => (
                    <div key={idx} className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-[#E8B84B] mr-3 mt-0.5 shrink-0" />
                      <span className="text-slate-300 text-base">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 12. What Guides Our Work */}
        <section className="py-24 bg-[#050B14] border-t border-slate-800/50 bg-transparent">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-[#E8B84B] font-bold tracking-widest uppercase text-sm mb-4">What Guides Our Work</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-white">Core Principles</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
              {guidingPrinciples.map((principle, idx) => (
                <div key={idx} className={`bg-[#131C2E]/40 border border-slate-800 rounded-2xl p-8 hover:border-[#E8B84B]/50 transition-colors ${idx === 6 ? 'md:col-span-2 xl:col-span-2' : ''}`}>
                  <h4 className="text-xl font-bold text-white mb-4 flex items-center">
                    <span className="w-2 h-2 rounded-full bg-[#E8B84B] mr-3" />
                    {principle.title}
                  </h4>
                  <p className="text-slate-400 leading-relaxed text-sm">{principle.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 13. Why Organizations Work With Sanota */}
        <section className="py-24 bg-[#0B1220] bg-transparent">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-[#E8B84B] font-bold tracking-widest uppercase text-sm mb-4">The Sanota Advantage</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-white">Why Organizations Work With Sanota</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {whyWorkWithUs.map((reason, idx) => (
                <div key={idx} className={`bg-[#131C2E]/60 border border-slate-800 rounded-3xl p-8 hover:-translate-y-1 transition-transform ${idx === 6 ? 'md:col-span-2 lg:col-span-1' : ''}`}>
                  <div className="w-14 h-14 rounded-2xl bg-[#0B1220] border border-slate-700 flex items-center justify-center mb-6">
                    <reason.icon className="w-7 h-7 text-[#E8B84B]" />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-4">{reason.title}</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">{reason.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 14. Sanota at a Glance */}
        <section className="py-24 bg-[#131C2E] border-t border-slate-800 bg-transparent">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-[#E8B84B] font-bold tracking-widest uppercase text-sm mb-4">Key Facts</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-white">Sanota at a Glance</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {atAGlance.map((fact, idx) => (
                <div key={idx} className="bg-[#0B1220] border border-slate-800 rounded-2xl p-8 text-center">
                  <h4 className="text-2xl font-black text-[#E8B84B] mb-4">{fact.title}</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">{fact.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 15. Closing Call to Action */}
        <section className="py-32 bg-[#050B14] relative overflow-hidden bg-transparent">
          <div className="absolute inset-0 bg-gradient-to-t from-[#131C2E]/50 to-transparent pointer-events-none" />
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Let’s Develop the Right Solution for Your Operation
            </h2>
            <p className="text-slate-300 text-lg mb-8 leading-relaxed">
              Whether you are planning a new engineering project, improving a production process, developing a product, modernizing machinery, introducing automation or seeking dependable maintenance support, Sanota can help identify a practical way forward.
            </p>
            <p className="text-slate-400 text-lg mb-12">
              Tell us about your operational challenge, requirement or opportunity. Our team will connect you with the appropriate engineering and technical expertise.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
              <Link href="/tell-us-your-challenge" className="px-8 py-4 bg-[#E8B84B] hover:bg-[#d4a643] text-[#0B1220] font-bold rounded-lg transition-colors flex items-center justify-center">
                Discuss Your Requirement <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link href="/contact" className="px-8 py-4 bg-[#131C2E] hover:bg-slate-800 text-white font-bold rounded-lg border border-slate-700 transition-colors flex items-center justify-center">
                Request a Technical Consultation
              </Link>
            </div>

            <div className="flex flex-wrap justify-center gap-4 sm:gap-8">
              <Link href="/services" className="text-sm font-bold text-[#2E5EAA] hover:text-white transition-colors">Explore Our Services</Link>
              <Link href="/media" className="text-sm font-bold text-[#2E5EAA] hover:text-white transition-colors">View Our Projects</Link>
              <Link href="/services" className="text-sm font-bold text-[#2E5EAA] hover:text-white transition-colors">Request an AMC Assessment</Link>
              <Link href="/contact" className="text-sm font-bold text-[#2E5EAA] hover:text-white transition-colors">Explore a Partnership</Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
