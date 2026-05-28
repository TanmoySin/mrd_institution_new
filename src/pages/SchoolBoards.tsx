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

// Strictly typed icon mapping
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

// Extracted types for strict TS compliance
interface SubjectData {
  name: string;
  desc: string;
  icon: string;
}

interface StreamData {
  name: string;
  icon: string;
  subjects: SubjectData[];
}

interface PanelData {
  group: string;
  label: string;
  tagline: string;
  description: string;
  subjects?: SubjectData[];
  streams?: StreamData[];
}

export default function SchoolBoards(): JSX.Element {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const renderIcon = (name: string, css: string) => {
    const IconComponent = iconMap[name] || BookOpen;
    return <IconComponent className={css} aria-hidden="true" />;
  };

  // Pre-calculated Tailwind v4 utility delays to avoid inline style objects
  const entryDelays = [
    "delay-[150ms]",
    "delay-[300ms]",
    "delay-[450ms]",
    "delay-[600ms]",
    "delay-[750ms]",
  ];

  return (
    <div className="relative min-h-screen bg-slate-50 selection:bg-blue-100 selection:text-blue-900 font-sans">
      <Navbar />

      <main className="pt-32 pb-32 relative z-10 overflow-hidden">
        {/* Soft radial atmospheric glow */}
        <div
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,var(--color-blue-500)_0%,transparent_50%)] opacity-[0.03] pointer-events-none"
          aria-hidden="true"
        />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Back Navigation with Tailwind v4 starting:* animation modifiers */}
          <div className="mb-12 transition-all duration-700 ease-out opacity-100 translate-x-0 starting:opacity-0 starting:-translate-x-4">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-blue-600 transition-all duration-200 ease-in-out group bg-white border border-slate-200 px-5 py-2.5 rounded-full hover:shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-200 ease-in-out" />
              Back to Ecosystem
            </Link>
          </div>

          {/* Hero Section */}
          <div className="flex flex-col items-start mb-24 transition-all duration-700 delay-100 ease-out opacity-100 translate-y-0 starting:opacity-0 starting:translate-y-8">
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-slate-900 mb-6 leading-[1.1]">
              School Boards{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600">
                Curriculum
              </span>
            </h1>
            <p className="text-lg md:text-xl text-slate-500 max-w-3xl font-medium leading-relaxed">
              We specialize in CBSE and TBSE frameworks from Class 6 through 12.
              Our architecture is designed to eliminate rote memorization,
              replacing it with deep conceptual mastery required for high board
              scores and future competitive entrance exams.
            </p>
          </div>

          {/* Data Panels */}
          <div className="space-y-12">
            {(siteData.classPanels as PanelData[]).map((panel, idx) => (
              <div
                key={panel.group}
                className={`group relative bg-white border border-slate-100 hover:border-blue-100 rounded-3xl p-8 lg:p-12 transition-all duration-700 ease-out overflow-hidden shadow-sm hover:shadow-md opacity-100 translate-y-0 starting:opacity-0 starting:translate-y-12 ${entryDelays[idx] || "delay-[150ms]"}`}
              >
                {/* Decorative background flare */}
                <div
                  className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-50 blur-[120px] rounded-full pointer-events-none group-hover:bg-violet-50 transition-colors duration-700 translate-x-1/3 -translate-y-1/3"
                  aria-hidden="true"
                />

                <div className="relative z-10 flex flex-col xl:flex-row gap-12 lg:gap-16">
                  {/* Left Column: Context & CTA */}
                  <div className="xl:w-1/3 flex flex-col justify-between">
                    <div>
                      <span className="inline-block text-[11px] font-bold text-blue-600 bg-blue-50 px-4 py-1.5 rounded-full uppercase tracking-widest border border-blue-100 mb-8">
                        {panel.group} Matrix
                      </span>
                      <h2 className="text-4xl font-black text-slate-900 mb-4 tracking-tight">
                        {panel.label}
                      </h2>
                      <h3 className="text-lg font-bold text-slate-700 mb-6">
                        {panel.tagline}
                      </h3>
                      <p className="text-sm text-slate-500 leading-relaxed font-medium">
                        {panel.description}
                      </p>
                    </div>

                    <div className="mt-10">
                      <a
                        href="/#admissions"
                        className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-7 py-3.5 rounded-2xl text-sm font-semibold transition-all duration-200 ease-in-out shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 group/btn w-fit"
                      >
                        Request Fee Structure
                        <ArrowRight
                          className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-200 ease-in-out"
                          aria-hidden="true"
                        />
                      </a>
                    </div>
                  </div>

                  {/* Right Column: Grid Content */}
                  <div className="xl:w-2/3">
                    {/* Render Subjects Layout */}
                    {panel.subjects && (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {panel.subjects.map((sub, sIdx) => (
                          <div
                            key={sIdx}
                            className="bg-slate-50 border border-slate-100 rounded-2xl p-5 flex gap-5 items-start hover:bg-white hover:border-blue-100 hover:shadow-sm transition-all duration-200 ease-in-out group/sub"
                          >
                            <div className="p-3 bg-white rounded-xl border border-slate-100 shrink-0 group-hover/sub:bg-blue-50 group-hover/sub:border-blue-100 transition-colors duration-200 shadow-sm">
                              {renderIcon(
                                sub.icon,
                                "w-5 h-5 text-slate-400 group-hover/sub:text-blue-600 transition-colors duration-200",
                              )}
                            </div>
                            <div>
                              <h4 className="text-sm font-bold text-slate-900 mb-1.5 group-hover/sub:text-blue-600 transition-colors duration-200">
                                {sub.name}
                              </h4>
                              <p className="text-xs text-slate-500 leading-relaxed font-medium">
                                {sub.desc}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Render Streams Layout (For Class 11-12 usually) */}
                    {panel.streams && (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {panel.streams.map((stream, stIdx) => (
                          <div
                            key={stIdx}
                            className="bg-slate-50 border border-slate-100 rounded-3xl p-8 hover:bg-white hover:border-blue-100 hover:shadow-md hover:-translate-y-1 transition-all duration-300 ease-in-out relative overflow-hidden group/stream"
                          >
                            <div
                              className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent opacity-0 group-hover/stream:opacity-100 transition-opacity duration-500 pointer-events-none"
                              aria-hidden="true"
                            />

                            <div className="relative z-10 flex items-center gap-4 mb-8 pb-6 border-b border-slate-200/60">
                              <div className="p-3 bg-white rounded-xl border border-slate-100 text-blue-600 shadow-sm group-hover/stream:bg-blue-50 group-hover/stream:border-blue-100 transition-colors duration-200">
                                {renderIcon(stream.icon, "w-6 h-6")}
                              </div>
                              <h4 className="text-xl font-black text-slate-900 tracking-tight group-hover/stream:text-blue-600 transition-colors duration-200">
                                {stream.name}
                              </h4>
                            </div>

                            <div className="relative z-10 flex flex-col gap-6">
                              {stream.subjects.map((sub, sbKey) => (
                                <div
                                  key={sbKey}
                                  className="flex gap-4 items-start"
                                >
                                  <div className="mt-0.5 p-1.5 bg-white rounded-lg shrink-0 border border-slate-100 shadow-sm group-hover/stream:border-blue-100 group-hover/stream:bg-blue-50 transition-colors duration-200">
                                    {renderIcon(
                                      sub.icon,
                                      "w-3.5 h-3.5 text-slate-400 group-hover/stream:text-blue-600 transition-colors duration-200",
                                    )}
                                  </div>
                                  <div>
                                    <h5 className="text-xs font-bold text-slate-900 mb-1">
                                      {sub.name}
                                    </h5>
                                    <p className="text-[11px] text-slate-500 leading-relaxed font-medium">
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
