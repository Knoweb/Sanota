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

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-transparent">
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
  );
}
