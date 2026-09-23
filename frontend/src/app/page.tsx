"use client";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CorporateProof from "@/components/CorporateProof";
import VisitorPathways from "@/components/VisitorPathways";
import SolutionNavigator from "@/components/SolutionNavigator";
import IntegratedSolutionCapability from "@/components/IntegratedSolutionCapability";
import CompletedWork from "@/components/CompletedWork";
import IndustriesWeSupport from "@/components/IndustriesWeSupport";
import ProductsAndSystems from "@/components/ProductsAndSystems";
import HowSanotaWorks from "@/components/HowSanotaWorks";
import WhyWorkWithSanota from "@/components/WhyWorkWithSanota";
import AMCAndLifecycle from "@/components/AMCAndLifecycle";
import SanotaAndKnoweb from "@/components/SanotaAndKnoweb";
import MediaSection from "@/components/MediaSection";
import InnovationAndCollaboration from "@/components/InnovationAndCollaboration";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import dynamic from 'next/dynamic';
const GradientWaves = dynamic(() => import("@/components/GradientWaves"), { ssr: false });

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#050B14] relative">
      <div className="fixed inset-0 z-0">
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
