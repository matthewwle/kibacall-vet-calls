import { Phone, MessageCircle, Bell, Heart, PawPrint } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      number: 1,
      title: "Client calls your clinic",
      description: "Your clients call as usual, but now Kibacall answers instantly with a warm, professional greeting.",
      icon: Phone,
    },
    {
      number: 2,
      title: "Kibacall gathers info and books appointments",
      description: "Our AI handles scheduling, collects pet information, and manages rescheduling requests seamlessly.",
      icon: MessageCircle,
    },
    {
      number: 3,
      title: "You get notified only when needed",
      description: "Receive notifications for urgent matters while routine calls are handled automatically.",
      icon: Bell,
    },
  ];

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 opacity-10">
        <PawPrint className="w-24 h-24 text-primary" />
      </div>
      <div className="absolute bottom-10 right-10 opacity-10">
        <Heart className="w-20 h-20 text-primary" />
      </div>
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-4">
            How Kibacall Works
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Simple, seamless, and designed specifically for veterinary practices
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div key={index} className="relative">
                {/* Connection line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-primary to-primary/30 z-10"></div>
                )}
                
                <div className="text-center">
                  <div className="relative inline-flex items-center justify-center w-32 h-32 bg-primary rounded-full mb-6 shadow-lg">
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                      <span className="font-heading font-bold text-accent-foreground text-sm">
                        {step.number}
                      </span>
                    </div>
                    <IconComponent className="w-12 h-12 text-primary-foreground" />
                  </div>
                  
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-4">
                    {step.title}
                  </h3>
                  
                  <p className="font-body text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 bg-secondary px-6 py-3 rounded-full">
            <PawPrint className="w-5 h-5 text-primary" />
            <span className="font-body text-muted-foreground">
              Built specifically for veterinary practices
            </span>
            <Heart className="w-5 h-5 text-primary" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;