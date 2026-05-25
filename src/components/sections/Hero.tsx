import React, { useState, useEffect, type JSX } from "react";
import { ArrowRight, Award, Bell } from "lucide-react";
import { siteData } from "../../config/data";

export interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const calculateTimeLeft = (targetDate: string): TimeLeft => {
  const diff = new Date(targetDate).getTime() - Date.now();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
};

const pad = (n: number): string => String(n).padStart(2, "0");

export default function Hero(): JSX.Element {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(() =>
    calculateTimeLeft(siteData.hero.nextBatchDate),
  );

  useEffect(() => {
    const target = new Date(siteData.hero.nextBatchDate).getTime();

    const interval = setInterval(() => {
      const diff = target - Date.now();
      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        clearInterval(interval);
        return;
      }
      setTimeLeft(calculateTimeLeft(siteData.hero.nextBatchDate));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[95vh] flex flex-col justify-end pt-32 bg-slate-50 dark:bg-slate-900 overflow-hidden selection:bg-blue-500/30">
      <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"
        aria-hidden="true"
      />

      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/10 dark:bg-blue-500/20 blur-[120px] rounded-full pointer-events-none translate-x-1/3 -translate-y-1/3"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-emerald-500/10 dark:bg-emerald-500/15 blur-[100px] rounded-full pointer-events-none -translate-x-1/3 translate-y-1/3"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10 flex-1 flex flex-col xl:flex-row items-center justify-center gap-12 xl:gap-20 pb-24">
        <div className="flex-1 w-full flex flex-col items-start text-left animate-in fade-in slide-in-from-bottom-8 duration-700 ease-out">
          <div className="inline-flex items-center gap-2.5 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-slate-200 dark:border-slate-700 rounded-full px-4 py-2 text-xs font-bold text-slate-800 dark:text-slate-200 shadow-sm mb-8">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
            </span>
            2026 Batch Intake Active
          </div>

          <h1 className="text-5xl sm:text-6xl xl:text-7xl font-black tracking-tighter text-slate-900 dark:text-white leading-[1.05] mb-6">
            {siteData.hero.headline}{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
              {siteData.hero.highlightWord}
            </span>
          </h1>

          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-xl font-medium leading-relaxed mb-10">
            {siteData.hero.subheadline}
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <a
              href="#categories"
              className="group w-full sm:w-auto flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl text-sm font-bold uppercase tracking-wider transition-all shadow-lg shadow-blue-900/20 hover:shadow-blue-900/40 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-500/50"
            >
              Explore Matrix
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1.5" />
            </a>
            <a
              href="#admissions"
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 px-8 py-4 rounded-xl text-sm font-bold uppercase tracking-wider hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-all shadow-sm focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-slate-500/30"
            >
              Admission Inquiry
            </a>
          </div>
        </div>

        <div className="w-full max-w-[450px] xl:w-[450px] shrink-0 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-150 ease-out fill-mode-both">
          <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl border border-slate-200 dark:border-slate-700 rounded-3xl p-8 shadow-2xl shadow-slate-900/10 dark:shadow-slate-900/40 relative overflow-hidden">
            <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500" />

            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-slate-500 dark:text-slate-400">
                <Bell className="w-4 h-4 text-blue-500 dark:text-blue-400" />
                Capacity Lock Timer
              </div>
            </div>

            <div className="grid grid-cols-4 gap-3">
              {[
                { label: "Days", value: pad(timeLeft.days) },
                { label: "Hours", value: pad(timeLeft.hours) },
                { label: "Mins", value: pad(timeLeft.minutes) },
                { label: "Secs", value: pad(timeLeft.seconds) },
              ].map((unit) => (
                <div key={unit.label} className="flex flex-col items-center">
                  <div className="w-full bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-700 rounded-2xl py-4 text-center shadow-inner transition-colors">
                    <span className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tabular-nums tracking-tighter">
                      {unit.value}
                    </span>
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 mt-3">
                    {unit.label}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-8 p-4 bg-slate-50 dark:bg-slate-900/50 rounded-xl border border-slate-100 dark:border-slate-700/50">
              <p className="text-xs text-slate-600 dark:text-slate-400 font-medium text-center leading-relaxed">
                Seats are strictly restricted per batch to ensure uncompromising
                mentorship quality.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full border-t border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 backdrop-blur-md py-4 z-20 relative flex overflow-hidden group">
        <div className="animate-marquee flex whitespace-nowrap group-hover:[animation-play-state:paused]">
          {[0, 1, 2].map((iteration) => (
            <React.Fragment key={iteration}>
              {siteData.hero.topperResults.map((t, i) => (
                <div
                  key={`${iteration}-${i}`}
                  aria-hidden={iteration !== 0}
                  className="inline-flex items-center gap-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-5 py-2 mx-3 shadow-sm transition-colors hover:border-blue-300 dark:hover:border-blue-700"
                >
                  <Award className="w-4 h-4 text-amber-500" />
                  <span className="text-sm font-bold text-slate-900 dark:text-white">
                    {t.name}
                  </span>
                  <span className="text-[10px] font-black uppercase tracking-widest text-white bg-slate-900 dark:bg-slate-100 dark:text-slate-900 px-2.5 py-1 rounded-md">
                    {t.score}
                  </span>
                  <span className="text-xs font-medium text-slate-500 dark:text-slate-400 border-l border-slate-200 dark:border-slate-700 pl-3">
                    {t.class} ({t.board})
                  </span>
                </div>
              ))}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
