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
    <section className="py-24 bg-[#050B14] border-t border-slate-800/50">
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
    <section className="py-24 bg-[#131C2E]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-[#E8B84B] font-bold tracking-widest uppercase text-sm mb-4">Alternative Contact Options</h2>
        <h3 className="text-3xl md:text-4xl font-bold text-white mb-12">Prefer to Speak to Someone Directly?</h3>
        
        <p className="text-slate-400 mb-12 max-w-2xl mx-auto">
          You may contact Sanota using the method most convenient for you. 
          For urgent operational matters, please identify the enquiry as <strong className="text-white font-semibold">Urgent Technical Support</strong> when contacting us.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <a href="tel:+94740709989" className="flex flex-col items-center p-8 bg-[#050B14] border border-slate-800 rounded-2xl hover:border-[#E8B84B]/50 hover:bg-[#0B1220] transition-all group">
            <div className="w-14 h-14 rounded-full bg-[#131C2E] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Phone className="w-6 h-6 text-[#E8B84B]" />
            </div>
            <span className="text-white font-bold mb-2">Request a Call</span>
            <span className="text-slate-400 text-sm">+94 740 70 99 89</span>
          </a>
          
          <a href="mailto:info@sanotaglobal.com" className="flex flex-col items-center p-8 bg-[#050B14] border border-slate-800 rounded-2xl hover:border-[#E8B84B]/50 hover:bg-[#0B1220] transition-all group">
            <div className="w-14 h-14 rounded-full bg-[#131C2E] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Mail className="w-6 h-6 text-[#E8B84B]" />
            </div>
            <span className="text-white font-bold mb-2">Send an Email</span>
            <span className="text-slate-400 text-sm">info@sanotaglobal.com</span>
          </a>

          <Link href="/contact" className="flex flex-col items-center p-8 bg-[#050B14] border border-slate-800 rounded-2xl hover:border-[#E8B84B]/50 hover:bg-[#0B1220] transition-all group">
            <div className="w-14 h-14 rounded-full bg-[#131C2E] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <MessageSquare className="w-6 h-6 text-[#E8B84B]" />
            </div>
            <span className="text-white font-bold mb-2">Contact Sanota</span>
            <span className="text-slate-400 text-sm">View Locations</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

export function FinalCTA() {
  return (
    <section className="py-24 bg-[#050B14] border-t border-slate-800/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
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
            className="px-8 py-4 bg-[#E8B84B] hover:bg-[#d4a643] text-[#0B1220] font-bold rounded-lg transition-colors flex items-center justify-center"
          >
            Tell Us Your Challenge <ArrowRight className="ml-2 w-5 h-5" />
          </button>
          <Link 
            href="/services" 
            className="px-8 py-4 bg-[#131C2E] hover:bg-slate-800 text-white font-bold rounded-lg border border-slate-700 transition-colors flex items-center justify-center"
          >
            Explore Sanota's Capabilities
          </Link>
        </div>
      </div>
    </section>
  );
}
