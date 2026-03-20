// import { useState, useCallback, useEffect } from "react";
// import { Play, Heart, MessageCircle, Share2, ChevronLeft, ChevronRight } from "lucide-react";
// import useEmblaCarousel from "embla-carousel-react";
// import Autoplay from "embla-carousel-autoplay";
// import { useScrollReveal } from "@/hooks/useScrollReveal";
// import portfolio1 from "@/assets/portfolio-1.jpg";
// import portfolio2 from "@/assets/portfolio-2.jpg";
// import portfolio3 from "@/assets/portfolio-3.jpg";
// import serviceStyling from "@/assets/service-styling.jpg";
// import serviceColoring from "@/assets/service-coloring.jpg";
// import serviceHaircut from "@/assets/service-haircut.jpg";

// const reels = [
//   { img: portfolio1, title: "Summer Glow Up", likes: "12.4K", comments: "234" },
//   { img: serviceStyling, title: "Bridal Prep", likes: "8.7K", comments: "156" },
//   { img: portfolio2, title: "Color Transformation", likes: "15.2K", comments: "312" },
//   { img: serviceColoring, title: "Balayage Magic", likes: "9.1K", comments: "189" },
//   { img: portfolio3, title: "Updo Tutorial", likes: "11.8K", comments: "267" },
//   { img: serviceHaircut, title: "Fresh Cut Friday", likes: "7.3K", comments: "142" },
// ];

// export default function ReelsSection() {
//   const [emblaRef, emblaApi] = useEmblaCarousel(
//     { align: "start", loop: true, slidesToScroll: 1, dragFree: true, containScroll: "trimSnaps" },
//     [Autoplay({ delay: 3000, stopOnInteraction: false, stopOnMouseEnter: true })]
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

//   return (
//     <section className="py-20 md:py-28 bg-background relative overflow-hidden">
//       <div className="absolute -bottom-20 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl liquid-shape" />

//       <div ref={ref} className="container mx-auto px-4 lg:px-8 relative z-10">
//         <div className={`flex flex-col md:flex-row md:items-end md:justify-between mb-14 md:mb-18 gap-4 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
//           <div>
//             <p className="text-primary font-medium text-xs tracking-[0.2em] uppercase mb-3">Follow Us</p>
//             <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">
//               Our Latest{" "}
//               <span className="italic text-primary">Reels</span>
//             </h2>
//             <p className="text-muted-foreground text-sm max-w-lg">
//               Watch our latest transformations and behind-the-scenes moments.
//             </p>
//           </div>
//           <div className="flex gap-3">
//             <button onClick={() => emblaApi?.scrollPrev()} className="w-11 h-11 rounded-full glass-liquid flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300">
//               <ChevronLeft className="h-5 w-5" />
//             </button>
//             <button onClick={() => emblaApi?.scrollNext()} className="w-11 h-11 rounded-full glass-liquid flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300">
//               <ChevronRight className="h-5 w-5" />
//             </button>
//           </div>
//         </div>

//         <div className="overflow-hidden" ref={emblaRef}>
//           <div className="flex -ml-4 md:-ml-5">
//             {reels.map((reel, i) => (
//               <div key={i} className="pl-4 md:pl-5 min-w-0 shrink-0 grow-0 basis-[55%] sm:basis-[38%] md:basis-[28%] lg:basis-[20%]">
//                 <div className="group relative rounded-2xl md:rounded-3xl overflow-hidden aspect-[9/16] shadow-liquid cursor-pointer">
//                   <img src={reel.img} alt={reel.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />

//                   {/* Gradient overlay */}
//                   <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-transparent to-foreground/10" />

//                   {/* Play button */}
//                   <div className="absolute inset-0 flex items-center justify-center">
//                     <div className="w-12 h-12 rounded-full glass flex items-center justify-center opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 transition-all duration-400">
//                       <Play className="h-5 w-5 text-foreground ml-0.5" fill="currentColor" />
//                     </div>
//                   </div>

//                   {/* Side actions */}
//                   <div className="absolute right-3 bottom-20 flex flex-col gap-4 items-center opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0 transition-all duration-400">
//                     <button className="flex flex-col items-center gap-1">
//                       <Heart className="h-5 w-5 text-card" />
//                       <span className="text-[10px] text-card/70">{reel.likes}</span>
//                     </button>
//                     <button className="flex flex-col items-center gap-1">
//                       <MessageCircle className="h-5 w-5 text-card" />
//                       <span className="text-[10px] text-card/70">{reel.comments}</span>
//                     </button>
//                     <button>
//                       <Share2 className="h-5 w-5 text-card" />
//                     </button>
//                   </div>

