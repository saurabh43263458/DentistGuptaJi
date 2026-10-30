import { useState, useEffect } from "react";
import { Menu, X, Calendar, Phone, ShieldCheck } from "lucide-react";
import { clinic } from "../content/clinic";
import Container from "./ui/Container";
import Button from "./ui/Button";

const navLinks = [
  { name: "Services", href: "#services" },
  { name: "About Dr. Gupta", href: "#about" },
  { name: "Your Visit", href: "#process" },
  { name: "Results", href: "#gallery" },
  { name: "Reviews", href: "#reviews" },
  { name: "FAQ", href: "#faq" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar({ onBookClick }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Scroll-spy logic
      const sections = navLinks.map((l) => l.href.substring(1));
      const scrollPosition = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle Escape key to close mobile drawer
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-[#F6FBFC]/95 backdrop-blur-md shadow-card border-b border-[#DCEFF7] py-3"
          : "bg-[#F6FBFC] border-b border-transparent py-4"
      }`}
    >
      <Container>
        <nav className="flex items-center justify-between" aria-label="Main Navigation">
          {/* Logo Mark + Clinic Name */}
          <a
            href="#"
            className="flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1F5A4A] rounded-2xl p-1"
          >
            {/* Circle Logo Emblem */}
            <div className="w-12 h-12 rounded-full overflow-hidden bg-[#0F3B4A] shadow-md border-2 border-[#B7E4CC] group-hover:scale-105 transition-transform shrink-0 flex items-center justify-center">
              <img
                src={clinic.logo}
                alt="Dr. Gupta's Dental Clinic Logo"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-bold text-xl sm:text-2xl text-[#0F3B4A] tracking-tight leading-none">
                Dr. Gupta's
              </span>
              <span className="text-[11px] font-medium tracking-wider text-[#1F6F99] uppercase mt-0.5">
                Dental Clinic • Est. 2013
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <ul className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className={`text-sm font-medium transition-colors py-1 relative ${
                      isActive
                        ? "text-[#1F5A4A] font-semibold"
                        : "text-[#33525C] hover:text-[#1F6F99]"
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#1F5A4A] rounded-full animate-in fade-in duration-200" />
                    )}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Desktop Call / Book CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <Button
              href="#contact"
              onClick={onBookClick}
              variant="primary"
              size="md"
              className="gap-2"
            >
              <Calendar size={16} />
              <span>Book Appointment</span>
            </Button>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2.5 rounded-full text-[#0F3B4A] hover:bg-[#DCEFF7]/60 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1F5A4A]"
            aria-expanded={isOpen}
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </Container>

      {/* Mobile Drawer */}
      {isOpen && (
        <div
          className="fixed inset-0 top-[60px] z-50 bg-[#0F3B4A]/40 backdrop-blur-sm lg:hidden animate-in fade-in duration-200"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="bg-[#F6FBFC] w-full max-w-sm ml-auto h-full p-6 shadow-elevated border-l border-[#DCEFF7] flex flex-col justify-between overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-[#DCEFF7]">
                <span className="font-heading font-bold text-lg text-[#0F3B4A]">
                  Navigation Menu
                </span>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1.5 rounded-full hover:bg-[#DCEFF7] text-[#0F3B4A]"
                  aria-label="Close menu"
                >
                  <X size={20} />
                </button>
              </div>

              <ul className="mt-6 space-y-3">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="block px-4 py-2.5 rounded-2xl text-base font-medium text-[#0F3B4A] hover:bg-[#DCEFF7] hover:text-[#1F5A4A] transition-all"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Mobile Booking Button at Bottom */}
            <div className="pt-6 border-t border-[#DCEFF7] flex flex-col gap-3">
              <Button
                href="#contact"
                onClick={() => {
                  setIsOpen(false);
                  if (onBookClick) onBookClick();
                }}
                variant="primary"
                size="lg"
                className="w-full gap-2 text-center"
              >
                <Calendar size={18} />
                <span>Book Appointment</span>
              </Button>
              <a
                href={`tel:${clinic.whatsapp}`}
                className="inline-flex items-center justify-center gap-2 py-3 rounded-full text-xs font-semibold uppercase tracking-wider text-[#1F5A4A] bg-[#D6EFE3]"
              >
                <Phone size={14} />
                <span>Call {clinic.phone}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

