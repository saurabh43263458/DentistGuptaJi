import { clinic } from "../content/clinic";
import Container from "./ui/Container";

export default function Process() {
  return (
    <section id="process" className="py-20 md:py-24 bg-[#1F5A4A] text-white relative overflow-hidden">
      {/* Decorative background glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#B7E4CC]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#DCEFF7]/10 rounded-full blur-3xl pointer-events-none" />

      <Container>
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest bg-white/10 text-[#B7E4CC] mb-3">
            <span>YOUR VISIT EXPERIENCE</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
            Simple from the first call to the last check-up.
          </h2>

          <p className="mt-4 text-sm sm:text-base text-[#CFE6EE] leading-relaxed">
            We've eliminated dental stress with transparent communication, zero waiting times, and gentle hands at every single phase.
          </p>
        </div>

        {/* 4 Step Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {clinic.process.map((step) => (
            <div
              key={step.step}
              className="bg-white/[0.08] backdrop-blur-md rounded-[24px] p-7 border border-white/15 hover:bg-white/[0.12] transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
            >
              <div>
                <span className="font-heading font-extrabold text-4xl sm:text-5xl text-[#B7E4CC] tracking-tight block mb-4">
                  {step.step}
                </span>

                <h3 className="font-heading font-bold text-xl text-white mb-2 leading-snug">
                  {step.title}
                </h3>

                <p className="text-sm text-[#CFE6EE] leading-relaxed">
                  {step.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 flex items-center text-[11px] font-mono text-[#B7E4CC] uppercase tracking-wider">
                <span>Phase {step.step}</span>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

