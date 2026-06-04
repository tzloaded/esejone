"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Phone, MapPin } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { SITE } from "@/lib/site";

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden">
      <Image src="/exterior-5.jpg" alt="Ese-Jones Hotel at dusk" fill className="object-cover" sizes="100vw" />
      <div className="absolute inset-0 bg-navy-900/82" />
      <div className="absolute inset-0 [background:radial-gradient(50%_60%_at_50%_30%,rgba(74,91,206,0.35),transparent_70%)]" />

      <Container className="relative z-10 py-28 sm:py-36">
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="eyebrow text-navy-200">Ready When You Are</span>
          <h2 className="mt-5 font-display text-5xl font-light leading-[1.05] text-white sm:text-6xl lg:text-7xl">
            Your perfect stay<br />
            <em className="font-semibold italic">awaits you</em>
          </h2>
          <p className="mx-auto mt-6 max-w-xl leading-relaxed text-white/70">
            Reserve your room today, or reach out about events and special packages. Our team is
            ready to make your stay effortless.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Button href={SITE.whatsapp} variant="white" external arrow>
              Book Your Stay
            </Button>
            <Button href={`tel:${SITE.phoneRaw}`} variant="glass" external>
              <Phone className="h-4 w-4" /> {SITE.phoneDisplay}
            </Button>
          </div>

          <div className="mt-10 flex items-center justify-center gap-2 text-sm text-white/55">
            <MapPin className="h-4 w-4" />
            {SITE.address.full}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
