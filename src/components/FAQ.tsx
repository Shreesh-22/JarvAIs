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
      "It blends voice + gestures + context, so you act in the moment—not after digging through menus.",
  },
  {
    question: "Does it work across all apps?",
    answer:
      "JarvAI runs at the OS level and includes app-specific skills for popular tools. Generic commands work anywhere on screen.",
  },
  {
    question: "Is it always listening?",
    answer:
      "It wakes on a local keyword or a keyboard/gesture cue. You control when the mic's on.",
  },
  {
    question: "Can we use it at work?",
    answer:
      "Yes—team policies, custom macros, and shared skill packs help everyone ride in formation.",
  },
];

const FAQ = () => {
  return (
    <section className="relative py-20 px-4 bg-gradient-to-b from-background to-card">
      <div className="container mx-auto max-w-3xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-western text-primary drop-shadow-[4px_4px_0_hsl(38,30%,35%)]">
            FAQs
          </h2>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border border-border bg-card/50 backdrop-blur rounded-lg px-6 hover:border-primary/50 transition-colors"
            >
              <AccordionTrigger className="text-left text-lg font-semibold text-foreground hover:text-primary">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;