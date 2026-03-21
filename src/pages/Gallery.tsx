import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";
import { X } from "lucide-react";
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";
import serviceStyling from "@/assets/service-styling.jpg";
import serviceColoring from "@/assets/service-coloring.jpg";
import serviceHaircut from "@/assets/service-haircut.jpg";
import serviceSpa from "@/assets/service-spa.jpg";

const filters = ["All", "Styling", "Coloring", "Spa"];
const images = [
  { src: portfolio1, label: "Blow Dry", cat: "Styling" },
  { src: portfolio2, label: "Balayage", cat: "Coloring" },
  { src: portfolio3, label: "Updo", cat: "Styling" },
  { src: serviceStyling, label: "Bridal", cat: "Styling" },
  { src: serviceColoring, label: "Highlights", cat: "Coloring" },
  { src: serviceHaircut, label: "Layered Cut", cat: "Styling" },
  { src: serviceSpa, label: "Spa Treatment", cat: "Spa" },
  { src: portfolio1, label: "Waves", cat: "Styling" },
];

export default function Gallery() {
  const [active, setActive] = useState("All");
  const [lightbox, setLightbox] = useState<number | null>(null);
  const filtered = active === "All" ? images : images.filter((img) => img.cat === active);

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-32 pb-24 bg-black">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">Gallery</h1>
            <p className="text-muted-foreground text-sm max-w-lg mx-auto">Browse our latest work.</p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  active === f ? "bg-primary text-primary-foreground" : "bg-secondary/10 text-white hover:bg-secondary/40"
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
            {filtered.map((img, i) => (
              <div
                key={i}
                className="break-inside-avoid rounded-xl overflow-hidden cursor-pointer group"
                onClick={() => setLightbox(i)}
              >
                <img
                  src={img.src}
                  alt={img.label}
                  className="w-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div className="fixed inset-0 z-50 bg-foreground/90 flex items-center justify-center p-4" onClick={() => setLightbox(null)}>
          <button className="absolute top-6 right-6 text-card" onClick={() => setLightbox(null)}>
            <X className="h-8 w-8" />
          </button>
          <img src={filtered[lightbox].src} alt="" className="max-h-[85vh] max-w-full rounded-xl object-contain" />
        </div>
      )}

      <Footer />
    </div>
  );
}
