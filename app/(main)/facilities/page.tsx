import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import FacilityCard from "@/components/ui/FacilityCard";
import CTABand from "@/components/ui/CTABand";
import Reveal from "@/components/ui/Reveal";
import { FACILITIES } from "@/lib/site";

export const metadata: Metadata = {
  title: "Facilities & Amenities",
  description:
    "Discover the facilities at Ese-Jones Hotel, Abraka — fine dining, high-speed Wi-Fi, 24/7 security, event spaces, gardens, parking, backup power and more.",
};

export default function FacilitiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Facilities"
        title="Facilities &"
        emphasis="amenities"
        subtitle="Everything you need for a seamless, restful stay — considered down to the smallest detail."
        image="/exterior-3.jpg"
      />

      <section className="bg-milk py-24 sm:py-28">
        <Container>
          <div className="flex flex-col items-center text-center">
            <SectionHeading
              eyebrow="What We Offer"
              title="Comfort &"
              emphasis="convenience"
              description="From the essentials to the thoughtful extras, our amenities are designed around you."
            />
          </div>
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {FACILITIES.map((f, i) => (
              <FacilityCard key={f.title} facility={f} index={i} />
            ))}
          </div>
        </Container>
      </section>

      {/* Feature highlight */}
      <section className="bg-aurora py-24 sm:py-28">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <Reveal direction="left">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] shadow-[0_40px_80px_-30px_rgba(27,42,143,0.4)]">
                <Image src="/exterior-2.jpg" alt="Ese-Jones Hotel grounds" fill className="object-cover" sizes="(max-width:1024px) 100vw, 50vw" />
              </div>
            </Reveal>
            <Reveal direction="right" delay={0.1}>
              <SectionHeading
                eyebrow="Built for Ease"
                title="A property that"
                emphasis="just works"
                description="Secure parking, uninterrupted power, fast internet, and a team that anticipates your needs — so the only thing you have to think about is rest."
                align="left"
              />
              <dl className="mt-8 grid grid-cols-2 gap-6">
                {[
                  { k: "100%", v: "Backup Power" },
                  { k: "24/7", v: "On-site Security" },
                  { k: "Fibre", v: "High-Speed Wi-Fi" },
                  { k: "Free", v: "Secure Parking" },
                ].map((s) => (
                  <div key={s.v}>
                    <dt className="font-display text-4xl font-semibold text-navy-600">{s.k}</dt>
                    <dd className="mt-1 text-sm text-navy-900/60">{s.v}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
        </Container>
      </section>

      <CTABand
        eyebrow="Plan Your Visit"
        title="Experience it"
        emphasis="in person"
        description="Book your stay and enjoy every comfort Ese-Jones has to offer."
        image="/exterior-4.jpg"
      />
    </>
  );
}
