import { Shield, Lock, Users } from "lucide-react";

const securityFeatures = [
  {
    icon: Shield,
    title: "On-device gesture processing",
    description: "No cloud required for controls",
  },
  {
    icon: Lock,
    title: "Encrypted voice snippets",
    description: "When cloud AI is used",
  },
  {
    icon: Users,
    title: "Workspace isolation",
    description: "For teams and shared devices",
  },
];

const Security = () => {
  return (
    <section className="relative py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-western text-primary drop-shadow-[4px_4px_0_hsl(38,30%,35%)] mb-4">
            Security on the open range
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {securityFeatures.map((feature, index) => (
            <div key={index} className="text-center space-y-4">
              <div className="flex justify-center">
                <div className="p-4 rounded-lg bg-accent/10 border-2 border-accent/30">
                  <feature.icon className="h-8 w-8 text-accent" />
                </div>
              </div>
              <h3 className="text-lg font-bold text-foreground">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Security;