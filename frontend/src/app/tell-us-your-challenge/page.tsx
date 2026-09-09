"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight, ArrowLeft, CheckCircle2, Save } from "lucide-react";

import { ChallengeFormData } from "./types";
import { Step1, Step2, Step3, Step4, Step5 } from "./components/FormSteps";
import { WhatHappensNext, AlternativeContact, FinalCTA } from "./components/Sections";

const initialData: ChallengeFormData = {
  coreRequirements: [],
  currentSituation: "",
  desiredOutcome: "",
  industry: "",
  location: "",
  urgency: "",
  mod_machineType: "",
  mod_problem: "",
  mod_isOperating: "",
  auto_process: "",
  auto_currentState: "",
  auto_expectedImprovement: "",
  new_whatShouldItDo: "",
  new_material: "",
  new_hasConcept: "",
  sys_type: "",
  sys_capabilities: [],
  iot_whatToMonitor: [],
  iot_howToAccess: [],
  prod_description: "",
  prod_stage: "",
  amc_whatRequiresSupport: [],
  amc_whoDeveloped: "",
  amc_preferredArrangement: "",
  eq_makeModel: "",
  eq_supplierInfo: "",
  eq_estimatedQuantity: "",
  name: "",
  company: "",
  jobTitle: "",
  email: "",
  phone: "",
  preferredContactMethod: "",
  preferredContactTime: "",
  consentAccurate: false,
  consentNoObligation: false,
};

