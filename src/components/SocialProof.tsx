import { Star } from "lucide-react";

const SocialProof = () => {
  const testimonials = [
    {
      quote: "Kibacall has completely transformed our clinic operations. We never miss calls anymore, and our staff can focus on patient care instead of constantly answering phones.",
      author: "Dr. Sarah Johnson",
      clinic: "Paws & Claws Veterinary Clinic",
      rating: 5,
    },
    {
      quote: "The AI is incredibly natural and professional. Our clients don't even realize they're speaking with an AI assistant. Appointment booking has never been easier.",
      author: "Dr. Michael Chen",
      clinic: "Downtown Animal Hospital",
      rating: 5,
    },
    {
      quote: "We've reduced no-shows by 40% thanks to Kibacall's automated reminders. The ROI has been incredible, and our team is much less stressed.",
      author: "Dr. Emily Rodriguez",
      clinic: "Caring Companions Vet",
      rating: 5,
    },
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: rating }, (_, i) => (
      <Star key={i} className="w-5 h-5 fill-brand-yellow text-brand-yellow" />
    ));
  };

  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Trusted by Busy Veterinary Clinics
          </h2>
          <p className="font-body text-lg text-muted-foreground">
            Join hundreds of veterinary professionals who have transformed their practice with Kibacall
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-background p-6 rounded-2xl border border-border shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex mb-4">
                {renderStars(testimonial.rating)}
              </div>
              <blockquote className="font-body text-foreground mb-6 leading-relaxed">
                "{testimonial.quote}"
              </blockquote>
              <div className="border-t border-border pt-4">
                <p className="font-heading font-semibold text-foreground">
                  {testimonial.author}
                </p>
                <p className="font-body text-muted-foreground text-sm">
                  {testimonial.clinic}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Clinic logos */}
        <div className="mt-16 pt-16 border-t border-border">
          <p className="text-center font-body text-muted-foreground mb-8">
            Trusted by veterinary clinics nationwide
          </p>
          <div className="flex flex-wrap justify-center items-center gap-6 opacity-60">
            <div className="bg-muted rounded-lg px-6 py-3 font-heading font-semibold text-muted-foreground">
              Paw Health Center
            </div>
            <div className="bg-muted rounded-lg px-6 py-3 font-heading font-semibold text-muted-foreground">
              Happy Tails Vet
            </div>
            <div className="bg-muted rounded-lg px-6 py-3 font-heading font-semibold text-muted-foreground">
              City Animal Clinic
            </div>
            <div className="bg-muted rounded-lg px-6 py-3 font-heading font-semibold text-muted-foreground">
              Sunny Paws Veterinary
            </div>
            <div className="bg-muted rounded-lg px-6 py-3 font-heading font-semibold text-muted-foreground">
              Caring Paws Hospital
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;