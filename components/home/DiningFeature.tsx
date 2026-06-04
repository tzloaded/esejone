"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { SITE } from "@/lib/site";

const TAGS = ["Continental Cuisine", "Nigerian Classics", "Cocktail Bar"];

export default function DiningFeature() {
  return (
    <section className="relative flex min-h-[88vh] items-center overflow-hidden">
      {/* Video */}
      <video className="media-cover" autoPlay muted loop playsInline poster="/exterior-3.jpg">
        <source src="/restaurant-video.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-navy-900/70" />
      <div className="absolute inset-0 bg-gradient-to-r from-navy-900 via-navy-900/60 to-transparent" />

      <Container className="relative z-10 py-28">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-xl"
        >
          <span className="eyebrow flex items-center gap-2.5 text-navy-200">
            <span className="inline-block h-px w-6 bg-current opacity-60" />
            On-Site Dining
          </span>
          <h2 className="mt-5 font-display text-5xl font-light leading-[1.05] text-white sm:text-6xl">
            A taste of<br />
            <em className="font-semibold italic">refinement</em>
          </h2>
          <p className="mt-6 max-w-md leading-relaxed text-white/75">
            Our in-house restaurant serves an exquisite blend of local and continental dishes —
            crafted from the freshest ingredients and served in an atmosphere of warmth and
            quiet sophistication.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {TAGS.map((t) => (
              <span key={t} className="glass-soft rounded-full border-white/25 px-4 py-2 text-[0.78rem] font-medium text-white/90">
                {t}
              </span>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <Button href={SITE.whatsapp} variant="white" external arrow>
              Reserve a Table
            </Button>
            <Button href="/dining" variant="glass">
              Explore Dining
            </Button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
