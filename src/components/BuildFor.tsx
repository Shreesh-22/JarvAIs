import { Laptop, Waves, Globe } from "lucide-react";

const benefits = [
  {
    icon: Laptop,
    title: "Hands-on Flow",
    description: "Keep your posture, keep your pace. Your cursor rides shotgun while JarvAI handles the trail.",
  },
  {
    icon: Waves,
    title: "Voice + Gesture Fusion",
    description: "Point and say 'copy that,' or gesture and say 'send.' Faster than hotkeys, smoother than menus.",
  },
  {
    icon: Globe,
    title: "Works Where You Work",
    description: "Browser, docs, design tools, meetings—if it's on your screen, JarvAI helps you wrangle it.",
  },
];

const BuildFor = () => {
  return (
    <section className="relative py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-western text-primary drop-shadow-[4px_4px_0_hsl(38,30%,35%)] mb-4">
            Built for the Outlaw of Alt-Tab
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center space-y-4 group">
              <div className="flex justify-center">
                <div className="p-6 rounded-full bg-accent/20 group-hover:bg-accent/30 transition-colors">
                  <benefit.icon className="h-12 w-12 text-accent" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-foreground">{benefit.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BuildFor;