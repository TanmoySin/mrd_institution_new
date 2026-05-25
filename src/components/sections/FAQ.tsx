import { useState } from "react";
import { ChevronDown, Search } from "lucide-react";
import { siteData } from "../../config/data";
import type { FAQCategory } from "../../config/data";

export default function FAQ() {
  const [search, setSearch] = useState("");
  const [activeCat, setActiveCat] = useState<FAQCategory | "All">("All");
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const categories: (FAQCategory | "All")[] = [
    "All",
    "Admissions",
    "Fees",
    "Curriculum",
    "Infrastructure",
  ];

  const filtered = siteData.faqs.filter((faq) => {
    const matchCat = activeCat === "All" || faq.category === activeCat;
    const matchSearch =
      faq.question.toLowerCase().includes(search.toLowerCase()) ||
      faq.answer.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <section
      id="faq"
      className="py-32 bg-surface border-t border-border-subtle px-6 relative z-10"
    >
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16 animate-slide-up">
          <span className="text-xs font-bold uppercase tracking-widest text-info bg-info/10 px-3 py-1 rounded-full mb-4">
            Information Center
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-black tracking-tight text-primary mt-4 mb-4">
            Support Desk
          </h2>
          <p className="text-primary-light font-medium">
            Find instant answers to operational and academic queries.
          </p>
        </div>

        <div className="relative mb-10">
          <Search className="absolute left-5 top-4 w-5 h-5 text-primary-light" />
          <input
            type="text"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setOpenIdx(null);
            }}
            placeholder="Search operational queries..."
            className="w-full bg-canvas border border-border-subtle rounded-2xl pl-14 pr-6 py-4 text-sm font-bold text-primary outline-none focus:border-info focus:ring-1 focus:ring-info transition-all shadow-inner"
          />
        </div>

        <div className="flex flex-wrap gap-2 justify-center mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveCat(cat);
                setOpenIdx(null);
              }}
              className={`text-[10px] font-black uppercase tracking-widest px-5 py-2.5 rounded-xl border transition-all ${
                activeCat === cat
                  ? "bg-primary border-primary text-surface shadow-card scale-105"
                  : "bg-canvas border-border-subtle text-primary-light hover:border-primary-light hover:text-primary"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="space-y-4">
          {filtered.map((faq, idx) => (
            <div
              key={idx}
              className="bg-canvas border border-border-subtle rounded-2xl overflow-hidden transition-all hover:border-primary-light/50 shadow-sm hover:shadow-md"
            >
              <button
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
              >
                <span
                  className={`text-sm font-black tracking-wide pr-4 transition-colors ${openIdx === idx ? "text-info" : "text-primary"}`}
                >
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 shrink-0 text-primary-light transition-transform duration-300 ${openIdx === idx ? "rotate-180 text-info" : ""}`}
                />
              </button>

              <div
                style={{
                  maxHeight: openIdx === idx ? "300px" : "0px",
                  opacity: openIdx === idx ? 1 : 0,
                }}
                className="transition-all duration-300 ease-in-out"
              >
                <div className="px-6 pb-6 pt-2 text-sm text-primary-light font-medium leading-relaxed border-t border-border-subtle mx-6 mt-1">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
