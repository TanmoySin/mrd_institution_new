import { useState, useEffect, type JSX } from "react";
import { Menu, X, ArrowRight, ChevronRight } from "lucide-react";
import { siteData } from "../../config/data";
import logo from "../../assets/logo.png";

export interface NavLink {
  label: string;
  href: string;
}

export default function Navbar(): JSX.Element {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isMobileOpen, setIsMobileOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileOpen]);

  const navLinks: NavLink[] = [
    { label: "Curriculum Matrix", href: "#categories" },
    { label: "Faculty Directory", href: "#faculty" },
    { label: "Performance Verdict", href: "#testimonials" },
    { label: "Support & FAQs", href: "#faq" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ease-in-out ${
          isScrolled
            ? "bg-white/80 backdrop-blur-xl border-b border-slate-100 py-3 shadow-sm"
            : "bg-transparent py-5 border-b border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo & Brand */}
          <a
            href="#"
            className="flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50 rounded-xl transition-opacity hover:opacity-80"
          >
            <img
              src={logo}
              alt={`${siteData.siteConfig.name} Logo`}
              className="h-10 w-auto object-contain"
            />
            <div className="flex flex-col">
              <span className="text-xl font-black tracking-tight text-slate-900 leading-none">
                {siteData.siteConfig.name}
              </span>
              <span className="text-[10px] font-bold text-blue-600 tracking-widest uppercase mt-1">
                {siteData.siteConfig.tagline}
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50 rounded-md px-2 py-1"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <a
              href="#admissions"
              className="group flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 ease-in-out shadow-sm hover:shadow-md focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-500/30"
            >
              Enrollment Desk
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            aria-expanded={isMobileOpen}
            aria-controls="mobile-menu"
            aria-label="Toggle navigation menu"
            className="lg:hidden p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-xl transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50"
          >
            {isMobileOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        id="mobile-menu"
        className={`fixed inset-0 z-40 bg-white/95 backdrop-blur-2xl transition-all duration-400 ease-in-out lg:hidden flex flex-col pt-28 px-6 ${
          isMobileOpen
            ? "opacity-100 pointer-events-auto translate-y-0"
            : "opacity-0 pointer-events-none -translate-y-8"
        }`}
      >
        <div className="flex flex-col gap-2">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setIsMobileOpen(false)}
              className="flex items-center justify-between group py-4 border-b border-slate-100 focus-visible:outline-none"
            >
              <span className="text-xl font-semibold tracking-tight text-slate-800 group-hover:text-blue-600 transition-colors">
                {link.label}
              </span>
              <ChevronRight className="w-5 h-5 text-slate-300 group-hover:text-blue-600 transition-colors" />
            </a>
          ))}

          <a
            href="#admissions"
            onClick={() => setIsMobileOpen(false)}
            className="mt-8 flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-2xl font-semibold shadow-md transition-all active:scale-[0.98]"
          >
            Access Enrollment Desk
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </>
  );
}
