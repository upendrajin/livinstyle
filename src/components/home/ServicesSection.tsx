import { Link } from "react-router-dom";
import { Star, ArrowRight } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import serviceStyling from "@/assets/service-styling.jpg";
import serviceColoring from "@/assets/service-coloring.jpg";
import serviceHaircut from "@/assets/service-haircut.jpg";
import serviceSpa from "@/assets/service-spa.jpg";

const services = [
  { img: serviceStyling, title: "Perfect Hair Styling", rating: 4.8, reviews: 120, price: "$50" },
  { img: serviceColoring, title: "Hair Coloring", rating: 4.9, reviews: 95, price: "$75" },
  { img: serviceHaircut, title: "Professional Haircuts", rating: 4.7, reviews: 200, price: "$35" },
  { img: serviceSpa, title: "Spa & Treatment", rating: 4.9, reviews: 88, price: "$90" },
];

export default function ServicesSection() {
  const { ref, visible } = useScrollReveal();

  return (
    <section className="py-20 md:py-28 bg-black relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/3 rounded-full blur-3xl liquid-shape" />

      <div ref={ref} className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className={`text-center mb-14 md:mb-18 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="text-primary font-medium text-xs tracking-[0.2em] uppercase mb-3">Our Services</p>
          <h2 className="font-display text-white text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 md:mb-4">
            Get full Range of Our{" "}
            <span className="italic text-primary">Services</span>
          </h2>
          <p className="text-muted-foreground text-sm max-w-lg mx-auto">
            From classic cuts to bold color transformations, our expert team delivers results that exceed expectations.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {services.map((s, i) => (
            <div
              key={i}
              className={`group relative rounded-3xl overflow-hidden glass-liquid border-transparent transition-all duration-500 hover:-translate-y-2 hover:shadow-xl ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: visible ? `${200 + i * 100}ms` : "0ms" }}
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={s.img}
                  alt={s.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              {/* Info overlay - always visible */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-foreground/90 via-foreground/50 to-transparent p-5 md:p-6 flex flex-col justify-end min-h-[45%]">
                <h3 className="font-display text-base md:text-lg font-semibold text-card mb-2">{s.title}</h3>
                <div className="flex items-center gap-1.5 mb-3">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} className={`h-3.5 w-3.5 ${j < Math.floor(s.rating) ? "text-primary fill-primary" : "text-card/30"}`} />
                  ))}
                  <span className="text-xs text-card/60 ml-1">{s.rating}</span>
                  <span className="text-xs text-card/40">({s.reviews})</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-primary font-bold text-lg">{s.price}</span>
                  <Link to="/services" className="flex items-center gap-1 text-primary text-xs font-medium group-hover:gap-2 transition-all duration-300">
                    Details <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 md:mt-14">
          <Link
            to="/services"
            className="inline-flex items-center px-8 py-3.5 rounded-full bg-primary text-card text-sm font-medium hover:bg-primary/90 transition-all duration-300 shadow-liquid"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
}
