import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Scissors } from "lucide-react";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Portfolio", path: "/gallery" },
  { label: "Blog", path: "/blog" },
  { label: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-black/50 backdrop-blur-md"
          : " backdrop-blur-md/0"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between py-3.5 px-4 lg:px-8">
        <Link to="/" className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl bg-primary/20 flex items-center justify-center">
            <Scissors className="h-5 w-5 text-primary" />
          </div>
          <span className="font-display text-xl font-bold text-header-foreground">
            Liv in <span className="text-primary">style</span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((l) => (
            <Link
              key={l.path}
              to={l.path}
              className={`text-sm font-medium transition-colors duration-300 hover:text-primary ${
                location.pathname === l.path ? "text-primary" : "text-header-foreground/75"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <Link
          to="/booking"
          className="hidden lg:inline-flex items-center px-6 py-2.5 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-all duration-300 shadow-lg shadow-primary/20"
        >
          Book Appointment
        </Link>

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden p-2 text-header-foreground"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-400 ${
          open ? "max-h-96 border-b border-white/10" : "max-h-0"
        } bg-header/95 backdrop-blur-xl`}
      >
        <nav className="flex flex-col px-6 pb-6 gap-4">
          {navLinks.map((l) => (
            <Link
              key={l.path}
              to={l.path}
              className={`text-sm font-medium transition-colors ${
                location.pathname === l.path ? "text-primary" : "text-header-foreground/75"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/booking"
            className="inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-primary text-primary-foreground text-sm font-medium"
          >
            Book Appointment
          </Link>
        </nav>
      </div>
    </header>
  );
}
