import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Zap, Users } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import kibacallLogo from "@/assets/KibacallLogo.png";

const About = () => {
  const scrollToConsultation = () => {
    window.open('https://calendly.com/kibacall-consultation/30min?back=1', '_blank');
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 to-primary/5 py-20 lg:py-32">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-8 h-8 text-primary">🐾</div>
          <div className="absolute top-32 right-20 w-6 h-6 text-primary">🐾</div>
          <div className="absolute bottom-20 left-32 w-7 h-7 text-primary">🐾</div>
          <div className="absolute bottom-40 right-10 w-5 h-5 text-primary">🐾</div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="flex justify-center mb-8">
            <img src={kibacallLogo} alt="Kibacall Logo" className="w-16 h-16" />
          </div>
          <h1 className="font-heading text-4xl lg:text-6xl font-bold text-foreground mb-6 animate-fade-in">
            We're Here to Help Your Clinic Thrive
          </h1>
          <p className="font-body text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto animate-fade-in">
            Our mission is to let your team focus on care while we handle every call with the same warmth as a human receptionist.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-8">
              Our Story
            </h2>
            <div className="space-y-6 font-body text-lg text-muted-foreground leading-relaxed">
              <p>
                Kibacall was born from a simple idea: every pet owner deserves to reach their clinic when it matters most. 
                After seeing how often busy veterinary front desks missed calls or juggled tasks, we built an AI-powered 
                solution that never sleeps, never misses a call, and always ensures your clients feel heard.
              </p>
              <p>
                We understand the unique challenges veterinary teams face daily. Between managing appointments, 
                handling walk-ins, and providing compassionate care, your front desk staff shouldn't have to choose 
                between answering the phone and helping the client standing right in front of them.
              </p>
              <p>
                Our vision is simple: clinics that never miss a client call and always deliver a professional, 
                friendly first impression. Because when pet owners need you most, we want to make sure they can reach you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Why Clinics Trust Us
            </h2>
            <p className="font-body text-xl text-muted-foreground max-w-2xl mx-auto">
              We've built Kibacall specifically for the unique needs of veterinary practices.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-background">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Shield className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-heading text-xl font-bold text-foreground mb-4">
                  Veterinary-Focused AI
                </h3>
                <p className="font-body text-muted-foreground">
                  Tailored to real clinic workflows and common call scenarios, understanding pet emergencies and routine care needs.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-background">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Zap className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-heading text-xl font-bold text-foreground mb-4">
                  Seamless Integration
                </h3>
                <p className="font-body text-muted-foreground">
                  Works with major scheduling platforms like Covetrus and Hippo Manager, fitting right into your existing workflow.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-background">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-heading text-xl font-bold text-foreground mb-4">
                  Human Touch When Needed
                </h3>
                <p className="font-body text-muted-foreground">
                  AI escalates complex cases to staff so no client feels ignored, ensuring compassionate care in every interaction.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Mission Statement Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-8">
              Built for Clinics, Backed by Innovation
            </h2>
            <p className="font-body text-xl text-muted-foreground mb-12 leading-relaxed">
              Every feature we build is designed with veterinary teams in mind. We combine cutting-edge AI technology 
              with deep understanding of clinic operations to create solutions that actually work for your practice.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <div className="bg-primary/5 rounded-2xl p-6 border border-primary/10">
                <h3 className="font-heading text-lg font-bold text-primary mb-2">Client Care First</h3>
                <p className="font-body text-sm text-muted-foreground">Every interaction prioritizes compassionate service</p>
              </div>
              <div className="bg-primary/5 rounded-2xl p-6 border border-primary/10">
                <h3 className="font-heading text-lg font-bold text-primary mb-2">Reliable 24/7 Coverage</h3>
                <p className="font-body text-sm text-muted-foreground">Never miss another important call again</p>
              </div>
              <div className="bg-primary/5 rounded-2xl p-6 border border-primary/10">
                <h3 className="font-heading text-lg font-bold text-primary mb-2">Always Learning & Improving</h3>
                <p className="font-body text-sm text-muted-foreground">Continuously adapting to serve you better</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-6">
            Let's Help Your Clinic Focus on Care
          </h2>
          <p className="font-body text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Ready to transform how your clinic handles calls? Let's discuss how Kibacall can work for your practice.
          </p>
          <Button 
            variant="cta" 
            size="lg" 
            onClick={scrollToConsultation}
            className="text-lg px-8 py-4 animate-fade-in"
          >
            Book a Consultation
          </Button>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default About;