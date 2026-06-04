import type { Metadata } from "next";
import { Coffee, UtensilsCrossed, Utensils, Martini, Clock } from "lucide-react";
import PageHero from "@/components/PageHero";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import CTABand from "@/components/ui/CTABand";
import Reveal from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Dining",
  description:
    "Fine on-site dining at Ese-Jones Hotel, Abraka — continental cuisine, Nigerian classics, all-day breakfast, and a relaxed cocktail bar.",
};

const EXPERIENCES = [
  { icon: Coffee, title: "All-Day Breakfast", desc: "Start your morning with freshly prepared favourites, hot and cold, served just the way you like." },
  { icon: UtensilsCrossed, title: "Continental Cuisine", desc: "A thoughtfully curated menu celebrating international classics, prepared with care." },
  { icon: Utensils, title: "Nigerian Classics", desc: "Beloved local dishes bursting with flavour — comfort food, elevated." },
  { icon: Martini, title: "Cocktail Bar", desc: "Unwind with signature cocktails, fine wines, and refreshments in a relaxed setting." },
];

const HOURS = [
  { day: "Breakfast", time: "7:00 — 10:30" },
  { day: "Lunch", time: "12:30 — 16:00" },
  { day: "Dinner", time: "18:00 — 22:30" },
  { day: "Bar", time: "12:00 — Late" },
];

export default function DiningPage() {
  return (
    <>
      <PageHero
        eyebrow="Dining"
        title="A taste of"
        emphasis="refinement"
        subtitle="From morning breakfast to late-night indulgence, our kitchen is always ready to delight."
        image="/exterior-2.jpg"
      />

      {/* Feature with video */}
      <section className="bg-milk py-24 sm:py-32">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <Reveal direction="left">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] shadow-[0_40px_80px_-30px_rgba(27,42,143,0.4)]">
                <video className="media-cover" autoPlay muted loop playsInline poster="/exterior-3.jpg">
                  <source src="/restaurant-video.mp4" type="video/mp4" />
                </video>
              </div>
            </Reveal>
            <Reveal direction="right" delay={0.1}>
              <SectionHeading
                eyebrow="The Restaurant"
                title="Where flavour"
                emphasis="meets ambience"
                align="left"
                description="Our restaurant brings together the freshest local and continental ingredients in a warm, sophisticated space. Whether it's an intimate dinner or a relaxed brunch, every plate is crafted to impress."
              />
              <p className="mt-4 leading-relaxed text-navy-900/65">
                Dine in, or enjoy in-room service from the comfort of your suite — the choice is
                always yours.
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Experiences */}
      <section className="bg-aurora py-24 sm:py-32">
        <Container>
          <div className="flex flex-col items-center text-center">
            <SectionHeading
              eyebrow="On the Menu"
              title="Dining"
              emphasis="experiences"
              description="Four distinct ways to enjoy great food and drink throughout your stay."
            />
          </div>
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {EXPERIENCES.map((e, i) => (
              <Reveal key={e.title} delay={i * 0.1}>
                <div className="group h-full rounded-3xl border border-white/60 bg-white/60 p-8 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1.5 hover:bg-white/90 hover:shadow-[0_24px_50px_-25px_rgba(27,42,143,0.4)]">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-navy-600/10 text-navy-600 transition-colors duration-500 group-hover:bg-navy-600 group-hover:text-white">
                    <e.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-6 font-display text-2xl font-medium text-navy-900">{e.title}</h3>
                  <p className="mt-2.5 text-[0.92rem] leading-relaxed text-navy-900/60">{e.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Hours */}
      <section className="bg-navy-900 py-20">
        <Container>
          <div className="flex flex-col items-center gap-3 text-center">
            <span className="inline-flex items-center gap-2 text-navy-200">
              <Clock className="h-5 w-5" />
              <span className="eyebrow">Opening Hours</span>
            </span>
            <h2 className="font-display text-4xl font-light text-white sm:text-5xl">
              Served <em className="font-semibold italic">daily</em>
            </h2>
          </div>
          <div className="mx-auto mt-12 grid max-w-3xl grid-cols-2 gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 lg:grid-cols-4">
            {HOURS.map((h) => (
              <div key={h.day} className="bg-navy-900 px-4 py-8 text-center">
                <p className="text-[0.72rem] font-medium uppercase tracking-[0.16em] text-navy-200/70">{h.day}</p>
                <p className="mt-2 font-display text-2xl font-semibold text-white">{h.time}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CTABand
        eyebrow="Reservations"
        title="Reserve your"
        emphasis="table"
        description="Planning a special evening or a quiet dinner? Message us on WhatsApp to book your table."
        image="/exterior-3.jpg"
        primaryLabel="Reserve a Table"
      />
    </>
  );
}
