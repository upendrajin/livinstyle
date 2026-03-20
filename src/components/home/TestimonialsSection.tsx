// import { useState, useCallback, useEffect } from "react";
// import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
// import useEmblaCarousel from "embla-carousel-react";
// import Autoplay from "embla-carousel-autoplay";
// import { useScrollReveal } from "@/hooks/useScrollReveal";
// import portfolio1 from "@/assets/portfolio-1.jpg";
// import serviceStyling from "@/assets/service-styling.jpg";
// import serviceColoring from "@/assets/service-coloring.jpg";

// const testimonials = [
//   { name: "Sarah Miles", location: "New York, USA", rating: 5, text: "Absolutely love my new look! The team is incredibly talented and the salon atmosphere is so relaxing. Best experience I've ever had.", img: portfolio1 },
//   { name: "Albert Flores", location: "California, USA", rating: 5, text: "Professional service from start to finish. My stylist understood exactly what I wanted and delivered beyond my expectations.", img: serviceStyling },
//   { name: "Ralph Edwards", location: "California, USA", rating: 5, text: "The attention to detail is remarkable. From the warm welcome to the perfect color match, everything was flawless.", img: serviceColoring },
//   { name: "Jessica Wang", location: "Texas, USA", rating: 5, text: "I've been to many salons but this one tops them all. The ambiance, the skill, the care — everything is top notch.", img: portfolio1 },
//   { name: "David Chen", location: "Florida, USA", rating: 5, text: "The best haircut I've ever received. My stylist took the time to understand my style and delivered a look that perfectly suits me.", img: serviceStyling },
// ];

// export default function TestimonialsSection() {
//   const [emblaRef, emblaApi] = useEmblaCarousel(
//     { align: "start", loop: true, slidesToScroll: 1 },
//     [Autoplay({ delay: 4000, stopOnInteraction: false, stopOnMouseEnter: true })]
//   );
//   const [selectedIndex, setSelectedIndex] = useState(0);
//   const { ref, visible } = useScrollReveal();

//   const onSelect = useCallback(() => {
//     if (!emblaApi) return;
//     setSelectedIndex(emblaApi.selectedScrollSnap());
//   }, [emblaApi]);

//   useEffect(() => {
//     if (!emblaApi) return;
//     onSelect();
//     emblaApi.on("select", onSelect);
//     emblaApi.on("reInit", onSelect);
//     return () => { emblaApi.off("select", onSelect); };
//   }, [emblaApi, onSelect]);

//   const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
//   const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

//   return (
//     <section className="py-20 md:py-28 bg-black text-charcoal-foreground relative overflow-hidden">
//       <div className="absolute top-0 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl liquid-shape" />
//       <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/3 rounded-full blur-3xl liquid-shape" style={{ animationDelay: "-3s" }} />

//       <div ref={ref} className="container mx-auto px-4 lg:px-8 relative z-10">
//         <div className={`flex flex-col md:flex-row md:items-end md:justify-between mb-14 md:mb-18 gap-4 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
//           <div>
//             <p className="text-primary font-medium text-xs tracking-[0.2em] uppercase mb-3">Testimonials</p>
//             <h2 className="font-display text-3xl md:text-4xl font-bold mb-3">
//               Sweet Words From{" "}
//               <span className="italic text-primary">Clients</span>
//             </h2>
//             <p className="text-charcoal-foreground/50 text-sm max-w-lg">
//               Hear what our clients have to say about their experience at Enrich Salon.
//             </p>
//           </div>
//           <div className="flex gap-3">
//             <button onClick={scrollPrev} className="w-11 h-11 rounded-full glass-liquid-dark flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-300">
//               <ChevronLeft className="h-5 w-5" />
//             </button>
//             <button onClick={scrollNext} className="w-11 h-11 rounded-full glass-liquid-dark flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-300">
//               <ChevronRight className="h-5 w-5" />
//             </button>
//           </div>
//         </div>

//         <div className="overflow-hidden" ref={emblaRef}>
//            <div className="flex gap-6 py-2">
//             {testimonials.map((t, i) => (
//               <div key={i} className="min-w-0 shrink-0 grow-0 basis-full sm:basis-[calc(50%-12px)] lg:basis-[calc(33.33%-16px)]">
//                 <div className="glass-liquid-dark rounded-2xl md:rounded-3xl p-6 md:p-8 flex flex-col h-full hover:border-primary/30 transition-all duration-500 hover:-translate-y-1">
//                   <Quote className="h-8 w-8 text-primary/30 mb-4" />
//                   <div className="flex gap-0.5 mb-4">
//                     {Array.from({ length: t.rating }).map((_, j) => (
//                       <Star key={j} className="h-4 w-4 text-primary fill-primary" />
//                     ))}
//                   </div>
//                   <p className="text-sm text-charcoal-foreground/70 leading-relaxed flex-1">"{t.text}"</p>
//                   <div className="flex items-center gap-3 mt-6 pt-5 border-t border-charcoal-foreground/10">
//                     <img src={t.img} alt={t.name} className="w-12 h-12 rounded-full object-cover ring-2 ring-primary/20" />
//                     <div>
//                       <p className="text-sm font-semibold">{t.name}</p>
//                       <p className="text-xs text-charcoal-foreground/40">{t.location}</p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         <div className="flex justify-center gap-2 mt-8">
//           {testimonials.map((_, i) => (
//             <button
//               key={i}
//               onClick={() => emblaApi?.scrollTo(i)}
//               className={`h-2 rounded-full transition-all duration-300 ${
//                 selectedIndex === i ? "w-8 bg-primary" : "w-2 bg-charcoal-foreground/20 hover:bg-charcoal-foreground/40"
//               }`}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

