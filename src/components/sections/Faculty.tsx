import { type JSX } from "react";
import { ShieldCheck, CalendarRange, GraduationCap } from "lucide-react";
import { siteData } from "../../config/data";

export default function Faculty(): JSX.Element {
  return (
    <section
      id="faculty"
      className="py-32 bg-slate-50 relative z-10 px-6 overflow-hidden"
    >
      {/* Subtle ambient light from the bottom right */}
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(37,99,235,0.04),transparent_50%)] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-20 animate-slide-up opacity-0 [animation-fill-mode:both]">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-100 px-4 py-1.5 rounded-full mb-4">
            Expert Direction
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">
            Academic Leadership Profile
          </h2>
        </div>

        {/* 4-Column Grid for perfectly balanced layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {siteData.faculty.map((teacher, idx) => (
            <div
              key={idx}
              className="group flex flex-col h-full bg-white border border-slate-100 rounded-3xl p-7 shadow-sm hover:shadow-card hover:border-blue-100 hover:-translate-y-1.5 transition-all duration-400 ease-out opacity-0 animate-slide-up [animation-fill-mode:both]"
              style={{ animationDelay: `${idx * 150 + 100}ms` }}
            >
              {/* Profile Header */}
              <div className="flex flex-col gap-5 mb-6">
                <div className="w-20 h-20 shrink-0 rounded-2xl overflow-hidden shadow-inner group-hover:scale-105 group-hover:-rotate-3 transition-transform duration-500 ease-out flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50 border border-slate-100">
                  {teacher.image ? (
                    <img
                      src={teacher.image}
                      alt={teacher.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <span className="text-2xl font-black text-blue-600">
                      {teacher.initials}
                    </span>
                  )}
                </div>

                <div className="flex flex-col">
                  <h3 className="text-xl font-bold text-slate-900 tracking-tight mb-1 group-hover:text-blue-600 transition-colors">
                    {teacher.name}
                  </h3>
                  <p className="text-xs font-bold uppercase tracking-wider text-blue-600">
                    {teacher.title}
                  </p>
                </div>
              </div>

              {/* Experience Badge */}
              <div className="inline-flex items-center gap-2 bg-slate-50 border border-slate-100 px-3 py-2 rounded-xl text-xs font-semibold text-slate-600 w-fit mb-5 transition-colors group-hover:bg-blue-50 group-hover:text-blue-700 group-hover:border-blue-100">
                <CalendarRange
                  className="w-4 h-4 text-blue-500"
                  aria-hidden="true"
                />
                {teacher.experience}
              </div>

              {/* Biography */}
              <p className="text-sm text-slate-500 font-medium leading-relaxed mb-8 grow">
                {teacher.bio}
              </p>

              {/* Credentials Footer */}
              <div className="pt-6 border-t border-slate-100">
                <div className="text-[10px] font-bold uppercase tracking-widest text-slate-400 flex items-center gap-2 mb-4">
                  <GraduationCap
                    className="w-4 h-4 text-slate-400"
                    aria-hidden="true"
                  />
                  Credentials
                </div>
                <ul
                  className="flex flex-col gap-2.5"
                  aria-label={`Credentials for ${teacher.name}`}
                >
                  {teacher.credentials.map((cred, cIdx) => (
                    <li
                      key={cIdx}
                      className="text-xs font-semibold bg-slate-50 border border-slate-100 text-slate-700 px-3 py-2 rounded-xl flex items-start gap-2.5 hover:bg-slate-100 transition-colors"
                    >
                      <ShieldCheck
                        className="w-4 h-4 shrink-0 text-emerald-500 mt-0.5"
                        aria-hidden="true"
                      />
                      <span className="leading-tight">{cred}</span>
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
