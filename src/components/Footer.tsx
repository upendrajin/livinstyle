import { Link } from "react-router-dom";
import { Scissors, Instagram, Facebook, Twitter, Youtube, Mail, Phone, MapPin, ArrowRight } from "lucide-react";

const quickLinks = [
  { label: "About Us", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Portfolio", path: "/gallery" },
  { label: "Blog", path: "/blog" },
  { label: "Contact", path: "/contact" },
];

const services = ["Hair Styling", "Hair Coloring", "Professional Cuts", "Spa Treatment", "Bridal Packages"];

export default function Footer() {
  return (
    <footer className="bg-black text-charcoal-foreground relative overflow-hidden">
      {/* Liquid blob */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-primary/3 rounded-full blur-3xl liquid-shape" />

      {/* Newsletter strip */}
      <div className="relative z-10 border-b border-charcoal-foreground/8">
        <div className="container mx-auto px-4 lg:px-8 py-10 md:py-14">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-display text-xl md:text-2xl font-bold mb-1">Stay in the Loop</h3>
              <p className="text-charcoal-foreground/50 text-sm">Subscribe for exclusive offers and beauty tips.</p>
            </div>
            <div className="flex w-full md:w-auto gap-3">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 md:w-72 px-5 py-3 rounded-full bg-charcoal-foreground/5 border border-charcoal-foreground/10 text-sm text-charcoal-foreground placeholder:text-charcoal-foreground/30 focus:outline-none focus:border-primary/50 transition"
              />
              <button className="px-6 py-3 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-all duration-300 shadow-lg shadow-primary/20 shrink-0">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 py-14 md:py-18 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-9 h-9 rounded-xl bg-primary/20 flex items-center justify-center">
                <Scissors className="h-5 w-5 text-primary" />
              </div>
              <span className="font-display text-lg font-bold">Liv in <span className="text-primary">style</span></span>
            </div>
            <p className="text-sm text-charcoal-foreground/50 leading-relaxed mb-6">
              Where beauty meets luxury. Experience premium hair care with our expert artists in an environment designed for your comfort.
            </p>
            <div className="flex gap-3">
              {[Instagram, Facebook, Twitter, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-xl glass-liquid-dark flex items-center justify-center hover:bg-primary hover:scale-110 transition-all duration-300"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-base font-semibold mb-5 text-charcoal-foreground">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              {quickLinks.map((l) => (
                <li key={l.label}>
                  <Link to={l.path} className="text-charcoal-foreground/50 hover:text-primary transition-colors duration-300 flex items-center gap-2 group">
                    <ArrowRight className="h-3 w-3 text-primary/0 group-hover:text-primary transition-colors duration-300" />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display text-base font-semibold mb-5 text-charcoal-foreground">Services</h4>
            <ul className="space-y-3 text-sm">
              {services.map((s) => (
                <li key={s}>
                  <Link to="/services" className="text-charcoal-foreground/50 hover:text-primary transition-colors duration-300 flex items-center gap-2 group">
                    <ArrowRight className="h-3 w-3 text-primary/0 group-hover:text-primary transition-colors duration-300" />
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-base font-semibold mb-5 text-charcoal-foreground">Get in Touch</h4>
            <div className="space-y-4 text-sm">
              {[
                { icon: MapPin, text: "6645 Broadway NY, New York 10001" },
                { icon: Phone, text: "+1 (123) 456-7890" },
                { icon: Mail, text: "info@enrichsalon.com" },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                    <Icon className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-charcoal-foreground/50 leading-relaxed">{text}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 text-sm text-charcoal-foreground/40 space-y-1">
              <p><span className="text-charcoal-foreground/60">Mon–Fri:</span> 9am – 9pm</p>
              <p><span className="text-charcoal-foreground/60">Saturday:</span> 10am – 8pm</p>
              <p><span className="text-charcoal-foreground/60">Sunday:</span> Closed</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-charcoal-foreground/8 relative z-10">
        <div className="container mx-auto px-4 lg:px-8 py-5 flex flex-col md:flex-row items-center justify-between text-xs text-charcoal-foreground/35 gap-3">
          <p>© 2026 Enrich Salon. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Use</a>
            <a href="#" className="hover:text-primary transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
