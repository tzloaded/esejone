import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import CTABand from "@/components/ui/CTABand";
import Reveal from "@/components/ui/Reveal";
import { GALLERY } from "@/lib/site";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "A visual tour of Ese-Jones Hotel, Abraka — our architecture, rooms, grounds, and spaces. See where your next stay awaits.",
};

// Varied aspect ratios for an editorial masonry feel
const RATIOS = [
  "aspect-[3/4]",
  "aspect-[4/3]",
  "aspect-square",
  "aspect-[4/5]",
  "aspect-[4/3]",
  "aspect-[3/4]",
  "aspect-square",
  "aspect-[4/3]",
];

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="A glimpse of"
        emphasis="Ese-Jones"
        subtitle="Every corner tells a story of calm, comfort, and considered design."
        image="/exterior-6.jpg"
      />

      <section className="bg-milk py-24 sm:py-28">
        <Container>
          <div className="flex flex-col items-center text-center">
            <SectionHeading
              eyebrow="Our Property"
              title="Moments &"
              emphasis="spaces"
              description="From our clean architecture to our restful interiors — explore the spaces that make Ese-Jones special."
            />
          </div>

          <div className="mt-14 columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4">
            {GALLERY.map((img, i) => (
              <Reveal key={img.src} delay={(i % 3) * 0.08} className="break-inside-avoid">
                <div className={`group relative ${RATIOS[i % RATIOS.length]} overflow-hidden rounded-2xl shadow-[0_14px_40px_-24px_rgba(27,42,143,0.4)]`}>
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover transition-transform duration-[1.1s] ease-out group-hover:scale-110"
                    sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-navy-900/0 transition-colors duration-500 group-hover:bg-navy-900/20" />
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CTABand
        eyebrow="See It For Yourself"
        title="Come stay"
        emphasis="with us"
        description="Pictures only tell part of the story. Book your stay and experience Ese-Jones in person."
        image="/exterior-2.jpg"
      />
    </>
  );
}
