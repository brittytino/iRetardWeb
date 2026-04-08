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
  
  const baseStyles = "font-black tracking-tighter text-white";
  const alignStyles = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  };
  
  const sizes = {
    h1: "text-[clamp(3rem,8vw,7rem)] leading-[0.9]",
    h2: "text-5xl sm:text-6xl lg:text-[5.5rem] leading-[0.95]",
    h3: "text-4xl",
    h4: "text-2xl",
    h5: "text-xl",
    h6: "text-lg",
  };

  return (
    <Component className={`${baseStyles} ${sizes[level]} ${alignStyles[align]} ${className}`} {...props}>
      {children}
    </Component>
  );
}
