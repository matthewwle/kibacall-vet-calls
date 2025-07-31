import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight } from "lucide-react";

const FinalCTA = () => {
  const handleBookConsultation = () => {
    // This would typically open a calendar booking widget or redirect to a booking page
    window.open('https://calendly.com/kibacall-consultation/30min?back=1', '_blank');
  };

  return (
    <section id="final-cta" className="py-20 bg-gradient-to-r from-primary to-primary/90 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-50" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-heading text-3xl lg:text-5xl font-bold text-primary-foreground mb-6">
            Ready to Free Up Your Front Desk?
          </h2>
          <p className="font-body text-lg lg:text-xl text-primary-foreground/90 mb-8 leading-relaxed">
            Book a free consultation to see how Kibacall can transform your clinic operations. 
            No commitment required — just see the difference for yourself.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button 
              variant="cta" 
              size="lg" 
              onClick={handleBookConsultation}
              className="text-lg px-8 py-4 bg-accent hover:bg-accent/90 text-accent-foreground"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Book My Free Consultation
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 text-primary-foreground/80 font-body">
            <div className="flex items-center justify-center gap-2">
              <div className="w-2 h-2 bg-accent rounded-full"></div>
              <span>15-minute consultation</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <div className="w-2 h-2 bg-accent rounded-full"></div>
              <span>No obligation</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <div className="w-2 h-2 bg-accent rounded-full"></div>
              <span>Custom solution demo</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;