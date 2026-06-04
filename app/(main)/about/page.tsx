import type { Metadata } from "next";
import Image from "next/image";
import { Heart, Sparkles, ShieldCheck, Leaf } from "lucide-react";
import PageHero from "@/components/PageHero";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Counter from "@/components/ui/Counter";
import CTABand from "@/components/ui/CTABand";
import Reveal from "@/components/ui/Reveal";
import { STATS } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Ese-Jones Hotel is a sanctuary of modern luxury and warm Nigerian hospitality in Abraka, Delta State. Learn our story and what makes every stay special.",
};

const VALUES = [
  { icon: Heart, title: "Warm Hospitality", desc: "Genuine, attentive care that makes every guest feel at home." },
  { icon: Sparkles, title: "Refined Comfort", desc: "Clean, modern interiors finished to the highest standard." },
  { icon: ShieldCheck, title: "Privacy & Safety", desc: "Secure, serene surroundings for complete peace of mind." },
  { icon: Leaf, title: "Calm by Design", desc: "Quiet spaces and lush greenery that help you truly unwind." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="Our"
        emphasis="story"
        subtitle="A sanctuary of modern luxury and warm Nigerian hospitality, in the heart of Abraka."
        image="/exterior-1.jpg"
      />

      {/* Story */}
      <section className="bg-milk py-24 sm:py-32">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <Reveal direction="left">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-[0_40px_80px_-30px_rgba(27,42,143,0.4)]">
                <Image src="/exterior-2.jpg" alt="Ese-Jones Hotel" fill className="object-cover" sizes="(max-width:1024px) 100vw, 50vw" />
              </div>
            </Reveal>
            <Reveal direction="right" delay={0.1}>
              <SectionHeading
                eyebrow="Welcome to Ese-Jones"
                title="Hospitality,"
                emphasis="reimagined"
                align="left"
              />
              <div className="mt-6 space-y-4 text-navy-900/65">
                <p className="leading-relaxed">
                  Ese-Jones Hotel was born from a simple belief: that a great stay is about how a
                  place makes you feel. From the moment you arrive, our clean architecture, soft
                  light, and considered interiors set a tone of calm and quiet luxury.
                </p>
                <p className="leading-relaxed">
                  Located on Police Station Road in Abraka, Delta State, we offer beautifully
                  appointed rooms, fine on-site dining, and warm, personal service — a home away
                  from home for travellers, families, and professionals alike.
                </p>
                <p className="leading-relaxed">
                  Whether you are visiting for a night or settling in for an extended stay, our
                  promise is the same: comfort, privacy, and care, every single time.
                </p>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Values */}
      <section className="bg-aurora py-24 sm:py-32">
        <Container>
          <div className="flex flex-col items-center text-center">
            <SectionHeading
              eyebrow="What We Stand For"
              title="The Ese-Jones"
              emphasis="difference"
              description="The values that shape every stay and every interaction with our guests."
            />
          </div>
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.1}>
                <div className="group h-full rounded-3xl border border-white/60 bg-white/60 p-8 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1.5 hover:bg-white/90 hover:shadow-[0_24px_50px_-25px_rgba(27,42,143,0.4)]">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-navy-600/10 text-navy-600 transition-colors duration-500 group-hover:bg-navy-600 group-hover:text-white">
                    <v.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-6 font-display text-2xl font-medium text-navy-900">{v.title}</h3>
                  <p className="mt-2.5 text-[0.92rem] leading-relaxed text-navy-900/60">{v.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Stats band */}
      <section className="bg-navy-900 py-20">
        <Container>
          <div className="grid grid-cols-2 gap-10 lg:grid-cols-4">
            {STATS.map((s) => (
              <div key={s.label} className="text-center">
                <p className="font-display text-5xl font-semibold text-white lg:text-6xl">
                  <Counter value={s.value} suffix={s.suffix} />
                </p>
                <p className="mt-2 text-[0.72rem] font-medium uppercase tracking-[0.16em] text-navy-200/70">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CTABand image="/exterior-5.jpg" />
    </>
  );
}
