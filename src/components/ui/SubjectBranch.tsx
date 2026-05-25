export default function SubjectBranch() {
  return (
    <div className="w-full flex flex-col items-center">
      <div className="bg-canvas border border-border-subtle text-primary text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-lg shadow-sm z-10 relative">
        Science Core Separation
      </div>

      <svg
        className="w-full h-12 block text-border-subtle pointer-events-none z-0 mt-0.5"
        viewBox="0 0 300 48"
        preserveAspectRatio="none"
      >
        <line
          x1="50%"
          y1="0"
          x2="50%"
          y2="24"
          stroke="currentColor"
          strokeWidth="2"
          strokeDasharray="4 4"
        />
        <line
          x1="20%"
          y1="24"
          x2="80%"
          y2="24"
          stroke="currentColor"
          strokeWidth="2"
        />

        <line
          x1="20%"
          y1="24"
          x2="20%"
          y2="48"
          stroke="var(--color-info)"
          strokeWidth="2.5"
        />
        <line
          x1="50%"
          y1="24"
          x2="50%"
          y2="48"
          stroke="var(--color-warning)"
          strokeWidth="2.5"
        />
        <line
          x1="80%"
          y1="24"
          x2="80%"
          y2="48"
          stroke="var(--color-success)"
          strokeWidth="2.5"
        />
      </svg>
    </div>
  );
}
