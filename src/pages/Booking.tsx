import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";
import { Check, ArrowRight, ArrowLeft } from "lucide-react";
import serviceStyling from "@/assets/service-styling.jpg";
import serviceColoring from "@/assets/service-coloring.jpg";
import serviceHaircut from "@/assets/service-haircut.jpg";
import serviceSpa from "@/assets/service-spa.jpg";

const services = [
  { img: serviceStyling, title: "Hair Styling", price: "$80+" },
  { img: serviceHaircut, title: "Hair Cut", price: "$45+" },
  { img: serviceColoring, title: "Hair Coloring", price: "$120+" },
  { img: serviceSpa, title: "Spa Treatment", price: "$65+" },
];

const steps = ["Service", "Date & Time", "Your Details", "Confirmation"];

export default function Booking() {
  const [step, setStep] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [details, setDetails] = useState({ name: "", email: "", phone: "" });

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-32 pb-24 bg-black">
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
          <div className="text-center mb-12">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">Book Appointment</h1>
          </div>

          {/* Steps */}
          <div className="flex items-center justify-center gap-2 mb-12">
            {steps.map((s, i) => (
              <div key={i} className="flex items-center gap-2">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-medium transition-all ${
                  i <= step ? "bg-primary text-primary-foreground" : "bg-secondary/10 text-white hover:bg-secondary/40"
                }`}>
                  {i < step ? <Check className="h-4 w-4" /> : i + 1}
                </div>
                <span className="hidden sm:block text-xs text-muted-foreground">{s}</span>
                {i < steps.length - 1 && <div className={`w-8 h-px ${i < step ? "bg-primary" : "bg-border"}`} />}
              </div>
            ))}
          </div>

          <div className="bg-card/10 rounded-xl p-8 shadow-elegant">
            {step === 0 && (
              <div className="grid grid-cols-2 gap-4">
                {services.map((s, i) => (
                  <div
                    key={i}
                    onClick={() => setSelected(i)}
                    className={`rounded-xl overflow-hidden cursor-pointer border-2 transition-all duration-300 ${
                      selected === i ? "border-primary" : "border-white/10"
                    }`}
                  >
                    <img src={s.img} alt={s.title} className="w-full aspect-video object-cover" />
                    <div className="p-4">
                      <h3 className="font-display text-sm font-semibold text-white">{s.title}</h3>
                      <p className="text-xs text-primary mt-1">{s.price}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {step === 1 && (
              <div className="space-y-4 max-w-md mx-auto">
                <label className="block text-sm font-medium text-foreground">Select Date</label>
                <input type="date" value={date} onChange={(e) => setDate(e.target.value)} className="w-full px-5 py-3.5 rounded-lg bg-secondary text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" />
                <label className="block text-sm font-medium text-foreground">Select Time</label>
                <input type="time" value={time} onChange={(e) => setTime(e.target.value)} className="w-full px-5 py-3.5 rounded-lg bg-secondary text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" />
              </div>
            )}

            {step === 2 && (
              <div className="space-y-4 max-w-md mx-auto">
                <input type="text" placeholder="Full Name" value={details.name} onChange={(e) => setDetails({ ...details, name: e.target.value })} className="w-full px-5 py-3.5 rounded-lg bg-secondary text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" />
                <input type="email" placeholder="Email" value={details.email} onChange={(e) => setDetails({ ...details, email: e.target.value })} className="w-full px-5 py-3.5 rounded-lg bg-secondary text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" />
                <input type="tel" placeholder="Phone" value={details.phone} onChange={(e) => setDetails({ ...details, phone: e.target.value })} className="w-full px-5 py-3.5 rounded-lg bg-secondary text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" />
              </div>
            )}

            {step === 3 && (
              <div className="text-center py-8">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Check className="h-8 w-8 text-primary" />
                </div>
                <h2 className="font-display text-2xl font-bold text-white mb-2">Booking Confirmed!</h2>
                <p className="text-sm text-muted-foreground">Thank you for choosing Enrich Salon. We'll send a confirmation to your email.</p>
              </div>
            )}

            {step < 3 && (
              <div className="flex justify-between mt-8">
                <button
                  onClick={() => setStep(Math.max(0, step - 1))}
                  disabled={step === 0}
                  className="flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-medium text-muted-foreground disabled:opacity-30 hover:text-foreground transition-colors"
                >
                  <ArrowLeft className="h-4 w-4" /> Back
                </button>
                <button
                  onClick={() => setStep(step + 1)}
                  className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-all duration-300"
                >
                  {step === 2 ? "Confirm" : "Next"} <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
