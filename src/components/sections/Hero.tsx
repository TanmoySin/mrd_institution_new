import { useState, useEffect } from "react";
import { ArrowRight, Award, Bell } from "lucide-react";
import { siteData } from "../../config/data";

export default function Hero() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const pad = (n: number) => String(n).padStart(2, "0");

  useEffect(() => {
    const target = new Date(siteData.hero.nextBatchDate).getTime();
    const interval = setInterval(() => {
      const diff = target - Date.now();
      if (diff <= 0) {
        clearInterval(interval);
        return;
      }
      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[95vh] flex flex-col justify-end pt-32 bg-canvas overflow-hidden">
      <div className="absolute inset-0 hero-pattern pointer-events-none" />
      <div className="absolute top-0 right-0 w-150 h-150 bg-accent/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-125 h-125 bg-info/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10 flex-1 flex flex-col lg:flex-row items-center justify-center gap-16 pb-20">
        <div className="flex-1 w-full flex flex-col items-start text-left animate-slide-up">
          <div className="inline-flex items-center gap-2 bg-surface border border-border-subtle rounded-full px-4 py-2 text-xs font-bold text-primary shadow-sm mb-8">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-pulse-ring absolute inline-flex h-full w-full rounded-full bg-success opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-success"></span>
            </span>
            2026 Batch Intake Active
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-black tracking-tighter text-primary leading-[1.05] mb-6">
            {siteData.hero.headline}{" "}
            <span className="text-accent">{siteData.hero.highlightWord}</span>
          </h1>
          <p className="text-lg text-primary-light max-w-xl font-medium leading-relaxed mb-10">
            {siteData.hero.subheadline}
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <a
              href="#categories"
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-primary text-surface px-8 py-4 rounded-xl text-sm font-bold uppercase tracking-wider hover:bg-accent transition-colors shadow-card"
            >
              Explore Matrix
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#admissions"
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-surface text-primary border border-border-subtle px-8 py-4 rounded-xl text-sm font-bold uppercase tracking-wider hover:bg-surface-hover transition-colors shadow-sm"
            >
              Admission Inquiry
            </a>
          </div>
        </div>

        <div
          className="w-full lg:w-112.5 animate-fade-in"
          style={{ animationDelay: "0.2s" }}
        >
          <div className="bg-surface border border-border-subtle rounded-3xl p-8 shadow-card relative overflow-hidden">
            <div className="absolute top-0 inset-x-0 h-1 bg-linear-to-r from-accent via-warning to-info" />
            <div className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-primary-light mb-6">
              <Bell className="w-4 h-4 text-accent" /> Capacity Lock Timer
            </div>
            <div className="grid grid-cols-4 gap-3">
              {[
                { l: "Days", v: pad(timeLeft.days) },
                { l: "Hours", v: pad(timeLeft.hours) },
                { l: "Mins", v: pad(timeLeft.minutes) },
                { l: "Secs", v: pad(timeLeft.seconds), k: timeLeft.seconds },
              ].map((unit, idx) => (
                <div key={idx} className="flex flex-col items-center">
                  <div className="w-full bg-canvas border border-border-subtle rounded-2xl py-4 text-center shadow-inner">
                    <span
                      key={unit.k}
                      className="text-2xl sm:text-3xl font-display font-black text-primary tabular-nums tracking-tighter"
                    >
                      {unit.v}
                    </span>
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-primary-light mt-3">
                    {unit.l}
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-8 p-4 bg-canvas rounded-xl border border-border-subtle">
              <p className="text-xs text-primary-light font-medium text-center leading-relaxed">
                Seats are strictly restricted per batch to ensure uncompromising
                mentorship quality.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full border-t border-border-subtle bg-surface/50 backdrop-blur-md py-4 z-20 relative flex overflow-hidden">
        <div className="animate-marquee flex whitespace-nowrap">
          {[
            ...siteData.hero.topperResults,
            ...siteData.hero.topperResults,
            ...siteData.hero.topperResults,
          ].map((t, i) => (
            <div
              key={i}
              className="inline-flex items-center gap-3 bg-surface border border-border-subtle rounded-xl px-5 py-2 mx-3 shadow-sm"
            >
              <Award className="w-4 h-4 text-accent" />
              <span className="text-sm font-bold text-primary">{t.name}</span>
              <span className="text-[10px] font-black uppercase tracking-widest text-surface bg-primary px-2 py-1 rounded">
                {t.score}
              </span>
              <span className="text-xs font-medium text-primary-light border-l border-border-subtle pl-3">
                {t.class} ({t.board})
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
