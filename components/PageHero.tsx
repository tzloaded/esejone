"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function PageHero({
  eyebrow,
  title,
  emphasis,
  subtitle,
  image,
}: {
  eyebrow: string;
  title: string;
  emphasis?: string;
  subtitle?: string;
  image: string;
}) {
  return (
    <section className="relative flex h-[64vh] min-h-[460px] items-end overflow-hidden">
      <motion.div
        initial={{ scale: 1.15 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0"
      >
        <Image src={image} alt={title} fill priority className="object-cover" sizes="100vw" />
      </motion.div>

      {/* gradient + tint */}
      <div className="absolute inset-0 bg-navy-900/45" />
      <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/40 to-navy-900/20" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-16 pt-32 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="eyebrow mb-4 flex items-center gap-2.5 text-navy-200"
        >
          <Link href="/" className="hover:text-white">Home</Link>
          <span className="opacity-40">/</span>
          <span className="text-white/80">{eyebrow}</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="max-w-4xl font-display text-5xl font-light leading-[1.05] text-white sm:text-6xl lg:text-7xl"
        >
          {title}
          {emphasis && <em className="font-semibold italic"> {emphasis}</em>}
        </motion.h1>

        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-5 max-w-xl text-base leading-relaxed text-white/70"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  );
}
