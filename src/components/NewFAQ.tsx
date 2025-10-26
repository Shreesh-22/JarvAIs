import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Why JarvAI instead of regular voice control?",
    answer:
      "It blends voice + gestures + context, so you act in the moment—not after digging through menus. JarvAI understands what you're doing and surfaces help exactly when you need it.",
  },
  {
    question: "Does it work across all apps?",
    answer:
      "JarvAI runs at the OS level and includes app-specific skills for popular tools. Generic commands work anywhere on screen, so you're covered whether you're in Chrome, Notion, or your terminal.",
  },
  {
    question: "Is it always listening?",
    answer:
      "No. It wakes on a local keyword or a keyboard/gesture cue. You have complete control over when the microphone is active, and all processing happens on-device when possible.",
  },
  {
    question: "Can we use it at work?",
    answer:
      "Absolutely. Team plans include workspace policies, custom macros, shared skill packs, SSO, and admin controls to help everyone ride in formation while maintaining security.",
  },
  {
    question: "What about Windows and Linux?",
    answer:
      "Mac is available now. Windows is in waitlist (join above), and Linux support is on our roadmap. We're building for all platforms where people do their best work.",
  },
];

const NewFAQ = () => {
  return (
    <section id="faq" className="relative py-24 px-4">
      <div className="container mx-auto max-w-3xl">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-western text-primary drop-shadow-[4px_4px_0_hsl(38,30%,35%)] mb-4">
            FAQs
          </h2>
          <p className="text-xl text-muted-foreground">
            Everything you need to know
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border border-border/50 bg-card/30 backdrop-blur rounded-xl px-6 hover:border-primary/50 transition-all animate-slide-up data-[state=open]:border-primary/50"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <AccordionTrigger className="text-left text-lg font-semibold text-foreground hover:text-primary py-6">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground">
            Still have questions?{" "}
            <a href="#" className="text-primary hover:underline font-medium">
              Contact support
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewFAQ;
