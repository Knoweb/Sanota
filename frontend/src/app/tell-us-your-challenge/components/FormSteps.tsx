import React, { useRef } from 'react';
import { ChallengeFormData, CoreRequirementId } from '../types';
import { UploadCloud } from 'lucide-react';

interface StepProps {
  data: ChallengeFormData;
  updateData: (fields: Partial<ChallengeFormData>) => void;
  showErrors?: boolean;
}

// ---------------------------------------------------------
// STEP 1
// ---------------------------------------------------------

export function Step1({ data, updateData, showErrors }: StepProps) {
  const options: { id: CoreRequirementId; title: string; desc: string }[] = [
    { id: "modernize", title: "Modernize or Repair a Machine", desc: "Improve the reliability, productivity, safety or performance of existing machinery." },
    { id: "automate", title: "Automate a Process", desc: "Reduce manual work, improve consistency or introduce automated control into an operation." },
    { id: "new_machine", title: "Develop a New Machine", desc: "Design and build machinery or equipment around a specific production or operational requirement." },
    { id: "complete_system", title: "Develop a Complete System", desc: "Create or integrate a production line, processing system, facility solution or multi-technology project." },
    { id: "iot", title: "Introduce IoT or Digital Monitoring", desc: "Connect machinery, equipment or facilities to sensors, dashboards, alerts, reports or software applications." },
    { id: "product", title: "Develop a Product or Prototype", desc: "Transform an idea or operational requirement into a designed, tested and practical product." },
    { id: "amc", title: "Arrange AMC or Maintenance Support", desc: "Obtain planned maintenance and technical support for Sanota-built or eligible third-party systems." },
    { id: "consultation", title: "Request Engineering Consultation", desc: "Discuss an operational concern, opportunity or concept when the appropriate solution is not yet clear." },
  ];

  const toggleOption = (id: CoreRequirementId) => {
    if (data.coreRequirements.includes(id)) {
      updateData({ coreRequirements: data.coreRequirements.filter(req => req !== id) });
    } else {
      updateData({ coreRequirements: [...data.coreRequirements, id] });
    }
  };

  return (
    <div className="animate-in fade-in slide-in-from-right-4 duration-300">
      <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">What would you like help with?</h2>
      <p className="text-slate-400 mb-8">Select the option that most closely matches your requirement. You may select more than one.</p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
        {options.map((opt) => {
          const isSelected = data.coreRequirements.includes(opt.id);
          return (
            <button
              key={opt.id}
              onClick={() => toggleOption(opt.id)}
              className={`w-full text-left p-5 rounded-xl border transition-all ${
                isSelected 
                  ? 'border-[#E8B84B] bg-[#E8B84B]/10 shadow-[0_0_15px_rgba(232,184,75,0.15)]' 
                  : 'border-slate-700 bg-[#0B1220] hover:border-[#2E5EAA] hover:bg-[#2E5EAA]/5'
              }`}
            >
              <div className="flex items-start">
                <div className={`w-5 h-5 mt-0.5 rounded border flex items-center justify-center mr-3 flex-shrink-0 transition-colors ${isSelected ? 'border-[#E8B84B] bg-[#E8B84B]' : 'border-slate-500 bg-[#131C2E]'}`}>
                  {isSelected && <svg className="w-3.5 h-3.5 text-[#0B1220]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>}
                </div>
                <div>
                  <h4 className={`font-bold text-lg mb-1 ${isSelected ? 'text-white' : 'text-slate-300'}`}>{opt.title}</h4>
                  <p className={`text-sm leading-relaxed ${isSelected ? 'text-[#E8B84B]/80' : 'text-slate-500'}`}>{opt.desc}</p>
                </div>
              </div>
            </button>
          );
        })}
      </div>
      {showErrors && data.coreRequirements.length === 0 && (
        <p className="text-red-500 text-sm mb-8 font-medium">Please complete this field before continuing.</p>
      )}

      <div className="bg-[#2E5EAA]/10 border border-[#2E5EAA]/20 rounded-xl p-4 text-sm text-slate-300 flex items-start">
        <svg className="w-5 h-5 text-[#2E5EAA] mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
        <p><span className="font-semibold text-white">Not sure which option to select?</span> Choose Request Engineering Consultation, and our team will help define the requirement.</p>
      </div>
    </div>
  );
}

// ---------------------------------------------------------
// STEP 2
// ---------------------------------------------------------

export function Step2({ data, updateData, showErrors }: StepProps) {
  const industries = [
    "Manufacturing", "Agriculture", "Food and beverage processing", "Tea",
    "Logistics or warehousing", "Energy or resource management",
    "Environmental or waste management", "Infrastructure or facilities",
    "Healthcare or biomedical", "Research or product development", "Other"
  ];

  const urgencies = [
    "Immediate operational issue", "Required within one month",
    "Required within three months", "Planned future project", "Timeline not yet decided"
  ];

  const toggleArrayItem = (field: keyof ChallengeFormData, val: string) => {
    const current = data[field] as string[];
    if (current.includes(val)) {
      updateData({ [field]: current.filter(x => x !== val) } as any);
    } else {
      updateData({ [field]: [...current, val] } as any);
    }
  };

  return (
    <div className="animate-in fade-in slide-in-from-right-4 duration-300">
      <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8">Tell Us About the Requirement</h2>

      <div className="space-y-8">
        
        {/* Core questions */}
        <div className="space-y-4">
          <label className="block text-white font-bold text-lg mb-1">What is happening now? *</label>
          <p className="text-slate-400 text-sm mb-3">Briefly describe the current situation, problem or opportunity.</p>
          <textarea 
            value={data.currentSituation}
            onChange={(e) => updateData({ currentSituation: e.target.value })}
            placeholder="For example: “This process is currently completed manually and causes production delays.”"
            className={`w-full bg-[#0B1220] rounded-lg px-4 py-3 text-white focus:outline-none transition-colors min-h-[100px] ${showErrors && data.currentSituation.trim() === '' ? 'border-2 border-red-500/50' : 'border border-slate-700 focus:border-[#E8B84B]'}`}
          />
          {showErrors && data.currentSituation.trim() === "" && (
            <p className="text-red-500 text-sm font-medium">Please complete this field before continuing.</p>
          )}
        </div>

        <div className="space-y-4">
          <label className="block text-white font-bold text-lg mb-1">What would you like to achieve? *</label>
          <p className="text-slate-400 text-sm mb-3">Tell us what should work better, differently or more efficiently.</p>
          <textarea 
            value={data.desiredOutcome}
            onChange={(e) => updateData({ desiredOutcome: e.target.value })}
            placeholder="For example: “We want to automate the process, reduce handling time and monitor production.”"
            className={`w-full bg-[#0B1220] rounded-lg px-4 py-3 text-white focus:outline-none transition-colors min-h-[100px] ${showErrors && data.desiredOutcome.trim() === '' ? 'border-2 border-red-500/50' : 'border border-slate-700 focus:border-[#E8B84B]'}`}
          />
          {showErrors && data.desiredOutcome.trim() === "" && (
            <p className="text-red-500 text-sm font-medium">Please complete this field before continuing.</p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-3">
            <label className="block text-white font-bold text-lg">Which industry or sector is this related to?</label>
            <select 
              value={data.industry}
              onChange={(e) => updateData({ industry: e.target.value })}
              className="w-full bg-[#0B1220] border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#E8B84B] transition-colors"
            >
              <option value="">Select industry</option>
              {industries.map(i => <option key={i} value={i}>{i}</option>)}
            </select>
          </div>

          <div className="space-y-3">
            <label className="block text-white font-bold text-lg">Where is the requirement located?</label>
            <input 
              type="text"
              value={data.location}
              onChange={(e) => updateData({ location: e.target.value })}
              placeholder="City, district and country"
              className="w-full bg-[#0B1220] border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#E8B84B] transition-colors"
            />
          </div>
        </div>

        <div className="space-y-3">
          <label className="block text-white font-bold text-lg mb-2">How urgent is the requirement?</label>
          <div className="flex flex-wrap gap-3">
            {urgencies.map((u) => (
              <label key={u} className={`cursor-pointer px-4 py-2 rounded-full border transition-all text-sm ${data.urgency === u ? 'bg-[#E8B84B]/10 border-[#E8B84B] text-[#E8B84B]' : 'bg-[#0B1220] border-slate-700 text-slate-300 hover:border-[#2E5EAA]'}`}>
                <input type="radio" className="hidden" checked={data.urgency === u} onChange={() => updateData({ urgency: u })} />
                {u}
              </label>
            ))}
          </div>
        </div>

        {/* --- CONDITIONAL QUESTIONS --- */}
        {data.coreRequirements.some(req => req !== 'consultation') && (
           <div className="mt-12 pt-8 border-t border-slate-800 space-y-12">
             <h3 className="text-xl font-bold text-white mb-6">Specific Details</h3>
             
             {data.coreRequirements.includes("modernize") && (
               <div className="glowing-card space-y-6 bg-[#0B1220]/50 p-6 rounded-xl border border-slate-800/50">
                 <h4 className="text-[#E8B84B] font-bold uppercase tracking-wider text-sm mb-4">Regarding: Modernize or Repair a Machine</h4>
                 
                 <div className="space-y-2">
                   <label className="text-white font-semibold">What type of machine or equipment is involved?</label>
                   <input type="text" value={data.mod_machineType} onChange={e => updateData({ mod_machineType: e.target.value })} className="w-full bg-[#0B1220] border border-slate-700 rounded-lg px-4 py-2.5 text-white focus:border-[#E8B84B] transition-colors" />
                 </div>

                 <div className="space-y-2">
                   <label className="text-white font-semibold block mb-2">What problem are you experiencing?</label>
                   <div className="flex flex-wrap gap-2">
                     {["Frequent breakdowns", "Reduced performance", "Obsolete controls or components", "Safety concerns", "High energy or operating cost", "Spare-parts difficulty", "Need for increased capacity", "Other"].map(opt => (
                       <label key={opt} className={`cursor-pointer px-3 py-1.5 rounded-lg border text-sm ${data.mod_problem === opt ? 'bg-[#E8B84B]/10 border-[#E8B84B] text-white' : 'border-slate-700 text-slate-400 hover:bg-[#131C2E]'}`}>
                         <input type="radio" className="hidden" checked={data.mod_problem === opt} onChange={() => updateData({ mod_problem: opt })} /> {opt}
                       </label>
                     ))}
                   </div>
                 </div>

                 <div className="space-y-2">
                   <label className="text-white font-semibold block mb-2">Is the machine currently operating?</label>
                   <div className="flex flex-wrap gap-2">
                     {["Yes", "Operating with limitations", "No", "Not sure"].map(opt => (
                       <label key={opt} className={`cursor-pointer px-4 py-1.5 rounded-lg border text-sm ${data.mod_isOperating === opt ? 'bg-[#E8B84B]/10 border-[#E8B84B] text-white' : 'border-slate-700 text-slate-400 hover:bg-[#131C2E]'}`}>
                         <input type="radio" className="hidden" checked={data.mod_isOperating === opt} onChange={() => updateData({ mod_isOperating: opt })} /> {opt}
                       </label>
                     ))}
                   </div>
                 </div>
               </div>
             )}

             {data.coreRequirements.includes("automate") && (
               <div className="glowing-card space-y-6 bg-[#0B1220]/50 p-6 rounded-xl border border-slate-800/50">
                 <h4 className="text-[#E8B84B] font-bold uppercase tracking-wider text-sm mb-4">Regarding: Automate a Process</h4>
                 
                 <div className="space-y-2">
                   <label className="text-white font-semibold">Which process would you like to automate?</label>
                   <input type="text" value={data.auto_process} onChange={e => updateData({ auto_process: e.target.value })} className="w-full bg-[#0B1220] border border-slate-700 rounded-lg px-4 py-2.5 text-white focus:border-[#E8B84B] transition-colors" />
                 </div>

                 <div className="space-y-2">
                   <label className="text-white font-semibold block mb-2">How is the process currently completed?</label>
                   <div className="flex flex-wrap gap-2">
                     {["Fully manual", "Partly automated", "Existing automation requires improvement", "New process", "Not sure"].map(opt => (
                       <label key={opt} className={`cursor-pointer px-3 py-1.5 rounded-lg border text-sm ${data.auto_currentState === opt ? 'bg-[#E8B84B]/10 border-[#E8B84B] text-white' : 'border-slate-700 text-slate-400 hover:bg-[#131C2E]'}`}>
                         <input type="radio" className="hidden" checked={data.auto_currentState === opt} onChange={() => updateData({ auto_currentState: opt })} /> {opt}
                       </label>
                     ))}
                   </div>
                 </div>

                 <div className="space-y-2">
                   <label className="text-white font-semibold block mb-2">What is the main expected improvement?</label>
                   <div className="flex flex-wrap gap-2">
                     {["Higher productivity", "Better consistency", "Reduced manual handling", "Improved safety", "Reduced waste", "Better monitoring and reporting", "Other"].map(opt => (
                       <label key={opt} className={`cursor-pointer px-3 py-1.5 rounded-lg border text-sm ${data.auto_expectedImprovement === opt ? 'bg-[#E8B84B]/10 border-[#E8B84B] text-white' : 'border-slate-700 text-slate-400 hover:bg-[#131C2E]'}`}>
                         <input type="radio" className="hidden" checked={data.auto_expectedImprovement === opt} onChange={() => updateData({ auto_expectedImprovement: opt })} /> {opt}
                       </label>
                     ))}
                   </div>
                 </div>
               </div>
             )}

             {data.coreRequirements.includes("new_machine") && (
               <div className="glowing-card space-y-6 bg-[#0B1220]/50 p-6 rounded-xl border border-slate-800/50">
                 <h4 className="text-[#E8B84B] font-bold uppercase tracking-wider text-sm mb-4">Regarding: Develop a New Machine</h4>
                 <div className="space-y-2">
                   <label className="text-white font-semibold">What should the machine do?</label>
                   <input type="text" value={data.new_whatShouldItDo} onChange={e => updateData({ new_whatShouldItDo: e.target.value })} className="w-full bg-[#0B1220] border border-slate-700 rounded-lg px-4 py-2.5 text-white focus:border-[#E8B84B] transition-colors" />
                 </div>
                 <div className="space-y-2">
                   <label className="text-white font-semibold">What material or product will it handle?</label>
                   <input type="text" value={data.new_material} onChange={e => updateData({ new_material: e.target.value })} className="w-full bg-[#0B1220] border border-slate-700 rounded-lg px-4 py-2.5 text-white focus:border-[#E8B84B] transition-colors" />
                 </div>
                 <div className="space-y-2">
                   <label className="text-white font-semibold block mb-2">Do you have an existing concept, drawing or reference?</label>
                   <div className="flex flex-wrap gap-2">
                     {["Yes", "No", "Partly developed"].map(opt => (
                       <label key={opt} className={`cursor-pointer px-4 py-1.5 rounded-lg border text-sm ${data.new_hasConcept === opt ? 'bg-[#E8B84B]/10 border-[#E8B84B] text-white' : 'border-slate-700 text-slate-400 hover:bg-[#131C2E]'}`}>
                         <input type="radio" className="hidden" checked={data.new_hasConcept === opt} onChange={() => updateData({ new_hasConcept: opt })} /> {opt}
                       </label>
                     ))}
                   </div>
                 </div>
               </div>
             )}

             {data.coreRequirements.includes("complete_system") && (
               <div className="glowing-card space-y-6 bg-[#0B1220]/50 p-6 rounded-xl border border-slate-800/50">
                 <h4 className="text-[#E8B84B] font-bold uppercase tracking-wider text-sm mb-4">Regarding: Develop a Complete System</h4>
                 <div className="space-y-2">
                   <label className="text-white font-semibold">What type of system or facility is required?</label>
                   <input type="text" value={data.sys_type} onChange={e => updateData({ sys_type: e.target.value })} className="w-full bg-[#0B1220] border border-slate-700 rounded-lg px-4 py-2.5 text-white focus:border-[#E8B84B] transition-colors" />
                 </div>
                 <div className="space-y-2">
                   <label className="text-white font-semibold block mb-2">Which capabilities may be involved? (Select all that apply)</label>
                   <div className="flex flex-wrap gap-2">
                     {["Mechanical engineering", "Electrical engineering", "Automation and controls", "IoT and monitoring", "Software", "Fabrication", "Installation and commissioning", "Maintenance support", "Not sure"].map(opt => {
                       const isSelected = data.sys_capabilities.includes(opt);
                       return (
                         <label key={opt} className={`cursor-pointer px-3 py-1.5 rounded-lg border text-sm ${isSelected ? 'bg-[#E8B84B]/10 border-[#E8B84B] text-white' : 'border-slate-700 text-slate-400 hover:bg-[#131C2E]'}`}>
                           <input type="checkbox" className="hidden" checked={isSelected} onChange={() => toggleArrayItem("sys_capabilities", opt)} /> {opt}
                         </label>
                       );
                     })}
                   </div>
                 </div>
               </div>
             )}

             {data.coreRequirements.includes("iot") && (
               <div className="glowing-card space-y-6 bg-[#0B1220]/50 p-6 rounded-xl border border-slate-800/50">
                 <h4 className="text-[#E8B84B] font-bold uppercase tracking-wider text-sm mb-4">Regarding: Introduce IoT or Digital Monitoring</h4>
                 <div className="space-y-2">
                   <label className="text-white font-semibold block mb-2">What would you like to monitor or control?</label>
                   <div className="flex flex-wrap gap-2">
                     {["Machinery", "Production", "Energy or utilities", "Temperature or environment", "Agricultural conditions", "Location or movement", "Equipment condition", "Another operational parameter"].map(opt => {
                       const isSelected = data.iot_whatToMonitor.includes(opt);
                       return (
                         <label key={opt} className={`cursor-pointer px-3 py-1.5 rounded-lg border text-sm ${isSelected ? 'bg-[#E8B84B]/10 border-[#E8B84B] text-white' : 'border-slate-700 text-slate-400 hover:bg-[#131C2E]'}`}>
                           <input type="checkbox" className="hidden" checked={isSelected} onChange={() => toggleArrayItem("iot_whatToMonitor", opt)} /> {opt}
                         </label>
                       );
                     })}
                   </div>
                 </div>
                 <div className="space-y-2">
                   <label className="text-white font-semibold block mb-2">How would you like to access the information?</label>
                   <div className="flex flex-wrap gap-2">
                     {["Web dashboard", "Mobile application", "Alerts and notifications", "Automated reports", "Integration with an existing system", "Not sure"].map(opt => {
                       const isSelected = data.iot_howToAccess.includes(opt);
                       return (
                         <label key={opt} className={`cursor-pointer px-3 py-1.5 rounded-lg border text-sm ${isSelected ? 'bg-[#E8B84B]/10 border-[#E8B84B] text-white' : 'border-slate-700 text-slate-400 hover:bg-[#131C2E]'}`}>
                           <input type="checkbox" className="hidden" checked={isSelected} onChange={() => toggleArrayItem("iot_howToAccess", opt)} /> {opt}
                         </label>
                       );
                     })}
                   </div>
                 </div>
               </div>
             )}

             {data.coreRequirements.includes("product") && (
               <div className="glowing-card space-y-6 bg-[#0B1220]/50 p-6 rounded-xl border border-slate-800/50">
                 <h4 className="text-[#E8B84B] font-bold uppercase tracking-wider text-sm mb-4">Regarding: Develop a Product or Prototype</h4>
                 <div className="space-y-2">
                   <label className="text-white font-semibold">Briefly describe the idea or product requirement.</label>
                   <textarea value={data.prod_description} onChange={e => updateData({ prod_description: e.target.value })} className="w-full bg-[#0B1220] border border-slate-700 rounded-lg px-4 py-2 text-white focus:border-[#E8B84B] transition-colors h-24" />
                 </div>
                 <div className="space-y-2">
                   <label className="text-white font-semibold block mb-2">What stage has the project reached?</label>
                   <div className="flex flex-wrap gap-2">
                     {["Initial idea", "Concept developed", "Drawings or design available", "Prototype available", "Existing product requires improvement", "Not sure"].map(opt => (
                       <label key={opt} className={`cursor-pointer px-3 py-1.5 rounded-lg border text-sm ${data.prod_stage === opt ? 'bg-[#E8B84B]/10 border-[#E8B84B] text-white' : 'border-slate-700 text-slate-400 hover:bg-[#131C2E]'}`}>
                         <input type="radio" className="hidden" checked={data.prod_stage === opt} onChange={() => updateData({ prod_stage: opt })} /> {opt}
                       </label>
                     ))}
                   </div>
                 </div>
               </div>
             )}

             {data.coreRequirements.includes("amc") && (
               <div className="glowing-card space-y-6 bg-[#0B1220]/50 p-6 rounded-xl border border-slate-800/50">
                 <h4 className="text-[#E8B84B] font-bold uppercase tracking-wider text-sm mb-4">Regarding: Arrange AMC or Maintenance Support</h4>
                 
                 <div className="space-y-2">
                   <label className="text-white font-semibold block mb-2">What requires maintenance support?</label>
                   <div className="flex flex-wrap gap-2">
                     {["Machinery", "Automation or control system", "Electrical system", "IoT or monitoring system", "Software system", "Integrated facility or production system", "Multiple assets"].map(opt => {
                       const isSelected = data.amc_whatRequiresSupport.includes(opt);
                       return (
                         <label key={opt} className={`cursor-pointer px-3 py-1.5 rounded-lg border text-sm ${isSelected ? 'bg-[#E8B84B]/10 border-[#E8B84B] text-white' : 'border-slate-700 text-slate-400 hover:bg-[#131C2E]'}`}>
                           <input type="checkbox" className="hidden" checked={isSelected} onChange={() => toggleArrayItem("amc_whatRequiresSupport", opt)} /> {opt}
                         </label>
                       );
                     })}
                   </div>
                 </div>

                 <div className="space-y-2">
                   <label className="text-white font-semibold block mb-2">Who originally developed or supplied the system?</label>
                   <div className="flex flex-wrap gap-2">
                     {["Sanota", "Another supplier", "Multiple suppliers", "Not known"].map(opt => (
                       <label key={opt} className={`cursor-pointer px-3 py-1.5 rounded-lg border text-sm ${data.amc_whoDeveloped === opt ? 'bg-[#E8B84B]/10 border-[#E8B84B] text-white' : 'border-slate-700 text-slate-400 hover:bg-[#131C2E]'}`}>
                         <input type="radio" className="hidden" checked={data.amc_whoDeveloped === opt} onChange={() => updateData({ amc_whoDeveloped: opt })} /> {opt}
                       </label>
                     ))}
                   </div>
                 </div>

                 <div className="space-y-2">
                   <label className="text-white font-semibold block mb-2">Preferred support arrangement</label>
                   <div className="flex flex-wrap gap-2">
                     {["Preventive maintenance", "Breakdown support", "Periodic inspections", "Performance monitoring", "Spare-parts and obsolescence support", "Complete AMC", "Assessment required before deciding"].map(opt => (
                       <label key={opt} className={`cursor-pointer px-3 py-1.5 rounded-lg border text-sm ${data.amc_preferredArrangement === opt ? 'bg-[#E8B84B]/10 border-[#E8B84B] text-white' : 'border-slate-700 text-slate-400 hover:bg-[#131C2E]'}`}>
                         <input type="radio" className="hidden" checked={data.amc_preferredArrangement === opt} onChange={() => updateData({ amc_preferredArrangement: opt })} /> {opt}
                       </label>
                     ))}
                   </div>
                 </div>

                 <div className="bg-[#E8B84B]/10 border border-[#E8B84B]/30 rounded-lg p-4 mt-4">
                   <p className="text-[#E8B84B] text-sm"><strong className="font-bold">Important note:</strong> AMC support for third-party systems is offered following an initial technical assessment.</p>
                 </div>
               </div>
             )}

           </div>
        )}

      </div>
    </div>
  );
}

// ---------------------------------------------------------
// STEP 3
// ---------------------------------------------------------

export function Step3({ data, updateData }: StepProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  return (
    <div className="animate-in fade-in slide-in-from-right-4 duration-300">
      <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">Supporting Information</h2>
      <p className="text-slate-400 mb-8">Help Us Understand the Requirement</p>

      <div className="space-y-8">
        <div className="border-2 border-dashed border-slate-700 hover:border-[#E8B84B] rounded-2xl p-10 text-center transition-colors bg-[#0B1220]/50 cursor-pointer" onClick={() => fileInputRef.current?.click()}>
          <input type="file" ref={fileInputRef} className="hidden" multiple />
          <UploadCloud className="w-12 h-12 text-[#2E5EAA] mx-auto mb-4" />
          <button type="button" className="px-6 py-2 bg-[#131C2E] border border-slate-700 hover:border-[#E8B84B] text-white rounded-lg font-semibold mb-4 transition-colors">
            Add Files
          </button>
          <p className="text-slate-400 text-sm mb-2">You may upload photographs, videos, drawings, equipment information, reports or other documents that will help our team understand the requirement.</p>
          <p className="text-slate-500 text-xs">Accepted file types: JPG, PNG, PDF, DOCX, XLSX and MP4.</p>
        </div>

        <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-4 text-sm text-slate-300">
          <p>Please <span className="font-semibold text-red-400">do not upload</span> passwords, access credentials or documents that you are not authorized to share.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
          <div className="space-y-2">
            <label className="text-sm font-semibold text-slate-300">Equipment make, model or reference number (Optional)</label>
            <input 
              type="text" 
              value={data.eq_makeModel}
              onChange={(e) => updateData({ eq_makeModel: e.target.value })}
              className="w-full bg-[#0B1220] border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#E8B84B] transition-colors"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-slate-300">Existing supplier or system information (Optional)</label>
            <input 
              type="text" 
              value={data.eq_supplierInfo}
              onChange={(e) => updateData({ eq_supplierInfo: e.target.value })}
              className="w-full bg-[#0B1220] border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#E8B84B] transition-colors"
            />
          </div>
          <div className="space-y-2 md:col-span-2">
            <label className="text-sm font-semibold text-slate-300">Estimated number of machines, assets or locations (Optional)</label>
            <input 
              type="text" 
              value={data.eq_estimatedQuantity}
              onChange={(e) => updateData({ eq_estimatedQuantity: e.target.value })}
              className="w-full bg-[#0B1220] border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#E8B84B] transition-colors"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

// ---------------------------------------------------------
// STEP 4
// ---------------------------------------------------------

export function Step4({ data, updateData, showErrors }: StepProps) {
  return (
    <div className="animate-in fade-in slide-in-from-right-4 duration-300">
      <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">Your Contact Information</h2>
      <p className="text-slate-400 mb-8">How Can We Contact You?</p>

      <div className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-semibold text-slate-300">Full name *</label>
            <input type="text" value={data.name} onChange={(e) => updateData({ name: e.target.value })} className={`w-full bg-[#0B1220] rounded-lg px-4 py-3 text-white focus:outline-none transition-colors ${showErrors && data.name.trim() === '' ? 'border-2 border-red-500/50' : 'border border-slate-700 focus:border-[#E8B84B]'}`} />
            {showErrors && data.name.trim() === "" && <p className="text-red-500 text-sm font-medium">Please complete this field before continuing.</p>}
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-slate-300">Company or organization *</label>
            <input type="text" value={data.company} onChange={(e) => updateData({ company: e.target.value })} className={`w-full bg-[#0B1220] rounded-lg px-4 py-3 text-white focus:outline-none transition-colors ${showErrors && data.company.trim() === '' ? 'border-2 border-red-500/50' : 'border border-slate-700 focus:border-[#E8B84B]'}`} />
            {showErrors && data.company.trim() === "" && <p className="text-red-500 text-sm font-medium">Please complete this field before continuing.</p>}
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-slate-300">Job title</label>
            <input type="text" value={data.jobTitle} onChange={(e) => updateData({ jobTitle: e.target.value })} className="w-full bg-[#0B1220] border border-slate-700 rounded-lg px-4 py-3 text-white focus:border-[#E8B84B] transition-colors" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-slate-300">Telephone number *</label>
            <input type="tel" value={data.phone} onChange={(e) => updateData({ phone: e.target.value })} className={`w-full bg-[#0B1220] rounded-lg px-4 py-3 text-white focus:outline-none transition-colors ${showErrors && data.phone.trim() === '' && data.email.trim() === '' ? 'border-2 border-red-500/50' : 'border border-slate-700 focus:border-[#E8B84B]'}`} />
          </div>
          <div className="space-y-2 sm:col-span-2">
            <label className="text-sm font-semibold text-slate-300">Email address *</label>
            <input type="email" value={data.email} onChange={(e) => updateData({ email: e.target.value })} className={`w-full bg-[#0B1220] rounded-lg px-4 py-3 text-white focus:outline-none transition-colors ${showErrors && data.phone.trim() === '' && data.email.trim() === '' ? 'border-2 border-red-500/50' : 'border border-slate-700 focus:border-[#E8B84B]'}`} />
          </div>
          {showErrors && data.email.trim() === "" && data.phone.trim() === "" && (
             <p className="text-red-500 text-sm font-medium sm:col-span-2 mt-[-10px]">Please provide at least one valid contact method.</p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6">
          <div className="space-y-3">
            <label className="block text-white font-semibold text-sm">Preferred contact method</label>
            <div className="flex flex-col gap-2">
              {["Telephone call", "Email", "Online meeting", "Site visit discussion", "No preference"].map(opt => (
                <label key={opt} className={`cursor-pointer px-4 py-2.5 rounded-lg border text-sm flex items-center ${data.preferredContactMethod === opt ? 'bg-[#E8B84B]/10 border-[#E8B84B] text-white' : 'bg-[#0B1220] border-slate-700 text-slate-400 hover:border-slate-500'}`}>
                  <input type="radio" className="mr-3" checked={data.preferredContactMethod === opt} onChange={() => updateData({ preferredContactMethod: opt })} /> {opt}
                </label>
              ))}
            </div>
          </div>
          <div className="space-y-3">
            <label className="block text-white font-semibold text-sm">Preferred contact time</label>
            <div className="flex flex-col gap-2">
              {["Morning", "Afternoon", "Evening", "Any time during business hours"].map(opt => (
                <label key={opt} className={`cursor-pointer px-4 py-2.5 rounded-lg border text-sm flex items-center ${data.preferredContactTime === opt ? 'bg-[#E8B84B]/10 border-[#E8B84B] text-white' : 'bg-[#0B1220] border-slate-700 text-slate-400 hover:border-slate-500'}`}>
                  <input type="radio" className="mr-3" checked={data.preferredContactTime === opt} onChange={() => updateData({ preferredContactTime: opt })} /> {opt}
                </label>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

// ---------------------------------------------------------
// STEP 5
// ---------------------------------------------------------

export function Step5({ data, updateData, showErrors }: StepProps) {
  return (
    <div className="animate-in fade-in slide-in-from-right-4 duration-300">
      <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">Review and Submit</h2>
      <p className="text-slate-400 mb-8">Please review the information before submitting it to Sanota.</p>

      <div className="bg-[#0B1220] border border-slate-800 rounded-2xl p-6 mb-8 text-sm text-slate-300 space-y-4">
        <p><strong>Requirement:</strong> {data.currentSituation || "Not provided"}</p>
        <p><strong>Desired Outcome:</strong> {data.desiredOutcome || "Not provided"}</p>
        <p><strong>Industry:</strong> {data.industry || "Not provided"}</p>
        <p><strong>Contact:</strong> {data.name} ({data.company}) - {data.email}</p>
      </div>

      <div className="space-y-4 mb-6">
        <label className="flex items-start cursor-pointer group">
          <div className={`mt-0.5 w-5 h-5 rounded border flex items-center justify-center mr-3 shrink-0 transition-colors ${data.consentAccurate ? 'bg-[#E8B84B] border-[#E8B84B]' : 'bg-[#131C2E] border-slate-600 group-hover:border-[#E8B84B]'}`}>
            <input type="checkbox" className="hidden" checked={data.consentAccurate} onChange={(e) => updateData({ consentAccurate: e.target.checked })} />
            {data.consentAccurate && <svg className="w-3.5 h-3.5 text-[#0B1220]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>}
          </div>
          <span className="text-slate-300 text-sm leading-relaxed">I confirm that the information submitted is accurate to the best of my knowledge and that I am authorized to share the attached material. *</span>
        </label>

        <label className="flex items-start cursor-pointer group">
          <div className={`mt-0.5 w-5 h-5 rounded border flex items-center justify-center mr-3 shrink-0 transition-colors ${data.consentNoObligation ? 'bg-[#E8B84B] border-[#E8B84B]' : 'bg-[#131C2E] border-slate-600 group-hover:border-[#E8B84B]'}`}>
            <input type="checkbox" className="hidden" checked={data.consentNoObligation} onChange={(e) => updateData({ consentNoObligation: e.target.checked })} />
            {data.consentNoObligation && <svg className="w-3.5 h-3.5 text-[#0B1220]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>}
          </div>
          <span className="text-slate-300 text-sm leading-relaxed">I understand that submitting this enquiry does not create a contractual obligation. Sanota may request further information or conduct an assessment before recommending a solution. *</span>
        </label>
      </div>
      
      {showErrors && (!data.consentAccurate || !data.consentNoObligation) && (
        <p className="text-red-500 text-sm font-medium mb-6">Please complete this field before continuing.</p>
      )}

      <div className="flex items-center text-sm">
        <a href="#" className="text-[#2E5EAA] hover:text-white transition-colors underline underline-offset-4">View Privacy Notice</a>
      </div>
    </div>
  );
}
