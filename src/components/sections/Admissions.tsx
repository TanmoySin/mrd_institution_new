import React, { useState, type JSX } from "react";
import {
  CheckCircle2,
  PhoneCall,
  MessagesSquare,
  Sparkles,
} from "lucide-react";
import { siteData } from "../../config/data";

export interface AdmissionsFields {
  fullName: string;
  classGroup: string;
  board: string;
  mobileNumber: string;
  timeToCall: string;
  message: string;
}

export default function Admissions(): JSX.Element {
  const [fields, setFields] = useState<AdmissionsFields>({
    fullName: "",
    classGroup: "",
    board: "",
    mobileNumber: "",
    timeToCall: "Morning",
    message: "",
  });
  const [errors, setErrors] = useState<
    Partial<Record<keyof AdmissionsFields, string>>
  >({});
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const handleInput = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    const { name, value } = e.target;
    setFields((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof AdmissionsFields]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof AdmissionsFields, string>> = {};
    if (!fields.fullName.trim()) newErrors.fullName = "Required field.";
    if (!fields.classGroup) newErrors.classGroup = "Selection required.";
    if (!fields.board) newErrors.board = "Selection required.";
    if (!/^[6-9]\d{9}$/.test(fields.mobileNumber)) {
      newErrors.mobileNumber = "Enter a valid 10-digit mobile.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) setIsSubmitted(true);
  };

  const resetForm = () => {
    setFields({
      fullName: "",
      classGroup: "",
      board: "",
      mobileNumber: "",
      timeToCall: "Morning",
      message: "",
    });
    setErrors({});
    setIsSubmitted(false);
  };

  return (
    <section
      id="admissions"
      className="py-32 bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 relative z-10 px-6 selection:bg-blue-500/30"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-700 ease-out">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/20 px-4 py-1.5 rounded-full shadow-sm">
              Admissions Portal
            </span>
            <h2 className="mt-6 text-4xl sm:text-5xl font-black tracking-tight text-slate-900 dark:text-white leading-tight">
              Secure Your Seat For The Next Cohort
            </h2>
          </div>

          <div className="space-y-5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 p-8 rounded-3xl shadow-lg shadow-slate-900/5 dark:shadow-slate-900/40">
            {[
              "Personal attention boundaries capped precisely per batch.",
              "Rigorous periodic test matrices matched to Board blueprints.",
              "Dedicated doubt-clearing sessions led by top instructors.",
              "Continuous student progress analysis logs extended to parents.",
            ].map((benefit, bIdx) => (
              <div key={bIdx} className="flex items-start gap-4">
                <CheckCircle2
                  className="w-6 h-6 text-emerald-500 shrink-0"
                  aria-hidden="true"
                />
                <p className="text-sm text-slate-600 dark:text-slate-300 font-medium leading-relaxed">
                  {benefit}
                </p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href={`tel:${siteData.siteConfig.phone}`}
              className="group flex items-center gap-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 px-6 py-3.5 rounded-xl text-xs font-black uppercase tracking-wider hover:border-blue-500 dark:hover:border-blue-400 hover:shadow-md transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            >
              <PhoneCall
                className="w-4 h-4 group-hover:text-blue-500 transition-colors"
                aria-hidden="true"
              />
              Call Desk
            </a>
            <a
              href={`https://wa.me/${siteData.siteConfig.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 bg-[#25D366]/10 text-[#20BA59] dark:text-[#25D366] px-6 py-3.5 rounded-xl text-xs font-black uppercase tracking-wider hover:bg-[#25D366]/20 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366]"
            >
              <MessagesSquare
                className="w-4 h-4 group-hover:scale-110 transition-transform"
                aria-hidden="true"
              />
              WhatsApp
            </a>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-3xl p-8 sm:p-10 shadow-xl shadow-slate-900/10 dark:shadow-slate-900/40 min-h-[600px] flex flex-col justify-center animate-in fade-in slide-in-from-bottom-8 duration-700 delay-150 ease-out fill-mode-both">
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="fullName"
                    className="text-[10px] font-black text-slate-500 dark:text-slate-400 uppercase tracking-widest block mb-2"
                  >
                    Student Name
                  </label>
                  <input
                    id="fullName"
                    type="text"
                    name="fullName"
                    value={fields.fullName}
                    onChange={handleInput}
                    aria-invalid={!!errors.fullName}
                    aria-errormessage={
                      errors.fullName ? "fullName-error" : undefined
                    }
                    className="w-full bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3.5 text-sm text-slate-900 dark:text-white outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all placeholder:text-slate-400"
                    placeholder="John Doe"
                  />
                  {errors.fullName && (
                    <p
                      id="fullName-error"
                      className="text-rose-500 dark:text-rose-400 text-xs mt-1.5 font-bold animate-in fade-in slide-in-from-top-1"
                    >
                      {errors.fullName}
                    </p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="mobileNumber"
                    className="text-[10px] font-black text-slate-500 dark:text-slate-400 uppercase tracking-widest block mb-2"
                  >
                    Mobile Number
                  </label>
                  <input
                    id="mobileNumber"
                    type="tel"
                    name="mobileNumber"
                    value={fields.mobileNumber}
                    onChange={handleInput}
                    aria-invalid={!!errors.mobileNumber}
                    aria-errormessage={
                      errors.mobileNumber ? "mobileNumber-error" : undefined
                    }
                    className="w-full bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3.5 text-sm text-slate-900 dark:text-white outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all placeholder:text-slate-400"
                    placeholder="9876543210"
                  />
                  {errors.mobileNumber && (
                    <p
                      id="mobileNumber-error"
                      className="text-rose-500 dark:text-rose-400 text-xs mt-1.5 font-bold animate-in fade-in slide-in-from-top-1"
                    >
                      {errors.mobileNumber}
                    </p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="classGroup"
                    className="text-[10px] font-black text-slate-500 dark:text-slate-400 uppercase tracking-widest block mb-2"
                  >
                    Target Range
                  </label>
                  <select
                    id="classGroup"
                    name="classGroup"
                    value={fields.classGroup}
                    onChange={handleInput}
                    aria-invalid={!!errors.classGroup}
                    aria-errormessage={
                      errors.classGroup ? "classGroup-error" : undefined
                    }
                    className="w-full bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3.5 text-sm text-slate-900 dark:text-white outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all cursor-pointer appearance-none"
                  >
                    <option value="" disabled>
                      Select Range
                    </option>
                    <option value="6-8">Classes 6 – 8</option>
                    <option value="9-10">Classes 9 – 10</option>
                    <option value="11-12">Classes 11 – 12</option>
                  </select>
                  {errors.classGroup && (
                    <p
                      id="classGroup-error"
                      className="text-rose-500 dark:text-rose-400 text-xs mt-1.5 font-bold animate-in fade-in slide-in-from-top-1"
                    >
                      {errors.classGroup}
                    </p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="board"
                    className="text-[10px] font-black text-slate-500 dark:text-slate-400 uppercase tracking-widest block mb-2"
                  >
                    Board
                  </label>
                  <select
                    id="board"
                    name="board"
                    value={fields.board}
                    onChange={handleInput}
                    aria-invalid={!!errors.board}
                    aria-errormessage={errors.board ? "board-error" : undefined}
                    className="w-full bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3.5 text-sm text-slate-900 dark:text-white outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all cursor-pointer appearance-none"
                  >
                    <option value="" disabled>
                      Select Board
                    </option>
                    <option value="CBSE">CBSE</option>
                    <option value="TBSE">TBSE</option>
                  </select>
                  {errors.board && (
                    <p
                      id="board-error"
                      className="text-rose-500 dark:text-rose-400 text-xs mt-1.5 font-bold animate-in fade-in slide-in-from-top-1"
                    >
                      {errors.board}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="text-[10px] font-black text-slate-500 dark:text-slate-400 uppercase tracking-widest block mb-2"
                >
                  Message (Optional)
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={fields.message}
                  onChange={handleInput}
                  rows={4}
                  className="w-full bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3.5 text-sm text-slate-900 dark:text-white outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all resize-none placeholder:text-slate-400"
                  placeholder="Any specific requirements or questions?"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl text-sm font-black uppercase tracking-widest transition-colors shadow-lg shadow-blue-900/20 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-500/50"
              >
                Submit Request
              </button>
            </form>
          ) : (
            <div
              className="text-center py-12 animate-in zoom-in-95 duration-500 ease-out flex flex-col items-center"
              role="status"
            >
              <div className="w-20 h-20 bg-emerald-100 dark:bg-emerald-500/10 text-emerald-500 rounded-full flex items-center justify-center mb-6 shadow-inner">
                <CheckCircle2 className="w-10 h-10" aria-hidden="true" />
              </div>
              <h3 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight mb-3 flex items-center justify-center gap-2">
                Request Logged{" "}
                <Sparkles
                  className="w-6 h-6 text-amber-500"
                  aria-hidden="true"
                />
              </h3>
              <p className="text-slate-600 dark:text-slate-400 font-medium leading-relaxed mb-8 max-w-sm">
                Thank you, {fields.fullName.split(" ")[0]}. Our desk coordinator
                will reach out to your mobile within 24 hours.
              </p>
              <button
                onClick={resetForm}
                className="bg-slate-100 dark:bg-slate-700/50 border border-slate-200 dark:border-slate-600 text-slate-700 dark:text-slate-200 px-8 py-3.5 rounded-xl text-xs font-black uppercase tracking-widest hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-500"
              >
                Submit Another
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
