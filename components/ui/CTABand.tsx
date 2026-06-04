"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { SITE } from "@/lib/site";

export default function CTABand({
  eyebrow = "Reservations",
  title = "Your perfect stay",
  emphasis = "awaits you",
  description = "Reserve your room today, or reach out about events and special packages. Our team is ready to make your stay effortless.",
  image = "/exterior-6.jpg",
  primaryLabel = "Book Your Stay",
}: {
  eyebrow?: string;
  title?: string;
  emphasis?: string;
  description?: string;
  image?: string;
  primaryLabel?: string;
}) {
  return (
    <section className="relative overflow-hidden">
      <Image src={image} alt="" fill className="object-cover" sizes="100vw" />
      <div className="absolute inset-0 bg-navy-900/85" />
      <div className="absolute inset-0 [background:radial-gradient(50%_60%_at_50%_30%,rgba(74,91,206,0.35),transparent_70%)]" />

      <Container className="relative z-10 py-24 sm:py-28">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="eyebrow text-navy-200">{eyebrow}</span>
          <h2 className="mt-5 font-display text-5xl font-light leading-[1.05] text-white sm:text-6xl">
            {title} <em className="font-semibold italic">{emphasis}</em>
          </h2>
          <p className="mx-auto mt-6 max-w-xl leading-relaxed text-white/70">{description}</p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Button href={SITE.whatsapp} variant="white" external arrow>
              {primaryLabel}
            </Button>
            <Button href={`tel:${SITE.phoneRaw}`} variant="glass" external>
              <Phone className="h-4 w-4" /> {SITE.phoneDisplay}
            </Button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
