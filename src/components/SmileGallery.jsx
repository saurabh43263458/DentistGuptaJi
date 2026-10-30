import { useState } from "react";
import { Sparkles, CheckCircle2, Shield, Eye } from "lucide-react";
import { clinic } from "../content/clinic";
import Container from "./ui/Container";
import SectionHeader from "./ui/SectionHeader";

function ComparisonCard({ item }) {
  const [sliderPos, setSliderPos] = useState(50);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="bg-white rounded-[28px] overflow-hidden border border-[#DCEFF7] shadow-card hover:shadow-elevated transition-all duration-300 flex flex-col">
      {/* Interactive Slider Area */}
      <div
        className="relative h-64 sm:h-72 w-full select-none overflow-hidden bg-[#0F3B4A]"
        onMouseMove={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
          setSliderPos((x / rect.width) * 100);
        }}
        onTouchMove={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          const touch = e.touches[0];
          const x = Math.max(0, Math.min(touch.clientX - rect.left, rect.width));
          setSliderPos((x / rect.width) * 100);
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* After Image (Full Background) */}
        <img
          src={item.afterImg}
          alt={`After ${item.title}`}
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* After Tag */}
        <div className="absolute bottom-3 right-3 bg-[#D6EFE3]/90 text-[#1F5A4A] text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-sm z-10 backdrop-blur-sm">
          After Treatment
        </div>

        {/* Before Image (Clipped) */}
        <div
          className="absolute inset-y-0 left-0 overflow-hidden"
          style={{ width: `${sliderPos}%` }}
        >
          <img
            src={item.beforeImg}
            alt={`Before ${item.title}`}
            className="absolute inset-0 w-full h-full object-cover max-w-none"
            style={{ width: "100%", height: "100%" }}
          />
          {/* Before Tag */}
          <div className="absolute bottom-3 left-3 bg-[#DCEFF7]/90 text-[#0F3B4A] text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-sm z-10 backdrop-blur-sm">
            Before
          </div>
        </div>

        {/* Vertical Divider Line with handle */}
        <div
          className="absolute inset-y-0 w-0.5 bg-white shadow-[0_0_10px_rgba(0,0,0,0.5)] z-20 pointer-events-none"
          style={{ left: `${sliderPos}%` }}
        >
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center text-[#1F5A4A] border-2 border-[#1F5A4A]">
            <span className="text-xs font-bold font-mono">⬌</span>
          </div>
        </div>

        {/* Quick helper badge */}
        {!isHovered && (
          <div className="absolute top-3 left-3 bg-black/40 backdrop-blur-md text-white text-[11px] px-2.5 py-1 rounded-full flex items-center gap-1 z-20">
            <Eye size={12} />
            <span>Slide to compare</span>
          </div>
        )}
      </div>

      {/* Card Info Area */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          <span className="text-[11px] font-semibold text-[#1F6F99] uppercase tracking-wider block mb-1">
            {item.treatment} • {item.duration}
          </span>
          <h3 className="font-heading font-bold text-lg text-[#0F3B4A] leading-snug">
            {item.title}
          </h3>

          <div className="mt-4 grid grid-cols-2 gap-2 text-xs">
            <div className="bg-[#DCEFF7]/40 p-2.5 rounded-xl border border-[#DCEFF7]">
              <span className="font-semibold text-[#0F3B4A] block mb-0.5">Condition:</span>
              <span className="text-[#33525C]">{item.before}</span>
            </div>
            <div className="bg-[#D6EFE3]/40 p-2.5 rounded-xl border border-[#B7E4CC]/40">
              <span className="font-semibold text-[#1F5A4A] block mb-0.5">Outcome:</span>
              <span className="text-[#33525C]">{item.after}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function SmileGallery() {
  return (
    <section id="gallery" className="py-20 md:py-28 bg-[#F6FBFC] relative">
      <Container>
        <SectionHeader
          eyebrow="REAL RESULTS"
          title="Smile Transformations"
          subtitle="Explore genuine before-and-after smile transformations achieved through laser whitening, precision root canals, and invisible aligners."
        />

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {clinic.gallery.map((item) => (
            <ComparisonCard key={item.id} item={item} />
          ))}
        </div>

        {/* Patient Consent Notice */}
        <div className="mt-10 text-center">
          <p className="text-xs text-[#33525C]/70 inline-flex items-center gap-1.5 bg-white px-4 py-2 rounded-full border border-[#DCEFF7] shadow-sm">
            <Shield size={14} className="text-[#1F5A4A]" />
            <span>All clinical documentation and photos displayed with written patient consent.</span>
          </p>
        </div>
      </Container>
    </section>
  );
}

