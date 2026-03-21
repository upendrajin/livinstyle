import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-32 pb-24 bg-black">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">Contact Us</h1>
            <p className="text-muted-foreground text-sm max-w-lg mx-auto">We'd love to hear from you.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <div className="bg-card/10 rounded-xl p-8 shadow-elegant">
              <h2 className="font-display text-xl font-semibold text-white mb-6">Send us a message</h2>
              <div className="space-y-4">
                <input type="text" placeholder="Your Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full px-5 py-3.5 rounded-lg bg-secondary/30 text-white placeholder:text-muted/50 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" />
                <input type="email" placeholder="Email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full px-5 py-3.5 rounded-lg bg-secondary/30 text-white placeholder:text-muted/50 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" />
                <input type="tel" placeholder="Phone" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="w-full px-5 py-3.5 rounded-lg bg-secondary/30 text-white placeholder:text-muted/50 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" />
                <textarea placeholder="Your Message" rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="w-full px-5 py-3.5 rounded-lg bg-secondary/30 text-white placeholder:text-muted/50 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none" />
                <button className="w-full py-3.5 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-all duration-300">Send Message</button>
              </div>
            </div>

            {/* Info */}
            <div className="space-y-6">
              {[
                { icon: MapPin, title: "Address", text: "6645 Broadway NY, New York 10001, USA" },
                { icon: Phone, title: "Phone", text: "+1 (123) 456-789" },
                { icon: Mail, title: "Email", text: "info@enrichsalon.com" },
                { icon: Clock, title: "Working Hours", text: "Mon–Fri: 9AM–9PM\nSat: 10AM–8PM\nSun: Closed" },
              ].map((item, i) => (
                <div key={i} className="bg-card/10 rounded-xl p-6 shadow-card flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display text-base font-semibold text-white">{item.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1 whitespace-pre-line">{item.text}</p>
                  </div>
                </div>
              ))}

              {/* Map placeholder */}

            </div>
          </div>

          <div className="bg-secondary rounded-xl h-90 mt-12  overflow-hidden">
            <div className="h-full">
              <iframe
              src="https://maps.google.com/maps?q=London&t=&z=13&ie=UTF8&iwloc=&output=embed"
              className="w-full h-64"
              loading="lazy"
            ></iframe>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
