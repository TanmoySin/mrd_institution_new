import { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Binary,
  Atom,
  Globe,
  Languages,
  Book,
  Calculator,
  Zap,
  FlaskConical,
  Dna,
  Map,
  FileText,
  Activity,
  HeartPulse,
  TrendingUp,
  BookMarked,
  Brain,
  Dumbbell,
  Hourglass,
  Landmark,
} from "lucide-react";
import { siteData } from "../config/data";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const iconMap: Record<string, any> = {
  BookOpen,
  Binary,
  Atom,
  Globe,
  Languages,
  Book,
  Calculator,
  Zap,
  FlaskConical,
  Dna,
  Map,
  FileText,
  Activity,
  HeartPulse,
  TrendingUp,
  BookMarked,
  Brain,
  Dumbbell,
  Hourglass,
  Landmark,
};

export default function SchoolBoards() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const renderIcon = (name: string, css: string) => {
    const IconComponent = iconMap[name] || BookOpen;
    return <IconComponent className={css} />;
  };

  return (
    <div className="relative min-h-screen bg-canvas">
      <Navbar />

      <main className="pt-32 pb-32 relative z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(15,23,42,0.02),transparent_50%)] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="mb-12 animate-fade-in">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm font-medium text-primary-light hover:text-primary transition-colors group bg-surface border border-border-subtle px-4 py-2 rounded-full hover:bg-surface-hover"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Back to Ecosystem
            </Link>
          </div>

          <div className="flex flex-col items-start mb-24 animate-slide-up">
            <h1 className="text-5xl md:text-7xl font-display font-semibold tracking-tighter text-primary mb-6 leading-tight">
              School Boards <span className="text-accent">Curriculum</span>
            </h1>
            <p className="text-lg md:text-xl text-primary-light max-w-3xl font-light leading-relaxed">
              We specialize in CBSE and TBSE frameworks from Class 6 through 12.
              Our architecture is designed to eliminate rote memorization,
              replacing it with deep conceptual mastery required for high board
              scores and future competitive entrance exams.
            </p>
          </div>

          <div className="space-y-16">
            {siteData.classPanels.map((panel, idx) => (
              <div
                key={panel.group}
                className="group relative bg-surface border border-border-subtle hover:border-accent/30 rounded-3xl p-8 lg:p-12 transition-all duration-500 overflow-hidden shadow-card hover:shadow-float"
                style={{ animationDelay: `${idx * 150}ms` }}
              >
                <div className="absolute top-0 right-0 w-125 h-125 bg-accent/5 blur-[120px] rounded-full pointer-events-none group-hover:bg-accent/10 transition-colors duration-700" />

                <div className="relative z-10 flex flex-col xl:flex-row gap-12 lg:gap-16">
                  <div className="xl:w-1/3 flex flex-col justify-between">
                    <div>
                      <span className="inline-block text-[10px] font-bold text-accent bg-accent/10 px-4 py-1.5 rounded-full uppercase tracking-widest border border-accent/20 mb-8">
                        {panel.group} Matrix
                      </span>
                      <h2 className="text-4xl font-display font-semibold text-primary mb-4 tracking-tight">
                        {panel.label}
                      </h2>
                      <h3 className="text-lg font-medium text-primary-light mb-6">
                        {panel.tagline}
                      </h3>
                      <p className="text-sm text-primary-light leading-relaxed font-light">
                        {panel.description}
                      </p>
                    </div>

                    <div className="mt-12">
                      <a
                        href="/#admissions"
                        className="inline-flex items-center justify-center gap-2 bg-primary text-surface px-7 py-3.5 rounded-xl text-sm font-semibold hover:bg-accent transition-all shadow-md group/btn"
                      >
                        Request Fee Structure
                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </a>
                    </div>
                  </div>

                  <div className="xl:w-2/3">
                    {panel.subjects && (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {panel.subjects.map((sub, sIdx) => (
                          <div
                            key={sIdx}
                            className="bg-canvas border border-border-subtle rounded-2xl p-5 flex gap-5 items-start hover:bg-surface-hover transition-colors group/sub"
                          >
                            <div className="p-3 bg-surface rounded-xl border border-border-subtle shrink-0 group-hover/sub:bg-accent/10 group-hover/sub:border-accent/20 transition-colors">
                              {renderIcon(
                                sub.icon,
                                "w-5 h-5 text-primary-light group-hover/sub:text-accent",
                              )}
                            </div>
                            <div>
                              <h4 className="text-sm font-semibold text-primary mb-1.5 transition-colors">
                                {sub.name}
                              </h4>
                              <p className="text-xs text-primary-light leading-relaxed font-light">
                                {sub.desc}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}

                    {panel.streams && (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {panel.streams.map((stream, stIdx) => (
                          <div
                            key={stIdx}
                            className="bg-canvas border border-border-subtle rounded-3xl p-8 hover:bg-surface-hover transition-colors relative overflow-hidden group/stream"
                          >
                            <div className="absolute inset-0 bg-linear-to-br from-accent/5 to-transparent opacity-0 group-hover/stream:opacity-100 transition-opacity duration-500" />

                            <div className="relative z-10 flex items-center gap-4 mb-8 pb-6 border-b border-border-subtle">
                              <div className="p-3 bg-accent/10 rounded-xl border border-accent/20 text-accent">
                                {renderIcon(stream.icon, "w-6 h-6")}
                              </div>
                              <h4 className="text-xl font-display font-semibold text-primary tracking-tight">
                                {stream.name}
                              </h4>
                            </div>

                            <div className="relative z-10 flex flex-col gap-5">
                              {stream.subjects.map((sub, sbKey) => (
                                <div
                                  key={sbKey}
                                  className="flex gap-4 items-start"
                                >
                                  <div className="mt-0.5 p-1.5 bg-surface rounded-lg shrink-0 border border-border-subtle">
                                    {renderIcon(
                                      sub.icon,
                                      "w-3.5 h-3.5 text-primary-light",
                                    )}
                                  </div>
                                  <div>
                                    <h5 className="text-xs font-semibold text-primary mb-1">
                                      {sub.name}
                                    </h5>
                                    <p className="text-[11px] text-primary-light leading-relaxed font-light">
                                      {sub.desc}
                                    </p>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
