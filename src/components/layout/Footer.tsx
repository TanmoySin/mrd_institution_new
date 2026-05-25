import { MapPin, Phone, Mail, ArrowUpRight } from "lucide-react";
import { siteData } from "../../config/data";
import logo from "../../assets/logo.png";

export default function Footer() {
  const boards = [
    "CBSE Affiliated Curriculum",
    "TBSE State Board Align",
    "ICSE Reference Modules",
  ];

  return (
    <footer className="bg-primary text-surface pt-24 pb-12 px-6 border-t border-primary-light">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 mb-16">
        <div className="md:col-span-4 flex flex-col gap-6">
          <a href="#" className="flex items-center gap-3">
            <img
              src={logo}
              alt={siteData.siteConfig.name}
              className="h-10 w-auto"
            />
            <div className="flex flex-col">
              <span className="text-xl font-display font-black tracking-tight leading-none text-surface">
                {siteData.siteConfig.name}
              </span>
              <span className="text-[10px] font-bold text-accent tracking-widest uppercase mt-1">
                {siteData.siteConfig.tagline}
              </span>
            </div>
          </a>
          <p className="text-sm text-surface/60 leading-relaxed font-medium max-w-sm">
            {siteData.siteConfig.description}
          </p>
          <div className="text-[10px] font-black uppercase tracking-widest text-surface/40">
            Established Foundation · {siteData.siteConfig.foundedYear}
          </div>
        </div>

        <div className="md:col-span-4">
          <h4 className="text-xs font-black uppercase tracking-widest text-surface/40 mb-6">
            Institutional Directory
          </h4>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-4">
              <a
                href="#categories"
                className="text-sm font-bold text-surface/80 hover:text-accent transition-colors"
              >
                Curriculum Matrix
              </a>
              <a
                href="#faculty"
                className="text-sm font-bold text-surface/80 hover:text-accent transition-colors"
              >
                Leadership Profile
              </a>
              <a
                href="#testimonials"
                className="text-sm font-bold text-surface/80 hover:text-accent transition-colors"
              >
                Student Verdict
              </a>
            </div>
            <div className="flex flex-col gap-4">
              <a
                href="#admissions"
                className="text-sm font-bold text-surface/80 hover:text-accent transition-colors"
              >
                Enrollment Desk
              </a>
              <a
                href="#faq"
                className="text-sm font-bold text-surface/80 hover:text-accent transition-colors"
              >
                Support Center
              </a>
            </div>
          </div>
        </div>

        <div className="md:col-span-4 flex flex-col gap-6">
          <h4 className="text-xs font-black uppercase tracking-widest text-surface/40 mb-2">
            Campus Coordinates
          </h4>
          <div className="flex flex-col gap-4 text-sm font-medium text-surface/80">
            <div className="flex items-start gap-3">
              <MapPin className="w-4 h-4 text-accent shrink-0 mt-0.5" />
              <span>
                {siteData.siteConfig.address}, {siteData.siteConfig.city},{" "}
                {siteData.siteConfig.state} — {siteData.siteConfig.pincode}
              </span>
            </div>
            <a
              href={`tel:${siteData.siteConfig.phone}`}
              className="flex items-center gap-3 hover:text-surface transition-colors w-fit"
            >
              <Phone className="w-4 h-4 text-accent shrink-0" />
              {siteData.siteConfig.phone}
            </a>
            <a
              href={`mailto:${siteData.siteConfig.email}`}
              className="flex items-center gap-3 hover:text-surface transition-colors w-fit"
            >
              <Mail className="w-4 h-4 text-accent shrink-0" />
              {siteData.siteConfig.email}
            </a>
          </div>
          <a
            href={siteData.siteConfig.mapEmbedUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-[10px] font-black uppercase tracking-widest text-surface/60 hover:text-accent transition-colors mt-2"
          >
            Open Interactive Map <ArrowUpRight className="w-3 h-3" />
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-8 border-t border-surface/10 flex flex-col lg:flex-row items-center justify-between gap-6">
        <div className="flex flex-wrap justify-center lg:justify-start gap-2">
          {boards.map((board, i) => (
            <span
              key={i}
              className="text-[10px] font-black uppercase tracking-widest bg-surface/5 border border-surface/10 text-surface/60 px-3 py-1.5 rounded-md"
            >
              {board}
            </span>
          ))}
        </div>
        <div className="text-xs font-bold text-surface/40">
          © {new Date().getFullYear()} {siteData.siteConfig.name}. All Rights
          Reserved.
        </div>
      </div>
    </footer>
  );
}
