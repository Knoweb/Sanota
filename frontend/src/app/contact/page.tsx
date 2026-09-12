"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import {
  ArrowRight, Phone, Mail, MapPin, CheckCircle2, AlertTriangle,
  Send, Upload, Info, MessageSquare, Briefcase, Cog, Globe, PhoneCall
} from "lucide-react";
import ContactBackground from "@/components/ContactBackground";
import { submitContactEnquiry, submitCallRequest, ContactFormData, CallRequestData } from "@/lib/api";

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

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" stroke="none" className={className}>
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

const FacebookIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" stroke="none" className={className}>
    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
  </svg>
);

const YoutubeIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" stroke="none" className={className}>
    <path d="M21.582 6.186a2.6 2.6 0 0 0-1.838-1.854c-1.62-.434-8.125-.434-8.125-.434s-6.505 0-8.125.434a2.6 2.6 0 0 0-1.838 1.854c-.434 1.637-.434 5.062-.434 5.062s0 3.425.434 5.062a2.6 2.6 0 0 0 1.838 1.854c1.62.434 8.125.434 8.125.434s6.505 0 8.125-.434a2.6 2.6 0 0 0 1.838-1.854c.434-1.637.434-5.062.434-5.062s0-3.425-.434-5.062zM9.545 15.568V8.432l6.455 3.568-6.455 3.568z" />
  </svg>
);

