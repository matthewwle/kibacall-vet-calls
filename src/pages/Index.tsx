import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import SocialProof from "@/components/SocialProof";
import HowItWorks from "@/components/HowItWorks";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <div id="features">
        <Features />
      </div>
      <div id="testimonials">
        <SocialProof />
      </div>
      <div id="how-it-works">
        <HowItWorks />
      </div>
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Index;
