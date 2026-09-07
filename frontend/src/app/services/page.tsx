"use client";

import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FinalCTA from "@/components/FinalCTA";
import Link from "next/link";
import { ArrowRight, Settings, Zap, Cpu, Code2 } from "lucide-react";

const services = [
  {
    title: "Mechanical Engineering & Fabrication",
    desc: "Designing and building robust physical systems.",
    icon: Settings,
    color: "from-blue-600 to-cyan-500",
    items: [
      "Concept & 3D Design",
      "Prototyping & Testing",
      "Precision Fabrication & Machining",
      "Structural Engineering",
      "Equipment Rebuilding"
    ]
  },
  {
    title: "Electrical & Electronic Systems",
    desc: "Powering and controlling industrial operations.",
    icon: Zap,
    color: "from-amber-500 to-orange-500",
    items: [
      "Power Distribution & MCC Panels",
      "Motor Control Systems",
      "Sensor & Instrument Integration",
      "Custom PCB Design (Through Knoweb)",
      "Safety System Integration"
    ]
  },
  {
    title: "Industrial Automation & Control",
    desc: "Bringing intelligence and precision to machinery.",
    icon: Cpu,
    color: "from-emerald-500 to-teal-500",
    items: [
      "PLC & HMI Programming",
      "Drive Configuration (VFD/Servo)",
      "SCADA System Development",
      "Robotics Integration",
      "Legacy System Upgrades"
    ]
  },
  {
    title: "Software & Digital Integration (By Knoweb)",
    desc: "Connecting the factory floor to the enterprise.",
    icon: Code2,
    color: "from-purple-600 to-pink-500",
    items: [
      "Custom ERP Development",
      "Production Dashboards",
      "Inventory & Traceability Systems",
      "Cloud Data Infrastructure",
      "Mobile Monitoring Apps"
    ]
  }
];

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-transparent">
      <Header />
      <main className="flex-grow pt-24">
        
        {/* Hero Section */}
        <section className="relative py-32 overflow-hidden border-b border-slate-800">
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/services_hero_bg.jpg')" }}
          />
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-[#050B14]/40" />
          {/* Gradient overlay bottom fade */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050B14]/20 to-[#050B14]/70" />

          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl sm:text-6xl font-black text-white tracking-tight mb-6"
            >
              Engineering <span className="text-[#2E5EAA]">Services</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-slate-300 max-w-2xl mx-auto font-semibold mb-6"
            >
              Integrated Capability. Practical Solutions.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-slate-400 max-w-3xl mx-auto"
            >
              We provide mechanical, electrical, and software engineering capabilities under one roof. Our services can be engaged individually to solve specific technical problems or combined to deliver complete turnkey systems.
            </motion.p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-24 bg-[#0B1220]">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-[#131C2E]/60 backdrop-blur-sm border border-slate-800 rounded-3xl p-8 hover:border-[#2E5EAA]/50 transition-colors"
                >
                  <div className="flex items-center mb-6">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} p-0.5 mr-6`}>
                      <div className="w-full h-full bg-[#0B1220] rounded-[14px] flex items-center justify-center">
                        <service.icon className="w-7 h-7 text-white" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-1">{service.title}</h3>
                      <p className="text-[#E8B84B] font-medium text-sm">{service.desc}</p>
                    </div>
                  </div>
                  
                  <ul className="space-y-4">
                    {service.items.map((item, itemIdx) => (
                      <li key={itemIdx} className="flex items-start text-slate-300">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#2E5EAA] mt-2 mr-3 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-20">
              <Link
                href="/tell-us-your-challenge"
                className="inline-flex items-center px-8 py-4 border border-transparent text-[15px] font-bold rounded-lg text-[#0B1220] bg-[#E8B84B] hover:bg-[#d4a643] transition-colors uppercase tracking-wider shadow-[0_0_20px_rgba(232,184,75,0.2)]"
              >
                Tell Us Your Challenge
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
