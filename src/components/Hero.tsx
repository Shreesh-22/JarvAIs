import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import desertLandscape from "@/assets/desert-landscape.png";
import cactus from "@/assets/cactus.png";
import cowMascot from "@/assets/cow-mascot.png";
import rock from "@/assets/rock.png";
import jarvaiLogo from "@/assets/jarvai-logo.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Starry Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[hsl(215,60%,12%)] to-[hsl(215,60%,8%)]">
        {/* Stars */}
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-accent animate-twinkle"
              style={{
                width: Math.random() > 0.7 ? "3px" : "2px",
                height: Math.random() > 0.7 ? "3px" : "2px",
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 60}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 3}s`,
              }}
            />
          ))}
          {/* Larger stars */}
          {[...Array(20)].map((_, i) => (
            <div
              key={`star-${i}`}
              className="absolute"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 60}%`,
                animationDelay: `${Math.random() * 3}s`,
              }}
            >
              <svg width="16" height="16" viewBox="0 0 16 16" className="animate-twinkle">
                <path
                  d="M8 0L9 7L8 8L7 7L8 0Z M8 16L7 9L8 8L9 9L8 16Z M0 8L7 9L8 8L7 7L0 8Z M16 8L9 7L8 8L9 9L16 8Z"
                  fill="hsl(45, 100%, 58%)"
                />
              </svg>
            </div>
          ))}
        </div>
      </div>

      {/* Desert Landscape Layers */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
        <img
          src={desertLandscape}
          alt=""
          className="w-full object-cover"
          style={{ height: "40vh", minHeight: "300px" }}
        />
      </div>

      {/* Decorative Elements */}
      <img
        src={cactus}
        alt=""
        className="absolute bottom-[15%] left-[8%] w-20 md:w-32 animate-float pointer-events-none"
        style={{ animationDelay: "0s" }}
      />
      <img
        src={cowMascot}
        alt=""
        className="absolute top-[20%] right-[10%] w-24 md:w-40 animate-float pointer-events-none"
        style={{ animationDelay: "1s" }}
      />
      <img
        src={rock}
        alt=""
        className="absolute bottom-[20%] right-[15%] w-16 md:w-24 opacity-80 pointer-events-none"
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pt-32 pb-48">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-slide-up">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <img
              src={jarvaiLogo}
              alt="JarvAI"
              className="w-64 md:w-96 drop-shadow-[0_0_30px_rgba(255,182,39,0.4)]"
            />
          </div>

          <h1 className="text-2xl md:text-3xl font-sans text-foreground/90 leading-relaxed">
            Ride the galaxy of apps with nothing but your hands and your voice
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            JarvAI is a real-time desktop copilot that lets you scroll, search, launch, and act
            without breaking flow—like you've holstered a starship under your palm.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-lg px-8 py-6 shadow-[0_0_20px_rgba(255,182,39,0.3)] hover:shadow-[0_0_30px_rgba(255,182,39,0.5)] transition-all"
            >
              Get for Windows
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
      </div>
    </section>
  );
};

export default Hero;