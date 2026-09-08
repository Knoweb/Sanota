"use client";

import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowRight, Settings, Cpu, Activity, Sprout, Zap, ShieldCheck, Lightbulb, ClipboardList, BookOpen, ChevronRight, Download, HelpCircle, Mail, AlertTriangle, CheckCircle2 } from "lucide-react";

const insightCategories = [
  {
    title: "Engineering & Industrial Automation",
    desc: "Understand how machinery, controls, sensors and automation can improve industrial operations.",
    icon: Settings,
    button: "Explore Engineering & Automation",
    topics: [
      "Identifying processes suitable for automation",
      "Improving production consistency",
      "Selecting control technologies",
      "Integrating machinery and automation",
      "Improving machine safety",
      "Planning an industrial-automation project",
      "Avoiding common automation-project mistakes"
    ]
  },
  {
    title: "IoT & Digital Transformation",
    desc: "Learn how connected technologies can create better visibility, control and decision-making.",
    icon: Activity,
    button: "Explore IoT & Digital Insights",
    topics: [
      "Understanding industrial IoT",
      "Connecting machinery to dashboards",
      "Selecting useful operational data",
      "Remote monitoring and alerts",
      "Integrating sensors and software",
      "Cloud-connected engineering systems",
      "Web and mobile applications for operations",
      "Protecting operational information"
    ]
  },
  {
    title: "Machinery Modernization",
    desc: "Explore how existing machinery can be improved through mechanical, electrical, automation and digital upgrades.",
    icon: Cpu,
    button: "Explore Modernization Insights",
    topics: [
      "When to modernize instead of replace",
      "Managing obsolete control components",
      "Adding automation to existing machinery",
      "Improving machine reliability",
      "Introducing sensors and monitoring",
      "Planning a control-system upgrade",
      "Extending useful equipment life"
    ]
  },
  {
    title: "Smart Agriculture",
    desc: "Understand how automation, sensors, irrigation, fertigation and digital monitoring can support agricultural operations.",
    icon: Sprout,
    button: "Explore Smart Agriculture Insights",
    topics: [
      "Controlled-environment agriculture",
      "Smart greenhouse systems",
      "Irrigation and fertigation automation",
      "Environmental monitoring",
      "Water-use visibility",
      "Remote agricultural monitoring",
      "Selecting practical agri-technology",
      "Preparing for an agricultural IoT project"
    ]
  },
  {
    title: "Energy & Resource Efficiency",
    desc: "Learn how monitoring and control can support the better use of energy, water and operational resources.",
    icon: Zap,
    button: "Explore Energy & Resource Insights",
    topics: [
      "Understanding where resources are used",
      "Energy and utility monitoring",
      "Pump and motor control",
      "Water-level and flow monitoring",
      "Detecting unusual operating conditions",
      "Using dashboards for resource decisions",
      "Connecting resource efficiency with maintenance"
    ]
  },
  {
    title: "Maintenance & Asset Lifecycle",
    desc: "Explore practical approaches to reliability, preventive maintenance, AMC and long-term technical support.",
    icon: ShieldCheck,
    button: "Explore Maintenance Insights",
    topics: [
      "Preventive versus reactive maintenance",
      "Preparing an Annual Maintenance Contract",
      "Assessing third-party machinery for AMC",
      "Maintenance documentation and reporting",
      "Managing component obsolescence",
      "Identifying modernization opportunities",
      "Planning the lifecycle of integrated systems",
      "Supporting automation, IoT and software after commissioning"
    ]
  },
  {
    title: "Product Development & Innovation",
    desc: "Learn how engineering ideas move from initial concepts to prototypes and practical products.",
    icon: Lightbulb,
    button: "Explore Product Development Insights",
    topics: [
      "Defining a product requirement",
      "Preparing for engineering design",
      "Developing a prototype",
      "Integrating mechanics, electronics and software",
      "Testing and validating a concept",
      "Improving an existing product",
      "Planning a pilot implementation",
      "Working with an engineering-development partner"
    ]
  },
  {
    title: "Project Planning & Implementation",
    desc: "Understand the decisions required to move an engineering concept towards a working solution.",
    icon: ClipboardList,
    button: "Explore Project Planning Insights",
    topics: [
      "Preparing a project requirement",
      "Defining project scope",
      "Coordinating multiple technical disciplines",
      "Planning installation and commissioning",
      "Managing site and operational constraints",
      "Preparing teams for system handover",
      "Training operators and maintenance personnel",
      "Planning post-project support"
    ]
  }
];

