import { ReactNode, HTMLAttributes, forwardRef } from "react";

interface SectionProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
}

const Section = forwardRef<HTMLElement, SectionProps>(({ children, className = "", ...props }, ref) => {
  return (
    <section ref={ref} className={`relative py-32 overflow-hidden ${className}`} {...props}>
      {children}
    </section>
  );
});

Section.displayName = "Section";
export default Section;
