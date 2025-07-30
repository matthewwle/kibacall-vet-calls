import { Button } from "@/components/ui/button";
import aiReceptionistHero from "@/assets/ai-receptionist-hero-teal.jpg";

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
              Your Veterinary Clinic's{" "}
              <span className="text-primary">24/7 AI Call Handler</span>
              —Book More Appointments, Reduce No‑Shows
            </h1>
            <p className="font-body text-lg lg:text-xl text-muted-foreground mb-8 leading-relaxed">
              Kibacall answers every call, collects client and pet info, sends reminders, 
              and connects you to a human only when needed.
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
          <div className="relative flex justify-center">
            <img 
              src={aiReceptionistHero} 
              alt="Friendly AI receptionist taking calls for veterinary clinic" 
              className="w-full max-w-lg h-auto rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;