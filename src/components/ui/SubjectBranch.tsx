import { type JSX } from "react";

export interface BranchItem {
  id: string;
  xPosition: string;
  colorClass: string;
}

export interface SubjectBranchProps {
  title?: string;
  branches?: BranchItem[];
}

export default function SubjectBranch({
  title = "Science Core Separation",
  branches = [
    {
      id: "info",
      xPosition: "20%",
      colorClass: "stroke-blue-500 dark:stroke-blue-400",
    },
    {
      id: "warning",
      xPosition: "50%",
      colorClass: "stroke-amber-500 dark:stroke-amber-400",
    },
    {
      id: "success",
      xPosition: "80%",
      colorClass: "stroke-emerald-500 dark:stroke-emerald-400",
    },
  ],
}: SubjectBranchProps): JSX.Element {
  const firstX = branches[0]?.xPosition || "50%";
  const lastX = branches[branches.length - 1]?.xPosition || "50%";

  return (
    <div className="w-full flex flex-col items-center group">
      <div className="bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 text-xs font-bold uppercase tracking-widest px-5 py-2 rounded-xl shadow-md dark:shadow-slate-900/20 z-10 relative transition-transform duration-300 group-hover:-translate-y-0.5">
        {title}
      </div>

      <svg
        className="w-full h-16 block pointer-events-none z-0 -mt-2"
        viewBox="0 0 300 64"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <line
          x1="50%"
          y1="8"
          x2="50%"
          y2="32"
          className="stroke-slate-300 dark:stroke-slate-600 transition-colors duration-300"
          strokeWidth="2"
          strokeDasharray="4 4"
        />
        <line
          x1={firstX}
          y1="32"
          x2={lastX}
          y2="32"
          className="stroke-slate-300 dark:stroke-slate-600 transition-colors duration-300"
          strokeWidth="2"
          strokeLinecap="round"
        />
        {branches.map((branch) => (
          <line
            key={branch.id}
            x1={branch.xPosition}
            y1="32"
            x2={branch.xPosition}
            y2="64"
            className={`${branch.colorClass} stroke-[2.5px] transition-all duration-500`}
            strokeLinecap="round"
          />
        ))}
      </svg>
    </div>
  );
}
