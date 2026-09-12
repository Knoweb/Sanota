"use client";

import { useState, useEffect } from "react";
import { CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const industryFilters = ["All Projects", "Manufacturing", "Agriculture", "Food & Beverage", "Tea", "Logistics", "Energy", "Environment", "Infrastructure", "Healthcare", "Research & Development"];
const solutionFilters = ["All Solutions", "Machinery", "Automation", "IoT", "Software", "Modernization", "Product Development", "Project Execution", "AMC"];

const projectCriteria = [
  "The industry or operating environment",
  "The product, machinery or system involved",
  "The technologies integrated",
  "The operational outcome",
  "The client’s requirement",
  "The services provided by Sanota",
  "Sanota's role in implementation",
  "Related photographs or videos"
];

// Dummy data injected if database is empty so the client can preview the design
const dummyProjects: any = [
  {
    id: 991,
    attributes: {
      title: 'Automated Tea Withering System',
      description: 'A fully automated, IoT connected tea withering system designed to optimize moisture loss and reduce energy consumption in large-scale tea factories.',
      industry: 'Tea',
      solution: 'Automation',
      clientRequirement: 'Reduce energy waste and standardize withering quality.',
      sanotaRole: 'Full design, integration, and software development.',
      outcome: '30% reduction in energy usage and consistent leaf quality.',
      technologies: 'Siemens PLC, Custom IoT Sensors, Node.js Dashboard',
      linkText: 'Explore Tea Automation',
      coverImage: { data: null }
    }
  },
  {
    id: 992,
    attributes: {
      title: 'Smart Conveyor Routing Network',
      description: 'High-speed automated logistics conveyor system featuring RFID tracking and automated sorting for a major distribution center.',
      industry: 'Logistics',
      solution: 'Machinery',
      clientRequirement: 'Increase sorting throughput by 50%.',
      sanotaRole: 'Mechanical design and PLC programming.',
      outcome: 'Sorting speed increased to 5000 units/hour.',
      technologies: 'RFID, Scanners, Actuators',
      linkText: 'Explore Logistics Machinery',
      coverImage: { data: null }
    }
  }
];

interface Project {
  id: number;
  attributes: {
    title: string;
    description: string;
    industry: string;
    solution: string;
    clientRequirement: string;
    sanotaRole: string;
    outcome: string;
    technologies: string;
    linkText: string;
    coverImage: {
      data: {
        attributes: {
          url: string;
        }
      } | null;
    }
  }
}

export default function CompletedWorkSection() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeIndustry, setActiveIndustry] = useState("All Projects");
  const [activeSolution, setActiveSolution] = useState("All Solutions");

  useEffect(() => {
    async function fetchProjects() {
      try {
        const res = await fetch("http://localhost:1337/api/projects?populate=*");
        const data = await res.json();
        
        if (data && data.data && data.data.length > 0) {
          setProjects(data.data);
        } else {
          // Use dummy projects if DB is empty
          setProjects(dummyProjects);
        }
      } catch (error) {
        console.error("Error fetching projects:", error);
        setProjects(dummyProjects); // Fallback on network error too
      } finally {
        setLoading(false);
      }
    }
    fetchProjects();
  }, []);

  // Filter separately!
  const industryProjects = projects.filter((project) => activeIndustry === "All Projects" || project.attributes.industry === activeIndustry);
  const solutionProjects = projects.filter((project) => activeSolution === "All Solutions" || project.attributes.solution === activeSolution);

  const renderProjectGrid = (gridProjects: Project[]) => (
    gridProjects.length > 0 ? (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        {gridProjects.map((project) => (
          <Link key={project.id} href="#" className="group relative h-[320px] rounded-[2rem] overflow-hidden block border border-slate-800">
            {/* Background Image */}
            {project.attributes.coverImage?.data?.attributes?.url ? (
              <Image 
                src={`http://localhost:1337${project.attributes.coverImage.data.attributes.url}`}
                alt={project.attributes.title} 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-110" 
              />
            ) : (
              <div className="absolute inset-0 bg-gradient-to-br from-[#131C2E] to-[#0B1220]" />
            )}
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#050B14] via-[#0B1220]/80 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-500" />
            
            {/* Content */}
            <div className="absolute inset-0 p-8 flex flex-col justify-end z-10">
              <h4 className="text-xl font-bold text-white mb-2 group-hover:text-[#E8B84B] transition-colors duration-500">{project.attributes.title}</h4>
              <p className="text-slate-300 text-sm leading-relaxed mb-4 line-clamp-2 group-hover:text-slate-200 transition-colors duration-500">{project.attributes.description}</p>
              
              <div className="flex gap-2 mb-4">
                {project.attributes.industry && (
                  <span className="px-2 py-1 bg-[#131C2E]/80 border border-slate-700 rounded text-[10px] text-slate-300 uppercase tracking-wider">{project.attributes.industry}</span>
                )}
                {project.attributes.solution && (
                  <span className="px-2 py-1 bg-[#131C2E]/80 border border-slate-700 rounded text-[10px] text-[#E8B84B] uppercase tracking-wider">{project.attributes.solution}</span>
                )}
              </div>

              {/* Animated Link */}
              <div className="inline-flex items-center text-xs font-bold text-[#E8B84B] uppercase tracking-wider opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                {project.attributes.linkText || "Explore Project"} <ArrowRight className="ml-2 w-4 h-4" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    ) : (
      <div className="text-center py-12 bg-[#131C2E]/30 rounded-2xl border border-slate-800 mt-8">
        <p className="text-slate-400 mb-4">No projects found matching this filter.</p>
      </div>
    )
  );

  return (
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

        {/* SECTION 1: Industry Filters */}
        <div className="mb-20">
          <div className="mb-4">
            <h4 className="text-slate-500 font-bold text-xs uppercase tracking-widest mb-4">Filter by Industry</h4>
            <div className="flex flex-wrap gap-2">
              {industryFilters.map((filter, idx) => (
                <button 
                  key={idx} 
                  onClick={() => setActiveIndustry(filter)}
                  className={`px-4 py-2 rounded-full text-xs font-bold transition-colors ${activeIndustry === filter ? 'bg-[#E8B84B] text-[#0B1220]' : 'bg-[#131C2E] border border-slate-700 text-slate-300 hover:text-white'}`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>
          {/* Grid showing ONLY industry filtered projects */}
          {loading ? <div className="text-center py-12 text-slate-400">Loading projects...</div> : renderProjectGrid(industryProjects)}
        </div>

        {/* SECTION 2: Solution Filters */}
        <div className="mb-12 pt-16 border-t border-slate-800/50">
          <div className="mb-4">
            <h4 className="text-slate-500 font-bold text-xs uppercase tracking-widest mb-4">Filter by Solution</h4>
            <div className="flex flex-wrap gap-2">
              {solutionFilters.map((filter, idx) => (
                <button 
                  key={idx} 
                  onClick={() => setActiveSolution(filter)}
                  className={`px-4 py-2 rounded-full text-xs font-bold transition-colors ${activeSolution === filter ? 'bg-[#E8B84B] text-[#0B1220]' : 'bg-[#131C2E] border border-slate-700 text-slate-300 hover:text-white'}`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>
          {/* Grid showing ONLY solution filtered projects */}
          {loading ? <div className="text-center py-12 text-slate-400">Loading projects...</div> : renderProjectGrid(solutionProjects)}
        </div>

      </div>
    </section>
  );
}
