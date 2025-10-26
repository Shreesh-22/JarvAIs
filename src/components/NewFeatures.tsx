import { Hand, Mic, Zap, Lightbulb } from "lucide-react";
import { Card } from "@/components/ui/card";

const features = [
  {
    icon: Hand,
    title: "Gesture Scrolling & Selection",
    description: "Flick to scroll, pinch to zoom, lasso to select—natural moves that feel like steering through stardust.",
  },
  {
    icon: Mic,
    title: "Always-ready Voice",
    description: "Say 'JarvAI, open Notes,' 'search this page,' or 'summarize what's on screen.' No alt-tab rodeo.",
  },
  {
    icon: Zap,
    title: "Cross-app Shortcuts",
    description: "One command, many apps: 'drop a task in Notion,' 'paste to Slack,' 'start a timer.'",
  },
  {
    icon: Lightbulb,
    title: "Context Hints",
    description: "On-screen suggestions appear when JarvAI spots you doing something repetitive—lasso an action and save it.",
  },
];

const NewFeatures = () => {
  return (
    <section id="features" className="relative py-24 px-4 bg-gradient-to-b from-card to-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 space-y-4 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-western text-primary drop-shadow-[4px_4px_0_hsl(38,30%,35%)]">
            Real-time control, in any frontier
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Work faster with voice and gesture control that feels natural
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="p-8 bg-card/50 backdrop-blur border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 group hover:-translate-y-1"
              style={{
                animationDelay: `${index * 0.1}s`,
              }}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewFeatures;
