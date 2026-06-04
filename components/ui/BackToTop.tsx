"use client";

import { ArrowUp } from "lucide-react";
import Lenis from "lenis";

export default function BackToTop() {
  const toTop = () => {
    const lenis = (window as unknown as { __lenis?: Lenis }).__lenis;
    if (lenis) lenis.scrollTo(0, { duration: 1.4 });
    else window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={toTop}
      aria-label="Back to top"
      className="group inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-2.5 text-xs font-medium text-white/70 transition-all duration-300 hover:border-white/40 hover:text-white"
    >
      Back to top
      <ArrowUp className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5" />
    </button>
  );
}
