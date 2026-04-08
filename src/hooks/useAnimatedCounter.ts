"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function useAnimatedCounter(
  end: number,
  duration: number = 2,
  suffix: string = ""
) {
  const ref = useRef<HTMLSpanElement>(null);
  const [displayed, setDisplayed] = useState("0" + suffix);

  useEffect(() => {
    if (!ref.current) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      setDisplayed(end.toLocaleString() + suffix);
      return;
    }

    const obj = { val: 0 };
    let trigger: ScrollTrigger | undefined;

    trigger = ScrollTrigger.create({
      trigger: ref.current,
      start: "top 90%",
      once: true,
      onEnter: () => {
        gsap.to(obj, {
          val: end,
          duration,
          ease: "power2.out",
          onUpdate: () => {
            setDisplayed(Math.round(obj.val).toLocaleString() + suffix);
          },
        });
      },
    });

    return () => {
      trigger?.kill();
    };
  }, [end, duration, suffix]);

  return { ref, displayed };
}
