import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Capabilities from "@/components/Capabilities";
import Concepts from "@/components/Concepts";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Features />
      <Capabilities />
      <Concepts />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;