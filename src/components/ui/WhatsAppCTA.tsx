import { type JSX } from "react";
import { MessageCircle } from "lucide-react";
import { siteData } from "../../config/data";

export interface WhatsAppCTAProps {
  phoneNumber?: string;
  defaultMessage?: string;
}

const WhatsAppCTA = ({
  phoneNumber = siteData?.siteConfig?.whatsapp,
  defaultMessage = "Hello! I'd like to know more about the admissions process.",
}: WhatsAppCTAProps): JSX.Element | null => {
  if (!phoneNumber) {
    console.warn("WhatsAppCTA: No phone number provided.");
    return null;
  }

  const encodedMessage = encodeURIComponent(defaultMessage);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-row-reverse items-center gap-4 pointer-events-none">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with our support team on WhatsApp"
        className="peer group relative flex items-center justify-center w-14 h-14 bg-[#25D366] hover:bg-[#20BA59] text-white rounded-full transition-all duration-300 ease-in-out hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#25D366] shadow-lg shadow-[#25D366]/20 pointer-events-auto"
      >
        <span className="absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-20 animate-ping group-hover:animate-none duration-1000" />

        <MessageCircle
          className="relative z-10 w-6 h-6 transition-transform duration-300 ease-in-out group-hover:scale-110"
          aria-hidden="true"
        />
      </a>

      <div
        role="tooltip"
        className="hidden md:flex items-center px-4 py-2.5 rounded-2xl bg-white text-slate-700 shadow-sm border border-slate-100 opacity-0 translate-x-2 transition-all duration-300 ease-in-out font-medium text-sm peer-hover:opacity-100 peer-hover:translate-x-0 pointer-events-none"
      >
        Chat with us
      </div>
    </div>
  );
};

export default WhatsAppCTA;
