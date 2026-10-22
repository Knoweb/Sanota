"use client";

import { motion } from "framer-motion";
import { Settings2, Flame, Droplets, Sprout, Network, Truck, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { homeES } from "@/locales/es/home";
import { homeDE } from "@/locales/de/home";
import { homeJA } from "@/locales/ja/home";
import { homeAR } from "@/locales/ar/home";

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
  const { language } = useLanguage();
  const isEs = language === "es";
  const isDe = language === "de";
  const isJa = language === "ja";
  const isAr = language === "ar";
  const ps = isAr ? homeAR.productsAndSystems : isJa ? homeJA.productsAndSystems : isDe ? homeDE.productsAndSystems : isEs ? homeES.productsAndSystems : null;

  const displayProducts = products.map((item, idx) => {
    if (ps && ps.categories[idx]) {
      return {
        ...item,
        title: ps.categories[idx].title,
        desc: ps.categories[idx].description,
      };
    }
    return item;
  });

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
            <p className="text-sm font-bold text-[#E8B84B] uppercase tracking-widest mb-3">
              {isAr ? "المنتجات والأنظمة" : isJa ? "製品・システム" : isDe ? "Produkte & Systeme" : isEs ? "Productos y Sistemas" : "Products and Systems"}
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#17135B] dark:text-white leading-tight mb-6">
              {ps ? ps.heading : (
                <>Developed Around Real <br className="hidden sm:block" />Operational Requirements</>
              )}
            </h2>
            <p className="text-[15.5px] text-[#555E75] dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
              {ps ? `${ps.subheading} ${ps.supportNote}` : "Sanota develops standard, configurable and custom-engineered products and systems for specific industrial applications. Supported through consultation, customization, installation, and AMC services."}
            </p>
          </motion.div>
        </div>

        {/* 3-Column Immersive Grid */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 lg:gap-8">
          {displayProducts.map((product, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="group relative h-[180px] md:h-[300px] rounded-2xl md:rounded-3xl overflow-hidden cursor-pointer shadow-2xl border border-slate-700/60"
            >
              {/* Background Image */}
              <Image
                src={product.image}
                alt={product.title}
                fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
              />

              {/* Cinematic Gradients */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1220] via-[#0B1220]/70 to-transparent opacity-90 group-hover:opacity-95 transition-opacity duration-500" />
              <div className="absolute inset-0 bg-[#2E5EAA]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-overlay" />

              {/* Content Area */}
              <div className="absolute inset-0 p-4 md:p-6 flex flex-col justify-end">
                <div className="transition-transform duration-500 ease-out">

                  {/* Floating Icon */}
                  <div className="w-8 h-8 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-white/10 backdrop-blur-md border border-white/10 flex items-center justify-center mb-2 md:mb-4 group-hover:border-[#E8B84B]/50 group-hover:bg-[#E8B84B]/20 transition-all duration-500 shadow-lg">
                    <product.icon className="w-4 h-4 md:w-6 md:h-6 text-white group-hover:text-[#E8B84B] transition-colors duration-500" />
                  </div>

                  <h3 className="text-[12px] md:text-[18px] font-bold !text-white leading-tight mb-1 md:mb-3 drop-shadow-md">
                    {product.title}
                  </h3>

                  {/* Description and Link (Visible by Default) */}
                  <div>
                    <p className="text-xs md:text-[13px] !text-slate-200 leading-relaxed mb-4 hidden md:block drop-shadow-sm">
                      {product.desc}
                    </p>
                    <Link
                      href="/products"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center text-[#E5A93C] dark:text-[#E8B84B] text-[10px] md:text-[12px] font-bold uppercase tracking-wider hover:!text-white transition-colors group/link mt-1 md:mt-0"
                    >
                      {isAr ? "استكشف الحل" : isJa ? "ソリューションを見る" : isDe ? "Lösung entdecken" : isEs ? "Explorar Solución" : "Explore Solution"} <ArrowRight className="ml-1 md:ml-2 w-3 h-3 md:w-4 md:h-4 group-hover/link:translate-x-1 transition-transform" />
                    </Link>
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
            className="inline-flex justify-center items-center px-8 py-4 border border-transparent text-[14.5px] font-bold rounded-xl text-[#111424] bg-[#E5A93C] hover:bg-[#F0B74C] dark:text-[#0B1220] dark:bg-[#E8B84B] dark:hover:bg-[#d4a643] transition-all hover:scale-105 shadow-[0_4px_14px_rgba(229,169,60,0.3)] group"
          >
            {ps ? ps.button : "Explore All Products & Systems"}
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
