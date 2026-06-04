"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { SITE } from "@/lib/site";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "60%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  // Minimal scroll zoom — avoids upscaling the (SD) source any more than necessary
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.04]);

  return (
    <section ref={ref} className="grain relative h-[100svh] min-h-[640px] w-full overflow-hidden">
      {/* Video */}
      <motion.div style={{ y, scale }} className="absolute inset-0">
        <video
          className="media-cover [transform:translateZ(0)]"
          style={{ filter: "saturate(1.06) contrast(1.05) brightness(1.02)" }}
          autoPlay
          muted
          loop
          playsInline
          poster="/exterior-1.jpg"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
      </motion.div>

      {/* Overlays: lighter top (for nav), deep bottom (fade to milk) */}
      <div className="absolute inset-0 bg-navy-900/35" />
      <div className="absolute inset-0 bg-gradient-to-b from-navy-900/40 via-transparent to-navy-900/55" />
      {/* filmic vignette — darkens edges, disguises SD softness */}
      <div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_200px_60px_rgba(6,9,51,0.55)]" />
      <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-b from-transparent to-milk" />

      {/* Content */}
      <motion.div
        style={{ y: contentY, opacity }}
        className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-6 text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="glass-soft mb-7 inline-flex items-center gap-2.5 rounded-full border-white/30 px-5 py-2"
        >
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-white" />
          <span className="text-[0.7rem] font-medium uppercase tracking-[0.22em] text-white/90">
            {SITE.location}
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl font-display text-[3.4rem] font-light leading-[1.02] text-white [text-shadow:0_2px_30px_rgba(0,0,0,0.35)] sm:text-7xl lg:text-[5.5rem]"
        >
          Where luxury feels<br />
          like <em className="font-semibold italic">home</em>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.6 }}
          className="mt-7 max-w-xl text-pretty text-base font-light leading-relaxed text-white/80 sm:text-lg"
        >
          In the heart of Abraka, Ese-Jones Hotel blends modern elegance with warm
          Nigerian hospitality — crafted for stays you will never forget.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.8 }}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
        >
          <Link
            href="/rooms"
            className="group inline-flex items-center gap-2.5 rounded-full bg-white px-8 py-4 text-sm font-semibold text-navy-700 shadow-[0_16px_40px_-12px_rgba(0,0,0,0.5)] transition-transform duration-300 hover:-translate-y-0.5"
          >
            Explore Rooms
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
          <Link
            href="/contact"
            className="glass-soft inline-flex items-center gap-2.5 rounded-full border-white/40 px-8 py-4 text-sm font-semibold text-white transition-all duration-300 hover:bg-white/25 hover:-translate-y-0.5"
          >
            Book a Stay
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
