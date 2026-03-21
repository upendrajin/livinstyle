// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";
// import { Link } from "react-router-dom";
// import serviceStyling from "@/assets/service-styling.jpg";
// import serviceColoring from "@/assets/service-coloring.jpg";
// import serviceHaircut from "@/assets/service-haircut.jpg";

// const posts = [
//   { img: serviceStyling, title: "10 Hair Trends You Need to Try This Season", date: "Mar 15, 2026", category: "Trends", excerpt: "Discover the hottest hairstyles and color trends that are dominating salons worldwide this season." },
//   { img: serviceColoring, title: "The Ultimate Guide to Hair Coloring", date: "Mar 10, 2026", category: "Guide", excerpt: "Everything you need to know about choosing the right color, maintenance tips, and what to expect." },
//   { img: serviceHaircut, title: "How to Maintain Healthy Hair Between Visits", date: "Mar 5, 2026", category: "Tips", excerpt: "Expert tips from our stylists on keeping your hair looking salon-fresh every day." },
// ];

// const categories = ["All", "Trends", "Guide", "Tips"];

// export default function Blog() {
//   return (
//     <div className="min-h-screen">
//       <Navbar />
//       <div className="pt-32 pb-24 bg-background">
//         <div className="container mx-auto px-4 lg:px-8">
//           <div className="text-center mb-12">
//             <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">Our Blog</h1>
//             <p className="text-muted-foreground text-sm max-w-lg mx-auto">Tips, trends, and inspiration from our experts.</p>
//           </div>

//           <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//             <div className="lg:col-span-2 space-y-8">
//               {posts.map((post, i) => (
//                 <div key={i} className="bg-card rounded-xl overflow-hidden shadow-card group hover:shadow-elegant transition-all duration-400 flex flex-col sm:flex-row">
//                   <div className="sm:w-64 aspect-video sm:aspect-auto overflow-hidden shrink-0">
//                     <img src={post.img} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
//                   </div>
//                   <div className="p-6 flex flex-col justify-center">
//                     <span className="text-xs text-primary font-medium uppercase tracking-wider">{post.category}</span>
//                     <h3 className="font-display text-lg font-semibold text-foreground mt-2">{post.title}</h3>
//                     <p className="text-sm text-muted-foreground mt-2 line-clamp-2">{post.excerpt}</p>
//                     <p className="text-xs text-muted-foreground mt-3">{post.date}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             <aside className="space-y-8">
//               <div className="bg-card rounded-xl p-6 shadow-card">
//                 <h3 className="font-display text-lg font-semibold text-foreground mb-4">Categories</h3>
//                 <ul className="space-y-2">
//                   {categories.map((c) => (
//                     <li key={c} className="text-sm text-muted-foreground hover:text-primary cursor-pointer transition-colors">{c}</li>
//                   ))}
//                 </ul>
//               </div>
//               <div className="bg-card rounded-xl p-6 shadow-card">
//                 <h3 className="font-display text-lg font-semibold text-foreground mb-4">Recent Posts</h3>
//                 <ul className="space-y-3">
//                   {posts.map((p, i) => (
//                     <li key={i} className="text-sm text-muted-foreground hover:text-primary cursor-pointer transition-colors">{p.title}</li>
//                   ))}
//                 </ul>
//               </div>
//             </aside>
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// }

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Search } from "lucide-react";

import serviceStyling from "@/assets/service-styling.jpg";
import serviceColoring from "@/assets/service-coloring.jpg";
import serviceHaircut from "@/assets/service-haircut.jpg";

const posts = [
  {
    img: serviceStyling,
    title: "10 Hair Trends You Need to Try This Season",
    date: "Mar 15, 2026",
    category: "Trends",
    excerpt:
      "Discover the hottest hairstyles and color trends that are dominating salons worldwide this season.",
  },
  {
    img: serviceColoring,
    title: "The Ultimate Guide to Hair Coloring",
    date: "Mar 10, 2026",
    category: "Guide",
    excerpt:
      "Everything you need to know about choosing the right color, maintenance tips, and what to expect.",
  },
  {
    img: serviceHaircut,
    title: "How to Maintain Healthy Hair Between Visits",
    date: "Mar 5, 2026",
    category: "Tips",
    excerpt:
      "Expert tips from our stylists on keeping your hair looking salon-fresh every day.",
  },
];

