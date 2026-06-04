"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Maximize, Users, BedDouble, ArrowRight } from "lucide-react";
import type { Room } from "@/lib/site";

export default function RoomCard({ room, index = 0 }: { room: Room; index?: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="group flex flex-col overflow-hidden rounded-[1.6rem] border border-navy-900/5 bg-white shadow-[0_10px_40px_-20px_rgba(27,42,143,0.25)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_30px_60px_-25px_rgba(27,42,143,0.45)]"
    >
      {/* Image */}
      <Link href={`/rooms/${room.slug}`} className="relative block aspect-[4/3] overflow-hidden">
        <Image
          src={room.image}
          alt={room.name}
          fill
          className="object-cover transition-transform duration-[1.1s] ease-out group-hover:scale-110"
          sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-900/55 via-transparent to-transparent" />
        <span className="glass-soft absolute left-4 top-4 rounded-full border-white/40 px-3.5 py-1.5 text-[0.7rem] font-medium uppercase tracking-wider text-white">
          {room.tag}
        </span>
        <div className="absolute bottom-4 left-5 right-5 flex items-end justify-between">
          <h3 className="font-display text-2xl font-medium text-white [text-shadow:0_2px_12px_rgba(0,0,0,0.4)]">
            {room.name}
          </h3>
        </div>
      </Link>

      {/* Body */}
      <div className="flex flex-1 flex-col p-6">
        <div className="flex flex-wrap gap-x-5 gap-y-2 text-[0.78rem] text-navy-900/55">
          <span className="inline-flex items-center gap-1.5"><Maximize className="h-3.5 w-3.5" /> {room.size}</span>
          <span className="inline-flex items-center gap-1.5"><Users className="h-3.5 w-3.5" /> {room.occupancy}</span>
          <span className="inline-flex items-center gap-1.5"><BedDouble className="h-3.5 w-3.5" /> {room.bed}</span>
        </div>

        <p className="mt-4 flex-1 text-[0.9rem] leading-relaxed text-navy-900/65">{room.blurb}</p>

        <div className="mt-6 flex items-center justify-between border-t border-navy-900/8 pt-5">
          <div>
            <span className="font-display text-2xl font-semibold text-navy-600">{room.price}</span>
            <span className="text-xs text-navy-900/45"> / night</span>
          </div>
          <Link
            href={`/rooms/${room.slug}`}
            className="group/btn inline-flex items-center gap-2 rounded-full bg-navy-600 px-5 py-2.5 text-[0.78rem] font-semibold text-white transition-all duration-300 hover:bg-navy-700"
          >
            Book Now
            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover/btn:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </motion.article>
  );
}
