"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

interface AnimatedListProps {
  items: string[];
  onItemSelect?: (item: string, index: number) => void;
  showGradients?: boolean;
  enableArrowNavigation?: boolean;
  displayScrollbar?: boolean;
}

export default function AnimatedList({
  items = [],
  onItemSelect,
  showGradients = true,
  enableArrowNavigation = true,
  displayScrollbar = true,
}: AnimatedListProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const listRef = useRef<HTMLDivElement>(null);

  const handleSelect = (item: string, index: number) => {
    setSelectedIndex(index);
    if (onItemSelect) {
      onItemSelect(item, index);
    }
  };

  useEffect(() => {
    if (!enableArrowNavigation) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelectedIndex((prev) => (prev !== null && prev < items.length - 1 ? prev + 1 : prev));
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelectedIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : prev));
      } else if (e.key === "Enter") {
        e.preventDefault();
        handleSelect(items[selectedIndex], selectedIndex);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex, enableArrowNavigation, items]);

  return (
    <div className="relative w-full h-[280px] bg-[#0A101D]/60 backdrop-blur-md rounded-2xl border border-slate-800/80 overflow-hidden flex flex-col group shadow-lg">
      
      {/* Top Gradient Mask */}
      {showGradients && (
        <div className="absolute top-0 left-0 right-0 h-12 bg-gradient-to-b from-[#0A101D] to-transparent z-10 pointer-events-none rounded-t-2xl" />
      )}
      
      <div 
        ref={listRef}
        className={`flex-grow overflow-y-auto z-0 py-6 px-4 space-y-2 ${displayScrollbar ? 'custom-scrollbar' : 'scrollbar-none'}`}
        style={{
          scrollbarWidth: displayScrollbar ? 'thin' : 'none',
          msOverflowStyle: displayScrollbar ? 'auto' : 'none',
        }}
      >
        <style dangerouslySetInnerHTML={{__html: `
          .custom-scrollbar::-webkit-scrollbar { width: 4px; }
          .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
          .custom-scrollbar::-webkit-scrollbar-thumb { background: #1e293b; border-radius: 4px; }
          .scrollbar-none::-webkit-scrollbar { display: none; }
        `}} />

        {items.map((item, index) => {
          const isSelected = selectedIndex === index;
          
          return (
            <motion.button
              key={index}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.05, duration: 0.4, ease: "easeOut" }}
              onClick={() => handleSelect(item, index)}
              onMouseEnter={() => setSelectedIndex(index)}
              className={`w-full text-left flex items-center justify-between px-4 py-3 rounded-xl transition-all duration-300 relative overflow-hidden
                ${isSelected ? 'bg-[#131C2E] border-slate-700 shadow-md' : 'bg-transparent border-transparent hover:bg-[#131C2E]/50'}
                border
              `}
            >
              {/* Animated highlight bar on the left */}
              <div 
                className={`absolute left-0 top-0 bottom-0 w-1 bg-[#E8B84B] transition-all duration-300 ease-out rounded-l-xl
                  ${isSelected ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0'}
                `}
              />
              
              <div className="flex items-center pl-2 relative z-10">
                <div className={`w-1.5 h-1.5 rounded-full mr-4 transition-colors duration-300 ${isSelected ? 'bg-[#E8B84B]' : 'bg-slate-600'}`} />
                <span className={`text-sm font-medium transition-colors duration-300 ${isSelected ? 'text-white' : 'text-slate-400'}`}>
                  {item}
                </span>
              </div>
              
              <ChevronRight 
                className={`w-4 h-4 transition-all duration-300 relative z-10
                  ${isSelected ? 'text-[#E8B84B] opacity-100 translate-x-0' : 'text-slate-600 opacity-0 -translate-x-2'}
                `}
              />
            </motion.button>
          );
        })}
      </div>
      
      {/* Bottom Gradient Mask */}
      {showGradients && (
        <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-[#0A101D] to-transparent z-10 pointer-events-none rounded-b-2xl" />
      )}
    </div>
  );
}
