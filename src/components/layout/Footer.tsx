import { type JSX } from "react";
import { MapPin, Phone, Mail, ArrowUpRight } from "lucide-react";
import { siteData } from "../../config/data";
import logo from "../../assets/logo.png";

export default function Footer(): JSX.Element {
  const boards: string[] = [
    "CBSE Affiliated Curriculum",
    "TBSE State Board Align",
    "ICSE Reference Modules",
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-slate-50 text-slate-600 pt-24 pb-12 px-6 border-t border-slate-200 selection:bg-blue-100 selection:text-blue-900 overflow-hidden">
      {/* Subtle ambient light from the bottom */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-64 bg-[radial-gradient(ellipse_at_bottom,rgba(59,130,246,0.06),transparent_70%)] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 mb-16 relative z-10">
        {/* Column 1: Brand & Description */}
        <div className="md:col-span-4 flex flex-col gap-6">
          <a
            href="#"
            aria-label={`Return to ${siteData.siteConfig.name} homepage`}
            className="flex items-center gap-3 w-fit focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-500/30 rounded-xl group transition-opacity hover:opacity-90"
          >
            <img
              src={logo}
              alt={`${siteData.siteConfig.name} Logo`}
              className="h-10 w-auto group-hover:scale-105 transition-transform duration-300 ease-out"
            />
            <div className="flex flex-col">
              <span className="text-xl font-extrabold tracking-tight leading-none text-slate-900 transition-colors group-hover:text-blue-600">
                {siteData.siteConfig.name}
              </span>
              <span className="text-[10px] font-bold text-blue-600 tracking-widest uppercase mt-1">
                {siteData.siteConfig.tagline}
              </span>
            </div>
          </a>

          <p className="text-sm text-slate-500 leading-relaxed font-medium max-w-sm">
            {siteData.siteConfig.description}
          </p>

          <div className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
            Established Foundation · {siteData.siteConfig.foundedYear}
          </div>
        </div>

        {/* Column 2: Navigation Links */}
        <nav className="md:col-span-4" aria-label="Footer Navigation">
          <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-6">
            Institutional Directory
          </h4>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-4">
              {[
                { label: "Curriculum Matrix", href: "#categories" },
                { label: "Leadership Profile", href: "#faculty" },
                { label: "Student Verdict", href: "#testimonials" },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm font-semibold text-slate-500 hover:text-blue-600 hover:translate-x-1 transition-all w-fit focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-500/30 rounded-md px-1 -ml-1"
                >
                  {link.label}
                </a>
              ))}
            </div>
            <div className="flex flex-col gap-4">
              {[
                { label: "Enrollment Desk", href: "#admissions" },
                { label: "Support Center", href: "#faq" },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm font-semibold text-slate-500 hover:text-blue-600 hover:translate-x-1 transition-all w-fit focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-500/30 rounded-md px-1 -ml-1"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </nav>

        {/* Column 3: Contact Details */}
        <div className="md:col-span-4 flex flex-col gap-6">
          <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">
            Campus Coordinates
          </h4>
          <address className="flex flex-col gap-4 text-sm font-medium text-slate-500 not-italic">
            <div className="flex items-start gap-3">
              <MapPin
                className="w-4 h-4 text-blue-500 shrink-0 mt-0.5"
                aria-hidden="true"
              />
              <span className="leading-relaxed">
                {siteData.siteConfig.address}, {siteData.siteConfig.city},{" "}
                {siteData.siteConfig.state} — {siteData.siteConfig.pincode}
              </span>
            </div>

            <a
              href={`tel:${siteData.siteConfig.phone}`}
              className="flex items-center gap-3 hover:text-slate-900 transition-colors w-fit focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-500/30 rounded-md px-1 -ml-1"
              aria-label={`Call us at ${siteData.siteConfig.phone}`}
            >
              <Phone
                className="w-4 h-4 text-blue-500 shrink-0"
                aria-hidden="true"
              />
              {siteData.siteConfig.phone}
            </a>

            <a
              href={`mailto:${siteData.siteConfig.email}`}
              className="flex items-center gap-3 hover:text-slate-900 transition-colors w-fit focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-500/30 rounded-md px-1 -ml-1"
              aria-label={`Email us at ${siteData.siteConfig.email}`}
            >
              <Mail
                className="w-4 h-4 text-blue-500 shrink-0"
                aria-hidden="true"
              />
              {siteData.siteConfig.email}
            </a>
          </address>

          <a
            href={siteData.siteConfig.mapEmbedUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-blue-600 hover:text-blue-700 transition-colors mt-2 w-fit focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-500/30 rounded-md px-1 -ml-1"
          >
            Open Interactive Map
            <ArrowUpRight
              className="w-3.5 h-3.5 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform"
              aria-hidden="true"
            />
          </a>
        </div>
      </div>

      {/* Footer Bottom: Boards & Copyright */}
      <div className="max-w-7xl mx-auto pt-8 border-t border-slate-200 flex flex-col lg:flex-row items-center justify-between gap-6 relative z-10">
        <div className="flex flex-wrap justify-center lg:justify-start gap-2.5">
          {boards.map((board, i) => (
            <span
              key={i}
              className="text-[10px] font-bold uppercase tracking-widest bg-white border border-slate-200 text-slate-500 px-3 py-1.5 rounded-lg shadow-sm"
            >
              {board}
            </span>
          ))}
        </div>

        <div className="text-xs font-semibold text-slate-400 text-center lg:text-right">
          &copy; {currentYear} {siteData.siteConfig.name}. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
