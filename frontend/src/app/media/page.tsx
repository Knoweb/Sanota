"use client";

import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import MediaNavigationCarousel from "@/components/MediaNavigationCarousel";
import { ArrowRight, Play, Briefcase, Newspaper, Video, Camera, Radio, CheckCircle2, ChevronRight, MessageSquare, Image as ImageIcon, MapPin, Zap, Monitor, Truck, Coffee, Sprout, Settings } from "lucide-react";

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

const projectCriteria = [
  "The industry or operating environment",
  "The client’s requirement",
  "The product, machinery or system involved",
  "The services provided by Sanota",
  "The technologies integrated",
  "Sanota’s role in implementation",
  "The operational outcome",
  "Related photographs or videos"
];

const industryFilters = ["All Projects", "Manufacturing", "Agriculture", "Food & Beverage", "Tea", "Logistics", "Energy", "Environment", "Infrastructure", "Healthcare", "Research & Development"];
const solutionFilters = ["Machinery", "Automation", "IoT", "Software", "Modernization", "Product Development", "Project Execution", "AMC"];

const projectStoryStructure = [
  { title: "The Challenge", desc: "What was not working, what needed improvement or what the client wanted to develop." },
  { title: "The Assessment", desc: "How Sanota studied the operation, equipment, constraints and expected outcome." },
  { title: "The Integrated Solution", desc: "The combination of engineering, automation, IoT, software, fabrication and implementation capabilities applied to the requirement." },
  { title: "The Implementation", desc: "How the solution was developed, installed, integrated, tested and commissioned." },
  { title: "The Outcome", desc: "The practical operational improvement, completed system or new capability created through the project." },
  { title: "Continued Support", desc: "Maintenance, AMC, training, modernization or technical assistance provided after implementation." }
];

