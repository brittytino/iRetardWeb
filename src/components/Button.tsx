import { ButtonHTMLAttributes, AnchorHTMLAttributes } from "react";

type Variant = "primary" | "secondary" | "ghost";

interface BaseProps {
  variant?: Variant;
  size?: "sm" | "md" | "lg";
  glow?: boolean;
}

type ButtonAsButton = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };
type ButtonAsAnchor = BaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

type ButtonProps = ButtonAsButton | ButtonAsAnchor;

const variantStyles: Record<Variant, string> = {
  primary:
    "bg-cyan text-background font-semibold hover:shadow-[0_0_30px_rgba(0,229,255,0.3)] hover:scale-[1.02]",
  secondary:
    "bg-transparent border border-border text-foreground hover:border-cyan/40 hover:text-cyan hover:shadow-[0_0_20px_rgba(0,229,255,0.1)]",
  ghost:
    "bg-transparent text-muted hover:text-foreground underline underline-offset-4 decoration-border hover:decoration-cyan/50",
};

const sizeStyles = {
  sm: "px-4 py-2 text-xs rounded-lg",
  md: "px-6 py-3 text-sm rounded-xl",
  lg: "px-8 py-4 text-base rounded-xl",
};

export default function Button({
  variant = "primary",
  size = "md",
  glow,
  className = "",
  ...props
}: ButtonProps) {
  const classes = `
    inline-flex items-center justify-center gap-2 
    font-medium tracking-tight
    transition-all duration-300 ease-out
    cursor-pointer select-none
    active:scale-[0.98]
    ${variantStyles[variant]}
    ${sizeStyles[size]}
    ${glow ? (variant === "primary" ? "glow-cyan" : "") : ""}
    ${className}
  `.trim();

  if ("href" in props && props.href !== undefined) {
    const { href, ...rest } = props as ButtonAsAnchor;
    return (
      <a href={href} className={classes} {...rest}>
        {rest.children}
      </a>
    );
  }

  return (
    <button className={classes} {...(props as ButtonAsButton)}>
      {(props as ButtonAsButton).children}
    </button>
  );
}
