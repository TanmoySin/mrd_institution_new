import { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { siteData } from "../../config/data";
import logo from "../../assets/logo.png";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Curriculum Matrix", href: "#categories" },
    { label: "Faculty Directory", href: "#faculty" },
    { label: "Performance Verdict", href: "#testimonials" },
    { label: "Support & FAQs", href: "#faq" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-surface/90 backdrop-blur-xl border-b border-border-subtle py-3 shadow-float"
            : "bg-canvas/50 backdrop-blur-md py-5 border-b border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3">
            <img
              src={logo}
              alt={siteData.siteConfig.name}
              className="h-10 w-auto"
            />
            <div className="flex flex-col">
              <span className="text-xl font-display font-black tracking-tight text-primary leading-none">
                {siteData.siteConfig.name}
              </span>
              <span className="text-[10px] font-bold text-accent tracking-widest uppercase mt-1">
                {siteData.siteConfig.tagline}
              </span>
            </div>
          </a>
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs font-bold uppercase tracking-wider text-primary-light hover:text-accent transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="hidden lg:block">
            <a
              href="#admissions"
              className="group flex items-center gap-2 bg-primary text-surface px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-accent transition-colors shadow-card hover:shadow-glow"
            >
              Enrollment Desk
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="lg:hidden p-2 text-primary"
          >
            {isMobileOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </nav>
      <div
        className={`fixed inset-0 z-40 bg-surface/95 backdrop-blur-2xl transition-all duration-300 lg:hidden flex flex-col pt-24 px-6 ${
          isMobileOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none -translate-y-4"
        }`}
      >
        <div className="flex flex-col gap-2">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setIsMobileOpen(false)}
              className="text-lg font-display font-black tracking-tight text-primary py-4 border-b border-border-subtle"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#admissions"
            onClick={() => setIsMobileOpen(false)}
            className="mt-8 bg-accent text-surface text-center py-4 rounded-xl font-bold uppercase tracking-widest shadow-card"
          >
            Access Enrollment Desk
          </a>
        </div>
      </div>
    </>
  );
}
