import { Phone, Calendar, MessageSquare, ClipboardList, Users, TrendingUp } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Phone,
      title: "24/7 Call Answering",
      description: "Never miss a client call again.",
    },
    {
      icon: Calendar,
      title: "Appointment Management",
      description: "Schedule, reschedule, or cancel seamlessly.",
    },
    {
      icon: MessageSquare,
      title: "Automated Text Reminders",
      description: "Reduce no-shows with SMS follow-ups.",
    },
    {
      icon: ClipboardList,
      title: "Client & Pet Info Intake",
      description: "Collect info without extra staff effort.",
    },
    {
      icon: Users,
      title: "Seamless Human Escalation",
      description: "Hands-off until it really matters.",
    },
    {
      icon: TrendingUp,
      title: "Boost Clinic Efficiency",
      description: "Focus on care, we handle the calls.",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Everything Your Clinic Needs to Never Miss a Call
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Kibacall handles your front desk operations so you can focus on what matters most — caring for pets.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div 
                key={index}
                className="group p-6 bg-secondary rounded-2xl border border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center justify-center w-12 h-12 bg-primary rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="font-body text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;