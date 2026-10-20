"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, PlayCircle } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { homeES } from "@/locales/es/home";
import { homeDE } from "@/locales/de/home";
import { homeJA } from "@/locales/ja/home";
import { homeAR } from "@/locales/ar/home";

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
    image: "/proj_greenhouse_1788515615060.jpg",
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
  const { language } = useLanguage();
  const isEs = language === "es";
  const isDe = language === "de";
  const isJa = language === "ja";
  const isAr = language === "ar";
  const cw = isAr ? homeAR.completedWork : isJa ? homeJA.completedWork : isDe ? homeDE.completedWork : isEs ? homeES.completedWork : null;

  const displayProjects = projects.map((p, idx) => {
    if (cw && cw.categories[idx]) {
      return {
        ...p,
        title: cw.categories[idx].title,
        description: cw.categories[idx].description,
        linkText: cw.categories[idx].linkText,
      };
    }
    return p;
  });

  return (
    <section className="relative py-12 lg:py-16 bg-transparent overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-4">
              {cw ? cw.heading : "See Sanota in Action"}
            </h2>
            <p className="text-[15.5px] text-slate-400 leading-relaxed">
              {cw ? cw.subheading : "Explore how Sanota combines engineering and technology to solve real operational requirements across industries."}
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
              className="inline-flex justify-center items-center px-7 py-3 border border-transparent hover:border-[#C59B27]/50 text-[14px] font-bold rounded-lg text-[#111424] bg-[#E5A93C] hover:bg-[#F0B74C] transition-all shadow-md group"
            >
              {cw ? cw.primaryButton : "Explore Completed Work"}
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/media"
              className="inline-flex justify-center items-center px-7 py-3 border border-slate-300 dark:border-slate-700 hover:border-slate-400 dark:hover:border-slate-500 text-[14px] font-bold rounded-lg text-[#17135B] dark:text-white bg-white dark:bg-transparent transition-colors group shadow-sm dark:shadow-none"
            >
              <PlayCircle className="mr-2 w-5 h-5 text-[#C59B27] dark:text-slate-400 group-hover:text-[#17135B] dark:group-hover:text-white transition-colors" />
              {cw ? cw.secondaryButton : "Watch Project Videos"}
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
            {[...displayProjects, ...displayProjects].map((project, idx) => (
              <div
                key={idx}
                className="w-[300px] sm:w-[350px] lg:w-[400px] shrink-0 group flex flex-col rounded-3xl overflow-hidden border border-[#ECE7DD] dark:border-slate-700/50 bg-white dark:bg-[#131C2E]/40 backdrop-blur-md transition-all hover:border-[#D4AF37] dark:hover:border-[#E8B84B]/50 shadow-[0_4px_16px_rgba(0,0,0,0.03)] dark:shadow-none hover:shadow-[0_14px_30px_rgba(23,19,91,0.08)] dark:hover:shadow-[0_0_30px_rgba(232,184,75,0.15)] min-h-[420px]"
              >
                <div className="relative h-56 w-full overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-85 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-[#0B1220] to-transparent" />
                </div>

                <div className="flex flex-col flex-grow p-8 relative z-10 -mt-10">
                  <h4 className="text-[20px] font-bold text-[#17135B] dark:text-white leading-tight mb-3 group-hover:text-[#C59B27] dark:group-hover:text-[#E8B84B] transition-colors">{project.title}</h4>
                  <p className="text-[#555E75] dark:text-slate-400 text-[13.5px] leading-relaxed mb-6 flex-grow">
                    {project.description}
                  </p>
                  <Link
                    href="/media"
                    className="text-[#C59B27] dark:text-[#E8B84B] hover:text-[#17135B] dark:hover:text-white text-[13px] font-bold flex items-center transition-colors group-hover:translate-x-1 duration-300 w-fit mt-auto"
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
