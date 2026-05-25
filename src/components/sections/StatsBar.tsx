import { useEffect, useState, useRef, type JSX } from "react";
import * as Icons from "lucide-react";
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
    <span ref={ref} className="tabular-nums font-black tracking-tighter">
      {count}
      <span className="text-blue-400">{suffix}</span>
    </span>
  );
}

export default function StatsBar(): JSX.Element {
  const renderIcon = (name: string) => {
    const Icon = (Icons as any)[name] || Icons.Activity;
    return <Icon className="w-6 h-6" aria-hidden="true" />;
  };

  return (
    <section className="relative py-24 bg-slate-900 overflow-hidden z-10 selection:bg-blue-500/30">
      <div
        className="absolute inset-0 opacity-[0.07] pointer-events-none mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"
        aria-hidden="true"
      />

      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent opacity-50" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-500/10 to-transparent opacity-50" />

      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-64 bg-blue-500/10 blur-[120px] rounded-full pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {siteData.stats.map((stat, i) => (
            <div
              key={i}
              className="group flex items-center gap-5 p-6 rounded-2xl bg-slate-800/40 border border-slate-700/50 backdrop-blur-md hover:bg-slate-800/80 hover:border-blue-500/30 hover:shadow-2xl hover:shadow-blue-900/20 transition-all duration-500 animate-in fade-in slide-in-from-bottom-8 fill-mode-both"
              style={{ animationDelay: `${i * 150}ms` }}
            >
              <div className="flex items-center justify-center shrink-0 w-16 h-16 rounded-xl bg-slate-900/50 border border-slate-700/50 text-blue-400 group-hover:bg-blue-500/10 group-hover:text-blue-300 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-inner">
                {renderIcon(stat.icon)}
              </div>
              <div className="flex flex-col">
                <div className="text-4xl text-white leading-none mb-2">
                  <CountUp value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-[11px] font-bold uppercase tracking-widest text-slate-400 group-hover:text-slate-300 transition-colors duration-300">
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
