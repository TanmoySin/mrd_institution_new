import { useEffect, useState, useRef } from "react";
import * as Icons from "lucide-react";
import { siteData } from "../../config/data";

function CountUp({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const duration = 1500;
          const startTime = performance.now();
          const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            if (elapsed >= duration) {
              setCount(value);
              return;
            }
            const progress = Math.pow(elapsed / duration, 0.5);
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
  }, [value, hasAnimated]);

  return (
    <span
      ref={ref}
      className="tabular-nums font-display font-black tracking-tighter"
    >
      {count}
      {suffix}
    </span>
  );
}

export default function StatsBar() {
  const renderIcon = (name: string) => {
    const Icon = (Icons as any)[name];
    return Icon ? (
      <Icon className="w-6 h-6" />
    ) : (
      <Icons.Activity className="w-6 h-6" />
    );
  };

  return (
    <section className="bg-primary text-surface py-16 px-6 relative z-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
        {siteData.stats.map((stat, i) => (
          <div key={i} className="flex items-center gap-5">
            <div className="p-4 rounded-2xl bg-surface/10 text-accent">
              {renderIcon(stat.icon)}
            </div>
            <div className="flex flex-col">
              <div className="text-4xl text-surface leading-none mb-1">
                <CountUp value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-xs font-bold uppercase tracking-wider text-surface/70">
                {stat.label}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
