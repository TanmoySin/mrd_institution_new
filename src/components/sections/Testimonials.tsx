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
      className="py-32 bg-slate-50 relative z-10 px-6 overflow-hidden selection:bg-blue-100 selection:text-blue-900"
      aria-label="Student Testimonials"
    >
      {/* Subtle background radial */}
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.03),transparent_70%)] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 animate-slide-up opacity-0 [animation-fill-mode:both]">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-100 px-4 py-1.5 rounded-full mb-4">
            Student Verdict
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-4">
            Transformative Results
          </h2>
        </div>

        {/* Carousel Container */}
        <div
          className="relative opacity-0 animate-slide-up [animation-delay:200ms] [animation-fill-mode:both]"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onFocus={() => setIsPaused(true)}
          onBlur={() => setIsPaused(false)}
          role="region"
          aria-roledescription="carousel"
        >
          <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-card border border-slate-100 relative overflow-hidden min-h-[320px] flex flex-col">
            {/* Decorative Watermark Quote */}
            <Quote
              className="absolute top-8 right-8 w-32 h-32 text-slate-50/80 -rotate-12 pointer-events-none"
              aria-hidden="true"
            />

            {/* Active Testimonial Card */}
            <div
              key={activeIndex}
              className="relative z-10 flex flex-col grow animate-fade-in opacity-0 [animation-fill-mode:both]"
              aria-live="polite"
            >
              <div className="flex items-center gap-1.5 mb-8">
                {[...Array(5)].map((_, sIdx) => (
                  <Star
                    key={sIdx}
                    className={`w-5 h-5 ${
                      sIdx < data[activeIndex].rating
                        ? "fill-amber-400 text-amber-400"
                        : "fill-slate-100 text-slate-100"
                    }`}
                    aria-hidden="true"
                  />
                ))}
              </div>

              <p className="text-xl sm:text-2xl text-slate-800 font-medium leading-relaxed tracking-tight mb-10 grow">
                &quot;{data[activeIndex].quote}&quot;
              </p>

              <div className="flex items-center justify-between pt-6 border-t border-slate-100">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 shrink-0 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-sm font-bold text-blue-600 shadow-sm">
                    {data[activeIndex].initials}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 tracking-wide">
                      {data[activeIndex].name}
                    </h4>
                    <p className="text-xs text-slate-500 font-medium mt-0.5">
                      {data[activeIndex].role}
                    </p>
                  </div>
                </div>
                <div className="hidden sm:block text-[10px] font-bold uppercase tracking-widest bg-slate-50 border border-slate-200 text-slate-500 px-3 py-1.5 rounded-lg">
                  {data[activeIndex].board} Syllabus
                </div>
              </div>
            </div>
          </div>

          {/* Carousel Pagination Dots */}
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
                    ? "bg-blue-600 w-8"
                    : "bg-slate-200 hover:bg-slate-300 w-2.5"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
