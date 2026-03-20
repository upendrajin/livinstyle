import { Scissors, Award, ShieldCheck } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const items = [
  {
    icon: Scissors,
    title: "10 Years of Experience",
    desc: "A decade of perfecting the art of hair styling, coloring, and cutting with precision.",
    accent: "from-primary/20 to-gold-light/10",
  },
  {
    icon: Award,
    title: "We're Professionals",
    desc: "Our team is trained by world-class stylists ensuring every visit is a premium experience.",
    accent: "from-primary/15 to-primary/5",
  },
  {
    icon: ShieldCheck,
    title: "Certified Hairdresser",
    desc: "All our artists hold professional certifications and stay updated with the latest trends.",
    accent: "from-gold-light/20 to-primary/10",
  },
];

export default function WhyChooseUs() {
  const { ref, visible } = useScrollReveal();

  return (
    <section className="py-20 md:py-28 bg-background relative overflow-hidden">
      {/* Liquid decorative blobs */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl liquid-shape" />
      <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-gold-light/5 rounded-full blur-3xl liquid-shape" style={{ animationDelay: "-4s" }} />

      <div ref={ref} className="container mx-auto px-4 lg:px-8 text-center relative z-10">
        <div className={`transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="text-primary font-medium text-xs tracking-[0.2em] uppercase mb-3">Why Choose Us</p>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 md:mb-4">
            Why choose our salon?
          </h2>
          <p className="text-muted-foreground text-sm max-w-lg mx-auto mb-14 md:mb-18">
            We combine artistry with precision to deliver a beauty experience that leaves you feeling confident and refreshed.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 md:gap-7">
          {items.map((item, i) => (
            <div
              key={i}
              className={`group relative flex flex-col items-center text-center p-7 md:p-10 rounded-3xl glass-liquid transition-all duration-500 hover:shadow-liquid hover:-translate-y-1 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: visible ? `${200 + i * 150}ms` : "0ms" }}
            >
              {/* Gradient background on hover */}
              <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${item.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

              <div className="relative z-10">
                <div className="w-16 h-16 md:w-18 md:h-18 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 mx-auto">
                  <item.icon className="h-7 w-7 md:h-8 md:w-8 text-primary" />
                </div>
                <h3 className="font-display text-lg md:text-xl font-semibold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
