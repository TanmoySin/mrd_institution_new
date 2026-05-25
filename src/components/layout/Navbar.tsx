import { useState, useEffect, type JSX } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
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
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
            ? "bg-white/85 dark:bg-slate-900/85 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 py-3 shadow-sm"
            : "bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm py-5 border-b border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <a
            href="#"
            className="flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-lg"
          >
            <img
              src={logo}
              alt={`${siteData.siteConfig.name} Logo`}
              className="h-10 w-auto object-contain"
            />
            <div className="flex flex-col">
              <span className="text-xl font-black tracking-tight text-slate-900 dark:text-slate-50 leading-none">
                {siteData.siteConfig.name}
              </span>
              <span className="text-[10px] font-bold text-blue-600 dark:text-blue-400 tracking-widest uppercase mt-1">
                {siteData.siteConfig.tagline}
              </span>
            </div>
          </a>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-sm"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden lg:block">
            <a
              href="#admissions"
              className="group flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all shadow-md hover:shadow-lg focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-500/50"
            >
              Enrollment Desk
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            aria-expanded={isMobileOpen}
            aria-controls="mobile-menu"
            aria-label="Toggle navigation menu"
            className="lg:hidden p-2 text-slate-900 dark:text-slate-50 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
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
        id="mobile-menu"
        className={`fixed inset-0 z-40 bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl transition-all duration-300 ease-in-out lg:hidden flex flex-col pt-24 px-6 ${
          isMobileOpen
            ? "opacity-100 pointer-events-auto translate-y-0"
            : "opacity-0 pointer-events-none -translate-y-4"
        }`}
      >
        <div className="flex flex-col gap-2">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setIsMobileOpen(false)}
              className="text-lg font-black tracking-tight text-slate-900 dark:text-slate-50 py-4 border-b border-slate-200 dark:border-slate-800 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#admissions"
            onClick={() => setIsMobileOpen(false)}
            className="mt-8 bg-blue-600 hover:bg-blue-700 text-white text-center py-4 rounded-xl font-bold uppercase tracking-widest shadow-md transition-colors"
          >
            Access Enrollment Desk
          </a>
        </div>
      </div>
    </>
  );
}
