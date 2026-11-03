"use client";
import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { 
  X, 
  Camera, 
  ChevronLeft, 
  ChevronRight, 
  ZoomIn, 
  Filter, 
  Layers, 
  Cpu, 
  Coffee, 
  Sun, 
  Activity, 
  Award,
  Maximize2
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export interface GalleryPhoto {
  id: number;
  title: string;
  category: "Machinery" | "Automation & IoT" | "Food & Tea" | "Energy & Environment" | "Healthcare & Other" | "Awards & Training";
  image: string;
  description: string;
}

export const galleryPhotos: GalleryPhoto[] = [
  {
    id: 1,
    title: "Carton Box Making & Packaging Machine",
    category: "Machinery",
    image: "/real-projects/box-making-machine-1.webp",
    description: "High-speed precision carton box folding and gluing machinery with integrated PLC controls and automated sheet feeding."
  },
  {
    id: 2,
    title: "Integrated Food Processing & Conveyor Line",
    category: "Food & Tea",
    image: "/real-projects/food-processing-line.webp",
    description: "Continuous food preparation and packaging conveyor system built with food-grade stainless steel and automated washdown controls."
  },
  {
    id: 3,
    title: "Compressed Tea Coin & Tablet Press",
    category: "Food & Tea",
    image: "/real-projects/tea-coin-machine.webp",
    description: "High-pressure hydraulic compression machinery engineered for specialty tea coin production with uniform density."
  },
  {
    id: 4,
    title: "Smart Drainage IoT Flood Monitoring Sensor",
    category: "Automation & IoT",
    image: "/real-projects/drain-sensor-2.webp",
    description: "Solar-powered IoT ultrasonic drainage water level sensor network transmitting real-time flood alerts to cloud dashboard."
  },
  {
    id: 5,
    title: "Automated Guided Vehicle (AGV) & Conveyor",
    category: "Automation & IoT",
    image: "/real-projects/agv-unloading-conveyor.webp",
    description: "Autonomous guided internal transport vehicle integrated with automated unloading roller conveyor for warehouse logistics."
  },
  {
    id: 6,
    title: "Ten Tray Agricultural Dehydrator",
    category: "Food & Tea",
    image: "/real-projects/ten-tray-dryer.webp",
    description: "Controlled hot air dehydration chamber with precision digital airflow and temperature controls for agricultural produce."
  },
  {
    id: 7,
    title: "Commercial Solar Thermal Hot Water System",
    category: "Energy & Environment",
    image: "/real-projects/solar-hot-water-system.webp",
    description: "High-capacity industrial solar thermal hot water heating installation delivering clean, energy-efficient thermal utility."
  },
  {
    id: 8,
    title: "Hydraulic Scrap & Waste Baling Press",
    category: "Machinery",
    image: "/real-projects/bale-machine.webp",
    description: "Heavy-duty hydraulic compaction baling press for recycling facilities and waste volume reduction with automated cycle controls."
  },
  {
    id: 9,
    title: "Precision Stopper Torque Testing Unit",
    category: "Machinery",
    image: "/real-projects/stopper-tester.webp",
    description: "Custom laboratory testing instrument measuring container closure torque with PC curve visualization and data logging."
  },
  {
    id: 10,
    title: "Precision High-Speed Eraser Cutting Machine",
    category: "Machinery",
    image: "/real-projects/eraser-cutter.webp",
    description: "Complete mechanical overhaul and obsolete control panel modernization, tripling jar-seal cutting output with servo precision."
  },
  {
    id: 11,
    title: "IoT Smart Weighing & Inventory Station",
    category: "Automation & IoT",
    image: "/real-projects/smart-weighing.webp",
    description: "Digital scale station integrated with barcode scanner, touchscreen operator terminal, and cloud ERP inventory logging."
  },
  {
    id: 12,
    title: "Clinical Electronic Nerve Stimulator Device",
    category: "Healthcare & Other",
    image: "/real-projects/nerve-stimulator.webp",
    description: "Medical electrotherapy device developed from electronic concept through prototyping to clinical electrical safety standards."
  },
  {
    id: 13,
    title: "Industrial Steam Boiler Automation & AMC",
    category: "Energy & Environment",
    image: "/real-projects/boiler.webp",
    description: "Steam boiler electrical control panel assembly, burner calibration, and scheduled preventive maintenance and AMC."
  },
  {
    id: 14,
    title: "Custom Industrial PLC Control Panel",
    category: "Automation & IoT",
    image: "/real-projects/plc-panel.webp",
    description: "Engineered electrical switchboards, PLC racks, HMI operator screens, and servo motor drives for factory automation lines."
  },
  {
    id: 15,
    title: "Fluidized Bed Green Tea Dryer",
    category: "Food & Tea",
    image: "/real-projects/green-tea-dryer.webp",
    description: "Automated climate regulation retrofitted onto tea withering troughs with digital humidity and airflow modulation."
  },
  {
    id: 16,
    title: "River Solid Waste Containment Boom",
    category: "Energy & Environment",
    image: "/real-projects/trash-boom.webp",
    description: "Heavy-duty engineered waterway debris barrier intercepting floating plastic waste in municipal canals and waterways."
  },
  {
    id: 17,
    title: "Municipal Smart Traffic Signal Controller",
    category: "Automation & IoT",
    image: "/real-projects/traffic-light-system-kadawatha.webp",
    description: "Microcontroller traffic signal timing and sequencing hardware for high-congestion municipal road intersections in Kadawatha."
  },
  {
    id: 18,
    title: "Electronic Multi-Axis ICU Hospital Bed",
    category: "Healthcare & Other",
    image: "/real-projects/icu-bed.webp",
    description: "Motorized hospital bed actuation system with emergency CPR positioning and ergonomic patient controller."
  },
  {
    id: 19,
    title: "Automated Yogurt Incubation Chamber",
    category: "Food & Tea",
    image: "/real-projects/yogurt-incubator.webp",
    description: "Controlled temperature and fermentation chamber designed for commercial dairy culture setting and incubation."
  },
  {
    id: 20,
    title: "Vocational Mechatronics & PLC Training Station",
    category: "Awards & Training",
    image: "/real-projects/kaastu-training-unit.webp",
    description: "Educational pneumatics, sensor, and PLC workstation engineered for technical institutes and student automation practice."
  },
  {
    id: 21,
    title: "Commercial Tea Tablet Hydraulic Press",
    category: "Food & Tea",
    image: "/real-projects/tea-tablet-machine.webp",
    description: "Automated hydraulic pressing station for compacting artisan and standard tea blocks with custom mold dies."
  },
  {
    id: 22,
    title: "Industrial Dual-Door PLC Control Enclosure",
    category: "Automation & IoT",
    image: "/real-projects/plc-panel-2.webp",
    description: "Custom built IP65 automation enclosure housing power distribution, VFDs, and central PLC logic controllers."
  },
  {
    id: 23,
    title: "National Gold Award - Best Automation System 2023",
    category: "Awards & Training",
    image: "/gold award best automated 2023.webp",
    description: "Prestigious national engineering excellence award recognized for outstanding industrial automation and innovative machinery design."
  },
  {
    id: 24,
    title: "Food Processing Assembly Line",
    category: "Food & Tea",
    image: "/food-processing.webp",
    description: "Stainless steel food transport and hygienic preparation conveyor line engineered for compliance with HACCP standards."
  },
  {
    id: 25,
    title: "Miniature Educational Tea Processing Plant",
    category: "Food & Tea",
    image: "/mini tea college.webp",
    description: "Compact pilot-scale tea processing plant designed for hands-on technical training, research, and recipe development."
  },
  {
    id: 26,
    title: "Custom Educational PLC Training Panel",
    category: "Awards & Training",
    image: "/plc-2.webp",
    description: "Multi-input modular PLC training rack equipped with industrial relays, digital readouts, and simulated sensors."
  },
  {
    id: 27,
    title: "Solar Thermal Collector Assembly",
    category: "Energy & Environment",
    image: "/sola-hotwater.webp",
    description: "High-efficiency flat plate solar collector installation engineered for zero-carbon preheating of industrial boiler feed water."
  },
  {
    id: 28,
    title: "Industrial Metal Scrap Baling Machine",
    category: "Machinery",
    image: "/bale machines.webp",
    description: "High tonnage hydraulic ram baler designed to compact industrial scrap sheets and wire into high-density bales."
  },
  {
    id: 29,
    title: "Commercial Food Dehydration Chamber",
    category: "Food & Tea",
    image: "/dehydrator2.webp",
    description: "Energy-efficient industrial circulating hot air drying oven for agricultural spices, fruits, and herbal processing."
  }
];

const categoryIcons: Record<string, React.ReactNode> = {
  "All": <Layers className="w-4 h-4" />,
  "Machinery": <Filter className="w-4 h-4" />,
  "Automation & IoT": <Cpu className="w-4 h-4" />,
  "Food & Tea": <Coffee className="w-4 h-4" />,
  "Energy & Environment": <Sun className="w-4 h-4" />,
  "Healthcare & Other": <Activity className="w-4 h-4" />,
  "Awards & Training": <Award className="w-4 h-4" />,
};

interface PhotoGalleryModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialCategory?: string;
}

