"use client";

import { motion } from "framer-motion";
import { Wrench, Cpu, Activity, Network, PenTool, LifeBuoy, ArrowRight } from "lucide-react";
import Link from "next/link";

const capabilities = [
  { 
    name: "Mechanical Engineering", 
    description: "Machinery, mechanisms, structures, processing equipment and special-purpose systems.",
    icon: Wrench,
    bgImage: "/cap/cap_mechanical.jpg",
    color: "#E8B84B"
  },
  { 
    name: "Electrical Engineering", 
    description: "Control panels, electrical systems, embedded electronics, and device integration.",
    icon: Cpu,
    bgImage: "/cap/cap_electrical.jpg",
    color: "#06b6d4"
  },
  { 
    name: "Automation & Control", 
    description: "PLCs, HMIs, sensors, actuators, motor controls, and servo systems.",
    icon: Activity,
    bgImage: "/cap/cap_automation.jpg",
    color: "#10b981"
  },
  { 
    name: "IoT & Software", 
    description: "Connected monitoring, cloud platforms, dashboards, alerts, and reporting.",
    icon: Network,
    bgImage: "/cap/cap_iot.jpg",
    color: "#3b82f6"
  },
  { 
    name: "Fabrication & Assembly", 
    description: "Procurement, fabrication, assembly, installation, and commissioning.",
    icon: PenTool,
    bgImage: "/cap/cap_fabrication.jpg",
    color: "#ec4899"
  },
  { 
    name: "Lifecycle Support", 
    description: "Preventive maintenance, breakdown support, training, and continuous upgrades.",
    icon: LifeBuoy,
    bgImage: "/cap/cap_amc.jpg",
    color: "#f97316"
  },
];

export default function IntegratedSolutionCapability() {
  return (
    <section className="relative py-12 lg:py-16 bg-[#0B1220] overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-0 -mr-40 -mt-40 w-96 h-96 rounded-full bg-[#E8B84B]/5 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-40 -mb-40 w-96 h-96 rounded-full bg-[#2E5EAA]/10 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="xl:col-span-6 sticky top-24 xl:pr-6"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-black text-white mb-6 leading-tight">
              More Than One Technology. <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E8B84B] to-yellow-200">One Connected Solution.</span>
            </h2>
            <div className="text-[15.5px] text-slate-300 mb-8 leading-relaxed space-y-5">
              <p>Industrial problems rarely belong to a single technical discipline.</p>
              <p>A production issue may require mechanical changes, electrical controls, automation, sensors, software, installation and ongoing maintenance. Sanota brings these capabilities together through one coordinated solution.</p>
            </div>
            
            <div className="p-5 border-l-4 border-[#E8B84B] bg-[#131C2E] mb-8 rounded-r-xl">
              <p className="text-white font-bold tracking-wide leading-relaxed">
                One coordinated team.<br/>
                One accountable delivery approach.<br/>
                One integrated solution.
              </p>
            </div>

            <Link
              href="/services"
              className="inline-flex justify-center items-center px-8 py-3.5 border border-transparent text-[14px] font-bold rounded-lg text-[#0B1220] bg-[#E8B84B] hover:bg-[#d4a643] transition-colors shadow-lg shadow-[#E8B84B]/20 group w-full sm:w-auto"
            >
              Explore Our Services
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          {/* Capabilities Grid */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="xl:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-10 justify-items-center"
          >
            {capabilities.map((cap, idx) => {
              const Icon = cap.icon;
              return (
                <motion.div 
                  key={idx}
                  animate={{ y: [0, -12, 0] }}
                  transition={{ 
                    duration: 5, 
                    repeat: Infinity, 
                    ease: "easeInOut",
                    delay: idx * 0.4
                  }}
                  className="relative flex flex-col items-center text-center p-6 sm:p-8 rounded-full aspect-square w-full max-w-[280px] sm:max-w-[310px] bg-[#131C2E] border border-slate-800 transition-all duration-500 group overflow-hidden justify-center shadow-2xl mx-auto"
                  style={{ '--card-color': cap.color } as React.CSSProperties}
                  onMouseEnter={(e: any) => {
                    e.currentTarget.style.borderColor = cap.color;
                  }}
                  onMouseLeave={(e: any) => {
                    e.currentTarget.style.borderColor = '#1e293b'; // slate-800
                  }}
                >
                  {/* Background Image */}
                  <div className="absolute inset-0 z-0 transition-all duration-700 opacity-40 group-hover:opacity-70 group-hover:scale-110">
                    <div 
                      className="absolute inset-0 z-10" 
                      style={{ background: `linear-gradient(to bottom, rgba(11, 18, 32, 0.6), ${cap.color}33, rgba(11, 18, 32, 0.9))` }}
                    />
                    <img
                      src={cap.bgImage}
                      alt={cap.name}
                      className="w-full h-full object-cover mix-blend-lighten"
                    />
                  </div>

                  <div 
                    className="relative z-10 w-14 h-14 sm:w-16 sm:h-16 rounded-full backdrop-blur-md flex items-center justify-center mb-4 border transition-all duration-500 shadow-lg shrink-0 group-hover:scale-110"
                    style={{ backgroundColor: `${cap.color}1A`, borderColor: `${cap.color}40` }}
                  >
                    <Icon className="w-7 h-7 sm:w-8 sm:h-8 transition-colors" style={{ color: cap.color }} />
                  </div>
                  <h3 
                    className="relative z-10 font-black text-white text-[16px] sm:text-[18px] mb-2 transition-colors duration-300 px-3 leading-tight group-hover:!text-[var(--card-color)]"
                  >
                    {cap.name}
                  </h3>
                  <p className="relative z-10 text-slate-300 text-[13px] sm:text-[14px] leading-relaxed group-hover:text-white transition-colors duration-300 px-4 line-clamp-4">
                    {cap.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
