import { ShieldCheck, CalendarRange, GraduationCap } from "lucide-react";
import { siteData } from "../../config/data";

export default function Faculty() {
  return (
    <section id="faculty" className="py-32 bg-canvas relative z-10 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center mb-16 animate-slide-up">
          <span className="text-xs font-bold uppercase tracking-widest text-accent bg-accent/10 px-3 py-1 rounded-full mb-4">
            Expert Direction
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-black tracking-tight text-primary">
            Academic Leadership Profile
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {siteData.faculty.map((teacher, idx) => (
            <div
              key={idx}
              className="bg-surface border border-border-subtle rounded-3xl p-8 shadow-card hover:shadow-float transition-all duration-300 flex flex-col h-full group"
            >
              <div className="flex items-center gap-5 mb-6">
                <div
                  className={`w-20 h-20 rounded-2xl flex items-center justify-center text-2xl font-display font-black text-surface shadow-inner group-hover:scale-105 transition-transform duration-300 ${teacher.avatarBg}`}
                >
                  {teacher.initials}
                </div>
                <div>
                  <h3 className="text-xl font-display font-black text-primary tracking-tight">
                    {teacher.name}
                  </h3>
                  <p className="text-xs font-bold uppercase tracking-wider text-accent mt-1">
                    {teacher.title}
                  </p>
                </div>
              </div>

              <div className="inline-flex items-center gap-2 bg-canvas border border-border-subtle px-3 py-1.5 rounded-lg text-xs font-bold text-primary-light w-fit mb-6">
                <CalendarRange className="w-4 h-4 text-accent" />
                {teacher.experience}
              </div>

              <p className="text-sm text-primary-light font-medium leading-relaxed mb-8 grow">
                {teacher.bio}
              </p>

              <div className="pt-6 border-t border-border-subtle">
                <div className="text-[10px] font-black uppercase tracking-widest text-primary-light flex items-center gap-2 mb-3">
                  <GraduationCap className="w-4 h-4" /> Credentials
                </div>
                <div className="flex flex-wrap gap-2">
                  {teacher.credentials.map((cred, cIdx) => (
                    <span
                      key={cIdx}
                      className="text-[10px] font-bold bg-canvas border border-border-subtle text-primary px-2.5 py-1.5 rounded-md flex items-center gap-1.5"
                    >
                      <ShieldCheck className="w-3.5 h-3.5 text-success" />
                      {cred}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
