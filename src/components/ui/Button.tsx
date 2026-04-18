"use client";

import { ButtonHTMLAttributes, AnchorHTMLAttributes, useRef } from "react";
import gsap from "gsap";

type Variant = "primary" | "secondary" | "ghost" | "cyan-ghost";

interface BaseProps {
  variant?: Variant;
  size?: "sm" | "md" | "lg";
  glow?: boolean;
}

type ButtonAsButton = BaseProps & ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };
type ButtonAsAnchor = BaseProps & AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };
type ButtonProps = ButtonAsButton | ButtonAsAnchor;

const sizeStyles = {
  sm: "px-4 py-2 text-xs rounded-lg",
  md: "px-6 py-3 text-sm rounded-xl",
  lg: "px-8 py-4 text-base rounded-2xl",
};

export default function Button({
  variant = "primary",
  size = "md",
  glow = false,
  className = "",
  ...props
}: ButtonProps) {
  const buttonRef = useRef<HTMLAnchorElement & HTMLButtonElement>(null);
  const glowRef = useRef<HTMLSpanElement>(null);

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!buttonRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    // Magnetic pull
    gsap.to(buttonRef.current, {
      x: x * 0.15,
      y: y * 0.15,
      duration: 0.4,
      ease: "power2.out",
    });

    // Proximity glow
    if (glowRef.current) {
      const glowX = e.clientX - rect.left;
      const glowY = e.clientY - rect.top;
      gsap.to(glowRef.current, {
        x: glowX - 50,
        y: glowY - 50,
        opacity: 1,
        duration: 0.2,
      });
    }
  };

  const handlePointerLeave = () => {
    if (!buttonRef.current) return;
    gsap.to(buttonRef.current, {
      x: 0,
      y: 0,
      duration: 0.7,
      ease: "elastic.out(1, 0.3)",
    });

    if (glowRef.current) {
      gsap.to(glowRef.current, { opacity: 0, duration: 0.5 });
    }
  };

  const variantStyles: Record<Variant, string> = {
    primary:
      "bg-white text-black font-semibold hover:shadow-[0_0_40px_rgba(255,0,127,0.4)] z-10 hover:scale-[1.02]",
    secondary:
      "bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.1)] text-white backdrop-blur-md hover:border-[rgba(255,0,127,0.4)] hover:text-white hover:shadow-[0_0_30px_rgba(255,0,127,0.15)] z-10 hover:bg-[rgba(255,255,255,0.08)]",
    ghost:
      "bg-transparent text-white/50 hover:text-white underline underline-offset-4 decoration-white/10 hover:decoration-[#ff007f]/50 z-10",
    "cyan-ghost":
      "bg-transparent text-[#00e5ff] hover:text-[#ff007f] z-10 transition-colors",
  };

  const classes = `
    relative inline-flex items-center justify-center gap-2 
    font-medium tracking-tight overflow-hidden
    will-change-transform transform-gpu
    transition-all duration-300 ease-out
    cursor-pointer select-none
    ${glow ? "shadow-[0_0_24px_rgba(255,255,255,0.1)]" : ""}
    ${variantStyles[variant]}
    ${sizeStyles[size]}
    ${className}
  `.trim();

  const renderInner = (children: React.ReactNode) => (
    <>
      <span className="relative z-10">{children}</span>
      {(variant === "primary" || variant === "secondary") && (
        <span
          ref={glowRef}
          className={`absolute w-[100px] h-[100px] bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.6),transparent_60%)] rounded-full blur-[12px] opacity-0 pointer-events-none mix-blend-overlay ${
            variant === "primary" ? "bg-white/40" : "bg-[#ff007f]/30"
          }`}
          style={{ top: 0, left: 0 }}
        />
      )}
    </>
  );

  if ("href" in props && props.href !== undefined) {
    const { href, ...rest } = props as ButtonAsAnchor;
    return (
      <a
        ref={buttonRef}
        href={href}
        className={classes}
        onPointerMove={handlePointerMove}
        onPointerLeave={handlePointerLeave}
        {...rest}
      >
        {renderInner(rest.children)}
      </a>
    );
  }

  return (
    <button
      ref={buttonRef}
      className={classes}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      {...(props as ButtonAsButton)}
    >
      {renderInner((props as ButtonAsButton).children)}
    </button>
  );
}
