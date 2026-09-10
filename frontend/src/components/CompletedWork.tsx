"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, PlayCircle } from "lucide-react";

const projects = [
  {
    title: "Industrial Machinery Modernization",
    description: "Restoring ageing or non-operational machinery through mechanical improvements, electrical upgrades and modern control systems.",
    linkText: "View Modernization Projects",
    image: "/proj_mod_1788515440738.jpg",
  },
  {
    title: "Smart Agriculture",
    description: "Combining environmental monitoring, irrigation, fertigation and digital control to support more efficient cultivation.",
    linkText: "View Agriculture Projects",
    image: "/proj_greenhouse_1788515466596.jpg",
  },
  {
    title: "Tea Process Automation",
    description: "Improving tea-processing operations through machinery, environmental monitoring, airflow management and automation.",
    linkText: "View Tea Industry Projects",
    image: "/proj_tea_1788515615060.jpg",
  },
  {
    title: "Food-Processing Systems",
    description: "Developing machinery and integrated processing systems for preparation, preservation, handling and value addition.",
    linkText: "View Food-Processing Projects",
    image: "/hero_food.jpg",
  },
  {
    title: "IoT & Operational Visibility",
    description: "Connecting machines, assets and processes with tracking, dashboards, alerts and digital reporting.",
    linkText: "View IoT Projects",
    image: "/proj_rfid_1788515670964.jpg",
  },
  {
    title: "Custom Engineering",
    description: "Developing specialized machinery, testing equipment, prototypes and products where standard solutions are unsuitable.",
    linkText: "View Custom Engineering Projects",
    image: "/proj_testing_1788515821950.jpg",
  },
];

export default function CompletedWork() {
  return (
    <section className="relative py-12 lg:py-16 bg-[#131C2E] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-4">
              See Sanota in Action
            </h2>
            <p className="text-[15.5px] text-slate-400 leading-relaxed">
              Explore how Sanota combines engineering and technology to solve real operational requirements across industries.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link
              href="/media"
              className="inline-flex justify-center items-center px-7 py-3 border border-transparent hover:border-[#E8B84B]/50 text-[14px] font-bold rounded-lg text-[#0B1220] bg-[#E8B84B] hover:bg-[#d4a643] transition-colors shadow-lg group"
            >
              Explore Completed Work
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/media"
              className="inline-flex justify-center items-center px-7 py-3 border border-slate-700 hover:border-slate-500 text-[14px] font-bold rounded-lg text-white bg-transparent transition-colors group"
            >
              <PlayCircle className="mr-2 w-5 h-5 text-slate-400 group-hover:text-white transition-colors" />
              Watch Project Videos
            </Link>
          </motion.div>
        </div>

        {/* Infinite Slider */}
        <div className="overflow-hidden w-full relative py-4">
          <motion.div
            className="flex gap-6 lg:gap-8 w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
          >
            {[...projects, ...projects].map((project, idx) => (
              <div
                key={idx}
                className="w-[300px] sm:w-[350px] lg:w-[400px] shrink-0 group flex flex-col rounded-2xl overflow-hidden border border-slate-800 bg-[#0B1220] transition-all hover:border-[#E8B84B]/50 hover:shadow-xl hover:shadow-[#050B14] min-h-[420px]"
              >
                <div className="relative h-56 w-full overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1220] to-transparent" />
                </div>

                <div className="flex flex-col flex-grow p-8 relative z-10 -mt-10">
                  <h4 className="text-[20px] font-bold text-white leading-tight mb-3">{project.title}</h4>
                  <p className="text-slate-400 text-[13.5px] leading-relaxed mb-6 flex-grow">
                    {project.description}
                  </p>
                  <Link
                    href="/media"
                    className="text-[#E8B84B] hover:text-white text-[13px] font-bold flex items-center transition-colors group-hover:translate-x-1 duration-300 w-fit mt-auto"
                  >
                    {project.linkText}
                    <ArrowRight className="ml-1.5 w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}
