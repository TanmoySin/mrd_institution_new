import { useEffect } from "react";
import { BellRing } from "lucide-react";

interface ToastProps {
  message: string;
  isVisible: boolean;
  onClose: () => void;
}

export default function Toast({ message, isVisible, onClose }: ToastProps) {
  useEffect(() => {
    if (!isVisible) return;
    const timer = setTimeout(() => onClose(), 3500);
    return () => clearTimeout(timer);
  }, [isVisible, onClose]);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 left-6 z-50 animate-bounce bg-surface-raised border border-brand-primary/30 text-white px-5 py-4 rounded-xl shadow-premium flex items-center gap-3 max-w-sm backdrop-blur-md">
      <div className="w-8 h-8 rounded-lg bg-brand-primary/10 flex items-center justify-center text-brand-glow shrink-0">
        <BellRing className="w-4 h-4" />
      </div>
      <div>
        <p className="text-xs text-zinc-400 font-bold uppercase tracking-wider">
          Admissions Update
        </p>
        <p className="text-sm font-medium text-zinc-200 mt-0.5">{message}</p>
      </div>
    </div>
  );
}
