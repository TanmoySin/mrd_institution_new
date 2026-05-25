import { type JSX } from "react";
import { ShieldCheck, CalendarRange, GraduationCap } from "lucide-react";
import { siteData } from "../../config/data";

export default function Faculty(): JSX.Element {
  return (
    <section
      id="faculty"
      className="py-32 bg-slate-50 dark:bg-slate-900 relative z-10 px-6 overflow-hidden selection:bg-blue-500/30"
    >
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(37,99,235,0.08),transparent_50%)] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col items-center text-center mb-20 animate-in fade-in slide-in-from-bottom-8 duration-700 ease-out">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/30 px-4 py-1.5 rounded-full mb-4">
            Expert Direction
          </span>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900 dark:text-white">
            Academic Leadership Profile
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {siteData.faculty.map((teacher, idx) => (
            <div
              key={idx}
              className="group flex flex-col h-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-3xl p-8 shadow-lg shadow-slate-900/5 dark:shadow-slate-900/40 hover:shadow-xl hover:shadow-blue-900/10 dark:hover:shadow-blue-900/20 hover:border-blue-300 dark:hover:border-blue-700 hover:-translate-y-1.5 transition-all duration-500 animate-in fade-in slide-in-from-bottom-8 fill-mode-both"
              style={{ animationDelay: `${idx * 150}ms` }}
            >
              <div className="flex items-center gap-5 mb-8">
                <div
                  className={`w-20 h-20 shrink-0 rounded-2xl flex items-center justify-center text-2xl font-black text-white shadow-inner group-hover:scale-105 group-hover:-rotate-3 transition-transform duration-500 ${teacher.avatarBg || "bg-linear-to-br from-blue-500 to-indigo-600"}`}
                >
                  {teacher.initials}
                </div>
                <div className="flex flex-col justify-center">
                  <h3 className="text-xl font-black text-slate-900 dark:text-white tracking-tight mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {teacher.name}
                  </h3>
                  <p className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                    {teacher.title}
                  </p>
                </div>
              </div>

              <div className="inline-flex items-center gap-2 bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700/50 px-3 py-2 rounded-xl text-xs font-bold text-slate-600 dark:text-slate-300 w-fit mb-6 transition-colors group-hover:bg-blue-50 dark:group-hover:bg-blue-900/20 group-hover:border-blue-200 dark:group-hover:border-blue-800/50">
                <CalendarRange
                  className="w-4 h-4 text-blue-500 dark:text-blue-400"
                  aria-hidden="true"
                />
                {teacher.experience}
              </div>

              <p className="text-sm text-slate-600 dark:text-slate-400 font-medium leading-relaxed mb-8 grow">
                {teacher.bio}
              </p>

              <div className="pt-6 border-t border-slate-100 dark:border-slate-700/50">
                <div className="text-[10px] font-black uppercase tracking-widest text-slate-400 dark:text-slate-500 flex items-center gap-2 mb-4">
                  <GraduationCap
                    className="w-4 h-4 text-slate-400 dark:text-slate-500"
                    aria-hidden="true"
                  />
                  Credentials
                </div>
                <ul
                  className="flex flex-wrap gap-2.5"
                  aria-label={`Credentials for ${teacher.name}`}
                >
                  {teacher.credentials.map((cred, cIdx) => (
                    <li
                      key={cIdx}
                      className="text-[11px] font-bold bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 px-3 py-1.5 rounded-lg flex items-center gap-1.5 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                    >
                      <ShieldCheck
                        className="w-3.5 h-3.5 text-emerald-500 dark:text-emerald-400"
                        aria-hidden="true"
                      />
                      {cred}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
