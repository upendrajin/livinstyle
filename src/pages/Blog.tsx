import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import serviceStyling from "@/assets/service-styling.jpg";
import serviceColoring from "@/assets/service-coloring.jpg";
import serviceHaircut from "@/assets/service-haircut.jpg";

const posts = [
  { img: serviceStyling, title: "10 Hair Trends You Need to Try This Season", date: "Mar 15, 2026", category: "Trends", excerpt: "Discover the hottest hairstyles and color trends that are dominating salons worldwide this season." },
  { img: serviceColoring, title: "The Ultimate Guide to Hair Coloring", date: "Mar 10, 2026", category: "Guide", excerpt: "Everything you need to know about choosing the right color, maintenance tips, and what to expect." },
  { img: serviceHaircut, title: "How to Maintain Healthy Hair Between Visits", date: "Mar 5, 2026", category: "Tips", excerpt: "Expert tips from our stylists on keeping your hair looking salon-fresh every day." },
];

const categories = ["All", "Trends", "Guide", "Tips"];

export default function Blog() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-32 pb-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">Our Blog</h1>
            <p className="text-muted-foreground text-sm max-w-lg mx-auto">Tips, trends, and inspiration from our experts.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              {posts.map((post, i) => (
                <div key={i} className="bg-card rounded-xl overflow-hidden shadow-card group hover:shadow-elegant transition-all duration-400 flex flex-col sm:flex-row">
                  <div className="sm:w-64 aspect-video sm:aspect-auto overflow-hidden shrink-0">
                    <img src={post.img} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-6 flex flex-col justify-center">
                    <span className="text-xs text-primary font-medium uppercase tracking-wider">{post.category}</span>
                    <h3 className="font-display text-lg font-semibold text-foreground mt-2">{post.title}</h3>
                    <p className="text-sm text-muted-foreground mt-2 line-clamp-2">{post.excerpt}</p>
                    <p className="text-xs text-muted-foreground mt-3">{post.date}</p>
                  </div>
                </div>
              ))}
            </div>

            <aside className="space-y-8">
              <div className="bg-card rounded-xl p-6 shadow-card">
                <h3 className="font-display text-lg font-semibold text-foreground mb-4">Categories</h3>
                <ul className="space-y-2">
                  {categories.map((c) => (
                    <li key={c} className="text-sm text-muted-foreground hover:text-primary cursor-pointer transition-colors">{c}</li>
                  ))}
                </ul>
              </div>
              <div className="bg-card rounded-xl p-6 shadow-card">
                <h3 className="font-display text-lg font-semibold text-foreground mb-4">Recent Posts</h3>
                <ul className="space-y-3">
                  {posts.map((p, i) => (
                    <li key={i} className="text-sm text-muted-foreground hover:text-primary cursor-pointer transition-colors">{p.title}</li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