const galleryCollections = [
  { title: "Completed Projects", desc: "Machinery, systems and solutions operating in client environments." },
  { title: "Products & Equipment", desc: "Custom-developed equipment, product details and system components." },
  { title: "Workshop & Development", desc: "Design, fabrication, assembly, integration and testing activities." },
  { title: "Installation & Commissioning", desc: "On-site implementation, testing and operational handover." },
  { title: "Automation & Digital Technology", desc: "Control systems, sensors, dashboards, connected equipment and software interfaces." },
  { title: "AMC & Technical Support", desc: "Inspection, maintenance, servicing and lifecycle-support activities." },
  { title: "Events & Exhibitions", desc: "Industry exhibitions, demonstrations, partnerships and company participation." },
  { title: "Team & Training", desc: "Technical teams, client training, capability development and internal activities." }
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
          {/* Animated Middle Shade (Left to Right) */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 flex items-center justify-center">
            <motion.div 
              className="absolute w-[800px] h-[300px] rounded-full blur-[80px]"
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
        <section className="py-24 bg-[#0B1220] border-t border-slate-800/50 bg-transparent">
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
        <section id="completed-work" className="py-24 bg-[#050B14] border-t border-slate-800/50 bg-transparent">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
              <div>
                <h2 className="text-[#E8B84B] font-bold tracking-widest uppercase text-sm mb-4">Completed Work</h2>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">Practical Solutions for Real Operating Environments</h3>
                <p className="text-slate-400 text-lg leading-relaxed mb-6">The Completed Work collection presents selected Sanota projects across industries and technical disciplines.</p>
                <p className="text-slate-500 italic text-sm leading-relaxed border-l-2 border-slate-800 pl-4">
                  Where client confidentiality applies, project information may be presented without identifying the client or disclosing sensitive technical details.
                </p>
              </div>
              <div className="glowing-card bg-[#131C2E]/40 border border-slate-800 rounded-2xl p-6">
                <p className="text-white font-bold mb-4">Each project entry should identify:</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {projectCriteria.map((item, idx) => (
                    <div key={idx} className="flex items-start">
                      <CheckCircle2 className="w-4 h-4 text-[#E8B84B] mt-0.5 mr-2 shrink-0" />
                      <span className="text-slate-300 text-sm leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h4 className="text-slate-500 font-bold text-xs uppercase tracking-widest mb-4">Filter by Industry</h4>
              <div className="flex flex-wrap gap-2">
                {industryFilters.map((filter, idx) => (
                  <button key={idx} className={`px-4 py-2 rounded-full text-xs font-bold transition-colors ${idx === 0 ? 'bg-[#E8B84B] text-[#0B1220]' : 'bg-[#131C2E] border border-slate-700 text-slate-300 hover:text-white'}`}>
                    {filter}
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-12">
              <h4 className="text-slate-500 font-bold text-xs uppercase tracking-widest mb-4">Filter by Solution</h4>
              <div className="flex flex-wrap gap-2">
                {solutionFilters.map((filter, idx) => (
                  <button key={idx} className="px-4 py-2 rounded-full text-xs font-bold bg-[#131C2E] border border-slate-700 text-slate-300 hover:text-white transition-colors">
                    {filter}
                  </button>
                ))}
              </div>
            </div>

            <div className="text-center">
              <Link href="#" className="inline-flex items-center px-8 py-4 bg-[#131C2E] hover:bg-slate-800 text-white font-bold rounded-lg border border-slate-700 transition-colors">
                Browse Completed Work <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* Project Stories */}
        <section className="py-24 bg-[#0B1220] border-t border-slate-800/50 bg-transparent">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-[#E8B84B] font-bold tracking-widest uppercase text-sm mb-4">Project Stories</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">From Challenge to Working Solution</h3>
              <p className="text-slate-400 text-lg max-w-3xl mx-auto">Project Stories provide a closer look at how Sanota approaches complex operational requirements.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {projectStoryStructure.map((story, idx) => (
                <div key={idx} className="glowing-card bg-[#131C2E]/40 border border-slate-800 rounded-2xl p-6 relative overflow-hidden group hover:border-[#E8B84B]/50 transition-colors">
                  <div className="absolute top-0 right-0 p-4 opacity-10 font-black text-6xl text-white pointer-events-none group-hover:scale-110 transition-transform">
                    {String(idx + 1).padStart(2, '0')}
                  </div>
                  <h4 className="text-xl font-bold text-white mb-3 relative z-10">{story.title}</h4>
                  <p className="text-slate-400 text-sm leading-relaxed relative z-10">{story.desc}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="#" className="px-8 py-4 bg-[#E8B84B] hover:bg-[#d4a643] text-[#0B1220] font-bold rounded-lg transition-colors flex items-center justify-center">
                Read Project Stories <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link href="/tell-us-your-challenge" className="px-8 py-4 bg-[#131C2E] hover:bg-slate-800 text-white font-bold rounded-lg border border-slate-700 transition-colors flex items-center justify-center">
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
        <section className="py-24 bg-[#050B14] border-t border-slate-800/50 bg-transparent">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-[#E8B84B] font-bold tracking-widest uppercase text-sm mb-4">Photo Gallery</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">Projects, Products and People</h3>
              <p className="text-slate-400 text-lg max-w-3xl mx-auto mb-10">The Sanota Photo Gallery provides a visual record of engineering work across project and company environments.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
              {galleryCollections.map((col, idx) => (
                <div key={idx} className="bg-[#131C2E]/60 border border-slate-800 rounded-xl p-5 hover:bg-[#131C2E] transition-colors">
                  <ImageIcon className="w-6 h-6 text-[#E8B84B] mb-4" />
                  <h4 className="text-white font-bold text-sm mb-2">{col.title}</h4>
                  <p className="text-slate-400 text-xs leading-relaxed">{col.desc}</p>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Link href="#" className="inline-flex items-center px-8 py-4 bg-[#E8B84B] hover:bg-[#d4a643] text-[#0B1220] font-bold rounded-lg transition-colors">
                Open Photo Gallery <Camera className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* News & Activities */}
        <section className="py-24 bg-[#0B1220] border-t border-slate-800/50 bg-transparent">
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
              <div className="glowing-card bg-[#131C2E]/40 border border-slate-800 rounded-2xl p-8">
                <p className="text-white font-bold mb-6">Updates may include:</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6">
                  {newsUpdates.map((update, idx) => (
                    <div key={idx} className="flex items-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#E8B84B] mr-3 shrink-0" />
                      <span className="text-slate-300 text-sm">{update}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Video Section */}
        <section id="videos" className="py-24 bg-[#050B14] border-t border-slate-800/50 relative overflow-hidden bg-transparent">
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
        <section className="py-24 bg-[#0B1220] border-t border-slate-800/50 bg-transparent">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* By Industry */}
              <div className="glowing-card bg-[#131C2E]/40 border border-slate-800 rounded-2xl p-8">
                <h2 className="text-[#E8B84B] font-bold tracking-widest uppercase text-sm mb-4">Browse By Industry</h2>
                <h3 className="text-2xl font-bold text-white mb-8">Explore Work Relevant to Your Sector</h3>
                <div className="space-y-3 mb-10">
                  {browseIndustries.map((ind, idx) => (
                    <div key={idx} className="flex items-center text-slate-300 text-sm hover:text-white transition-colors cursor-pointer">
                      <ChevronRight className="w-4 h-4 text-[#2E5EAA] mr-2" />
                      {ind}
                    </div>
                  ))}
                </div>
                <Link href="/industries" className="inline-flex items-center px-6 py-3 bg-[#131C2E] hover:bg-slate-800 text-white font-bold rounded-lg border border-slate-700 transition-colors">
                  Explore All Industries <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>

              {/* By Capability */}
              <div className="glowing-card bg-[#131C2E]/40 border border-slate-800 rounded-2xl p-8">
                <h2 className="text-[#E8B84B] font-bold tracking-widest uppercase text-sm mb-4">Browse By Capability</h2>
                <h3 className="text-2xl font-bold text-white mb-8">Explore How Sanota Delivers Solutions</h3>
                <div className="space-y-3 mb-10">
                  {browseCapabilities.map((cap, idx) => (
                    <div key={idx} className="flex items-center text-slate-300 text-sm hover:text-white transition-colors cursor-pointer">
                      <ChevronRight className="w-4 h-4 text-[#E8B84B] mr-2" />
                      {cap}
                    </div>
                  ))}
                </div>
                <Link href="/services" className="inline-flex items-center px-6 py-3 bg-[#131C2E] hover:bg-slate-800 text-white font-bold rounded-lg border border-slate-700 transition-colors">
                  Explore All Services <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Sanota + Knoweb */}
        <section className="py-24 bg-[#050B14] border-t border-slate-800/50 bg-transparent">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-[#E8B84B] font-bold tracking-widest uppercase text-sm mb-4">Sanota + Knoweb</h2>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">Engineering Connected by Digital Technology</h3>
                <p className="text-slate-400 text-lg leading-relaxed mb-8">Selected media stories will demonstrate how Sanota combines engineering capability with software and digital technology through its collaboration with Knoweb.</p>
                <Link href="#" className="inline-flex items-center px-7 py-3.5 bg-[#131C2E] hover:bg-slate-800 text-white font-bold rounded-lg border border-slate-700 transition-colors">
                  Explore IoT & Digital Projects <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {knowebStories.map((story, idx) => (
                  <div key={idx} className="flex items-center bg-[#131C2E]/60 border border-slate-800 rounded-xl px-4 py-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#E8B84B] mr-3 shrink-0" />
                    <span className="text-slate-300 text-sm">{story}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Publication Principles */}
        <section className="py-24 bg-[#0B1220] border-t border-slate-800/50 bg-transparent">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-[#E8B84B] font-bold tracking-widest uppercase text-sm mb-4">Media Publication Principles</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-10">Authentic Work. Clear Information. Responsible Publication.</h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10 text-left">
              {publicationPrinciples.map((principle, idx) => (
                <div key={idx} className="flex items-start bg-[#131C2E]/40 border border-slate-800 rounded-lg p-4">
                  <CheckCircle2 className="w-5 h-5 text-[#E8B84B] mr-3 shrink-0" />
                  <span className="text-slate-300 text-sm leading-relaxed">{principle}</span>
                </div>
              ))}
            </div>

            <p className="text-slate-400 text-sm italic">
              Generic stock imagery should only be used where authentic Sanota material is temporarily unavailable and should not be presented as completed Sanota work.
            </p>
          </div>
        </section>

        {/* Contact Grids */}
        <section className="py-24 bg-[#050B14] border-t border-slate-800/50 bg-transparent">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              
              {/* Discuss Similar Requirement */}
              <div className="glowing-card bg-[#131C2E]/60 border border-slate-800 rounded-3xl p-10">
                <h2 className="text-[#E8B84B] font-bold tracking-widest uppercase text-sm mb-4">Discuss a Similar Requirement</h2>
                <h3 className="text-2xl font-bold text-white mb-6">Have You Seen a Project Relevant to Your Operation?</h3>
                <p className="text-slate-400 leading-relaxed mb-6">Your requirement may not be identical, but the engineering capabilities may be adaptable to your application. Tell Sanota:</p>
                <div className="space-y-3 mb-10">
                  {["Which project or solution interested you", "What you currently operate", "What you want to improve or develop", "Which result you are trying to achieve"].map((item, idx) => (
                    <div key={idx} className="flex items-center text-slate-300 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#E8B84B] mr-3 shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/tell-us-your-challenge" className="inline-flex justify-center items-center px-6 py-3 bg-[#E8B84B] hover:bg-[#d4a643] text-[#0B1220] font-bold rounded-lg transition-colors">
                    Discuss a Similar Requirement
                  </Link>
                  <Link href="/tell-us-your-challenge" className="inline-flex justify-center items-center px-6 py-3 bg-[#0B1220] hover:bg-slate-800 text-white font-bold rounded-lg border border-slate-700 transition-colors">
                    Tell Us Your Challenge
                  </Link>
                </div>
              </div>

              {/* Media Enquiries */}
              <div className="glowing-card bg-[#131C2E]/60 border border-slate-800 rounded-3xl p-10">
                <MessageSquare className="w-10 h-10 text-[#E8B84B] mb-6" />
                <h2 className="text-[#E8B84B] font-bold tracking-widest uppercase text-sm mb-4">Media Enquiries</h2>
                <h3 className="text-2xl font-bold text-white mb-6">Media, Partnership or Publication Enquiry</h3>
                <p className="text-slate-400 leading-relaxed mb-10">For enquiries relating to project features, technical articles, exhibitions, partnerships, interviews or permission to use Sanota media, please contact the Sanota team.</p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/contact" className="inline-flex justify-center items-center px-6 py-3 bg-[#E8B84B] hover:bg-[#d4a643] text-[#0B1220] font-bold rounded-lg transition-colors">
                    Submit a Media Enquiry
                  </Link>
                  <Link href="/contact" className="inline-flex justify-center items-center px-6 py-3 bg-[#0B1220] hover:bg-slate-800 text-white font-bold rounded-lg border border-slate-700 transition-colors">
                    Contact Sanota
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 bg-[#131C2E] border-t border-slate-800 bg-transparent">
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
