"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import {
  ArrowRight, Phone, Mail, MapPin, CheckCircle2, AlertTriangle,
  Send, Upload, Info, MessageSquare, Briefcase, Cog, Globe, PhoneCall
} from "lucide-react";

const contactOptions = [
  { title: "Engineering & Project Enquiries", desc: "Contact us about machinery, automation, new systems, engineering design, product development, modernization or integrated project requirements.", button: "Submit an Engineering Enquiry", icon: Cog },
  { title: "AMC & Maintenance Enquiries", desc: "Request an assessment for preventive maintenance, technical support or an Annual Maintenance Contract for Sanota-built or eligible third-party systems.", button: "Request an AMC Assessment", icon: Briefcase },
  { title: "General Enquiries", desc: "Contact Sanota regarding company information, administration or enquiries that do not relate to a specific technical requirement.", button: "Send a General Enquiry", icon: Globe },
  { title: "Partnership & Supplier Enquiries", desc: "Contact us regarding technology partnerships, joint development, supplier opportunities, distribution or project collaboration.", button: "Submit a Partnership Enquiry", icon: MessageSquare },
  { title: "Media & Publication Enquiries", desc: "Contact us about exhibitions, interviews, technical articles, project features, media use or company activities.", button: "Submit a Media Enquiry", icon: Info },
];

const directContact = {
  telephone: [
    { label: "Main office & Technical enquiries", value: "+94 740 70 99 89" },
  ],
  email: [
    { label: "General enquiries", value: "info@sanotaglobal.com" },
    { label: "Engineering and project enquiries", value: "engineering@sanotaglobal.com" },
    { label: "AMC and maintenance", value: "support@sanotaglobal.com" },
    { label: "Partnership and media enquiries", value: "partners@sanotaglobal.com" },
  ],
};

const whatHappensNext = [
  { step: "1", title: "We Receive Your Enquiry", desc: "Your message is recorded and assigned a reference number." },
  { step: "2", title: "We Review the Requirement", desc: "The enquiry is reviewed to identify the relevant industry, service and technical capability." },
  { step: "3", title: "We Direct It to the Right Team", desc: "The requirement is assigned to the appropriate engineering, automation, IoT, software or maintenance team." },
  { step: "4", title: "We Contact You", desc: "A representative contacts you to clarify the requirement and agree on the next step." },
  { step: "5", title: "We Determine the Way Forward", desc: "The next step may involve a discussion, document review, site visit or technical assessment." },
];

const inputClass = "w-full bg-[#050B14] border border-slate-700/60 rounded-xl px-4 py-3.5 text-white placeholder-slate-600 focus:outline-none focus:border-[#E8B84B]/60 focus:bg-[#0A1525] transition-all duration-200 text-sm";

