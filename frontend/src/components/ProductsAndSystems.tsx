"use client";

import { motion } from "framer-motion";
import { Settings2, Flame, Droplets, Sprout, Network, Truck, ArrowRight } from "lucide-react";
import Link from "next/link";

const products = [
  { 
    title: "Industrial Machinery & Automation", 
    desc: "Custom machinery, machine controls, testing equipment and special-purpose production systems.", 
    icon: Settings2 
  },
  { 
    title: "Food & Tea Processing", 
    desc: "Dryers, processing equipment, handling systems and integrated production solutions.", 
    icon: Flame 
  },
  { 
    title: "Smart Agriculture Systems", 
    desc: "Greenhouse, irrigation, fertigation, cultivation and environmental-monitoring systems.", 
    icon: Sprout 
  },
  { 
    title: "IoT, Tracking & Digital Platforms", 
    desc: "Asset tracking, machine monitoring, inspection systems, smart weighing, dashboards and alerts.", 
    icon: Network 
  },
  { 
    title: "Material-Handling Systems", 
    desc: "Automated guided vehicles, conveyors, unloading equipment and customized internal logistics solutions.", 
    icon: Truck 
  },
  { 
    title: "Energy & Environmental Systems", 
    desc: "Smart energy, solar thermal, waste processing, drainage monitoring and environmental solutions.", 
    icon: Droplets 
  },
];

export default function ProductsAndSystems() {
  return (
    <section id="products" className="relative py-24 bg-transparent border-t border-slate-800/50 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-[#2E5EAA]/5 blur-[120px] rounded-full -z-10" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          <div className="lg:col-span-5 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-sm font-bold text-[#E8B84B] uppercase tracking-widest mb-3">Products and Systems</h2>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight mb-6">
                Developed Around Real Operational Requirements
              </h3>
              <div className="text-[15.5px] text-slate-400 mb-10 leading-relaxed space-y-4">
                <p>
                  Sanota develops standard, configurable and custom-engineered products and systems for specific industrial applications.
                </p>
                <p>
                  Our products and systems can be supported through consultation, customization, installation, commissioning, training and AMC services.
                </p>
              </div>
              <Link
                href="/products"
                className="inline-flex justify-center items-center px-7 py-3 border border-transparent text-[14px] font-bold rounded-lg text-[#0B1220] bg-[#E8B84B] hover:bg-[#d4a643] transition-colors shadow-lg group w-full sm:w-auto"
              >
                Explore Products & Systems
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>

          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {products.map((product, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className="glowing-card group relative bg-[#131C2E]/60 backdrop-blur-sm border border-slate-800 p-6 rounded-2xl hover:border-[#E8B84B]/50 transition-colors duration-300 flex flex-col h-full"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#E8B84B]/0 to-[#2E5EAA]/0 group-hover:from-[#E8B84B]/5 group-hover:to-[#2E5EAA]/5 rounded-2xl transition-all duration-500" />
                  
                  <div className="w-12 h-12 shrink-0 rounded-xl bg-[#0B1220] border border-slate-700 flex items-center justify-center mb-5 group-hover:border-[#E8B84B] transition-all duration-300 z-10">
                    <product.icon className="w-6 h-6 text-[#2E5EAA] group-hover:text-[#E8B84B] transition-colors duration-300" />
                  </div>
                  <h4 className="text-[16px] font-bold text-white group-hover:text-[#E8B84B] transition-colors z-10 leading-tight mb-2">
                    {product.title}
                  </h4>
                  <p className="text-[14px] text-slate-400 leading-relaxed flex-grow z-10">
                    {product.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
