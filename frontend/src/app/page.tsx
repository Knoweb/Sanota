import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhatSanotaDoes from "@/components/WhatSanotaDoes";
import IndustriesWeSupport from "@/components/IndustriesWeSupport";
import ProductsAndSystems from "@/components/ProductsAndSystems";
import WhyWorkWithSanota from "@/components/WhyWorkWithSanota";
import FeaturedProjects from "@/components/FeaturedProjects";
import HowSanotaWorks from "@/components/HowSanotaWorks";
import ProjectExecution from "@/components/ProjectExecution";
import AMCAndLifecycle from "@/components/AMCAndLifecycle";
import SanotaAndKnoweb from "@/components/SanotaAndKnoweb";
import CorporateProof from "@/components/CorporateProof";
import InnovationAndCollaboration from "@/components/InnovationAndCollaboration";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-transparent">
      <Header />
      <main className="flex-grow pt-24">
        <Hero />
        <WhatSanotaDoes />
        <IndustriesWeSupport />
        <ProductsAndSystems />
        <WhyWorkWithSanota />
        <FeaturedProjects />
        <HowSanotaWorks />
        <ProjectExecution />
        <AMCAndLifecycle />
        <SanotaAndKnoweb />
        <CorporateProof />
        <InnovationAndCollaboration />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
