"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowRight, Phone, Mail, MapPin, CheckCircle2, AlertTriangle, Send, Upload, Info, MessageSquare, Briefcase, Cog, Globe, PhoneCall } from "lucide-react";

const contactOptions = [
  { title: "Engineering & Project Enquiries", desc: "Contact us about machinery, automation, new systems, engineering design, product development, modernization or integrated project requirements.", button: "Submit an Engineering Enquiry", icon: Cog },
  { title: "AMC & Maintenance Enquiries", desc: "Request an assessment for preventive maintenance, technical support or an Annual Maintenance Contract. AMC services may cover Sanota-built systems and eligible third-party machinery, electrical, control, automation, IoT and software systems following an initial assessment.", button: "Request an AMC Assessment", icon: Briefcase },
  { title: "General Enquiries", desc: "Contact Sanota regarding company information, administration or enquiries that do not relate to a specific technical requirement.", button: "Send a General Enquiry", icon: Globe },
  { title: "Partnership & Supplier Enquiries", desc: "Contact us regarding technology partnerships, joint development, supplier opportunities, distribution or project collaboration.", button: "Submit a Partnership Enquiry", icon: MessageSquare },
  { title: "Media & Publication Enquiries", desc: "Contact us about exhibitions, interviews, technical articles, project features, media use or company activities.", button: "Submit a Media Enquiry", icon: Info }
];

const directContact = {
  telephone: [
    { label: "Main office", value: "+94 11 123 4567" },
    { label: "Technical enquiries", value: "+94 77 123 4567" },
    { label: "AMC and maintenance", value: "+94 77 987 6543" }
  ],
  email: [
    { label: "General enquiries", value: "info@sanota.com" },
    { label: "Engineering and project enquiries", value: "engineering@sanota.com" },
    { label: "AMC and maintenance", value: "support@sanota.com" },
    { label: "Partnership and media enquiries", value: "partners@sanota.com" }
  ]
};

const whatHappensNext = [
  { step: "1", title: "We Receive Your Enquiry", desc: "Your message is recorded and assigned a reference number." },
  { step: "2", title: "We Review the Requirement", desc: "The enquiry is reviewed to identify the relevant industry, service and technical capability." },
  { step: "3", title: "We Direct It to the Right Team", desc: "The requirement is assigned to the appropriate engineering, automation, IoT, software, project, maintenance or administrative team." },
  { step: "4", title: "We Contact You", desc: "A representative contacts you to clarify the requirement and agree on the next step." },
  { step: "5", title: "We Determine the Way Forward", desc: "The next step may involve a discussion, document review, online meeting, site visit or technical assessment." }
];

