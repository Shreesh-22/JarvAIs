import { Hand, Mic, Zap, Lightbulb } from "lucide-react";
import { Card } from "@/components/ui/card";

const features = [
  {
    icon: Hand,
    title: "Gesture Scrolling & Selection",
    description:
      "Flick to scroll, pinch to zoom, lasso to select—natural moves that feel like steering through stardust.",
  },
  {
    icon: Mic,
    title: "Always-ready Voice",
    description:
      "Say 'JarvAI, open Notes,' 'search this page,' or 'summarize what's on screen.' No alt-tab rodeo.",
  },
  {
    icon: Zap,
    title: "Cross-app Shortcuts",
    description:
      "One command, many apps: 'drop a task in Notion,' 'paste to Slack,' 'start a timer,' 'play focus mix.'",
  },
  {
    icon: Lightbulb,
    title: "Context Hints",
    description:
      "On-screen suggestions appear when JarvAI spots you doing something repetitive—lasso an action and save it as a macro.",
  },
];

const Features = () => {
  return (
    <section className="relative py-20 px-4 bg-gradient-to-b from-background to-card">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-western text-primary drop-shadow-[4px_4px_0_hsl(38,30%,35%)]">
            Real-time control, in any frontier
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="p-8 bg-card/50 backdrop-blur border-border hover:border-primary/50 transition-all hover:shadow-[0_0_30px_rgba(255,182,39,0.2)] group"
            >
              <feature.icon className="h-12 w-12 text-accent mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-bold text-foreground mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;