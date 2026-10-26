"use client";
import { useState, useEffect } from "react";
import dynamic from 'next/dynamic';
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CorporateProof from "@/components/CorporateProof";
import Footer from "@/components/Footer";
import { useTheme } from "@/context/ThemeContext";

// Code-split below-the-fold components to minimize main thread blocking time (TBT) and speed up LCP
const VisitorPathways = dynamic(() => import("@/components/VisitorPathways"), { ssr: true });
const SolutionNavigator = dynamic(() => import("@/components/SolutionNavigator"), { ssr: true });
const IntegratedSolutionCapability = dynamic(() => import("@/components/IntegratedSolutionCapability"), { ssr: true });
const CompletedWork = dynamic(() => import("@/components/CompletedWork"), { ssr: true });
const IndustriesWeSupport = dynamic(() => import("@/components/IndustriesWeSupport"), { ssr: true });
const ProductsAndSystems = dynamic(() => import("@/components/ProductsAndSystems"), { ssr: true });
const HowSanotaWorks = dynamic(() => import("@/components/HowSanotaWorks"), { ssr: true });
const WhyWorkWithSanota = dynamic(() => import("@/components/WhyWorkWithSanota"), { ssr: true });
const AMCAndLifecycle = dynamic(() => import("@/components/AMCAndLifecycle"), { ssr: true });
const SanotaAndKnoweb = dynamic(() => import("@/components/SanotaAndKnoweb"), { ssr: true });
const MediaSection = dynamic(() => import("@/components/MediaSection"), { ssr: true });
const InnovationAndCollaboration = dynamic(() => import("@/components/InnovationAndCollaboration"), { ssr: true });
const FinalCTA = dynamic(() => import("@/components/FinalCTA"), { ssr: true });

// Defer heavy WebGL shaders to desktop only, without blocking mobile main thread
const GradientWaves = dynamic(() => import("@/components/GradientWaves"), { ssr: false });

export default function Home() {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    // Check if desktop screen and not low-power mobile
    if (typeof window !== "undefined" && window.innerWidth >= 768) {
      setIsDesktop(true);
    }
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-[#FAF8F5] dark:bg-[#050B14] relative transition-colors duration-500">
      {isDark && isDesktop && (
        <div className="fixed inset-0 z-0 hidden md:block pointer-events-none">
          <GradientWaves
            horizonColor="#050B14"
            waveColor="#2E5EAA"
            crestColor="#60A5FA"
            speed={0.4}
            amplitude={2.5}
            waveScale={0.6}
            waveRatio={0.9}
            swell={35}
            turbulence={20}
            tilt={1.11}
            zoom={1}
            height={5.5}
            fogDepth={15}
            detail="low"
            brightness={1.5}
            opacity={1}
            mouseInteraction={false}
            parallaxStrength={0.5}
            grain={false}
            grainIntensity={0.05}
          />
        </div>
      )}

      <div className="relative z-10 flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow pt-24">
          <Hero />
          <CorporateProof />
          <VisitorPathways />
          <SolutionNavigator />
          <IntegratedSolutionCapability />
          <CompletedWork />
          <IndustriesWeSupport />
          <ProductsAndSystems />
          <HowSanotaWorks />
          <WhyWorkWithSanota />
          <AMCAndLifecycle />
          <SanotaAndKnoweb />
          <MediaSection />
          <InnovationAndCollaboration />
          <FinalCTA />
        </main>
        <Footer />
      </div>
    </div>
  );
}
