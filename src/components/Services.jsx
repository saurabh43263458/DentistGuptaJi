import { useState } from "react";
import {
  Zap,
  ShieldCheck,
  Sparkles,
  Smile,
  LayoutGrid,
  HeartHandshake,
  Activity,
  Scissors,
  ArrowRight,
  Info
} from "lucide-react";
import { clinic } from "../content/clinic";
import Container from "./ui/Container";
import SectionHeader from "./ui/SectionHeader";
import TreatmentModal from "./TreatmentModal";

const iconMap = {
  Zap: Zap,
  ShieldCheck: ShieldCheck,
  Sparkles: Sparkles,
  Smile: Smile,
  LayoutGrid: LayoutGrid,
  HeartHandshake: HeartHandshake,
  Activity: Activity,
  Scissors: Scissors,
};

export default function Services({ onSelectServiceForBooking }) {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedService, setSelectedService] = useState(null);

  const categories = [
    "All",
    "Specialized Care",
    "Restorative",
    "Cosmetic",
    "Orthodontics",
    "Preventive",
  ];

  const filteredServices = clinic.services.filter(
    (s) => activeCategory === "All" || s.category === activeCategory
  );

  return (
    <section id="services" className="py-20 md:py-28 bg-[#F6FBFC] relative">
      <Container>
        <SectionHeader
          eyebrow="OUR TREATMENTS"
          title="Everything your smile needs, in one place."
          subtitle="From gentle hygiene cleanings to advanced BIOLASE laser surgeries and single-visit root canals, every procedure is performed with hospital-grade sterility and zero rush."
        />

        {/* Category Pill Filters */}
        <div className="flex items-center justify-center gap-2 sm:gap-3 flex-wrap mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide transition-all cursor-pointer ${
                activeCategory === cat
                  ? "bg-[#1F5A4A] text-white shadow-pill scale-105"
                  : "bg-white text-[#33525C] hover:bg-[#DCEFF7] border border-[#DCEFF7]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Treatments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredServices.map((service, index) => {
            const IconComponent = iconMap[service.icon] || Sparkles;
            const isMint = index % 2 === 0;

            return (
              <div
                key={service.id}
                onClick={() => setSelectedService(service)}
                className="bg-white rounded-[28px] p-7 sm:p-8 border border-[#E3F1F6] shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between group cursor-pointer"
              >
                <div>
                  {/* Icon Tile (52px rounded) alternating sky-100 and mint-100 */}
                  <div className="flex items-center justify-between mb-6">
                    <div
                      className={`w-[52px] h-[52px] rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110 duration-300 ${
                        isMint
                          ? "bg-[#D6EFE3] text-[#1F5A4A]"
                          : "bg-[#DCEFF7] text-[#1F6F99]"
                      }`}
                    >
                      <IconComponent size={26} />
                    </div>

                    <span className="text-[11px] font-semibold uppercase tracking-wider text-[#1F6F99] bg-[#F6FBFC] px-3 py-1 rounded-full border border-[#DCEFF7]">
                      {service.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-heading text-xl sm:text-[22px] font-bold text-[#0F3B4A] group-hover:text-[#1F5A4A] transition-colors leading-snug">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-3 text-sm text-[#33525C] leading-relaxed line-clamp-3">
                    {service.shortDesc}
                  </p>
                </div>

                {/* Footer with Price and Details CTA */}
                <div className="mt-6 pt-5 border-t border-[#DCEFF7] flex items-center justify-between">
                  <div>
                    <span className="text-[11px] font-medium text-[#33525C]/70 block">
                      Estimated Fee
                    </span>
                    <span className="font-heading font-bold text-base text-[#1F5A4A]">
                      From ₹{service.priceFrom.toLocaleString("en-IN")}
                    </span>
                  </div>

                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1F6F99] group-hover:text-[#1F5A4A] transition-colors">
                    <span>View Details</span>
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </Container>

      {/* Pop-up Treatment Details Modal */}
      <TreatmentModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onSelectBooking={(service) => {
          setSelectedService(null);
          if (onSelectServiceForBooking) {
            onSelectServiceForBooking(service);
          }
        }}
      />
    </section>
  );
}

