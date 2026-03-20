import { Link } from "react-router-dom";
import { Clock, Mail, Phone, MapPin } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import visitImg from "@/assets/visit-salon.jpg";

const hours = [
  { day: "Monday – Friday", time: "9:00 AM – 9:00 PM" },
  { day: "Saturday", time: "10:00 AM – 8:00 PM" },
  { day: "Sunday", time: "Closed" },
];

export default function VisitSection() {
  const { ref, visible } = useScrollReveal();

  return (
    <section className="py-20 md:py-28 bg-secondary/40 overflow-hidden relative">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl liquid-shape" />

      <div ref={ref} className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className={`text-center mb-14 md:mb-18 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="text-primary font-medium text-xs tracking-[0.2em] uppercase mb-3">Visit Us</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Plan To Visit?{" "}
            <span className="italic text-primary">Book Now!</span>
          </h2>
          <p className="text-muted-foreground text-sm max-w-lg mx-auto">
            We'd love to welcome you. Check our hours and get in touch to schedule your appointment.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-stretch">
          {/* Info card */}
          <div className="glass-liquid-dark-2 rounded-2xl md:rounded-3xl p-6 md:p-10 flex flex-col">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-11 h-11 rounded-2xl bg-primary/10 flex items-center justify-center">
                <Clock className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold text-primary">Working Hours</h3>
            </div>
            <div className="space-y-3 text-sm mb-8">
              {hours.map(({ day, time }) => (
                <div key={day} className="flex justify-between items-center py-2.5 border-b border-charcoal-foreground/8 last:border-0">
                  <span className="text-charcoal-foreground/80">{day}</span>
                  <span className={`font-medium ${time === "Closed" ? "text-destructive/70" : "text-charcoal-foreground/60"}`}>{time}</span>
                </div>
              ))}
            </div>

            <div className="space-y-4 text-sm mb-8 flex-1">
              {[
                { icon: Mail, text: "info@enrichsalon.com" },
                { icon: Phone, text: "+1 (123) 456-7890" },
                { icon: MapPin, text: "5th Avenue, Brooklyn, New York, USA" },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <Icon className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-charcoal-foreground/70">{text}</span>
                </div>
              ))}
            </div>

            <Link
              to="/booking"
              className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-3.5 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-all duration-300 shadow-lg shadow-primary/20"
            >
              Book Appointment
            </Link>
          </div>

          {/* Image */}
          <div className="rounded-2xl md:rounded-3xl overflow-hidden relative group shadow-liquid">
            <img src={visitImg} alt="Salon interior" className="w-full h-full min-h-[320px] lg:min-h-0 object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
