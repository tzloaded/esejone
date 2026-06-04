"use client";

import { motion } from "framer-motion";
import FacilityIcon from "@/components/ui/FacilityIcon";
import type { Facility } from "@/lib/site";

export default function FacilityCard({ facility, index = 0 }: { facility: Facility; index?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay: (index % 3) * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="group relative overflow-hidden rounded-3xl border border-white/60 bg-white/60 p-8 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1.5 hover:border-navy-600/20 hover:bg-white/90 hover:shadow-[0_24px_50px_-25px_rgba(27,42,143,0.4)]"
    >
      {/* hover glow */}
      <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-navy-300/0 blur-2xl transition-all duration-500 group-hover:bg-navy-300/40" />

      <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-navy-600/10 text-navy-600 transition-colors duration-500 group-hover:bg-navy-600 group-hover:text-white">
        <FacilityIcon name={facility.icon} className="h-6 w-6" />
      </div>
      <h3 className="relative mt-6 font-display text-2xl font-medium text-navy-900">{facility.title}</h3>
      <p className="relative mt-2.5 text-[0.92rem] leading-relaxed text-navy-900/60">{facility.desc}</p>
    </motion.div>
  );
}
