import { Phone, Mail, MapPin, ExternalLink, ArrowUp, Shield } from "lucide-react";
import { clinic } from "../content/clinic";
import Container from "./ui/Container";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#0F3B4A] text-[#CFE6EE] pt-16 pb-12 border-t border-[#1F5A4A]/40 relative overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-full overflow-hidden bg-[#0F3B4A] shadow-md border-2 border-[#B7E4CC] shrink-0">
                <img
                  src={clinic.logo}
                  alt="Dr. Gupta's Dental Clinic Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="font-heading text-xl sm:text-2xl font-bold tracking-tight text-white">
                Dr. Gupta's
              </span>
            </div>

            <p className="text-xs text-[#B7E4CC] font-semibold uppercase tracking-wider">
              {clinic.tagline} • Since 2013
            </p>

            <p className="text-xs sm:text-sm text-[#CFE6EE]/80 leading-relaxed font-light">
              Advanced, pain-free dental care with BIOLASE lasers, single-visit root canals, and gentle preventive dentistry for the whole family.
            </p>

            {/* Emergency Hotline */}
            <div className="pt-2">
              <a
                href={`tel:${clinic.whatsapp}`}
                className="inline-flex items-center gap-2 text-xs font-semibold text-white bg-[#1F5A4A] px-4 py-2 rounded-full hover:bg-[#17483B] transition"
              >
                <Phone size={13} className="text-[#B7E4CC]" />
                <span>Emergency: {clinic.phone}</span>
              </a>
            </div>
          </div>

          {/* Quick Services Links */}
          <div>
            <h4 className="font-heading font-bold text-base text-white mb-4">
              Dental Treatments
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-[#CFE6EE]/80">
              {clinic.services.slice(0, 6).map((service) => (
                <li key={service.id}>
                  <a
                    href="#services"
                    className="hover:text-white transition-colors flex items-center justify-between group"
                  >
                    <span>{service.title}</span>
                    <span className="text-[10px] text-[#B7E4CC] opacity-0 group-hover:opacity-100 transition-opacity">
                      From ₹{service.priceFrom}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Clinic Timings & Location */}
          <div>
            <h4 className="font-heading font-bold text-base text-white mb-4">
              Hours & Location
            </h4>
            <div className="space-y-3 text-xs sm:text-sm text-[#CFE6EE]/80 leading-relaxed">
              <div className="flex items-start gap-2.5">
                <MapPin size={16} className="text-[#B7E4CC] shrink-0 mt-0.5" />
                <span>{clinic.address}, {clinic.city}</span>
              </div>
              <div>
                <p className="text-white font-medium">Consulting Timings:</p>
                <p>Mon – Sat: 10:00 AM – 08:30 PM</p>
                <p>Sunday: 10:30 AM – 02:00 PM</p>
              </div>
              <div className="pt-1">
                <p className="text-[#B7E4CC] text-xs font-semibold">
                  ✓ Valet and parking available
                </p>
              </div>
            </div>
          </div>

          {/* Patient Care & Accreditations */}
          <div>
            <h4 className="font-heading font-bold text-base text-white mb-4">
              Accreditations & Trust
            </h4>
            <div className="space-y-3 text-xs text-[#CFE6EE]/80 leading-relaxed">
              <div className="bg-white/5 p-3 rounded-xl border border-white/10">
                <p className="text-white font-bold mb-0.5">BIOLASE Laser Certified</p>
                <p className="text-[11px]">Minimally invasive, drill-free dental technology</p>
              </div>
              <div className="bg-white/5 p-3 rounded-xl border border-white/10">
                <p className="text-white font-bold mb-0.5">Indian Dental Association (IDA)</p>
                <p className="text-[11px]">Active certified lifetime clinical practitioner</p>
              </div>
              <div className="pt-2">
                <a
                  href={clinic.social.google}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-[#B7E4CC] hover:underline"
                >
                  <span>Rated 4.9★ on Google Reviews</span>
                  <ExternalLink size={12} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#CFE6EE]/60 gap-4">
          <p>© {new Date().getFullYear()} Dr. Gupta's Dental Clinic. All clinical rights reserved.</p>

          <div className="flex items-center gap-6">
            <span className="hidden sm:inline">Crafted with clinical precision & patient care</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all flex items-center gap-1.5 cursor-pointer"
              aria-label="Scroll back to top"
            >
              <ArrowUp size={14} />
              <span className="text-[10px] uppercase font-mono">Top</span>
            </button>
          </div>
        </div>
      </Container>
    </footer>
  );
}

