"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ShieldCheck, Mail, MapPin, Phone, ArrowLeft } from "lucide-react";

export default function PrivacyPolicyPage() {
  const lastUpdated = "October 2026";

  return (
    <div className="flex flex-col min-h-screen bg-[#FAF8F5] dark:bg-[#050B14] text-slate-800 dark:text-slate-100 transition-colors duration-300">
      <Header />
      <main className="flex-grow pt-28 lg:pt-36 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="mb-8">
            <Link
              href="/"
              className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-[#C59B27] dark:text-[#E8B84B] hover:underline mb-4"
            >
              <ArrowLeft className="w-3.5 h-3.5 mr-1.5" /> Back to Home
            </Link>
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-[#8C6514] dark:text-[#E8B84B] text-xs font-bold uppercase tracking-widest mb-3">
              <ShieldCheck className="w-4 h-4" />
              <span>Compliance & Data Protection</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-black text-[#17135B] dark:text-white tracking-tight mb-3">
              Privacy Policy
            </h1>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Sanota (Private) Limited (Company Registration No: PV 74540) • Last Updated: {lastUpdated}
            </p>
          </div>

          <div className="prose prose-slate dark:prose-invert max-w-none space-y-8 text-base leading-relaxed text-slate-700 dark:text-slate-300">
            <section className="bg-white dark:bg-[#131C2E]/60 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-8 shadow-sm">
              <h2 className="text-xl font-bold text-[#17135B] dark:text-white mb-3">
                1. Overview & Statutory Scope
              </h2>
              <p>
                This Privacy Policy outlines how <strong>Sanota (Private) Limited</strong> (&ldquo;Sanota&rdquo;, &ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;) collects, uses, processes, and protects personal and corporate data collected through our website (<strong>sanotaglobal.com</strong>), direct inquiries, technical consultation assessments, and related services.
              </p>
              <p className="mt-2">
                We respect your personal privacy and comply strictly with the provisions of the <strong>Personal Data Protection Act No. 9 of 2022 (PDPA) of the Democratic Socialist Republic of Sri Lanka</strong>, and international data protection standards where applicable.
              </p>
            </section>

            <section className="bg-white dark:bg-[#131C2E]/60 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-8 shadow-sm">
              <h2 className="text-xl font-bold text-[#17135B] dark:text-white mb-3">
                2. Information We Collect
              </h2>
              <p>When you interact with Sanota, we collect information you voluntarily provide, which may include:</p>
              <ul className="list-disc pl-5 mt-2 space-y-2">
                <li><strong>Contact details</strong>: Full name, business email address, direct phone number, company or factory name, and official designation.</li>
                <li><strong>Technical project inquiries</strong>: Details submitted via our &ldquo;Tell Us Your Challenge&rdquo; or contact forms, including machinery specifications, automation goals, factory locations, process flow notes, and attached photos or engineering drawings.</li>
                <li><strong>Communication records</strong>: Records of phone consultations, WhatsApp messages, emails, and site visit logs.</li>
                <li><strong>Technical telemetry & analytics</strong>: Anonymized IP addresses, browser types, referral URLs, and interaction metrics gathered via Google Analytics for performance optimization.</li>
              </ul>
            </section>

            <section className="bg-white dark:bg-[#131C2E]/60 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-8 shadow-sm">
              <h2 className="text-xl font-bold text-[#17135B] dark:text-white mb-3">
                3. Purpose of Data Processing
              </h2>
              <p>We process your data exclusively for legitimate commercial and engineering purposes:</p>
              <ul className="list-disc pl-5 mt-2 space-y-2">
                <li>Evaluating technical requirements and preparing customized machine modernization, automation, or AMC proposals.</li>
                <li>Responding to inquiries submitted through our website or customer service channels.</li>
                <li>Fulfilling contracted engineering deliverables, commissioning milestones, and field service visits.</li>
                <li>Ensuring the technical security and reliable operation of our web platforms.</li>
                <li>Complying with statutory Sri Lankan tax, audit, and legal mandates.</li>
              </ul>
              <p className="mt-3 font-semibold text-[#17135B] dark:text-white">
                We never sell, rent, or trade your personal or business data to third-party advertisers.
              </p>
            </section>

            <section className="bg-white dark:bg-[#131C2E]/60 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-8 shadow-sm">
              <h2 className="text-xl font-bold text-[#17135B] dark:text-white mb-3">
                4. Data Protection & Confidentiality
              </h2>
              <p>
                Industrial machinery designs, control panel schematics, and factory operational data provided to Sanota are treated with strict industrial confidentiality. Appropriate technical and organizational security measures are maintained to safeguard all electronic and physical records against unauthorized access, loss, or destruction.
              </p>
            </section>

            <section className="bg-white dark:bg-[#131C2E]/60 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-8 shadow-sm">
              <h2 className="text-xl font-bold text-[#17135B] dark:text-white mb-3">
                5. Your Data Subject Rights
              </h2>
              <p>
                Under the Sri Lanka Personal Data Protection Act No. 9 of 2022, you have the right to request access to your personal data, request correction of inaccurate records, or request erasure of your data where retention is no longer legally mandated.
              </p>
            </section>

            <section className="bg-white dark:bg-[#131C2E]/60 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-8 shadow-sm">
              <h2 className="text-xl font-bold text-[#17135B] dark:text-white mb-3">
                6. Data Controller & Contact Information
              </h2>
              <p className="mb-4">
                If you have questions about this policy or wish to exercise your data rights, please contact our Data Governance lead:
              </p>
              <div className="space-y-2 text-sm">
                <p className="font-bold text-[#17135B] dark:text-white">Sanota (Private) Limited (PV 74540)</p>
                <p className="flex items-center gap-2"><MapPin className="w-4 h-4 text-[#C59B27]" /> 441/2C Wackwella Road, Galle 80000, Sri Lanka</p>
                <p className="flex items-center gap-2"><Phone className="w-4 h-4 text-[#C59B27]" /> +94 74 070 9989</p>
                <p className="flex items-center gap-2"><Mail className="w-4 h-4 text-[#C59B27]" /> <a href="mailto:info@sanotaglobal.com" className="hover:underline">info@sanotaglobal.com</a></p>
              </div>
            </section>
          </div>

        </div>
      </main>
      <Footer />
    </div>
  );
}