export default function PhotoGalleryModal({ isOpen, onClose, initialCategory = "All" }: PhotoGalleryModalProps) {
  const { language } = useLanguage();
  const isEs = language === "es";
  const isDe = language === "de";
  const isJa = language === "ja";
  const isAr = language === "ar";

  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activePhotoIndex, setActivePhotoIndex] = useState<number | null>(null);

  // Set initial category when opened
  useEffect(() => {
    if (isOpen) {
      setSelectedCategory(initialCategory || "All");
      setActivePhotoIndex(null);
    }
  }, [isOpen, initialCategory]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Filter photos
  const filteredPhotos = selectedCategory === "All"
    ? galleryPhotos
    : galleryPhotos.filter(photo => photo.category === selectedCategory);

  // Categories list with counts
  const categories: string[] = ["All", "Machinery", "Automation & IoT", "Food & Tea", "Energy & Environment", "Healthcare & Other", "Awards & Training"];

  // Navigation callbacks
  const handlePrev = useCallback(() => {
    if (activePhotoIndex === null) return;
    setActivePhotoIndex((prev) => (prev! > 0 ? prev! - 1 : filteredPhotos.length - 1));
  }, [activePhotoIndex, filteredPhotos.length]);

  const handleNext = useCallback(() => {
    if (activePhotoIndex === null) return;
    setActivePhotoIndex((prev) => (prev! < filteredPhotos.length - 1 ? prev! + 1 : 0));
  }, [activePhotoIndex, filteredPhotos.length]);

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (activePhotoIndex !== null) {
          setActivePhotoIndex(null);
        } else {
          onClose();
        }
      } else if (activePhotoIndex !== null) {
        if (e.key === "ArrowLeft") {
          handlePrev();
        } else if (e.key === "ArrowRight") {
          handleNext();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, activePhotoIndex, handlePrev, handleNext, onClose]);

  if (!isOpen) return null;

  const currentPhoto = activePhotoIndex !== null ? filteredPhotos[activePhotoIndex] : null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 lg:p-6 animate-fadeIn">
      {/* Dark backdrop */}
      <div 
        className="absolute inset-0 bg-[#050B14]/85 backdrop-blur-md transition-opacity duration-300"
        onClick={() => {
          if (activePhotoIndex !== null) {
            setActivePhotoIndex(null);
          } else {
            onClose();
          }
        }}
      />

      {/* Main Modal Card */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.96, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 15 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className="relative w-full max-w-7xl h-[92vh] max-h-[920px] bg-slate-50 dark:bg-[#070D18] border border-slate-200 dark:border-slate-800 rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden flex flex-col z-10"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Header */}
        <div className="flex items-center justify-between px-5 sm:px-8 py-4 sm:py-5 border-b border-slate-200 dark:border-slate-800/80 bg-white dark:bg-[#0B1322] shrink-0">
          <div className="flex items-center space-x-3 sm:space-x-4">
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-[#E8B84B]/15 border border-[#E8B84B]/30 flex items-center justify-center text-[#E8B84B] shadow-sm">
              <Camera className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2.5">
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white tracking-tight">
                  {isAr ? "معرض سانوتا الهندسي" : isJa ? "サノタ エンジニアリングギャラリー" : isDe ? "Sanota Ingenieurgalerie" : isEs ? "Galería de Ingeniería de Sanota" : "Sanota Engineering Gallery"}
                </h3>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-[#E8B84B]/15 text-[#D49E22] dark:text-[#F3CA65] border border-[#E8B84B]/30">
                  {filteredPhotos.length} {filteredPhotos.length === 1 ? "Photo" : "Photos"}
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 hidden sm:block mt-0.5">
                Real photographs of machinery, automation systems, IoT solutions & project installations
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <button 
              onClick={onClose}
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-slate-100 hover:bg-slate-200 dark:bg-slate-800/80 dark:hover:bg-slate-700 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-all shadow-sm"
              aria-label="Close Gallery"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Filter Category Tabs */}
        <div className="px-4 sm:px-8 py-3 bg-white/70 dark:bg-[#090F1E]/70 border-b border-slate-200 dark:border-slate-800/60 overflow-x-auto custom-scrollbar shrink-0">
          <div className="flex items-center gap-1.5 sm:gap-2 min-w-max">
            {categories.map((cat) => {
              const count = cat === "All" 
                ? galleryPhotos.length 
                : galleryPhotos.filter(p => p.category === cat).length;
              const isSelected = selectedCategory === cat;

              return (
                <button
                  key={cat}
                  onClick={() => {
                    setSelectedCategory(cat);
                    setActivePhotoIndex(null);
                  }}
                  className={`inline-flex items-center gap-1.5 px-3 sm:px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                    isSelected
                      ? "bg-[#E8B84B] text-[#0B1220] font-semibold shadow-sm shadow-[#E8B84B]/20 scale-[1.02]"
                      : "bg-slate-100 dark:bg-slate-800/70 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800 border border-slate-200/80 dark:border-slate-700/60"
                  }`}
                >
                  <span className={isSelected ? "text-[#0B1220]" : "text-[#E8B84B]"}>
                    {categoryIcons[cat]}
                  </span>
                  <span>{cat}</span>
                  <span className={`text-[11px] px-1.5 py-0.2 rounded-full font-bold ml-0.5 ${
                    isSelected 
                      ? "bg-[#0B1220]/20 text-[#0B1220]" 
                      : "bg-slate-200 dark:bg-slate-700/60 text-slate-500 dark:text-slate-400"
                  }`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Photo Grid (Scrollable Container) */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8 custom-scrollbar bg-slate-100/60 dark:bg-[#070D18]">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 sm:gap-4">
            {filteredPhotos.map((photo, index) => (
              <div
                key={photo.id}
                onClick={() => setActivePhotoIndex(index)}
                className="group relative aspect-[4/3] rounded-xl overflow-hidden bg-white dark:bg-[#0B1322] border border-slate-200 dark:border-slate-800/80 cursor-pointer shadow-sm hover:shadow-lg hover:border-[#E8B84B] dark:hover:border-[#E8B84B]/70 transition-all duration-300 hover:-translate-y-1"
              >
                {/* Image */}
                <Image
                  src={photo.image}
                  alt={photo.title}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, (max-width: 1280px) 20vw, 16vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-108"
                />

                {/* Permanent subtle gradient at bottom for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                {/* Hover Quick-Zoom Icon */}
                <div className="absolute top-2 right-2 w-7 h-7 rounded-full bg-[#0B1220]/80 border border-white/20 text-[#E8B84B] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 shadow-md">
                  <ZoomIn className="w-3.5 h-3.5" />
                </div>

                {/* Bottom title badge */}
                <div className="absolute inset-x-0 bottom-0 p-2 sm:p-2.5 flex flex-col justify-end">
                  <span className="text-[10px] text-[#E8B84B] font-semibold tracking-wider uppercase mb-0.5 opacity-90 line-clamp-1">
                    {photo.category}
                  </span>
                  <h4 
                    className="text-xs font-bold text-white line-clamp-2 leading-tight drop-shadow-sm group-hover:text-[#E8B84B] transition-colors"
                    style={{ color: '#FFFFFF' }}
                  >
                    {photo.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>

          {filteredPhotos.length === 0 && (
            <div className="h-64 flex flex-col items-center justify-center text-center">
              <Camera className="w-12 h-12 text-slate-400 mb-3" />
              <p className="text-slate-600 dark:text-slate-400 font-medium">No photos found in this category.</p>
            </div>
          )}
        </div>

        {/* Modal Footer Note */}
        <div className="px-5 sm:px-8 py-3 bg-white dark:bg-[#0B1322] border-t border-slate-200 dark:border-slate-800 text-xs text-slate-500 dark:text-slate-400 flex items-center justify-between shrink-0">
          <span>Click any photo to inspect high-resolution view</span>
          <span className="hidden sm:inline">Use ← and → keys to browse full-screen</span>
        </div>

        {/* LIGHTBOX / FULLSCREEN PREVIEW OVERLAY */}
        <AnimatePresence>
          {activePhotoIndex !== null && currentPhoto && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="absolute inset-0 z-50 bg-[#050B14]/95 backdrop-blur-lg flex flex-col"
              onClick={() => setActivePhotoIndex(null)}
            >
              {/* Lightbox Top Bar */}
              <div 
                className="flex items-center justify-between px-4 sm:px-6 py-3 border-b border-slate-800 bg-[#0B1322]/80 shrink-0"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex items-center space-x-3">
                  <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-[#E8B84B]/20 text-[#E8B84B] border border-[#E8B84B]/30">
                    {currentPhoto.category}
                  </span>
                  <span className="text-xs text-slate-400">
                    {activePhotoIndex + 1} of {filteredPhotos.length}
                  </span>
                </div>

                <h3 className="text-sm sm:text-base font-bold text-white truncate max-w-md hidden md:block">
                  {currentPhoto.title}
                </h3>

                <button 
                  onClick={() => setActivePhotoIndex(null)}
                  className="w-9 h-9 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
                  aria-label="Close photo preview"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Lightbox Main Stage */}
              <div 
                className="relative flex-1 flex items-center justify-center p-3 sm:p-6 overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Previous Button */}
                <button
                  onClick={handlePrev}
                  className="absolute left-3 sm:left-6 z-20 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-black/60 hover:bg-[#E8B84B] text-white hover:text-[#0B1220] border border-white/20 hover:border-transparent flex items-center justify-center transition-all duration-200 shadow-xl"
                  aria-label="Previous Photo"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>

                {/* Active Image */}
                <div className="relative max-w-4xl max-h-[64vh] sm:max-h-[68vh] w-full h-full flex items-center justify-center">
                  <Image
                    src={currentPhoto.image}
                    alt={currentPhoto.title}
                    fill
                    sizes="(max-width: 1200px) 100vw, 1200px"
                    className="object-contain rounded-xl drop-shadow-2xl"
                    priority
                  />
                </div>

                {/* Next Button */}
                <button
                  onClick={handleNext}
                  className="absolute right-3 sm:right-6 z-20 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-black/60 hover:bg-[#E8B84B] text-white hover:text-[#0B1220] border border-white/20 hover:border-transparent flex items-center justify-center transition-all duration-200 shadow-xl"
                  aria-label="Next Photo"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>

              {/* Lightbox Caption & Details */}
              <div 
                className="p-4 sm:p-5 bg-[#0B1322] border-t border-slate-800 shrink-0 text-center max-w-3xl mx-auto w-full"
                onClick={(e) => e.stopPropagation()}
              >
                <h4 className="text-base sm:text-lg font-bold text-white mb-1">
                  {currentPhoto.title}
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto leading-relaxed">
                  {currentPhoto.description}
                </p>
              </div>

              {/* Bottom Thumbnail Strip */}
              <div 
                className="px-4 py-2 bg-[#070D18] border-t border-slate-800/80 overflow-x-auto custom-scrollbar shrink-0"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex items-center justify-center gap-2 min-w-max mx-auto py-1">
                  {filteredPhotos.map((thumb, idx) => (
                    <button
                      key={thumb.id}
                      onClick={() => setActivePhotoIndex(idx)}
                      className={`relative w-14 h-10 sm:w-16 sm:h-11 rounded-lg overflow-hidden border-2 transition-all cursor-pointer ${
                        idx === activePhotoIndex
                          ? "border-[#E8B84B] scale-105 shadow-md shadow-[#E8B84B]/30"
                          : "border-slate-700/60 opacity-50 hover:opacity-100 hover:border-slate-500"
                      }`}
                    >
                      <Image
                        src={thumb.image}
                        alt={thumb.title}
                        fill
                        sizes="64px"
                        className="object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

