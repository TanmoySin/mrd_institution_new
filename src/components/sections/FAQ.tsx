import { useState, useId, type JSX } from "react";
import { ChevronDown, Search, SearchX } from "lucide-react";
import { siteData } from "../../config/data";
import type { FAQCategory } from "../../config/data";

export default function FAQ(): JSX.Element {
  const [search, setSearch] = useState<string>("");
  const [activeCat, setActiveCat] = useState<FAQCategory | "All">("All");
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  const baseId = useId();

  const categories: (FAQCategory | "All")[] = [
    "All",
    "Admissions",
    "Fees",
    "Curriculum",
    "Infrastructure",
  ];

  const filteredFaqs = siteData.faqs.filter((faq) => {
    const matchCat = activeCat === "All" || faq.category === activeCat;
    const matchSearch =
      faq.question.toLowerCase().includes(search.toLowerCase()) ||
      faq.answer.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <section
      id="faq"
      className="py-32 bg-white border-t border-slate-100 px-6 relative z-10 selection:bg-blue-100 selection:text-blue-900 overflow-hidden"
    >
      <div className="max-w-3xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up opacity-0 [animation-fill-mode:both]">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-100 px-4 py-1.5 rounded-full mb-6 inline-block">
            Information Center
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-5">
            Support Desk
          </h2>
          <p className="text-slate-600 text-lg font-medium">
            Find instant answers to operational and academic queries.
          </p>
        </div>

        {/* Search Bar */}
        <div className="relative mb-10 animate-slide-up opacity-0 [animation-delay:100ms] [animation-fill-mode:both]">
          <Search
            className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 pointer-events-none"
            aria-hidden="true"
          />
          <input
            type="text"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setOpenIdx(null);
            }}
            aria-label="Search FAQs"
            placeholder="Search operational queries..."
            className="w-full bg-slate-50 border border-slate-200 rounded-2xl pl-14 pr-6 py-4 text-sm font-semibold text-slate-900 outline-none focus:bg-white focus:border-blue-400 focus:ring-4 focus:ring-blue-500/10 transition-all placeholder:text-slate-400 placeholder:font-medium shadow-sm hover:border-slate-300"
          />
        </div>

        {/* Category Tabs */}
        <div
          className="flex flex-wrap gap-2.5 justify-center mb-12 animate-slide-up opacity-0 [animation-delay:200ms] [animation-fill-mode:both]"
          role="tablist"
          aria-label="FAQ Categories"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              role="tab"
              aria-selected={activeCat === cat}
              onClick={() => {
                setActiveCat(cat);
                setOpenIdx(null);
              }}
              className={`text-[11px] font-bold uppercase tracking-wider px-5 py-2.5 rounded-xl border transition-all duration-200 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-500/30 ${
                activeCat === cat
                  ? "bg-blue-600 border-blue-600 text-white shadow-md shadow-blue-600/20 scale-[1.02]"
                  : "bg-white border-slate-200 text-slate-500 hover:border-slate-300 hover:text-slate-900 hover:bg-slate-50"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq, idx) => {
              const isOpen = openIdx === idx;
              const buttonId = `${baseId}-btn-${idx}`;
              const panelId = `${baseId}-panel-${idx}`;

              return (
                <div
                  key={idx}
                  className="group bg-white border border-slate-200 rounded-2xl overflow-hidden transition-all duration-300 hover:border-blue-200 hover:shadow-card animate-slide-up opacity-0 [animation-fill-mode:both]"
                  style={{ animationDelay: `${idx * 50 + 300}ms` }}
                >
                  <button
                    id={buttonId}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpenIdx(isOpen ? null : idx)}
                    className="w-full flex items-center justify-between p-6 text-left focus-visible:outline-none focus-visible:bg-blue-50/50"
                  >
                    <span
                      className={`text-sm font-semibold tracking-wide pr-4 transition-colors ${
                        isOpen
                          ? "text-blue-600"
                          : "text-slate-800 group-hover:text-blue-600"
                      }`}
                    >
                      {faq.question}
                    </span>
                    <div
                      className={`p-1 rounded-full transition-colors ${isOpen ? "bg-blue-50" : "bg-transparent group-hover:bg-blue-50"}`}
                    >
                      <ChevronDown
                        className={`w-5 h-5 shrink-0 transition-transform duration-300 ease-in-out ${
                          isOpen
                            ? "rotate-180 text-blue-600"
                            : "text-slate-400 group-hover:text-blue-600"
                        }`}
                        aria-hidden="true"
                      />
                    </div>
                  </button>

                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    className={`grid transition-all duration-300 cubic-bezier(0.4, 0, 0.2, 1) ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="px-6 pb-6 pt-2 text-sm text-slate-600 font-medium leading-relaxed border-t border-slate-100 mx-6">
                        {faq.answer}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            /* Empty State */
            <div className="text-center py-16 px-6 bg-slate-50 border border-slate-200 rounded-4xl border-dashed animate-fade-in opacity-0 [animation-fill-mode:both]">
              <div className="w-16 h-16 bg-white border border-slate-100 rounded-full flex items-center justify-center mx-auto mb-5 shadow-sm">
                <SearchX
                  className="w-8 h-8 text-slate-400"
                  aria-hidden="true"
                />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2 tracking-tight">
                No results found
              </h3>
              <p className="text-sm text-slate-500 font-medium max-w-sm mx-auto">
                We couldn't find any FAQs matching "{search}" in the{" "}
                <span className="text-slate-800 font-semibold">
                  {activeCat}
                </span>{" "}
                category.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
