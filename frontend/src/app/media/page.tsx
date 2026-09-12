"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import MediaNavigationCarousel from "@/components/MediaNavigationCarousel";
import CompletedWorkSection from "@/components/CompletedWorkSection";
import DriftWall from "@/components/DriftWall";
import NewsTagCloud from "@/components/NewsTagCloud";
import { ArrowRight, Play, Briefcase, Newspaper, Video, Camera, Radio, CheckCircle2, ChevronRight, MessageSquare, Image as ImageIcon, MapPin, Zap, Monitor, Truck, Coffee, Sprout, Settings, AlertCircle, Search, Cpu, Wrench, TrendingUp, Shield } from "lucide-react";
import dynamic from "next/dynamic";

const AeroShards = dynamic(() => import("@/components/AeroShards"), { ssr: false });

const mediaNavigation = [
  { title: "Completed Work", desc: "View selected machinery, automation, IoT, modernization and integrated engineering projects delivered by Sanota.", button: "View Completed Work", icon: Briefcase },
  { title: "Project Stories", desc: "Understand the challenges clients faced, the capabilities Sanota brought together and how each solution was developed.", button: "Read Project Stories", icon: Newspaper },
  { title: "Videos & Demonstrations", desc: "Watch machinery, automation, connected systems and engineering solutions in operation.", button: "Watch Videos", icon: Video },
  { title: "Photo Gallery", desc: "Browse photographs of projects, products, installations, commissioning activities, technical teams and industry events.", button: "View Photo Gallery", icon: Camera },
  { title: "News & Activities", desc: "Follow Sanota’s recent projects, exhibitions, partnerships, training programmes, innovations and company developments.", button: "View News & Activities", icon: Radio }
];

const featuredWork = [
  { title: "Industrial Machinery & Modernization", desc: "Custom machinery, control-system upgrades, automation retrofits and improvements to existing industrial equipment.", link: "Explore Industrial Projects", icon: Settings, image: "/featured_industrial_1789116846117.jpg" },
  { title: "Smart Agriculture", desc: "Greenhouse, irrigation, fertigation, environmental monitoring and connected agricultural systems.", link: "Explore Smart Agriculture Projects", icon: Sprout, image: "/featured_agriculture_1789116860132.jpg" },
  { title: "Food, Beverage & Tea", desc: "Processing equipment, production systems, environmental controls and industry-specific automation.", link: "Explore Processing Projects", icon: Coffee, image: "/featured_food_1789116878789.jpg" },
  { title: "IoT & Digital Integration", desc: "Connected machinery, sensors, dashboards, alerts, tracking systems and operational software.", link: "Explore IoT & Digital Projects", icon: Monitor, image: "/featured_iot_1789116892994.jpg" },
  { title: "Material Handling & Logistics", desc: "Conveyors, movement systems, automated guided solutions, tracking and customized handling equipment.", link: "Explore Logistics Projects", icon: Truck, image: "/featured_logistics_1789116908842.jpg" },
  { title: "Energy, Environment & Facilities", desc: "Resource monitoring, environmental systems, waste-related solutions and connected facility technologies.", link: "Explore Energy & Environmental Projects", icon: Zap, image: "/featured_energy_1789116922913.jpg" }
];


const projectStoryStructure = [
  { title: "The Challenge", desc: "What was not working, what needed improvement or what the client wanted to develop." },
  { title: "The Assessment", desc: "How Sanota studied the operation, equipment, constraints and expected outcome." },
  { title: "The Integrated Solution", desc: "The combination of engineering, automation, IoT, software, fabrication and implementation capabilities applied to the requirement." },
  { title: "The Implementation", desc: "How the solution was developed, installed, integrated, tested and commissioned." },
  { title: "The Outcome", desc: "The practical operational improvement, completed system or new capability created through the project." },
  { title: "Continued Support", desc: "Maintenance, AMC, training, modernization or technical assistance provided after implementation." }
];

const galleryCollections = [
  { title: "Completed Projects", desc: "Machinery, systems and solutions operating in client environments.", image: "/gallery/completed.jpg" },
  { title: "Products & Equipment", desc: "Custom-developed equipment, product details and system components.", image: "/gallery/equipment.jpg" },
  { title: "Workshop & Development", desc: "Design, fabrication, assembly, integration and testing activities.", image: "/gallery/workshop.jpg" },
  { title: "Installation & Commissioning", desc: "On-site implementation, testing and operational handover.", image: "/gallery/installation.jpg" },
  { title: "Automation & Digital Technology", desc: "Control systems, sensors, dashboards, connected equipment and software interfaces.", image: "/gallery/automation.jpg" },
  { title: "AMC & Technical Support", desc: "Inspection, maintenance, servicing and lifecycle-support activities.", image: "/gallery/amc.jpg" },
  { title: "Events & Exhibitions", desc: "Industry exhibitions, demonstrations, partnerships and company participation.", image: "/gallery/events.jpg" },
  { title: "Team & Training", desc: "Technical teams, client training, capability development and internal activities.", image: "/gallery/team.jpg" }
];

