"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const projects = [
  {
    title: "Industrial Machine Modernization",
    description: "Sanota restored and automated an ageing jar-seal cutting machine by rebuilding its mechanical and electronic systems and replacing the obsolete control system. The upgraded machine achieved a reported threefold increase in production capacity.",
    link: "#",
    linkText: "View Modernization Project",
    image: "/proj_mod_1788515440738.jpg",
  },
  {
    title: "Smart Greenhouse Monitoring & Fertigation",
    description: "An integrated agriculture system combining environmental sensors, automated irrigation and nutrient dosing with web and mobile monitoring for greater operational visibility and resource control.",
    link: "#",
    linkText: "View Smart Agriculture Project",
    image: "/proj_greenhouse_1788515466596.jpg",
  },
  {
    title: "Tea Withering Control",
    description: "An IoT-enabled monitoring and control system developed to manage temperature, humidity, airflow and louver operation during the tea-withering process.",
    link: "#",
    linkText: "View Tea Industry Project",
    image: "/proj_tea_1788515615060.jpg",
  },
  {
    title: "RFID Trolley Tracking",
    description: "A connected tracking platform developed to improve the real-time visibility, movement history and utilization of trolleys within factory and warehouse environments.",
    link: "#",
    linkText: "View Tracking Project",
    image: "/proj_rfid_1788515670964.jpg",
  },
  {
    title: "Custom Industrial Testing",
    description: "A purpose-built stopper-testing system combining mechanical design, controlled torque application, PC-based visualization and historical test-data management.",
    link: "#",
    linkText: "View Custom Engineering Project",
    image: "/proj_testing_1788515821950.jpg",
  },
];

export default function FeaturedProjects() {
  return (
    <section id="projects" className="relative py-24 bg-transparent overflow-hidden border-t border-slate-800/50">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <h2 className="text-sm font-bold text-[#E8B84B] uppercase tracking-widest mb-3">Featured Projects</h2>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight uppercase mb-6">
              Engineering <span className="text-[#2E5EAA]">in Action</span>
            </h3>
            <p className="text-lg text-slate-400">
              Our projects demonstrate how mechanical engineering, automation, electronics, IoT and software can be combined to solve real operational challenges.
            </p>
          </motion.div>
          <motion.div
             initial={{ opacity: 0, x: 20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="mt-8 md:mt-0"
          >
             <Link
               href="#"
               className="inline-flex items-center px-7 py-3 border border-slate-700 hover:border-[#E8B84B] text-[14px] font-bold rounded-full text-white bg-[#0B1220] hover:bg-[#E8B84B]/10 transition-colors uppercase tracking-wider"
             >
               Explore Our Projects
             </Link>
          </motion.div>
        </div>

        {/* Projects Horizontal Scroll on mobile, Grid on large screens */}
        <div className="flex overflow-x-auto pb-12 snap-x snap-mandatory hide-scrollbar gap-8 lg:grid lg:grid-cols-2 lg:gap-12 lg:overflow-visible">
          {projects.map((project, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`min-w-[85vw] sm:min-w-[400px] lg:min-w-0 snap-center group relative rounded-3xl overflow-hidden border border-slate-800 bg-[#0B1220] flex flex-col h-full ${idx === 4 ? 'lg:col-span-2 lg:flex-row' : ''}`}
            >
              <div className={`relative ${idx === 4 ? 'lg:w-1/2 h-64 lg:h-auto' : 'h-72'} overflow-hidden shrink-0`}>
                <Image 
                  src={project.image} 
                  alt={project.title} 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1220] via-[#0B1220]/40 to-transparent" />
              </div>
              <div className={`p-8 md:p-10 flex flex-col flex-grow relative ${idx === 4 ? 'lg:w-1/2' : ''}`}>
                <h4 className="text-2xl font-bold text-white mb-4 group-hover:text-[#E8B84B] transition-colors">{project.title}</h4>
                <p className="text-slate-400 mb-8 flex-grow leading-relaxed">
                  {project.description}
                </p>
                <Link 
                  href={project.link}
                  className="inline-flex items-center text-[#2E5EAA] font-semibold hover:text-white transition-colors"
                >
                  {project.linkText} <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
