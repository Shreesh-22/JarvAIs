import { Download, Settings, Rocket } from "lucide-react";

const steps = [
  {
    number: "1",
    icon: Download,
    title: "Install JarvAI",
    description: "Download for Mac in seconds. No account needed.",
  },
  {
    number: "2",
    icon: Settings,
    title: "Enable voice + gestures",
    description: "Quick setup wizard configures your preferences.",
  },
  {
    number: "3",
    icon: Rocket,
    title: "Add your favorite apps",
    description: "Connect Slack, Notion, Chrome—or use it anywhere.",
  },
];

const HowItWorks = () => {
  return (
    <section className="relative py-24 px-4 bg-gradient-to-b from-card to-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            How it works
          </h2>
          <p className="text-xl text-muted-foreground">
            Get started in under a minute
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative text-center space-y-4 group animate-slide-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="flex justify-center">
                <div className="relative">
                  <div className="w-20 h-20 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-all flex items-center justify-center border-2 border-primary/30 group-hover:border-primary/50 group-hover:scale-110 duration-300">
                    <step.icon className="h-8 w-8 text-primary" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">
                    {step.number}
                  </div>
                </div>
              </div>
              <h3 className="text-2xl font-semibold text-foreground group-hover:text-primary transition-colors">
                {step.title}
              </h3>
              <p className="text-muted-foreground">{step.description}</p>

              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-primary/50 to-transparent" />
              )}
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="#examples"
            className="inline-flex items-center text-primary hover:text-primary/80 transition-colors font-medium"
          >
            See command examples
            <span className="ml-2">→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
