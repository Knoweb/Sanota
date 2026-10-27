"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { FileText, Mail, MapPin, Phone, ArrowLeft } from "lucide-react";

export default function TermsPage() {
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
              <FileText className="w-4 h-4" />
              <span>Legal Terms of Engagement</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-black text-[#17135B] dark:text-white tracking-tight mb-3">
              Terms & Conditions
            </h1>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Sanota (Private) Limited (Company Registration No: PV 74540) • Last Updated: {lastUpdated}
            </p>
          </div>

          <div className="prose prose-slate dark:prose-invert max-w-none space-y-8 text-base leading-relaxed text-slate-700 dark:text-slate-300">
            <section className="bg-white dark:bg-[#131C2E]/60 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-8 shadow-sm">
              <h2 className="text-xl font-bold text-[#17135B] dark:text-white mb-3">
                1. Acceptance of Terms
              </h2>
              <p>
                By accessing or browsing this website (<strong>sanotaglobal.com</strong>) or utilizing services rendered by <strong>Sanota (Private) Limited</strong> (&ldquo;Sanota&rdquo;), you agree to be bound by these Terms and Conditions and our Privacy Policy. If you do not agree to these terms, please refrain from using our digital assets and services.
              </p>
            </section>

            <section className="bg-white dark:bg-[#131C2E]/60 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-8 shadow-sm">
              <h2 className="text-xl font-bold text-[#17135B] dark:text-white mb-3">
                2. Scope of Engineering Services & Proposals
              </h2>
              <p>
                Technical specifications, machinery concepts, case studies, and engineering capabilities presented on this website are provided for informational and preliminary evaluation purposes. Formal engineering projects—including custom machinery fabrication, PLC retrofitting, SCADA assembly, and Annual Maintenance Contracts (AMC)—are governed by individual project agreements, engineering drawings, and formally executed Scope of Work (SOW) documents.
              </p>
            </section>

            <section className="bg-white dark:bg-[#131C2E]/60 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-8 shadow-sm">
              <h2 className="text-xl font-bold text-[#17135B] dark:text-white mb-3">
                3. Intellectual Property Rights
              </h2>
              <p>
                All content on this website—including technical diagrams, 3D CAD visualizations, software architectures, logos, text, and layout designs—is the proprietary property of <strong>Sanota (Private) Limited</strong> or its affiliated software entity <strong>Knoweb</strong>, protected under intellectual property legislation. Unauthorized reproduction, distribution, or reverse-engineering of Sanota proprietary controls without prior written consent is strictly prohibited.
              </p>
            </section>

            <section className="bg-white dark:bg-[#131C2E]/60 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-8 shadow-sm">
              <h2 className="text-xl font-bold text-[#17135B] dark:text-white mb-3">
                4. Confidentiality & Non-Disclosure
              </h2>
              <p>
                When a client submits technical requirements, operational bottlenecks, or machine photos through our consultation portals, Sanota treats all such industrial operational information as confidential business information, using it solely for the purpose of technical evaluation.
              </p>
            </section>

            <section className="bg-white dark:bg-[#131C2E]/60 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-8 shadow-sm">
              <h2 className="text-xl font-bold text-[#17135B] dark:text-white mb-3">
                5. Limitation of Liability
              </h2>
              <p>
                While Sanota ensures all technical documentation and content on this website are accurate and up to date, information is provided on an &ldquo;as is&rdquo; basis. Formal warranties, equipment performance guarantees, uptime metrics, and safety certifications apply exclusively as defined in executed contractual proposals.
              </p>
            </section>

            <section className="bg-white dark:bg-[#131C2E]/60 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-8 shadow-sm">
              <h2 className="text-xl font-bold text-[#17135B] dark:text-white mb-3">
                6. Governing Law & Jurisdiction
              </h2>
              <p>
                These Terms and Conditions shall be governed by, construed, and enforced in accordance with the <strong>laws of the Democratic Socialist Republic of Sri Lanka</strong>. Any dispute arising out of or related to these terms shall be subject to the exclusive jurisdiction of the competent courts of Sri Lanka.
              </p>
            </section>

            <section className="bg-white dark:bg-[#131C2E]/60 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-8 shadow-sm">
              <h2 className="text-xl font-bold text-[#17135B] dark:text-white mb-3">
                7. Contact Details
              </h2>
              <p className="mb-4">
                For commercial or legal inquiries regarding these Terms and Conditions:
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
