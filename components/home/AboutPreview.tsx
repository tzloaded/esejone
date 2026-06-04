"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Check, Star } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

const HIGHLIGHTS = [
  "Pristine, modern interiors",
  "Serene, private surroundings",
  "Genuine Nigerian hospitality",
];

export default function AboutPreview() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <section className="relative overflow-hidden bg-milk py-24 sm:py-32">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Image */}
          <div ref={ref} className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-[0_40px_80px_-30px_rgba(27,42,143,0.4)]">
              <motion.div style={{ y: imgY }} className="absolute inset-[-8%]">
                <Image src="/exterior-1.jpg" alt="Ese-Jones Hotel facade" fill className="object-cover" sizes="(max-width:1024px) 100vw, 50vw" />
              </motion.div>
            </div>

            {/* Floating glass card */}
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="glass absolute -bottom-8 -right-4 max-w-[230px] rounded-2xl p-6 shadow-xl sm:-right-8"
            >
              <div className="flex items-center gap-2">
                <span className="font-display text-5xl font-semibold leading-none text-navy-600">5.0</span>
                <div className="flex flex-col gap-0.5">
                  <div className="flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, s) => (
                      <Star key={s} className="h-3 w-3 text-navy-600" fill="currentColor" />
                    ))}
                  </div>
                  <span className="text-[0.62rem] uppercase tracking-wider text-navy-900/45">Guest rating</span>
                </div>
              </div>
              <p className="mt-3 text-sm leading-snug text-navy-900/70">
                A luxury experience guests return for, again and again.
              </p>
            </motion.div>
          </div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="eyebrow flex items-center gap-2.5 text-navy-600">
              <span className="inline-block h-px w-6 bg-current opacity-50" />
              Our Story
            </span>
            <h2 className="mt-5 font-display text-4xl font-light leading-[1.1] text-navy-900 sm:text-5xl">
              Where every stay<br />
              tells a <em className="font-semibold italic text-navy-600">story</em>
            </h2>
            <p className="mt-6 max-w-lg leading-relaxed text-navy-900/65">
              Nestled in the heart of Abraka, Delta State, Ese-Jones Hotel is a sanctuary of
              modern luxury. Our clean architecture and thoughtfully designed interiors create an
              atmosphere of calm, comfort, and understated elegance.
            </p>
            <p className="mt-4 max-w-lg leading-relaxed text-navy-900/65">
              From beautifully appointed rooms to warm, attentive service, every element is
              considered to make your stay nothing short of extraordinary.
            </p>

            <ul className="mt-8 space-y-3">
              {HIGHLIGHTS.map((h) => (
                <li key={h} className="flex items-center gap-3">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-navy-600/10">
                    <Check className="h-3.5 w-3.5 text-navy-600" />
                  </span>
                  <span className="text-[0.95rem] text-navy-900/80">{h}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10">
              <Button href="/about" variant="outline" arrow>
                Discover Our Story
              </Button>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
