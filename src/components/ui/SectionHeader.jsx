export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "center",
  className = "",
  light = false,
}) {
  const isCenter = align === "center";

  return (
    <div
      className={`mb-12 md:mb-16 ${
        isCenter ? "text-center max-w-3xl mx-auto" : "max-w-2xl"
      } ${className}`}
    >
      {eyebrow && (
        <div
          className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest mb-3 ${
            light
              ? "bg-white/10 text-[#B7E4CC]"
              : "bg-[#D6EFE3] text-[#1F5A4A]"
          }`}
        >
          <span>{eyebrow}</span>
        </div>
      )}

      {title && (
        <h2
          className={`font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.15] ${
            light ? "text-white" : "text-[#0F3B4A]"
          }`}
        >
          {title}
        </h2>
      )}

      {subtitle && (
        <p
          className={`mt-4 text-base sm:text-lg leading-relaxed ${
            light ? "text-[#CFE6EE]" : "text-[#33525C]"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

