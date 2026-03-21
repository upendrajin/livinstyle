import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";
import { Star, Clock, ArrowRight } from "lucide-react";
import serviceStyling from "@/assets/service-styling.jpg";
import serviceColoring from "@/assets/service-coloring.jpg";
import serviceHaircut from "@/assets/service-haircut.jpg";
import serviceSpa from "@/assets/service-spa.jpg";

const categories = ["All", "Hair Styling", "Hair Cuts", "Coloring", "Spa"];
const services = [
  { img: serviceStyling, title: "Bridal Updo", price: "$120", duration: "90 min", category: "Hair Styling" },
  { img: serviceHaircut, title: "Classic Cut", price: "$45", duration: "45 min", category: "Hair Cuts" },
  { img: serviceColoring, title: "Balayage", price: "$180", duration: "120 min", category: "Coloring" },
  { img: serviceSpa, title: "Deep Conditioning", price: "$65", duration: "60 min", category: "Spa" },
  { img: serviceStyling, title: "Blow Dry & Style", price: "$55", duration: "45 min", category: "Hair Styling" },
  { img: serviceHaircut, title: "Layered Cut", price: "$60", duration: "60 min", category: "Hair Cuts" },
  { img: serviceColoring, title: "Full Color", price: "$150", duration: "90 min", category: "Coloring" },
  { img: serviceSpa, title: "Scalp Treatment", price: "$75", duration: "60 min", category: "Spa" },
];

export default function Services() {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? services : services.filter((s) => s.category === active);

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <div className="pt-32 pb-24 bg-black">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="font-display text-white text-4xl md:text-5xl font-bold text-foreground mb-4">Our Services</h1>
            <p className="text-muted-foreground text-sm max-w-lg mx-auto">
              Explore our full range of premium hair and beauty services.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  active === c ? "bg-primary text-primary-foreground" : "bg-secondary/10 text-white hover:bg-secondary/40"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filtered.map((s, i) => (
              <div key={i} className="bg-card/10 rounded-xl overflow-hidden shadow-card group hover:shadow-elegant transition-all duration-400">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={s.img} alt={s.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-5">
                  <h3 className="font-display text-white/90 text-lg font-semibold text-foreground">{s.title}</h3>
                  <div className="flex items-center gap-3 mt-2 text-sm text-muted-foreground">
                    <span className="text-primary font-semibold">{s.price}</span>
                    <span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5" />{s.duration}</span>
                  </div>
                  {/* <button className="mt-4 w-full py-2.5 rounded-full bg-foreground text-card text-sm font-medium hover:bg-foreground/90 transition-all duration-300">
                    Book Now
                  </button> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
