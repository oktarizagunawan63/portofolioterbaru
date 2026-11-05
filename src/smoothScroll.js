import Lenis from "lenis";
import "lenis/dist/lenis.css";

// Smooth (inertia) scrolling for mouse wheels and trackpads; touch keeps native scrolling.
// Skipped entirely for visitors who ask for reduced motion.
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export const lenis = reduceMotion
  ? null
  : new Lenis({
      lerp: 0.1, // how quickly the page catches up with the wheel (lower = floatier)
    });

if (lenis) {
  const raf = (time) => {
    lenis.raf(time);
    requestAnimationFrame(raf);
  };
  requestAnimationFrame(raf);
}

// In-page links (#about, #projects, "#" for top) scroll there without adding "#about" to the URL.
document.addEventListener("click", (e) => {
  const link = e.target.closest?.('a[href^="#"]');
  if (!link || e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
  const id = link.getAttribute("href").slice(1);
  const target = id ? document.getElementById(id) : null;
  if (id && !target) return; // unknown anchor: leave it to the browser
  e.preventDefault();
  if (lenis) lenis.scrollTo(target ?? 0);
  else if (target) target.scrollIntoView({ behavior: "smooth" });
  else window.scrollTo({ top: 0, behavior: "smooth" });
});

// Use these instead of window.scrollTo so Lenis and the browser never fight over the position.
export function scrollToTop({ immediate = false } = {}) {
  if (lenis) lenis.scrollTo(0, { immediate });
  else window.scrollTo({ top: 0, behavior: immediate ? "auto" : "smooth" });
}