import { useState, useCallback, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import portfolio1 from "@/assets/portfolio-1.jpg";
import serviceStyling from "@/assets/service-styling.jpg";
import serviceColoring from "@/assets/service-coloring.jpg";

const testimonials = [
  { name: "Sarah Miles", location: "New York, USA", rating: 5, text: "Absolutely love my new look! The team is incredibly talented and the salon atmosphere is so relaxing. Best experience I've ever had.", img: portfolio1 },
  { name: "Albert Flores", location: "California, USA", rating: 5, text: "Professional service from start to finish. My stylist understood exactly what I wanted and delivered beyond my expectations.", img: serviceStyling },
  { name: "Ralph Edwards", location: "California, USA", rating: 5, text: "The attention to detail is remarkable. From the warm welcome to the perfect color match, everything was flawless.", img: serviceColoring },
  { name: "Jessica Wang", location: "Texas, USA", rating: 5, text: "I've been to many salons but this one tops them all. The ambiance, the skill, the care — everything is top notch.", img: portfolio1 },
  { name: "David Chen", location: "Florida, USA", rating: 5, text: "The best haircut I've ever received. My stylist took the time to understand my style and delivered a look that perfectly suits me.", img: serviceStyling },
];

export default function TestimonialsSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { align: "start", loop: true, slidesToScroll: 1, containScroll: "trimSnaps" }, // ✅ FIX
    [Autoplay({ delay: 4000, stopOnInteraction: false, stopOnMouseEnter: true })]
  );

  const [selectedIndex, setSelectedIndex] = useState(0);
  const { ref, visible } = useScrollReveal();

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <section className="py-20 md:py-28 bg-black text-charcoal-foreground relative overflow-hidden">
      <div className="absolute top-0 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl liquid-shape" />
      <div
        className="absolute bottom-0 right-0 w-96 h-96 bg-primary/3 rounded-full blur-3xl liquid-shape"
        style={{ animationDelay: "-3s" }}
      />

      <div ref={ref} className="container mx-auto px-4 lg:px-8 relative z-10">
        <div
          className={`flex flex-col md:flex-row md:items-end md:justify-between mb-14 md:mb-18 gap-4 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div>
            <p className="text-primary font-medium text-xs tracking-[0.2em] uppercase mb-3">
              Testimonials
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-3">
              Sweet Words From{" "}
              <span className="italic text-primary">Clients</span>
            </h2>
            <p className="text-charcoal-foreground/50 text-sm max-w-lg">
              Hear what our clients have to say about their experience at Enrich Salon.
            </p>
          </div>

          <div className="flex gap-3">
            <button
              onClick={scrollPrev}
              className="w-11 h-11 rounded-full glass-liquid-dark flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-300"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={scrollNext}
              className="w-11 h-11 rounded-full glass-liquid-dark flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-300"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* ✅ FIXED CAROUSEL */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex -ml-5 md:-ml-6 py-3">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="pl-5 md:pl-6 min-w-0 shrink-0 grow-0 basis-full sm:basis-[calc(50%-12px)] lg:basis-[calc(33.333%-16px)]"
              >
                <div className="glass-liquid-dark rounded-2xl md:rounded-3xl p-6 md:p-8 flex flex-col h-full hover:border-primary/30 transition-all duration-500 hover:-translate-y-1">
                  <Quote className="h-8 w-8 text-primary/30 mb-4" />

                  <div className="flex gap-0.5 mb-4">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <Star key={j} className="h-4 w-4 text-primary fill-primary" />
                    ))}
                  </div>

                  <p className="text-sm text-charcoal-foreground/70 leading-relaxed flex-1">
                    "{t.text}"
                  </p>

                  <div className="flex items-center gap-3 mt-6 pt-5 border-t border-charcoal-foreground/10">
                    <img
                      src={t.img}
                      alt={t.name}
                      className="w-12 h-12 rounded-full object-cover ring-2 ring-primary/20"
                    />
                    <div>
                      <p className="text-sm font-semibold">{t.name}</p>
                      <p className="text-xs text-charcoal-foreground/40">
                        {t.location}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => emblaApi?.scrollTo(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                selectedIndex === i
                  ? "w-8 bg-primary"
                  : "w-2 bg-charcoal-foreground/20 hover:bg-charcoal-foreground/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}