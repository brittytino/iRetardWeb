interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  accent?: "cyan" | "pink" | "purple";
  align?: "left" | "center";
}

export default function SectionHeading({
  title,
  subtitle,
  accent = "cyan",
  align = "center",
}: SectionHeadingProps) {
  const alignment = align === "center" ? "text-center" : "text-left";
  
  const accentGradients = {
    cyan: "bg-gradient-to-r from-[#00e5ff]/50 to-transparent",
    pink: "bg-gradient-to-r from-[#ff007f]/50 to-transparent",
    purple: "bg-gradient-to-r from-[#8a2be2]/50 to-transparent",
  };

  return (
    <div className={`mb-12 md:mb-20 ${alignment}`}>
      <h2
        className={`text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.1] font-outfit text-transparent bg-clip-text bg-gradient-to-br from-white to-white/60`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-6 text-lg sm:text-xl text-muted max-w-2xl ${align === "center" ? "mx-auto" : ""} leading-relaxed font-medium`}>
          {subtitle}
        </p>
      )}
      <div
        className={`mt-8 h-1 w-24 rounded-full ${accentGradients[accent]} ${align === "center" ? "mx-auto bg-gradient-to-r from-transparent via-[#00e5ff]/50 to-transparent" : ""}`}
      />
    </div>
  );
}
