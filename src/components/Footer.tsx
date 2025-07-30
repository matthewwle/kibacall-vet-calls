import { Phone, Mail, MapPin, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-brand-slate text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-brand-teal rounded-lg flex items-center justify-center">
                <Phone className="w-5 h-5 text-white" />
              </div>
              <span className="font-heading text-2xl font-bold">
                Kibacall
              </span>
            </div>
            <p className="font-body text-white/80 mb-6 max-w-md">
              The AI receptionist designed specifically for veterinary practices. 
              Never miss a call, never lose a client.
            </p>
            <div className="flex flex-col gap-2 text-white/80">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span className="font-body">hello@kibacall.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span className="font-body">1-800-KIBACALL</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span className="font-body">Austin, Texas</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 font-body text-white/80">
              <li><a href="#features" className="hover:text-brand-yellow transition-colors">Features</a></li>
              <li><a href="#pricing" className="hover:text-brand-yellow transition-colors">Pricing</a></li>
              <li><a href="#testimonials" className="hover:text-brand-yellow transition-colors">Testimonials</a></li>
              <li><a href="#support" className="hover:text-brand-yellow transition-colors">Support</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-heading text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 font-body text-white/80">
              <li><a href="#blog" className="hover:text-brand-yellow transition-colors">Blog</a></li>
              <li><a href="#case-studies" className="hover:text-brand-yellow transition-colors">Case Studies</a></li>
              <li><a href="#api-docs" className="hover:text-brand-yellow transition-colors">API Documentation</a></li>
              <li><a href="#help" className="hover:text-brand-yellow transition-colors">Help Center</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="font-body text-white/60 text-sm">
            © 2024 Kibacall. All rights reserved.
          </p>
          <div className="flex items-center gap-4 mt-4 md:mt-0">
            <a href="#privacy" className="font-body text-white/60 text-sm hover:text-brand-yellow transition-colors">
              Privacy Policy
            </a>
            <span className="text-white/40">•</span>
            <a href="#terms" className="font-body text-white/60 text-sm hover:text-brand-yellow transition-colors">
              Terms of Service
            </a>
            <span className="text-white/40">•</span>
            <div className="flex items-center gap-1 text-white/60 text-sm">
              <span className="font-body">Made with</span>
              <Heart className="w-3 h-3 fill-red-400 text-red-400" />
              <span className="font-body">for vets</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;