import { Star, CheckCircle2, ExternalLink, Quote } from "lucide-react";
import { clinic } from "../content/clinic";
import Container from "./ui/Container";
import SectionHeader from "./ui/SectionHeader";
import Button from "./ui/Button";

export default function Reviews() {
  return (
    <section id="reviews" className="py-20 md:py-28 bg-white relative overflow-hidden">
      <Container>
        <SectionHeader
          eyebrow="PATIENT REVIEWS"
          title="Kind words from our patients."
          subtitle="Read firsthand experiences from families who have trusted Dr. Gupta with their smiles across more than a decade of gentle clinical care."
        />

        {/* 3 Cards Grid (alternating sky-100 / mint-100, 28px radius) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {clinic.reviews.map((rev, index) => {
            const isMint = index % 2 === 0;

            return (
              <div
                key={rev.id}
                className={`rounded-[28px] p-8 border flex flex-col justify-between shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 relative group ${
                  isMint
                    ? "bg-[#D6EFE3]/50 border-[#B7E4CC]/60"
                    : "bg-[#DCEFF7]/50 border-[#DCEFF7]"
                }`}
              >
                {/* Decorative Quote Icon Background */}
                <Quote
                  size={48}
                  className="absolute top-6 right-6 text-black/5 group-hover:text-black/10 transition-colors pointer-events-none"
                />

                <div>
                  {/* Rating Stars & Verified Badge */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex gap-1 text-[#E5A93C]">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} size={16} fill="currentColor" />
                      ))}
                    </div>

                    <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#1F5A4A] bg-white px-2.5 py-0.5 rounded-full shadow-sm">
                      <CheckCircle2 size={12} /> Verified Patient
                    </span>
                  </div>

                  {/* Review Text (16px) */}
                  <p className="text-base text-[#33525C] leading-relaxed italic">
                    "{rev.text}"
                  </p>
                </div>

                {/* Patient Signature & Treatment */}
                <div className="mt-6 pt-5 border-t border-black/5">
                  <h4 className="font-heading font-bold text-base text-[#0F3B4A]">
                    {rev.name}
                  </h4>
                  <p className="text-xs font-semibold text-[#1F5A4A] mt-0.5">
                    {rev.treatment} • <span className="font-normal text-[#33525C]/75">{rev.date}</span>
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* See all reviews on Google CTA */}
        <div className="text-center">
          <Button
            href={clinic.social.google}
            target="_blank"
            rel="noopener noreferrer"
            variant="outline"
            size="md"
            className="gap-2 bg-white"
          >
            <span>See All 850+ Google Reviews (Rated 4.9★)</span>
            <ExternalLink size={14} />
          </Button>
        </div>
      </Container>
    </section>
  );
}

