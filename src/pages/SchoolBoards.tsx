import React, { useEffect, type JSX } from "react";
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

const iconMap: Record<string, React.ElementType> = {
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

export default function SchoolBoards(): JSX.Element {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const renderIcon = (name: string, css: string) => {
    const IconComponent = iconMap[name] || BookOpen;
    return <IconComponent className={css} aria-hidden="true" />;
  };

  return (
    <div className="relative min-h-screen bg-slate-50 dark:bg-slate-900 selection:bg-blue-500/30">
      <Navbar />

      <main className="pt-32 pb-32 relative z-10 overflow-hidden">
        <div
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(37,99,235,0.08),transparent_50%)] pointer-events-none"
          aria-hidden="true"
        />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="mb-12 animate-in fade-in slide-in-from-left-4 duration-500 ease-out">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm font-bold text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors group bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-5 py-2.5 rounded-full hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1.5 transition-transform" />
              Back to Ecosystem
            </Link>
          </div>

          <div className="flex flex-col items-start mb-24 animate-in fade-in slide-in-from-bottom-8 duration-700 ease-out delay-100 fill-mode-both">
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-slate-900 dark:text-white mb-6 leading-[1.1]">
              School Boards{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
                Curriculum
              </span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-3xl font-medium leading-relaxed">
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
                className="group relative bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-700/50 rounded-3xl p-8 lg:p-12 transition-all duration-500 overflow-hidden shadow-xl shadow-slate-900/5 dark:shadow-slate-900/40 animate-in fade-in slide-in-from-bottom-12 fill-mode-both"
                style={{ animationDelay: `${(idx + 2) * 150}ms` }}
              >
                <div
                  className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/5 dark:bg-blue-500/10 blur-[120px] rounded-full pointer-events-none group-hover:bg-blue-500/10 dark:group-hover:bg-blue-500/20 transition-colors duration-700 translate-x-1/3 -translate-y-1/3"
                  aria-hidden="true"
                />

                <div className="relative z-10 flex flex-col xl:flex-row gap-12 lg:gap-16">
                  <div className="xl:w-1/3 flex flex-col justify-between">
                    <div>
                      <span className="inline-block text-[10px] font-bold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 px-4 py-1.5 rounded-full uppercase tracking-widest border border-blue-200 dark:border-blue-800/50 mb-8">
                        {panel.group} Matrix
                      </span>
                      <h2 className="text-4xl font-black text-slate-900 dark:text-white mb-4 tracking-tight">
                        {panel.label}
                      </h2>
                      <h3 className="text-lg font-bold text-slate-600 dark:text-slate-300 mb-6">
                        {panel.tagline}
                      </h3>
                      <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
                        {panel.description}
                      </p>
                    </div>

                    <div className="mt-12">
                      <a
                        href="/#admissions"
                        className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-7 py-3.5 rounded-xl text-sm font-bold uppercase tracking-wider transition-all shadow-lg shadow-blue-900/20 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-500/50 group/btn w-fit"
                      >
                        Request Fee Structure
                        <ArrowRight
                          className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform"
                          aria-hidden="true"
                        />
                      </a>
                    </div>
                  </div>

                  <div className="xl:w-2/3">
                    {panel.subjects && (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {panel.subjects.map((sub, sIdx) => (
                          <div
                            key={sIdx}
                            className="bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700/50 rounded-2xl p-5 flex gap-5 items-start hover:bg-white dark:hover:bg-slate-800 hover:border-blue-200 dark:hover:border-blue-800 hover:shadow-md transition-all group/sub"
                          >
                            <div className="p-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shrink-0 group-hover/sub:bg-blue-50 dark:group-hover/sub:bg-blue-900/20 group-hover/sub:border-blue-200 dark:group-hover/sub:border-blue-800 transition-colors shadow-sm">
                              {renderIcon(
                                sub.icon,
                                "w-5 h-5 text-slate-500 dark:text-slate-400 group-hover/sub:text-blue-600 dark:group-hover/sub:text-blue-400 transition-colors",
                              )}
                            </div>
                            <div>
                              <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-1.5 group-hover/sub:text-blue-600 dark:group-hover/sub:text-blue-400 transition-colors">
                                {sub.name}
                              </h4>
                              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
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
                            className="bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700/50 rounded-3xl p-8 hover:bg-white dark:hover:bg-slate-800 hover:border-blue-300 dark:hover:border-blue-700 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group/stream"
                          >
                            <div
                              className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover/stream:opacity-100 transition-opacity duration-500 pointer-events-none"
                              aria-hidden="true"
                            />

                            <div className="relative z-10 flex items-center gap-4 mb-8 pb-6 border-b border-slate-200 dark:border-slate-700/50">
                              <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-xl border border-blue-200 dark:border-blue-800/50 text-blue-600 dark:text-blue-400 shadow-inner">
                                {renderIcon(stream.icon, "w-6 h-6")}
                              </div>
                              <h4 className="text-xl font-black text-slate-900 dark:text-white tracking-tight group-hover/stream:text-blue-600 dark:group-hover/stream:text-blue-400 transition-colors">
                                {stream.name}
                              </h4>
                            </div>

                            <div className="relative z-10 flex flex-col gap-5">
                              {stream.subjects.map((sub, sbKey) => (
                                <div
                                  key={sbKey}
                                  className="flex gap-4 items-start"
                                >
                                  <div className="mt-0.5 p-1.5 bg-white dark:bg-slate-800 rounded-lg shrink-0 border border-slate-200 dark:border-slate-700 shadow-sm group-hover/stream:border-blue-200 dark:group-hover/stream:border-blue-800/50 transition-colors">
                                    {renderIcon(
                                      sub.icon,
                                      "w-3.5 h-3.5 text-slate-400 dark:text-slate-500 group-hover/stream:text-blue-500 transition-colors",
                                    )}
                                  </div>
                                  <div>
                                    <h5 className="text-xs font-bold text-slate-900 dark:text-white mb-1">
                                      {sub.name}
                                    </h5>
                                    <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
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
