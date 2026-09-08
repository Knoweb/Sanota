"use client";

import { motion } from "framer-motion";
import { Link2, Settings, Zap, Building2, Cpu, Wrench, PackageSearch, Network, ArrowRight } from "lucide-react";
import Link from "next/link";

const options = [
  { 
    name: "Modernize a Machine", 
    description: "Restore machinery, replace outdated controls, improve safety and extend operating life.",
    linkText: "Request a Modernization Assessment",
    href: "/tell-us-your-challenge",
    icon: Settings 
  },
  { 
    name: "Automate a Process", 
    description: "Introduce PLC, HMI, sensor, drive and control technologies to improve consistency and reduce manual intervention.",
    linkText: "Explore Industrial Automation",
    href: "/services",
    icon: Zap 
  },
  { 
    name: "Develop a Machine", 
    description: "Design and build machinery or equipment around a specific production, processing or testing requirement.",
    linkText: "Explore Custom Machinery Development",
    href: "/services",
    icon: Cpu 
  },
  { 
    name: "Monitor an operation", 
    description: "Connect machines, assets and environments with sensors, IoT, dashboards, alerts and reporting.",
    linkText: "Explore IoT & Digital Integration",
    href: "/services",
    icon: Network 
  },
  { 
    name: "Build a Complete System", 
    description: "Develop and integrate machinery, controls, software, utilities and operational processes as one solution.",
    linkText: "Explore Project Execution",
    href: "/services",
    icon: Building2 
  },
  { 
    name: "Develop a Product", 
    description: "Turn a technical requirement, concept or research idea into a prototype or practical product.",
    linkText: "Explore Product Development",
    href: "/services",
    icon: PackageSearch 
  },
  { 
    name: "Maintain Critical Assets", 
    description: "Protect machinery, automation and integrated systems through preventive maintenance, technical support and AMCs.",
    linkText: "Request an AMC Assessment",
    href: "/tell-us-your-challenge",
    icon: Wrench 
  },
  { 
    name: "I Am Not Sure Yet", 
    description: "Explain the situation in your own words. Our team will help identify the most appropriate starting point.",
    linkText: "Request a Technical Consultation",
    href: "/tell-us-your-challenge",
    icon: Link2 
  },
];

export default function SolutionNavigator() {
  return (
    <section className="relative py-24 bg-[#131C2E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-black text-white mb-4"
          >
            What Are You Trying to Achieve?
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {options.map((option, idx) => {
            const Icon = option.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="flex"
              >
                <div className="flex flex-col p-8 rounded-2xl bg-[#0B1220] border border-slate-800 hover:border-[#E8B84B]/50 transition-all duration-300 group w-full relative">
                  <div className="w-14 h-14 rounded-xl bg-[#131C2E] flex items-center justify-center mb-6 border border-slate-800">
                    <Icon className="w-7 h-7 text-[#E8B84B]" />
                  </div>
                  <h3 className="text-white font-bold text-[18px] leading-snug mb-3">{option.name}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-8 flex-grow">
                    {option.description}
                  </p>
                  <Link
                    href={option.href}
                    className="text-[#E8B84B] hover:text-white text-[13px] font-bold flex items-center transition-colors group-hover:translate-x-1 duration-300 w-fit"
                  >
                    {option.linkText}
                    <ArrowRight className="ml-1.5 w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
