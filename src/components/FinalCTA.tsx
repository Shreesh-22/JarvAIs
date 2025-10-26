import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const FinalCTA = () => {
  return (
    <section className="relative py-32 px-4">
      <div className="container mx-auto max-w-4xl text-center space-y-8">
        <h2 className="text-5xl md:text-6xl font-western text-primary drop-shadow-[4px_4px_0_hsl(38,30%,35%)] mb-6">
          Saddle up
        </h2>

        <p className="text-xl md:text-2xl text-foreground/90 leading-relaxed">
          Blaze through tabs, lasso tasks, and cruise your desktop at hyperspeed.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-lg px-8 py-6 shadow-[0_0_20px_rgba(255,182,39,0.3)] hover:shadow-[0_0_30px_rgba(255,182,39,0.5)] transition-all"
          >
            Get JarvAI for Windows
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-primary text-primary hover:bg-primary/10 font-semibold text-lg px-8 py-6"
          >
            Coming Soon for Mac
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;