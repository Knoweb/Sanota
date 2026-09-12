"use client";

import React from "react";
import { motion } from "framer-motion";
import { Radio, Newspaper, Zap, CheckCircle2, Milestone, Megaphone, Users, Award, Hammer, Wrench } from "lucide-react";

interface NewsTagCloudProps {
  items: string[];
}

// Map some keywords to icons for a richer look
const getIcon = (title: string) => {
  const t = title.toLowerCase();
  if (t.includes("project")) return <CheckCircle2 className="w-4 h-4 text-[#E8B84B] mr-2 shrink-0" />;
  if (t.includes("product") || t.includes("system")) return <Zap className="w-4 h-4 text-[#E8B84B] mr-2 shrink-0" />;
  if (t.includes("exhibition")) return <Megaphone className="w-4 h-4 text-[#E8B84B] mr-2 shrink-0" />;
  if (t.includes("partner")) return <Users className="w-4 h-4 text-[#E8B84B] mr-2 shrink-0" />;
  if (t.includes("research") || t.includes("innovation")) return <Milestone className="w-4 h-4 text-[#E8B84B] mr-2 shrink-0" />;
  if (t.includes("training")) return <Award className="w-4 h-4 text-[#E8B84B] mr-2 shrink-0" />;
  if (t.includes("workshop")) return <Hammer className="w-4 h-4 text-[#E8B84B] mr-2 shrink-0" />;
  if (t.includes("service")) return <Wrench className="w-4 h-4 text-[#E8B84B] mr-2 shrink-0" />;
  if (t.includes("announcement")) return <Radio className="w-4 h-4 text-[#E8B84B] mr-2 shrink-0" />;
  return <Newspaper className="w-4 h-4 text-[#E8B84B] mr-2 shrink-0" />;
};

export default function NewsTagCloud({ items }: NewsTagCloudProps) {
  return (
    <div className="flex flex-wrap gap-3 mt-6">
      {items.map((item, idx) => {
        // Generate a random, slow floating animation for each pill
        const randomY = Math.random() * 4 + 2;
        const randomDuration = Math.random() * 2 + 3;

        return (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.9, y: 10 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.05, duration: 0.4 }}
            className="relative group"
          >
            <motion.div
              animate={{ y: [0, -randomY, 0] }}
              transition={{
                duration: randomDuration,
                repeat: Infinity,
                ease: "easeInOut",
                delay: Math.random() * 2, // stagger the floating
              }}
              className="flex items-center px-4 py-3 bg-[#0B1220] border border-slate-700 hover:border-[#E8B84B]/50 rounded-xl cursor-default transition-colors shadow-lg hover:shadow-[#E8B84B]/10 hover:bg-[#131C2E]"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#E8B84B]/0 via-[#E8B84B]/5 to-[#E8B84B]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl pointer-events-none" />
              {getIcon(item)}
              <span className="text-slate-300 text-sm font-medium group-hover:text-white transition-colors relative z-10">
                {item}
              </span>
            </motion.div>
          </motion.div>
        );
      })}
    </div>
  );
}
