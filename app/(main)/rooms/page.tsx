import type { Metadata } from "next";
import { Check } from "lucide-react";
import PageHero from "@/components/PageHero";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import RoomCard from "@/components/ui/RoomCard";
import CTABand from "@/components/ui/CTABand";
import { ROOMS } from "@/lib/site";

export const metadata: Metadata = {
  title: "Rooms & Suites",
  description:
    "Explore beautifully appointed rooms and suites at Ese-Jones Hotel, Abraka — from the Deluxe King to the Executive Suite and Premium Apartments.",
};

const INCLUDED = [
  "Complimentary Wi-Fi",
  "Air Conditioning",
  "Smart TV",
  "En-suite Bathroom",
  "Daily Housekeeping",
  "24/7 Security",
  "Backup Power",
  "Premium Linens",
];

export default function RoomsPage() {
  return (
    <>
      <PageHero
        eyebrow="Rooms & Suites"
        title="Rooms &"
        emphasis="Suites"
        subtitle="Quiet retreats designed for deep rest — each space beautifully finished and ready to welcome you home."
        image="/room-1.jpg"
      />

      <section className="bg-milk py-24 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="Choose Your Space"
            title="Find your"
            emphasis="perfect room"
            description="From intimate doubles to spacious suites and apartments, every option is crafted for comfort and calm."
            align="left"
          />
          <div className="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {ROOMS.map((room, i) => (
              <RoomCard key={room.slug} room={room} index={i} />
            ))}
          </div>
        </Container>
      </section>

      {/* Included in every room */}
      <section className="bg-aurora py-24 sm:py-28">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.3fr]">
            <SectionHeading
              eyebrow="Always Included"
              title="Comfort, in"
              emphasis="every detail"
              description="No matter which room you choose, these essentials come as standard with your stay."
              align="left"
            />
            <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {INCLUDED.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 rounded-2xl border border-white/60 bg-white/60 px-5 py-4 backdrop-blur-md"
                >
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-navy-600/10">
                    <Check className="h-4 w-4 text-navy-600" />
                  </span>
                  <span className="text-[0.95rem] font-medium text-navy-900/80">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <CTABand
        eyebrow="Book Direct"
        title="Reserve your"
        emphasis="room today"
        description="Booking direct is the best way to stay. Message us on WhatsApp or call for availability and our best rates."
        image="/room-2.jpg"
        primaryLabel="Check Availability"
      />
    </>
  );
}
