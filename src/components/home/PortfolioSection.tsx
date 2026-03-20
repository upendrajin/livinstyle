import { Link } from "react-router-dom";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";
import serviceStyling from "@/assets/service-styling.jpg";
import serviceColoring from "@/assets/service-coloring.jpg";
import serviceHaircut from "@/assets/service-haircut.jpg";

const images = [
  { img: portfolio1, label: "Blow Dry", cat: "Styling" },
  { img: portfolio2, label: "Hair Coloring", cat: "Coloring" },
  { img: portfolio3, label: "Updo Styling", cat: "Styling" },
  { img: serviceStyling, label: "Bridal Hair", cat: "Styling" },
  { img: serviceColoring, label: "Highlights", cat: "Coloring" },
  { img: serviceHaircut, label: "Layered Cut", cat: "Cut" },
];

export default function PortfolioSection() {
  const { ref, visible } = useScrollReveal();

  return (
    <section className="py-20 md:py-28 bg-secondary/40 relative overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/3 rounded-full blur-3xl liquid-shape" />

      <div ref={ref} className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className={`text-center mb-14 md:mb-18 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="text-primary font-medium text-xs tracking-[0.2em] uppercase mb-3">Our Work</p>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 md:mb-4">
            Latest Portfolio{" "}
            <span className="italic text-primary">Gallery</span>
          </h2>
          <p className="text-muted-foreground text-sm max-w-lg mx-auto">
            Browse through our latest work and get inspired for your next transformation.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 auto-rows-[200px] md:auto-rows-[260px]">
          {images.map((item, i) => (
            <div
              key={i}
              className={`group relative rounded-3xl overflow-hidden cursor-pointer transition-all duration-700 ${i === 0 ? "row-span-2" : i === 3 ? "col-span-2 md:col-span-1" : ""
                } ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              style={{ transitionDelay: `${i * 120}ms` }}
            >

              {/* Image */}
              <img
                src={item.img}
                alt={item.label}
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-[1deg]"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-90 transition duration-500" />

              {/* Glow Border Effect */}
              <div className="absolute inset-0 rounded-3xl border border-white/10 group-hover:border-primary/40 transition duration-500" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-6 group-hover:translate-y-0 transition-all duration-500">
                <span className="text-[10px] tracking-widest uppercase text-primary font-medium">
                  {item.cat}
                </span>

                <h3 className="text-white text-lg font-semibold mt-1">
                  {item.label}
                </h3>

                {/* Animated underline */}
                <div className="w-0 h-[2px] bg-primary mt-2 group-hover:w-12 transition-all duration-500" />
              </div>

              {/* Hover Shine Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700">
                <div className="absolute -left-1/2 top-0 w-1/2 h-full bg-white/10 blur-2xl rotate-12 translate-x-0 group-hover:translate-x-[250%] transition-all duration-1000" />
              </div>

            </div>
          ))}
        </div>

         <div className="text-center mt-12 md:mt-14">
          <Link
            to="/gallery"
            className="inline-flex items-center px-8 py-3.5 rounded-full bg-foreground text-card text-sm font-medium hover:bg-foreground/90 transition-all duration-300 shadow-liquid"
          >
            View Full Portfolio
          </Link>
        </div> 
      </div>
    </section>
  );
}
