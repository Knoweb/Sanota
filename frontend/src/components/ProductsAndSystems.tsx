"use client";

import { motion } from "framer-motion";
import { Settings2, Flame, Droplets, Sprout, Network, Truck } from "lucide-react";
import Link from "next/link";

const products = [
  {
    title: "Industrial Machinery & Automation",
    description: "Custom machinery, machine-control systems, production automation, testing equipment and special-purpose industrial solutions.",
    icon: Settings2,
  },
  {
    title: "Food-Processing Equipment",
    description: "Dryers, shredders, processing lines, thermal systems, incubation equipment and food-waste processing solutions.",
    icon: Flame,
  },
  {
    title: "Tea-Processing Systems",
    description: "Withering equipment, tea rollers, green and black tea dryers, mini tea-factory systems and specialty tea-processing machinery.",
    icon: Droplets,
  },
  {
    title: "Smart Agriculture Systems",
    description: "Greenhouse automation, fertigation, irrigation, environmental monitoring, plant-management and controlled-cultivation systems.",
    icon: Sprout,
  },
  {
    title: "IoT, Tracking & Digital Platforms",
    description: "Asset tracking, machine monitoring, inspection platforms, smart weighing, dashboards, alerts and remote operational control.",
    icon: Network,
  },
  {
    title: "Material-Handling Systems",
    description: "Automated guided vehicles, conveyors, unloading systems, asset visibility and customized internal-logistics solutions.",
    icon: Truck,
  },
];

export default function ProductsAndSystems() {
  return (
    <section id="products" className="relative py-24 bg-transparent border-t border-slate-800/50 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-[#2E5EAA]/5 blur-[120px] rounded-full -z-10" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          <div className="lg:col-span-4 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-sm font-bold text-[#E8B84B] uppercase tracking-widest mb-3">Products & Systems</h2>
              <h3 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight mb-6">
                Developed Around Real Operational Requirements
              </h3>
              <p className="text-slate-400 mb-6 leading-relaxed">
                Sanota develops standard, configurable and custom-engineered products and systems for specific industrial and operational applications.
              </p>
              <p className="text-slate-400 mb-10 leading-relaxed">
                Our products are supported by engineering consultation, customization, installation, commissioning, training, maintenance and technical support.
              </p>
              <Link
                href="#"
                className="inline-flex items-center px-7 py-3 border border-[#E8B84B] text-[14px] font-bold rounded-full text-[#E8B84B] hover:bg-[#E8B84B] hover:text-[#0B1220] transition-colors uppercase tracking-wider"
              >
                Explore Products & Systems
              </Link>
            </motion.div>
          </div>

          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {products.map((product, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="group relative bg-[#131C2E]/60 backdrop-blur-sm border border-[#1e293b] p-8 rounded-2xl hover:border-[#E8B84B]/50 transition-colors duration-300"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#E8B84B]/0 to-[#2E5EAA]/0 group-hover:from-[#E8B84B]/5 group-hover:to-[#2E5EAA]/5 rounded-2xl transition-all duration-500" />
                  
                  <div className="relative z-10">
                    <div className="w-12 h-12 rounded-xl bg-[#0B1220] border border-[#1e293b] flex items-center justify-center mb-6 group-hover:border-[#E8B84B] group-hover:shadow-[0_0_15px_rgba(232,184,75,0.2)] transition-all duration-300">
                      <product.icon className="w-6 h-6 text-slate-300 group-hover:text-[#E8B84B] transition-colors duration-300" />
                    </div>
                    <h4 className="text-lg font-bold text-white mb-3 group-hover:text-[#E8B84B] transition-colors">
                      {product.title}
                    </h4>
                    <p className="text-sm text-slate-400 leading-relaxed">
                      {product.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
