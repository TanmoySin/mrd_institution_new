import { useEffect, useRef, useCallback, type JSX } from "react";
import { BellRing, X } from "lucide-react";

export interface ToastProps {
  message: string;
  isVisible: boolean;
  onClose: () => void;
  duration?: number;
}

export default function Toast({
  message,
  isVisible,
  onClose,
  duration = 4000,
}: ToastProps): JSX.Element | null {
  const timerRef = useRef<number | null>(null);

  const startTimer = useCallback(() => {
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      onClose();
    }, duration);
  }, [duration, onClose]);

  const clearTimer = useCallback(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  useEffect(() => {
    if (isVisible) {
      startTimer();
    } else {
      clearTimer();
    }
    return () => clearTimer();
  }, [isVisible, startTimer, clearTimer]);

  if (!isVisible) return null;

  return (
    <div
      role="status"
      aria-live="polite"
      onMouseEnter={clearTimer}
      onMouseLeave={startTimer}
      className="fixed bottom-6 left-6 z-50 flex items-start gap-3 max-w-sm w-full p-4 rounded-xl 
                 bg-slate-800/95 backdrop-blur-md border border-slate-700 shadow-xl shadow-slate-900/20 
                 text-slate-100 animate-in slide-in-from-bottom-5 fade-in duration-300 ease-out"
    >
      <div className="flex items-center justify-center shrink-0 w-9 h-9 rounded-lg bg-blue-500/20 text-blue-400">
        <BellRing className="w-4.5 h-4.5" aria-hidden="true" />
      </div>

      <div className="flex-1 min-w-0 pt-0.5">
        <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1">
          Admissions Update
        </p>
        <p className="text-sm font-medium leading-snug text-slate-200">
          {message}
        </p>
      </div>

      <button
        onClick={onClose}
        aria-label="Close notification"
        className="shrink-0 p-1 rounded-md text-slate-400 hover:text-slate-100 hover:bg-slate-700/50 
                   transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50"
      >
        <X className="w-4 h-4" aria-hidden="true" />
      </button>
    </div>
  );
}
