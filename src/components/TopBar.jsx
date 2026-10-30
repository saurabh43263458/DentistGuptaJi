import { Phone, Clock, AlertCircle } from "lucide-react";
import { clinic } from "../content/clinic";
import Container from "./ui/Container";

export default function TopBar() {
  return (
    <div className="bg-[#1F5A4A] text-white text-xs sm:text-sm py-2 sm:py-2.5 border-b border-[#2C7461] transition-all">
      <Container>
        <div className="flex flex-wrap items-center justify-between gap-y-1.5 gap-x-4">
          {/* Opening Hours */}
          <div className="hidden md:flex items-center gap-2 text-white/90">
            <Clock size={14} className="text-[#B7E4CC] shrink-0" />
            <span>
              <strong>Open Mon–Sat:</strong> 10:00 AM – 08:30 PM &nbsp;|&nbsp; Sun: 10:30 AM – 02:00 PM
            </span>
          </div>

          {/* Emergency Alert Tag */}
          <div className="flex items-center gap-1.5 text-[#B7E4CC] font-medium text-xs">
            <span className="w-2 h-2 rounded-full bg-[#B7E4CC] animate-pulse" />
            <span>Same-Day Emergency Appointments Available</span>
          </div>

          {/* Direct Phone Tap-to-Call Link */}
          <a
            href={`tel:${clinic.whatsapp}`}
            className="flex items-center gap-1.5 font-semibold text-white hover:text-[#B7E4CC] transition-colors ml-auto sm:ml-0"
            aria-label={`Call clinic at ${clinic.phone}`}
          >
            <Phone size={13} className="text-[#B7E4CC] shrink-0" />
            <span>Call: {clinic.phone}</span>
          </a>
        </div>
      </Container>
    </div>
  );
}

