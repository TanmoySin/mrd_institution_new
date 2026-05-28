import React, { useState, useRef, useEffect, type JSX } from "react";
import * as Icons from "lucide-react";
import { type LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { siteData } from "../../config/data";

interface ToastState {
  show: boolean;
  msg: string;
}

export default function CategoryMatrix(): JSX.Element {
  const [toast, setToast] = useState<ToastState>({ show: false, msg: "" });
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  // Safely cast dynamically loaded icons with a clean fallback
  const renderIcon = (iconName: string): JSX.Element => {
    const IconComponent =
      (Icons as unknown as Record<string, LucideIcon>)[iconName] ||
      Icons.LayoutGrid;
    return <IconComponent className="w-5 h-5" aria-hidden="true" />;
  };

  const handleSoonClick = (e: React.MouseEvent, name: string) => {
    e.preventDefault();
    setToast({
      show: true,
      msg: `${name} matrix is locked for the next phase.`,
    });

    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = window.setTimeout(
      () => setToast({ show: false, msg: "" }),
      3000,
    );
  };

  return (
    <section
      id="categories"
      className="relative py-32 bg-slate-50 border-t border-slate-100 z-10 overflow-hidden"
    >
      {/* Gentle radial highlight */}
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.04),transparent_50%)] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 animate-slide-up opacity-0 [animation-fill-mode:both]">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-100 px-4 py-1.5 rounded-full mb-6">
            Curriculum Ecosystem
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-6">
            Academic Pathways Selector
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl font-medium leading-relaxed">
            Select a learning pathway to explore our highly structured syllabus
            architecture, core methodologies, and enrollment benchmarks.
          </p>
        </div>

        {/* Matrix Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 mb-16">
          {siteData.examCategories.map((category, index) => {
            const isAvailable = category.status === "active";
            const isSoon = category.status === "coming-soon";
            const isFeatured = category.id === "school-boards";

            // Discriminated union handling for the wrapper element
            const CardWrapper = isAvailable ? Link : "div";

            const baseClasses =
              "group relative text-left p-6 rounded-2xl transition-all duration-300 overflow-hidden flex flex-col justify-between min-h-[240px] block focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-500/50 opacity-0 animate-slide-up [animation-fill-mode:both]";

            const stateClasses = isFeatured
              ? "bg-gradient-to-br from-blue-600 to-indigo-600 border border-transparent shadow-lg shadow-blue-600/20 scale-[1.02] hover:-translate-y-1.5"
              : isSoon
                ? "bg-slate-50/50 border border-dashed border-slate-200 cursor-not-allowed"
                : "bg-white border border-slate-200 hover:border-blue-200 hover:shadow-card hover:-translate-y-1.5";

            return (
              <CardWrapper
                key={category.id}
                to={isAvailable ? category.link : ""}
                onClick={
                  !isAvailable
                    ? (e) =>
                        handleSoonClick(e as React.MouseEvent, category.name)
                    : undefined
                }
                aria-disabled={!isAvailable}
                className={`${baseClasses} ${stateClasses}`}
                style={{ animationDelay: `${index * 100 + 200}ms` }}
              >
                {/* Decorative glow for the featured card */}
                {isFeatured && (
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.2),transparent_60%)] pointer-events-none" />
                )}

                <div>
                  <div className="flex items-start justify-between w-full relative z-10 mb-6">
                    <div
                      className={`p-3 rounded-xl transition-colors duration-300 ${
                        isFeatured
                          ? "bg-white/20 text-white backdrop-blur-sm"
                          : isSoon
                            ? "bg-slate-100 text-slate-400"
                            : "bg-slate-50 text-slate-500 group-hover:text-blue-600 group-hover:bg-blue-50"
                      }`}
                    >
                      {renderIcon(category.icon)}
                    </div>
                    <span
                      className={`text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider ${
                        isFeatured
                          ? "bg-white/20 text-white border border-white/20 backdrop-blur-sm"
                          : isSoon
                            ? "bg-slate-100 text-slate-400 border border-slate-200"
                            : "bg-slate-50 border border-slate-200 text-slate-500"
                      }`}
                    >
                      {category.badge}
                    </span>
                  </div>

                  <div className="relative z-10">
                    <h3
                      className={`text-sm font-bold uppercase tracking-wider mb-2 transition-colors ${
                        isFeatured
                          ? "text-white"
                          : isSoon
                            ? "text-slate-500"
                            : "text-slate-900 group-hover:text-blue-600"
                      }`}
                    >
                      {category.name}
                    </h3>
                    <p
                      className={`text-sm line-clamp-3 leading-relaxed font-medium ${
                        isFeatured
                          ? "text-blue-50/90"
                          : isSoon
                            ? "text-slate-400"
                            : "text-slate-500"
                      }`}
                    >
                      {category.description}
                    </p>
                  </div>
                </div>

                {/* Footer Action Area */}
                <div
                  className={`relative z-10 mt-6 pt-5 border-t flex justify-end ${
                    isFeatured ? "border-white/20" : "border-slate-100"
                  }`}
                >
                  {isAvailable ? (
                    <Icons.ArrowRight
                      className={`w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5 ${
                        isFeatured
                          ? "text-white"
                          : "text-slate-400 group-hover:text-blue-600"
                      }`}
                      aria-hidden="true"
                    />
                  ) : (
                    <Icons.Lock
                      className="w-4 h-4 text-slate-300"
                      aria-hidden="true"
                    />
                  )}
                </div>
              </CardWrapper>
            );
          })}
        </div>
      </div>

      {/* Floating Glassmorphism Toast Notification */}
      <div
        role="status"
        aria-live="polite"
        className={`fixed bottom-8 left-1/2 -translate-x-1/2 z-50 transition-all duration-400 cubic-bezier(0.16, 1, 0.3, 1) ${
          toast.show
            ? "opacity-100 translate-y-0 scale-100"
            : "opacity-0 translate-y-8 scale-95 pointer-events-none"
        }`}
      >
        <div className="bg-white/95 backdrop-blur-xl text-slate-800 px-6 py-4 rounded-2xl flex items-center gap-3 shadow-float border border-slate-200">
          <div className="bg-blue-50 p-1.5 rounded-full">
            <Icons.Info
              className="w-4 h-4 text-blue-600 shrink-0"
              aria-hidden="true"
            />
          </div>
          <span className="text-sm font-semibold tracking-wide">
            {toast.msg}
          </span>
        </div>
      </div>
    </section>
  );
}
