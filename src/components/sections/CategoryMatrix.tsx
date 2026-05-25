import { useState } from "react";
import * as Icons from "lucide-react";
import { Link } from "react-router-dom";
import { siteData } from "../../config/data";

export default function CategoryMatrix() {
  const [toast, setToast] = useState({ show: false, msg: "" });

  const renderIcon = (iconName: string) => {
    const Icon = (Icons as any)[iconName];
    return Icon ? (
      <Icon className="w-5 h-5" />
    ) : (
      <Icons.Grid className="w-5 h-5" />
    );
  };

  const handleSoonClick = (e: React.MouseEvent, name: string) => {
    e.preventDefault();
    setToast({
      show: true,
      msg: `${name} matrix is locked for the next phase.`,
    });
    setTimeout(() => setToast({ show: false, msg: "" }), 3000);
  };

  return (
    <section
      id="categories"
      className="relative py-32 bg-canvas border-t border-border-subtle z-10 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(15,23,42,0.02),transparent_50%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Module Header */}
        <div className="flex flex-col items-center text-center mb-16 animate-slide-up">
          <span className="text-xs font-bold uppercase tracking-widest text-accent bg-accent/10 px-3 py-1 rounded-full mb-4">
            Curriculum Ecosystem
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-black tracking-tight text-primary mb-4">
            Academic Pathways Selector
          </h2>
          <p className="text-primary-light text-base max-w-2xl font-medium">
            Select a learning pathway to explore our highly structured syllabus
            architecture, core methodologies, and enrollment benchmarks.
          </p>
        </div>

        {/* 5-Column Grid Matrix */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-16">
          {siteData.examCategories.map((category) => {
            const isAvailable = category.status === "active";
            const isSoon = category.status === "coming-soon";
            // Highlight the primary active track using the premium dark styling from your snippet
            const isFeatured = category.id === "school-boards";

            const CardWrapper = isAvailable ? Link : "div";

            return (
              <CardWrapper
                key={category.id}
                to={isAvailable ? category.link : ""}
                onClick={
                  !isAvailable
                    ? (e) => handleSoonClick(e, category.name)
                    : undefined
                }
                className={`group relative text-left p-6 rounded-2xl transition-all duration-300 overflow-hidden flex-col justify-between min-h-50 block ${
                  isFeatured
                    ? "bg-primary border border-primary shadow-glow scale-[1.02] hover:-translate-y-1"
                    : isSoon
                      ? "bg-surface/50 border border-border-subtle opacity-60 cursor-not-allowed"
                      : "bg-surface border border-border-subtle hover:border-primary-light hover:shadow-card hover:-translate-y-1"
                }`}
              >
                {isFeatured && (
                  <div className="absolute inset-0 bg-linear-to-br from-accent/20 to-transparent pointer-events-none" />
                )}

                <div>
                  <div className="flex items-start justify-between w-full relative z-10 mb-6">
                    <div
                      className={`p-2.5 rounded-xl transition-colors ${
                        isFeatured
                          ? "bg-accent/20 text-accent"
                          : "bg-canvas text-primary-light group-hover:text-primary group-hover:bg-surface-hover"
                      }`}
                    >
                      {renderIcon(category.icon)}
                    </div>
                    <span
                      className={`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider ${
                        isFeatured
                          ? "bg-accent/20 text-accent border border-accent/20"
                          : "bg-canvas border border-border-subtle text-primary-light"
                      }`}
                    >
                      {category.badge}
                    </span>
                  </div>

                  <div className="relative z-10">
                    <h3
                      className={`text-sm font-black uppercase tracking-wider mb-1.5 transition-colors ${
                        isFeatured ? "text-surface" : "text-primary"
                      }`}
                    >
                      {category.name}
                    </h3>
                    <p
                      className={`text-xs line-clamp-3 leading-relaxed font-medium ${
                        isFeatured ? "text-surface/80" : "text-primary-light"
                      }`}
                    >
                      {category.description}
                    </p>
                  </div>
                </div>

                <div className="relative z-10 mt-6 pt-4 border-t border-border-subtle/50 flex justify-end">
                  {isAvailable ? (
                    <Icons.ArrowRight
                      className={`w-4 h-4 transition-transform group-hover:translate-x-1 ${
                        isFeatured
                          ? "text-accent"
                          : "text-primary-light group-hover:text-primary"
                      }`}
                    />
                  ) : (
                    <Icons.Lock className="w-3.5 h-3.5 text-primary-light opacity-50" />
                  )}
                </div>
              </CardWrapper>
            );
          })}
        </div>
      </div>

      {/* Global Toast Notification */}
      <div
        className={`fixed bottom-8 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ${
          toast.show
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        <div className="bg-primary text-surface px-5 py-3.5 rounded-xl flex items-center gap-3 shadow-float border border-primary-light">
          <Icons.Info className="w-4 h-4 text-accent" />
          <span className="text-sm font-bold tracking-wide">{toast.msg}</span>
        </div>
      </div>
    </section>
  );
}
