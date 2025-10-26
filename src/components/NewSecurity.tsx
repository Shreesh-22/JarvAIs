import { Shield, Lock, Users, CheckCircle2 } from "lucide-react";
import { Card } from "@/components/ui/card";

const securityFeatures = [
  {
    icon: Shield,
    title: "On-device gesture processing",
    description: "No cloud required for controls—your gestures never leave your machine",
  },
  {
    icon: Lock,
    title: "Encrypted voice snippets",
    description: "When cloud AI is used, all voice data is encrypted in transit and at rest",
  },
  {
    icon: Users,
    title: "Workspace isolation",
    description: "Teams and shared devices stay separate with role-based access control",
  },
];

const badges = [
  "ISO 27001",
  "SOC 2 Type II",
  "GDPR Compliant",
  "CCPA Compliant",
];

const NewSecurity = () => {
  return (
    <section id="security" className="relative py-24 px-4">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-western text-primary drop-shadow-[4px_4px_0_hsl(38,30%,35%)] mb-4">
            Security on the open range
          </h2>
          <p className="text-xl text-muted-foreground">
            Enterprise-grade protection for your data and privacy
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Security Features */}
          <div className="space-y-6 animate-slide-up">
            {securityFeatures.map((feature, index) => (
              <Card
                key={index}
                className="p-6 bg-card/50 backdrop-blur border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-primary/10">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Right: Badges & Additional Info */}
          <div className="space-y-8 animate-slide-up" style={{ animationDelay: "0.3s" }}>
            <Card className="p-8 bg-card/50 backdrop-blur border-border/50">
              <h3 className="text-2xl font-semibold text-foreground mb-6">
                Compliance & Certifications
              </h3>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {badges.map((badge, index) => (
                  <div
                    key={index}
                    className="p-4 rounded-lg bg-primary/10 border border-primary/30 text-center font-medium text-foreground hover:bg-primary/20 transition-colors"
                  >
                    {badge}
                  </div>
                ))}
              </div>

              <div className="space-y-3 text-sm">
                {[
                  "Regular third-party security audits",
                  "Dedicated security team monitoring 24/7",
                  "Bug bounty program for researchers",
                  "Transparent incident response process",
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-2 text-muted-foreground">
                    <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </Card>

            <div className="text-center p-6 rounded-lg bg-primary/5 border border-primary/20">
              <p className="text-sm text-muted-foreground">
                Questions about security?{" "}
                <a href="#" className="text-primary hover:underline font-medium">
                  Contact our security team
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewSecurity;
