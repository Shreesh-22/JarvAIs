import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Zap } from "lucide-react";
import desertDunes from "@/assets/desert-dunes.png";
import newCactus from "@/assets/new-cactus.png";
import newCow from "@/assets/new-cow.png";
import newRock from "@/assets/new-rock.png";
import jarvaiLogo from "@/assets/jarvai-3d-logo.png";

const NewHero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20 md:pt-0">
      {/* Starfield Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[hsl(215,60%,12%)] to-[hsl(215,60%,8%)]">
        {/* Stars */}
        {[...Array(100)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-starlight/40 animate-twinkle"
            style={{
              width: Math.random() > 0.8 ? "2px" : "1px",
              height: Math.random() > 0.8 ? "2px" : "1px",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          />
        ))}

        {/* Shooting Stars */}
        {[...Array(3)].map((_, i) => (
          <div
            key={`shooting-${i}`}
            className="absolute w-1 h-1 bg-primary rounded-full animate-shooting-star"
            style={{
              left: `${20 + i * 30}%`,
              top: `${10 + i * 20}%`,
              animationDelay: `${i * 8}s`,
            }}
          />
        ))}

        {/* Nebula Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
      </div>

      {/* Desert Landscape */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none z-[5]">
        <img
          src={desertDunes}
          alt=""
          className="w-full object-cover"
          style={{ height: "35vh", minHeight: "250px" }}
        />
      </div>

      {/* Decorative Elements */}
      <img
        src={newCactus}
        alt=""
        className="absolute bottom-[18%] left-[8%] w-16 md:w-24 animate-float pointer-events-none z-10"
        style={{ animationDelay: "0s" }}
      />
      <img
        src={newCow}
        alt=""
        className="absolute top-[15%] right-[8%] w-20 md:w-32 animate-float pointer-events-none z-10"
        style={{ animationDelay: "1s" }}
      />
      <img
        src={newRock}
        alt=""
        className="absolute bottom-[22%] right-[12%] w-12 md:w-20 opacity-90 pointer-events-none z-10"
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <div className="space-y-8 animate-slide-up">
            {/* Logo */}
            <div className="mb-8">
              <img
                src={jarvaiLogo}
                alt="JarvAI"
                className="w-56 md:w-80 drop-shadow-[0_0_30px_rgba(255,182,39,0.4)]"
              />
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-sans text-foreground leading-tight">
              Command your computer like a{" "}
              <span className="font-western text-primary drop-shadow-[3px_3px_0_hsl(38,30%,35%)]">
                space cowboy
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-xl">
              Ride the galaxy of apps with your hands and your voice. JarvAI helps{" "}
              <span className="text-foreground font-medium">during the task</span> — not after.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                size="lg"
                className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-primary/50 transition-all group"
              >
                Get for Mac
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

            <div className="flex flex-wrap gap-6 text-sm text-muted-foreground pt-4">
              <div className="flex items-center gap-2">
                <Zap className="h-4 w-4 text-primary" />
                <span>No account required</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4 text-primary" />
                <span>On-device processing</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4 text-primary" />
                <span>Privacy-first</span>
              </div>
            </div>
          </div>

          {/* Right: Animated Demo Mockup */}
          <div className="relative animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <div className="relative rounded-2xl border-2 border-primary/20 bg-card/50 backdrop-blur-xl p-8 shadow-2xl hover:shadow-primary/20 transition-all">
              {/* Voice Waveform */}
              <div className="flex items-center justify-center gap-1 mb-8">
                {[...Array(20)].map((_, i) => (
                  <div
                    key={i}
                    className="w-1 bg-primary rounded-full animate-pulse"
                    style={{
                      height: `${20 + Math.random() * 40}px`,
                      animationDelay: `${i * 0.05}s`,
                      animationDuration: "1s",
                    }}
                  />
                ))}
              </div>

              {/* Command Chips */}
              <div className="space-y-3">
                {[
                  { text: "open Notes", delay: "0s" },
                  { text: "summarize page", delay: "0.5s" },
                  { text: "paste to Slack", delay: "1s" },
                ].map((cmd, i) => (
                  <div
                    key={i}
                    className="bg-primary/10 border border-primary/30 rounded-lg px-4 py-3 text-foreground animate-fade-in hover:bg-primary/20 transition-colors"
                    style={{ animationDelay: cmd.delay }}
                  >
                    <span className="text-primary font-mono text-sm">→</span> {cmd.text}
                  </div>
                ))}
              </div>

              {/* Gesture Trail Visual */}
              <div className="mt-8 relative h-32 rounded-lg bg-background/50 border border-border/50 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-muted-foreground text-sm">
                  <div className="text-center space-y-2">
                    <div className="text-2xl">✋</div>
                    <div>Hand gesture tracking</div>
                  </div>
                </div>
                <div
                  className="absolute top-1/2 left-0 w-8 h-8 rounded-full bg-primary/30 blur-sm animate-float"
                  style={{ animationDuration: "3s" }}
                />
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-16 h-16 rounded-full bg-primary/20 blur-xl animate-pulse" />
            <div className="absolute -bottom-4 -left-4 w-20 h-20 rounded-full bg-secondary/20 blur-xl animate-pulse" style={{ animationDelay: "1s" }} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewHero;
