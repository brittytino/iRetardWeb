import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const registerScrollTrigger = () => {
  if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
  }
};

export { gsap, ScrollTrigger };
