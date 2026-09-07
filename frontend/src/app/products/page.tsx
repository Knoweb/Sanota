"use client";

import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Wind, Truck, SlidersHorizontal, Settings2, ShieldAlert } from "lucide-react";

const products = [
  {
    title: "Drying Systems",
    desc: "Advanced drying technology for agricultural and industrial applications.",
    icon: Wind,
    items: [
      "Fluidized Bed Dryers",
      "Belt Dryers",
      "Custom Dehydration Systems"
    ]
  },
  {
    title: "Conveying & Material Handling",
    desc: "Moving materials safely, efficiently, and continuously.",
    icon: Truck,
    items: [
      "Belt & Roller Conveyors",
      "Bucket Elevators",
      "Automated Sorting Systems"
    ]
  },
  {
    title: "Industrial Grading Systems",
    desc: "Precision grading and classification machinery for the tea and agriculture sectors.",
    icon: SlidersHorizontal,
    items: [
      "Color Sorters",
      "Size & Density Graders",
      "Automated Quality Control Lines"
    ]
  },
  {
    title: "Automated Processing Lines",
    desc: "End-to-end processing systems integrating mechanics and digital control.",
    icon: Settings2,
    items: [
      "Continuous Withering Systems",
      "Tea Manufacturing Automation",
      "Custom Processing Systems"
    ]
  },
  {
    title: "Specialized Machinery",
    desc: "Custom-engineered equipment for specific industrial requirements.",
    icon: ShieldAlert,
    items: [
      "Environmental Control Systems (Dust & Heat)",
      "Specialized Packaging Automation",
      "Prototypes & Bespoke Engineering"
    ]
  }
];

export default function ProductsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-transparent">
      <Header />
      <main className="flex-grow pt-24">
        
        {/* Hero Section */}
        <section className="relative py-24 bg-[#050B14] overflow-hidden border-b border-slate-800">
          <div className="absolute inset-0 bg-gradient-to-b from-[#131C2E]/50 to-transparent" />
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl sm:text-6xl font-black text-white tracking-tight mb-6"
            >
              Products <span className="text-[#E8B84B]">and Systems</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-slate-300 max-w-2xl mx-auto font-semibold mb-6"
            >
              Engineered for Performance. Built for Reliability.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-slate-400 max-w-3xl mx-auto"
            >
              We design, manufacture and implement industrial systems that solve complex operational challenges. Our products range from specialized machinery to complete automated processing lines.
            </motion.p>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-24 bg-[#0B1220]">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-[#131C2E]/60 backdrop-blur-sm border border-slate-800 rounded-3xl p-8 hover:border-[#E8B84B]/50 transition-colors"
                >
                  <div className="w-14 h-14 rounded-2xl bg-[#0B1220] border border-slate-700 flex items-center justify-center mb-6">
                    <product.icon className="w-7 h-7 text-[#E8B84B]" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">{product.title}</h3>
                  <p className="text-slate-400 text-sm mb-6 leading-relaxed">{product.desc}</p>
                  
                  <ul className="space-y-3">
                    {product.items.map((item, itemIdx) => (
                      <li key={itemIdx} className="flex items-start text-slate-300 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#2E5EAA] mt-1.5 mr-3 shrink-0" />
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
                className="inline-flex items-center px-8 py-4 border border-transparent text-[15px] font-bold rounded-lg text-[#0B1220] bg-[#E8B84B] hover:bg-[#d4a643] transition-colors uppercase tracking-wider"
              >
                Discuss a System Requirement
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
