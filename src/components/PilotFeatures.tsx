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
    description: "Start/stop notes, tag action items, and drop them into your tracker.",
  },
  {
    icon: Focus,
    title: "Focus Field",
    description: "Mute pings, play focus audio, and set a timer with a word.",
  },
  {
    icon: Terminal,
    title: "Starboard Overlay",
    description: "A subtle command bar that appears when you call it—then drifts away.",
  },
];

const PilotFeatures = () => {
  return (
    <section className="relative py-20 px-4 bg-gradient-to-b from-card to-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-western text-primary drop-shadow-[4px_4px_0_hsl(38,30%,35%)]">
            Pilot features
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pilotFeatures.map((feature, index) => (
            <Card
              key={index}
              className="p-6 bg-card/50 backdrop-blur border-border hover:border-accent transition-all hover:scale-105 group"
            >
              <feature.icon className="h-10 w-10 text-accent mb-4 group-hover:rotate-12 transition-transform" />
              <h3 className="text-xl font-bold text-foreground mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PilotFeatures;