const featuredInsights = [
  {
    title: "How to Explain an Engineering Requirement When You Do Not Know the Solution",
    summary: "You do not need to begin with a technical specification. Start by explaining what is happening now, what needs to improve and what result you want to achieve.",
    category: "Engineering Consultation"
  },
  {
    title: "Should You Modernize Existing Machinery or Replace It?",
    summary: "A practical look at equipment condition, performance, component availability, safety, integration needs and long-term operating value.",
    category: "Machinery Modernization"
  },
  {
    title: "Which Industrial Processes Are Suitable for Automation?",
    summary: "An introduction to identifying repetitive, inconsistent, hazardous or difficult-to-monitor processes that may benefit from automation.",
    category: "Industrial Automation"
  },
  {
    title: "What Should an Industrial IoT System Actually Monitor?",
    summary: "Useful monitoring begins with operational decisions. This article explains how to identify meaningful data, alerts and reports.",
    category: "IoT & Digital Transformation"
  },
  {
    title: "What Should Be Included in an Engineering AMC?",
    summary: "A practical guide to asset coverage, inspection schedules, response arrangements, documentation, exclusions and improvement planning.",
    category: "Maintenance & Asset Lifecycle"
  },
  {
    title: "From Idea to Prototype: Preparing for Product Development",
    summary: "Key information to consider before beginning engineering design, prototyping, testing and technical integration.",
    category: "Product Development"
  }
];

const filterLabels = [
  "All Insights", "Engineering", "Automation", "IoT & Software", "Modernization", "Smart Agriculture", "Energy", "Maintenance", "Product Development", "Project Planning"
];

const browseIndustries = [
  "Manufacturing & Industrial Automation",
  "Smart Agriculture & Agri-Technology",
  "Food & Beverage Processing",
  "Tea Industry",
  "Logistics, Warehousing & Material Handling",
  "Energy & Resource Efficiency",
  "Environmental & Waste Management",
  "Infrastructure & Smart Facilities",
  "Healthcare & Biomedical Engineering",
  "Research, Innovation & Product Development"
];

const technicalGuides = [
  "Engineering Requirement Preparation Checklist",
  "Industrial Automation Readiness Checklist",
  "Machinery Modernization Assessment Guide",
  "IoT Project Planning Checklist",
  "AMC Preparation Checklist",
  "Product Development Brief",
  "Site Visit Preparation Checklist",
  "Installation and Commissioning Readiness Guide"
];

const engineeringQuestions = [
  "Can an existing machine be automated?",
  "Should old equipment be modernized or replaced?",
  "How can production be monitored remotely?",
  "Can several independent systems be integrated?",
  "What information is required to develop custom machinery?",
  "How can sensors and software improve an operation?",
  "Can Sanota maintain equipment supplied by another company?",
  "What should be assessed before beginning an IoT project?",
  "How does an idea become an engineering prototype?",
  "What support is required after commissioning?"
];

const knowebTopics = [
  "Connecting machinery with software",
  "Designing useful operational dashboards",
  "Selecting sensors and communication methods",
  "Developing web and mobile interfaces",
  "Managing alerts and reports",
  "Integrating IoT platforms with existing operations",
  "Supporting connected systems throughout their lifecycle"
];

const practicalExperience = [
  "Address a real operational question",
  "Explain technical subjects clearly",
  "Help readers make better decisions",
  "Avoid unnecessary jargon",
  "Identify limitations and important considerations",
  "Connect knowledge to practical action",
  "Remain accurate and responsible",
  "Protect client confidentiality"
];

