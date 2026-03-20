// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";
// import heroImg from "@/assets/hero-salon.jpg";

// export default function HeroSection() {
//   return (
//     <section className="relative min-h-[100svh] flex items-center overflow-hidden">
//       {/* BG Image */}
//       <div className="absolute inset-0">
//         <img src={heroImg} alt="Luxury salon interior" className="w-full h-full object-cover" />
//         <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/50 to-foreground/20" />
//       </div>

//       {/* Liquid blobs */}
//       <div className="absolute top-20 right-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl liquid-shape" />
//       <div className="absolute bottom-20 left-10 w-48 h-48 bg-primary/5 rounded-full blur-3xl liquid-shape" style={{ animationDelay: "-4s" }} />

//       <div className="relative container mx-auto px-4 lg:px-8 pt-28 pb-32 md:pt-32 md:pb-36">
//         <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-16">
//           {/* Left */}
//           <motion.div
//             className="max-w-xl"
//             initial={{ opacity: 0, y: 40 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
//           >
//             <p className="text-primary font-medium text-xs sm:text-sm tracking-[0.2em] uppercase mb-4">
//               Welcome to Enrich Salon
//             </p>
//             <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.15] text-card mb-6">
//               Relax, Look Great,{" "}
//               <span className="italic text-primary">Feel Confident</span>
//             </h1>
//             <p className="text-card/70 text-sm sm:text-base leading-relaxed mb-8 max-w-md">
//               Experience premium hair styling, cutting, and coloring by our expert artists in a luxury environment crafted for your comfort.
//             </p>
//             <Link
//               to="/booking"
//               className="inline-flex items-center px-7 sm:px-8 py-3 sm:py-3.5 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-all duration-300 shadow-lg shadow-primary/25"
//             >
//               Book Appointment
//             </Link>
//           </motion.div>

//           {/* Stats Card */}
//           <motion.div
//             className="glass-liquid rounded-2xl md:rounded-3xl p-6 sm:p-8 w-full max-w-[280px]"
//             initial={{ opacity: 0, y: 40, scale: 0.95 }}
//             animate={{ opacity: 1, y: 0, scale: 1 }}
//             transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
//           >
//             {[
//               { value: "+3800", label: "New Clients" },
//               { value: "+320", label: "Expert Artists" },
//               { value: "70%", label: "Satisfaction Rate" },
//             ].map((stat, i) => (
//               <div key={i} className={`text-right ${i < 2 ? "mb-5 pb-5 border-b border-foreground/10" : ""}`}>
//                 <p className="font-display text-3xl sm:text-4xl font-bold text-primary">{stat.value}</p>
//                 <p className="text-xs sm:text-sm text-foreground/60 mt-1">{stat.label}</p>
//               </div>
//             ))}
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }

import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import heroImg from "@/assets/hero-salon.jpg";

export default function HeroSection() {
  return (
    <section className="relative min-h-[100svh] flex items-center overflow-hidden">
      
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Luxury salon"
          className="w-full h-full object-cover scale-105"
        />

        {/* Premium overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/20" />
      </div>

      {/* Glow Effects */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/20 rounded-full blur-[120px] opacity-70" />
      <div className="absolute bottom-10 left-10 w-60 h-60 bg-pink-400/10 rounded-full blur-[100px]" />

      {/* Content */}
      <div className="relative container mx-auto px-4 lg:px-8 pt-28 pb-32">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-14 lg:px-20">

          {/* LEFT CONTENT */}
          <motion.div
            className="max-w-xl text-white"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-primary text-xs tracking-[0.25em] uppercase mb-5">
              Welcome to Enrich Salon
            </p>

            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6">
              Relax, Look Great,
              <br />
              <span className="italic text-primary">Feel Confident</span>
            </h1>

            <p className="text-white/70 text-base leading-relaxed mb-8 max-w-md">
              Experience premium hair styling, cutting, and coloring by expert
              artists in a luxury environment crafted for your comfort.
            </p>

            <div className="flex gap-4 flex-wrap">
              <Link
                to="/booking"
                className="px-8 py-3.5 rounded-full bg-primary text-white text-sm font-medium hover:bg-primary/90 transition shadow-xl shadow-primary/30"
              >
                Book Appointment
              </Link>

              <Link
                to="/services"
                className="px-8 py-3.5 rounded-full border border-white/20 text-white text-sm hover:bg-white/10 backdrop-blur-md transition"
              >
                View Services
              </Link>
            </div>
          </motion.div>

          {/* RIGHT CARD */}
          <motion.div
            className="backdrop-blur-xl bg-white/10 border border-white/10 rounded-3xl p-7 w-full max-w-[300px] shadow-2xl"
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {[
              { value: "+3800", label: "Happy Clients" },
              { value: "+320", label: "Expert Stylists" },
              { value: "4.9★", label: "Top Rating" },
            ].map((stat, i) => (
              <div
                key={i}
                className={`text-right ${
                  i < 2 ? "mb-5 pb-5 border-b border-white/10" : ""
                }`}
              >
                <p className="text-3xl font-bold text-primary">
                  {stat.value}
                </p>
                <p className="text-sm text-white/60 mt-1">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}