const newsUpdates = [
  "New project completions",
  "Product and system developments",
  "Exhibitions and demonstrations",
  "Industry partnerships",
  "Research and innovation activities",
  "Training programmes",
  "Technical workshops",
  "New service capabilities",
  "Company announcements",
  "Community and industry participation"
];

const browseIndustries = [
  "Manufacturing & Industrial Automation",
  "Smart Agriculture & Agri-Technology",
  "Food & Beverage Processing",
  "Tea Industry Solutions",
  "Logistics, Warehousing & Material Handling",
  "Energy & Resource Efficiency",
  "Environmental & Waste Solutions",
  "Infrastructure & Smart Facilities",
  "Healthcare & Biomedical Engineering",
  "Research, Innovation & Product Development"
];

const browseCapabilities = [
  "Engineering Consultation & Problem Analysis",
  "System & Product Design",
  "Custom Machinery & Product Development",
  "Automation, IoT & Digital Integration",
  "Retrofit, Refurbishment & Modernization",
  "Project Execution, Installation & Commissioning",
  "AMC, Maintenance & Lifecycle Support",
  "Training & Technical Capability Development"
];

const knowebStories = [
  "Connected machinery",
  "Industrial IoT systems",
  "Remote monitoring",
  "Operational dashboards",
  "Mobile and web applications",
  "Alert and reporting systems",
  "Tracking technologies",
  "Cloud-connected engineering solutions"
];

const publicationPrinciples = [
  "Authentic project and product imagery",
  "Real engineering and implementation activities",
  "Clear explanations of the client requirement and Sanota’s role",
  "Accurate technical descriptions",
  "Observable outcomes",
  "Appropriate client and partner approvals",
  "Protection of confidential information",
  "Safe and professional working practices"
];

