import { Card } from "@/components/ui/card";
import { Lasso, Video, Focus, Terminal } from "lucide-react";

const pilotFeatures = [
  {
    icon: Lasso,
    title: "Macro Lasso",
    description: "Record a gesture + phrase once; reuse anywhere.",
  },
  {
    icon: Video,
    title: "Meeting Mode",
    description: "Start/stop notes, tag action items, drop them into your tracker.",
  },
  {
    icon: Focus,
    title: "Focus Field",
    description: "Mute pings, play focus audio, set a timer with a word.",
  },
  {
    icon: Terminal,
    title: "Starboard Overlay",
    description: "A subtle command bar that appears when you call it—then drifts away.",
  },
];

const NewPilotFeatures = () => {
  return (
    <section className="relative py-24 px-4 bg-gradient-to-b from-background to-card">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-western text-primary drop-shadow-[4px_4px_0_hsl(38,30%,35%)]">
            Pilot features
          </h2>
          <p className="text-xl text-muted-foreground mt-4">
            Advanced capabilities for power users
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pilotFeatures.map((feature, index) => (
            <Card
              key={index}
              className="p-6 bg-card/50 backdrop-blur border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 group hover:-translate-y-2 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <feature.icon className="h-10 w-10 text-primary mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewPilotFeatures;
