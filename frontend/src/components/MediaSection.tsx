"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Image as ImageIcon, Video, Newspaper, Briefcase, Camera } from "lucide-react";
import { useState, useEffect } from "react";

import Image from "next/image";

const mediaCategories = [
  { 
    title: "Completed Work", 
    desc: "Explore machinery, automation systems, installations, connected platforms and custom-developed products.", 
    icon: Briefcase,
    linkText: "View Completed Work",
    linkHref: "/media",
    images: [
      "/images/capabilities/cap_delivery_1789034307231.jpg",
      "/images/capabilities/cap_automation_1789018155413.jpg",
      "/images/capabilities/cap_custom_1789034275387.jpg",
      "/images/capabilities/cap_electrical_1789017992157.jpg",
      "/images/capabilities/cap_fabrication_1789018353293.jpg",
      "/images/capabilities/cap_industry_1789034379331.jpg",
      "/images/capabilities/cap_integrated_1789034204880.jpg",
      "/images/capabilities/cap_iot_1789018334030.jpg",
      "/images/capabilities/cap_mechanical_1789017974230.jpg",
      "/images/capabilities/cap_modernization_1789034289241.jpg",
    ],
    image: "/images/capabilities/cap_delivery_1789034307231.jpg",
    colSpan: "lg:col-span-8",
    height: "h-[400px]"
  },
  { 
    title: "Project Stories", 
    desc: "Discover the challenges, engineering responses and operational outcomes behind selected projects.", 
    icon: Newspaper,
    linkText: "Read Project Stories",
    linkHref: "/media",
    image: "/images/capabilities/cap_practical_1789034261822.jpg",
    colSpan: "lg:col-span-4",
    height: "h-[400px]"
  },
  { 
    title: "Videos", 
    desc: "Watch machinery demonstrations, automation sequences, testing, installation and commissioning.", 
    icon: Video,
    linkText: "Watch Videos",
    linkHref: "/media",
    image: "/images/capabilities/cap_automation_1789018155413.jpg",
    colSpan: "lg:col-span-4",
    height: "h-[300px]"
  },
  { 
    title: "Photo Gallery", 
    desc: "Browse photographs from projects, products, engineering activities, events and partnerships.", 
    icon: Camera,
    linkText: "View Photo Gallery",
    linkHref: "/media",
    image: "/images/products/industrial_machinery.jpg",
    colSpan: "lg:col-span-4",
    height: "h-[300px]"
  },
  { 
    title: "News & Activities", 
    desc: "Follow new developments, collaborations, awards, exhibitions, training programmes and industry initiatives.", 
    icon: ImageIcon,
    linkText: "View News & Activities",
    linkHref: "/media",
    image: "/images/capabilities/cap_integrated_1789034204880.jpg",
    colSpan: "lg:col-span-4",
    height: "h-[300px]"
  },
];

function SlideshowImage({ images }: { images: string[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000); // 4 seconds per image
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="absolute inset-0 overflow-hidden transition-transform duration-[1.5s] ease-out group-hover:scale-105">
      <AnimatePresence initial={false}>
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <Image 
            src={images[currentIndex]} 
            alt={`Slideshow ${currentIndex}`}
            fill
            className="object-cover"
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default function MediaSection() {
  return (
    <section className="relative py-24 bg-[#0B1220] overflow-hidden border-t border-slate-800">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <h2 className="text-sm font-bold text-[#E8B84B] uppercase tracking-widest mb-3">Media Section</h2>
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-6">
              Inside Sanota
            </h3>
            <p className="text-[15.5px] text-slate-400 leading-relaxed">
              See the people, processes and engineering work behind Sanota’s solutions.
            </p>
          </motion.div>
          <motion.div
             initial={{ opacity: 0, x: 20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
          >
             <Link
               href="/media"
               className="inline-flex justify-center items-center px-8 py-3.5 border border-[#2E5EAA] text-[14px] font-bold rounded-lg text-white hover:bg-[#2E5EAA]/10 transition-colors group shadow-lg shadow-[#2E5EAA]/10"
             >
               Explore All Media
               <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
             </Link>
          </motion.div>
        </div>

        {/* Bento Grid Collage */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-4 lg:gap-6">
          {mediaCategories.map((cat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`group relative rounded-3xl overflow-hidden shadow-2xl border border-slate-800/60 ${cat.colSpan} ${cat.height} sm:col-span-1`}
            >
              {/* Background Image or Slideshow */}
              {cat.images ? (
                <SlideshowImage images={cat.images} />
              ) : (
                <Image 
                  src={cat.image} 
                  alt={cat.title}
                  fill
                  className="object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105"
                />
              )}
              
              {/* Gradient Overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1220] via-[#0B1220]/60 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-80" />
              <div className="absolute inset-0 bg-[#2E5EAA]/20 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Content Box */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end z-10">
                <div className="flex items-center mb-4 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="w-12 h-12 rounded-xl bg-[#E8B84B]/10 backdrop-blur-md border border-[#E8B84B]/30 flex items-center justify-center mr-4 shadow-lg shadow-[#E8B84B]/10">
                    <cat.icon className="w-6 h-6 text-[#E8B84B]" />
                  </div>
                  <h4 className="text-xl sm:text-2xl font-bold text-white group-hover:text-[#E8B84B] transition-colors drop-shadow-md">
                    {cat.title}
                  </h4>
                </div>
                
                <div className="overflow-hidden h-0 group-hover:h-auto opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out">
                  <p className="text-[14px] text-slate-300 mb-6 leading-relaxed max-w-lg drop-shadow-md">
                    {cat.desc}
                  </p>
                  <Link href={cat.linkHref} className="inline-flex items-center text-white font-bold hover:text-[#E8B84B] transition-colors text-[13px] uppercase tracking-widest bg-[#2E5EAA] hover:bg-[#1e3a8a] px-5 py-2.5 rounded-lg shadow-lg">
                    {cat.linkText} <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
