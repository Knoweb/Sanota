"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Search } from "lucide-react";

export default function VisitorPathways() {
  return (
    <section className="relative py-24 bg-[#0B1220]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#131C2E] to-[#0B1220] border border-slate-800 p-10 flex flex-col items-start justify-between"
          >
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
              <Search className="w-32 h-32 text-[#E8B84B]" />
            </div>
            
            <div className="relative z-10 mb-12">
              <h2 className="text-3xl font-black text-white mb-4">I Need to Solve a Problem</h2>
              <div className="text-slate-400 text-[14px] leading-relaxed max-w-lg space-y-4 mb-6">
                <p>You do not need to arrive with a completed technical specification.</p>
                <p>Tell us about the present situation, what is not working and what you need to achieve.</p>
                <p>Sanota will help identify the appropriate combination of engineering, automation, digital technology and technical support.</p>
              </div>
              <p className="text-slate-300 font-bold mb-3">We can help when you need to:</p>
              <ul className="text-slate-400 text-sm space-y-2 list-disc pl-5">
                <li>Improve a production process</li>
                <li>Automate a manual operation</li>
                <li>Modernize an existing machine</li>
                <li>Develop custom machinery</li>
                <li>Introduce monitoring or tracking</li>
                <li>Connect equipment with IoT or software</li>
                <li>Develop a new product or prototype</li>
                <li>Build a processing or production system</li>
                <li>Arrange maintenance or an AMC</li>
                <li>Understand where to begin</li>
              </ul>
            </div>
            
            <Link
              href="/tell-us-your-challenge"
              className="relative z-10 mt-auto inline-flex items-center px-6 py-3 bg-[#E8B84B] hover:bg-[#d4a643] text-[#0B1220] font-bold rounded-lg transition-colors group-hover:shadow-[0_0_20px_rgba(232,184,75,0.3)]"
            >
              Tell Us Your Challenge
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="group relative overflow-hidden rounded-3xl bg-gradient-to-bl from-[#1c2c47] to-[#0B1220] border border-slate-800 p-10 flex flex-col items-start justify-between"
          >
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
              <Search className="w-32 h-32 text-[#2E5EAA]" />
            </div>
            
            <div className="relative z-10 mb-12">
              <h2 className="text-3xl font-black text-white mb-4">I Want to Explore Sanota</h2>
              <div className="text-slate-400 text-[14px] leading-relaxed max-w-lg mb-6">
                <p>Discover the machinery, systems, products and integrated solutions Sanota has developed across industries.</p>
              </div>
              <p className="text-slate-300 font-bold mb-3">Explore:</p>
              <ul className="text-slate-400 text-sm space-y-2 list-disc pl-5">
                <li>Completed work</li>
                <li>Project stories</li>
                <li>Machinery demonstrations</li>
                <li>Products and systems</li>
                <li>Videos</li>
                <li>Photo gallery</li>
                <li>Innovation and partnerships</li>
                <li>News and activities</li>
              </ul>
            </div>
            
            <Link
              href="/media"
              className="relative z-10 mt-auto inline-flex items-center px-6 py-3 bg-[#2E5EAA] hover:bg-[#254d8c] text-white font-bold rounded-lg transition-colors group-hover:shadow-[0_0_20px_rgba(46,94,170,0.3)]"
            >
              See Sanota in Action
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
