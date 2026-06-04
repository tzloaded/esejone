"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/cn";

export default function RoomGallery({ images, name }: { images: string[]; name: string }) {
  const [active, setActive] = useState(0);

  return (
    <div>
      {/* Main image */}
      <div className="relative aspect-[16/10] overflow-hidden rounded-[1.6rem] shadow-[0_30px_70px_-35px_rgba(27,42,143,0.5)]">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, scale: 1.03 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0"
          >
            <Image
              src={images[active]}
              alt={`${name} — view ${active + 1}`}
              fill
              className="object-cover"
              sizes="(max-width:1024px) 100vw, 66vw"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Thumbnails */}
      <div className="mt-3 grid grid-cols-4 gap-3">
        {images.map((src, i) => (
          <button
            key={src + i}
            onClick={() => setActive(i)}
            aria-label={`View image ${i + 1}`}
            className={cn(
              "relative aspect-[4/3] overflow-hidden rounded-xl ring-2 transition-all duration-300",
              active === i ? "ring-navy-600 ring-offset-2 ring-offset-milk" : "ring-transparent opacity-70 hover:opacity-100",
            )}
          >
            <Image src={src} alt="" fill className="object-cover" sizes="20vw" />
          </button>
        ))}
      </div>
    </div>
  );
}