//                   {/* Bottom info */}
//                   <div className="absolute bottom-0 left-0 right-0 p-4">
//                     <p className="font-display text-sm font-semibold text-card">{reel.title}</p>
//                     <p className="text-[10px] text-card/50 mt-1">@enrichsalon</p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

import { useState, useCallback, useEffect } from "react";
import { Play, ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useScrollReveal } from "@/hooks/useScrollReveal";

// ⚠️ Replace these with actual .mp4 videos
import video1 from "@/assets/video1.mp4";
// import video2 from "@/assets/video-2.mp4";
// import video3 from "@/assets/video-3.mp4";

const reels = [
  { video: video1, title: "Summer Glow Up" },
  { video: video1, title: "Bridal Prep" },
  { video: video1, title: "Color Transformation" },
  { video: video1, title: "Balayage Magic" },
  { video: video1, title: "Updo Tutorial" },
  { video: video1, title: "Fresh Cut Friday" },
];

export default function ReelsSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      align: "start",
      loop: true,
      slidesToScroll: 1,
      dragFree: true,
      containScroll: "trimSnaps",
    },
    [
      Autoplay({
        delay: 3000,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
      }),
    ]
  );

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);
  const { ref, visible } = useScrollReveal();

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    setScrollSnaps(emblaApi.scrollSnapList());
    onSelect();

    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <section className="py-20 md:py-28 bg-black relative overflow-hidden">
      <div className="absolute -bottom-20 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl liquid-shape" />

      <div
        ref={ref}
        className="container mx-auto px-4 lg:px-8 relative z-10"
      >
        {/* Header */}
        <div
          className={`flex flex-col md:flex-row md:items-end md:justify-between mb-14 md:mb-18 gap-4 transition-all duration-700 ${visible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-8"
            }`}
        >
          <div>
            <p className="text-primary font-medium text-xs tracking-[0.2em] uppercase mb-3">
              Follow Us
            </p>
            <h2 className="font-display text-white text-3xl md:text-4xl font-bold text-foreground mb-3">
              Our Latest <span className="italic text-primary">Reels</span>
            </h2>
            <p className="text-muted-foreground text-sm max-w-lg">
              Watch our latest transformations and behind-the-scenes moments.
            </p>
          </div>

          <div className="flex gap-3">
            <button
              onClick={() => emblaApi?.scrollPrev()}
              className="w-11 h-11 rounded-full glass-liquid-dark flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-300"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={() => emblaApi?.scrollNext()}
              className="w-11 h-11 rounded-full glass-liquid-dark flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-300"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex -ml-2 md:-ml-5">
            {reels.map((reel, i) => (
              <div
                key={i}
                className="pl-4 md:pl-5 min-w-0 shrink-0 grow-0 basis-[55%] sm:basis-[48%] md:basis-[28%] lg:basis-[26%]"
              >
                <div className="group relative rounded-2xl md:rounded-3xl overflow-hidden aspect-[9/16]  cursor-pointer">

                  {/* 🎥 VIDEO */}
                  <video
                    src={reel.video}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    autoPlay
                    loop
                    muted
                    playsInline
                  />

                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-transparent to-foreground/10" />

                  {/* Play button */}
                  {/* <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full glass flex items-center justify-center opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 transition-all duration-400">
                      <Play className="h-5 w-5 text-foreground ml-0.5" fill="currentColor" />
                    </div>
                  </div> */}

                  {/* Bottom info */}
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="font-display text-sm font-semibold text-card">
                      {reel.title}
                    </p>
                    <p className="text-[10px] text-card/50 mt-1">
                      @enrichsalon
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 🔵 DOTS */}
        <div className="flex justify-center gap-2 mt-8">
          {scrollSnaps.map((_, i) => (
            <button
              key={i}
              onClick={() => emblaApi?.scrollTo(i)}
              className={`h-2 rounded-full transition-all duration-300 ${selectedIndex === i
                ? "w-8 bg-primary"
                : "w-2 bg-charcoal-foreground/20 hover:bg-charcoal-foreground/40"
                }`}
            />
          ))}
        </div>
      </div>
    </section >
  );
}