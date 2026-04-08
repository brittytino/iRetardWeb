import { ReactNode, HTMLAttributes } from "react";

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  size?: "sm" | "md" | "lg" | "xl" | "full";
}

const sizes = {
  sm: "max-w-3xl",
  md: "max-w-5xl",
  lg: "max-w-7xl",
  xl: "max-w-[1400px]",
  full: "w-full",
};

export default function Container({ children, size = "lg", className = "", ...props }: ContainerProps) {
  return (
    <div className={`mx-auto px-6 ${sizes[size]} w-full ${className}`} {...props}>
      {children}
    </div>
  );
}
