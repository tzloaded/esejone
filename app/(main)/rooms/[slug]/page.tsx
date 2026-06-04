import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Maximize, Users, BedDouble, Check } from "lucide-react";
import PageHero from "@/components/PageHero";
import Container from "@/components/ui/Container";
import RoomGallery from "@/components/RoomGallery";
import RoomBookingForm from "@/components/RoomBookingForm";
import RoomCard from "@/components/ui/RoomCard";
import CTABand from "@/components/ui/CTABand";
import Reveal from "@/components/ui/Reveal";
import { ROOMS } from "@/lib/site";

export function generateStaticParams() {
  return ROOMS.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const room = ROOMS.find((r) => r.slug === slug);
  if (!room) return { title: "Room Not Found" };
  return {
    title: `${room.name} Room`,
    description: room.blurb,
  };
}

export default async function RoomDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const room = ROOMS.find((r) => r.slug === slug);
  if (!room) notFound();

  const others = ROOMS.filter((r) => r.slug !== slug).slice(0, 3);

  return (
    <>
      <PageHero
        eyebrow="Rooms & Suites"
        title={room.name}
        subtitle={room.blurb}
        image={room.image}
      />

      {/* Facts strip */}
      <section className="relative z-20 -mt-14">
        <Container>
          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-navy-900/8 bg-navy-900/8 shadow-[0_24px_50px_-30px_rgba(27,42,143,0.45)] sm:grid-cols-4">
            {[
              { icon: Maximize, label: "Room Size", value: room.size },
              { icon: Users, label: "Occupancy", value: room.occupancy },
              { icon: BedDouble, label: "Bedding", value: room.bed },
            ].map((f) => (
              <div key={f.label} className="flex items-center gap-3 bg-white px-5 py-5">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-navy-600/10 text-navy-600">
                  <f.icon className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-[0.66rem] font-semibold uppercase tracking-[0.12em] text-navy-900/45">{f.label}</p>
                  <p className="text-[0.95rem] font-semibold text-navy-900">{f.value}</p>
                </div>
              </div>
            ))}
            <div className="flex items-center justify-between bg-navy-600 px-5 py-5 text-white">
              <div>
                <p className="text-[0.66rem] font-semibold uppercase tracking-[0.12em] text-white/60">From</p>
                <p className="font-display text-xl font-semibold">{room.price}</p>
              </div>
              <span className="text-[0.7rem] text-white/60">/ night</span>
            </div>
          </div>
        </Container>
      </section>

      {/* Gallery + details + booking */}
      <section className="bg-milk py-20 sm:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1.6fr_1fr] lg:gap-14">
            {/* Left: gallery + description + features */}
            <div>
              <RoomGallery images={room.gallery} name={room.name} />

              <div className="mt-12">
                <span className="eyebrow flex items-center gap-2.5 text-navy-600">
                  <span className="inline-block h-px w-6 bg-current opacity-50" />
                  Overview
                </span>
                <h2 className="mt-4 font-display text-3xl font-light text-navy-900 sm:text-4xl">
                  About the <em className="font-semibold italic text-navy-600">{room.name}</em>
                </h2>
                <div className="mt-5 space-y-4 text-navy-900/65">
                  {room.description.map((p, i) => (
                    <p key={i} className="leading-relaxed">{p}</p>
                  ))}
                </div>
              </div>

              <div className="mt-10">
                <h3 className="font-display text-2xl font-medium text-navy-900">Room features</h3>
                <ul className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {room.features.map((f) => (
                    <li key={f} className="flex items-center gap-3">
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-navy-600/10">
                        <Check className="h-4 w-4 text-navy-600" />
                      </span>
                      <span className="text-[0.95rem] text-navy-900/80">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right: sticky booking form */}
            <div className="lg:sticky lg:top-24 lg:self-start">
              <RoomBookingForm roomName={room.name} price={room.price} />
            </div>
          </div>
        </Container>
      </section>

      {/* Other rooms */}
      <section className="bg-aurora py-20 sm:py-24">
        <Container>
          <div className="flex flex-col items-center text-center">
            <span className="eyebrow text-navy-600">Keep Exploring</span>
            <h2 className="mt-4 font-display text-4xl font-light text-navy-900 sm:text-5xl">
              Other <em className="font-semibold italic text-navy-600">rooms</em>
            </h2>
          </div>
          <div className="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {others.map((r, i) => (
              <RoomCard key={r.slug} room={r} index={i} />
            ))}
          </div>
        </Container>
      </section>

      <Reveal>
        <CTABand
          eyebrow="Need Help Choosing?"
          title="Talk to our"
          emphasis="team"
          description="Not sure which room is right for you? Message us and we'll help you find the perfect fit."
          image="/exterior-6.jpg"
          primaryLabel="Chat on WhatsApp"
        />
      </Reveal>
    </>
  );
}
