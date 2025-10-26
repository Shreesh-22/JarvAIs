import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import BuildFor from "@/components/BuildFor";
import PilotFeatures from "@/components/PilotFeatures";
import Security from "@/components/Security";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Divider from "@/components/Divider";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Divider />
      <Features />
      <Divider />
      <BuildFor />
      <Divider />
      <PilotFeatures />
      <Divider />
      <Security />
      <Divider />
      <FAQ />
      <FinalCTA />
    </main>
  );
};

export default Index;