export default function ContactPage() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    company: "",
    jobTitle: "",
    country: "Sri Lanka",
    email: "",
    phone: "",
    enquiryType: "",
    subject: "",
    message: "",
    consentAccurate: false,
    consentNoObligation: false,
  });

  const fileInputRef = useRef<HTMLInputElement>(null);
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [connectionError, setConnectionError] = useState('');
  const [enquiryRef, setEnquiryRef] = useState('');

  const updateData = (fields: Partial<ContactFormData>) => setFormData(prev => ({ ...prev, ...fields }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formStatus === 'submitting') return;
    setFormStatus('submitting');
    setConnectionError('');
    try {
      const result = await submitContactEnquiry(formData);
      if (result.success) {
        setEnquiryRef(result.referenceNumber);
        setFormStatus('success');
      }
    } catch (err: any) {
      setConnectionError(err.message || 'Your enquiry could not be submitted because of a connection problem. Please try again.');
      setFormStatus('error');
    }
  };

  const [callData, setCallData] = useState<CallRequestData>({
    name: "",
    company: "",
    phone: "",
    email: "",
    reason: "",
  });
  const [callStatus, setCallStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [callError, setCallError] = useState('');
  const [callRef, setCallRef] = useState('');

  const updateCallData = (fields: Partial<CallRequestData>) => setCallData(prev => ({ ...prev, ...fields }));

  const handleCallSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (callStatus === 'submitting') return;
    setCallStatus('submitting');
    setCallError('');
    try {
      const result = await submitCallRequest(callData);
      if (result.success) {
        setCallRef(result.referenceNumber);
        setCallStatus('success');
      }
    } catch (err: any) {
      setCallError(err.message || 'Your request could not be submitted because of a connection problem. Please try again.');
      setCallStatus('error');
    }
  };

  return (
    <div className="flex flex-col min-h-screen relative bg-transparent">
      <ContactBackground />
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
        <section className="py-14 relative z-10">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative overflow-hidden rounded-[2rem] bg-[#131C2E]/60 border border-slate-700/50 backdrop-blur-xl shadow-2xl p-8 md:p-10 group"
            >
              {/* Animated Glow Background */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-[#E8B84B]/10 rounded-full blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000 -translate-y-1/2 translate-x-1/4 pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000 translate-y-1/4 -translate-x-1/4 pointer-events-none" />

              <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10">
                <div className="lg:w-2/3">
                  <div className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 rounded-full px-3 py-1 mb-5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E8B84B] animate-pulse shadow-[0_0_6px_#E8B84B]" />
                    <span className="text-slate-300 text-[10px] font-bold tracking-[0.2em] uppercase">Guided Process</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-black text-white mb-4 leading-tight">Have a Technical or <br className="hidden xl:block" /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E8B84B] to-amber-500">Operational Challenge?</span></h3>
                  <p className="text-slate-300 text-[15px] leading-relaxed mb-6 max-w-2xl">
                    For engineering requirements, the fastest way to provide necessary information is through the guided <strong className="text-white font-bold bg-white/5 px-2 py-0.5 rounded-md border border-white/10 mx-1">Tell Us Your Challenge</strong> form. It helps you accurately explain:
                  </p>

                  <div className="flex flex-wrap gap-3">
                    {["What is happening now", "What is not working", "What you want to improve"].map((item, i) => (
                      <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 + 0.3 }}
                        key={i}
                        className="flex items-center bg-[#0A101A]/40 border border-slate-700/40 rounded-lg px-3.5 py-2.5 hover:border-[#E8B84B]/40 hover:bg-[#131C2E] transition-all duration-300 hover:-translate-y-0.5"
                      >
                        <div className="w-5 h-5 rounded-full bg-[#E8B84B]/10 flex items-center justify-center mr-2.5 shrink-0">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#E8B84B]" />
                        </div>
                        <span className="text-slate-200 font-medium text-[13px]">{item}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div className="shrink-0 w-full lg:w-auto flex justify-start lg:justify-end">
                  <Link
                    href="/tell-us-your-challenge"
                    className="relative group/btn overflow-hidden px-7 py-3.5 bg-gradient-to-r from-[#E8B84B] to-amber-500 text-[#0A101A] font-black rounded-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_30px_rgba(232,184,75,0.3)] flex items-center justify-center w-full sm:w-auto"
                  >
                    <div className="absolute inset-0 bg-white/20 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300 ease-out" />
                    <span className="relative z-10 flex items-center text-sm uppercase tracking-wider">
                      Tell Us Your Challenge
                      <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </span>
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── Contact Options ── */}
        <section className="py-24 bg-transparent border-b border-slate-800/60 relative z-10">
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
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                  className="group relative bg-[#0A101A]/60 backdrop-blur-md border border-slate-700/50 rounded-3xl p-8 flex flex-col overflow-hidden transition-all duration-500 hover:border-[#E8B84B]/40 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.6)]"
                >
                  {/* Subtle Background Glow on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#E8B84B]/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Animated Light Sweep */}
                  <div className="absolute inset-0 -translate-x-[150%] group-hover:translate-x-[150%] transition-transform duration-1000 ease-in-out bg-gradient-to-r from-transparent via-white/[0.05] to-transparent skew-x-12" />

                  <div className="relative z-10 w-16 h-16 rounded-2xl bg-gradient-to-br from-[#131C2E] to-[#050B14] border border-slate-700/50 flex items-center justify-center mb-6 group-hover:border-[#E8B84B]/50 group-hover:shadow-[0_0_20px_rgba(232,184,75,0.2)] transition-all duration-500 shadow-lg shrink-0">
                    <opt.icon className="w-7 h-7 text-[#E8B84B] group-hover:scale-110 transition-transform duration-500" />
                  </div>

                  <h4 className="relative z-10 text-xl font-black text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-amber-100 transition-all duration-300">{opt.title}</h4>

                  <p className="relative z-10 text-slate-400 text-sm leading-relaxed mb-8 flex-grow group-hover:text-slate-300 transition-colors duration-300">{opt.desc}</p>

                  <div className="relative z-10 mt-auto pt-6 border-t border-slate-700/50 group-hover:border-slate-600/50 transition-colors duration-300">
                    <a href="#contact-form" className="inline-flex items-center text-xs font-black uppercase tracking-widest text-slate-300 hover:text-[#E8B84B] transition-colors group/link w-full justify-between">
                      {opt.button}
                      <span className="w-8 h-8 rounded-full bg-[#E8B84B]/10 flex items-center justify-center group-hover/link:bg-[#E8B84B] group-hover/link:text-[#0A101A] transition-all duration-300 shrink-0">
                        <ArrowRight className="w-4 h-4 group-hover/link:translate-x-0.5 transition-transform" />
                      </span>
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Bottom 2 centered */}
            <div className="flex flex-col md:flex-row justify-center gap-6">
              {contactOptions.slice(3).map((opt, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: (idx + 3) * 0.1, duration: 0.5 }}
                  className="group relative bg-[#0A101A]/60 backdrop-blur-md border border-slate-700/50 rounded-3xl p-8 flex flex-col overflow-hidden transition-all duration-500 hover:border-[#E8B84B]/40 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.6)] w-full md:max-w-[calc(33.333%+0.75rem)]"
                >
                  {/* Subtle Background Glow on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#E8B84B]/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Animated Light Sweep */}
                  <div className="absolute inset-0 -translate-x-[150%] group-hover:translate-x-[150%] transition-transform duration-1000 ease-in-out bg-gradient-to-r from-transparent via-white/[0.05] to-transparent skew-x-12" />

                  <div className="relative z-10 w-16 h-16 rounded-2xl bg-gradient-to-br from-[#131C2E] to-[#050B14] border border-slate-700/50 flex items-center justify-center mb-6 group-hover:border-[#E8B84B]/50 group-hover:shadow-[0_0_20px_rgba(232,184,75,0.2)] transition-all duration-500 shadow-lg shrink-0">
                    <opt.icon className="w-7 h-7 text-[#E8B84B] group-hover:scale-110 transition-transform duration-500" />
                  </div>

                  <h4 className="relative z-10 text-xl font-black text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-amber-100 transition-all duration-300">{opt.title}</h4>

                  <p className="relative z-10 text-slate-400 text-sm leading-relaxed mb-8 flex-grow group-hover:text-slate-300 transition-colors duration-300">{opt.desc}</p>

                  <div className="relative z-10 mt-auto pt-6 border-t border-slate-700/50 group-hover:border-slate-600/50 transition-colors duration-300">
                    <a href="#contact-form" className="inline-flex items-center text-xs font-black uppercase tracking-widest text-slate-300 hover:text-[#E8B84B] transition-colors group/link w-full justify-between">
                      {opt.button}
                      <span className="w-8 h-8 rounded-full bg-[#E8B84B]/10 flex items-center justify-center group-hover/link:bg-[#E8B84B] group-hover/link:text-[#0A101A] transition-all duration-300 shrink-0">
                        <ArrowRight className="w-4 h-4 group-hover/link:translate-x-0.5 transition-transform" />
                      </span>
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Direct Contact Info ── */}
        <section className="py-24 bg-transparent border-b border-slate-800/60 relative z-10">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <p className="text-xs font-black text-[#E8B84B] uppercase tracking-[0.3em] mb-4">Direct Contact</p>
              <h2 className="text-3xl md:text-5xl font-black text-white">Contact Sanota Directly</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-8">
              {/* Telephone */}
              <div className="group relative pl-8 py-4 border-l-2 border-slate-800 hover:border-[#E8B84B] transition-all duration-500">
                <div className="absolute -left-[2px] top-1/4 w-[2px] h-1/2 bg-gradient-to-b from-transparent via-[#E8B84B] to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 shadow-[0_0_15px_#E8B84B]" />

                <div className="flex items-center mb-8">
                  <div className="w-14 h-14 rounded-full bg-[#131C2E] border border-slate-700 flex items-center justify-center mr-5 group-hover:bg-[#E8B84B]/10 group-hover:border-[#E8B84B]/40 transition-colors duration-500 shadow-xl">
                    <Phone className="w-6 h-6 text-slate-400 group-hover:text-[#E8B84B] group-hover:scale-110 transition-all duration-500" />
                  </div>
                  <h4 className="text-2xl font-black text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-amber-100 transition-all duration-500">Telephone</h4>
                </div>

                <div className="space-y-8">
                  {directContact.telephone.map((item, idx) => (
                    <div key={idx} className="transform group-hover:translate-x-2 transition-transform duration-500" style={{ transitionDelay: `${idx * 100}ms` }}>
                      <span className="block text-slate-500 text-[11px] font-bold uppercase tracking-widest mb-1.5">{item.label}</span>
                      <a href={`tel:${item.value.replace(/\s+/g, '')}`} className="text-white text-lg hover:text-[#E8B84B] transition-colors font-semibold tracking-wide">{item.value}</a>
                    </div>
                  ))}
                </div>
              </div>

              {/* Email */}
              <div className="group relative pl-8 py-4 border-l-2 border-slate-800 hover:border-[#E8B84B] transition-all duration-500">
                <div className="absolute -left-[2px] top-1/4 w-[2px] h-1/2 bg-gradient-to-b from-transparent via-[#E8B84B] to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 shadow-[0_0_15px_#E8B84B]" />

                <div className="flex items-center mb-8">
                  <div className="w-14 h-14 rounded-full bg-[#131C2E] border border-slate-700 flex items-center justify-center mr-5 group-hover:bg-[#E8B84B]/10 group-hover:border-[#E8B84B]/40 transition-colors duration-500 shadow-xl">
                    <Mail className="w-6 h-6 text-slate-400 group-hover:text-[#E8B84B] group-hover:scale-110 transition-all duration-500" />
                  </div>
                  <h4 className="text-2xl font-black text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-amber-100 transition-all duration-500">Email</h4>
                </div>

                <div className="space-y-8">
                  {directContact.email.map((item, idx) => (
                    <div key={idx} className="transform group-hover:translate-x-2 transition-transform duration-500" style={{ transitionDelay: `${idx * 100}ms` }}>
                      <span className="block text-slate-500 text-[11px] font-bold uppercase tracking-widest mb-1.5">{item.label}</span>
                      <a href={`mailto:${item.value}`} className="text-[#E8B84B] text-[15px] hover:text-amber-300 transition-colors font-semibold tracking-wide break-all">{item.value}</a>
                    </div>
                  ))}
                </div>
              </div>

              {/* Office Address */}
              <div className="group relative pl-8 py-4 border-l-2 border-slate-800 hover:border-[#E8B84B] transition-all duration-500 flex flex-col h-full">
                <div className="absolute -left-[2px] top-1/4 w-[2px] h-1/2 bg-gradient-to-b from-transparent via-[#E8B84B] to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 shadow-[0_0_15px_#E8B84B]" />

                <div className="flex items-center mb-8">
                  <div className="w-14 h-14 rounded-full bg-[#131C2E] border border-slate-700 flex items-center justify-center mr-5 group-hover:bg-[#E8B84B]/10 group-hover:border-[#E8B84B]/40 transition-colors duration-500 shadow-xl">
                    <MapPin className="w-6 h-6 text-slate-400 group-hover:text-[#E8B84B] group-hover:scale-110 transition-all duration-500" />
                  </div>
                  <h4 className="text-2xl font-black text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-amber-100 transition-all duration-500">Office Address</h4>
                </div>

                <div className="transform group-hover:translate-x-2 transition-transform duration-500 mb-8">
                  <p className="text-slate-200 text-[15px] leading-relaxed font-medium tracking-wide">
                    Sanota (Pvt) Ltd<br />
                    No 16, Wewelwala Road<br />
                    Bataganwila, Galle.
                  </p>
                </div>

                <div className="transform group-hover:translate-x-2 transition-transform duration-500 delay-100 mb-10">
                  <span className="block text-slate-500 text-[11px] font-bold uppercase tracking-widest mb-1.5">Business Hours</span>
                  <p className="text-white text-[15px] font-semibold tracking-wide">Mon–Fri: 8:30 AM – 5:30 PM</p>
                </div>

                <div className="mt-auto flex flex-col sm:flex-row gap-3 transform group-hover:translate-x-2 transition-transform duration-500 delay-200">
                  <button className="flex-1 py-3 px-4 bg-transparent border border-[#E8B84B]/50 hover:bg-[#E8B84B] hover:border-[#E8B84B] text-[#E8B84B] hover:text-[#0A101A] font-black rounded-lg transition-all duration-300 text-xs uppercase tracking-widest text-center">
                    Get Directions
                  </button>
                  <button className="flex-1 py-3 px-4 bg-slate-800/50 hover:bg-slate-700 border border-slate-700 text-white font-bold rounded-lg transition-all duration-300 text-xs uppercase tracking-widest text-center">
                    Save Details
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Urgent Enquiries (Priority Channel) ── */}
        <section className="py-20 relative z-10 border-b border-slate-800/60">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-[#131C2E] border-2 border-emerald-500/20 rounded-3xl p-8 md:p-12 relative overflow-hidden group shadow-[0_0_40px_rgba(16,185,129,0.05)]"
            >
              {/* Subtle Emerald Background Accent */}
              <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-emerald-500/[0.04] to-transparent pointer-events-none" />

              <div className="flex flex-col lg:flex-row gap-10 md:gap-14 items-start relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-[#050B14] border border-emerald-500/30 flex items-center justify-center shrink-0 shadow-[0_0_25px_rgba(52,211,153,0.15)] group-hover:shadow-[0_0_40px_rgba(52,211,153,0.35)] transition-all duration-500 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-transparent opacity-50" />
                  <div className="absolute inset-0 bg-emerald-500/10 animate-pulse" />
                  <AlertTriangle className="w-8 h-8 text-emerald-400 drop-shadow-[0_0_12px_rgba(52,211,153,0.9)] relative z-10" />
                </div>

                <div className="flex-grow">
                  <p className="text-emerald-400 font-black text-[11px] uppercase tracking-[0.3em] mb-4 flex items-center">
                    Priority Support Channel
                  </p>

                  <h3 className="text-2xl md:text-3xl font-black text-white mb-4 tracking-tight">
                    Is an Operational System Currently Affected?
                  </h3>

                  <p className="text-slate-300 text-base leading-relaxed mb-8 max-w-4xl">
                    If your enquiry relates to a current machinery stoppage, production interruption or time-sensitive technical issue, clearly mark it as{" "}
                    <strong className="text-emerald-400 font-bold bg-emerald-500/10 px-2.5 py-0.5 rounded-md border border-emerald-500/30 ml-1">Urgent Technical Support</strong>.
                  </p>

                  <div className="mb-10">
                    <p className="text-slate-400 font-bold uppercase tracking-widest text-[11px] mb-5">
                      Please have this information ready:
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-4 gap-x-8">
                      {[
                        "Your name and company",
                        "A telephone number",
                        "Site location",
                        "Equipment or system involved",
                        "Brief description of the issue",
                        "Whether the equipment is currently operating",
                        "Relevant photographs or error information"
                      ].map((item, idx) => (
                        <div key={idx} className="flex items-start">
                          <div className="w-1.5 h-1.5 rounded-full bg-emerald-400/80 mt-1.5 mr-3 shrink-0" />
                          <span className="text-slate-300 text-sm">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 mb-8">
                    <button className="px-6 py-3.5 bg-emerald-500 hover:bg-emerald-400 text-[#050B14] font-black rounded-xl transition-all duration-300 shadow-[0_0_20px_rgba(16,185,129,0.2)] flex items-center justify-center text-xs uppercase tracking-widest group">
                      Submit Urgent Technical Enquiry
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </button>
                    <a href="tel:+94740709989" className="px-6 py-3.5 bg-[#050B14] hover:bg-[#0A101A] border border-emerald-500/30 hover:border-emerald-500/60 text-emerald-400 hover:text-emerald-300 font-black rounded-xl transition-all duration-300 flex items-center justify-center text-xs uppercase tracking-widest">
                      Call Technical Support <Phone className="w-4 h-4 ml-3" />
                    </a>
                  </div>

                  <div className="bg-[#050B14]/50 border-l-2 border-emerald-500/40 py-3.5 px-5 rounded-r-xl">
                    <p className="text-slate-300 text-xs leading-relaxed mb-1.5 tracking-wide">
                      <strong className="text-emerald-400 font-bold tracking-widest uppercase text-[10px] mr-2">Important notice:</strong> Urgent-enquiry submission does not guarantee immediate attendance or a specific response time.
                    </p>
                    <p className="text-slate-400 text-xs leading-relaxed tracking-wide">
                      For safety-related situations, follow your organization&apos;s approved safety, isolation and emergency procedures before seeking technical assistance.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── Contact Form + Sidebar ── */}
        <section id="contact-form" className="py-24 bg-transparent border-b border-slate-800/60 relative z-10">
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
                      <p className="text-[#E8B84B] font-mono mb-8">Reference: {enquiryRef}</p>
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
                            <input required type="text" className={inputClass} placeholder="Your full name" value={formData.name} onChange={e => updateData({ name: e.target.value })} />
                          </div>
                          <div className="space-y-2">
                            <label className="text-sm font-bold text-slate-300">Company or organization <span className="text-red-400">*</span></label>
                            <input required type="text" className={inputClass} placeholder="Your company" value={formData.company} onChange={e => updateData({ company: e.target.value })} />
                          </div>
                          <div className="space-y-2">
                            <label className="text-sm font-bold text-slate-300">Job title</label>
                            <input type="text" className={inputClass} placeholder="Your role" value={formData.jobTitle} onChange={e => updateData({ jobTitle: e.target.value })} />
                          </div>
                          <div className="space-y-2">
                            <label className="text-sm font-bold text-slate-300">Country</label>
                            <input type="text" className={inputClass} value={formData.country} onChange={e => updateData({ country: e.target.value })} />
                          </div>
                          <div className="space-y-2">
                            <label className="text-sm font-bold text-slate-300">Email address <span className="text-red-400">*</span></label>
                            <input required type="email" className={inputClass} placeholder="you@company.com" value={formData.email} onChange={e => updateData({ email: e.target.value })} />
                          </div>
                          <div className="space-y-2">
                            <label className="text-sm font-bold text-slate-300">Telephone number <span className="text-red-400">*</span></label>
                            <input required type="tel" className={inputClass} placeholder="+94 77 000 0000" value={formData.phone} onChange={e => updateData({ phone: e.target.value })} />
                          </div>
                        </div>
                      </div>

                      {/* Enquiry Details */}
                      <div>
                        <h4 className="text-lg font-black text-white mb-1 pb-4 border-b border-slate-700/60">Enquiry Details</h4>
                        <div className="space-y-5 mt-6">
                          <div className="space-y-2">
                            <label className="text-sm font-bold text-slate-300">Type of enquiry <span className="text-red-400">*</span></label>
                            <select required className={inputClass + " appearance-none cursor-pointer"} value={formData.enquiryType} onChange={e => updateData({ enquiryType: e.target.value })}>
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
                            <input required type="text" className={inputClass} placeholder="Brief subject of your enquiry" value={formData.subject} onChange={e => updateData({ subject: e.target.value })} />
                          </div>
                          <div className="space-y-2">
                            <label className="text-sm font-bold text-slate-300">Your message <span className="text-red-400">*</span></label>
                            <textarea
                              required
                              rows={6}
                              className={inputClass + " resize-none"}
                              placeholder="Briefly explain what is happening, what you need or what you would like to discuss."
                              value={formData.message} onChange={e => updateData({ message: e.target.value })}
                            />
                          </div>
                        </div>
                      </div>

                      {/* Supporting Files */}
                      <div>
                        <h4 className="text-lg font-black text-white mb-1 pb-4 border-b border-slate-700/60">Supporting Files</h4>
                        <div className="mt-6">
                          <p className="text-slate-400 text-sm mb-4">Attach photographs, videos, drawings, equipment details or other relevant documents.</p>
                          <div className="border-2 border-dashed border-slate-700 rounded-2xl p-8 text-center hover:border-[#E8B84B]/50 transition-colors cursor-pointer bg-[#050B14]" onClick={() => fileInputRef.current?.click()}>
                            <input
                              type="file"
                              ref={fileInputRef}
                              className="hidden"
                              multiple
                              accept=".jpg,.jpeg,.png,.pdf,.docx,.xlsx,.mp4"
                              onChange={(e) => {
                                if (e.target.files) {
                                  updateData({ supportingFiles: Array.from(e.target.files) });
                                }
                              }}
                            />
                            <Upload className="w-8 h-8 text-slate-500 mx-auto mb-3" />
                            <p className="text-white font-bold mb-1">{formData.supportingFiles && formData.supportingFiles.length > 0 ? `${formData.supportingFiles.length} File(s) Selected` : 'Click to Add Files'}</p>
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
                                  <input type="radio" name="responseMethod" className="w-4 h-4 accent-[#E8B84B]" value={opt} checked={formData.preferredResponseMethod === opt} onChange={e => updateData({ preferredResponseMethod: e.target.value })} />
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
                                  <input type="radio" name="contactTime" className="w-4 h-4 accent-[#E8B84B]" value={opt} checked={formData.preferredContactTime === opt} onChange={e => updateData({ preferredContactTime: e.target.value })} />
                                  <span className="text-slate-300 text-sm group-hover:text-white transition-colors">{opt}</span>
                                </label>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Consent */}
                      <div className="space-y-4 pt-2 border-t border-slate-800/60">
                        <label className="flex items-start space-x-3 cursor-pointer group">
                          <input required type="checkbox" className="w-4 h-4 mt-0.5 accent-[#E8B84B] shrink-0" checked={formData.consentAccurate} onChange={e => updateData({ consentAccurate: e.target.checked })} />
                          <span className="text-slate-400 text-sm leading-relaxed group-hover:text-slate-300 transition-colors">I confirm that the information submitted is accurate to the best of my knowledge and that I am authorized to share any attached material.</span>
                        </label>
                        <label className="flex items-start space-x-3 cursor-pointer group">
                          <input required type="checkbox" className="w-4 h-4 mt-0.5 accent-[#E8B84B] shrink-0" checked={formData.consentNoObligation} onChange={e => updateData({ consentNoObligation: e.target.checked })} />
                          <span className="text-slate-400 text-sm leading-relaxed group-hover:text-slate-300 transition-colors">I understand that submitting this enquiry does not create a contractual obligation. Sanota may request further information before recommending a solution.</span>
                        </label>
                      </div>

                      {formStatus === 'error' && (
                        <div className="bg-red-900/20 border border-red-500/50 rounded-xl p-4 mt-4">
                          <p className="text-red-400 text-sm">{connectionError}</p>
                        </div>
                      )}

                      <div className="flex flex-col sm:flex-row gap-4 items-center pt-2">
                        <button
                          disabled={formStatus === 'submitting'}
                          type="submit"
                          className="w-full sm:w-auto px-10 py-4 bg-[#E8B84B] hover:bg-[#d4a643] text-[#0B1220] font-black rounded-xl transition-all duration-300 flex items-center justify-center disabled:opacity-60 shadow-lg shadow-[#E8B84B]/20 hover:shadow-[#E8B84B]/40 hover:-translate-y-0.5 group"
                        >
                          {formStatus === 'submitting' ? 'Submitting…' : 'Submit Enquiry'}
                          {formStatus !== 'submitting' && <Send className="ml-2 w-5 h-5 group-hover:translate-x-0.5 transition-transform" />}
                        </button>
                        <button type="reset" onClick={() => {
                          setFormData({ name: "", company: "", jobTitle: "", country: "Sri Lanka", email: "", phone: "", enquiryType: "", subject: "", message: "", consentAccurate: false, consentNoObligation: false });
                          setFormStatus('idle');
                        }} className="w-full sm:w-auto px-8 py-4 bg-transparent hover:bg-slate-800 text-slate-400 hover:text-white font-bold rounded-xl transition-colors">
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
              <div className="space-y-6 lg:space-y-8 lg:pl-4">

                {/* Request a Call */}
                <div id="request-call" className="bg-gradient-to-b from-[#0A101A] to-[#050B14] border-t-2 border-[#E8B84B]/40 border-l border-r border-b border-slate-800/80 rounded-2xl p-7 relative overflow-hidden shadow-xl">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#E8B84B]/10 rounded-full blur-[40px] pointer-events-none" />

                  <h3 className="text-xl font-black text-white mb-2 relative z-10 flex items-center">
                    <Phone className="w-5 h-5 text-[#E8B84B] mr-2" />
                    Request a Call Back
                  </h3>
                  <p className="text-slate-400 text-sm mb-6 leading-relaxed relative z-10 border-b border-slate-800/50 pb-5">Provide your details and a representative will contact you to discuss your requirement.</p>

                  {callStatus === 'success' ? (
                    <div className="bg-emerald-950/20 border border-emerald-500/30 rounded-2xl p-6 text-center">
                      <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto mb-3" />
                      <p className="text-white font-bold mb-1">Request Received</p>
                      <p className="text-slate-400 text-sm mb-2">We will contact you shortly.</p>
                      <p className="text-emerald-400 text-xs font-mono tracking-wider">Ref: {callRef}</p>
                    </div>
                  ) : (
                    <form className="space-y-3.5 relative z-10" onSubmit={handleCallSubmit}>
                      <input required type="text" placeholder="Full name" className="w-full bg-[#131C2E]/50 border border-slate-700/60 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-[#E8B84B]/50 transition-colors text-sm" value={callData.name} onChange={e => updateCallData({ name: e.target.value })} />
                      <input required type="text" placeholder="Company" className="w-full bg-[#131C2E]/50 border border-slate-700/60 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-[#E8B84B]/50 transition-colors text-sm" value={callData.company} onChange={e => updateCallData({ company: e.target.value })} />
                      <div className="grid grid-cols-2 gap-3">
                        <input required type="tel" placeholder="Phone" className="w-full bg-[#131C2E]/50 border border-slate-700/60 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-[#E8B84B]/50 transition-colors text-sm" value={callData.phone} onChange={e => updateCallData({ phone: e.target.value })} />
                        <input required type="email" placeholder="Email" className="w-full bg-[#131C2E]/50 border border-slate-700/60 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-[#E8B84B]/50 transition-colors text-sm" value={callData.email} onChange={e => updateCallData({ email: e.target.value })} />
                      </div>
                      <select required className="w-full bg-[#131C2E]/50 border border-slate-700/60 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#E8B84B]/50 transition-colors text-sm appearance-none cursor-pointer" value={callData.preferredContactTime} onChange={e => updateCallData({ preferredContactTime: e.target.value })}>
                        <option value="" className="text-slate-500">Preferred contact time</option>
                        <option>Morning (8:30 AM - 12:00 PM)</option>
                        <option>Afternoon (12:00 PM - 5:30 PM)</option>
                        <option>Any time during business hours</option>
                      </select>
                      <input type="text" placeholder="Brief reason for the call" className="w-full bg-[#131C2E]/50 border border-slate-700/60 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-[#E8B84B]/50 transition-colors text-sm" value={callData.reason} onChange={e => updateCallData({ reason: e.target.value })} />

                      {callStatus === 'error' && (
                        <p className="text-red-400 text-xs mt-2 bg-red-950/30 p-2 rounded-lg">{callError}</p>
                      )}

                      <button disabled={callStatus === 'submitting'} type="submit" className="w-full py-3.5 bg-gradient-to-r from-[#E8B84B] to-[#d4a643] hover:from-[#f0c565] hover:to-[#E8B84B] text-[#0A101A] font-black rounded-xl transition-all duration-300 text-sm shadow-[0_0_15px_rgba(232,184,75,0.2)] hover:shadow-[0_0_25px_rgba(232,184,75,0.4)] mt-4 disabled:opacity-60 flex items-center justify-center group">
                        {callStatus === 'submitting' ? 'Submitting...' : 'Request Call Back'}
                        {callStatus !== 'submitting' && <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />}
                      </button>
                    </form>
                  )}
                </div>

                {/* What Happens Next */}
                <div className="bg-[#050B14]/80 backdrop-blur-md border border-slate-700/50 rounded-2xl p-7">
                  <h3 className="text-lg font-black text-white mb-1">What Happens Next?</h3>
                  <p className="text-slate-500 text-xs mb-6 uppercase tracking-widest font-bold">A clear route to action</p>
                  <div className="relative">
                    {/* Animated vertical line */}
                    <div className="absolute left-[15px] top-2 bottom-2 w-px bg-slate-800 overflow-hidden">
                      <motion.div
                        className="w-full h-[40%] bg-gradient-to-b from-transparent via-[#E8B84B] to-transparent"
                        animate={{ y: ['-100%', '350%'] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                      />
                    </div>

                    <div className="space-y-6 relative z-10">
                      {whatHappensNext.map((step, idx) => (
                        <div key={idx} className="flex items-start gap-4 group">
                          <motion.div
                            animate={{
                              borderColor: ['#475569', '#E8B84B', '#475569', '#475569'],
                              boxShadow: ['0 0 0 rgba(232,184,75,0)', '0 0 15px rgba(232,184,75,0.6)', '0 0 0 rgba(232,184,75,0)', '0 0 0 rgba(232,184,75,0)']
                            }}
                            transition={{
                              duration: 3,
                              repeat: Infinity,
                              delay: idx * 0.75,
                              times: [0, 0.1, 0.3, 1]
                            }}
                            className="w-8 h-8 rounded-full bg-[#0A101A] border border-slate-600 flex items-center justify-center shrink-0"
                          >
                            <motion.span
                              animate={{ color: ['#94a3b8', '#E8B84B', '#94a3b8', '#94a3b8'] }}
                              transition={{
                                duration: 3,
                                repeat: Infinity,
                                delay: idx * 0.75,
                                times: [0, 0.1, 0.3, 1]
                              }}
                              className="text-slate-400 text-xs font-black"
                            >
                              {step.step}
                            </motion.span>
                          </motion.div>
                          <div className="pt-1.5">
                            <h4 className="text-slate-200 font-bold text-sm mb-1">{step.title}</h4>
                            <p className="text-slate-400 text-xs leading-relaxed">{step.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Visit Sanota */}
                <div className="bg-[#050B14]/80 backdrop-blur-md border border-slate-700/50 rounded-2xl p-7">
                  <h3 className="text-lg font-black text-white mb-5 flex items-center">
                    <MapPin className="w-5 h-5 text-slate-400 mr-2" />
                    Visit Sanota
                  </h3>
                  <div className="bg-[#131C2E] h-40 rounded-xl border border-slate-700/60 mb-5 overflow-hidden relative group">
                    <iframe
                      src="https://maps.google.com/maps?q=No%2016,%20Wewelwala%20Road,%20Bataganwila,%20Galle&t=&z=14&ie=UTF8&iwloc=&output=embed"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                    ></iframe>
                  </div>
                  <p className="text-slate-300 text-sm mb-1 font-semibold tracking-wide">Sanota (Pvt) Ltd</p>
                  <p className="text-slate-400 text-xs mb-5">No 16, Wewelwala Road,<br />Bataganwila, Galle.</p>

                  <div className="space-y-3">
                    <a href="https://maps.google.com/?q=Sanota+Pvt+Ltd+Galle" target="_blank" rel="noreferrer" className="w-full py-3 bg-[#131C2E] hover:bg-slate-800 border border-slate-700 text-white font-bold rounded-xl transition-colors text-xs flex items-center justify-center">
                      Open in Google Maps
                    </a>
                    <p className="text-slate-500 text-[10px] uppercase tracking-wider text-center mt-3 pt-3 border-t border-slate-800">Visits should be arranged in advance</p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* ── Social / Connect ── */}
        <section className="py-20 bg-transparent border-b border-slate-800/60 relative z-10 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#E8B84B]/[0.02] blur-[100px] rounded-full pointer-events-none" />

          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <p className="text-xs font-black text-[#E8B84B] uppercase tracking-[0.3em] mb-4">Connect With Sanota</p>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-5 tracking-tight">Follow Our Work</h2>
            <p className="text-slate-400 text-base md:text-lg max-w-2xl mx-auto mb-12 leading-relaxed">
              Stay connected for project stories, product developments, engineering videos and company news.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-4xl mx-auto mb-12">
              {[
                { name: 'LinkedIn', icon: LinkedinIcon, link: '#', hoverClass: 'hover:border-blue-500/50 hover:shadow-[0_0_40px_rgba(59,130,246,0.15)]', iconColor: 'text-blue-400 group-hover:text-blue-300', glowColor: 'bg-blue-500' },
                { name: 'Facebook', icon: FacebookIcon, link: '#', hoverClass: 'hover:border-blue-600/50 hover:shadow-[0_0_40px_rgba(37,99,235,0.15)]', iconColor: 'text-blue-500 group-hover:text-blue-400', glowColor: 'bg-blue-600' },
                { name: 'YouTube', icon: YoutubeIcon, link: '#', hoverClass: 'hover:border-red-500/50 hover:shadow-[0_0_40px_rgba(239,68,68,0.15)]', iconColor: 'text-red-500 group-hover:text-red-400', glowColor: 'bg-red-500' }
              ].map((social, idx) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={idx}
                    href={social.link}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.15, ease: "easeOut" }}
                    whileHover={{ y: -8, scale: 1.02 }}
                    whileTap={{ scale: 0.96 }}
                    className={`bg-[#050B14]/80 backdrop-blur-md border border-slate-800/80 border-t-slate-700/60 rounded-3xl px-6 py-7 flex flex-col items-center justify-center transition-colors duration-300 group relative overflow-hidden ${social.hoverClass}`}
                  >
                    <div className="absolute inset-0 bg-gradient-to-b from-white/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                    {/* Dynamic hover glow behind icon */}
                    <div className={`absolute top-8 left-1/2 -translate-x-1/2 w-16 h-16 ${social.glowColor} rounded-full blur-[40px] opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />

                    <div className="w-14 h-14 rounded-2xl bg-[#131C2E] border border-slate-700/50 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-300 shadow-lg relative z-10">
                      <Icon className={`w-6 h-6 transition-colors duration-300 ${social.iconColor}`} />
                    </div>
                    <h3 className="text-xl font-bold text-white relative z-10">{social.name}</h3>
                  </motion.a>
                );
              })}
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Link href="/media" className="inline-flex items-center px-8 py-4 bg-[#0A101A] hover:bg-[#131C2E] border border-slate-700 hover:border-[#E8B84B]/40 text-white font-black rounded-2xl transition-all duration-500 group shadow-xl hover:shadow-[0_0_30px_rgba(232,184,75,0.15)]">
                <span className="text-[#E8B84B] mr-3 group-hover:text-[#f0c565] transition-colors">Visit the Media Centre</span>
                <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1.5 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </section>

        {/* ── Final CTA ── */}
        <section className="py-20 bg-transparent relative z-10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center bg-[#131C2E]/40 backdrop-blur-sm border border-slate-800/60 rounded-3xl p-10 md:p-14 shadow-2xl">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4 tracking-tight">
              Start With the <span className="text-[#E8B84B]">Requirement</span>
            </h2>
            <p className="text-slate-400 text-sm md:text-base mb-10 leading-relaxed max-w-2xl mx-auto">
              Whether you need to solve a machinery problem, automate a process, develop a new system or arrange ongoing technical support — Sanota is ready to understand your requirement.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-8">
              <Link href="/tell-us-your-challenge" className="w-full sm:w-auto px-8 py-4 bg-[#E8B84B] hover:bg-[#d4a643] text-[#0A101A] font-black rounded-xl transition-all duration-300 flex items-center justify-center shadow-[0_0_20px_rgba(232,184,75,0.15)] hover:shadow-[0_0_30px_rgba(232,184,75,0.3)] hover:-translate-y-0.5 group text-sm">
                Tell Us Your Challenge <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </Link>
              <a href="#contact-form" className="w-full sm:w-auto px-8 py-4 bg-[#050B14] hover:bg-[#0A101A] text-slate-300 hover:text-white font-black rounded-xl border border-slate-700/60 hover:border-slate-500/60 transition-all duration-300 flex items-center justify-center shadow-lg text-sm">
                Contact Sanota
              </a>
            </div>
            <p className="text-slate-600 text-xs italic tracking-wide">From operational challenge to integrated engineering solution.</p>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
