import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: { monthly: 0, annual: 0 },
    description: "Perfect for individuals getting started",
    features: [
      "Voice + gesture control",
      "Up to 3 apps",
      "Basic macros",
      "Community support",
    ],
    cta: "Get for Mac",
    highlight: false,
  },
  {
    name: "Pro",
    price: { monthly: 19, annual: 190 },
    description: "For power users who want it all",
    features: [
      "Unlimited apps",
      "Advanced macros",
      "Meeting Mode",
      "Focus Field",
      "Priority support",
      "Custom integrations",
    ],
    cta: "Get for Mac",
    highlight: true,
  },
  {
    name: "Team",
    price: { monthly: null, annual: null },
    description: "For organizations with shared workflows",
    features: [
      "Everything in Pro",
      "Team workspace",
      "Shared skill packs",
      "Admin controls",
      "SSO & SAML",
      "Dedicated support",
    ],
    cta: "Contact Sales",
    highlight: false,
  },
];

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <section id="pricing" className="relative py-24 px-4 bg-gradient-to-b from-card to-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            Simple, transparent pricing
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Choose the plan that's right for you
          </p>

          {/* Toggle */}
          <div className="inline-flex items-center gap-4 p-1 rounded-full bg-card/50 border border-border/50">
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-6 py-2 rounded-full transition-all ${
                !isAnnual
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`px-6 py-2 rounded-full transition-all ${
                isAnnual
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Annual
              <span className="ml-2 text-xs bg-secondary/20 text-secondary px-2 py-1 rounded">
                Save 17%
              </span>
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`p-8 bg-card/50 backdrop-blur border transition-all duration-300 hover:-translate-y-1 animate-slide-up ${
                plan.highlight
                  ? "border-primary/50 shadow-lg shadow-primary/20"
                  : "border-border/50 hover:border-primary/30"
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {plan.highlight && (
                <div className="mb-4 inline-block px-3 py-1 rounded-full bg-primary/20 text-primary text-sm font-medium">
                  Most Popular
                </div>
              )}

              <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
              <p className="text-muted-foreground mb-6">{plan.description}</p>

              <div className="mb-6">
                {plan.price.monthly !== null ? (
                  <>
                    <div className="flex items-baseline">
                      <span className="text-4xl font-bold text-foreground">
                        ${isAnnual ? plan.price.annual / 12 : plan.price.monthly}
                      </span>
                      <span className="text-muted-foreground ml-2">/month</span>
                    </div>
                    {isAnnual && (
                      <p className="text-sm text-muted-foreground mt-1">
                        Billed annually at ${plan.price.annual}
                      </p>
                    )}
                  </>
                ) : (
                  <div className="text-4xl font-bold text-foreground">Custom</div>
                )}
              </div>

              <Button
                className={`w-full mb-6 ${
                  plan.highlight
                    ? "bg-primary hover:bg-primary/90"
                    : "bg-card hover:bg-card/80 border border-border/50"
                }`}
              >
                {plan.cta}
              </Button>

              <div className="space-y-3">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
