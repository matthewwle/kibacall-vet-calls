import { Button } from "@/components/ui/button";
import aiReceptionistHero from "@/assets/ai-receptionist-hero.jpg";
import phoneMockup from "@/assets/phone-mockup.jpg";

const Hero = () => {
  const scrollToConsultation = () => {
    const ctaSection = document.getElementById('final-cta');
    ctaSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background to-secondary py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="text-center lg:text-left">
            <h1 className="font-heading text-4xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Never Miss a Client Call Again — Meet Your{" "}
              <span className="text-primary">24/7 AI Veterinary Receptionist</span>
            </h1>
            <p className="font-body text-lg lg:text-xl text-muted-foreground mb-8 leading-relaxed">
              Kibacall answers your clinic's calls, books appointments, sends reminders, 
              and escalates to a human when needed — so you can focus on caring for pets.
            </p>
            <Button 
              variant="cta" 
              size="lg" 
              onClick={scrollToConsultation}
              className="text-lg px-8 py-4"
            >
              Book a Free Consultation
            </Button>
          </div>

          {/* Right visuals */}
          <div className="relative">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1">
                <img 
                  src={aiReceptionistHero} 
                  alt="AI Receptionist illustration" 
                  className="w-full h-auto rounded-2xl shadow-2xl"
                />
              </div>
              <div className="order-1 md:order-2">
                <img 
                  src={phoneMockup} 
                  alt="Phone showing AI answering vet clinic call" 
                  className="w-full max-w-xs mx-auto h-auto drop-shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;