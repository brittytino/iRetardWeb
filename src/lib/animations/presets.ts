"use client";

import { useEffect, RefObject } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export const useRevealStagger = (
  containerRef: RefObject<HTMLElement | null>,
  selector: string,
  options: { y?: number; x?: number; stagger?: number; duration?: number; onEnter?: boolean } = {}
) => {
  const { y = 40, x = 0, stagger = 0.1, duration = 0.8, onEnter = false } = options;

  useEffect(() => {
    if (!containerRef.current) return;
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      const elements = gsap.utils.toArray<HTMLElement>(selector);
      if (elements.length === 0) return;

      gsap.fromTo(
        elements,
        { opacity: 0, y, x, filter: "blur(5px)" },
        {
          opacity: 1,
          y: 0,
          x: 0,
          filter: "blur(0px)",
          duration,
          stagger,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%",
            once: onEnter,
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, [containerRef, selector, y, x, stagger, duration, onEnter]);
};

export const useGlitchReveal = (
  containerRef: RefObject<HTMLElement | null>,
  selector: string
) => {
  useEffect(() => {
    if (!containerRef.current) return;
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray<HTMLElement>(selector);
      items.forEach((item, i) => {
        gsap.fromTo(
          item,
          { clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)", y: 50, opacity: 0 },
          {
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
            y: 0,
            opacity: 1,
            duration: 0.6,
            delay: i * 0.1,
            ease: "steps(4)",
            scrollTrigger: { trigger: containerRef.current, start: "top 70%" },
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, [containerRef, selector]);
};

export const useScrollParallax = (
  containerRef: RefObject<HTMLElement | null>,
  selector: string,
  options: { yVal?: number; scrub?: number | boolean } = {}
) => {
  const { yVal = 50, scrub = 0.5 } = options;

  useEffect(() => {
    if (!containerRef.current) return;
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray<HTMLElement>(selector);
      items.forEach((item, i) => {
        gsap.fromTo(
          item,
          { y: i % 2 === 0 ? yVal : yVal * 0.4 },
          {
            y: i % 2 === 0 ? -yVal : -yVal * 0.4,
            ease: "none",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub,
            },
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, [containerRef, selector, yVal, scrub]);
};

export const useScrollPipeline = (
  containerRef: RefObject<HTMLElement | null>,
  stepsSelector: string,
  lineFillSelector: string,
  mobileLineFillSelector: string
) => {
  useEffect(() => {
    if (!containerRef.current) return;
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      const pipelineSteps = gsap.utils.toArray<HTMLElement>(stepsSelector);
      const pipelineLine = document.querySelector(lineFillSelector) as HTMLElement;
      const originalLine = document.querySelector(mobileLineFillSelector) as HTMLElement;
      
      if (pipelineLine) {
        gsap.fromTo(pipelineLine, { height: "0%" }, { height: "100%", ease: "none", scrollTrigger: { trigger: containerRef.current, start: "top 60%", end: "bottom 60%", scrub: true } });
      }
      if (originalLine) {
        gsap.fromTo(originalLine, { height: "0%" }, { height: "100%", ease: "none", scrollTrigger: { trigger: containerRef.current, start: "top 60%", end: "bottom 60%", scrub: true } });
      }
      
      pipelineSteps.forEach((step, i) => {
         gsap.fromTo(step, { opacity: 0, x: i % 2 === 0 ? -30 : 30 }, { opacity: 1, x: 0, ease: "power2.out", duration: 0.8, scrollTrigger: { trigger: step, start: "top 75%" }});
      });
    }, containerRef);
    return () => ctx.revert();
  }, [containerRef, stepsSelector, lineFillSelector, mobileLineFillSelector]);
};

