import { type JSX } from "react";
import { MessageCircle } from "lucide-react";
import { siteData } from "../../config/data";

export interface WhatsAppCTAProps {
  phoneNumber?: string;
  defaultMessage?: string;
}
export default function WhatsAppCTA({
  phoneNumber = siteData?.siteConfig?.whatsapp,
  defaultMessage = "Hello! I'd like to know more about the admissions process.",
}: WhatsAppCTAProps): JSX.Element | null {
  if (!phoneNumber) {
    console.warn("WhatsAppCTA: No phone number provided.");
    return null;
  }

  const encodedMessage = encodeURIComponent(defaultMessage);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center justify-end gap-3 pointer-events-none">
      <div
        role="tooltip"
        className="hidden md:flex items-center px-4 py-2 rounded-full bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 shadow-lg shadow-[#25D366]/10 opacity-0 translate-x-4 transition-all duration-300 ease-out font-medium text-sm border border-slate-100 dark:border-slate-700 pointer-events-none group-hover:opacity-100 group-hover:translate-x-0"
      >
        Chat with us!
      </div>

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with our support team on WhatsApp"
        className="relative group flex items-center justify-center w-14 h-14 bg-[#25D366] hover:bg-[#20BA59] text-white rounded-full transition-all duration-300 hover:scale-110 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#25D366]/50 shadow-lg shadow-[#25D366]/40 pointer-events-auto"
      >
        <span className="absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-40 animate-ping group-hover:animate-none" />

        <MessageCircle
          className="relative z-10 w-6 h-6 transition-transform duration-300 group-hover:-rotate-12"
          aria-hidden="true"
        />
      </a>
    </div>
  );
}
