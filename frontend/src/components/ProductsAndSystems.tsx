"use client";

import { motion } from "framer-motion";
import { Settings2, Flame, Droplets, Sprout, Network, Truck } from "lucide-react";
import Link from "next/link";

const products = [
  { title: "Conveyors & Material Handling", icon: Truck },
  { title: "Processing Machinery", icon: Settings2 },
  { title: "Automated Sorting Systems", icon: Network },
  { title: "Industrial Dryers & Ovens", icon: Flame },
  { title: "Washing & Cleaning Systems", icon: Droplets },
  { title: "Inspection & Quality Control", icon: Sprout },
  { title: "Packing & Dispatch Systems", icon: Truck },
  { title: "Hardware Components & Spare Parts", icon: Settings2 },
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
                Custom engineering and standardized products for industrial use.
              </h3>
              <p className="text-slate-400 mb-10 leading-relaxed">
                Sanota develops standard, configurable and custom-engineered products and systems for specific industrial and operational applications.
              </p>
              <Link
                href="/products"
                className="inline-flex items-center px-7 py-3 border border-transparent text-[14px] font-bold rounded-lg text-[#0B1220] bg-[#E8B84B] hover:bg-[#d4a643] transition-colors shadow-lg"
              >
                View Products
              </Link>
            </motion.div>
          </div>

          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {products.map((product, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className="group relative bg-[#131C2E]/60 backdrop-blur-sm border border-[#1e293b] p-5 rounded-2xl hover:border-[#E8B84B]/50 transition-colors duration-300 flex items-center space-x-4"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#E8B84B]/0 to-[#2E5EAA]/0 group-hover:from-[#E8B84B]/5 group-hover:to-[#2E5EAA]/5 rounded-2xl transition-all duration-500" />
                  
                  <div className="w-12 h-12 shrink-0 rounded-xl bg-[#0B1220] border border-[#1e293b] flex items-center justify-center group-hover:border-[#E8B84B] group-hover:shadow-[0_0_15px_rgba(232,184,75,0.2)] transition-all duration-300 z-10">
                    <product.icon className="w-6 h-6 text-slate-300 group-hover:text-[#E8B84B] transition-colors duration-300" />
                  </div>
                  <h4 className="text-[15px] font-bold text-white group-hover:text-[#E8B84B] transition-colors z-10 leading-tight">
                    {product.title}
                  </h4>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