const categories = ["All", "Trends", "Guide", "Tips"];

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredPosts =
    activeCategory === "All"
      ? posts
      : posts.filter((post) => post.category === activeCategory);

  return (
    <div className="min-h-screen bg-black">
      <Navbar />

      {/* HERO */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-primary/10 to-transparent text-center">
        <h1 className="text-5xl text-white md:text-6xl font-bold mb-4">
          Beauty Journal
        </h1>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Explore trends, expert tips, and inspiration to elevate your style.
        </p>
      </section>

      {/* CATEGORY FILTER */}
      <div className="container mx-auto px-4 lg:px-8 mb-10">
        <div className="flex flex-wrap gap-3 justify-center">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActiveCategory(c)}
              className={`px-5 py-2 rounded-full text-sm transition-all duration-300
                ${
                  activeCategory === c
                    ? "bg-primary text-primary-foreground" : "bg-secondary/10 text-white hover:bg-secondary/40"
                }`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      {/* MAIN */}
      <div className="container mx-auto px-4 lg:px-8 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

          {/* LEFT */}
          <div className="lg:col-span-2 space-y-10">

            {/* FEATURED */}
            {filteredPosts.length > 0 && (
              <div className="relative rounded-2xl overflow-hidden group">
                <img
                  src={filteredPosts[0].img}
                  className="w-full h-[380px] object-cover group-hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 bg-black/40" />
                <div className="absolute bottom-0 p-6 text-white">
                  <span className="text-xs uppercase text-primary">
                    Featured
                  </span>
                  <h2 className="text-2xl md:text-3xl font-bold mt-2">
                    {filteredPosts[0].title}
                  </h2>
                  <p className="text-sm mt-2 opacity-90">
                    {filteredPosts[0].excerpt}
                  </p>
                </div>
              </div>
            )}

            {/* POSTS */}
            {filteredPosts.length > 0 ? (
              filteredPosts.map((post, i) => (
                <div
                  key={i}
                  className="group flex flex-col sm:flex-row gap-6 bg-card/10 backdrop-blur-md  rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300"
                >
                  <div className="sm:w-64 aspect-video overflow-hidden">
                    <img
                      src={post.img}
                      className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                    />
                  </div>

                  <div className="p-6">
                    <span className="text-xs text-primary uppercase">
                      {post.category}
                    </span>

                    <h3 className="text-xl text-white font-semibold mt-2 group-hover:text-primary transition">
                      {post.title}
                    </h3>

                    <p className="text-sm text-muted-foreground mt-2 line-clamp-2">
                      {post.excerpt}
                    </p>

                    <div className="flex justify-between mt-4">
                      <span className="text-xs text-muted-foreground">
                        {post.date}
                      </span>

                      <Link
                        to="#"
                        className="text-primary text-sm hover:underline"
                      >
                        Read More →
                      </Link>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center text-muted-foreground">
                No posts found.
              </p>
            )}
          </div>

          {/* SIDEBAR */}
          <aside className="space-y-8 sticky top-28 h-fit">

            {/* Categories */}
            <div className="bg-card/10 backdrop-blur-md rounded-2xl p-6">
              <h3 className="font-semibold text-white mb-4">Categories</h3>
              {categories.map((c) => (
                <div
                  key={c}
                  onClick={() => setActiveCategory(c)}
                  className={`cursor-pointer text-sm mb-2 transition
                    ${
                      activeCategory === c
                        ? "text-primary font-medium"
                        : "text-muted-foreground hover:text-primary"
                    }`}
                >
                  {c}
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="rounded-2xl p-6 bg-primary text-white text-center">
              <h3 className="font-semibold text-lg">
                Book Your Appointment
              </h3>
              <p className="text-sm mt-2 opacity-90">
                Get a fresh new look today.
              </p>
              <button className="mt-4 bg-white text-primary px-4 py-2 rounded-full text-sm hover:scale-105 transition">
                Book Now
              </button>
            </div>

          </aside>
        </div>
      </div>

      <Footer />
    </div>
  );
}