"use client";

import { motion } from "framer-motion";
import Counter from "@/components/ui/Counter";
import Container from "@/components/ui/Container";
import { STATS } from "@/lib/site";

export default function Intro() {
  return (
    <section className="bg-aurora relative overflow-hidden py-24 sm:py-32">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-4xl text-center"
        >
          <span className="eyebrow text-navy-600">Welcome to Ese-Jones</span>
          <p className="mt-6 text-balance font-display text-3xl font-light leading-[1.25] text-navy-900 sm:text-4xl lg:text-[2.9rem]">
            More than a place to stay — a feeling of arrival. Every detail at Ese-Jones
            is composed to wrap you in <em className="font-semibold italic text-navy-600">comfort, privacy,</em> and
            quiet, effortless luxury.
          </p>
        </motion.div>

        {/* Stats */}
        <div className="mx-auto mt-16 grid max-w-4xl grid-cols-2 gap-px overflow-hidden rounded-3xl border border-navy-900/10 bg-navy-900/10 lg:grid-cols-4">
          {STATS.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="glass-frost flex flex-col items-center justify-center px-4 py-10 text-center"
            >
              <span className="font-display text-5xl font-semibold text-navy-600 lg:text-6xl">
                <Counter value={s.value} suffix={s.suffix} />
              </span>
              <span className="mt-2 text-[0.72rem] font-medium uppercase tracking-[0.16em] text-navy-900/55">
                {s.label}
              </span>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
