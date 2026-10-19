import Link from "next/link";
import { Phone, Mail, MessageSquare, ArrowRight, CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { challengeES } from "@/locales/es/challenge";
import { challengeDE } from "@/locales/de/challenge";

export function WhatHappensNext() {
  const { language } = useLanguage();
  const isEs = language === "es";
  const isDe = language === "de";
  const ch = isDe ? challengeDE : isEs ? challengeES : null;

  const defaultSteps = [
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

  const steps = (isEs || isDe) && ch ? ch.whatHappensNext.steps.map(s => ({
    title: `${s.num}. ${s.title}`,
    desc: s.desc
  })) : defaultSteps;

  return (
    <section className="py-12 lg:py-16 border-t border-slate-200 dark:border-slate-800/50 bg-transparent">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-[#C59B27] dark:text-[#E8B84B] font-bold tracking-widest uppercase text-sm mb-4">
            {ch ? ch.whatHappensNext.heading : "What Happens Next?"}
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-[#17135B] dark:text-white mb-6">
            {ch ? ch.whatHappensNext.subheading : "A Practical Review by the Right Team"}
          </h3>
        </div>
        
        <div className="space-y-6">
          {steps.map((step, idx) => (
            <div key={idx} className="glowing-card flex bg-white dark:bg-[#131C2E]/40 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 hover:bg-slate-50 dark:hover:bg-[#131C2E]/80 transition-colors shadow-sm dark:shadow-none">
              <div className="mr-6 flex-shrink-0">
                <div className="w-10 h-10 rounded-full bg-[#C59B27]/10 dark:bg-[#E8B84B]/10 flex items-center justify-center border border-[#C59B27]/20 dark:border-[#E8B84B]/20">
                  <CheckCircle2 className="w-5 h-5 text-[#C59B27] dark:text-[#E8B84B]" />
                </div>
              </div>
              <div>
                <h4 className="text-[#17135B] dark:text-white font-bold text-lg mb-2">{step.title}</h4>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-blue-50 dark:bg-[#2E5EAA]/10 border border-blue-200 dark:border-[#2E5EAA]/20 rounded-2xl p-6 text-center shadow-sm">
          <p className="text-slate-700 dark:text-slate-300">
            {isDe ? (
              <>
                <span className="font-bold text-[#17135B] dark:text-white mr-2">Jede Anforderung ist individuell.</span>
                Sanota wird keine Standardlösung empfehlen, bevor die jeweilige betriebliche Herausforderung verstanden wurde.
              </>
            ) : isEs ? (
              <>
                <span className="font-bold text-[#17135B] dark:text-white mr-2">Cada requisito es diferente.</span>
                Sanota no recomendará una solución estándar sin antes comprender el desafío operativo.
              </>
            ) : (
              <>
                <span className="font-bold text-[#17135B] dark:text-white mr-2">Every requirement is different.</span>
                Sanota will not recommend a standard solution before understanding the operational challenge.
              </>
            )}
          </p>
        </div>
      </div>
    </section>
  );
}

export function AlternativeContact() {
  const { language } = useLanguage();
  const isEs = language === "es";
  const isDe = language === "de";
  const ch = isDe ? challengeDE : isEs ? challengeES : null;

  return (
    <section className="py-12 lg:py-16 bg-transparent relative z-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-[#C59B27] dark:text-[#E8B84B] font-bold tracking-widest uppercase text-sm mb-4">
          {isDe ? "Alternative Kontaktmöglichkeiten" : isEs ? "Opciones Alternativas de Contacto" : "Alternative Contact Options"}
        </h2>
        <h3 className="text-3xl md:text-4xl font-bold text-[#17135B] dark:text-white mb-12">
          {ch ? ch.alternativeContact.heading : "Prefer to Speak to Someone Directly?"}
        </h3>
        
        <p className="text-slate-600 dark:text-slate-400 mb-12 max-w-2xl mx-auto">
          {isDe ? (
            <>
              Sie können Sanota auf dem für Sie bequemsten Weg kontaktieren. Bei dringenden betrieblichen Angelegenheiten kennzeichnen Sie Ihre Anfrage bitte als <strong className="text-[#17135B] dark:text-white font-semibold">Dringender technischer Support</strong>, wenn Sie uns kontaktieren.
            </>
          ) : isEs ? (
            <>
              Puede ponerse en contacto con Sanota utilizando el método que le resulte más conveniente. Para asuntos operativos urgentes, indique en su consulta que se trata de <strong className="text-[#17135B] dark:text-white font-semibold">Soporte Técnico Urgente</strong> al contactarnos.
            </>
          ) : (
            <>
              You may contact Sanota using the method most convenient for you. For urgent operational matters, please identify the enquiry as <strong className="text-[#17135B] dark:text-white font-semibold">Urgent Technical Support</strong> when contacting us.
            </>
          )}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <a href="tel:+94740709989" className="flex flex-col items-center p-8 bg-white/80 dark:bg-[#131C2E]/40 backdrop-blur-md border border-slate-200 dark:border-slate-700/50 rounded-3xl hover:border-blue-500/40 hover:shadow-xl dark:hover:shadow-[0_0_40px_rgba(59,130,246,0.15)] hover:-translate-y-1 transition-all duration-500 group relative overflow-hidden shadow-sm">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            <div className="w-14 h-14 rounded-2xl bg-blue-50 dark:bg-[#050B14] border border-blue-200 dark:border-slate-700/50 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-300 shadow-md relative z-10">
              <Phone className="w-6 h-6 text-[#2E5EAA] dark:text-blue-400 group-hover:text-blue-600 dark:group-hover:text-blue-300 transition-colors" />
            </div>
            <span className="text-[#17135B] dark:text-white font-bold mb-2 relative z-10 group-hover:text-blue-600 dark:group-hover:text-blue-200 transition-colors">
              {ch ? ch.alternativeContact.callButton : "Request a Call"}
            </span>
            <span className="text-slate-500 dark:text-slate-400 text-sm relative z-10">+94 740 70 99 89</span>
          </a>
          
          <a href="mailto:info@sanotaglobal.com" className="flex flex-col items-center p-8 bg-white/80 dark:bg-[#131C2E]/40 backdrop-blur-md border border-slate-200 dark:border-slate-700/50 rounded-3xl hover:border-emerald-500/40 hover:shadow-xl dark:hover:shadow-[0_0_40px_rgba(16,185,129,0.15)] hover:-translate-y-1 transition-all duration-500 group relative overflow-hidden shadow-sm">
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            <div className="w-14 h-14 rounded-2xl bg-emerald-50 dark:bg-[#050B14] border border-emerald-200 dark:border-slate-700/50 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-300 shadow-md relative z-10">
              <Mail className="w-6 h-6 text-emerald-600 dark:text-emerald-400 group-hover:text-emerald-700 dark:group-hover:text-emerald-300 transition-colors" />
            </div>
            <span className="text-[#17135B] dark:text-white font-bold mb-2 relative z-10 group-hover:text-emerald-600 dark:group-hover:text-emerald-200 transition-colors">
              {ch ? ch.alternativeContact.emailButton : "Send an Email"}
            </span>
            <span className="text-slate-500 dark:text-slate-400 text-sm relative z-10">info@sanotaglobal.com</span>
          </a>

          <Link href="/contact" className="flex flex-col items-center p-8 bg-white/80 dark:bg-[#131C2E]/40 backdrop-blur-md border border-slate-200 dark:border-slate-700/50 rounded-3xl hover:border-[#C59B27]/40 dark:hover:border-[#E8B84B]/40 hover:shadow-xl dark:hover:shadow-[0_0_40px_rgba(232,184,75,0.15)] hover:-translate-y-1 transition-all duration-500 group relative overflow-hidden shadow-sm">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#C59B27]/10 dark:bg-[#E8B84B]/10 rounded-full blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            <div className="w-14 h-14 rounded-2xl bg-amber-50 dark:bg-[#050B14] border border-amber-200 dark:border-slate-700/50 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-300 shadow-md relative z-10">
              <MessageSquare className="w-6 h-6 text-[#C59B27] dark:text-[#E8B84B] group-hover:text-[#B38A22] dark:group-hover:text-[#f0c565] transition-colors" />
            </div>
            <span className="text-[#17135B] dark:text-white font-bold mb-2 relative z-10 group-hover:text-[#C59B27] dark:group-hover:text-[#f0c565] transition-colors">
              {ch ? ch.alternativeContact.contactButton : "Contact Sanota"}
            </span>
            <span className="text-slate-500 dark:text-slate-400 text-sm relative z-10">
              {isDe ? "Standorte ansehen" : isEs ? "Ver Ubicaciones" : "View Locations"}
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}

export function FinalCTA() {
  const { language } = useLanguage();
  const isEs = language === "es";
  const isDe = language === "de";

  return (
    <section className="py-12 lg:py-16 bg-transparent border-t border-slate-200 dark:border-slate-800/30 relative z-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center bg-white dark:bg-[#131C2E]/30 backdrop-blur-md border border-slate-200 dark:border-slate-700/40 rounded-[2.5rem] p-12 md:p-16 shadow-xl relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-[#C59B27]/5 dark:bg-[#E8B84B]/5 blur-[100px] pointer-events-none" />
        <div className="relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold text-[#17135B] dark:text-white mb-6 leading-tight">
            {isDe ? (
              <>
                Beginnen Sie mit der Herausforderung. <br className="hidden md:block"/>
                <span className="text-[#C59B27] dark:text-[#E8B84B]">Wir unterstützen Sie bei der Entwicklung der passenden Lösung.</span>
              </>
            ) : isEs ? (
              <>
                Comience con el Desafío. <br className="hidden md:block"/>
                <span className="text-[#C59B27] dark:text-[#E8B84B]">Le Ayudaremos a Definir la Solución.</span>
              </>
            ) : (
              <>
                Start With the Challenge. <br className="hidden md:block"/>
                <span className="text-[#C59B27] dark:text-[#E8B84B]">We Will Help Define the Solution.</span>
              </>
            )}
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg mb-12 leading-relaxed max-w-3xl mx-auto">
            {isDe ? "Von Maschinenbau und Automatisierung bis hin zu IoT, Software, Implementierung und Lebenszyklusbetreuung bündelt Sanota alle erforderlichen Kompetenzen für Ihre Anforderungen." : isEs ? "Desde maquinaria y automatización hasta IoT, software, implementación y soporte durante todo el ciclo de vida, Sanota reúne las capacidades necesarias en torno a sus requisitos." : "From machinery and automation to IoT, software, implementation and lifecycle support, Sanota brings the necessary capabilities together around your requirement."}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="px-8 py-4 bg-[#C59B27] hover:bg-[#B38A22] dark:bg-[#E8B84B] dark:hover:bg-[#d4a643] text-white dark:text-[#0B1220] font-bold rounded-xl transition-all duration-300 flex items-center justify-center shadow-lg hover:-translate-y-1"
            >
              {isDe ? "Schildern Sie uns Ihre Herausforderung" : isEs ? "Cuéntanos tu desafío" : "Tell Us Your Challenge"} <ArrowRight className="ml-2 w-5 h-5" />
            </button>
            <Link 
              href="/services" 
              className="px-8 py-4 bg-slate-100 dark:bg-[#050B14] hover:bg-slate-200 dark:hover:bg-[#0A101A] text-[#17135B] dark:text-white font-bold rounded-xl border border-slate-300 dark:border-slate-700/60 hover:border-slate-400 dark:hover:border-slate-500/60 transition-all duration-300 flex items-center justify-center shadow-sm"
            >
              {isDe ? "Sanota-Kompetenzen erkunden" : isEs ? "Explorar Capacidades de Sanota" : "Explore Sanota's Capabilities"}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