export default function MediaPage() {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-transparent">
      <Header />
      <main className="flex-grow">
        
        {/* Hero Section */}
        <section className="relative pt-32 lg:pt-48 pb-20 lg:pb-32 overflow-hidden border-b border-slate-800 bg-transparent min-h-[60vh] lg:min-h-[70vh] flex flex-col justify-center">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
            style={{ backgroundImage: "url('/media_hero_bg.jpg')" }}
          />
          <div className="absolute inset-0 bg-[#050B14]/60 z-0" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050B14]/20 to-[#050B14]/90 z-0" />
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-[#E8B84B] font-bold tracking-widest uppercase text-sm mb-5"
            >
              Media, Projects & Engineering Stories
            </motion.p>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 }}
              className="text-4xl sm:text-6xl font-black text-white tracking-tight mb-6 leading-tight max-w-5xl mx-auto"
            >
              Engineering in <span className="text-[#2E5EAA]">Action</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-slate-300 max-w-3xl mx-auto mb-4 font-medium leading-relaxed"
            >
              Explore the projects, products, people and technologies behind Sanota’s integrated engineering solutions.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="text-lg text-slate-400 max-w-3xl mx-auto mb-10 leading-relaxed"
            >
              See how Sanota applies engineering, automation, IoT, software and technical expertise to real operational requirements across industries.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-col sm:flex-row justify-center gap-4 mb-12"
            >
              <a
                href="#completed-work"
                className="px-8 py-4 bg-[#E8B84B] hover:bg-[#d4a643] text-[#0B1220] font-bold rounded-lg transition-colors flex items-center justify-center"
              >
                Explore Completed Work <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <Link
                href="#videos"
                className="px-8 py-4 bg-[#131C2E]/80 hover:bg-slate-800 text-white font-bold rounded-lg border border-slate-700 transition-colors flex items-center justify-center"
              >
                Watch Our Videos <Play className="ml-2 w-5 h-5" />
              </Link>
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-[#E8B84B] font-bold text-xs tracking-widest uppercase"
            >
              Completed Work <span className="mx-2 text-slate-600">•</span> Project Stories <span className="mx-2 text-slate-600">•</span> Videos <span className="mx-2 text-slate-600">•</span> Photo Gallery <span className="mx-2 text-slate-600">•</span> News & Activities
            </motion.p>
          </div>
        </section>

        {/* Media Introduction */}
        <section className="py-16 relative overflow-hidden bg-[#050B14]">
          {/* AeroShards Background and Animated Middle Shade */}
          <div className="absolute inset-0 overflow-hidden z-0">
            <AeroShards
              backgroundColor="#050B14"
              shardColor="#1A1813"
              accentColor="#E8B84B"
              placement="full"
              flow="stream"
              material="pearl"
              detail="balanced"
              effect="none"
              scale={1.2}
              spread={1}
              depth={1}
              speed={1}
              spin={1}
              interaction="repel"
              density={1.5}
              shardSize={1.1}
              stretch={1}
              turbulence={1}
              glow={0.6}
              edgeSoftness={2}
              bloom={0.4}
              grain={0.05}
              chromaticAberration={0.0075}
              transitionDuration={1}
              interactionRadius={1.5}
              interactionStrength={0.5}
              rippleIntensity={1}
              holdToGather
              paused={false}
            />
            <motion.div 
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] rounded-full blur-[80px] pointer-events-none"
              style={{
                background: 'linear-gradient(90deg, transparent 0%, rgba(232,184,75,0.4) 50%, transparent 100%)'
              }}
              animate={{ x: ['-100vw', '100vw'] }}
              transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
            />
          </div>
          
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                See What Sanota <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E8B84B] to-[#F1D08A]">Does</span>
              </h2>
              
              {/* Animated Divider */}
              <motion.div 
                className="h-[2px] bg-gradient-to-r from-transparent via-[#E8B84B] to-transparent w-48 mx-auto mb-8"
                initial={{ scaleX: 0, opacity: 0 }}
                whileInView={{ scaleX: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              />

              <p className="text-slate-300 text-lg md:text-xl font-medium leading-relaxed mb-6">
                Engineering capabilities are best understood through practical application.
              </p>
              <p className="text-slate-400 text-base md:text-lg leading-relaxed mb-8 max-w-3xl mx-auto">
                The Sanota Media Centre brings together completed work, project stories, videos, photographs and company activities to show how challenges are assessed, solutions are developed and systems are implemented.
              </p>
              
              <div className="inline-block px-6 py-2 rounded-full border border-slate-800 bg-[#0B1220] shadow-lg">
                <p className="text-white font-bold text-sm tracking-wide">
                  Explore Sanota’s work by industry, solution or media type.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Media Navigation Carousel */}
        <MediaNavigationCarousel />

        {/* Featured Work */}
        <section className="py-16 bg-[#0B1220] border-t border-slate-800/50 bg-transparent">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-[#E8B84B] font-bold tracking-widest uppercase text-sm mb-4">Featured Work</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">See Sanota in Action</h3>
              <p className="text-slate-400 text-lg max-w-3xl mx-auto">Explore selected examples of how Sanota combines different engineering and technology capabilities around real operational needs.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {featuredWork.map((work, idx) => (
                <Link key={idx} href="#" className="group relative h-[320px] rounded-[2rem] overflow-hidden block">
                  {/* Background Image */}
                  <Image 
                    src={work.image} 
                    alt={work.title} 
                    fill 
                    className="object-cover transition-transform duration-700 group-hover:scale-110" 
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050B14] via-[#0B1220]/80 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Content */}
                  <div className="absolute inset-0 p-8 flex flex-col justify-end z-10">
                    <div className="w-12 h-12 rounded-xl bg-[#131C2E]/80 backdrop-blur-md border border-slate-700 flex items-center justify-center mb-4 group-hover:border-[#E8B84B] transition-colors duration-500">
                      <work.icon className="w-6 h-6 text-[#E8B84B] group-hover:drop-shadow-[0_0_8px_rgba(232,184,75,0.8)] transition-all duration-500" />
                    </div>
                    <h4 className="text-xl font-bold text-white mb-2 group-hover:text-[#E8B84B] transition-colors duration-500">{work.title}</h4>
                    <p className="text-slate-300 text-sm leading-relaxed mb-4 line-clamp-2 group-hover:text-slate-200 transition-colors duration-500">{work.desc}</p>
                    
                    {/* Animated Link */}
                    <div className="inline-flex items-center text-xs font-bold text-[#E8B84B] uppercase tracking-wider opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                      {work.link} <ArrowRight className="ml-2 w-4 h-4" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            <div className="text-center">
              <Link href="#completed-work" className="inline-flex items-center px-8 py-4 bg-[#E8B84B] hover:bg-[#d4a643] text-[#0B1220] font-bold rounded-lg transition-colors">
                View All Completed Work <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* Completed Work */}
        <CompletedWorkSection />

        {/* Project Stories */}
        <section className="py-12 md:py-16 bg-[#0B1220] border-t border-slate-800/50 bg-transparent">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-[#E8B84B] font-bold tracking-widest uppercase text-xs mb-3">Project Stories</h2>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">From Challenge to Working Solution</h3>
              <p className="text-slate-400 text-base max-w-3xl mx-auto">Project Stories provide a closer look at how Sanota approaches complex operational requirements.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
              {projectStoryStructure.map((story, idx) => {
                const iconsList = [AlertCircle, Search, Cpu, Wrench, TrendingUp, Shield];
                const Icon = iconsList[idx];
                
                return (
                  <div key={idx} className="group relative bg-[#131C2E]/40 border border-slate-800 rounded-[32px] rounded-tr-xl rounded-bl-xl overflow-hidden min-h-[220px] flex flex-col items-center justify-center text-center cursor-default shadow-lg">
                    
                    {/* The sliding background fill */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#FFF59D] to-[#FFD54F] translate-y-[101%] group-hover:translate-y-0 transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]" />

                    {/* Content Wrapper */}
                    <div className="relative z-10 p-6 flex flex-col items-center transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:-translate-y-1">
                      
                      {/* Icon container */}
                      <div className="w-14 h-14 rounded-2xl bg-[#050B14] border border-[#E8B84B]/20 group-hover:border-transparent group-hover:bg-white/20 group-hover:backdrop-blur-md flex items-center justify-center mb-4 transition-all duration-700 rotate-3 group-hover:-rotate-6 group-hover:scale-110 shadow-[0_0_15px_rgba(232,184,75,0.1)] group-hover:shadow-[0_10px_20px_rgba(0,0,0,0.2)]">
                        <Icon className="w-6 h-6 text-[#E8B84B] group-hover:text-[#0B1220] transition-colors duration-700" />
                      </div>
                      
                      {/* Title */}
                      <h4 className="text-lg font-bold text-white group-hover:text-[#0B1220] transition-colors duration-700 mb-1">{story.title}</h4>
                      
                      {/* Animating description */}
                      <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] w-full">
                        <div className="overflow-hidden">
                          <p className="text-slate-400 group-hover:text-[#0B1220]/80 transition-colors duration-700 pt-2 leading-relaxed text-xs opacity-0 group-hover:opacity-100 transform translate-y-3 group-hover:translate-y-0">
                            {story.desc}
                          </p>
                        </div>
                      </div>

                    </div>
                  </div>
                );
              })}
            </div>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="#" className="px-6 py-3 bg-[#E8B84B] hover:bg-[#d4a643] text-[#0B1220] font-bold rounded-lg transition-colors flex items-center justify-center text-sm">
                Read Project Stories <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
              <Link href="/tell-us-your-challenge" className="px-6 py-3 bg-[#131C2E] hover:bg-slate-800 text-white font-bold rounded-lg border border-slate-700 transition-colors flex items-center justify-center text-sm">
                Discuss a Similar Requirement
              </Link>
            </div>
          </div>
        </section>

        {/* HIDDEN: Featured Project Card Copy */}
        <div className="hidden">
          {/* 
            Project Title
            Industry/Sector:
            Location:
            Solution:
            The Requirement
            Sanota’s Response
            The Outcome
            Links: View Project Story | View Related Services | Discuss a Similar Requirement
          */}
        </div>

        {/* HIDDEN: Videos & Demonstrations */}
        <div className="hidden">
          {/*
            Watch Sanota Solutions in Operation
            Explore videos of machinery, automation, IoT systems, installations, commissioning activities and completed engineering solutions.
            Video filters: All Videos | Machinery | Automation | IoT & Software | Agriculture | Processing | Modernization | Projects | Company Activities
            Button: View All Videos
            
            VIDEO CARD COPY
            Video Title
            [One-sentence description]
            Industry:
            Solution:
            Duration:
            Links: Watch Video | Explore Related Solution | Tell Us Your Challenge
          */}
        </div>

        {/* Photo Gallery */}
        <section className="py-16 bg-[#050B14] border-t border-slate-800/50 bg-transparent">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-[#E8B84B] font-bold tracking-widest uppercase text-sm mb-4">Photo Gallery</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">Projects, Products and People</h3>
              <p className="text-slate-400 text-lg max-w-3xl mx-auto mb-10">The Sanota Photo Gallery provides a visual record of engineering work across project and company environments.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-14">
              {galleryCollections.map((col, idx) => (
                <div 
                  key={idx} 
                  className="group relative w-full h-[200px] sm:h-[240px] lg:h-[260px] rounded-2xl overflow-hidden cursor-pointer shadow-lg"
                  onClick={() => setIsGalleryOpen(true)}
                >
                  
                  {/* Background Image */}
                  {col.image && (
                    <Image 
                      src={col.image} 
                      alt={col.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  )}

                  {/* Gradient Overlay for Readability (Always visible at bottom) */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050B14] via-[#050B14]/40 to-transparent opacity-90" />
                  
                  {/* Hover Overlay (Darkens on hover) */}
                  <div className="absolute inset-0 bg-[#0B1220]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 backdrop-blur-sm" />

                  {/* Content (Visible at bottom by default, moves to center on hover) */}
                  <div className="absolute inset-0 p-6 flex flex-col justify-end group-hover:justify-center transition-all duration-500">
                    <div className="transform translate-y-0 group-hover:-translate-y-2 transition-transform duration-500">
                      <ImageIcon className="w-6 h-6 text-[#E8B84B] mb-3 group-hover:scale-125 transition-transform duration-500 origin-left group-hover:origin-center group-hover:mx-auto" />
                      <h4 className="text-white font-bold text-lg mb-2 group-hover:text-center group-hover:text-[#E8B84B] transition-colors">{col.title}</h4>
                    </div>
                    
                    {/* Description (Fades in on hover) */}
                    <p className="text-slate-300 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100 group-hover:text-center">
                      {col.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <button onClick={() => setIsGalleryOpen(true)} className="inline-flex items-center px-8 py-4 bg-[#E8B84B] hover:bg-[#d4a643] text-[#0B1220] font-bold rounded-lg transition-colors">
                Open Photo Gallery <Camera className="ml-2 w-5 h-5" />
              </button>
            </div>
          </div>
        </section>

        {/* Gallery Popup Modal */}
        {isGalleryOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-12">
            {/* Backdrop */}
            <div 
              className="absolute inset-0 bg-[#050B14]/90 backdrop-blur-md" 
              onClick={() => setIsGalleryOpen(false)}
            />
            
            {/* Modal Content */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-7xl h-full max-h-[800px] bg-[#03060a] border border-slate-700 rounded-3xl overflow-hidden shadow-2xl flex flex-col"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-slate-800 bg-[#0B1220] relative z-20">
                <div className="flex items-center">
                  <Camera className="w-6 h-6 text-[#E8B84B] mr-3" />
                  <h3 className="text-xl font-bold text-white">Sanota Engineering Gallery</h3>
                </div>
                <button 
                  onClick={() => setIsGalleryOpen(false)}
                  className="w-10 h-10 rounded-full bg-[#131C2E] hover:bg-slate-700 flex items-center justify-center transition-colors group"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-slate-400 group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* DriftWall Container */}
              <div className="relative flex-grow overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-[#E8B84B]/10 blur-[120px] rounded-full pointer-events-none" />
                <DriftWall
                  items={galleryCollections.map(c => ({ image: c.image || '', title: c.title }))}
                  columns={5}
                  tileWidth={240}
                  tileHeight={160}
                  gap={20}
                  tilt={12}
                  turn={-15}
                  perspective={1000}
                  depth={150}
                  speed={35}
                  direction="up"
                  variance={0.4}
                  parallax={0.2}
                  lift={30}
                  fade={0.5}
                  dim={0.6}
                  overlayColor="#050B14"
                  radius={16}
                  roll={0}
                  pauseOnHover={true}
                  grayscale={false}
                />
              </div>
            </motion.div>
          </div>
        )}

        {/* News & Activities */}
        <section className="pt-12 pb-16 bg-[#0B1220] border-t border-slate-800/50 bg-transparent">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-[#E8B84B] font-bold tracking-widest uppercase text-sm mb-4">News & Activities</h2>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">Latest from Sanota</h3>
                <p className="text-slate-400 text-lg leading-relaxed mb-8">Follow company developments, technical activities and important project milestones.</p>
                <Link href="#" className="inline-flex items-center px-7 py-3.5 bg-[#131C2E] hover:bg-slate-800 text-white font-bold rounded-lg border border-slate-700 transition-colors">
                  View All News & Activities <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
              <div className="glowing-card bg-[#131C2E]/40 border border-slate-800 rounded-2xl p-6 shadow-2xl">
                <div className="flex items-center justify-between mb-4">
                  <p className="text-white font-bold">Updates may include:</p>
                  <div className="flex space-x-1">
                     <span className="w-2 h-2 rounded-full bg-slate-600"></span>
                     <span className="w-2 h-2 rounded-full bg-slate-600"></span>
                     <span className="w-2 h-2 rounded-full bg-slate-600"></span>
                  </div>
                </div>
                <div className="min-h-[250px]">
                  <NewsTagCloud items={newsUpdates} />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Video Section */}
        <section id="videos" className="py-16 bg-[#050B14] border-t border-slate-800/50 relative overflow-hidden bg-transparent">
          <div className="absolute inset-0 bg-[#0B1220] mix-blend-overlay opacity-50" />
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <div className="w-16 h-16 rounded-full bg-[#E8B84B]/20 flex items-center justify-center mx-auto mb-6">
              <Play className="w-8 h-8 text-[#E8B84B] ml-1" />
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">See How Integrated Engineering Comes Together</h2>
            <p className="text-slate-300 text-lg leading-relaxed mb-6">A Sanota solution may involve machinery, controls, sensors, software, installation and ongoing support.</p>
            <p className="text-slate-400 text-lg leading-relaxed mb-10">Watch how these capabilities connect around a real operational requirement.</p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="px-8 py-4 bg-[#E8B84B] hover:bg-[#d4a643] text-[#0B1220] font-bold rounded-lg transition-colors flex items-center justify-center">
                Play Featured Video <Play className="ml-2 w-5 h-5" />
              </button>
              <Link href="/services" className="px-8 py-4 bg-[#131C2E] hover:bg-slate-800 text-white font-bold rounded-lg border border-slate-700 transition-colors flex items-center justify-center">
                Explore Integrated Solutions
              </Link>
            </div>
          </div>
        </section>

        {/* Browse Sections */}
        <section className="py-16 bg-[#0B1220] border-t border-slate-800/50 bg-transparent">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* By Industry */}
              <div className="bg-[#0B1220] border border-slate-800 rounded-2xl shadow-2xl relative overflow-hidden flex flex-col h-full group">
                <div className="relative h-56 w-full shrink-0 overflow-hidden">
                  <Image src="/gallery/automation.jpg" alt="Browse By Industry" fill className="object-cover transition-transform duration-1000 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1220] via-[#0B1220]/40 to-transparent" />
                  <div className="absolute bottom-6 left-8 right-8 z-10">
                    <h2 className="text-[#E8B84B] font-bold tracking-widest uppercase text-sm mb-2 drop-shadow-md">Browse By Industry</h2>
                    <h3 className="text-2xl font-bold text-white drop-shadow-lg">Explore Work Relevant to Your Sector</h3>
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-grow relative z-20">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10 flex-grow">
                    {browseIndustries.map((ind, idx) => (
                      <Link href="#" key={idx} className="group/btn flex items-center p-3 bg-[#131C2E]/50 hover:bg-[#131C2E] border border-slate-800 hover:border-[#2E5EAA]/50 rounded-xl transition-all duration-300">
                         <div className="w-8 h-8 shrink-0 rounded-lg bg-[#0B1220] group-hover/btn:bg-[#2E5EAA]/20 flex items-center justify-center mr-3 transition-colors duration-300">
                           <ChevronRight className="w-4 h-4 text-[#2E5EAA] transition-transform duration-300 group-hover/btn:translate-x-1" />
                         </div>
                         <span className="text-slate-300 text-xs sm:text-sm font-medium group-hover/btn:text-white transition-colors duration-300 line-clamp-2">{ind}</span>
                      </Link>
                    ))}
                  </div>
                  <div className="mt-auto border-t border-slate-800/80 pt-6">
                    <Link href="/industries" className="inline-flex items-center px-6 py-3 bg-[#131C2E] hover:bg-[#2E5EAA] text-white font-bold rounded-lg border border-slate-700 hover:border-[#2E5EAA] transition-all duration-300 group/link">
                      Explore All Industries <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* By Capability */}
              <div className="bg-[#0B1220] border border-slate-800 rounded-2xl shadow-2xl relative overflow-hidden flex flex-col h-full group">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#E8B84B]/5 blur-[80px] rounded-full pointer-events-none z-10" />
                <div className="relative h-56 w-full shrink-0 overflow-hidden">
                  <Image src="/gallery/workshop.jpg" alt="Browse By Capability" fill className="object-cover transition-transform duration-1000 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1220] via-[#0B1220]/40 to-transparent" />
                  <div className="absolute bottom-6 left-8 right-8 z-10">
                    <h2 className="text-[#E8B84B] font-bold tracking-widest uppercase text-sm mb-2 drop-shadow-md">Browse By Capability</h2>
                    <h3 className="text-2xl font-bold text-white drop-shadow-lg">Explore How Sanota Delivers Solutions</h3>
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-grow relative z-20">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10 flex-grow">
                    {browseCapabilities.map((cap, idx) => (
                      <Link href="#" key={idx} className="group/btn flex items-center p-3 bg-[#131C2E]/50 hover:bg-[#131C2E] border border-slate-800 hover:border-[#E8B84B]/50 rounded-xl transition-all duration-300">
                         <div className="w-8 h-8 shrink-0 rounded-lg bg-[#0B1220] group-hover/btn:bg-[#E8B84B]/20 flex items-center justify-center mr-3 transition-colors duration-300">
                           <ChevronRight className="w-4 h-4 text-[#E8B84B] transition-transform duration-300 group-hover/btn:translate-x-1" />
                         </div>
                         <span className="text-slate-300 text-xs sm:text-sm font-medium group-hover/btn:text-white transition-colors duration-300 line-clamp-2">{cap}</span>
                      </Link>
                    ))}
                  </div>
                  <div className="mt-auto border-t border-slate-800/80 pt-6">
                    <Link href="/services" className="inline-flex items-center px-6 py-3 bg-[#131C2E] hover:bg-[#E8B84B] text-white font-bold rounded-lg border border-slate-700 hover:border-[#E8B84B] hover:text-[#0B1220] transition-all duration-300 group/link">
                      Explore All Services <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sanota + Knoweb */}
        <section className="py-16 bg-[#050B14] relative overflow-hidden bg-transparent">
          <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[800px] h-[800px] bg-blue-900/10 blur-[120px] rounded-full pointer-events-none" />
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-center">
              <div className="lg:col-span-2">
                <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
                  <h2 className="text-[#2E5EAA] font-bold tracking-widest uppercase text-sm mb-4 flex items-center">
                    <Zap className="w-4 h-4 mr-2" /> Sanota + Knoweb
                  </h2>
                  <h3 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">Engineering Connected by <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2E5EAA] to-[#4C84E0]">Digital Technology</span></h3>
                  <p className="text-slate-400 text-lg leading-relaxed mb-8">Selected media stories will demonstrate how Sanota combines engineering capability with software and digital technology through its collaboration with Knoweb.</p>
                  <Link href="#" className="group inline-flex items-center px-7 py-4 bg-gradient-to-r from-[#131C2E] to-[#0B1220] hover:from-[#2E5EAA] hover:to-[#1a4185] text-white font-bold rounded-xl border border-[#2E5EAA]/30 hover:border-[#2E5EAA] transition-all duration-500 shadow-[0_0_20px_rgba(46,94,170,0.15)] hover:shadow-[0_0_30px_rgba(46,94,170,0.4)]">
                    Explore IoT & Digital Projects <ArrowRight className="ml-3 w-5 h-5 transition-transform duration-300 group-hover:translate-x-2" />
                  </Link>
                </motion.div>
              </div>
              <div className="lg:col-span-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {knowebStories.map((story, idx) => (
                    <motion.div 
                      key={idx} 
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1, duration: 0.5 }}
                      whileHover={{ scale: 1.03, backgroundColor: "rgba(19, 28, 46, 0.9)" }}
                      className="flex items-center bg-[#131C2E]/40 border border-[#2E5EAA]/20 hover:border-[#2E5EAA]/60 rounded-2xl px-5 py-4 cursor-default backdrop-blur-sm transition-all shadow-lg"
                    >
                      <div className="w-8 h-8 rounded-full bg-[#2E5EAA]/20 flex items-center justify-center mr-4 shrink-0">
                         <Monitor className="w-4 h-4 text-[#4C84E0]" />
                      </div>
                      <span className="text-slate-200 text-sm font-medium">{story}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Publication Principles */}
        <section className="py-16 bg-[#0B1220] border-y border-slate-800/50 bg-transparent relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <h2 className="inline-flex items-center justify-center px-4 py-2 bg-[#E8B84B]/10 text-[#E8B84B] rounded-full font-bold tracking-widest uppercase text-xs mb-6 border border-[#E8B84B]/20">
                  <Shield className="w-4 h-4 mr-2" /> Media Publication Principles
                </h2>
                <h3 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                  Authentic Work. Clear Information.<br/><span className="text-slate-400">Responsible Publication.</span>
                </h3>
              </motion.div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {publicationPrinciples.map((principle, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, type: "spring", stiffness: 100 }}
                  whileHover={{ y: -8, boxShadow: "0 20px 40px -10px rgba(232,184,75,0.1)" }}
                  className="bg-[#131C2E] border border-slate-700/50 hover:border-[#E8B84B]/50 rounded-2xl p-6 transition-all duration-300 relative overflow-hidden group"
                >
                  <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                     <CheckCircle2 className="w-24 h-24 text-[#E8B84B]" />
                  </div>
                  <div className="w-12 h-12 bg-[#0B1220] rounded-xl border border-slate-700 flex items-center justify-center mb-6 relative z-10 group-hover:border-[#E8B84B]/50 transition-colors">
                    <CheckCircle2 className="w-6 h-6 text-[#E8B84B]" />
                  </div>
                  <p className="text-slate-300 font-medium leading-relaxed relative z-10 group-hover:text-white transition-colors">{principle}</p>
                </motion.div>
              ))}
            </div>

            <motion.div 
              initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.6 }}
              className="bg-[#131C2E]/40 border border-[#E8B84B]/20 rounded-xl p-6 text-center max-w-4xl mx-auto"
            >
              <p className="text-slate-400 text-sm italic flex items-center justify-center text-left sm:text-center">
                <AlertCircle className="w-5 h-5 mr-3 text-[#E8B84B] shrink-0" />
                Generic stock imagery should only be used where authentic Sanota material is temporarily unavailable and should not be presented as completed Sanota work.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Grids */}
        <section className="py-16 bg-[#050B14] relative overflow-hidden bg-transparent">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
              
              {/* Discuss Similar Requirement */}
              <motion.div 
                initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
                className="border border-slate-800 rounded-3xl p-10 sm:p-12 shadow-2xl relative overflow-hidden group hover:border-[#2E5EAA]/50 transition-colors duration-500"
              >
                {/* AeroShards Background */}
                <div className="absolute inset-0 z-0">
                  <AeroShards
                    backgroundColor="#0B1220"
                    shardColor="#131C2E"
                    accentColor="#4C84E0"
                    placement="full"
                    flow="stream"
                    material="pearl"
                    detail="balanced"
                    effect="none"
                    scale={1.2}
                    spread={1}
                    depth={1}
                    speed={1}
                    spin={1}
                    interaction="repel"
                    density={1.5}
                    shardSize={1.1}
                    stretch={1}
                    turbulence={1}
                    glow={0.5}
                    edgeSoftness={2}
                    bloom={0.3}
                    grain={0.05}
                    chromaticAberration={0.0075}
                    transitionDuration={1}
                    interactionRadius={1.5}
                    interactionStrength={0.5}
                    rippleIntensity={1}
                    holdToGather
                    paused={false}
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-[#131C2E]/60 to-[#0B1220]/80 pointer-events-none" />
                </div>
                
                <div className="absolute top-0 right-0 w-96 h-96 bg-[#2E5EAA]/20 blur-[100px] rounded-full pointer-events-none transition-opacity duration-500 group-hover:opacity-100 opacity-30 z-0" />
                
                <div className="relative z-10 flex flex-col h-full pointer-events-none">
                  <div className="w-16 h-16 bg-[#2E5EAA]/20 rounded-2xl flex items-center justify-center mb-8 border border-[#2E5EAA]/30">
                    <Wrench className="w-8 h-8 text-[#4C84E0]" />
                  </div>
                  <h2 className="text-[#4C84E0] font-bold tracking-widest uppercase text-sm mb-4">Discuss a Similar Requirement</h2>
                  <h3 className="text-3xl font-bold text-white mb-6">Have You Seen a Project Relevant to Your Operation?</h3>
                  <p className="text-slate-400 leading-relaxed mb-8">Your requirement may not be identical, but the engineering capabilities may be adaptable to your application. Tell Sanota:</p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12 pointer-events-auto">
                    {["Which project or solution interested you", "What you currently operate", "What you want to improve or develop", "Which result you are trying to achieve"].map((item, idx) => (
                      <div key={idx} className="flex items-start bg-[#0B1220]/70 p-4 rounded-xl border border-slate-800/50 backdrop-blur-sm">
                        <div className="w-2 h-2 mt-1.5 rounded-full bg-[#4C84E0] mr-3 shrink-0" />
                        <span className="text-slate-300 text-sm leading-snug">{item}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-auto flex flex-col sm:flex-row gap-4 pointer-events-auto">
                    <Link href="/tell-us-your-challenge" className="inline-flex justify-center items-center px-8 py-4 bg-[#2E5EAA] hover:bg-[#1a4185] text-white font-bold rounded-xl transition-all shadow-[0_0_20px_rgba(46,94,170,0.3)] hover:shadow-[0_0_30px_rgba(46,94,170,0.5)]">
                      Discuss Requirement
                    </Link>
                    <Link href="/tell-us-your-challenge" className="inline-flex justify-center items-center px-8 py-4 bg-transparent hover:bg-[#131C2E] text-white font-bold rounded-xl border border-slate-700 hover:border-slate-500 transition-all backdrop-blur-sm">
                      Tell Us Your Challenge
                    </Link>
                  </div>
                </div>
              </motion.div>

              {/* Media Enquiries */}
              <motion.div 
                initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
                className="border border-slate-800 rounded-3xl p-10 sm:p-12 shadow-2xl relative overflow-hidden group hover:border-[#E8B84B]/50 transition-colors duration-500"
              >
                {/* AeroShards Background */}
                <div className="absolute inset-0 z-0">
                  <AeroShards
                    backgroundColor="#0B1220"
                    shardColor="#1A1813"
                    accentColor="#E8B84B"
                    placement="full"
                    flow="stream"
                    material="pearl"
                    detail="balanced"
                    effect="none"
                    scale={1.2}
                    spread={1}
                    depth={1}
                    speed={1}
                    spin={1}
                    interaction="repel"
                    density={1.5}
                    shardSize={1.1}
                    stretch={1}
                    turbulence={1}
                    glow={0.6}
                    edgeSoftness={2}
                    bloom={0.4}
                    grain={0.05}
                    chromaticAberration={0.0075}
                    transitionDuration={1}
                    interactionRadius={1.5}
                    interactionStrength={0.5}
                    rippleIntensity={1}
                    holdToGather
                    paused={false}
                  />
                  <div className="absolute inset-0 bg-gradient-to-bl from-[#131C2E]/60 to-[#0B1220]/80 pointer-events-none" />
                </div>

                <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#E8B84B]/20 blur-[100px] rounded-full pointer-events-none transition-opacity duration-500 group-hover:opacity-100 opacity-30 z-0" />
                
                <div className="relative z-10 flex flex-col h-full pointer-events-none">
                  <div className="w-16 h-16 bg-[#E8B84B]/20 rounded-2xl flex items-center justify-center mb-8 border border-[#E8B84B]/30">
                    <MessageSquare className="w-8 h-8 text-[#E8B84B]" />
                  </div>
                  <h2 className="text-[#E8B84B] font-bold tracking-widest uppercase text-sm mb-4">Media Enquiries</h2>
                  <h3 className="text-3xl font-bold text-white mb-6">Media, Partnership or Publication Enquiry</h3>
                  <p className="text-slate-400 text-lg leading-relaxed mb-12">For enquiries relating to project features, technical articles, exhibitions, partnerships, interviews or permission to use Sanota media, please contact the Sanota team.</p>
                  
                  <div className="mt-auto flex flex-col sm:flex-row gap-4 pointer-events-auto">
                    <Link href="/contact" className="inline-flex justify-center items-center px-8 py-4 bg-[#E8B84B] hover:bg-[#d4a643] text-[#0B1220] font-bold rounded-xl transition-all shadow-[0_0_20px_rgba(232,184,75,0.3)] hover:shadow-[0_0_30px_rgba(232,184,75,0.5)]">
                      Submit Media Enquiry
                    </Link>
                    <Link href="/contact" className="inline-flex justify-center items-center px-8 py-4 bg-transparent hover:bg-[#131C2E] text-white font-bold rounded-xl border border-slate-700 hover:border-slate-500 transition-all backdrop-blur-sm">
                      Contact Sanota
                    </Link>
                  </div>
                </div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 bg-[#131C2E] border-t border-slate-800 bg-transparent">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
              See What Sanota Has Done. <br className="hidden md:block" />
              <span className="text-[#E8B84B]">Imagine What We Can Develop With You.</span>
            </h2>
            <p className="text-slate-400 text-lg mb-12 leading-relaxed max-w-3xl mx-auto">
              From machinery and industrial automation to smart agriculture, IoT, software and lifecycle support, Sanota brings multiple capabilities together to solve practical operational challenges.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-10">
              <Link href="/tell-us-your-challenge" className="px-8 py-4 bg-[#E8B84B] hover:bg-[#d4a643] text-[#0B1220] font-bold rounded-lg transition-colors flex items-center justify-center">
                Tell Us Your Challenge <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link href="/products" className="px-8 py-4 bg-[#0B1220] hover:bg-slate-800 text-white font-bold rounded-lg border border-slate-700 transition-colors flex items-center justify-center">
                Explore Products & Systems
              </Link>
            </div>
            <p className="text-slate-500 text-sm italic">Real challenges. Integrated solutions. Engineering in action.</p>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
