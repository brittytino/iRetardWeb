import { ReactNode, HTMLAttributes } from "react";

type HeadingLevel = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  level?: HeadingLevel;
  children: ReactNode;
  align?: "left" | "center" | "right";
}

export default function Heading({
  level = "h2",
  children,
  align = "left",
  className = "",
  ...props
}: HeadingProps) {
  const Component = level;
  
  const baseStyles = "font-bold tracking-tight text-white";
  const alignStyles = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  };
  
  const sizes = {
    h1: "text-[clamp(3.5rem,8vw,7rem)] leading-[0.9] tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-white/60",
    h2: "text-4xl sm:text-5xl lg:text-6xl leading-[1.05] tracking-tight",
    h3: "text-3xl sm:text-4xl leading-tight",
    h4: "text-2xl leading-snug",
    h5: "text-xl leading-snug",
    h6: "text-lg leading-snug",
  };

  return (
    <Component className={`${baseStyles} ${sizes[level]} ${alignStyles[align]} ${className}`} {...props}>
      {children}
    </Component>
  );
}
