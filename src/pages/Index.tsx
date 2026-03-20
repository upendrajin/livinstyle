import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/home/HeroSection";
import BookingForm from "@/components/home/BookingForm";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import ServicesSection from "@/components/home/ServicesSection";
import PortfolioSection from "@/components/home/PortfolioSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import TeamSection from "@/components/home/TeamSection";
import ReelsSection from "@/components/home/ReelsSection";
import VisitSection from "@/components/home/VisitSection";

export default function Index() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <BookingForm />
      <WhyChooseUs />
      <ServicesSection />
      <PortfolioSection />
      <TestimonialsSection />
      <TeamSection />
      <ReelsSection />
      <VisitSection />
      <Footer />
    </div>
  );
}
