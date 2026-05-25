import { useEffect, useState, type JSX } from "react";
import { Star, Quote } from "lucide-react";
import { siteData } from "../../config/data";

export default function Testimonials(): JSX.Element {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const data = siteData.testimonials;

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % data.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isPaused, data.length]);

  return (
    <section
      id="testimonials"
      className="py-32 bg-slate-900 relative z-10 px-6 overflow-hidden selection:bg-blue-500/30"
      aria-label="Student Testimonials"
    >
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(37,99,235,0.15),transparent_70%)] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"
        aria-hidden="true"
      />

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="flex flex-col items-center text-center mb-16 animate-in fade-in slide-in-from-bottom-8 duration-700 ease-out">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-300 bg-blue-900/30 border border-blue-800/50 px-4 py-1.5 rounded-full mb-4 shadow-inner">
            Student Verdict
          </span>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white mb-4">
            Transformative Results
          </h2>
        </div>

        <div
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onFocus={() => setIsPaused(true)}
          onBlur={() => setIsPaused(false)}
          role="region"
          aria-roledescription="carousel"
        >
          <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 sm:p-12 shadow-2xl shadow-blue-900/20 dark:shadow-slate-950/50 border border-slate-100 dark:border-slate-700 relative overflow-hidden transition-colors duration-300 min-h-80 flex flex-col">
            <Quote
              className="absolute top-8 right-8 w-24 h-24 text-slate-100 dark:text-slate-700/50 -rotate-12 pointer-events-none"
              aria-hidden="true"
            />

            <div
              key={activeIndex}
              className="relative z-10 flex flex-col grow animate-in fade-in slide-in-from-right-4 duration-500 ease-out fill-mode-both"
              aria-live="polite"
            >
              <div className="flex items-center gap-1.5 mb-6">
                {[...Array(5)].map((_, sIdx) => (
                  <Star
                    key={sIdx}
                    className={`w-5 h-5 ${
                      sIdx < data[activeIndex].rating
                        ? "fill-amber-400 text-amber-400"
                        : "fill-slate-200 text-slate-200 dark:fill-slate-700 dark:text-slate-700"
                    }`}
                    aria-hidden="true"
                  />
                ))}
              </div>

              <p className="text-xl sm:text-2xl text-slate-800 dark:text-slate-100 font-medium leading-relaxed tracking-tight mb-8 grow">
                &quot;{data[activeIndex].quote}&quot;
              </p>

              <div className="flex items-center justify-between pt-6 border-t border-slate-100 dark:border-slate-700">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 shrink-0 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-sm font-black text-blue-600 dark:text-blue-400 shadow-inner">
                    {data[activeIndex].initials}
                  </div>
                  <div>
                    <h4 className="text-sm font-black text-slate-900 dark:text-white tracking-wide">
                      {data[activeIndex].name}
                    </h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 font-medium mt-0.5">
                      {data[activeIndex].role}
                    </p>
                  </div>
                </div>
                <div className="hidden sm:block text-[10px] font-black uppercase tracking-widest bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-400 px-3 py-1.5 rounded-lg">
                  {data[activeIndex].board} Syllabus
                </div>
              </div>
            </div>
          </div>

          <div
            className="flex justify-center gap-3 mt-10"
            role="tablist"
            aria-label="Select testimonial"
          >
            {data.map((_, dotIdx) => (
              <button
                key={dotIdx}
                role="tab"
                aria-selected={activeIndex === dotIdx}
                aria-label={`Go to testimonial ${dotIdx + 1}`}
                onClick={() => setActiveIndex(dotIdx)}
                className={`transition-all duration-300 h-2.5 rounded-full focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-500/50 ${
                  activeIndex === dotIdx
                    ? "bg-blue-500 w-8"
                    : "bg-slate-700/30 hover:bg-slate-700/50 dark:bg-slate-600/50 dark:hover:bg-slate-500 w-2.5"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