export default function ContactPage() {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    // Simulate API call
    setTimeout(() => {
      setFormStatus('success');
    }, 1500);
  };

  return (
    <div className="flex flex-col min-h-screen bg-transparent">
      <Header />
      <main className="flex-grow">
        
        {/* Hero Section */}
        <section className="relative pt-32 lg:pt-48 pb-20 lg:pb-32 overflow-hidden border-b border-slate-800 bg-transparent min-h-[60vh] lg:min-h-[70vh] flex flex-col justify-center">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
            style={{ backgroundImage: "url('/contact_hero_bg.jpg')" }}
          />
          <div className="absolute inset-0 bg-[#050B14]/60 z-0" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050B14]/20 to-[#050B14]/90 z-0" />
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl sm:text-6xl font-black text-white tracking-tight mb-6 leading-tight max-w-4xl mx-auto"
            >
              Let’s Discuss Your <span className="text-[#E8B84B]">Requirement</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-slate-300 max-w-3xl mx-auto mb-6 font-medium leading-relaxed"
            >
              Contact Sanota about an operational challenge, engineering project, new system, modernization requirement or long-term technical support.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="text-lg text-slate-400 max-w-4xl mx-auto mb-6 leading-relaxed"
            >
              You do not need to prepare a complete technical specification before contacting us. Tell us what is happening now, what needs improvement or what you want to develop.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-slate-400 max-w-4xl mx-auto mb-10 leading-relaxed"
            >
              Sanota will review your enquiry and connect you with the appropriate engineering, automation, IoT, software, project or maintenance team.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
              className="flex flex-col sm:flex-row justify-center gap-4 mb-12"
            >
              <Link
                href="/tell-us-your-challenge"
                className="px-8 py-4 bg-[#E8B84B] hover:bg-[#d4a643] text-[#0B1220] font-bold rounded-lg transition-colors flex items-center justify-center"
              >
                Tell Us Your Challenge <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <a
                href="#request-call"
                className="px-8 py-4 bg-[#131C2E]/80 hover:bg-slate-800 text-white font-bold rounded-lg border border-slate-700 transition-colors flex items-center justify-center"
              >
                Request a Call <PhoneCall className="ml-2 w-5 h-5" />
              </a>
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-[#E8B84B] font-bold text-xs tracking-widest uppercase"
            >
              Engineering <span className="mx-2 text-slate-600">•</span> Automation <span className="mx-2 text-slate-600">•</span> IoT <span className="mx-2 text-slate-600">•</span> Software <span className="mx-2 text-slate-600">•</span> Project Execution <span className="mx-2 text-slate-600">•</span> AMC
            </motion.p>
          </div>
        </section>

        {/* Technical Enquiry Guidance */}
        <section className="py-12 bg-[#E8B84B] bg-transparent">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="lg:w-2/3">
                <h3 className="text-2xl md:text-3xl font-black text-[#0B1220] mb-4">Have a Technical or Operational Challenge?</h3>
                <p className="text-[#0B1220] text-lg font-medium leading-relaxed mb-4">
                  For engineering requirements, the fastest way to provide the necessary information is through the guided Tell Us Your Challenge form. It will help you explain:
                </p>
                <div className="flex flex-wrap gap-x-6 gap-y-2 mb-4 text-[#0B1220]">
                  <span className="flex items-center"><CheckCircle2 className="w-4 h-4 mr-2" /> What is happening now</span>
                  <span className="flex items-center"><CheckCircle2 className="w-4 h-4 mr-2" /> What is not working</span>
                  <span className="flex items-center"><CheckCircle2 className="w-4 h-4 mr-2" /> What you want to improve or develop</span>
                </div>
                <p className="text-[#0B1220]/80 italic">You do not need to identify the technical solution. Sanota will review the requirement and guide you towards the appropriate pathway.</p>
              </div>
              <div>
                <Link href="/tell-us-your-challenge" className="inline-flex items-center px-8 py-4 bg-[#0B1220] hover:bg-slate-800 text-white font-bold rounded-lg transition-colors whitespace-nowrap">
                  Tell Us Your Challenge <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Options */}
        <section className="py-24 bg-[#0B1220] bg-transparent">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-[#E8B84B] font-bold tracking-widest uppercase text-sm mb-4">Contact Options</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-white">Choose the Right Contact Route</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {contactOptions.map((opt, idx) => (
                <div key={idx} className={`bg-[#131C2E]/40 border border-slate-800 rounded-2xl p-8 flex flex-col hover:border-[#2E5EAA]/50 transition-colors ${idx === 4 ? 'md:col-span-2 lg:col-span-1' : ''}`}>
                  <opt.icon className="w-8 h-8 text-[#E8B84B] mb-6" />
                  <h4 className="text-xl font-bold text-white mb-4">{opt.title}</h4>
                  <p className="text-slate-400 text-sm leading-relaxed mb-8 flex-grow">{opt.desc}</p>
                  <a href="#contact-form" className="inline-flex items-center text-sm font-bold text-[#E8B84B] hover:text-white transition-colors mt-auto">
                    {opt.button} <ArrowRight className="ml-2 w-4 h-4" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Direct Contact Information */}
        <section className="py-24 bg-[#050B14] border-t border-slate-800/50 bg-transparent">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-[#E8B84B] font-bold tracking-widest uppercase text-sm mb-4">Direct Contact</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-white">Contact Sanota</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Telephone */}
              <div className="glowing-card bg-[#131C2E]/60 border border-slate-800 rounded-2xl p-8">
                <div className="w-12 h-12 rounded-xl bg-[#0B1220] border border-slate-700 flex items-center justify-center mb-6">
                  <Phone className="w-6 h-6 text-[#E8B84B]" />
                </div>
                <h4 className="text-xl font-bold text-white mb-6">Telephone</h4>
                <div className="space-y-4">
                  {directContact.telephone.map((item, idx) => (
                    <div key={idx}>
                      <span className="block text-slate-500 text-xs font-bold uppercase tracking-wider mb-1">{item.label}</span>
                      <a href={`tel:${item.value.replace(/\s+/g, '')}`} className="text-slate-300 hover:text-white transition-colors">{item.value}</a>
                    </div>
                  ))}
                </div>
              </div>

              {/* Email */}
              <div className="glowing-card bg-[#131C2E]/60 border border-slate-800 rounded-2xl p-8">
                <div className="w-12 h-12 rounded-xl bg-[#0B1220] border border-slate-700 flex items-center justify-center mb-6">
                  <Mail className="w-6 h-6 text-[#E8B84B]" />
                </div>
                <h4 className="text-xl font-bold text-white mb-6">Email</h4>
                <div className="space-y-4">
                  {directContact.email.map((item, idx) => (
                    <div key={idx}>
                      <span className="block text-slate-500 text-xs font-bold uppercase tracking-wider mb-1">{item.label}</span>
                      <a href={`mailto:${item.value}`} className="text-[#2E5EAA] hover:text-white transition-colors break-all">{item.value}</a>
                    </div>
                  ))}
                </div>
              </div>

              {/* Office Address */}
              <div className="glowing-card bg-[#131C2E]/60 border border-slate-800 rounded-2xl p-8 flex flex-col">
                <div className="w-12 h-12 rounded-xl bg-[#0B1220] border border-slate-700 flex items-center justify-center mb-6">
                  <MapPin className="w-6 h-6 text-[#E8B84B]" />
                </div>
                <h4 className="text-xl font-bold text-white mb-6">Office Address</h4>
                <p className="text-slate-300 leading-relaxed mb-6">
                  Sanota (Pvt) Ltd<br />
                  69, Panagoda<br />
                  Homagama<br />
                  Sri Lanka
                </p>
                <div className="mb-8">
                  <span className="block text-slate-500 text-xs font-bold uppercase tracking-wider mb-1">Business Hours</span>
                  <p className="text-slate-300">Mon-Fri: 8:30 AM - 5:30 PM</p>
                </div>
                <div className="mt-auto space-y-3">
                  <button className="w-full py-3 bg-[#E8B84B] hover:bg-[#d4a643] text-[#0B1220] font-bold rounded-lg transition-colors text-sm">
                    Get Directions
                  </button>
                  <button className="w-full py-3 bg-[#0B1220] hover:bg-slate-800 border border-slate-700 text-white font-bold rounded-lg transition-colors text-sm">
                    Save Contact Details
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Urgent Operational Enquiries */}
        <section className="py-16 bg-red-950/30 border-y border-red-900/50 bg-transparent">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-10 items-start">
              <div className="w-16 h-16 rounded-full bg-red-900/40 border border-red-500/50 flex items-center justify-center shrink-0">
                <AlertTriangle className="w-8 h-8 text-red-500" />
              </div>
              <div className="flex-grow">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Is an Operational System Currently Affected?</h3>
                <p className="text-slate-300 text-lg leading-relaxed mb-6">
                  If your enquiry relates to a current machinery stoppage, production interruption or time-sensitive technical issue, clearly mark it as <strong className="text-white">Urgent Technical Support</strong>.
                </p>
                <p className="text-slate-400 mb-6">Please provide:</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mb-8">
                  {["Your name and company", "A telephone number", "Site location", "Equipment or system involved", "Brief description of the issue", "Whether the equipment is currently operating", "Relevant photographs or error information"].map((item, idx) => (
                    <div key={idx} className="flex items-start">
                      <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 mr-3 shrink-0" />
                      <span className="text-slate-300 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="flex flex-col sm:flex-row gap-4 mb-6">
                  <button className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg transition-colors">
                    Submit Urgent Technical Enquiry
                  </button>
                  <a href="tel:+94771234567" className="px-6 py-3 bg-transparent hover:bg-red-900/50 border border-red-500/50 text-white font-bold rounded-lg transition-colors flex items-center justify-center">
                    Call Technical Support <Phone className="w-4 h-4 ml-2" />
                  </a>
                </div>
                <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-5">
                  <p className="text-red-200 text-sm italic leading-relaxed mb-2">
                    <strong className="font-bold">Important notice:</strong> Urgent-enquiry submission does not guarantee immediate attendance or a specific response time. Support availability will depend on the nature of the issue, location, technical requirements and existing service arrangements.
                  </p>
                  <p className="text-red-200 text-sm italic leading-relaxed">
                    For safety-related situations, follow your organization’s approved safety, isolation and emergency procedures before seeking technical assistance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form & Request a Call */}
        <section id="contact-form" className="py-24 bg-[#0B1220] bg-transparent">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
              
              {/* Main Form */}
              <div className="lg:col-span-2">
                <div className="mb-10">
                  <h2 className="text-[#E8B84B] font-bold tracking-widest uppercase text-sm mb-4">Contact Form</h2>
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">Send Us a Message</h3>
                  <p className="text-slate-400 text-lg">Complete the form below and select the enquiry type that best matches your requirement.</p>
                </div>

                <AnimatePresence mode="wait">
                  {formStatus === 'success' ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="glowing-card bg-[#131C2E]/60 border border-green-500/50 rounded-2xl p-12 text-center"
                    >
                      <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                        <CheckCircle2 className="w-10 h-10 text-green-500" />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-4">Thank You for Contacting Sanota</h3>
                      <p className="text-slate-300 text-lg mb-4">Your enquiry has been received successfully.</p>
                      <p className="text-[#E8B84B] font-mono mb-8">Reference number: ENQ-2023-0894</p>
                      <p className="text-slate-400 mb-8 max-w-lg mx-auto">
                        The Sanota team will review the information and direct it to the appropriate department. A representative will contact you using the details provided.
                      </p>
                      <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link href="/" className="px-6 py-3 bg-[#E8B84B] text-[#0B1220] font-bold rounded-lg hover:bg-[#d4a643] transition-colors">
                          Return to Homepage
                        </Link>
                        <Link href="/media" className="px-6 py-3 bg-[#0B1220] text-white border border-slate-700 font-bold rounded-lg hover:bg-slate-800 transition-colors">
                          Explore Sanota's Work
                        </Link>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.form 
                      initial={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onSubmit={handleSubmit} 
                      className="glowing-card bg-[#131C2E]/40 border border-slate-800 rounded-3xl p-8 sm:p-10"
                    >
                      {/* Your Details */}
                      <h4 className="text-xl font-bold text-white mb-6 border-b border-slate-700 pb-4">Your Details</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                        <div className="space-y-2">
                          <label className="text-sm font-semibold text-slate-300">Full name <span className="text-red-500">*</span></label>
                          <input required type="text" className="w-full bg-[#0B1220] border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#E8B84B] transition-colors" />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-semibold text-slate-300">Company or organization <span className="text-red-500">*</span></label>
                          <input required type="text" className="w-full bg-[#0B1220] border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#E8B84B] transition-colors" />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-semibold text-slate-300">Job title</label>
                          <input type="text" className="w-full bg-[#0B1220] border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#E8B84B] transition-colors" />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-semibold text-slate-300">Country</label>
                          <input type="text" className="w-full bg-[#0B1220] border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#E8B84B] transition-colors" defaultValue="Sri Lanka" />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-semibold text-slate-300">Email address <span className="text-red-500">*</span></label>
                          <input required type="email" className="w-full bg-[#0B1220] border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#E8B84B] transition-colors" />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-semibold text-slate-300">Telephone number <span className="text-red-500">*</span></label>
                          <input required type="tel" className="w-full bg-[#0B1220] border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#E8B84B] transition-colors" />
                        </div>
                      </div>

                      {/* Enquiry Details */}
                      <h4 className="text-xl font-bold text-white mb-6 border-b border-slate-700 pb-4">Enquiry Details</h4>
                      <div className="space-y-6 mb-8">
                        <div className="space-y-2">
                          <label className="text-sm font-semibold text-slate-300">Type of enquiry <span className="text-red-500">*</span></label>
                          <select required className="w-full bg-[#0B1220] border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#E8B84B] transition-colors appearance-none">
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
                          <label className="text-sm font-semibold text-slate-300">Subject <span className="text-red-500">*</span></label>
                          <input required type="text" className="w-full bg-[#0B1220] border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#E8B84B] transition-colors" />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-semibold text-slate-300">Your message <span className="text-red-500">*</span></label>
                          <textarea 
                            required 
                            rows={6}
                            className="w-full bg-[#0B1220] border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#E8B84B] transition-colors resize-none"
                            placeholder="Briefly explain what is happening, what you need or what you would like to discuss."
                          ></textarea>
                        </div>
                      </div>

                      {/* Supporting Files */}
                      <h4 className="text-xl font-bold text-white mb-6 border-b border-slate-700 pb-4">Supporting Files</h4>
                      <div className="mb-8">
                        <p className="text-slate-400 text-sm mb-4">You may attach photographs, videos, drawings, equipment details, reports or other relevant documents.</p>
                        <div className="border-2 border-dashed border-slate-700 rounded-xl p-8 text-center hover:border-[#E8B84B] transition-colors cursor-pointer bg-[#0B1220]">
                          <Upload className="w-8 h-8 text-slate-500 mx-auto mb-3" />
                          <p className="text-white font-bold mb-1">Click to Add Files</p>
                          <p className="text-slate-500 text-xs">Maximum file size: 20MB</p>
                        </div>
                        <div className="flex items-start mt-4 bg-[#131C2E]/60 p-3 rounded-lg border border-slate-800">
                          <Info className="w-4 h-4 text-[#E8B84B] shrink-0 mt-0.5 mr-2" />
                          <p className="text-slate-400 text-xs">Please do not upload passwords, login details or documents that you are not authorized to share.</p>
                        </div>
                      </div>

                      {/* Preferences */}
                      <h4 className="text-xl font-bold text-white mb-6 border-b border-slate-700 pb-4">Preferences</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                        <div className="space-y-3">
                          <label className="text-sm font-semibold text-slate-300 block mb-2">Preferred Response Method</label>
                          {['Telephone call', 'Email', 'Online meeting', 'No preference'].map((opt, idx) => (
                            <label key={idx} className="flex items-center space-x-3 cursor-pointer">
                              <input type="radio" name="responseMethod" className="form-radio text-[#E8B84B] focus:ring-[#E8B84B] bg-[#0B1220] border-slate-700" />
                              <span className="text-slate-300 text-sm">{opt}</span>
                            </label>
                          ))}
                        </div>
                        <div className="space-y-3">
                          <label className="text-sm font-semibold text-slate-300 block mb-2">Preferred Contact Time</label>
                          {['Morning', 'Afternoon', 'Any time during business hours'].map((opt, idx) => (
                            <label key={idx} className="flex items-center space-x-3 cursor-pointer">
                              <input type="radio" name="contactTime" className="form-radio text-[#E8B84B] focus:ring-[#E8B84B] bg-[#0B1220] border-slate-700" />
                              <span className="text-slate-300 text-sm">{opt}</span>
                            </label>
                          ))}
                        </div>
                      </div>

                      {/* Consent */}
                      <div className="space-y-4 mb-10 pt-6 border-t border-slate-800">
                        <label className="flex items-start space-x-3 cursor-pointer">
                          <input required type="checkbox" className="form-checkbox text-[#E8B84B] rounded bg-[#0B1220] border-slate-700 mt-1" />
                          <span className="text-slate-400 text-sm leading-relaxed">
                            I confirm that the information submitted is accurate to the best of my knowledge and that I am authorized to share any attached material.
                          </span>
                        </label>
                        <label className="flex items-start space-x-3 cursor-pointer">
                          <input required type="checkbox" className="form-checkbox text-[#E8B84B] rounded bg-[#0B1220] border-slate-700 mt-1" />
                          <span className="text-slate-400 text-sm leading-relaxed">
                            I understand that submitting this enquiry does not create a contractual obligation. Sanota may request further information or an assessment before recommending a solution.
                          </span>
                        </label>
                      </div>

                      <div className="flex flex-col sm:flex-row gap-4 items-center">
                        <button 
                          disabled={formStatus === 'submitting'}
                          type="submit" 
                          className="w-full sm:w-auto px-10 py-4 bg-[#E8B84B] hover:bg-[#d4a643] text-[#0B1220] font-bold rounded-lg transition-colors flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed"
                        >
                          {formStatus === 'submitting' ? 'Submitting...' : 'Submit Enquiry'} 
                          {!formStatus && <Send className="ml-2 w-5 h-5" />}
                        </button>
                        <button type="reset" className="w-full sm:w-auto px-8 py-4 bg-transparent hover:bg-slate-800 text-slate-300 font-bold rounded-lg transition-colors">
                          Clear Form
                        </button>
                        <Link href="/privacy" className="sm:ml-auto text-sm text-[#2E5EAA] hover:text-white transition-colors">
                          View Privacy Notice
                        </Link>
                      </div>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>

              {/* Sidebar: Request a Call & Location */}
              <div className="space-y-8">
                
                {/* Request a Call Form */}
                <div id="request-call" className="glowing-card bg-[#131C2E]/60 border border-slate-800 rounded-3xl p-8">
                  <h3 className="text-xl font-bold text-white mb-4">Ask the Sanota Team to Contact You</h3>
                  <p className="text-slate-400 text-sm mb-6">Provide your details and preferred contact time, and a representative will contact you to discuss the requirement.</p>
                  
                  <form className="space-y-4">
                    <input required type="text" placeholder="Full name" className="w-full bg-[#0B1220] border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#E8B84B] text-sm" />
                    <input required type="text" placeholder="Company" className="w-full bg-[#0B1220] border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#E8B84B] text-sm" />
                    <input required type="tel" placeholder="Telephone number" className="w-full bg-[#0B1220] border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#E8B84B] text-sm" />
                    <input required type="email" placeholder="Email address" className="w-full bg-[#0B1220] border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#E8B84B] text-sm" />
                    
                    <select className="w-full bg-[#0B1220] border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#E8B84B] text-sm appearance-none">
                      <option value="">Preferred contact time</option>
                      <option>Morning</option>
                      <option>Afternoon</option>
                      <option>Any time during business hours</option>
                    </select>

                    <input type="text" placeholder="Brief reason for the call" className="w-full bg-[#0B1220] border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#E8B84B] text-sm" />
                    
                    <button type="submit" className="w-full py-4 bg-[#E8B84B] hover:bg-[#d4a643] text-[#0B1220] font-bold rounded-lg transition-colors text-sm mt-4">
                      Request a Call
                    </button>
                  </form>
                </div>

                {/* What Happens Next */}
                <div className="glowing-card bg-[#131C2E]/60 border border-slate-800 rounded-3xl p-8">
                  <h3 className="text-xl font-bold text-white mb-2">What Happens Next?</h3>
                  <p className="text-slate-400 text-sm mb-6">A Clear Route from Enquiry to Action</p>
                  
                  <div className="space-y-6 relative before:absolute before:inset-0 before:ml-[15px] before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-slate-800">
                    {whatHappensNext.map((step, idx) => (
                      <div key={idx} className="relative flex items-start gap-4">
                        <div className="w-8 h-8 rounded-full bg-[#0B1220] border-2 border-[#E8B84B] flex items-center justify-center shrink-0 z-10">
                          <span className="text-[#E8B84B] text-xs font-bold">{step.step}</span>
                        </div>
                        <div className="pt-1 pb-4">
                          <h4 className="text-white font-bold text-sm mb-1">{step.title}</h4>
                          <p className="text-slate-400 text-xs leading-relaxed">{step.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Location */}
                <div className="glowing-card bg-[#131C2E]/60 border border-slate-800 rounded-3xl p-8">
                  <h3 className="text-xl font-bold text-white mb-4">Visit Sanota</h3>
                  <div className="bg-[#0B1220] h-48 rounded-xl border border-slate-700 mb-6 flex items-center justify-center">
                    <MapPin className="w-8 h-8 text-slate-600" />
                    <span className="text-slate-600 font-bold ml-2">Map Preview</span>
                  </div>
                  <p className="text-slate-300 text-sm mb-4">
                    Sanota (Pvt) Ltd<br />
                    69, Panagoda, Homagama
                  </p>
                  <p className="text-slate-400 text-xs italic mb-6">
                    Visits should be arranged in advance so that the appropriate representative is available.
                  </p>
                  <div className="space-y-3">
                    <button className="w-full py-3 bg-[#131C2E] hover:bg-slate-800 border border-slate-700 text-white font-bold rounded-lg transition-colors text-sm">
                      Open in Maps
                    </button>
                    <button className="w-full py-3 bg-transparent hover:bg-slate-800 border border-slate-700 text-slate-300 font-bold rounded-lg transition-colors text-sm">
                      Request an Appointment
                    </button>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* Connect With Sanota */}
        <section className="py-24 bg-[#050B14] border-t border-slate-800/50 bg-transparent">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-[#E8B84B] font-bold tracking-widest uppercase text-sm mb-4">Connect With Sanota</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">Follow Our Work</h3>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-10">
              Stay connected with Sanota for project stories, product developments, engineering videos, company news and industry activities.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-10">
              {['LinkedIn', 'Facebook', 'YouTube'].map((social, idx) => (
                <a key={idx} href="#" className="px-8 py-4 bg-[#131C2E] hover:bg-slate-800 text-white font-bold rounded-xl border border-slate-800 hover:border-slate-600 transition-colors">
                  {social}
                </a>
              ))}
            </div>

            <Link href="/media" className="inline-flex items-center px-8 py-4 bg-[#E8B84B] hover:bg-[#d4a643] text-[#0B1220] font-bold rounded-lg transition-colors">
              Visit the Media Centre <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 bg-[#131C2E] border-t border-slate-800 bg-transparent">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Start With the Requirement
            </h2>
            <p className="text-slate-400 text-lg mb-12 leading-relaxed max-w-3xl mx-auto">
              Whether you need to solve a machinery problem, automate a process, develop a new system, introduce IoT and software, or arrange ongoing technical support, Sanota is ready to understand your requirement.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-10">
              <Link href="/tell-us-your-challenge" className="px-8 py-4 bg-[#E8B84B] hover:bg-[#d4a643] text-[#0B1220] font-bold rounded-lg transition-colors flex items-center justify-center">
                Tell Us Your Challenge <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <a href="#contact-form" className="px-8 py-4 bg-[#0B1220] hover:bg-slate-800 text-white font-bold rounded-lg border border-slate-700 transition-colors flex items-center justify-center">
                Contact Sanota
              </a>
            </div>
            <p className="text-slate-500 text-sm italic">From operational challenge to integrated engineering solution.</p>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
