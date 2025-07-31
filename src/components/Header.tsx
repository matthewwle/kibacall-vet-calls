import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import kibacallLogo from "@/assets/KibacallLogo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    section?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 flex items-center justify-center">
              <img src={kibacallLogo} alt="Kibacall Logo" className="w-8 h-8" />
            </div>
            <span className="font-heading text-2xl font-bold text-foreground">
              Kibacall
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link 
              to="/"
              className="font-body text-foreground hover:text-primary transition-colors"
            >
              Home
            </Link>
            <Link 
              to="/about"
              className="font-body text-foreground hover:text-primary transition-colors"
            >
              About
            </Link>
            <Link 
              to="/case-studies"
              className="font-body text-foreground hover:text-primary transition-colors"
            >
              Case Studies
            </Link>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Button 
              variant="cta"
              onClick={() => scrollToSection('final-cta')}
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="w-6 h-6 text-foreground" />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border bg-background">
            <nav className="flex flex-col gap-4">
              <Link 
                to="/"
                className="font-body text-foreground hover:text-primary transition-colors text-left py-2"
              >
                Home
              </Link>
              <Link 
                to="/about"
                className="font-body text-foreground hover:text-primary transition-colors text-left py-2"
              >
                About
              </Link>
              <Link 
                to="/case-studies"
                className="font-body text-foreground hover:text-primary transition-colors text-left py-2"
              >
                Case Studies
              </Link>
              <Button 
                variant="cta"
                onClick={() => scrollToSection('final-cta')}
                className="mt-4"
              >
                Get Started
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;