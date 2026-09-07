"use client";

import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { MapPin, Phone, Mail, Send } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen bg-transparent">
      <Header />
      <main className="flex-grow pt-24">
        
        {/* Hero Section */}
        <section className="relative py-32 overflow-hidden border-b border-slate-800">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/contact_hero_bg.jpg')" }}
          />
          <div className="absolute inset-0 bg-[#050B14]/45" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050B14]/20 to-[#050B14]/70" />
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl sm:text-6xl font-black text-white tracking-tight mb-6"
            >
              Contact <span className="text-[#E8B84B]">Sanota</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-slate-300 max-w-2xl mx-auto font-semibold mb-6"
            >
              Discuss Your Engineering Requirement
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-slate-400 max-w-3xl mx-auto"
            >
              Our engineering team is available to discuss your operational challenges, machinery requirements or automation needs.
            </motion.p>
          </div>
        </section>

        {/* Contact Content */}
        <section className="py-24 bg-[#0B1220]">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              
              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold text-white mb-8">Contact Information</h2>
                
                <div className="space-y-8">
                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-xl bg-[#131C2E] border border-slate-700 flex items-center justify-center mr-6 shrink-0 mt-1">
                      <MapPin className="w-6 h-6 text-[#E8B84B]" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white mb-2">Address</h4>
                      <p className="text-slate-400 leading-relaxed">
                        69, Panagoda<br />
                        Homagama<br />
                        Sri Lanka
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-xl bg-[#131C2E] border border-slate-700 flex items-center justify-center mr-6 shrink-0 mt-1">
                      <Phone className="w-6 h-6 text-[#2E5EAA]" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white mb-2">Phone</h4>
                      <p className="text-slate-400 leading-relaxed">
                        +94 11 123 4567<br />
                        +94 77 123 4567
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-xl bg-[#131C2E] border border-slate-700 flex items-center justify-center mr-6 shrink-0 mt-1">
                      <Mail className="w-6 h-6 text-[#E8B84B]" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white mb-2">Email</h4>
                      <p className="text-slate-400 leading-relaxed">
                        contact@sanota.com<br />
                        engineering@sanota.com
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-[#131C2E] rounded-3xl p-8 sm:p-12 border border-slate-800"
              >
                <h3 className="text-2xl font-bold text-white mb-8">Send a Message</h3>
                
                <form className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-slate-300">Name</label>
                      <input 
                        type="text" 
                        className="w-full bg-[#0B1220] border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#E8B84B] transition-colors"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-slate-300">Company</label>
                      <input 
                        type="text" 
                        className="w-full bg-[#0B1220] border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#E8B84B] transition-colors"
                        placeholder="Company Name"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-slate-300">Email</label>
                      <input 
                        type="email" 
                        className="w-full bg-[#0B1220] border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#E8B84B] transition-colors"
                        placeholder="john@example.com"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-slate-300">Phone Number</label>
                      <input 
                        type="tel" 
                        className="w-full bg-[#0B1220] border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#E8B84B] transition-colors"
                        placeholder="+94 77 123 4567"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-300">Requirement Summary</label>
                    <textarea 
                      rows={5}
                      className="w-full bg-[#0B1220] border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#E8B84B] transition-colors resize-none"
                      placeholder="Please briefly describe your operational challenge or requirement..."
                    ></textarea>
                  </div>

                  <button 
                    type="button"
                    className="w-full flex items-center justify-center px-8 py-4 bg-[#E8B84B] hover:bg-[#d4a643] text-[#0B1220] text-[15px] font-bold rounded-lg transition-colors uppercase tracking-wider"
                  >
                    Send Message <Send className="w-5 h-5 ml-3" />
                  </button>
                </form>
              </motion.div>

            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
