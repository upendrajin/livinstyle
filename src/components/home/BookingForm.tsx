import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const tabs = ["Hair Styling", "Hair Cut", "Hair Coloring"];

export default function BookingForm() {
  const [activeTab, setActiveTab] = useState(0);
  const { ref, visible } = useScrollReveal(0.1);

  return (
    <section className="relative z-10 -mt-16 sm:-mt-20 mb-16 sm:mb-20">
      <div ref={ref} className="container mx-auto px-4 lg:px-8">
        <div className={`glass-liquid rounded-2xl md:rounded-3xl shadow-liquid p-5 sm:p-6 lg:p-10 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-6 mb-6 sm:mb-8">
            <h2 className="font-display text-xl sm:text-2xl font-bold text-foreground">Book your service</h2>
            <div className="flex flex-wrap gap-2">
              {tabs.map((tab, i) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(i)}
                  className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${
                    activeTab === i
                      ? "bg-primary text-primary-foreground shadow-sm"
                      : "bg-secondary text-foreground/60 hover:bg-secondary/80"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full min-w-0 px-4 sm:px-5 py-3 sm:py-3.5 rounded-xl bg-secondary/80 text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 transition"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full min-w-0 px-4 sm:px-5 py-3 sm:py-3.5 rounded-xl bg-secondary/80 text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 transition"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full min-w-0 px-4 sm:px-5 py-3 sm:py-3.5 rounded-xl bg-secondary/80 text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 transition"
            />
            <div className="w-full min-w-0">
              <input
                type="date"
                className="w-full px-4 sm:px-5 py-3 sm:py-3.5 rounded-xl bg-secondary/80 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 transition"
              />
            </div>
            <div className="w-full min-w-0">
              <input
                type="time"
                className="w-full px-4 sm:px-5 py-3 sm:py-3.5 rounded-xl bg-secondary/80 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 transition"
              />
            </div>
            <select className="w-full min-w-0 px-4 sm:px-5 py-3 sm:py-3.5 rounded-xl bg-secondary/80 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 transition appearance-none">
              <option>Choose services</option>
              <option>Hair Styling</option>
              <option>Hair Cut</option>
              <option>Hair Coloring</option>
              <option>Spa Treatment</option>
            </select>
          </div>

          <div className="mt-5 sm:mt-6 flex justify-end">
            <button className="w-full sm:w-auto px-8 py-3 sm:py-3.5 rounded-full bg-foreground text-card text-sm font-medium hover:bg-foreground/90 transition-all duration-300 shadow-liquid">
              Book Appointment
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
