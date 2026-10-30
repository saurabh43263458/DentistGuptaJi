import { useState, useEffect } from "react";
import { Phone, MessageCircle, ArrowUp } from "lucide-react";
import { clinic } from "../content/clinic";

export default function FloatingActions() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-6 right-5 z-40 flex flex-col items-end gap-3 select-none">
      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="w-11 h-11 rounded-full bg-white text-[#0F3B4A] hover:bg-[#DCEFF7] border border-[#DCEFF7] shadow-card flex items-center justify-center transition-all duration-300 hover:scale-105 active:scale-95 animate-in fade-in cursor-pointer"
          aria-label="Scroll back to top"
        >
          <ArrowUp size={18} />
        </button>
      )}

      {/* Floating Call Button (Mobile & Desktop) */}
      <a
        href={`tel:${clinic.whatsapp}`}
        className="w-13 h-13 rounded-full bg-[#1F5A4A] text-white shadow-elevated flex items-center justify-center hover:scale-110 active:scale-95 transition-all duration-300 border-2 border-white group relative"
        aria-label={`Call Dr. Gupta's Clinic at ${clinic.phone}`}
      >
        <Phone size={22} />
        <span className="sr-only">Call Clinic</span>

        {/* Desktop Tooltip */}
        <span className="absolute right-16 bg-[#0F3B4A] text-white text-xs font-semibold px-3 py-1.5 rounded-xl whitespace-nowrap shadow-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none hidden sm:block">
          Call: {clinic.phone}
        </span>
      </a>

      {/* Floating WhatsApp Concierge Button */}
      <a
        href={`https://wa.me/${clinic.whatsapp}?text=Hi%20Dr.%20Gupta's%20Clinic!%20I'd%20like%20to%20inquire%20about%20dental%20appointments.`}
        target="_blank"
        rel="noreferrer"
        className="w-14 h-14 rounded-full bg-[#25D366] text-white shadow-elevated flex items-center justify-center hover:scale-110 active:scale-95 transition-all duration-300 border-2 border-white group relative"
        aria-label="Chat on WhatsApp"
      >
        {/* Pulsing ring */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30 pointer-events-none" />
        <MessageCircle size={28} className="relative z-10" />

        {/* Desktop Tooltip */}
        <span className="absolute right-16 bg-[#0F3B4A] text-white text-xs font-semibold px-3 py-1.5 rounded-xl whitespace-nowrap shadow-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none hidden sm:block">
          Chat on WhatsApp
        </span>
      </a>
    </div>
  );
}

