import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Clock, TrendingUp, Star, Users, Calendar } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const CaseStudies = () => {
  const handleBookConsultation = () => {
    window.open('https://calendly.com/kibacall/consultation', '_blank');
  };

  const caseStudies = [
    {
      id: 1,
      clinicName: "Happy Paws Animal Hospital",
      location: "Austin, TX",
      size: "4 veterinarians, 12 staff",
      specialty: "Emergency & General Care",
      logo: "🐾",
      challenge: "Happy Paws was losing an average of 23 calls per day during peak hours (7-9 AM, 12-2 PM, 5-7 PM). Their two-person front desk was overwhelmed, leading to 15-minute hold times and frustrated pet owners. Many clients were calling competitors when they couldn't get through.",
      solution: "Kibacall integrated seamlessly with their Covetrus practice management system to handle overflow calls 24/7. The AI collects pet information, books routine appointments, and escalates emergencies immediately to the on-call veterinarian. Automated SMS reminders reduced no-shows by sending appointment confirmations and pre-visit forms.",
      results: {
        missedCalls: 68,
        bookedAppointments: 42,
        timeSaved: 18,
        satisfaction: { before: 4.1, after: 4.7 }
      },
      quote: "Kibacall has completely transformed how we handle calls. Our staff can finally focus on in-clinic care, and we've cut missed calls by more than half. The ROI was immediate.",
      author: "Dr. Sarah Martinez, Practice Owner"
    },
    {
      id: 2,
      clinicName: "Riverbend Veterinary Clinic",
      location: "Portland, OR",
      size: "2 veterinarians, 8 staff",
      specialty: "Small Animal & Exotic Pets",
      logo: "🏥",
      challenge: "As a smaller practice, Riverbend struggled with after-hours calls and weekend emergencies. Clients often called multiple times trying to reach someone, and the practice was losing potential new clients who needed immediate scheduling for sick pets.",
      solution: "Kibacall provides true 24/7 coverage, handling routine scheduling, medication refill requests, and triaging urgent cases. The system connects directly to their eVetPractice software and sends detailed call summaries to the veterinarians each morning. Emergency protocols ensure critical cases reach the on-call vet within 2 minutes.",
      results: {
        missedCalls: 84,
        bookedAppointments: 35,
        timeSaved: 12,
        satisfaction: { before: 4.3, after: 4.9 }
      },
      quote: "We never realized how many calls we were missing until Kibacall started handling them. Our client retention has improved dramatically, and we're actually getting referrals because we're always available.",
      author: "Dr. Michael Chen, Lead Veterinarian"
    },
    {
      id: 3,
      clinicName: "City Pet Care Center",
      location: "Chicago, IL",
      size: "6 veterinarians, 20 staff",
      specialty: "Multi-location Practice",
      logo: "🏢",
      challenge: "With three locations across Chicago, City Pet Care struggled with consistent phone coverage and appointment coordination. Different locations had varying wait times, and clients were frustrated when they couldn't get same-day appointments at their preferred location.",
      solution: "Kibacall manages calls for all three locations simultaneously, intelligently routing appointments based on availability, pet type, and client preferences. The system integrates with Hippo Manager to provide real-time scheduling across all locations and automatically sends appointment reminders with location-specific instructions.",
      results: {
        missedCalls: 71,
        bookedAppointments: 28,
        timeSaved: 25,
        satisfaction: { before: 3.9, after: 4.6 }
      },
      quote: "Managing calls across three locations was a nightmare. Kibacall solved our coordination issues and increased our booking efficiency across the board. It's like having a world-class receptionist at every location.",
      author: "Jennifer Walsh, Practice Manager"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 via-background to-accent/5 py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="font-heading text-4xl lg:text-5xl font-bold text-foreground mb-6">
              See How Veterinary Clinics Thrive With Kibacall
            </h1>
            <p className="font-body text-xl text-muted-foreground mb-8 leading-relaxed">
              Proven results in reducing missed calls, increasing bookings, and improving client satisfaction.
            </p>
            <Button 
              variant="cta" 
              size="lg" 
              onClick={handleBookConsultation}
              className="text-lg px-8 py-6"
            >
              Book a Consultation
            </Button>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Real Results From Real Veterinary Clinics
            </h2>
            <p className="font-body text-lg text-muted-foreground">
              Discover how Kibacall has transformed operations for practices of all sizes
            </p>
          </div>

          <div className="space-y-16">
            {caseStudies.map((study, index) => (
              <Card key={study.id} className={`overflow-hidden ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''} lg:flex lg:items-center`}>
                <div className="lg:w-1/2 p-8 lg:p-12">
                  <div className="flex items-center mb-6">
                    <div className="text-4xl mr-4">{study.logo}</div>
                    <div>
                      <h3 className="font-heading text-2xl font-bold text-foreground">{study.clinicName}</h3>
                      <p className="font-body text-muted-foreground">{study.location} • {study.size}</p>
                      <p className="font-body text-sm text-primary font-semibold">{study.specialty}</p>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h4 className="font-heading font-semibold text-foreground mb-2">The Challenge</h4>
                      <p className="font-body text-muted-foreground leading-relaxed">{study.challenge}</p>
                    </div>

                    <div>
                      <h4 className="font-heading font-semibold text-foreground mb-2">The Solution</h4>
                      <p className="font-body text-muted-foreground leading-relaxed">{study.solution}</p>
                    </div>

                    <div className="bg-gradient-to-r from-primary/5 to-accent/5 p-6 rounded-lg">
                      <blockquote className="font-body text-foreground italic mb-4">
                        "{study.quote}"
                      </blockquote>
                      <cite className="font-body text-sm text-muted-foreground font-semibold">
                        — {study.author}
                      </cite>
                    </div>
                  </div>
                </div>

                <div className="lg:w-1/2 bg-secondary/30 p-8 lg:p-12">
                  <h4 className="font-heading text-xl font-bold text-foreground mb-6 text-center">Key Results</h4>
                  
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center p-4 bg-background rounded-lg shadow-sm">
                      <div className="flex items-center justify-center mb-2">
                        <Phone className="w-6 h-6 text-primary mr-2" />
                      </div>
                      <div className="text-3xl font-bold text-primary mb-1">{study.results.missedCalls}%</div>
                      <div className="text-sm text-muted-foreground">Fewer Missed Calls</div>
                    </div>

                    <div className="text-center p-4 bg-background rounded-lg shadow-sm">
                      <div className="flex items-center justify-center mb-2">
                        <Calendar className="w-6 h-6 text-primary mr-2" />
                      </div>
                      <div className="text-3xl font-bold text-primary mb-1">+{study.results.bookedAppointments}%</div>
                      <div className="text-sm text-muted-foreground">More Appointments</div>
                    </div>

                    <div className="text-center p-4 bg-background rounded-lg shadow-sm">
                      <div className="flex items-center justify-center mb-2">
                        <Clock className="w-6 h-6 text-primary mr-2" />
                      </div>
                      <div className="text-3xl font-bold text-primary mb-1">{study.results.timeSaved}h</div>
                      <div className="text-sm text-muted-foreground">Saved Per Week</div>
                    </div>

                    <div className="text-center p-4 bg-background rounded-lg shadow-sm">
                      <div className="flex items-center justify-center mb-2">
                        <Star className="w-6 h-6 text-primary mr-2" />
                      </div>
                      <div className="text-lg font-bold text-primary mb-1">
                        {study.results.satisfaction.before}⭐ → {study.results.satisfaction.after}⭐
                      </div>
                      <div className="text-sm text-muted-foreground">Client Satisfaction</div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="bg-gradient-to-r from-primary to-primary/80 py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Clinic?
            </h2>
            <p className="font-body text-xl text-white/90 mb-8 leading-relaxed">
              Join leading veterinary clinics already saving hours and boosting client satisfaction.
            </p>
            <Button 
              variant="cta" 
              size="lg" 
              onClick={handleBookConsultation}
              className="text-lg px-8 py-6 bg-accent hover:bg-accent/90"
            >
              Book a Consultation
            </Button>
            <div className="mt-6 text-white/80 text-sm">
              ✓ 15-minute consultation &nbsp;&nbsp; ✓ No obligation &nbsp;&nbsp; ✓ Custom solution demo
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CaseStudies;