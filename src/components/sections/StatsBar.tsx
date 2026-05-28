import { useEffect, useState, useRef, type JSX } from "react";
import * as Icons from "lucide-react";
import { type LucideIcon } from "lucide-react";
import { siteData } from "../../config/data";

export interface CountUpProps {
  value: number;
  suffix: string;
}

function CountUp({ value, suffix }: CountUpProps): JSX.Element {
  const [count, setCount] = useState<number>(0);
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef<boolean>(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const duration = 2000;
          const startTime = performance.now();

          const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            if (elapsed >= duration) {
              setCount(value);
              return;
            }
            const progress =
              elapsed === duration
                ? 1
                : 1 - Math.pow(2, (-10 * elapsed) / duration);
            setCount(Math.floor(progress * value));
            requestAnimationFrame(animate);
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.1 },
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value]);

  return (
    <span ref={ref} className="tabular-nums font-extrabold tracking-tighter">
      {count}
      <span className="text-blue-600">{suffix}</span>
    </span>
  );
}

export default function StatsBar(): JSX.Element {
  const renderIcon = (name: string): JSX.Element => {
    const IconComponent =
      (Icons as unknown as Record<string, LucideIcon>)[name] || Icons.Activity;
    return <IconComponent className="w-6 h-6" aria-hidden="true" />;
  };

  return (
    <section className="relative py-24 bg-white overflow-hidden z-10 selection:bg-blue-100 selection:text-blue-900">
      {/* Soft ambient background glow */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-64 bg-blue-50/50 blur-[100px] rounded-full pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {siteData.stats.map((stat, i) => (
            <div
              key={i}
              className="group flex items-center gap-5 p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-blue-100 hover:shadow-card hover:-translate-y-1 transition-all duration-400 ease-out opacity-0 animate-slide-up [animation-fill-mode:both]"
              style={{ animationDelay: `${i * 150}ms` }}
            >
              <div className="flex items-center justify-center shrink-0 w-16 h-16 rounded-xl bg-white border border-slate-100 text-blue-500 group-hover:bg-blue-50 group-hover:text-blue-600 group-hover:scale-110 group-hover:-rotate-3 transition-all duration-400 shadow-sm">
                {renderIcon(stat.icon)}
              </div>
              <div className="flex flex-col">
                <div className="text-4xl text-slate-900 leading-none mb-1.5">
                  <CountUp value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-[11px] font-bold uppercase tracking-widest text-slate-500 group-hover:text-blue-600 transition-colors duration-300">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
