import { useEffect, useState } from "react";
import { Star, Quote } from "lucide-react";
import { siteData } from "../../config/data";

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const data = siteData.testimonials;

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % data.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isPaused, data.length]);

  return (
    <section
      id="testimonials"
      className="py-32 bg-primary relative z-10 px-6 overflow-hidden"
    >
      <div className="absolute inset-0 hero-pattern opacity-10 pointer-events-none invert" />

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-surface bg-surface/20 px-3 py-1 rounded-full mb-4">
            Student Verdict
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-black tracking-tight text-surface">
            Transformative Results
          </h2>
        </div>

        <div
          className="relative min-h-75"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="bg-surface rounded-3xl p-8 sm:p-12 shadow-float transition-all duration-500">
            <Quote className="w-12 h-12 text-border-subtle mb-6" />
            <div className="flex items-center gap-1 mb-6">
              {[...Array(data[activeIndex].rating)].map((_, sIdx) => (
                <Star
                  key={sIdx}
                  className="w-5 h-5 fill-warning text-warning"
                />
              ))}
            </div>
            <p className="text-xl sm:text-2xl text-primary font-medium leading-relaxed tracking-tight mb-8">
              "{data[activeIndex].quote}"
            </p>
            <div className="flex items-center justify-between pt-6 border-t border-border-subtle">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-canvas border border-border-subtle flex items-center justify-center text-sm font-black text-primary">
                  {data[activeIndex].initials}
                </div>
                <div>
                  <h4 className="text-sm font-black text-primary tracking-wide">
                    {data[activeIndex].name}
                  </h4>
                  <p className="text-xs text-primary-light font-medium mt-0.5">
                    {data[activeIndex].role}
                  </p>
                </div>
              </div>
              <div className="hidden sm:block text-[10px] font-black uppercase tracking-widest bg-canvas border border-border-subtle text-primary-light px-3 py-1.5 rounded-lg">
                {data[activeIndex].board} Syllabus
              </div>
            </div>
          </div>

          <div className="flex justify-center gap-3 mt-10">
            {data.map((_, dotIdx) => (
              <button
                key={dotIdx}
                onClick={() => setActiveIndex(dotIdx)}
                className={`transition-all duration-300 h-2.5 rounded-full ${
                  activeIndex === dotIdx
                    ? "bg-accent w-8"
                    : "bg-surface/30 w-2.5 hover:bg-surface/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
