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
    <footer className="relative bg-slate-900 text-slate-300 pt-24 pb-12 px-6 border-t border-slate-800 selection:bg-blue-500/30 overflow-hidden">
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-64 bg-[radial-gradient(ellipse_at_bottom,rgba(37,99,235,0.15),transparent_70%)] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 mb-16 relative z-10">
        <div className="md:col-span-4 flex flex-col gap-6">
          <a
            href="#"
            aria-label={`Return to ${siteData.siteConfig.name} homepage`}
            className="flex items-center gap-3 w-fit focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-lg group"
          >
            <img
              src={logo}
              alt={`${siteData.siteConfig.name} Logo`}
              className="h-10 w-auto group-hover:scale-105 transition-transform duration-300"
            />
            <div className="flex flex-col">
              <span className="text-xl font-black tracking-tight leading-none text-white transition-colors group-hover:text-blue-50">
                {siteData.siteConfig.name}
              </span>
              <span className="text-[10px] font-bold text-blue-500 dark:text-blue-400 tracking-widest uppercase mt-1">
                {siteData.siteConfig.tagline}
              </span>
            </div>
          </a>

          <p className="text-sm text-slate-400 leading-relaxed font-medium max-w-sm">
            {siteData.siteConfig.description}
          </p>

          <div className="text-[10px] font-black uppercase tracking-widest text-slate-500">
            Established Foundation · {siteData.siteConfig.foundedYear}
          </div>
        </div>

        <nav className="md:col-span-4" aria-label="Footer Navigation">
          <h4 className="text-xs font-black uppercase tracking-widest text-slate-500 mb-6">
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
                  className="text-sm font-bold text-slate-400 hover:text-blue-400 hover:translate-x-1 transition-all w-fit focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
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
                  className="text-sm font-bold text-slate-400 hover:text-blue-400 hover:translate-x-1 transition-all w-fit focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </nav>

        <div className="md:col-span-4 flex flex-col gap-6">
          <h4 className="text-xs font-black uppercase tracking-widest text-slate-500 mb-2">
            Campus Coordinates
          </h4>
          <address className="flex flex-col gap-4 text-sm font-medium text-slate-400 not-italic">
            <div className="flex items-start gap-3">
              <MapPin
                className="w-4 h-4 text-blue-500 shrink-0 mt-0.5"
                aria-hidden="true"
              />
              <span>
                {siteData.siteConfig.address}, {siteData.siteConfig.city},{" "}
                {siteData.siteConfig.state} — {siteData.siteConfig.pincode}
              </span>
            </div>

            <a
              href={`tel:${siteData.siteConfig.phone}`}
              className="flex items-center gap-3 hover:text-white transition-colors w-fit focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
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
              className="flex items-center gap-3 hover:text-white transition-colors w-fit focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
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
            className="group inline-flex items-center gap-1.5 text-[10px] font-black uppercase tracking-widest text-slate-500 hover:text-blue-400 transition-colors mt-2 w-fit focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
          >
            Open Interactive Map
            <ArrowUpRight
              className="w-3.5 h-3.5 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform"
              aria-hidden="true"
            />
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-8 border-t border-slate-800/80 flex flex-col lg:flex-row items-center justify-between gap-6 relative z-10">
        <div className="flex flex-wrap justify-center lg:justify-start gap-2.5">
          {boards.map((board, i) => (
            <span
              key={i}
              className="text-[10px] font-black uppercase tracking-widest bg-slate-800/50 border border-slate-700/50 text-slate-400 px-3 py-1.5 rounded-lg shadow-sm"
            >
              {board}
            </span>
          ))}
        </div>

        <div className="text-xs font-bold text-slate-500 text-center lg:text-right">
          &copy; {currentYear} {siteData.siteConfig.name}. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
