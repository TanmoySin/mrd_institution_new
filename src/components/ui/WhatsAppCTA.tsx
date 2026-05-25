import { MessagesSquare } from "lucide-react";
import { siteData } from "../../config/data";

export default function WhatsAppCTA() {
  return (
    <a
      href={`https://wa.me/${siteData.siteConfig.whatsapp}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-float hover:scale-110 transition-transform group"
    >
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-pulse-ring pointer-events-none" />
      <MessagesSquare className="w-6 h-6 group-hover:-rotate-12 transition-transform" />
    </a>
  );
}
