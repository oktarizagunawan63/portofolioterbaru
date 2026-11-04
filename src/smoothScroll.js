import Lenis from "lenis";
import "lenis/dist/lenis.css";

// Smooth (inertia) scrolling for mouse wheels and trackpads; touch keeps native scrolling.
// Skipped entirely for visitors who ask for reduced motion.
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export const lenis = reduceMotion
  ? null
  : new Lenis({
      lerp: 0.1,      // how quickly the page catches up with the wheel (lower = floatier)
      anchors: true,  // in-page links (#projects, #contact) glide too
    });

if (lenis) {
  const raf = (time) => {
    lenis.raf(time);
    requestAnimationFrame(raf);
  };
  requestAnimationFrame(raf);
}

// Use these instead of window.scrollTo so Lenis and the browser never fight over the position.
export function scrollToTop({ immediate = false } = {}) {
  if (lenis) lenis.scrollTo(0, { immediate });
  else window.scrollTo({ top: 0, behavior: immediate ? "auto" : "smooth" });
}
