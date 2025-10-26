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

const NewBuildFor = () => {
  return (
    <section className="relative py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            Built for the Outlaw of Alt-Tab
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            No more context switching. Stay in your flow.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="text-center space-y-4 group animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex justify-center">
                <div className="p-6 rounded-2xl bg-primary/10 group-hover:bg-primary/20 transition-all group-hover:scale-110 duration-300">
                  <benefit.icon className="h-12 w-12 text-primary" />
                </div>
              </div>
              <h3 className="text-2xl font-semibold text-foreground group-hover:text-primary transition-colors">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewBuildFor;
