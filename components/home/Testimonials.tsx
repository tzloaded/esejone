"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Container from "@/components/ui/Container";
import { TESTIMONIALS } from "@/lib/site";

export default function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-mist py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 [background:radial-gradient(40%_50%_at_50%_0%,rgba(185,194,238,0.4),transparent_70%)]" />
      <Container className="relative">
        <div className="flex flex-col items-center text-center">
          <SectionHeading
            eyebrow="Guest Stories"
            title="Loved by our"
            emphasis="guests"
            description="The warmth, the calm, the care — here is what our guests remember most."
          />
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="relative flex flex-col rounded-[1.6rem] border border-white/70 bg-white/70 p-8 backdrop-blur-xl shadow-[0_20px_50px_-30px_rgba(27,42,143,0.4)]"
            >
              <Quote className="h-9 w-9 text-navy-300" fill="currentColor" />
              <div className="mt-4 flex gap-0.5">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} className="h-4 w-4 text-navy-600" fill="currentColor" />
                ))}
              </div>
              <blockquote className="mt-5 flex-1 text-[1.02rem] leading-relaxed text-navy-900/75">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-7 border-t border-navy-900/8 pt-5">
                <p className="font-display text-xl font-semibold text-navy-900">{t.name}</p>
                <p className="text-sm text-navy-900/50">{t.role}</p>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </Container>
    </section>
  );
}
