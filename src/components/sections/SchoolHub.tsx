import {
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
  ArrowRight,
} from "lucide-react";
import { siteData } from "../../config/data";
import SubjectBranch from "../ui/SubjectBranch";

// Safe, Tree-shakeable Icon Dictionary
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

export default function SchoolHub() {
  const renderIcon = (name: string, css: string) => {
    const IconComponent = iconMap[name] || BookOpen;
    return <IconComponent className={css} />;
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start animate-fade-in">
      {siteData.classPanels.map((panel, idx) => (
        <div
          key={panel.group}
          className="bg-surface border border-border-subtle rounded-3xl p-6 relative shadow-card flex flex-col justify-between min-h-145 transition-all duration-300 hover:shadow-float hover:-translate-y-1"
          style={{ animationDelay: `${idx * 150}ms` }}
        >
          <div>
            <div className="mb-6">
              <span className="text-[10px] font-black text-primary-light bg-canvas px-3 py-1 rounded-lg uppercase tracking-widest border border-border-subtle">
                {panel.group === "6-8"
                  ? "Phase 1: Groundwork"
                  : panel.group === "9-10"
                    ? "Phase 2: Board Focus"
                    : "Phase 3: Stream Mastery"}
              </span>
              <h3 className="text-3xl font-display font-black text-primary mt-4 tracking-tight">
                {panel.label}
              </h3>
              <p className="text-xs text-accent font-bold uppercase tracking-wider mt-1.5">
                {panel.tagline}
              </p>
            </div>

            {/* Base Subjects */}
            {panel.subjects && (
              <div className="flex flex-wrap gap-2 mb-6">
                {panel.subjects.map((sub, sIdx) => (
                  <div
                    key={sIdx}
                    className="inline-flex items-center gap-2 bg-canvas hover:bg-white border border-border-subtle rounded-xl px-3.5 py-2 text-xs font-bold text-primary shadow-sm transition-colors cursor-default"
                  >
                    {renderIcon(sub.icon, "w-4 h-4 text-accent")}
                    {sub.name}
                  </div>
                ))}
              </div>
            )}

            {/* Class 9-10 Specialized Science Split (If available in data.ts) */}
            {panel.group === "9-10" && panel.scienceTracks && (
              <div className="mt-8 pt-6 border-t border-border-subtle space-y-4">
                <SubjectBranch />
                <div className="grid grid-cols-1 gap-3 relative z-10">
                  {panel.scienceTracks.map((track, tIdx) => (
                    <div
                      key={tIdx}
                      className={`rounded-xl border p-4 transition-all duration-300 hover:scale-[1.02] bg-surface shadow-sm hover:shadow-card ${track.bgClass || ""} border-transparent`}
                    >
                      <div className="flex items-start gap-3">
                        <div
                          className={`p-2.5 rounded-xl bg-surface shadow-sm ${track.colorClass || "text-primary"}`}
                        >
                          {renderIcon(track.icon, "w-4 h-4")}
                        </div>
                        <div>
                          <h4
                            className={`text-sm font-black uppercase tracking-wider ${track.colorClass || "text-primary"}`}
                          >
                            {track.name} Division
                          </h4>
                          <p className="text-xs text-primary-light mt-1.5 font-medium leading-relaxed">
                            {track.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Class 11-12 Streams (Fixed the subName object mapping error) */}
            {panel.group === "11-12" && panel.streams && (
              <div className="space-y-4 mt-4">
                {panel.streams.map((stream, stIdx) => (
                  <div
                    key={stIdx}
                    className={`p-5 rounded-2xl border transition-all duration-300 hover:shadow-md bg-canvas ${stream.color || ""}`}
                  >
                    <div className="flex items-center gap-2 mb-3">
                      {renderIcon(stream.icon, "w-5 h-5 text-primary")}
                      <h4 className="text-sm font-black uppercase tracking-wider text-primary">
                        {stream.name}
                      </h4>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {stream.subjects.map((sub, sbKey) => (
                        <span
                          key={sbKey}
                          className="text-[10px] font-bold bg-surface border border-border-subtle px-2.5 py-1 rounded-md text-primary-light shadow-sm"
                        >
                          {sub.name}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="mt-8 pt-6 border-t border-border-subtle">
            <a
              href="#admissions"
              className="w-full flex items-center justify-center gap-2 bg-canvas hover:bg-accent text-primary hover:text-surface py-4 rounded-xl text-xs font-black uppercase tracking-widest transition-all duration-300 group"
            >
              {panel.group === "11-12"
                ? "Consult Stream Advisor"
                : "Request Syllabus Details"}
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}
