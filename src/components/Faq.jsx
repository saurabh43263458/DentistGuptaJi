import { useState } from "react";
import { Plus, Minus, HelpCircle, MessageCircle } from "lucide-react";
import { clinic } from "../content/clinic";
import Container from "./ui/Container";
import SectionHeader from "./ui/SectionHeader";
import Button from "./ui/Button";

export default function Faq() {
  // First item open by default
  const [openIndex, setOpenIndex] = useState(0);

  const toggleItem = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <section id="faq" className="py-20 md:py-28 bg-[#F6FBFC] relative">
      <Container>
        <SectionHeader
          eyebrow="PATIENT QUESTIONS"
          title="Questions, answered."
          subtitle="Clear, honest information about dental procedures, comfort techniques, insurance, and emergency protocols."
        />

        {/* Max-width 860px container */}
        <div className="max-w-[860px] mx-auto space-y-4">
          {clinic.faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const contentId = `faq-content-${index}`;
            const headerId = `faq-header-${index}`;

            return (
              <div
                key={faq.q}
                className="bg-white rounded-[24px] border border-[#DCEFF7] shadow-sm overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  id={headerId}
                  onClick={() => toggleItem(index)}
                  aria-expanded={isOpen}
                  aria-controls={contentId}
                  className="w-full min-h-[64px] px-6 sm:px-8 py-5 text-left flex items-center justify-between gap-4 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1F5A4A]"
                >
                  <span className="font-heading font-bold text-base sm:text-lg text-[#0F3B4A] leading-snug">
                    {faq.q}
                  </span>

                  {/* Plus / Minus indicator in rounded mint circle */}
                  <div
                    className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen
                        ? "bg-[#1F5A4A] text-white rotate-180"
                        : "bg-[#D6EFE3] text-[#1F5A4A]"
                    }`}
                  >
                    {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                  </div>
                </button>

                {isOpen && (
                  <div
                    id={contentId}
                    role="region"
                    aria-labelledby={headerId}
                    className="px-6 sm:px-8 pb-6 text-sm sm:text-base text-[#33525C] leading-relaxed border-t border-[#F6FBFC] animate-in fade-in slide-in-from-top-1 duration-200"
                  >
                    <p className="pt-2">{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Additional Questions Help Box */}
        <div className="max-w-[860px] mx-auto mt-12 bg-gradient-to-r from-[#DCEFF7] to-[#D6EFE3] p-6 sm:p-8 rounded-[28px] border border-[#B7E4CC]/60 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="w-12 h-12 rounded-2xl bg-white text-[#1F5A4A] flex items-center justify-center shrink-0 shadow-sm">
              <HelpCircle size={24} />
            </div>
            <div>
              <h4 className="font-heading font-bold text-lg text-[#0F3B4A]">
                Have a specific dental question?
              </h4>
              <p className="text-xs sm:text-sm text-[#33525C]">
                Chat directly with our care coordinator on WhatsApp for immediate guidance.
              </p>
            </div>
          </div>

          <Button
            href={`https://wa.me/${clinic.whatsapp}?text=Hi%20Dr.%20Gupta's%20Clinic,%20I%20have%20a%20question%20about%20dental%20treatment.`}
            target="_blank"
            rel="noopener noreferrer"
            variant="primary"
            size="md"
            className="gap-2 shrink-0 bg-[#1F5A4A]"
          >
            <MessageCircle size={16} />
            <span>Ask on WhatsApp</span>
          </Button>
        </div>
      </Container>
    </section>
  );
}

