"use client";

import { useState } from "framer-motion";
import { motion, AnimatePresence } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight, ArrowLeft, CheckCircle2 } from "lucide-react";
import React from "react";

const steps = [
  { id: 1, title: "The Core Requirement" },
  { id: 2, title: "Specific Details" },
  { id: 3, title: "Business Context" },
  { id: 4, title: "Contact Details" },
];

export default function ChallengePage() {
  const [currentStep, setCurrentStep] = React.useState(1);
  const [formData, setFormData] = React.useState({
    coreRequirement: "",
    specificDetail: "",
    industry: "",
    name: "",
    company: "",
    phone: "",
    email: ""
  });
  const [isSubmitted, setIsSubmitted] = React.useState(false);

  const coreRequirements = [
    { id: "bottleneck", label: "I have a production bottleneck or inefficiency." },
    { id: "specific_system", label: "I need a specific machine or automated system." },
    { id: "new_facility", label: "I am setting up a new facility or production line." },
    { id: "modernize", label: "I want to modernize or upgrade existing equipment." },
    { id: "maintenance", label: "I need maintenance or lifecycle support (AMC)." }
  ];

  const getSpecificOptions = () => {
    switch (formData.coreRequirement) {
      case "bottleneck":
        return ["Drying", "Sorting", "Packing", "Material Handling", "Other"];
      case "specific_system":
        return ["Mechanical", "Electrical", "Automation", "Software"];
      case "new_facility":
        return ["Single Line", "Full Factory", "Prototype"];
      case "modernize":
        return ["Mechanics", "Control Systems/PLC", "Software/Data"];
      case "maintenance":
        return ["Sanota equipment", "Third-party machinery", "Complete plant"];
      default:
        return [];
    }
  };

  const specificQuestion = () => {
    switch (formData.coreRequirement) {
      case "bottleneck": return "Where is the bottleneck occurring?";
      case "specific_system": return "What type of system are you looking for?";
      case "new_facility": return "What is the scale of the project?";
      case "modernize": return "What needs upgrading?";
      case "maintenance": return "What requires support?";
      default: return "";
    }
  };

  const industries = ["Tea Manufacturing", "Agriculture/Food", "Heavy Manufacturing", "Logistics", "Other"];

  const handleNext = () => {
    if (currentStep < 4) setCurrentStep(currentStep + 1);
  };

  const handlePrev = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#050B14]">
      <Header />
      <main className="flex-grow pt-32 pb-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Progress Bar */}
          {!isSubmitted && (
            <div className="mb-12">
              <div className="flex justify-between mb-2">
                {steps.map((s) => (
                  <div key={s.id} className={`text-xs font-bold uppercase tracking-wider ${currentStep >= s.id ? 'text-[#E8B84B]' : 'text-slate-600'}`}>
                    Step {s.id}
                  </div>
                ))}
              </div>
              <div className="h-1.5 w-full bg-[#131C2E] rounded-full overflow-hidden">
                <motion.div 
                  className="h-full bg-gradient-to-r from-[#E8B84B] to-[#2E5EAA]"
                  initial={{ width: `${((currentStep - 1) / 3) * 100}%` }}
                  animate={{ width: `${((currentStep - 1) / 3) * 100}%` }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </div>
          )}

          {/* Form Container */}
          <div className="bg-[#131C2E]/60 backdrop-blur-sm border border-slate-800 rounded-3xl p-8 sm:p-12 min-h-[400px] flex flex-col justify-center">
            
            <AnimatePresence mode="wait">
              {isSubmitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center"
                >
                  <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-10 h-10 text-green-500" />
                  </div>
                  <h2 className="text-3xl font-bold text-white mb-4">Requirement Logged</h2>
                  <p className="text-slate-400 text-lg leading-relaxed max-w-md mx-auto">
                    Your requirement has been logged. A Sanota engineer will review the details and contact you within 24 hours to schedule an initial technical discussion.
                  </p>
                </motion.div>
              ) : (
                <motion.div
                  key={`step-${currentStep}`}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.2 }}
                >
                  
                  {/* Step 1 */}
                  {currentStep === 1 && (
                    <div>
                      <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 text-center">What best describes your current requirement?</h2>
                      <div className="space-y-4">
                        {coreRequirements.map((req) => (
                          <button
                            key={req.id}
                            onClick={() => {
                              setFormData({...formData, coreRequirement: req.id, specificDetail: ""});
                              handleNext();
                            }}
                            className={`w-full text-left p-5 rounded-xl border transition-all ${
                              formData.coreRequirement === req.id 
                                ? 'border-[#E8B84B] bg-[#E8B84B]/10 text-white shadow-[0_0_15px_rgba(232,184,75,0.15)]' 
                                : 'border-slate-700 bg-[#0B1220] text-slate-300 hover:border-[#2E5EAA] hover:bg-[#2E5EAA]/5'
                            }`}
                          >
                            <span className="font-medium text-lg">{req.label}</span>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Step 2 */}
                  {currentStep === 2 && (
                    <div>
                      <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 text-center">{specificQuestion()}</h2>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {getSpecificOptions().map((opt) => (
                          <button
                            key={opt}
                            onClick={() => {
                              setFormData({...formData, specificDetail: opt});
                              handleNext();
                            }}
                            className={`w-full text-center p-5 rounded-xl border transition-all ${
                              formData.specificDetail === opt 
                                ? 'border-[#E8B84B] bg-[#E8B84B]/10 text-white shadow-[0_0_15px_rgba(232,184,75,0.15)]' 
                                : 'border-slate-700 bg-[#0B1220] text-slate-300 hover:border-[#2E5EAA] hover:bg-[#2E5EAA]/5'
                            }`}
                          >
                            <span className="font-medium">{opt}</span>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Step 3 */}
                  {currentStep === 3 && (
                    <div>
                      <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 text-center">Which industry does this apply to?</h2>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {industries.map((ind) => (
                          <button
                            key={ind}
                            onClick={() => {
                              setFormData({...formData, industry: ind});
                              handleNext();
                            }}
                            className={`w-full text-center p-5 rounded-xl border transition-all ${
                              formData.industry === ind 
                                ? 'border-[#E8B84B] bg-[#E8B84B]/10 text-white shadow-[0_0_15px_rgba(232,184,75,0.15)]' 
                                : 'border-slate-700 bg-[#0B1220] text-slate-300 hover:border-[#2E5EAA] hover:bg-[#2E5EAA]/5'
                            }`}
                          >
                            <span className="font-medium">{ind}</span>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Step 4 */}
                  {currentStep === 4 && (
                    <div>
                      <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 text-center">How can our engineering team reach you to discuss this?</h2>
                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <label className="text-sm font-semibold text-slate-300">Name</label>
                            <input 
                              type="text" 
                              required
                              value={formData.name}
                              onChange={(e) => setFormData({...formData, name: e.target.value})}
                              className="w-full bg-[#0B1220] border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#E8B84B] transition-colors"
                            />
                          </div>
                          <div className="space-y-2">
                            <label className="text-sm font-semibold text-slate-300">Company</label>
                            <input 
                              type="text" 
                              required
                              value={formData.company}
                              onChange={(e) => setFormData({...formData, company: e.target.value})}
                              className="w-full bg-[#0B1220] border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#E8B84B] transition-colors"
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <label className="text-sm font-semibold text-slate-300">Email</label>
                            <input 
                              type="email" 
                              required
                              value={formData.email}
                              onChange={(e) => setFormData({...formData, email: e.target.value})}
                              className="w-full bg-[#0B1220] border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#E8B84B] transition-colors"
                            />
                          </div>
                          <div className="space-y-2">
                            <label className="text-sm font-semibold text-slate-300">Phone</label>
                            <input 
                              type="tel" 
                              required
                              value={formData.phone}
                              onChange={(e) => setFormData({...formData, phone: e.target.value})}
                              className="w-full bg-[#0B1220] border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#E8B84B] transition-colors"
                            />
                          </div>
                        </div>

                        <div className="pt-6">
                          <button 
                            type="submit"
                            className="w-full flex justify-center items-center px-8 py-4 bg-[#E8B84B] hover:bg-[#d4a643] text-[#0B1220] text-[15px] font-bold rounded-lg transition-colors uppercase tracking-wider"
                          >
                            Submit Requirement
                          </button>
                        </div>
                      </form>
                    </div>
                  )}

                  {/* Navigation Buttons */}
                  <div className="mt-8 flex justify-between items-center">
                    {currentStep > 1 ? (
                      <button 
                        onClick={handlePrev}
                        className="flex items-center text-slate-400 hover:text-white transition-colors"
                      >
                        <ArrowLeft className="w-4 h-4 mr-2" /> Back
                      </button>
                    ) : (
                      <div />
                    )}
                    
                    {currentStep < 4 && (
                      <button 
                        onClick={handleNext}
                        disabled={
                          (currentStep === 1 && !formData.coreRequirement) ||
                          (currentStep === 2 && !formData.specificDetail) ||
                          (currentStep === 3 && !formData.industry)
                        }
                        className="flex items-center text-[#E8B84B] font-bold disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        Next Step <ArrowRight className="w-4 h-4 ml-2" />
                      </button>
                    )}
                  </div>

                </motion.div>
              )}
            </AnimatePresence>

          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
