import React, { useState } from "react";
import {
  CheckCircle2,
  PhoneCall,
  MessagesSquare,
  Sparkles,
} from "lucide-react";
import { siteData } from "../../config/data";

export default function Admissions() {
  const [fields, setFields] = useState({
    fullName: "",
    classGroup: "",
    board: "",
    mobileNumber: "",
    timeToCall: "Morning",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInput = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    setFields({ ...fields, [e.target.name]: e.target.value });
    if (errors[e.target.name]) setErrors({ ...errors, [e.target.name]: "" });
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!fields.fullName.trim()) newErrors.fullName = "Required field.";
    if (!fields.classGroup) newErrors.classGroup = "Selection required.";
    if (!fields.board) newErrors.board = "Selection required.";
    if (!/^[6-9]\d{9}$/.test(fields.mobileNumber))
      newErrors.mobileNumber = "Enter a valid 10-digit mobile.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) setIsSubmitted(true);
  };

  return (
    <section
      id="admissions"
      className="py-32 bg-canvas border-t border-border-subtle relative z-10 px-6"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-8 animate-slide-up">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-success bg-success/10 px-3 py-1 rounded-full">
              Admissions Portal
            </span>
            <h2 className="mt-6 text-4xl sm:text-5xl font-display font-black tracking-tight text-primary leading-tight">
              Secure Your Seat For The Next Cohort
            </h2>
          </div>
          <div className="space-y-5 bg-surface border border-border-subtle p-8 rounded-3xl shadow-sm">
            {[
              "Personal attention boundaries capped precisely per batch.",
              "Rigorous periodic test matrices matched to Board blueprints.",
              "Dedicated doubt-clearing sessions led by top instructors.",
              "Continuous student progress analysis logs extended to parents.",
            ].map((benefit, bIdx) => (
              <div key={bIdx} className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-success shrink-0" />
                <p className="text-sm text-primary-light font-medium">
                  {benefit}
                </p>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <a
              href={`tel:${siteData.siteConfig.phone}`}
              className="flex items-center gap-2 bg-surface border border-border-subtle text-primary px-5 py-3.5 rounded-xl text-xs font-black uppercase tracking-wider hover:shadow-card transition-all"
            >
              <PhoneCall className="w-4 h-4" /> Call Desk
            </a>
            <a
              href={`https://wa.me/${siteData.siteConfig.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#25D366]/10 text-[#25D366] px-5 py-3.5 rounded-xl text-xs font-black uppercase tracking-wider hover:bg-[#25D366]/20 transition-all"
            >
              <MessagesSquare className="w-4 h-4" /> WhatsApp
            </a>
          </div>
        </div>

        <div className="bg-surface border border-border-subtle rounded-3xl p-8 sm:p-10 shadow-card min-h-150 flex flex-col justify-center">
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="text-[10px] font-black text-primary-light uppercase tracking-widest block mb-2">
                    Student Name
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={fields.fullName}
                    onChange={handleInput}
                    className="w-full bg-canvas border border-border-subtle rounded-xl px-4 py-3.5 text-sm text-primary outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
                  />
                  {errors.fullName && (
                    <p className="text-accent text-xs mt-1.5 font-bold">
                      {errors.fullName}
                    </p>
                  )}
                </div>
                <div>
                  <label className="text-[10px] font-black text-primary-light uppercase tracking-widest block mb-2">
                    Mobile Number
                  </label>
                  <input
                    type="tel"
                    name="mobileNumber"
                    value={fields.mobileNumber}
                    onChange={handleInput}
                    className="w-full bg-canvas border border-border-subtle rounded-xl px-4 py-3.5 text-sm text-primary outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
                  />
                  {errors.mobileNumber && (
                    <p className="text-accent text-xs mt-1.5 font-bold">
                      {errors.mobileNumber}
                    </p>
                  )}
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="text-[10px] font-black text-primary-light uppercase tracking-widest block mb-2">
                    Target Range
                  </label>
                  <select
                    name="classGroup"
                    value={fields.classGroup}
                    onChange={handleInput}
                    className="w-full bg-canvas border border-border-subtle rounded-xl px-4 py-3.5 text-sm text-primary outline-none focus:border-accent transition-all"
                  >
                    <option value="">Select Range</option>
                    <option value="6-8">Classes 6 – 8</option>
                    <option value="9-10">Classes 9 – 10</option>
                    <option value="11-12">Classes 11 – 12</option>
                  </select>
                  {errors.classGroup && (
                    <p className="text-accent text-xs mt-1.5 font-bold">
                      {errors.classGroup}
                    </p>
                  )}
                </div>
                <div>
                  <label className="text-[10px] font-black text-primary-light uppercase tracking-widest block mb-2">
                    Board
                  </label>
                  <select
                    name="board"
                    value={fields.board}
                    onChange={handleInput}
                    className="w-full bg-canvas border border-border-subtle rounded-xl px-4 py-3.5 text-sm text-primary outline-none focus:border-accent transition-all"
                  >
                    <option value="">Select Board</option>
                    <option value="CBSE">CBSE</option>
                    <option value="TBSE">TBSE</option>
                  </select>
                  {errors.board && (
                    <p className="text-accent text-xs mt-1.5 font-bold">
                      {errors.board}
                    </p>
                  )}
                </div>
              </div>
              <div>
                <label className="text-[10px] font-black text-primary-light uppercase tracking-widest block mb-2">
                  Message (Optional)
                </label>
                <textarea
                  name="message"
                  value={fields.message}
                  onChange={handleInput}
                  rows={4}
                  className="w-full bg-canvas border border-border-subtle rounded-xl px-4 py-3.5 text-sm text-primary outline-none focus:border-accent transition-all resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-primary text-surface py-4 rounded-xl text-sm font-black uppercase tracking-widest hover:bg-accent transition-colors shadow-card"
              >
                Submit Request
              </button>
            </form>
          ) : (
            <div className="text-center py-12 animate-fade-in flex flex-col items-center">
              <div className="w-20 h-20 bg-success/10 text-success rounded-full flex items-center justify-center mb-6">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="text-3xl font-display font-black text-primary tracking-tight mb-3 flex items-center justify-center gap-2">
                Request Logged <Sparkles className="w-6 h-6 text-accent" />
              </h3>
              <p className="text-primary-light font-medium leading-relaxed mb-8">
                Thank you, {fields.fullName}. Our desk coordinator will reach
                out to your mobile within 24 hours.
              </p>
              <button
                onClick={() => window.location.reload()}
                className="bg-canvas border border-border-subtle text-primary px-6 py-3 rounded-lg text-xs font-black uppercase tracking-widest hover:bg-surface transition-all"
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
