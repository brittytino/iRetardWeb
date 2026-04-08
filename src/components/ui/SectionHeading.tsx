interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  accent?: "cyan" | "lime";
  align?: "left" | "center";
}

export default function SectionHeading({
  title,
  subtitle,
  accent = "cyan",
  align = "center",
}: SectionHeadingProps) {
  const alignment = align === "center" ? "text-center" : "text-left";

  return (
    <div className={`mb-12 md:mb-16 ${alignment}`}>
      <h2
        className={`text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tighter leading-[1.1]`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-base sm:text-lg text-muted max-w-2xl ${align === "center" ? "mx-auto" : ""} leading-relaxed`}>
          {subtitle}
        </p>
      )}
      <div
        className={`mt-6 h-1 w-16 rounded-full ${
          accent === "cyan" ? "bg-cyan/40" : "bg-lime/40"
        } ${align === "center" ? "mx-auto" : ""}`}
      />
    </div>
  );
}
