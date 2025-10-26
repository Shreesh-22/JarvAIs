import DynamicIslandHeader from "@/components/DynamicIslandHeader";
import NewHero from "@/components/NewHero";
import NewFeatures from "@/components/NewFeatures";
import NewBuildFor from "@/components/NewBuildFor";
import NewPilotFeatures from "@/components/NewPilotFeatures";
import UseCases from "@/components/UseCases";
import HowItWorks from "@/components/HowItWorks";
import NewSecurity from "@/components/NewSecurity";
import Pricing from "@/components/Pricing";
import NewFAQ from "@/components/NewFAQ";
import NewFinalCTA from "@/components/NewFinalCTA";
import Footer from "@/components/Footer";
import Divider from "@/components/Divider";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <DynamicIslandHeader />
      <NewHero />
      <Divider />
      <NewFeatures />
      <Divider />
      <NewBuildFor />
      <Divider />
      <NewPilotFeatures />
      <Divider />
      <UseCases />
      <Divider />
      <HowItWorks />
      <Divider />
      <NewSecurity />
      <Divider />
      <Pricing />
      <Divider />
      <NewFAQ />
      <NewFinalCTA />
      <Footer />
    </main>
  );
};

export default Index;