export default function ChallengePage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<ChallengeFormData>(initialData);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [enquiryRef, setEnquiryRef] = useState("");
  const [showErrors, setShowErrors] = useState(false);
  const [connectionError, setConnectionError] = useState(false);

  const updateData = (fields: Partial<ChallengeFormData>) => {
    setFormData(prev => ({ ...prev, ...fields }));
    if (showErrors) setShowErrors(false); // Hide errors once user starts typing
  };

  const isStepValid = () => {
    if (currentStep === 1) return formData.coreRequirements.length > 0;
    if (currentStep === 2) return formData.currentSituation.trim() !== "" && formData.desiredOutcome.trim() !== "";
    if (currentStep === 4) return formData.name.trim() !== "" && formData.company.trim() !== "" && (formData.email.trim() !== "" || formData.phone.trim() !== "");
    if (currentStep === 5) return formData.consentAccurate && formData.consentNoObligation;
    return true; // Step 3 is optional
  };

  const handleNext = () => {
    if (!isStepValid()) {
      setShowErrors(true);
      return;
    }
    
    setShowErrors(false);
    if (currentStep < 5) {
      setCurrentStep(prev => prev + 1);
      window.scrollTo({ top: document.getElementById('form-container')?.offsetTop || 0 - 100, behavior: 'smooth' });
    }
  };

  const handlePrev = () => {
    if (currentStep > 1) {
      setShowErrors(false);
      setCurrentStep(prev => prev - 1);
      window.scrollTo({ top: document.getElementById('form-container')?.offsetTop || 0 - 100, behavior: 'smooth' });
    }
  };

  const handleSubmit = () => {
    if (!isStepValid()) {
      setShowErrors(true);
      return;
    }
    
    // Mock connection error occasionally or just proceed. For now we will succeed.
    // If backend fails, we would setConnectionError(true);
    setConnectionError(false);
    setEnquiryRef(`SNT-${Math.floor(1000 + Math.random() * 9000)}-${new Date().getFullYear()}`);
    setIsSubmitted(true);
    window.scrollTo({ top: document.getElementById('form-container')?.offsetTop || 0 - 100, behavior: 'smooth' });
  };

  return (
    <div className="flex flex-col min-h-screen bg-transparent">
      <Header />
      
      <main className="flex-grow">
        
        {/* HERO SECTION */}
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#131C2E] to-[#050B14] border-b border-slate-800 bg-transparent">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Tell Us Your Challenge</h1>
            <p className="text-xl text-slate-300 mb-6 max-w-3xl mx-auto leading-relaxed">
              You do not need to know the technical solution. Start by telling us what you need to achieve.
            </p>
            <p className="text-lg text-slate-400 mb-10 max-w-3xl mx-auto leading-relaxed">
              Whether you need to improve a machine, automate a process, develop a new system, introduce IoT and software, or arrange long-term maintenance support, Sanota can help you identify the right way forward.
              Our team will review your requirement and connect the necessary engineering, automation, digital and technical-support capabilities around it.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
              <button 
                onClick={() => document.getElementById('form-container')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 bg-[#E8B84B] hover:bg-[#d4a643] text-[#0B1220] font-bold rounded-lg transition-colors text-[15px]"
              >
                Start Your Enquiry
              </button>
              <Link 
                href="/contact" 
                className="px-8 py-4 bg-[#131C2E] hover:bg-slate-800 text-white font-bold rounded-lg border border-slate-700 transition-colors text-[15px]"
              >
                Speak to Sanota
              </Link>
            </div>
            <p className="text-[#E8B84B] font-bold text-xs sm:text-sm tracking-widest uppercase">
              Engineering <span className="mx-2 text-slate-600">•</span> Automation <span className="mx-2 text-slate-600">•</span> IoT <span className="mx-2 text-slate-600">•</span> Software <span className="mx-2 text-slate-600">•</span> Implementation <span className="mx-2 text-slate-600">•</span> Lifecycle Support
            </p>
          </div>
        </section>

        {/* GUIDED ENQUIRY FORM */}
        <section id="form-container" className="py-20 px-4 sm:px-6 lg:px-8 bg-transparent">
          <div className="max-w-4xl mx-auto">
            
            <AnimatePresence mode="wait">
              {isSubmitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="glowing-card bg-[#131C2E]/60 border border-slate-800 rounded-3xl p-10 md:p-16 text-center"
                >
                  <div className="w-24 h-24 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-8">
                    <CheckCircle2 className="w-12 h-12 text-green-500" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Thank You. Your Enquiry Has Been Received.</h2>
                  <p className="text-xl text-[#E8B84B] font-semibold mb-6">Your reference number is {enquiryRef}.</p>
                  <p className="text-slate-300 text-lg leading-relaxed max-w-2xl mx-auto mb-10">
                    The Sanota team will review the information and direct it to the appropriate technical team. A representative will contact you using your preferred contact method.
                  </p>
                  <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <Link href="/" className="px-8 py-4 bg-[#E8B84B] hover:bg-[#d4a643] text-[#0B1220] font-bold rounded-lg transition-colors">
                      Return to Homepage
                    </Link>
                    <Link href="/media" className="px-8 py-4 bg-[#0B1220] hover:bg-slate-800 text-white font-bold rounded-lg border border-slate-700 transition-colors">
                      Explore Completed Work
                    </Link>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  {/* Progress Header */}
                  <div className="mb-10 text-center">
                    <h3 className="text-[#E8B84B] font-bold tracking-widest uppercase text-sm mb-4">Guided Enquiry</h3>
                    <div className="flex justify-between items-center max-w-2xl mx-auto mb-4 relative">
                      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-1 bg-slate-800 rounded-full -z-10"></div>
                      <div className="absolute left-0 top-1/2 -translate-y-1/2 h-1 bg-[#E8B84B] rounded-full -z-10 transition-all duration-300" style={{ width: `${((currentStep - 1) / 4) * 100}%` }}></div>
                      
                      {[1, 2, 3, 4, 5].map(step => (
                        <div key={step} className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-colors ${currentStep >= step ? 'bg-[#E8B84B] text-[#0B1220]' : 'bg-[#131C2E] border-2 border-slate-700 text-slate-500'}`}>
                          {step}
                        </div>
                      ))}
                    </div>
                    <p className="text-slate-400 font-medium">Step {currentStep} of 5</p>
                  </div>

                  {/* Form Card */}
                  <div className="glowing-card bg-[#131C2E]/40 backdrop-blur-sm border border-slate-800 rounded-3xl p-6 sm:p-10 md:p-12 mb-8">
                    
                    {currentStep === 1 && <Step1 data={formData} updateData={updateData} showErrors={showErrors} />}
                    {currentStep === 2 && <Step2 data={formData} updateData={updateData} showErrors={showErrors} />}
                    {currentStep === 3 && <Step3 data={formData} updateData={updateData} showErrors={showErrors} />}
                    {currentStep === 4 && <Step4 data={formData} updateData={updateData} showErrors={showErrors} />}
                    {currentStep === 5 && <Step5 data={formData} updateData={updateData} showErrors={showErrors} />}

                  </div>

                  {/* Form Navigation Controls */}
                  <div className="flex flex-col-reverse sm:flex-row justify-between items-center gap-4">
                    {currentStep > 1 ? (
                      <button 
                        onClick={handlePrev}
                        className="w-full sm:w-auto px-6 py-3 flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors font-semibold"
                      >
                        <ArrowLeft className="w-5 h-5 mr-2" /> Back
                      </button>
                    ) : (
                      <div />
                    )}
                    
                    <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                      {currentStep === 5 ? (
                        <>
                          <button 
                            className="w-full sm:w-auto px-6 py-3 flex items-center justify-center text-slate-400 hover:text-white border border-slate-700 hover:border-slate-500 rounded-lg transition-colors font-semibold bg-[#131C2E]"
                          >
                            <Save className="w-4 h-4 mr-2" /> Save and Continue Later
                          </button>
                          <button 
                            onClick={handleSubmit}
                            disabled={!isStepValid()}
                            className="w-full sm:w-auto px-8 py-3 flex items-center justify-center bg-[#E8B84B] hover:bg-[#d4a643] text-[#0B1220] font-bold rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                          >
                            Submit My Challenge <CheckCircle2 className="w-5 h-5 ml-2" />
                          </button>
                        </>
                      ) : (
                        <button 
                          onClick={handleNext}
                          disabled={!isStepValid()}
                          className="w-full sm:w-auto px-8 py-3 flex items-center justify-center bg-[#E8B84B] hover:bg-[#d4a643] text-[#0B1220] font-bold rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          Continue <ArrowRight className="w-5 h-5 ml-2" />
                        </button>
                      )}
                    </div>
                  </div>

                </motion.div>
              )}
            </AnimatePresence>

          </div>
        </section>

        {/* NON-FORM SECTIONS */}
        {isSubmitted && <WhatHappensNext />}
        {!isSubmitted && (
          <>
            <AlternativeContact />
            <FinalCTA />
          </>
        )}

      </main>
      
      <Footer />
    </div>
  );
}
