import Link from "next/link";
import { Phone, Mail, MessageSquare, ArrowRight, CheckCircle2 } from "lucide-react";

export function WhatHappensNext() {
  const steps = [
    {
      title: "1. We Review Your Requirement",
      desc: "Your enquiry will be reviewed to understand the operational need and the technical capabilities that may be required."
    },
    {
      title: "2. We Connect the Right Specialists",
      desc: "Sanota will direct the enquiry to the appropriate engineering, automation, IoT, software, project or maintenance team."
    },
    {
      title: "3. We Contact You",
      desc: "A representative will contact you to clarify the requirement and agree on the next step."
    },
    {
      title: "4. We Assess the Opportunity",
      desc: "Depending on the requirement, the next step may be an online discussion, document review, site visit or technical assessment."
    },
    {
      title: "5. We Recommend a Way Forward",
      desc: "Following the initial assessment, Sanota will propose the appropriate approach, scope or development pathway."
    }
  ];

  return (
    <section className="py-12 lg:py-16 bg-[#050B14] border-t border-slate-800/50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-[#E8B84B] font-bold tracking-widest uppercase text-sm mb-4">What Happens Next?</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">A Practical Review by the Right Team</h3>
        </div>
        
        <div className="space-y-6">
          {steps.map((step, idx) => (
            <div key={idx} className="glowing-card flex bg-[#131C2E]/40 border border-slate-800 rounded-2xl p-6 hover:bg-[#131C2E]/80 transition-colors">
              <div className="mr-6 flex-shrink-0">
                <div className="w-10 h-10 rounded-full bg-[#E8B84B]/10 flex items-center justify-center border border-[#E8B84B]/20">
                  <CheckCircle2 className="w-5 h-5 text-[#E8B84B]" />
                </div>
              </div>
              <div>
                <h4 className="text-white font-bold text-lg mb-2">{step.title}</h4>
                <p className="text-slate-400 leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-[#2E5EAA]/10 border border-[#2E5EAA]/20 rounded-2xl p-6 text-center">
          <p className="text-slate-300">
            <span className="font-bold text-white mr-2">Every requirement is different.</span> 
            Sanota will not recommend a standard solution before understanding the operational challenge.
          </p>
        </div>
      </div>
    </section>
  );
}

export function AlternativeContact() {
  return (
    <section className="py-12 lg:py-16 bg-transparent relative z-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-[#E8B84B] font-bold tracking-widest uppercase text-sm mb-4">Alternative Contact Options</h2>
        <h3 className="text-3xl md:text-4xl font-bold text-white mb-12">Prefer to Speak to Someone Directly?</h3>
        
        <p className="text-slate-400 mb-12 max-w-2xl mx-auto">
          You may contact Sanota using the method most convenient for you. 
          For urgent operational matters, please identify the enquiry as <strong className="text-white font-semibold">Urgent Technical Support</strong> when contacting us.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <a href="tel:+94740709989" className="flex flex-col items-center p-8 bg-[#131C2E]/40 backdrop-blur-md border border-slate-700/50 rounded-3xl hover:border-blue-500/40 hover:shadow-[0_0_40px_rgba(59,130,246,0.15)] hover:-translate-y-1 transition-all duration-500 group relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            <div className="w-14 h-14 rounded-2xl bg-[#050B14] border border-slate-700/50 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-300 shadow-lg relative z-10">
              <Phone className="w-6 h-6 text-blue-400 group-hover:text-blue-300 transition-colors" />
            </div>
            <span className="text-white font-bold mb-2 relative z-10 group-hover:text-blue-200 transition-colors">Request a Call</span>
            <span className="text-slate-400 text-sm relative z-10">+94 740 70 99 89</span>
          </a>
          
          <a href="mailto:info@sanotaglobal.com" className="flex flex-col items-center p-8 bg-[#131C2E]/40 backdrop-blur-md border border-slate-700/50 rounded-3xl hover:border-emerald-500/40 hover:shadow-[0_0_40px_rgba(16,185,129,0.15)] hover:-translate-y-1 transition-all duration-500 group relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            <div className="w-14 h-14 rounded-2xl bg-[#050B14] border border-slate-700/50 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-300 shadow-lg relative z-10">
              <Mail className="w-6 h-6 text-emerald-400 group-hover:text-emerald-300 transition-colors" />
            </div>
            <span className="text-white font-bold mb-2 relative z-10 group-hover:text-emerald-200 transition-colors">Send an Email</span>
            <span className="text-slate-400 text-sm relative z-10">info@sanotaglobal.com</span>
          </a>

          <Link href="/contact" className="flex flex-col items-center p-8 bg-[#131C2E]/40 backdrop-blur-md border border-slate-700/50 rounded-3xl hover:border-[#E8B84B]/40 hover:shadow-[0_0_40px_rgba(232,184,75,0.15)] hover:-translate-y-1 transition-all duration-500 group relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#E8B84B]/10 rounded-full blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            <div className="w-14 h-14 rounded-2xl bg-[#050B14] border border-slate-700/50 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-300 shadow-lg relative z-10">
              <MessageSquare className="w-6 h-6 text-[#E8B84B] group-hover:text-[#f0c565] transition-colors" />
            </div>
            <span className="text-white font-bold mb-2 relative z-10 group-hover:text-[#f0c565] transition-colors">Contact Sanota</span>
            <span className="text-slate-400 text-sm relative z-10">View Locations</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

export function FinalCTA() {
  return (
    <section className="py-12 lg:py-16 bg-transparent border-t border-slate-800/30 relative z-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center bg-[#131C2E]/30 backdrop-blur-md border border-slate-700/40 rounded-[2.5rem] p-12 md:p-16 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-[#E8B84B]/5 blur-[100px] pointer-events-none" />
        <div className="relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Start With the Challenge. <br className="hidden md:block"/>
            <span className="text-[#E8B84B]">We Will Help Define the Solution.</span>
          </h2>
          <p className="text-slate-400 text-lg mb-12 leading-relaxed max-w-3xl mx-auto">
            From machinery and automation to IoT, software, implementation and lifecycle support, Sanota brings the necessary capabilities together around your requirement.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="px-8 py-4 bg-[#E8B84B] hover:bg-[#d4a643] text-[#0B1220] font-bold rounded-xl transition-all duration-300 flex items-center justify-center shadow-lg shadow-[#E8B84B]/20 hover:shadow-[#E8B84B]/40 hover:-translate-y-1"
            >
              Tell Us Your Challenge <ArrowRight className="ml-2 w-5 h-5" />
            </button>
            <Link 
              href="/services" 
              className="px-8 py-4 bg-[#050B14] hover:bg-[#0A101A] text-white font-bold rounded-xl border border-slate-700/60 hover:border-slate-500/60 transition-all duration-300 flex items-center justify-center shadow-lg"
            >
              Explore Sanota's Capabilities
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
