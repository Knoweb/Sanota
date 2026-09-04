import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#0B1220]">
      <Header />
      <main className="flex-grow pt-20">
        <Hero />
        {/* Further sections will go here */}
      </main>
      <Footer />
    </div>
  );
}