export default function InsightsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#050B14]">
      <Header />
      
      {/* 
        ================================================================
        HIDDEN CONTENT SECTION
        Per instructions, the entire page content is built but hidden.
        Remove 'hidden' class to make this page publicly visible.
        ================================================================
      */}
      <main className="flex-grow pt-24">
        
        {/* Hero Section */}
        <section className="relative pt-24 pb-32 overflow-hidden border-b border-slate-800">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-[#E8B84B] font-bold tracking-widest uppercase text-sm mb-5"
            >
              Engineering & Technology Insights
            </motion.p>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 }}
              className="text-4xl sm:text-6xl font-black text-white tracking-tight mb-6 leading-tight max-w-5xl mx-auto"
            >
              Practical Engineering Insights for <span className="text-[#2E5EAA]">Evolving Industries</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-slate-300 max-w-3xl mx-auto mb-4 font-medium leading-relaxed"
            >
              Ideas, technical perspectives and industry knowledge that help organizations make better operational decisions.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="text-lg text-slate-400 max-w-3xl mx-auto mb-10 leading-relaxed"
            >
              Sanota Insights explores the engineering, automation, IoT, software and maintenance considerations behind modern industrial and operational systems.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-col sm:flex-row justify-center gap-4 mb-12"
            >
              <a
                href="#latest"
                className="px-8 py-4 bg-[#E8B84B] hover:bg-[#d4a643] text-[#0B1220] font-bold rounded-lg transition-colors flex items-center justify-center"
              >
                Explore Latest Insights <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a
                href="#categories"
                className="px-8 py-4 bg-[#131C2E]/80 hover:bg-slate-800 text-white font-bold rounded-lg border border-slate-700 transition-colors flex items-center justify-center"
              >
                Browse by Topic
              </a>
            </motion.div>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-20 bg-[#0B1220] border-b border-slate-800/50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Turning Technical Knowledge into Practical Understanding</h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-6">
              Technology continues to change how machinery, production processes, agricultural operations, facilities and resources are managed.
            </p>
            <p className="text-slate-400 text-lg leading-relaxed mb-6">
              However, adopting technology should begin with a clear operational need—not with technology alone.
            </p>
            <p className="text-slate-300 font-bold text-lg leading-relaxed border-l-4 border-[#E8B84B] pl-6 text-left max-w-3xl mx-auto">
              Sanota Insights provides practical information to help decision-makers, engineers, technical teams and business leaders better understand operational challenges, evaluate improvement opportunities and prepare for engineering and technology projects.
            </p>
          </div>
        </section>

        {/* Insight Categories */}
        <section id="categories" className="py-24 bg-[#050B14]">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-[#E8B84B] font-bold tracking-widest uppercase text-sm mb-4">Insight Categories</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-white">Explore by Topic</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {insightCategories.map((cat, idx) => (
                <div key={idx} className="bg-[#131C2E]/40 border border-slate-800 rounded-3xl p-8 hover:border-[#2E5EAA]/50 transition-colors flex flex-col">
                  <div className="flex items-center mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-[#0B1220] border border-slate-700 flex items-center justify-center mr-5 shrink-0">
                      <cat.icon className="w-7 h-7 text-[#E8B84B]" />
                    </div>
                    <h4 className="text-2xl font-bold text-white">{cat.title}</h4>
                  </div>
                  <p className="text-slate-300 text-lg leading-relaxed mb-6">{cat.desc}</p>
                  
                  <div className="bg-[#0B1220]/60 border border-slate-800/60 rounded-xl p-6 mb-8 flex-grow">
                    <p className="text-slate-500 font-bold text-xs uppercase tracking-widest mb-4">Topics may include:</p>
                    <div className="space-y-3">
                      {cat.topics.map((topic, tIdx) => (
                        <div key={tIdx} className="flex items-start">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#E8B84B] mt-2 mr-3 shrink-0" />
                          <span className="text-slate-400 text-sm leading-relaxed">{topic}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Link href="#" className="inline-flex items-center text-sm font-bold text-[#E8B84B] hover:text-[#d4a643] transition-colors mt-auto">
                    {cat.button} <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Insights */}
        <section className="py-24 bg-[#0B1220] border-t border-slate-800/50">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-[#E8B84B] font-bold tracking-widest uppercase text-sm mb-4">Featured Insights</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-white">Recommended Reading</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredInsights.map((insight, idx) => (
                <div key={idx} className="bg-[#131C2E]/60 border border-slate-800 rounded-2xl p-8 hover:bg-[#131C2E] transition-colors flex flex-col group">
                  <span className="text-slate-500 font-bold text-xs uppercase tracking-widest mb-3 block">{insight.category}</span>
                  <h4 className="text-xl font-bold text-white mb-4 group-hover:text-[#E8B84B] transition-colors">{insight.title}</h4>
                  <p className="text-slate-400 text-sm leading-relaxed mb-8 flex-grow">{insight.summary}</p>
                  <Link href="#" className="inline-flex items-center text-sm font-bold text-[#2E5EAA] hover:text-white transition-colors mt-auto">
                    Read Article <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Latest Insights */}
        <section id="latest" className="py-24 bg-[#050B14] border-t border-slate-800/50">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row justify-between items-end mb-12 gap-6">
              <div>
                <h2 className="text-[#E8B84B] font-bold tracking-widest uppercase text-sm mb-4">Latest Insights</h2>
                <h3 className="text-3xl md:text-4xl font-bold text-white">Latest Articles and Technical Updates</h3>
              </div>
              <div className="w-full lg:w-1/3">
                <input 
                  type="text" 
                  placeholder="Search Sanota Insights" 
                  className="w-full bg-[#131C2E] border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#E8B84B] transition-colors"
                />
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-12">
              {filterLabels.map((filter, idx) => (
                <button key={idx} className={`px-4 py-2 rounded-full text-xs font-bold transition-colors ${idx === 0 ? 'bg-[#E8B84B] text-[#0B1220]' : 'bg-[#131C2E] border border-slate-700 text-slate-300 hover:text-white'}`}>
                  {filter}
                </button>
              ))}
            </div>

            {/* Placeholder for Articles Grid */}
            <div className="bg-[#0B1220] border border-dashed border-slate-700 rounded-2xl p-16 text-center mb-10">
              <BookOpen className="w-12 h-12 text-slate-600 mx-auto mb-4" />
              <p className="text-slate-400">Article feed will be populated here.</p>
              <p className="text-slate-500 text-sm mt-2">Each card will contain: Title, Category, Date, Reading time, Summary, Image, and Link.</p>
            </div>

            <div className="text-center">
              <Link href="#" className="inline-flex items-center px-8 py-4 bg-[#131C2E] hover:bg-slate-800 text-white font-bold rounded-lg border border-slate-700 transition-colors">
                View All Insights <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* Individual Article Structure */}
        <section className="py-24 bg-[#0B1220] border-t border-slate-800/50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-[#E8B84B] font-bold tracking-widest uppercase text-sm mb-4">Template</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-white">Individual Article Structure</h3>
            </div>
            
            <div className="bg-[#131C2E]/60 border border-slate-800 rounded-3xl p-10">
              <h4 className="text-2xl font-bold text-white mb-2">[Article Title]</h4>
              <p className="text-slate-500 text-sm mb-8 border-b border-slate-700 pb-6">
                Category: [Insight category] <span className="mx-2">•</span> Published: [Publication date] <span className="mx-2">•</span> Reading time: [Estimated time]
              </p>
              
              <div className="space-y-8">
                {[
                  { title: "Introduction", desc: "Briefly explain the operational or technical issue addressed by the article." },
                  { title: "Why It Matters", desc: "Explain why the issue is relevant to the intended industry or decision-maker." },
                  { title: "Key Considerations", desc: "Present the important engineering, operational, financial or implementation factors." },
                  { title: "Practical Approach", desc: "Explain how an organization can assess the requirement or prepare for the next step." },
                  { title: "Common Challenges", desc: "Identify frequently encountered limitations, risks or misunderstandings." },
                  { title: "Questions to Ask", desc: "Provide a concise list of questions the reader should consider before making a decision." },
                  { title: "How Sanota Can Help", desc: "Connect the topic to the relevant Sanota services, products, systems or assessment process." },
                  { title: "Related Content", desc: "Link to relevant industries, services, products, project stories and other insights." }
                ].map((section, idx) => (
                  <div key={idx}>
                    <h5 className="text-white font-bold mb-2">{section.title}</h5>
                    <p className="text-slate-400 text-sm">{section.desc}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mt-12 pt-8 border-t border-slate-700">
                <button className="px-6 py-3 bg-[#E8B84B] hover:bg-[#d4a643] text-[#0B1220] font-bold rounded-lg transition-colors">
                  Discuss This Requirement
                </button>
                <button className="px-6 py-3 bg-[#0B1220] hover:bg-slate-800 border border-slate-700 text-white font-bold rounded-lg transition-colors">
                  Tell Us Your Challenge
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Insights by Industry & Technical Guides */}
        <section className="py-24 bg-[#050B14] border-t border-slate-800/50">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              
              {/* Insights by Industry */}
              <div className="bg-[#131C2E]/40 border border-slate-800 rounded-3xl p-10">
                <h2 className="text-[#E8B84B] font-bold tracking-widest uppercase text-sm mb-4">Insights by Industry</h2>
                <h3 className="text-2xl font-bold text-white mb-4">Knowledge Relevant to Your Operating Environment</h3>
                <p className="text-slate-400 mb-8">Explore insights developed for:</p>
                <div className="space-y-3 mb-10">
                  {browseIndustries.map((ind, idx) => (
                    <div key={idx} className="flex items-center text-slate-300 text-sm hover:text-white transition-colors cursor-pointer">
                      <ChevronRight className="w-4 h-4 text-[#2E5EAA] mr-2" />
                      {ind}
                    </div>
                  ))}
                </div>
                <Link href="#" className="inline-flex items-center px-6 py-3 bg-[#131C2E] hover:bg-slate-800 text-white font-bold rounded-lg border border-slate-700 transition-colors">
                  Browse Insights by Industry <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>

              {/* Technical Guides */}
              <div className="bg-[#131C2E]/40 border border-slate-800 rounded-3xl p-10">
                <h2 className="text-[#E8B84B] font-bold tracking-widest uppercase text-sm mb-4">Technical Guides</h2>
                <h3 className="text-2xl font-bold text-white mb-4">Practical Guides and Checklists</h3>
                <p className="text-slate-400 mb-8">Sanota can provide downloadable resources to help organizations prepare for engineering and technology projects. Suggested guides include:</p>
                <div className="space-y-3 mb-10">
                  {technicalGuides.map((guide, idx) => (
                    <div key={idx} className="flex items-center text-slate-300 text-sm hover:text-white transition-colors cursor-pointer">
                      <Download className="w-4 h-4 text-[#E8B84B] mr-3" />
                      {guide}
                    </div>
                  ))}
                </div>
                <Link href="#" className="inline-flex items-center px-6 py-3 bg-[#E8B84B] hover:bg-[#d4a643] text-[#0B1220] font-bold rounded-lg transition-colors mb-4">
                  Explore Technical Guides <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
                <p className="text-slate-500 text-xs italic">
                  Note: Downloads may require basic contact information where follow-up assistance is offered. Visitors should be clearly informed before submitting their details.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* Engineering Questions & Knoweb Insights */}
        <section className="py-24 bg-[#0B1220] border-t border-slate-800/50">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              
              {/* Engineering Questions */}
              <div>
                <h2 className="text-[#E8B84B] font-bold tracking-widest uppercase text-sm mb-4">Engineering Questions</h2>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-10">Questions We Frequently Help Clients Answer</h3>
                <div className="space-y-4 mb-10">
                  {engineeringQuestions.map((q, idx) => (
                    <div key={idx} className="flex items-start bg-[#131C2E]/60 border border-slate-800 rounded-xl p-4">
                      <HelpCircle className="w-5 h-5 text-[#2E5EAA] mr-3 shrink-0" />
                      <span className="text-slate-300 text-sm">{q}</span>
                    </div>
                  ))}
                </div>
                <Link href="/contact" className="inline-flex items-center px-8 py-4 bg-[#131C2E] hover:bg-slate-800 text-white font-bold rounded-lg border border-slate-700 transition-colors">
                  Ask Sanota a Question <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </div>

              {/* Sanota + Knoweb */}
              <div>
                <h2 className="text-[#E8B84B] font-bold tracking-widest uppercase text-sm mb-4">Sanota + Knoweb Insights</h2>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">Where Engineering Meets Digital Technology</h3>
                <p className="text-slate-400 text-lg leading-relaxed mb-8">Through its collaboration with Knoweb, Sanota can provide perspectives covering both physical engineering systems and their digital components.</p>
                <p className="text-white font-bold mb-6">Topics may include:</p>
                <div className="space-y-3 mb-10">
                  {knowebTopics.map((topic, idx) => (
                    <div key={idx} className="flex items-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#E8B84B] mr-3 shrink-0" />
                      <span className="text-slate-300 text-sm">{topic}</span>
                    </div>
                  ))}
                </div>
                <Link href="#" className="inline-flex items-center px-8 py-4 bg-[#131C2E] hover:bg-slate-800 text-white font-bold rounded-lg border border-slate-700 transition-colors">
                  Explore Engineering & Digital Insights <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </div>

            </div>
          </div>
        </section>

        {/* Knowledge & Disclaimer */}
        <section className="py-24 bg-[#050B14] border-t border-slate-800/50">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              
              {/* Practical Experience */}
              <div className="bg-[#131C2E]/40 border border-slate-800 rounded-3xl p-10">
                <h2 className="text-[#E8B84B] font-bold tracking-widest uppercase text-sm mb-4">Knowledge from Practical Experience</h2>
                <h3 className="text-2xl font-bold text-white mb-6">Insights Informed by Real Operating Requirements</h3>
                <p className="text-slate-400 mb-8">Sanota’s insight content should be developed using practical engineering experience, project learning and relevant industry knowledge. Every article should aim to:</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 text-left">
                  {practicalExperience.map((principle, idx) => (
                    <div key={idx} className="flex items-start">
                      <CheckCircle2 className="w-4 h-4 text-[#E8B84B] mr-2 mt-0.5 shrink-0" />
                      <span className="text-slate-300 text-sm leading-relaxed">{principle}</span>
                    </div>
                  ))}
                </div>
                <div className="bg-[#0B1220] p-4 rounded-lg border border-slate-700">
                  <p className="text-slate-400 text-xs italic">
                    Where an article refers to standards, regulations, performance figures or external research, the information should be verified and appropriately referenced before publication.
                  </p>
                </div>
              </div>

              {/* Disclaimer */}
              <div className="bg-[#131C2E]/40 border border-slate-800 rounded-3xl p-10 flex flex-col justify-center">
                <AlertTriangle className="w-10 h-10 text-[#E8B84B] mb-6" />
                <h2 className="text-[#E8B84B] font-bold tracking-widest uppercase text-sm mb-4">Content Disclaimer</h2>
                <h3 className="text-2xl font-bold text-white mb-6">Important Information</h3>
                <p className="text-slate-400 leading-relaxed mb-6">
                  Sanota Insights provides general information for educational and planning purposes. Engineering requirements differ according to equipment, operating conditions, location, application and applicable standards.
                </p>
                <p className="text-slate-400 leading-relaxed mb-8">
                  Information published in an article should not be treated as a substitute for a site-specific technical assessment, professional design or approved safety procedure.
                </p>
                <Link href="/contact" className="inline-flex text-[#2E5EAA] font-bold hover:text-white transition-colors">
                  Contact Sanota for advice relating to a specific requirement <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </div>

            </div>
          </div>
        </section>

        {/* Receive New Insights */}
        <section className="py-24 bg-[#0B1220] border-t border-slate-800/50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Mail className="w-12 h-12 text-[#E8B84B] mx-auto mb-6" />
            <h2 className="text-[#E8B84B] font-bold tracking-widest uppercase text-sm mb-4">Receive New Insights</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">Stay Informed</h3>
            <p className="text-slate-400 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
              Receive selected engineering insights, project stories, product developments and company updates from Sanota.
            </p>
            
            <form className="bg-[#131C2E]/60 border border-slate-800 rounded-3xl p-8 sm:p-12 text-left">
              <div className="mb-6">
                <input 
                  type="email" 
                  placeholder="Enter your email address" 
                  className="w-full bg-[#0B1220] border border-slate-700 rounded-lg px-4 py-4 text-white focus:outline-none focus:border-[#E8B84B] transition-colors"
                  required
                />
              </div>
              
              <div className="mb-8">
                <p className="text-white font-bold mb-4 text-sm">Industry interest:</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                  {[
                    "Manufacturing", "Agriculture", "Food and beverage", "Tea", 
                    "Logistics", "Energy and environment", "Infrastructure and facilities", 
                    "Product development", "General engineering"
                  ].map((interest, idx) => (
                    <label key={idx} className="flex items-center space-x-3 cursor-pointer">
                      <input type="checkbox" className="form-checkbox text-[#E8B84B] rounded bg-[#0B1220] border-slate-700" />
                      <span className="text-slate-300 text-sm">{interest}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-6 pt-6 border-t border-slate-800">
                <button type="submit" className="w-full sm:w-auto px-10 py-4 bg-[#E8B84B] hover:bg-[#d4a643] text-[#0B1220] font-bold rounded-lg transition-colors">
                  Subscribe
                </button>
                <label className="flex items-start space-x-3 cursor-pointer">
                  <input required type="checkbox" className="form-checkbox text-[#E8B84B] rounded bg-[#0B1220] border-slate-700 mt-1 shrink-0" />
                  <span className="text-slate-400 text-xs leading-relaxed">
                    I agree to receive relevant updates from Sanota. I understand that I may unsubscribe at any time. <Link href="/privacy" className="text-[#2E5EAA] hover:text-white">View Privacy Notice</Link>
                  </span>
                </label>
              </div>
            </form>
          </div>
        </section>

        {/* Need Help & Final CTA */}
        <section className="py-24 bg-[#131C2E] border-t border-slate-800">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              
              <div>
                <h2 className="text-[#E8B84B] font-bold tracking-widest uppercase text-sm mb-4">Need Help With a Similar Requirement?</h2>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">Turn Information into Action</h3>
                <p className="text-slate-300 text-lg leading-relaxed mb-6">
                  If an insight relates to a challenge in your organization, tell us about the current situation and what you want to achieve.
                </p>
                <p className="text-slate-400 text-lg leading-relaxed mb-8">
                  Sanota will help identify the appropriate engineering, automation, IoT, software, modernization or maintenance pathway.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/tell-us-your-challenge" className="px-6 py-3 bg-[#E8B84B] hover:bg-[#d4a643] text-[#0B1220] font-bold rounded-lg transition-colors flex items-center justify-center">
                    Tell Us Your Challenge <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                  <Link href="/contact" className="px-6 py-3 bg-[#0B1220] hover:bg-slate-800 border border-slate-700 text-white font-bold rounded-lg transition-colors flex items-center justify-center">
                    Request Engineering Consultation
                  </Link>
                </div>
              </div>

              <div className="bg-[#0B1220] border border-slate-800 rounded-3xl p-10 text-center">
                <h2 className="text-2xl font-bold text-white mb-6">Have an Engineering Question?</h2>
                <p className="text-slate-400 mb-10">Start with the challenge, concern or opportunity. Sanota will help you determine the appropriate next step.</p>
                <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
                  <Link href="/contact" className="px-6 py-3 bg-[#131C2E] hover:bg-slate-800 border border-slate-700 text-white font-bold rounded-lg transition-colors flex items-center justify-center">
                    Ask Sanota
                  </Link>
                  <Link href="/media" className="px-6 py-3 bg-[#131C2E] hover:bg-slate-800 border border-slate-700 text-white font-bold rounded-lg transition-colors flex items-center justify-center">
                    Explore Completed Work
                  </Link>
                </div>
                <p className="text-slate-500 text-sm italic">Practical knowledge for better engineering decisions.</p>
              </div>

            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
