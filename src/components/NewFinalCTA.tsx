import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const NewFinalCTA = () => {
  return (
    <section className="relative py-32 px-4 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-card via-primary/10 to-card" />
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-starlight/20 animate-twinkle"
            style={{
              width: "2px",
              height: "2px",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto max-w-4xl relative z-10 text-center space-y-8 animate-slide-up">
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-western text-primary drop-shadow-[4px_4px_0_hsl(38,30%,35%)]">
          Saddle up
        </h2>

        <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
          Blaze through tabs, lasso tasks, and cruise your desktop at hyperspeed.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
          <Button
            size="lg"
            className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl hover:shadow-primary/40 transition-all animate-pulse-glow group"
          >
            Get JarvAI for Mac
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="text-lg px-8 py-6 border-2 hover:bg-card/50"
          >
            Join Windows Waitlist
          </Button>
        </div>

        <div className="pt-8 flex items-center justify-center gap-2 text-sm text-muted-foreground">
          <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span>Free to start • No credit card required</span>
        </div>
      </div>
    </section>
  );
};

export default NewFinalCTA;
