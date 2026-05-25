import React, { useState, useRef, useEffect, type JSX } from "react";
import * as Icons from "lucide-react";
import { Link } from "react-router-dom";
import { siteData } from "../../config/data";

export default function CategoryMatrix(): JSX.Element {
  const [toast, setToast] = useState({ show: false, msg: "" });
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  const renderIcon = (iconName: string) => {
    const Icon = (Icons as any)[iconName] || Icons.Grid;
    return <Icon className="w-5 h-5" aria-hidden="true" />;
  };

  const handleSoonClick = (e: React.MouseEvent, name: string) => {
    e.preventDefault();
    setToast({
      show: true,
      msg: `${name} matrix is locked for the next phase.`,
    });

    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(
      () => setToast({ show: false, msg: "" }),
      3000,
    );
  };

  return (
    <section
      id="categories"
      className="relative py-32 bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 z-10 overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(37,99,235,0.05),transparent_50%)] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center mb-16 animate-in fade-in slide-in-from-bottom-8 duration-700 ease-out">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/30 px-4 py-1.5 rounded-full mb-4">
            Curriculum Ecosystem
          </span>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900 dark:text-white mb-4">
            Academic Pathways Selector
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base max-w-2xl font-medium leading-relaxed">
            Select a learning pathway to explore our highly structured syllabus
            architecture, core methodologies, and enrollment benchmarks.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 mb-16">
          {siteData.examCategories.map((category, index) => {
            const isAvailable = category.status === "active";
            const isSoon = category.status === "coming-soon";
            const isFeatured = category.id === "school-boards";

            const CardWrapper = isAvailable ? Link : "div";

            const baseClasses =
              "group relative text-left p-6 rounded-2xl transition-all duration-300 overflow-hidden flex flex-col justify-between min-h-[220px] block focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-500/50";

            const stateClasses = isFeatured
              ? "bg-gradient-to-br from-blue-600 to-indigo-700 border border-blue-500 shadow-xl shadow-blue-900/20 scale-[1.02] hover:-translate-y-1.5"
              : isSoon
                ? "bg-white/50 dark:bg-slate-800/30 border border-slate-200 dark:border-slate-800 opacity-60 grayscale-[20%] cursor-not-allowed"
                : "bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-700 hover:shadow-lg hover:shadow-slate-900/5 dark:hover:shadow-slate-900/40 hover:-translate-y-1.5";

            return (
              <CardWrapper
                key={category.id}
                to={isAvailable ? category.link : ""}
                onClick={
                  !isAvailable
                    ? (e) => handleSoonClick(e, category.name)
                    : undefined
                }
                aria-disabled={!isAvailable}
                className={`${baseClasses} ${stateClasses} animate-in fade-in slide-in-from-bottom-8 duration-700 fill-mode-both`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {isFeatured && (
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.15),transparent_60%)] pointer-events-none" />
                )}

                <div>
                  <div className="flex items-start justify-between w-full relative z-10 mb-6">
                    <div
                      className={`p-2.5 rounded-xl transition-colors ${
                        isFeatured
                          ? "bg-white/20 text-white backdrop-blur-sm"
                          : "bg-slate-50 dark:bg-slate-900 text-slate-500 dark:text-slate-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 group-hover:bg-blue-50 dark:group-hover:bg-blue-900/20"
                      }`}
                    >
                      {renderIcon(category.icon)}
                    </div>
                    <span
                      className={`text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider ${
                        isFeatured
                          ? "bg-white/20 text-white border border-white/20 backdrop-blur-sm"
                          : "bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-400"
                      }`}
                    >
                      {category.badge}
                    </span>
                  </div>

                  <div className="relative z-10">
                    <h3
                      className={`text-sm font-black uppercase tracking-wider mb-2 transition-colors ${
                        isFeatured
                          ? "text-white"
                          : "text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400"
                      }`}
                    >
                      {category.name}
                    </h3>
                    <p
                      className={`text-xs line-clamp-3 leading-relaxed font-medium ${
                        isFeatured
                          ? "text-blue-100"
                          : "text-slate-500 dark:text-slate-400"
                      }`}
                    >
                      {category.description}
                    </p>
                  </div>
                </div>

                <div className="relative z-10 mt-6 pt-4 border-t border-slate-200 dark:border-slate-700/50 flex justify-end">
                  {isAvailable ? (
                    <Icons.ArrowRight
                      className={`w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5 ${
                        isFeatured
                          ? "text-white"
                          : "text-slate-400 group-hover:text-blue-600 dark:group-hover:text-blue-400"
                      }`}
                      aria-hidden="true"
                    />
                  ) : (
                    <Icons.Lock
                      className="w-3.5 h-3.5 text-slate-400 opacity-50"
                      aria-hidden="true"
                    />
                  )}
                </div>
              </CardWrapper>
            );
          })}
        </div>
      </div>

      <div
        role="status"
        aria-live="polite"
        className={`fixed bottom-8 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ease-out ${
          toast.show
            ? "opacity-100 translate-y-0 scale-100"
            : "opacity-0 translate-y-4 scale-95 pointer-events-none"
        }`}
      >
        <div className="bg-slate-800 dark:bg-slate-700 text-white px-5 py-3.5 rounded-xl flex items-center gap-3 shadow-xl shadow-slate-900/20 border border-slate-700 dark:border-slate-600 backdrop-blur-md">
          <Icons.Info
            className="w-4 h-4 text-blue-400 shrink-0"
            aria-hidden="true"
          />
          <span className="text-sm font-bold tracking-wide">{toast.msg}</span>
        </div>
      </div>
    </section>
  );
}
