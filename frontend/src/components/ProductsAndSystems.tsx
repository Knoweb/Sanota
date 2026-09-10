"use client";

import { motion } from "framer-motion";
import { Settings2, Flame, Droplets, Sprout, Network, Truck, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const products = [
  {
    title: "Industrial Machinery & Automation",
    desc: "Custom machinery, machine controls, testing equipment and special-purpose production systems.",
    icon: Settings2,
    image: "/images/products/industrial_machinery.jpg"
  },
  {
    title: "Food & Tea Processing",
    desc: "Dryers, processing equipment, handling systems and integrated production solutions.",
    icon: Flame,
    image: "/images/products/food_tea.jpg"
  },
  {
    title: "Smart Agriculture Systems",
    desc: "Greenhouse, irrigation, fertigation, cultivation and environmental-monitoring systems.",
    icon: Sprout,
    image: "/images/products/smart_agri.jpg"
  },
  {
    title: "IoT, Tracking & Digital Platforms",
    desc: "Asset tracking, machine monitoring, inspection systems, smart weighing, dashboards and alerts.",
    icon: Network,
    image: "/images/products/iot_tracking.jpg"
  },
  {
    title: "Material-Handling Systems",
    desc: "Automated guided vehicles, conveyors, unloading equipment and customized internal logistics solutions.",
    icon: Truck,
    image: "/images/products/material_handling.jpg"
  },
  {
    title: "Energy & Environmental Systems",
    desc: "Smart energy, solar thermal, waste processing, drainage monitoring and environmental solutions.",
    icon: Droplets,
    image: "/images/products/energy_environment.jpg"
  },
];

export default function ProductsAndSystems() {
  return (
    <section id="products" className="relative pt-8 pb-20 lg:pt-12 lg:pb-24 bg-transparent border-t border-slate-800/50 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-[#2E5EAA]/5 blur-[120px] rounded-full -z-10 pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Centered Header */}
        <div className="text-center mb-16 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-sm font-bold text-[#E8B84B] uppercase tracking-widest mb-3">Products and Systems</h2>
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-6">
              Developed Around Real <br className="hidden sm:block" />Operational Requirements
            </h3>
            <p className="text-[15.5px] text-slate-400 max-w-3xl mx-auto leading-relaxed">
              Sanota develops standard, configurable and custom-engineered products and systems for specific industrial applications. Supported through consultation, customization, installation, and AMC services.
            </p>
          </motion.div>
        </div>

        {/* 3-Column Immersive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {products.map((product, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="group relative h-[300px] rounded-3xl overflow-hidden cursor-pointer shadow-2xl border border-slate-800/60"
            >
              {/* Background Image */}
              <Image
                src={product.image}
                alt={product.title}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
              />

              {/* Cinematic Gradients */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1220] via-[#0B1220]/70 to-transparent opacity-90 group-hover:opacity-95 transition-opacity duration-500" />
              <div className="absolute inset-0 bg-[#2E5EAA]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-overlay" />

              {/* Content Area */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <div className="transform translate-y-6 group-hover:translate-y-0 transition-transform duration-500 ease-out">

                  {/* Floating Icon */}
                  <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-md border border-white/10 flex items-center justify-center mb-4 group-hover:border-[#E8B84B]/50 group-hover:bg-[#E8B84B]/20 transition-all duration-500 shadow-lg">
                    <product.icon className="w-6 h-6 text-white group-hover:text-[#E8B84B] transition-colors duration-500" />
                  </div>

                  <h4 className="text-[18px] font-bold text-white leading-tight mb-2">
                    {product.title}
                  </h4>

                  {/* Expanding Description */}
                  <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-500 ease-out">
                    <div className="overflow-hidden">
                      <p className="text-[13px] text-slate-300 leading-relaxed mb-4 pt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                        {product.desc}
                      </p>
                      <Link
                        href="/products"
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center text-[#E8B84B] text-[12px] font-bold uppercase tracking-wider hover:text-white transition-colors opacity-0 group-hover:opacity-100 duration-500 delay-200"
                      >
                        Explore Solution <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>

                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Global CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <Link
            href="/products"
            className="inline-flex justify-center items-center px-8 py-4 border border-transparent text-[14.5px] font-bold rounded-xl text-[#0B1220] bg-[#E8B84B] hover:bg-[#d4a643] transition-all hover:scale-105 shadow-[0_0_30px_rgba(232,184,75,0.25)] group"
          >
            Explore All Products & Systems
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
