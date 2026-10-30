import { Sparkles, ArrowRight, Calendar, Clock, Star, Shield, Award } from "lucide-react";
import { clinic } from "../content/clinic";
import Container from "./ui/Container";
import Button from "./ui/Button";

export default function Hero({ onBookClick }) {
  const { hero } = clinic;

  return (
    <section className="relative pt-6 pb-16 md:pt-12 md:pb-24 overflow-hidden bg-[#F6FBFC]">
      {/* Background soft ambient gradient blobs */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#DCEFF7]/60 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-[#D6EFE3]/50 rounded-full blur-3xl pointer-events-none -z-10" />

      <Container>
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Narrative Copy & CTAs (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Badge Pill */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#D6EFE3] text-[#1F5A4A] text-xs sm:text-sm font-semibold tracking-wide mb-6 shadow-sm border border-[#B7E4CC]/50">
              <span className="w-2 h-2 rounded-full bg-[#1F5A4A] animate-pulse" />
              <span>{hero.badge}</span>
            </div>

            {/* H1 Headline */}
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-[62px] font-bold text-[#0F3B4A] tracking-tight leading-[1.08] max-w-2xl">
              {hero.headlinePrimary}{" "}
              <span className="text-[#1F5A4A] relative inline-block">
                {hero.headlineHighlight}
                <svg
                  className="absolute -bottom-2 left-0 w-full text-[#B7E4CC]/70 -z-10"
                  height="10"
                  viewBox="0 0 200 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 7C50 2 150 2 197 7"
                    stroke="currentColor"
                    strokeWidth="6"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>

            {/* Supporting Subhead */}
            <p className="mt-6 text-base sm:text-lg text-[#33525C] max-w-[540px] leading-relaxed font-normal">
              {hero.subhead}
            </p>

            {/* CTAs */}
            <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <Button
                href="#contact"
                onClick={onBookClick}
                variant="primary"
                size="lg"
                className="gap-2.5 shadow-pill"
              >
                <Calendar size={18} />
                <span>Book a Visit</span>
              </Button>

              <Button
                href="#services"
                variant="secondary"
                size="lg"
                className="gap-2 text-[#0F3B4A]"
              >
                <span>Explore Treatments</span>
                <ArrowRight size={16} />
              </Button>
            </div>

            {/* Stats Row */}
            <div className="mt-12 sm:mt-14 pt-8 border-t border-[#DCEFF7] grid grid-cols-3 gap-4 sm:gap-8 w-full max-w-lg">
              {hero.stats.map((stat, i) => (
                <div key={i} className="flex flex-col">
                  <span className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1F5A4A] leading-tight">
                    {stat.value}
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-[#0F3B4A] mt-0.5">
                    {stat.label}
                  </span>
                  <span className="text-[11px] text-[#33525C]/75 hidden sm:inline-block">
                    {stat.sub}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Visual Showcase (5 cols) */}
          <div className="lg:col-span-5 relative">
            {/* Rounded 36px Main Card Container */}
            <div className="relative rounded-[36px] bg-gradient-to-br from-[#BFE3F2] via-[#DCEFF7] to-[#D6EFE3] p-3 sm:p-4 shadow-elevated border border-[#DCEFF7] overflow-hidden min-h-[460px] flex items-center justify-center">
              {/* Decorative Mint & White Circles */}
              <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-white/40 blur-xl pointer-events-none" />
              <div className="absolute -bottom-16 -left-16 w-56 h-56 rounded-full bg-[#B7E4CC]/50 blur-xl pointer-events-none" />

              {/* Main Photo: Dr. J. Gupta in clinic */}
              <div className="relative w-full h-[440px] sm:h-[480px] rounded-[28px] overflow-hidden bg-white/60 shadow-inner flex items-end justify-center">
                <img
                  src={hero.image}
                  alt="Dr. J. Gupta - Chief Dental Surgeon"
                  className="w-full h-full object-cover object-top filter brightness-[1.02] contrast-[1.03] hover:scale-105 transition-transform duration-700"
                />

                {/* Subtle gradient overlay at bottom of photo */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F3B4A]/50 via-transparent to-transparent pointer-events-none" />

                {/* Overlaid Doctor Designation Badge */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3.5 py-1.5 rounded-full shadow-md border border-[#DCEFF7] flex items-center gap-1.5 text-xs text-[#0F3B4A]">
                  <Award size={14} className="text-[#1F5A4A]" />
                  <span className="font-semibold">Biolase Laser Certified</span>
                </div>
              </div>

              {/* Floating Next Slot Pill Card (Bottom-Left) */}
              <div className="absolute bottom-6 left-6 right-6 sm:right-auto bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-card border border-[#DCEFF7] flex items-center gap-3.5 z-20">
                <div className="w-10 h-10 rounded-xl bg-[#D6EFE3] text-[#1F5A4A] flex items-center justify-center shrink-0">
                  <Clock size={20} />
                </div>
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-wider text-[#1F6F99]">
                    Next Free Consultation Slot
                  </p>
                  <p className="font-heading font-bold text-sm sm:text-base text-[#0F3B4A]">
                    {hero.nextSlot}
                  </p>
                </div>
              </div>
            </div>

            {/* Secondary Floating Experience Badge with Circle Logo */}
            <div className="hidden sm:flex absolute -top-5 -left-6 bg-white p-2.5 pr-4 rounded-full shadow-card border border-[#DCEFF7] items-center gap-3 z-20">
              <div className="w-11 h-11 rounded-full overflow-hidden bg-[#0F3B4A] shadow-inner border border-[#B7E4CC] shrink-0">
                <img
                  src={clinic.logo}
                  alt="Dr. Gupta's Dental Clinic Official Emblem"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="font-heading font-bold text-xs text-[#0F3B4A]">Dr. Gupta's Clinic • Est. 2013</p>
                <p className="text-[10px] text-[#1F5A4A] font-semibold">100% Pain-Free Protocols</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

