import React, { useState, type JSX } from "react";
import {
  CheckCircle2,
  MessagesSquare,
  Sparkles,
  ChevronDown,
  Mail,
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

  const constructMessage = (isEmail = false) => {
    const b = isEmail ? "" : "*";
    const nl = isEmail ? "\n" : "%0A";

    return `${b}New Admission Inquiry${b}${nl}${nl}${b}Name:${b} ${fields.fullName}${nl}${b}Mobile:${b} ${fields.mobileNumber}${nl}${b}Target Range:${b} ${fields.classGroup}${nl}${b}Board:${b} ${fields.board}${nl}${b}Message:${b} ${fields.message || "N/A"}`;
  };

  const handleWhatsAppSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (validate()) {
      const message = constructMessage(false);
      const whatsappUrl = `https://wa.me/${siteData.siteConfig.whatsapp}?text=${message}`;
      window.open(whatsappUrl, "_blank");
      setIsSubmitted(true);
    }
  };

  const handleEmailSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (validate()) {
      const subject = encodeURIComponent(
        `Admission Inquiry - ${fields.fullName}`,
      );
      const body = encodeURIComponent(constructMessage(true));
      const email = siteData.siteConfig.email || "admissions@yourschool.com";
      window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
      setIsSubmitted(true);
    }
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
      className="py-32 bg-slate-50 border-t border-slate-100 relative z-10 px-6 selection:bg-blue-100 selection:text-blue-900 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Column: Value Proposition */}
        <div className="space-y-8 animate-slide-up opacity-0 [animation-fill-mode:both]">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-600 bg-emerald-100 border border-emerald-200 px-4 py-1.5 rounded-full shadow-sm">
              Admissions Portal
            </span>
            <h2 className="mt-6 text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.1]">
              Secure Your Seat For The Next Cohort
            </h2>
          </div>

          <div className="space-y-5 bg-white border border-slate-100 p-8 rounded-3xl shadow-sm">
            {[
              "Personal attention boundaries capped precisely per batch.",
              "Rigorous periodic test matrices matched to Board blueprints.",
              "Dedicated doubt-clearing sessions led by top instructors.",
              "Continuous student progress analysis logs extended to parents.",
            ].map((benefit, bIdx) => (
              <div key={bIdx} className="flex items-start gap-4">
                <CheckCircle2
                  className="w-6 h-6 text-emerald-500 shrink-0 mt-0.5"
                  aria-hidden="true"
                />
                <p className="text-sm text-slate-600 font-medium leading-relaxed">
                  {benefit}
                </p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href={`mailto:${siteData.siteConfig.email || "admissions@yourschool.com"}?subject=General Admission Inquiry`}
              className="group flex items-center gap-2.5 bg-white border border-slate-200 text-slate-700 px-6 py-3.5 rounded-2xl text-sm font-bold hover:border-blue-200 hover:text-blue-600 hover:bg-blue-50 hover:shadow-sm transition-all focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-500/30"
            >
              <Mail
                className="w-4 h-4 text-slate-400 group-hover:text-blue-500 transition-colors"
                aria-hidden="true"
              />
              Email Us
            </a>
            <a
              href={`https://wa.me/${siteData.siteConfig.whatsapp}?text=Hi,%20I%20would%20like%20to%20know%20more%20about%20the%20admissions%20process.`}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2.5 bg-[#25D366]/10 text-[#20BA59] px-6 py-3.5 rounded-2xl text-sm font-bold hover:bg-[#25D366]/20 transition-all focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#25D366]/30"
            >
              <MessagesSquare
                className="w-4 h-4 group-hover:scale-110 transition-transform"
                aria-hidden="true"
              />
              WhatsApp
            </a>
          </div>
        </div>

        {/* Right Column: Form Container */}
        <div className="bg-white border border-slate-100 rounded-4xl p-8 sm:p-10 shadow-card min-h-150 flex flex-col justify-center animate-slide-up opacity-0 [animation-delay:200ms] [animation-fill-mode:both]">
          {!isSubmitted ? (
            <form className="space-y-6" noValidate>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="fullName"
                    className="text-[10px] font-bold text-slate-500 uppercase tracking-widest block mb-2"
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
                    className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-4 py-3.5 text-sm text-slate-900 outline-none focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 transition-all placeholder:text-slate-400"
                    placeholder="John Doe"
                  />
                  {errors.fullName && (
                    <p
                      id="fullName-error"
                      className="text-rose-500 text-xs mt-1.5 font-semibold animate-fade-in"
                    >
                      {errors.fullName}
                    </p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="mobileNumber"
                    className="text-[10px] font-bold text-slate-500 uppercase tracking-widest block mb-2"
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
                    className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-4 py-3.5 text-sm text-slate-900 outline-none focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 transition-all placeholder:text-slate-400"
                    placeholder="9876543210"
                  />
                  {errors.mobileNumber && (
                    <p
                      id="mobileNumber-error"
                      className="text-rose-500 text-xs mt-1.5 font-semibold animate-fade-in"
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
                    className="text-[10px] font-bold text-slate-500 uppercase tracking-widest block mb-2"
                  >
                    Target Range
                  </label>
                  <div className="relative">
                    <select
                      id="classGroup"
                      name="classGroup"
                      value={fields.classGroup}
                      onChange={handleInput}
                      aria-invalid={!!errors.classGroup}
                      aria-errormessage={
                        errors.classGroup ? "classGroup-error" : undefined
                      }
                      className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-4 py-3.5 text-sm text-slate-900 outline-none focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 transition-all cursor-pointer appearance-none"
                    >
                      <option value="" disabled>
                        Select Range
                      </option>
                      <option value="6-8">Classes 6 – 8</option>
                      <option value="9-10">Classes 9 – 10</option>
                      <option value="11-12">Classes 11 – 12</option>
                    </select>
                    <ChevronDown
                      className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none"
                      aria-hidden="true"
                    />
                  </div>
                  {errors.classGroup && (
                    <p
                      id="classGroup-error"
                      className="text-rose-500 text-xs mt-1.5 font-semibold animate-fade-in"
                    >
                      {errors.classGroup}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="board"
                    className="text-[10px] font-bold text-slate-500 uppercase tracking-widest block mb-2"
                  >
                    Board
                  </label>
                  <div className="relative">
                    <select
                      id="board"
                      name="board"
                      value={fields.board}
                      onChange={handleInput}
                      aria-invalid={!!errors.board}
                      aria-errormessage={
                        errors.board ? "board-error" : undefined
                      }
                      className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-4 py-3.5 text-sm text-slate-900 outline-none focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 transition-all cursor-pointer appearance-none"
                    >
                      <option value="" disabled>
                        Select Board
                      </option>
                      <option value="CBSE">CBSE</option>
                      <option value="TBSE">TBSE</option>
                    </select>
                    <ChevronDown
                      className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none"
                      aria-hidden="true"
                    />
                  </div>
                  {errors.board && (
                    <p
                      id="board-error"
                      className="text-rose-500 text-xs mt-1.5 font-semibold animate-fade-in"
                    >
                      {errors.board}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="text-[10px] font-bold text-slate-500 uppercase tracking-widest block mb-2"
                >
                  Message (Optional)
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={fields.message}
                  onChange={handleInput}
                  rows={4}
                  className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-4 py-3.5 text-sm text-slate-900 outline-none focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 transition-all resize-none placeholder:text-slate-400"
                  placeholder="Any specific requirements or questions?"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <button
                  onClick={handleWhatsAppSubmit}
                  className="w-full bg-[#25D366] hover:bg-[#20BA59] text-white py-4 rounded-2xl text-sm font-semibold transition-all duration-200 shadow-md shadow-[#25D366]/20 hover:shadow-lg focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#25D366]/50 active:scale-[0.98] flex items-center justify-center gap-2"
                >
                  <MessagesSquare className="w-5 h-5" aria-hidden="true" />
                  Submit via WhatsApp
                </button>
                <button
                  onClick={handleEmailSubmit}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-2xl text-sm font-semibold transition-all duration-200 shadow-md shadow-blue-600/20 hover:shadow-lg focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-500/50 active:scale-[0.98]"
                >
                  Submit via Email
                </button>
              </div>
            </form>
          ) : (
            /* Success State */
            <div
              className="text-center py-12 animate-fade-in duration-500 ease-out flex flex-col items-center"
              role="status"
            >
              <div className="w-24 h-24 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center mb-6 shadow-sm border border-emerald-100">
                <CheckCircle2 className="w-12 h-12" aria-hidden="true" />
              </div>
              <h3 className="text-3xl font-extrabold text-slate-900 tracking-tight mb-3 flex items-center justify-center gap-2">
                Request Logged{" "}
                <Sparkles
                  className="w-6 h-6 text-amber-400"
                  aria-hidden="true"
                />
              </h3>
              <p className="text-slate-600 font-medium leading-relaxed mb-10 max-w-sm">
                Thank you, {fields.fullName.split(" ")[0] || "there"}. Our desk
                coordinator will reach out to your mobile within 24 hours.
              </p>
              <button
                onClick={resetForm}
                className="bg-slate-50 border border-slate-200 text-slate-700 px-8 py-3.5 rounded-2xl text-sm font-bold hover:bg-slate-100 transition-colors focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-slate-500/30"
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
