// import { useState, useCallback, useEffect } from "react";
// import { ChevronLeft, ChevronRight, Instagram, Facebook } from "lucide-react";
// import useEmblaCarousel from "embla-carousel-react";
// import Autoplay from "embla-carousel-autoplay";
// import { useScrollReveal } from "@/hooks/useScrollReveal";
// import team1 from "@/assets/team-1.jpg";
// import team2 from "@/assets/team-2.jpg";
// import team3 from "@/assets/team-3.jpg";
// import team4 from "@/assets/team-4.jpg";

// const team = [
//   { img: team1, name: "Elena Rodriguez", role: "Senior Hair Stylist" },
//   { img: team2, name: "Marcus Johnson", role: "Master Barber" },
//   { img: team3, name: "Lina Chen", role: "Color Specialist" },
//   { img: team3, name: "Lina Chen", role: "Color Specialist" },
//   { img: team4, name: "Sofia Martinez", role: "Spa Therapist" },
// ];

// export default function TeamSection() {
//   const [emblaRef, emblaApi] = useEmblaCarousel(
//     { align: "start", loop: true, slidesToScroll: 1 },
//     [Autoplay({ delay: 3500, stopOnInteraction: false, stopOnMouseEnter: true })]
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
//     return () => { emblaApi.off("select", onSelect); };
//   }, [emblaApi, onSelect]);

//   const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
//   const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

//   return (
//     <section className="py-20 md:py-28 bg-secondary/40 relative overflow-hidden">
//       <div className="absolute -top-20 right-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl liquid-shape" />

//       <div ref={ref} className="container mx-auto px-4 lg:px-8 relative z-10">
//         <div className={`flex flex-col md:flex-row md:items-end md:justify-between mb-14 md:mb-18 gap-4 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
//           <div>
//             <p className="text-primary font-medium text-xs tracking-[0.2em] uppercase mb-3">Our Team</p>
//             <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">
//               Team of Leading{" "}
//               <span className="italic text-primary">Professionals</span>
//             </h2>
//             <p className="text-muted-foreground text-sm max-w-lg">
//               Meet the talented artists behind every transformation at Enrich Salon.
//             </p>
//           </div>
//           <div className="flex gap-3">
//             <button onClick={scrollPrev} className="w-11 h-11 rounded-full glass-liquid flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300">
//               <ChevronLeft className="h-5 w-5" />
//             </button>
//             <button onClick={scrollNext} className="w-11 h-11 rounded-full glass-liquid flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300">
//               <ChevronRight className="h-5 w-5" />
//             </button>
//           </div>
//         </div>

//         <div className="overflow-hidden" ref={emblaRef}>
//           <div className="flex gap-5 md:gap-6">
//             {team.map((member, i) => (
//               <div key={i} className="min-w-0 shrink-0 grow-0 basis-[75%] sm:basis-[calc(50%-12px)] lg:basis-[calc(25%-18px)]">
//                 <div className="group text-center">
//                   <div className="relative rounded-2xl md:rounded-3xl overflow-hidden mb-5 aspect-[3/4] shadow-liquid">
//                     <img src={member.img} alt={member.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
//                     <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col items-center justify-end pb-6">
//                       <div className="flex gap-3 translate-y-4 group-hover:translate-y-0 transition-transform duration-400">
//                         <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-primary transition-colors duration-300">
//                           <Instagram className="h-4 w-4 text-foreground" />
//                         </a>
//                         <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-primary transition-colors duration-300">
//                           <Facebook className="h-4 w-4 text-foreground" />
//                         </a>
//                       </div>
//                     </div>
//                   </div>
//                   <h3 className="font-display text-base font-semibold text-foreground group-hover:text-primary transition-colors duration-300">{member.name}</h3>
//                   <p className="text-xs text-muted-foreground mt-1">{member.role}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         <div className="flex justify-center gap-2 mt-8">
//           {team.map((_, i) => (
//             <button
//               key={i}
//               onClick={() => emblaApi?.scrollTo(i)}
//               className={`h-2 rounded-full transition-all duration-300 ${
//                 selectedIndex === i ? "w-8 bg-primary" : "w-2 bg-foreground/15 hover:bg-foreground/30"
//               }`}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

import { useState, useCallback, useEffect } from "react";
import { ChevronLeft, ChevronRight, Instagram, Facebook } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import team1 from "@/assets/team-1.jpg";
import team2 from "@/assets/team-2.jpg";
import team3 from "@/assets/team-3.jpg";
import team4 from "@/assets/team-4.jpg";

const team = [
  { img: team1, name: "Elena Rodriguez", role: "Senior Hair Stylist" },
  { img: team2, name: "Marcus Johnson", role: "Master Barber" },
  { img: team3, name: "Lina Chen", role: "Color Specialist" },
  { img: team3, name: "Lina Chen", role: "Color Specialist" },
  { img: team4, name: "Sofia Martinez", role: "Spa Therapist" },
];

export default function TeamSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { align: "start", loop: true, slidesToScroll: 1 },
    [Autoplay({ delay: 3500, stopOnInteraction: false, stopOnMouseEnter: true })]
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
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <section className="py-20 md:py-28 bg-secondary/40 relative overflow-hidden">
      <div className="absolute -top-20 right-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl liquid-shape" />

      <div
        ref={ref}
        className="container mx-auto px-4 lg:px-8 relative z-10"
      >
        <div
          className={`flex flex-col md:flex-row md:items-end md:justify-between mb-14 md:mb-18 gap-4 transition-all duration-700 ${
            visible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <div>
            <p className="text-primary font-medium text-xs tracking-[0.2em] uppercase mb-3">
              Our Team
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">
              Team of Leading{" "}
              <span className="italic text-primary">Professionals</span>
            </h2>
            <p className="text-muted-foreground text-sm max-w-lg">
              Meet the talented artists behind every transformation at Enrich
              Salon.
            </p>
          </div>

          <div className="flex gap-3">
            <button
              onClick={scrollPrev}
              className="w-11 h-11 rounded-full glass-liquid flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={scrollNext}
              className="w-11 h-11 rounded-full glass-liquid flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* ✅ FIX: padding added here */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-5 md:gap-6 px-4 sm:px-6 lg:px-8">
            {team.map((member, i) => (
              <div
                key={i}
                className="min-w-0 shrink-0 grow-0 basis-[75%] sm:basis-[calc(50%-12px)] lg:basis-[calc(25%-18px)]"
              >
                <div className="group text-center">
                  <div className="relative rounded-2xl md:rounded-3xl overflow-hidden mb-5 aspect-[3/4]">
                    <img
                      src={member.img}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col items-center justify-end pb-6">
                      <div className="flex gap-3 translate-y-4 group-hover:translate-y-0 transition-transform duration-400">
                        <a
                          href="#"
                          className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-primary transition-colors duration-300"
                        >
                          <Instagram className="h-4 w-4 text-foreground" />
                        </a>
                        <a
                          href="#"
                          className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-primary transition-colors duration-300"
                        >
                          <Facebook className="h-4 w-4 text-foreground" />
                        </a>
                      </div>
                    </div>
                  </div>

                  <h3 className="font-display text-base font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className="text-xs text-muted-foreground mt-1">
                    {member.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {team.map((_, i) => (
            <button
              key={i}
              onClick={() => emblaApi?.scrollTo(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                selectedIndex === i
                  ? "w-8 bg-primary"
                  : "w-2 bg-foreground/15 hover:bg-foreground/30"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}