export default function ContactPage() {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    setTimeout(() => setFormStatus('success'), 1500);
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#050B14]">
      <Header />
      <main className="flex-grow">

        {/* ── Hero ── */}
        <section className="relative pt-32 lg:pt-48 pb-20 lg:pb-32 overflow-hidden border-b border-slate-800/60 min-h-[65vh] flex flex-col justify-center">
          <div className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0" style={{ backgroundImage: "url('/contact_hero_bg.jpg')" }} />
          <div className="absolute inset-0 bg-[#050B14]/65 z-0" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#050B14]/30 via-transparent to-[#050B14] z-0" />

          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-xs font-black text-[#E8B84B] uppercase tracking-[0.3em] mb-5"
            >
              Contact Sanota
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 }}
              className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight mb-6 leading-tight max-w-5xl mx-auto"
            >
              Let&apos;s Discuss Your{" "}
              <span className="text-[#E8B84B]">Requirement</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto mb-4 font-medium leading-relaxed"
            >
              Contact Sanota about an operational challenge, engineering project, new system, modernization requirement or long-term technical support.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="text-base text-slate-400 max-w-3xl mx-auto mb-10 leading-relaxed"
            >
              You do not need to prepare a complete technical specification. Tell us what is happening, what needs improvement or what you want to develop.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-col sm:flex-row justify-center gap-4 mb-10"
            >
              <Link
                href="/tell-us-your-challenge"
                className="px-8 py-4 bg-[#E8B84B] hover:bg-[#d4a643] text-[#0B1220] font-black rounded-xl transition-all duration-300 flex items-center justify-center shadow-lg shadow-[#E8B84B]/20 hover:shadow-[#E8B84B]/40 hover:-translate-y-0.5 group"
              >
                Tell Us Your Challenge <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="#contact-form"
                className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-black rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300 flex items-center justify-center backdrop-blur-sm"
              >
                Request a Call <PhoneCall className="ml-2 w-5 h-5" />
              </a>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.25 }}
              className="text-[#E8B84B]/70 font-bold text-xs tracking-widest uppercase"
            >
              Engineering <span className="mx-2 text-slate-700">•</span> Automation <span className="mx-2 text-slate-700">•</span> IoT <span className="mx-2 text-slate-700">•</span> Software <span className="mx-2 text-slate-700">•</span> Project Execution <span className="mx-2 text-slate-700">•</span> AMC
            </motion.p>
          </div>
        </section>

        {/* ── Technical Enquiry Callout ── */}
        <section className="py-14 bg-[#131C2E] border-y border-[#E8B84B]/20">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="lg:w-2/3">
                <h3 className="text-2xl md:text-3xl font-black text-white mb-4">Have a Technical or Operational Challenge?</h3>
                <p className="text-slate-300 text-lg font-medium leading-relaxed mb-4">
                  For engineering requirements, the fastest way to provide necessary information is through the guided <strong className="text-[#E8B84B]">Tell Us Your Challenge</strong> form. It helps you explain:
                </p>
                <div className="flex flex-wrap gap-x-6 gap-y-2 text-slate-200 font-semibold">
                  {["What is happening now", "What is not working", "What you want to improve or develop"].map((item, i) => (
                    <span key={i} className="flex items-center">
                      <CheckCircle2 className="w-4 h-4 mr-2 shrink-0 text-[#E8B84B]" /> {item}
                    </span>
                  ))}
                </div>
              </div>
              <div className="shrink-0">
                <Link
                  href="/tell-us-your-challenge"
                  className="inline-flex items-center px-8 py-4 bg-[#E8B84B] hover:bg-[#d4a643] text-[#0B1220] font-black rounded-xl transition-all duration-300 whitespace-nowrap group shadow-lg shadow-[#E8B84B]/20 hover:shadow-[#E8B84B]/40 hover:-translate-y-0.5"
                >
                  Tell Us Your Challenge <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── Contact Options ── */}
        <section className="py-24 bg-[#0B1220] border-b border-slate-800/60">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <p className="text-xs font-black text-[#E8B84B] uppercase tracking-[0.3em] mb-4">Contact Options</p>
              <h2 className="text-3xl md:text-5xl font-black text-white">Choose the Right Contact Route</h2>
            </div>

            {/* Top 3 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              {contactOptions.slice(0, 3).map((opt, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="group bg-[#131C2E] border border-slate-800 rounded-2xl p-8 flex flex-col hover:border-[#E8B84B]/40 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(232,184,75,0.08)] transition-all duration-300"
                >
                  <div className="w-14 h-14 rounded-2xl bg-[#050B14] border border-slate-700 flex items-center justify-center mb-6 group-hover:border-[#E8B84B]/40 transition-colors">
                    <opt.icon className="w-7 h-7 text-[#E8B84B]" />
                  </div>
                  <h4 className="text-xl font-black text-white mb-3">{opt.title}</h4>
                  <p className="text-slate-400 text-sm leading-relaxed mb-8 flex-grow">{opt.desc}</p>
                  <a href="#contact-form" className="inline-flex items-center text-sm font-bold text-[#E8B84B] hover:text-white transition-colors mt-auto group/link">
                    {opt.button} <ArrowRight className="ml-2 w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </a>
                </motion.div>
              ))}
            </div>

            {/* Bottom 2 centered */}
            <div className="flex flex-col md:flex-row justify-center gap-6">
              {contactOptions.slice(3).map((opt, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: (idx + 3) * 0.1 }}
                  className="group bg-[#131C2E] border border-slate-800 rounded-2xl p-8 flex flex-col hover:border-[#E8B84B]/40 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(232,184,75,0.08)] transition-all duration-300 w-full md:max-w-[calc(33.333%+0.75rem)]"
                >
                  <div className="w-14 h-14 rounded-2xl bg-[#050B14] border border-slate-700 flex items-center justify-center mb-6 group-hover:border-[#E8B84B]/40 transition-colors">
                    <opt.icon className="w-7 h-7 text-[#E8B84B]" />
                  </div>
                  <h4 className="text-xl font-black text-white mb-3">{opt.title}</h4>
                  <p className="text-slate-400 text-sm leading-relaxed mb-8 flex-grow">{opt.desc}</p>
                  <a href="#contact-form" className="inline-flex items-center text-sm font-bold text-[#E8B84B] hover:text-white transition-colors mt-auto group/link">
                    {opt.button} <ArrowRight className="ml-2 w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Direct Contact Info ── */}
        <section className="py-24 bg-[#050B14] border-b border-slate-800/60">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <p className="text-xs font-black text-[#E8B84B] uppercase tracking-[0.3em] mb-4">Direct Contact</p>
              <h2 className="text-3xl md:text-5xl font-black text-white">Contact Sanota Directly</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Telephone */}
              <div className="bg-[#0B1220] border border-slate-800 rounded-2xl p-8 hover:border-[#E8B84B]/30 transition-colors group">
                <div className="w-12 h-12 rounded-xl bg-[#050B14] border border-slate-700 flex items-center justify-center mb-6 group-hover:border-[#E8B84B]/40 transition-colors">
                  <Phone className="w-6 h-6 text-[#E8B84B]" />
                </div>
                <h4 className="text-xl font-black text-white mb-6">Telephone</h4>
                <div className="space-y-5">
                  {directContact.telephone.map((item, idx) => (
                    <div key={idx}>
                      <span className="block text-slate-500 text-xs font-black uppercase tracking-widest mb-1">{item.label}</span>
                      <a href={`tel:${item.value.replace(/\s+/g, '')}`} className="text-slate-200 hover:text-[#E8B84B] transition-colors font-medium">{item.value}</a>
                    </div>
                  ))}
                </div>
              </div>

              {/* Email */}
              <div className="bg-[#0B1220] border border-slate-800 rounded-2xl p-8 hover:border-[#E8B84B]/30 transition-colors group">
                <div className="w-12 h-12 rounded-xl bg-[#050B14] border border-slate-700 flex items-center justify-center mb-6 group-hover:border-[#E8B84B]/40 transition-colors">
                  <Mail className="w-6 h-6 text-[#E8B84B]" />
                </div>
                <h4 className="text-xl font-black text-white mb-6">Email</h4>
                <div className="space-y-5">
                  {directContact.email.map((item, idx) => (
                    <div key={idx}>
                      <span className="block text-slate-500 text-xs font-black uppercase tracking-widest mb-1">{item.label}</span>
                      <a href={`mailto:${item.value}`} className="text-[#E8B84B] hover:text-white transition-colors break-all text-sm font-medium">{item.value}</a>
                    </div>
                  ))}
                </div>
              </div>

              {/* Office */}
              <div className="bg-[#0B1220] border border-slate-800 rounded-2xl p-8 hover:border-[#E8B84B]/30 transition-colors group flex flex-col">
                <div className="w-12 h-12 rounded-xl bg-[#050B14] border border-slate-700 flex items-center justify-center mb-6 group-hover:border-[#E8B84B]/40 transition-colors">
                  <MapPin className="w-6 h-6 text-[#E8B84B]" />
                </div>
                <h4 className="text-xl font-black text-white mb-6">Office Address</h4>
                <p className="text-slate-300 leading-relaxed mb-4 font-medium">
                  Sanota (Pvt) Ltd<br />
                  No 16, Wewelwala Road<br />
                  Bataganwila, Galle.
                </p>
                <div className="mb-8">
                  <span className="block text-slate-500 text-xs font-black uppercase tracking-widest mb-1">Business Hours</span>
                  <p className="text-slate-300 font-medium">Mon–Fri: 8:30 AM – 5:30 PM</p>
                </div>
                <div className="mt-auto space-y-3">
                  <button className="w-full py-3 bg-[#E8B84B] hover:bg-[#d4a643] text-[#0B1220] font-black rounded-xl transition-colors text-sm">
                    Get Directions
                  </button>
                  <button className="w-full py-3 bg-[#050B14] hover:bg-slate-800 border border-slate-700 text-white font-bold rounded-xl transition-colors text-sm">
                    Save Contact Details
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Urgent Enquiries ── */}
        <section className="py-16 bg-[#0D0608] border-b border-red-900/40">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-10 items-start">
              <div className="w-16 h-16 rounded-full bg-red-900/30 border border-red-500/40 flex items-center justify-center shrink-0">
                <AlertTriangle className="w-8 h-8 text-red-400" />
              </div>
              <div className="flex-grow">
                <h3 className="text-2xl md:text-3xl font-black text-white mb-4">Is an Operational System Currently Affected?</h3>
                <p className="text-slate-300 text-lg leading-relaxed mb-6">
                  If your enquiry relates to a current machinery stoppage, production interruption or time-sensitive technical issue, clearly mark it as{" "}
                  <strong className="text-white">Urgent Technical Support</strong>.
                </p>
                <p className="text-slate-400 font-semibold mb-4">Please provide:</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mb-8">
                  {["Your name and company", "A telephone number", "Site location", "Equipment or system involved", "Brief description of the issue", "Whether the equipment is currently operating", "Relevant photographs or error information"].map((item, idx) => (
                    <div key={idx} className="flex items-start">
                      <div className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 mr-3 shrink-0" />
                      <span className="text-slate-300 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="flex flex-col sm:flex-row gap-4 mb-6">
                  <button className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-black rounded-xl transition-colors">
                    Submit Urgent Technical Enquiry
                  </button>
                  <a href="tel:+94740709989" className="px-6 py-3 bg-transparent hover:bg-red-900/30 border border-red-500/40 text-white font-black rounded-xl transition-colors flex items-center justify-center">
                    Call Technical Support <Phone className="w-4 h-4 ml-2" />
                  </a>
                </div>
                <div className="bg-red-900/20 border border-red-500/25 rounded-xl p-5">
                  <p className="text-red-300 text-sm leading-relaxed mb-2">
                    <strong className="font-bold">Important notice:</strong> Urgent-enquiry submission does not guarantee immediate attendance or a specific response time.
                  </p>
                  <p className="text-red-300/80 text-sm leading-relaxed">
                    For safety-related situations, follow your organization&apos;s approved safety, isolation and emergency procedures before seeking technical assistance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Contact Form + Sidebar ── */}
        <section id="contact-form" className="py-24 bg-[#0B1220] border-b border-slate-800/60">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 xl:gap-16">

              {/* Main Form */}
              <div className="lg:col-span-2">
                <div className="mb-10">
                  <p className="text-xs font-black text-[#E8B84B] uppercase tracking-[0.3em] mb-4">Contact Form</p>
                  <h2 className="text-3xl md:text-4xl font-black text-white mb-4">Send Us a Message</h2>
                  <p className="text-slate-400 text-lg">Complete the form and select the enquiry type that best matches your requirement.</p>
                </div>

                <AnimatePresence mode="wait">
                  {formStatus === 'success' ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="bg-[#131C2E] border border-green-500/40 rounded-3xl p-12 text-center"
                    >
                      <div className="w-20 h-20 bg-green-500/15 rounded-full flex items-center justify-center mx-auto mb-6">
                        <CheckCircle2 className="w-10 h-10 text-green-400" />
                      </div>
                      <h3 className="text-2xl font-black text-white mb-4">Thank You for Contacting Sanota</h3>
                      <p className="text-slate-300 text-lg mb-3">Your enquiry has been received successfully.</p>
                      <p className="text-[#E8B84B] font-mono mb-8">Reference: ENQ-2023-0894</p>
                      <p className="text-slate-400 mb-8 max-w-lg mx-auto">
                        The Sanota team will review the information and direct it to the appropriate department. A representative will contact you using the details provided.
                      </p>
                      <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link href="/" className="px-6 py-3 bg-[#E8B84B] text-[#0B1220] font-black rounded-xl hover:bg-[#d4a643] transition-colors">Return to Homepage</Link>
                        <Link href="/media" className="px-6 py-3 bg-[#050B14] text-white border border-slate-700 font-black rounded-xl hover:bg-slate-800 transition-colors">Explore Sanota&apos;s Work</Link>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.form
                      initial={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onSubmit={handleSubmit}
                      className="bg-[#131C2E] border border-slate-800 rounded-3xl p-8 sm:p-10 space-y-10"
                    >
                      {/* Your Details */}
                      <div>
                        <h4 className="text-lg font-black text-white mb-1 pb-4 border-b border-slate-700/60">Your Details</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-6">
                          <div className="space-y-2">
                            <label className="text-sm font-bold text-slate-300">Full name <span className="text-red-400">*</span></label>
                            <input required type="text" className={inputClass} placeholder="Your full name" />
                          </div>
                          <div className="space-y-2">
                            <label className="text-sm font-bold text-slate-300">Company or organization <span className="text-red-400">*</span></label>
                            <input required type="text" className={inputClass} placeholder="Your company" />
                          </div>
                          <div className="space-y-2">
                            <label className="text-sm font-bold text-slate-300">Job title</label>
                            <input type="text" className={inputClass} placeholder="Your role" />
                          </div>
                          <div className="space-y-2">
                            <label className="text-sm font-bold text-slate-300">Country</label>
                            <input type="text" className={inputClass} defaultValue="Sri Lanka" />
                          </div>
                          <div className="space-y-2">
                            <label className="text-sm font-bold text-slate-300">Email address <span className="text-red-400">*</span></label>
                            <input required type="email" className={inputClass} placeholder="you@company.com" />
                          </div>
                          <div className="space-y-2">
                            <label className="text-sm font-bold text-slate-300">Telephone number <span className="text-red-400">*</span></label>
                            <input required type="tel" className={inputClass} placeholder="+94 77 000 0000" />
                          </div>
                        </div>
                      </div>

                      {/* Enquiry Details */}
                      <div>
                        <h4 className="text-lg font-black text-white mb-1 pb-4 border-b border-slate-700/60">Enquiry Details</h4>
                        <div className="space-y-5 mt-6">
                          <div className="space-y-2">
                            <label className="text-sm font-bold text-slate-300">Type of enquiry <span className="text-red-400">*</span></label>
                            <select required className={inputClass + " appearance-none cursor-pointer"}>
                              <option value="">Select an option</option>
                              <option>Engineering or project requirement</option>
                              <option>Machinery or automation</option>
                              <option>IoT or software</option>
                              <option>Product development</option>
                              <option>Retrofit or modernization</option>
                              <option>AMC or maintenance</option>
                              <option>Training</option>
                              <option>Partnership or supplier enquiry</option>
                              <option>Media enquiry</option>
                              <option>General enquiry</option>
                              <option>Other</option>
                            </select>
                          </div>
                          <div className="space-y-2">
                            <label className="text-sm font-bold text-slate-300">Subject <span className="text-red-400">*</span></label>
                            <input required type="text" className={inputClass} placeholder="Brief subject of your enquiry" />
                          </div>
                          <div className="space-y-2">
                            <label className="text-sm font-bold text-slate-300">Your message <span className="text-red-400">*</span></label>
                            <textarea
                              required
                              rows={6}
                              className={inputClass + " resize-none"}
                              placeholder="Briefly explain what is happening, what you need or what you would like to discuss."
                            />
                          </div>
                        </div>
                      </div>

                      {/* Supporting Files */}
                      <div>
                        <h4 className="text-lg font-black text-white mb-1 pb-4 border-b border-slate-700/60">Supporting Files</h4>
                        <div className="mt-6">
                          <p className="text-slate-400 text-sm mb-4">Attach photographs, videos, drawings, equipment details or other relevant documents.</p>
                          <div className="border-2 border-dashed border-slate-700 rounded-2xl p-8 text-center hover:border-[#E8B84B]/50 transition-colors cursor-pointer bg-[#050B14]">
                            <Upload className="w-8 h-8 text-slate-500 mx-auto mb-3" />
                            <p className="text-white font-bold mb-1">Click to Add Files</p>
                            <p className="text-slate-500 text-xs">Maximum file size: 20MB</p>
                          </div>
                          <div className="flex items-start mt-4 bg-[#050B14] p-3 rounded-xl border border-slate-800">
                            <Info className="w-4 h-4 text-[#E8B84B] shrink-0 mt-0.5 mr-2" />
                            <p className="text-slate-400 text-xs">Please do not upload passwords, login details or documents you are not authorized to share.</p>
                          </div>
                        </div>
                      </div>

                      {/* Preferences */}
                      <div>
                        <h4 className="text-lg font-black text-white mb-1 pb-4 border-b border-slate-700/60">Preferences</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-6">
                          <div>
                            <p className="text-sm font-bold text-slate-300 mb-3">Preferred Response Method</p>
                            <div className="space-y-3">
                              {['Telephone call', 'Email', 'Online meeting', 'No preference'].map((opt, idx) => (
                                <label key={idx} className="flex items-center space-x-3 cursor-pointer group">
                                  <input type="radio" name="responseMethod" className="w-4 h-4 accent-[#E8B84B]" />
                                  <span className="text-slate-300 text-sm group-hover:text-white transition-colors">{opt}</span>
                                </label>
                              ))}
                            </div>
                          </div>
                          <div>
                            <p className="text-sm font-bold text-slate-300 mb-3">Preferred Contact Time</p>
                            <div className="space-y-3">
                              {['Morning', 'Afternoon', 'Any time during business hours'].map((opt, idx) => (
                                <label key={idx} className="flex items-center space-x-3 cursor-pointer group">
                                  <input type="radio" name="contactTime" className="w-4 h-4 accent-[#E8B84B]" />
                                  <span className="text-slate-300 text-sm group-hover:text-white transition-colors">{opt}</span>
                                </label>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Consent */}
                      <div className="space-y-4 pt-2 border-t border-slate-800/60">
                        {[
                          "I confirm that the information submitted is accurate to the best of my knowledge and that I am authorized to share any attached material.",
                          "I understand that submitting this enquiry does not create a contractual obligation. Sanota may request further information before recommending a solution."
                        ].map((text, idx) => (
                          <label key={idx} className="flex items-start space-x-3 cursor-pointer group">
                            <input required type="checkbox" className="w-4 h-4 mt-0.5 accent-[#E8B84B] shrink-0" />
                            <span className="text-slate-400 text-sm leading-relaxed group-hover:text-slate-300 transition-colors">{text}</span>
                          </label>
                        ))}
                      </div>

                      <div className="flex flex-col sm:flex-row gap-4 items-center pt-2">
                        <button
                          disabled={formStatus === 'submitting'}
                          type="submit"
                          className="w-full sm:w-auto px-10 py-4 bg-[#E8B84B] hover:bg-[#d4a643] text-[#0B1220] font-black rounded-xl transition-all duration-300 flex items-center justify-center disabled:opacity-60 shadow-lg shadow-[#E8B84B]/20 hover:shadow-[#E8B84B]/40 hover:-translate-y-0.5 group"
                        >
                          {formStatus === 'submitting' ? 'Submitting…' : 'Submit Enquiry'}
                          {formStatus !== 'submitting' && <Send className="ml-2 w-5 h-5 group-hover:translate-x-0.5 transition-transform" />}
                        </button>
                        <button type="reset" className="w-full sm:w-auto px-8 py-4 bg-transparent hover:bg-slate-800 text-slate-400 hover:text-white font-bold rounded-xl transition-colors">
                          Clear Form
                        </button>
                        <Link href="/privacy" className="sm:ml-auto text-sm text-[#E8B84B]/70 hover:text-[#E8B84B] transition-colors">
                          View Privacy Notice
                        </Link>
                      </div>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>

              {/* Sidebar */}
              <div className="space-y-8">

                {/* Request a Call */}
                <div id="request-call" className="bg-[#131C2E] border border-slate-800 rounded-3xl p-8">
                  <h3 className="text-xl font-black text-white mb-3">Ask Sanota to Contact You</h3>
                  <p className="text-slate-400 text-sm mb-6 leading-relaxed">Provide your details and a representative will contact you to discuss your requirement.</p>
                  <form className="space-y-4">
                    {[
                      { placeholder: "Full name", type: "text" },
                      { placeholder: "Company", type: "text" },
                      { placeholder: "Telephone number", type: "tel" },
                      { placeholder: "Email address", type: "email" },
                    ].map((f, i) => (
                      <input key={i} required type={f.type} placeholder={f.placeholder} className={inputClass} />
                    ))}
                    <select className={inputClass + " appearance-none cursor-pointer"}>
                      <option value="">Preferred contact time</option>
                      <option>Morning</option>
                      <option>Afternoon</option>
                      <option>Any time during business hours</option>
                    </select>
                    <input type="text" placeholder="Brief reason for the call" className={inputClass} />
                    <button type="submit" className="w-full py-4 bg-[#E8B84B] hover:bg-[#d4a643] text-[#0B1220] font-black rounded-xl transition-all duration-300 text-sm shadow-lg shadow-[#E8B84B]/15 hover:-translate-y-0.5 mt-2">
                      Request a Call
                    </button>
                  </form>
                </div>

                {/* What Happens Next */}
                <div className="bg-[#131C2E] border border-slate-800 rounded-3xl p-8">
                  <h3 className="text-xl font-black text-white mb-1">What Happens Next?</h3>
                  <p className="text-slate-500 text-sm mb-8">A clear route from enquiry to action</p>
                  <div className="relative">
                    <div className="absolute left-[15px] top-0 bottom-0 w-px bg-slate-800" />
                    <div className="space-y-6">
                      {whatHappensNext.map((step, idx) => (
                        <div key={idx} className="relative flex items-start gap-4">
                          <div className="w-8 h-8 rounded-full bg-[#050B14] border-2 border-[#E8B84B] flex items-center justify-center shrink-0 z-10">
                            <span className="text-[#E8B84B] text-xs font-black">{step.step}</span>
                          </div>
                          <div className="pt-1">
                            <h4 className="text-white font-bold text-sm mb-1">{step.title}</h4>
                            <p className="text-slate-400 text-xs leading-relaxed">{step.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Visit Sanota */}
                <div className="bg-[#131C2E] border border-slate-800 rounded-3xl p-8">
                  <h3 className="text-xl font-black text-white mb-6">Visit Sanota</h3>
                  <div className="bg-[#050B14] h-44 rounded-2xl border border-slate-700/60 mb-6 overflow-hidden relative group">
                    <iframe 
                      src="https://maps.google.com/maps?q=No%2016,%20Wewelwala%20Road,%20Bataganwila,%20Galle&t=&z=14&ie=UTF8&iwloc=&output=embed" 
                      width="100%" 
                      height="100%" 
                      style={{ border: 0 }} 
                      allowFullScreen 
                      loading="lazy" 
                      referrerPolicy="no-referrer-when-downgrade"
                      className="grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                    ></iframe>
                  </div>
                  <p className="text-slate-300 text-sm mb-2 font-medium">Sanota (Pvt) Ltd<br />No 16, Wewelwala Road, Bataganwila, Galle.</p>
                  <p className="text-slate-500 text-xs italic mb-6">Visits should be arranged in advance.</p>
                  <div className="space-y-3">
                    <button className="w-full py-3 bg-[#050B14] hover:bg-slate-800 border border-slate-700 text-white font-bold rounded-xl transition-colors text-sm">
                      Open in Maps
                    </button>
                    <button className="w-full py-3 bg-transparent hover:bg-slate-800 border border-slate-700/50 text-slate-400 hover:text-white font-bold rounded-xl transition-colors text-sm">
                      Request an Appointment
                    </button>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* ── Social / Connect ── */}
        <section className="py-20 bg-[#050B14] border-b border-slate-800/60">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-xs font-black text-[#E8B84B] uppercase tracking-[0.3em] mb-4">Connect With Sanota</p>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">Follow Our Work</h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
              Stay connected for project stories, product developments, engineering videos and company news.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-10">
              {['LinkedIn', 'Facebook', 'YouTube'].map((social, idx) => (
                <a key={idx} href="#" className="px-8 py-4 bg-[#0B1220] hover:bg-slate-800 text-white font-bold rounded-2xl border border-slate-800 hover:border-[#E8B84B]/30 hover:-translate-y-0.5 transition-all duration-300">
                  {social}
                </a>
              ))}
            </div>
            <Link href="/media" className="inline-flex items-center px-8 py-4 bg-[#E8B84B] hover:bg-[#d4a643] text-[#0B1220] font-black rounded-xl transition-all duration-300 group shadow-lg shadow-[#E8B84B]/15 hover:-translate-y-0.5">
              Visit the Media Centre <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </section>

        {/* ── Final CTA ── */}
        <section className="py-24 bg-[#0B1220]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
              Start With the <span className="text-[#E8B84B]">Requirement</span>
            </h2>
            <p className="text-slate-400 text-lg mb-12 leading-relaxed max-w-3xl mx-auto">
              Whether you need to solve a machinery problem, automate a process, develop a new system or arrange ongoing technical support — Sanota is ready to understand your requirement.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-10">
              <Link href="/tell-us-your-challenge" className="px-10 py-5 bg-[#E8B84B] hover:bg-[#d4a643] text-[#0B1220] font-black rounded-xl transition-all duration-300 flex items-center justify-center shadow-xl shadow-[#E8B84B]/20 hover:shadow-[#E8B84B]/40 hover:-translate-y-1 group">
                Tell Us Your Challenge <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a href="#contact-form" className="px-10 py-5 bg-white/5 hover:bg-white/10 text-white font-black rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300 flex items-center justify-center backdrop-blur-sm">
                Contact Sanota
              </a>
            </div>
            <p className="text-slate-600 text-sm italic">From operational challenge to integrated engineering solution.</p>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
