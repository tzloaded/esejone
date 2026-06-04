"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { GALLERY } from "@/lib/site";

const SPANS = [
  "col-span-2 row-span-2",
  "col-span-2 row-span-1",
  "col-span-1 row-span-1",
  "col-span-1 row-span-1",
  "col-span-2 row-span-1",
  "col-span-2 row-span-1",
];

export default function GalleryPreview() {
  const items = GALLERY.slice(0, 6);
  return (
    <section className="bg-milk py-24 sm:py-32">
      <Container>
        <div className="flex flex-col items-end justify-between gap-6 sm:flex-row">
          <div>
            <span className="eyebrow flex items-center gap-2.5 text-navy-600">
              <span className="inline-block h-px w-6 bg-current opacity-50" />
              Our Property
            </span>
            <h2 className="mt-5 font-display text-4xl font-light leading-[1.1] text-navy-900 sm:text-5xl">
              A glimpse of <em className="font-semibold italic text-navy-600">Ese-Jones</em>
            </h2>
          </div>
          <div className="hidden sm:block">
            <Button href="/gallery" variant="outline" arrow>
              Full Gallery
            </Button>
          </div>
        </div>

        <div className="mt-12 grid auto-rows-[130px] grid-cols-2 gap-3 sm:auto-rows-[190px] lg:auto-rows-[200px] lg:grid-cols-4">
          {items.map((img, i) => (
            <motion.div
              key={img.src}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.08 }}
              className={`group relative overflow-hidden rounded-2xl ${SPANS[i]}`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-[1.1s] ease-out group-hover:scale-110"
                sizes="(max-width:640px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-navy-900/0 transition-colors duration-500 group-hover:bg-navy-900/15" />
            </motion.div>
          ))}
        </div>

        <div className="mt-10 flex justify-center sm:hidden">
          <Button href="/gallery" variant="outline" arrow>
            Full Gallery
          </Button>
        </div>
      </Container>
    </section>
  );
}
