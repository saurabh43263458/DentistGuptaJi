import { CheckCircle2, ShieldCheck, Zap, Receipt, Stethoscope } from "lucide-react";
import { clinic } from "../content/clinic";
import Container from "./ui/Container";

export default function TrustStrip() {
  const icons = [ShieldCheck, Zap, Stethoscope, Receipt];

  return (
    <div className="bg-white border-y border-[#DCEFF7] py-6 sm:py-7 relative z-10 shadow-sm">
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {clinic.trust.map((item, idx) => {
            const Icon = icons[idx % icons.length];
            return (
              <div key={item.title} className="flex items-start gap-3.5">
                {/* Mint circular icon container with mint dot */}
                <div className="w-9 h-9 rounded-full bg-[#D6EFE3] text-[#1F5A4A] flex items-center justify-center shrink-0 mt-0.5 border border-[#B7E4CC]/40">
                  <Icon size={18} />
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-sm sm:text-[15px] text-[#1F5A4A] leading-snug">
                    {item.title}
                  </h4>
                  <p className="text-xs text-[#33525C]/80 mt-0.5 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </div>
  );
}

