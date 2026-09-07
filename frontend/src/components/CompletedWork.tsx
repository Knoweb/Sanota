"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const projects = [
  {
    title: "Industrial Machinery Modernization",
    image: "/proj_mod_1788515440738.jpg",
  },
  {
    title: "Smart Agriculture Systems",
    image: "/proj_greenhouse_1788515466596.jpg",
  },
  {
    title: "Food Processing Automation",
    image: "/hero_food.jpg",
  },
  {
    title: "Factory Automation & Production Lines",
    image: "/proj_rfid_1788515670964.jpg",
  },
];

export default function CompletedWork() {
  return (
    <section className="relative py-24 bg-[#131C2E] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <h2 className="text-sm font-bold text-[#E8B84B] uppercase tracking-widest mb-3">Completed Work</h2>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-6">
              Engineering theory means nothing without <span className="text-[#2E5EAA]">practical application.</span>
            </h3>
            <p className="text-lg text-slate-400">
              See how we solve real industrial challenges.
            </p>
          </motion.div>
          <motion.div
             initial={{ opacity: 0, x: 20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="mt-8 md:mt-0"
          >
             <Link
               href="/media"
               className="inline-flex items-center px-7 py-3 border border-transparent hover:border-[#E8B84B]/50 text-[14px] font-bold rounded-lg text-[#0B1220] bg-[#E8B84B] hover:bg-[#d4a643] transition-colors shadow-lg"
             >
               View All Projects
             </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative rounded-2xl overflow-hidden border border-slate-800 bg-[#0B1220] aspect-[4/5]"
            >
              <Image 
                src={project.image} 
                alt={project.title} 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1220] via-[#0B1220]/50 to-transparent" />
              
              <div className="absolute inset-x-0 bottom-0 p-6">
                <h4 className="text-xl font-bold text-white leading-tight">{project.title}</h4>
                <div className="mt-4 flex items-center text-[#E8B84B] font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0">
                  Explore Category <ArrowRight className="ml-2 w-4 h-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
