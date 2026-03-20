import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import heroImg from "@/assets/hero-salon.jpg";
import team1 from "@/assets/team-1.jpg";
import team2 from "@/assets/team-2.jpg";
import team3 from "@/assets/team-3.jpg";
import team4 from "@/assets/team-4.jpg";

const team = [
  { img: team1, name: "Elena Rodriguez", role: "Senior Hair Stylist" },
  { img: team2, name: "Marcus Johnson", role: "Master Barber" },
  { img: team3, name: "Lina Chen", role: "Color Specialist" },
  { img: team4, name: "Sofia Martinez", role: "Spa Therapist" },
];

const stats = [
  { value: "10+", label: "Years Experience" },
  { value: "3800+", label: "Happy Clients" },
  { value: "320+", label: "Expert Artists" },
  { value: "15", label: "Awards Won" },
];

export default function About() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-32 pb-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">About Us</h1>
            <p className="text-muted-foreground text-sm max-w-lg mx-auto">Our story, our mission, our passion.</p>
          </div>

          {/* Story */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
            <div className="rounded-xl overflow-hidden">
              <img src={heroImg} alt="Our salon" className="w-full h-80 lg:h-[400px] object-cover" />
            </div>
            <div>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">Our Story</h2>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                Founded in 2016, Enrich Salon was born from a passion for transforming hair into art. What started as a small studio has grown into a premier destination for discerning clients seeking exceptional hair care.
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Our mission is simple: to make every client feel confident and beautiful. We invest in continuous education and use only premium products to ensure results that exceed expectations.
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
            {stats.map((s, i) => (
              <div key={i} className="bg-card rounded-xl p-8 text-center shadow-card">
                <p className="font-display text-3xl font-bold text-primary">{s.value}</p>
                <p className="text-sm text-muted-foreground mt-2">{s.label}</p>
              </div>
            ))}
          </div>

          {/* Team */}
          <div className="text-center mb-12">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">Meet Our Team</h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((m, i) => (
              <div key={i} className="text-center group">
                <div className="rounded-xl overflow-hidden mb-4 aspect-[3/4]">
                  <img src={m.img} alt={m.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <h3 className="font-display text-base font-semibold text-foreground">{m.name}</h3>
                <p className="text-xs text-muted-foreground mt-1">{m.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
