import { Award, ShieldCheck, Heart, Stethoscope, CheckCircle2 } from "lucide-react";
import { clinic } from "../content/clinic";
import Container from "./ui/Container";

export default function About() {
  const { doctor, team } = clinic;

  return (
    <section id="about" className="py-20 md:py-28 bg-white relative overflow-hidden">
      <Container>
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Doctor Portrait & Visuals (5 cols) */}
          <div className="lg:col-span-5 relative">
            {/* Primary Portrait Card */}
            <div className="relative rounded-[36px] bg-gradient-to-tr from-[#D6EFE3] via-[#DCEFF7] to-[#BFE3F2] p-3 sm:p-4 shadow-elevated border border-[#DCEFF7] overflow-hidden">
              <div className="rounded-[28px] overflow-hidden bg-white/60 aspect-[3/4] sm:aspect-[4/5] relative">
                <img
                  src={doctor.photo}
                  alt={doctor.name}
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700 filter brightness-[1.02]"
                />

                {/* Subtle vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F3B4A]/60 via-transparent to-transparent pointer-events-none" />

                {/* Clinic Foundation Badge */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl shadow-card border border-[#DCEFF7] flex items-center justify-between">
                  <div>
                    <p className="font-heading font-bold text-sm text-[#0F3B4A]">
                      Dr. Gupta's Dental Clinic
                    </p>
                    <p className="text-[11px] text-[#1F6F99] font-medium">
                      Serving Smiles Since 2013
                    </p>
                  </div>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-[#D6EFE3] text-[#1F5A4A]">
                    11+ Yrs
                  </span>
                </div>
              </div>
            </div>

            {/* Floating Overlap: Treating Patient In-Action Photo */}
            <div className="hidden sm:block absolute -bottom-6 -right-6 w-48 rounded-2xl overflow-hidden shadow-elevated border-4 border-white bg-white">
              <img
                src={doctor.treatingPhoto}
                alt="Dr. Gupta performing dental exam"
                className="w-full h-28 object-cover"
              />
              <div className="p-2 text-center bg-[#F6FBFC]">
                <p className="text-[10px] font-bold text-[#1F5A4A] uppercase tracking-wider">
                  In Operatory • Gentle Care
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Bio & Credentials (7 cols) */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest bg-[#D6EFE3] text-[#1F5A4A] mb-3">
              <span>MEET YOUR DENTIST</span>
            </div>

            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F3B4A] tracking-tight">
              {doctor.name}
            </h2>

            <p className="text-sm sm:text-base font-semibold text-[#1F6F99] mt-1 mb-5">
              {doctor.role} • {doctor.experience}
            </p>

            {/* Bio paragraph */}
            <p className="text-base sm:text-lg text-[#33525C] leading-relaxed mb-4">
              {doctor.bio}
            </p>

            <blockquote className="border-l-4 border-[#1F5A4A] pl-4 py-1 italic text-sm sm:text-base text-[#1F5A4A] bg-[#D6EFE3]/30 rounded-r-xl mb-8">
              "{doctor.philosophy}"
            </blockquote>

            {/* Credential Tiles */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {/* Tile 1: BIOLASE Lasers */}
              <div className="bg-[#DCEFF7]/60 rounded-2xl p-4 border border-[#DCEFF7]">
                <div className="flex items-center gap-2 text-[#1F6F99] mb-1">
                  <Award size={18} />
                  <span className="font-heading font-bold text-sm text-[#0F3B4A]">
                    BIOLASE Laser Certified
                  </span>
                </div>
                <p className="text-xs text-[#33525C] leading-relaxed">
                  Specialized training in laser innovations: incision-free gum contouring, disinfection & accelerated healing.
                </p>
              </div>

              {/* Tile 2: IDA Root Canal */}
              <div className="bg-[#D6EFE3]/60 rounded-2xl p-4 border border-[#B7E4CC]/60">
                <div className="flex items-center gap-2 text-[#1F5A4A] mb-1">
                  <ShieldCheck size={18} />
                  <span className="font-heading font-bold text-sm text-[#0F3B4A]">
                    IDA Endodontics Fellow
                  </span>
                </div>
                <p className="text-xs text-[#33525C] leading-relaxed">
                  Indian Dental Association certified precision rotary root canal treatments with single-visit comfort.
                </p>
              </div>
            </div>

            {/* Team Members Row */}
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-[#0F3B4A] mb-3">
                Supported by Our Caring Clinical Team
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {team.map((member) => (
                  <div
                    key={member.name}
                    className="bg-[#F6FBFC] p-3 rounded-2xl border border-[#DCEFF7] text-left"
                  >
                    <p className="font-heading font-semibold text-xs text-[#0F3B4A]">
                      {member.name}
                    </p>
                    <p className="text-[11px] text-[#1F6F99] mt-0.5">{member.role}</p>
                    <p className="text-[10px] text-[#33525C]/75">{member.specialty}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

