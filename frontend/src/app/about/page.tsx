"use client";
import React, { useState, useEffect } from "react";

import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import dynamic from 'next/dynamic';
const Antigravity = dynamic(() => import("@/components/Antigravity"), { ssr: false });
import PixelCard from "@/components/PixelCard";
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
  const [activePrinciple, setActivePrinciple] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActivePrinciple(prev => (prev + 1) % guidingPrinciples.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-transparent">
      <Header />
      <main className="flex-grow">
        
        {/* 1. Page Hero */}
        <section className="relative pt-24 lg:pt-32 pb-12 lg:pb-16 overflow-hidden border-b border-slate-800 bg-transparent min-h-[60vh] lg:min-h-[70vh] flex flex-col justify-center">
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
              className="text-lg text-slate-400 max-w-4xl mx-auto mb-6 leading-relaxed"
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

        {/* 2. Who We Are */}
        <section className="py-8 lg:py-12 bg-transparent relative overflow-hidden">
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#E8B84B]/5 rounded-full blur-[120px] pointer-events-none" />
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
              
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: { staggerChildren: 0.15 }
                  }
                }}
                className="lg:w-1/2"
              >
                <motion.h2 variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }} className="text-[#E8B84B] font-bold tracking-widest uppercase text-sm mb-4 flex items-center">
                  <span className="w-8 h-px bg-[#E8B84B] mr-4" /> Who We Are
                </motion.h2>
                <motion.h3 variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }} className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">Engineering Solutions Built Around Real Requirements</motion.h3>
                <motion.p variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }} className="text-slate-300 text-lg leading-relaxed mb-8">
                  Sanota (Pvt) Ltd works with organizations to understand operational challenges and develop practical engineering solutions that improve productivity, reliability, safety, visibility and resource efficiency.
                </motion.p>
                <motion.div variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }} className="bg-[#0B1220]/50 backdrop-blur-md border border-slate-800/80 rounded-2xl p-6 mb-8 hover:border-[#2E5EAA]/50 transition-colors">
                  <p className="text-slate-400 mb-4 font-bold text-sm tracking-wide uppercase">Our technical disciplines include:</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {technicalDisciplines.map((item, idx) => (
                      <div key={idx} className="flex items-start">
                        <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-br from-[#E8B84B] to-amber-600 mt-2 mr-3 shrink-0 shadow-[0_0_5px_rgba(232,184,75,0.5)]" />
                        <span className="text-slate-300 text-sm leading-relaxed">{item}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
                
                <motion.div variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }} className="relative p-6 rounded-xl border border-slate-700/50 bg-gradient-to-br from-[#131C2E]/60 to-[#0B1220]/60 overflow-hidden group">
                  <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[#E8B84B] to-transparent" />
                  <p className="text-slate-300 italic text-sm leading-relaxed relative z-10 font-medium">
                    "This integrated capability allows Sanota to take responsibility for more than an individual machine or isolated technology. We consider how the complete system must operate, how it will be implemented and how it can be supported over the long term."
                  </p>
                </motion.div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="lg:w-1/2 relative h-[600px] w-full rounded-[2.5rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-slate-700/50 group"
              >
                <motion.img 
                  src="/about_hero_bg.jpg" 
                  alt="Who We Are" 
                  animate={{ scale: [1, 1.05, 1], x: [0, -10, 0] }}
                  transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
                  className="w-full h-full object-cover" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1220] via-transparent to-transparent opacity-90" />
                <div className="absolute inset-0 bg-[#2E5EAA]/10 mix-blend-overlay group-hover:opacity-0 transition-opacity duration-700" />
                <div className="absolute bottom-8 left-8 right-8 p-6 bg-[#0B1220]/80 backdrop-blur-xl border border-white/10 rounded-2xl">
                  <div className="flex items-center">
                    <Factory className="w-8 h-8 text-[#E8B84B] mr-4" />
                    <div>
                      <p className="text-white font-bold text-lg">Integrated Capability</p>
                      <p className="text-slate-400 text-sm">Mechanical, Electrical, & Digital</p>
                    </div>
                  </div>
                </div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* 3. Our Story */}
        <section className="py-8 lg:py-12 bg-[#0B1220]/30 relative overflow-hidden border-t border-slate-800/40">
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#2E5EAA]/5 rounded-full blur-[120px] pointer-events-none" />
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">
              
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="lg:w-1/2 relative h-[650px] w-full rounded-[2.5rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-slate-700/50 group"
              >
                <motion.img 
                  src="/electronics_engineering_story.jpg" 
                  alt="Our Story" 
                  animate={{ scale: [1.05, 1, 1.05], y: [0, -10, 0] }}
                  transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
                  className="w-full h-full object-cover" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1220] via-transparent to-transparent opacity-90" />
                <div className="absolute bottom-8 left-8 right-8 p-6 bg-[#0B1220]/80 backdrop-blur-xl border border-white/10 rounded-2xl">
                  <div className="flex items-center">
                    <div className="text-3xl font-black text-[#E8B84B] mr-4">1,250+</div>
                    <div>
                      <p className="text-white font-bold text-lg">Client Engagements</p>
                      <p className="text-slate-400 text-sm">Since 2010</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: { staggerChildren: 0.15 }
                  }
                }}
                className="lg:w-1/2"
              >
                <motion.h2 variants={{ hidden: { opacity: 0, x: 20 }, visible: { opacity: 1, x: 0 } }} className="text-[#E8B84B] font-bold tracking-widest uppercase text-sm mb-4 flex items-center">
                  <span className="w-8 h-px bg-[#E8B84B] mr-4" /> Our Story
                </motion.h2>
                <motion.h3 variants={{ hidden: { opacity: 0, x: 20 }, visible: { opacity: 1, x: 0 } }} className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">Developing Engineering Solutions Since 2010</motion.h3>
                <div className="space-y-6 text-slate-300 text-lg leading-relaxed">
                  <motion.p variants={{ hidden: { opacity: 0, x: 20 }, visible: { opacity: 1, x: 0 } }}>
                    Sanota was founded in 2010 by Mr. Sahan C. Ranasinghe with the objective of identifying real industrial and operational problems and developing practical technical solutions to address them.
                  </motion.p>
                  <motion.p variants={{ hidden: { opacity: 0, x: 20 }, visible: { opacity: 1, x: 0 } }}>
                    Since its establishment, Sanota has expanded its capabilities across machinery development, industrial automation, electronics, IoT, software, product development and integrated engineering systems.
                  </motion.p>
                  <motion.p variants={{ hidden: { opacity: 0, x: 20 }, visible: { opacity: 1, x: 0 } }}>
                    The company has worked across a wide range of sectors, supporting requirements in manufacturing, agriculture, food processing, tea, logistics, energy, environmental management, infrastructure, healthcare and research.
                  </motion.p>
                  <motion.p variants={{ hidden: { opacity: 0, x: 20 }, visible: { opacity: 1, x: 0 } }}>
                    Through more than <strong className="text-white">1,250 client engagements</strong>, Sanota has gained experience in developing new systems, improving existing operations, modernizing ageing machinery and creating specialized solutions for requirements that cannot always be met through standard products.
                  </motion.p>
                  <motion.div variants={{ hidden: { opacity: 0, x: 20 }, visible: { opacity: 1, x: 0 } }} className="bg-gradient-to-r from-[#2E5EAA]/20 to-transparent p-5 rounded-xl border-l-2 border-[#2E5EAA]">
                    <p className="text-white font-medium text-base">
                      Today, Sanota continues to strengthen its role as a Sri Lankan engineering and technology company with the capability to support both local and international customers, projects and partnerships.
                    </p>
                  </motion.div>
                </div>
              </motion.div>

            </div>
          </div>
        </section>

        
        <div className="relative w-full">
          <div className="sticky top-0 w-full h-screen z-0 opacity-40 pointer-events-none">
            <Antigravity
              count={50}
              magnetRadius={6}
              ringRadius={7}
              waveSpeed={0.4}
              waveAmplitude={1}
              particleSize={1.5}
              lerpSpeed={0.05}
              color="#E8B84B"
              autoAnimate
              particleVariance={1}
              rotationSpeed={0}
              depthFactor={1}
              pulseSpeed={3}
              particleShape="capsule"
              fieldStrength={10}
            />
          </div>
          <div className="relative z-10 -mt-[100vh]">
{/* 4. What We Do */}
        <section className="py-8 lg:py-12 bg-transparent relative overflow-hidden">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-8 lg:mb-12 max-w-3xl mx-auto"
            >
              <h2 className="text-[#E8B84B] font-bold tracking-widest uppercase text-sm mb-4 flex items-center justify-center">
                <span className="w-6 h-px bg-[#E8B84B] mr-3" /> What We Do <span className="w-6 h-px bg-[#E8B84B] ml-3" />
              </h2>
              <h3 className="text-3xl md:text-5xl font-bold text-white mb-6">From Operational Challenge to Engineered Solution</h3>
              <p className="text-slate-400 text-lg leading-relaxed">
                Customers do not always need to approach Sanota with a completed technical specification. They may come to us with:
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8 lg:mb-12">
              {customerChallenges.map((challenge, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className="relative group w-full h-full rounded-2xl p-[1px] overflow-hidden shadow-lg"
                >
                  <div className="absolute inset-[-100%] bg-[conic-gradient(from_0deg,transparent_0_280deg,#2E5EAA_360deg)] animate-[spin_4s_linear_infinite] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative bg-[#131C2E]/80 backdrop-blur-sm w-full h-full p-6 flex items-start rounded-[calc(1rem-1px)] border border-slate-700/50 group-hover:border-transparent transition-colors z-10">
                    <CheckCircle2 className="w-6 h-6 text-[#2E5EAA] mr-4 shrink-0 mt-0.5 group-hover:text-[#E8B84B] transition-colors" />
                    <p className="text-slate-300 font-medium group-hover:text-white transition-colors">{challenge}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto text-center space-y-6 bg-gradient-to-r from-[#0B1220] via-[#131C2E]/80 to-[#0B1220] border border-slate-700/50 rounded-3xl p-10 shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-[#E8B84B] to-transparent opacity-50" />
              <p className="text-white text-xl font-bold leading-relaxed">
                Our role is to study the requirement, understand the operating environment and develop an appropriate engineering response.
              </p>
              <p className="text-slate-400 text-lg leading-relaxed mb-8">
                Depending on the project, this may involve machinery design, fabrication, electrical systems, automation, sensors, IoT, software, dashboards, installation, commissioning, maintenance or a combination of these capabilities.
              </p>
              <Link href="/services" className="inline-flex items-center px-8 py-4 bg-[#E8B84B] hover:bg-[#d4a643] text-[#0B1220] font-bold rounded-lg transition-all hover:scale-105 shadow-xl">
                Explore Our Services <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </section>

        {/* 5. Our Integrated Capabilities */}
        <section className="py-8 lg:py-12 bg-transparent relative overflow-hidden border-t border-slate-800/40">
          <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-[#E8B84B]/5 rounded-full blur-[100px] pointer-events-none" />
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-8 lg:mb-12"
            >
              <h2 className="text-[#E8B84B] font-bold tracking-widest uppercase text-sm mb-4 flex items-center justify-center">
                <span className="w-6 h-px bg-[#E8B84B] mr-3" /> Our Integrated Capabilities <span className="w-6 h-px bg-[#E8B84B] ml-3" />
              </h2>
              <h3 className="text-3xl md:text-5xl font-bold text-white mb-6">One Connected Engineering Approach</h3>
              <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                Sanota’s principal strength is the ability to coordinate different engineering and technology disciplines within one solution.
              </p>
            </motion.div>
            
            <div className="flex flex-wrap justify-center gap-6">
              {integratedCapabilities.map((cap, idx) => (
                <motion.div 
                  key={idx} 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="relative group rounded-3xl p-[1px] overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.5)] w-full sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)] flex-shrink-0 flex flex-col"
                >
                  <div className="absolute inset-[-100%] bg-[conic-gradient(from_0deg,transparent_0_280deg,#E8B84B_360deg)] animate-[spin_6s_linear_infinite] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative bg-[#131C2E]/80 backdrop-blur-md w-full h-full p-8 flex flex-col rounded-[calc(1.5rem-1px)] border border-slate-700/50 group-hover:border-transparent transition-colors z-10 flex-grow">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#0B1220] to-[#131C2E] border border-slate-700 flex items-center justify-center mb-6 shadow-inner group-hover:shadow-[0_0_15px_rgba(232,184,75,0.3)] transition-all">
                      <cap.icon className="w-7 h-7 text-[#E8B84B]" />
                    </div>
                    <h4 className="text-xl font-bold text-white mb-4 group-hover:text-[#E8B84B] transition-colors">{cap.title}</h4>
                    <p className="text-slate-400 text-sm leading-relaxed">{cap.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 6 & 7. Supporting Industries & Engineering Approach */}
        <section className="py-8 lg:py-12 bg-transparent relative overflow-hidden border-t border-slate-800/40">
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#2E5EAA]/5 rounded-full blur-[100px] pointer-events-none" />
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
              
              {/* Supporting Sri Lankan Industries */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-[#E8B84B] font-bold tracking-widest uppercase text-sm mb-4 flex items-center">
                  <span className="w-8 h-px bg-[#E8B84B] mr-4" /> Supporting Industries
                </h2>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">Engineering Progress Across Diverse Sectors</h3>
                <p className="text-slate-300 text-lg leading-relaxed mb-8">
                  Sanota has extended engineering and technical support across a broad range of industries in Sri Lanka.
                </p>
                
                <p className="text-slate-400 mb-6 font-bold uppercase tracking-widest text-xs">Our work has included:</p>
                <div className="space-y-4 mb-8">
                  {industrySupport.map((item, idx) => (
                    <motion.div 
                      key={idx} 
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.05 }}
                      className="flex items-start group"
                    >
                      <CheckCircle2 className="w-5 h-5 text-[#2E5EAA] mr-3 mt-0.5 shrink-0 group-hover:text-[#E8B84B] transition-colors" />
                      <span className="text-slate-400 text-sm leading-relaxed group-hover:text-slate-200 transition-colors">{item}</span>
                    </motion.div>
                  ))}
                </div>

                <div className="bg-gradient-to-br from-[#131C2E]/60 to-[#0B1220]/60 border border-slate-700/50 rounded-2xl p-6 mb-8 relative overflow-hidden group">
                  <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[#2E5EAA] to-[#E8B84B]" />
                  <p className="text-slate-300 text-sm leading-relaxed mb-4 font-medium">
                    Through these activities, Sanota contributes to local engineering development, industrial productivity, technology adoption, value addition and import-substitution opportunities.
                  </p>
                  <p className="text-slate-400 text-sm leading-relaxed italic">
                    Our experience across different industries also enables us to transfer relevant knowledge and technologies from one operational environment to another.
                  </p>
                </div>

                <Link href="/industries" className="inline-flex items-center px-8 py-4 bg-[#131C2E] hover:bg-slate-800 border border-slate-700 text-white font-bold rounded-lg transition-all hover:scale-105">
                  Explore Industries <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </motion.div>

              {/* Our Engineering Approach */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-[#E8B84B] font-bold tracking-widest uppercase text-sm mb-4 flex items-center">
                  Our Engineering Approach <span className="w-8 h-px bg-[#E8B84B] ml-4" />
                </h2>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">Practical Solutions Designed for Implementation</h3>
                <p className="text-slate-300 text-lg leading-relaxed mb-8">
                  Sanota approaches every project with an understanding that a successful engineering solution must work reliably within the customer’s actual operating environment.
                </p>
                
                <p className="text-[#E8B84B] font-bold mb-8 uppercase tracking-widest text-xs">Our approach is guided by five principles:</p>
                
                <div className="space-y-0 relative before:absolute before:inset-0 before:ml-[23px] before:w-0.5 before:bg-gradient-to-b before:from-slate-700 before:to-transparent">
                  {engineeringApproach.map((item, idx) => (
                    <motion.div 
                      key={idx} 
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex gap-6 pb-10 group"
                    >
                      <div className="relative z-10 w-12 h-12 rounded-full bg-[#131C2E] border-[3px] border-slate-700 flex items-center justify-center shrink-0 group-hover:border-[#E8B84B] group-hover:bg-[#E8B84B]/20 transition-all duration-300 shadow-[0_0_15px_rgba(0,0,0,0.5)]">
                        <span className="text-slate-400 font-black text-sm group-hover:text-[#E8B84B] transition-colors">{idx + 1}</span>
                      </div>
                      <div className="pt-1.5 group-hover:translate-x-2 transition-transform duration-300">
                        <h4 className="text-white font-bold text-xl mb-2 group-hover:text-[#E8B84B] transition-colors">{item.title}</h4>
                        <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* 8 & 9. Sanota and Knoweb & Innovation */}
        <section className="py-8 lg:py-12 bg-transparent relative overflow-hidden border-t border-slate-800/40">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
            
            {/* Sanota and Knoweb */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-[2.5rem] overflow-hidden border border-slate-700/50 shadow-2xl flex flex-col lg:flex-row group bg-[#131C2E]/80 backdrop-blur-md"
            >
              <div className="relative w-full lg:w-[45%] h-64 lg:h-auto overflow-hidden">
                <motion.img 
                  src="/featured_iot_1789116892994.jpg" 
                  alt="Knoweb Integration" 
                  animate={{ scale: [1.05, 1, 1.05], x: [0, 10, 0] }}
                  transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute inset-0 w-full h-full object-cover" 
                />
              </div>
              
              <div className="p-8 lg:p-12 xl:p-16 lg:w-[55%] flex flex-col justify-center">
                <h2 className="text-[#E8B84B] font-bold tracking-widest uppercase text-sm mb-3">Sanota and Knoweb</h2>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-5">Engineering Connected by Digital Technology</h3>
                <p className="text-slate-300 text-lg leading-relaxed mb-6">
                  Sanota’s integrated engineering capability is supported by Knoweb, an affiliated information technology company under common ownership.
                </p>
                
                <div className="bg-[#0B1220]/60 backdrop-blur-md rounded-2xl p-6 mb-6 border border-slate-700/50">
                  <p className="text-slate-400 font-bold mb-4 text-sm uppercase tracking-wider">Knoweb contributes specialist expertise in:</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {knowebExpertise.map((item, idx) => (
                      <div key={idx} className="flex items-center">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#E8B84B] mr-3 shrink-0 shadow-[0_0_5px_rgba(232,184,75,0.5)]" />
                        <span className="text-slate-300 text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <p className="text-slate-300 text-base leading-relaxed mb-8 font-medium">
                  This relationship enables Sanota to combine physical engineering systems with digital technologies. A machine can therefore become part of a connected operational system incorporating sensors, automation, cloud access, dashboards, alerts, traceability and management reporting.
                </p>

                <div>
                  <Link href="/services" className="inline-flex items-center justify-center px-8 py-4 bg-[#E8B84B] hover:bg-[#d4a643] text-[#0B1220] font-bold rounded-lg transition-all hover:scale-105 shadow-xl text-sm">
                    Explore Digital Integration <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* Innovation and Collaboration */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-[2.5rem] overflow-hidden border border-slate-700/50 shadow-2xl flex flex-col lg:flex-row-reverse group bg-[#131C2E]/80 backdrop-blur-md"
            >
              <div className="relative w-full lg:w-[45%] h-64 lg:h-auto overflow-hidden">
                <motion.img 
                  src="/featured_industrial_1789116846117.jpg" 
                  alt="Innovation" 
                  animate={{ scale: [1, 1.05, 1], y: [0, 10, 0] }}
                  transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute inset-0 w-full h-full object-cover" 
                />
              </div>
              
              <div className="p-8 lg:p-12 xl:p-16 lg:w-[55%] flex flex-col justify-center">
                <h2 className="text-[#E8B84B] font-bold tracking-widest uppercase text-sm mb-3">Innovation and Collaboration</h2>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-5">Turning Ideas into Practical Solutions</h3>
                <p className="text-slate-300 text-lg leading-relaxed mb-6">
                  Sanota works with businesses, inventors, universities, researchers, institutions and technology partners to develop solutions for specialized and emerging requirements.
                </p>
                
                <div className="bg-[#0B1220]/60 backdrop-blur-md rounded-2xl p-6 mb-6 border border-slate-700/50">
                  <p className="text-slate-400 font-bold mb-4 text-sm uppercase tracking-wider">Our collaborative capability includes:</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-3">
                    {collaborationCapabilities.map((item, idx) => (
                      <div key={idx} className="flex items-start">
                        <CheckCircle2 className="w-5 h-5 text-[#E8B84B] mr-3 shrink-0 mt-0.5" />
                        <span className="text-slate-300 text-sm leading-relaxed">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <p className="text-slate-300 text-base leading-relaxed font-medium mb-8">
                  This approach allows Sanota to contribute not only as a supplier, but also as an engineering development partner.
                </p>

                <div>
                  <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-[#E8B84B] hover:bg-[#d4a643] text-[#0B1220] font-bold rounded-lg transition-all hover:scale-105 shadow-xl text-sm">
                    Explore a Collaboration <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </div>
              </div>
            </motion.div>

          </div>
        </section>

        {/* 10 & 11. Vision & Mission */}
        <section className="py-8 lg:py-12 bg-gradient-to-b from-[#0B1220] to-[#050B14] relative overflow-hidden border-t border-slate-800/40">
          <div className="absolute right-0 bottom-0 w-[500px] h-[500px] bg-[#E8B84B]/5 rounded-full blur-[120px] pointer-events-none" />
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              
              {/* Vision */}
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-center lg:text-left"
              >
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-[#131C2E] border border-slate-700 shadow-inner mb-8">
                  <Target className="w-10 h-10 text-[#E8B84B]" />
                </div>
                <h2 className="text-[#E8B84B] font-bold tracking-widest uppercase text-sm mb-4 flex items-center justify-center lg:justify-start">
                  <span className="w-6 h-px bg-[#E8B84B] mr-3 hidden lg:block" /> Our Vision
                </h2>
                <h3 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight drop-shadow-md">
                  To Advance Industries Through Practical Engineering and Intelligent Technology
                </h3>
                <p className="text-slate-300 text-xl leading-relaxed border-l-2 border-[#E8B84B]/50 pl-5">
                  Our vision is to become a trusted engineering and technology partner for industries seeking practical, reliable, sustainable and future-ready operational solutions.
                </p>
              </motion.div>

              {/* Mission */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative rounded-[2.5rem] p-[1px] overflow-hidden shadow-2xl group"
              >
                <div className="absolute inset-[-100%] bg-[conic-gradient(from_0deg,transparent_0_280deg,#2E5EAA_360deg)] animate-[spin_5s_linear_infinite]" />
                <div className="relative bg-[#131C2E]/90 backdrop-blur-md w-full h-full p-10 lg:p-12 rounded-[calc(2.5rem-1px)] border border-slate-700/50 z-10">
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
              </motion.div>

            </div>
          </div>
        </section>

        {/* 12. What Guides Our Work */}
        <section className="py-8 lg:py-12 bg-transparent relative overflow-hidden">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-8 lg:mb-12"
            >
              <h2 className="text-[#E8B84B] font-bold tracking-widest uppercase text-sm mb-4 flex items-center justify-center">
                <span className="w-6 h-px bg-[#E8B84B] mr-3" /> What Guides Our Work <span className="w-6 h-px bg-[#E8B84B] ml-3" />
              </h2>
              <h3 className="text-3xl md:text-5xl font-bold text-white">Core Principles</h3>
            </motion.div>

            <div className="flex flex-wrap justify-center gap-8 lg:gap-10">
              {guidingPrinciples.map((principle, idx) => (
                <motion.div 
                  key={idx} 
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, type: "spring", stiffness: 100 }}
                  className="relative group w-[230px] h-[230px] shrink-0 shadow-lg rounded-full"
                >
                  <PixelCard active={activePrinciple === idx} variant="yellow" className="w-full h-full rounded-full border border-slate-700/50 group-hover:border-[#E8B84B]/60 shadow-[inset_0_0_20px_rgba(0,0,0,0.5)] bg-[#131C2E]/70 backdrop-blur-md flex flex-col items-center justify-center text-center">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#E8B84B] mb-3 shadow-[0_0_10px_rgba(232,184,75,0.8)] relative z-10" />
                    <h4 className="text-lg font-bold text-white mb-2 group-hover:text-[#E8B84B] transition-colors leading-tight relative z-10 px-4">
                      {principle.title}
                    </h4>
                    <p className="text-slate-400 text-xs leading-relaxed group-hover:text-slate-200 transition-colors relative z-10 px-5">
                      {principle.desc}
                    </p>
                  </PixelCard>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 13. Why Organizations Work With Sanota */}
        <section className="py-8 lg:py-12 bg-transparent relative overflow-hidden border-t border-slate-800/40">
          <div className="absolute left-1/4 bottom-0 w-[400px] h-[400px] bg-[#2E5EAA]/5 rounded-full blur-[100px] pointer-events-none" />
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-8 lg:mb-12"
            >
              <h2 className="text-[#E8B84B] font-bold tracking-widest uppercase text-sm mb-4 flex items-center justify-center">
                <span className="w-6 h-px bg-[#E8B84B] mr-3" /> The Sanota Advantage <span className="w-6 h-px bg-[#E8B84B] ml-3" />
              </h2>
              <h3 className="text-3xl md:text-5xl font-bold text-white">Why Organizations Work With Sanota</h3>
            </motion.div>

            <div className="flex flex-wrap justify-center gap-6 lg:gap-8">
              {whyWorkWithUs.map((reason, idx) => {
                const cardColors = [
                  "#00F0FF", // Electric Blue
                  "#FF0055", // Magenta
                  "#00FF66", // Neon Green
                  "#FFB800", // Golden
                  "#B026FF", // Purple
                  "#FF5E00", // Orange
                  "#00F5A0"  // Cyan/Teal
                ];
                const color = cardColors[idx];
                
                return (
                <motion.div 
                  key={idx} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="relative bg-[#131C2E]/70 backdrop-blur-md border border-slate-700/50 rounded-3xl p-8 hover:-translate-y-2 transition-all duration-300 group w-full sm:w-[calc(50%-12px)] lg:w-[calc(25%-24px)] flex-shrink-0 flex flex-col overflow-hidden"
                >
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500" style={{ background: `radial-gradient(circle at top right, ${color}, transparent)` }} />
                  <div className="absolute top-0 left-0 w-full h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ backgroundColor: color, boxShadow: `0 0 15px ${color}` }} />
                  
                  <div className="w-16 h-16 rounded-2xl bg-[#0B1220] border flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-inner relative z-10" style={{ borderColor: `${color}40`, boxShadow: `inset 0 0 20px ${color}10` }}>
                    <reason.icon className="w-8 h-8 transition-colors" style={{ color: color, filter: `drop-shadow(0 0 8px ${color}80)` }} />
                  </div>
                  
                  <h4 className="text-xl font-bold text-white mb-4 transition-colors relative z-10 group-hover:drop-shadow-[0_0_5px_rgba(255,255,255,0.5)]">
                    {reason.title}
                  </h4>
                  <p className="text-slate-400 text-sm leading-relaxed group-hover:text-slate-200 transition-colors relative z-10">
                    {reason.desc}
                  </p>
                </motion.div>
              )})}
            </div>
          </div>
        </section>

        {/* 14. Sanota at a Glance */}
        <section className="py-8 lg:py-12 bg-transparent relative overflow-hidden border-t border-slate-800/50">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-8 lg:mb-12"
            >
              <h2 className="text-[#E8B84B] font-bold tracking-widest uppercase text-sm mb-4 flex items-center justify-center">
                <span className="w-6 h-px bg-[#E8B84B] mr-3" /> Key Facts <span className="w-6 h-px bg-[#E8B84B] ml-3" />
              </h2>
              <h3 className="text-3xl md:text-5xl font-bold text-white">Sanota at a Glance</h3>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {atAGlance.map((fact, idx) => (
                <motion.div 
                  key={idx} 
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-[#0B1220] border border-slate-700/50 rounded-2xl p-8 text-center hover:bg-[#0B1220]/80 hover:border-[#E8B84B]/40 transition-colors"
                >
                  <h4 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#E8B84B] to-amber-500 mb-4">{fact.title}</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">{fact.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 15. Closing Call to Action */}
        <section className="py-24 lg:py-32 bg-transparent relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            
            <div className="absolute inset-0 bg-gradient-to-t from-[#050B14] via-[#050B14]/80 to-[#131C2E]/50 pointer-events-none" />
            <div className="absolute left-1/2 top-0 w-full h-px -translate-x-1/2 bg-gradient-to-r from-transparent via-[#E8B84B] to-transparent opacity-30" />
          </div>

          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-black text-white mb-8 leading-tight tracking-tight drop-shadow-lg"
            >
              Let’s Develop the Right Solution <br className="hidden md:block" /> for Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2E5EAA] to-[#4B85E8]">Operation</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-slate-300 text-xl md:text-2xl mb-8 leading-relaxed font-medium"
            >
              Whether you are planning a new engineering project, improving a production process, developing a product, modernizing machinery, introducing automation or seeking dependable maintenance support, Sanota can help identify a practical way forward.
            </motion.p>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-slate-400 text-lg mb-12 max-w-3xl mx-auto"
            >
              Tell us about your operational challenge, requirement or opportunity. Our team will connect you with the appropriate engineering and technical expertise.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row justify-center gap-5 mb-8 lg:mb-12"
            >
              <Link href="/tell-us-your-challenge" className="group relative inline-flex items-center justify-center px-8 py-5 bg-[#E8B84B] text-[#0B1220] font-bold rounded-xl overflow-hidden shadow-[0_0_40px_rgba(232,184,75,0.3)] transition-all hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-[150%] group-hover:translate-x-[150%] transition-transform duration-700 ease-in-out" />
                <Target className="w-5 h-5 mr-3 group-hover:rotate-12 transition-transform" />
                Discuss Your Requirement
              </Link>
              <Link href="/contact" className="inline-flex items-center justify-center px-8 py-5 bg-[#0B1220]/60 backdrop-blur-md text-white font-bold rounded-xl border border-slate-700 hover:bg-[#131C2E]/80 hover:border-[#2E5EAA]/50 transition-all hover:scale-105 shadow-xl">
                Request a Technical Consultation <ArrowRight className="ml-3 w-5 h-5" />
              </Link>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap justify-center gap-6 sm:gap-10 pt-8 border-t border-slate-800/50"
            >
              <Link href="/services" className="text-sm font-bold tracking-wider uppercase text-slate-500 hover:text-[#E8B84B] transition-colors">Explore Our Services</Link>
              <Link href="/media" className="text-sm font-bold tracking-wider uppercase text-slate-500 hover:text-[#E8B84B] transition-colors">View Our Projects</Link>
              <Link href="/services" className="text-sm font-bold tracking-wider uppercase text-slate-500 hover:text-[#E8B84B] transition-colors">Request an AMC Assessment</Link>
              <Link href="/contact" className="text-sm font-bold tracking-wider uppercase text-slate-500 hover:text-[#E8B84B] transition-colors">Explore a Partnership</Link>
            </motion.div>
          </div>
        </section>

      
          </div>
        </div>
</main>
      <Footer />
    </div>
  );
}
