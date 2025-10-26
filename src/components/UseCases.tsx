import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import { Phone, Users, Headphones, Briefcase } from "lucide-react";

const useCases = [
  {
    id: "sales",
    label: "Sales Calls",
    icon: Phone,
    description: "Log action items and surface context during customer calls",
    timeline: [
      { time: "0:00", event: "Call starts", hint: "Customer profile loaded" },
      { time: "2:30", event: "Pricing question", hint: "Pulled latest pricing sheet" },
      { time: "8:45", event: "Action item", hint: "Logged: Send proposal by Friday" },
    ],
  },
  {
    id: "recruiting",
    label: "Recruiting",
    icon: Users,
    description: "Track candidate signals and auto-fill scorecards",
    timeline: [
      { time: "0:00", event: "Interview begins", hint: "Candidate resume displayed" },
      { time: "5:20", event: "Technical question", hint: "Noted: Strong React knowledge" },
      { time: "12:00", event: "Culture fit", hint: "Auto-filled scorecard entry" },
    ],
  },
  {
    id: "support",
    label: "Support",
    icon: Headphones,
    description: "Surface KB articles and log ticket updates in real-time",
    timeline: [
      { time: "0:00", event: "Ticket opened", hint: "Related articles surfaced" },
      { time: "3:15", event: "Solution found", hint: "KB article #342 shared" },
      { time: "6:30", event: "Ticket resolved", hint: "Auto-updated ticket status" },
    ],
  },
  {
    id: "consulting",
    label: "Consulting",
    icon: Briefcase,
    description: "Capture meeting notes and track billable time automatically",
    timeline: [
      { time: "0:00", event: "Meeting starts", hint: "Timer started automatically" },
      { time: "4:45", event: "Action items", hint: "Logged 3 deliverables" },
      { time: "9:00", event: "Meeting ends", hint: "Time logged: 9 minutes" },
    ],
  },
];

const UseCases = () => {
  const [activeTab, setActiveTab] = useState("sales");

  return (
    <section id="use-cases" className="relative py-24 px-4">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            Use cases
          </h2>
          <p className="text-xl text-muted-foreground">
            JarvAI adapts to your workflow
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid grid-cols-2 lg:grid-cols-4 mb-8 bg-card/50 border border-border/50 p-1">
            {useCases.map((useCase) => (
              <TabsTrigger
                key={useCase.id}
                value={useCase.id}
                className="flex items-center gap-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                <useCase.icon className="h-4 w-4" />
                <span className="hidden sm:inline">{useCase.label}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {useCases.map((useCase) => (
            <TabsContent key={useCase.id} value={useCase.id} className="animate-slide-up">
              <Card className="p-8 bg-card/50 backdrop-blur border-border/50">
                <p className="text-lg text-muted-foreground mb-8">{useCase.description}</p>

                <div className="space-y-4">
                  {useCase.timeline.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-4 p-4 rounded-lg bg-background/50 hover:bg-background/80 transition-colors border border-border/30"
                    >
                      <div className="flex-shrink-0 w-16 text-sm font-mono text-primary">
                        {item.time}
                      </div>
                      <div className="flex-1">
                        <div className="font-medium text-foreground mb-1">{item.event}</div>
                        <div className="text-sm text-muted-foreground flex items-center gap-2">
                          <span className="text-primary">→</span>
                          {item.hint}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default UseCases;
