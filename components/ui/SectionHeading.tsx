"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/cn";

/**
 * Reusable section heading: eyebrow label + display title (with an optional
 * italic emphasised fragment) + optional description. Animates in on scroll.
 */
export default function SectionHeading({
  eyebrow,
  title,
  emphasis,
  description,
  align = "center",
  light = false,
  className,
}: {
  eyebrow?: string;
  title: string;
  emphasis?: string;
  description?: string;
  align?: "center" | "left";
  light?: boolean;
  className?: string;
}) {
  const alignment = align === "center" ? "items-center text-center mx-auto" : "items-start text-left";
  const titleColor = light ? "text-white" : "text-navy-900";
  const eyebrowColor = light ? "text-navy-200" : "text-navy-600";
  const descColor = light ? "text-white/70" : "text-navy-900/60";

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={cn("flex max-w-2xl flex-col", alignment, className)}
    >
      {eyebrow && (
        <span className={cn("eyebrow mb-4 flex items-center gap-2.5", eyebrowColor)}>
          <span className="inline-block h-px w-6 bg-current opacity-50" />
          {eyebrow}
        </span>
      )}
      <h2
        className={cn(
          "font-display text-4xl font-light leading-[1.08] sm:text-5xl lg:text-[3.4rem]",
          titleColor,
        )}
      >
        {title}
        {emphasis && (
          <>
            {" "}
            <em className="font-semibold italic">{emphasis}</em>
          </>
        )}
      </h2>
      {description && (
        <p className={cn("mt-5 max-w-xl text-[0.98rem] leading-relaxed", descColor)}>
          {description}
        </p>
      )}
    </motion.div>
  );
}
