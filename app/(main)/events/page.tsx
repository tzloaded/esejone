import type { Metadata } from "next";
import Image from "next/image";
import { Heart, Briefcase, PartyPopper, GlassWater, Check } from "lucide-react";
import PageHero from "@/components/PageHero";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import CTABand from "@/components/ui/CTABand";
import Reveal from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Events & Celebrations",
  description:
    "Host weddings, conferences, birthdays, and private celebrations at Ese-Jones Hotel, Abraka. Elegant spaces, attentive service, and tailored packages.",
};

const EVENTS = [
  { icon: Heart, title: "Weddings", desc: "Say 'I do' in an elegant setting, with spaces and service tailored to your perfect day." },
  { icon: Briefcase, title: "Meetings & Conferences", desc: "Professional spaces with the amenities your business gatherings demand." },
  { icon: PartyPopper, title: "Birthdays & Parties", desc: "Celebrate life's milestones with style, comfort, and a team that handles the details." },
  { icon: GlassWater, title: "Private Dining", desc: "Intimate, bespoke dining experiences for your closest guests." },
];

const INCLUDES = [
  "Flexible event spaces",
  "Dedicated event coordination",
  "In-house catering & bar",
  "Audio-visual support",
  "Ample secure parking",
  "Accommodation for guests",
];

export default function EventsPage() {
  return (
    <>
      <PageHero
        eyebrow="Events"
        title="Occasions to"
        emphasis="remember"
        subtitle="From weddings to corporate gatherings, our elegant spaces set the stage for unforgettable moments."
        image="/exterior-4.jpg"
      />

      {/* Event types */}
      <section className="bg-milk py-24 sm:py-32">
        <Container>
          <div className="flex flex-col items-center text-center">
            <SectionHeading
              eyebrow="What We Host"
              title="Every event,"
              emphasis="beautifully done"
              description="Whatever the occasion, we provide the space, the service, and the care to make it shine."
            />
          </div>
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {EVENTS.map((e, i) => (
              <Reveal key={e.title} delay={i * 0.1}>
                <div className="group h-full rounded-3xl border border-navy-900/5 bg-white p-8 shadow-[0_10px_40px_-20px_rgba(27,42,143,0.25)] transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_24px_50px_-25px_rgba(27,42,143,0.45)]">
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

      {/* Includes */}
      <section className="bg-aurora py-24 sm:py-32">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <Reveal direction="left">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] shadow-[0_40px_80px_-30px_rgba(27,42,143,0.4)]">
                <Image src="/exterior-6.jpg" alt="Event space at Ese-Jones Hotel" fill className="object-cover" sizes="(max-width:1024px) 100vw, 50vw" />
              </div>
            </Reveal>
            <Reveal direction="right" delay={0.1}>
              <SectionHeading
                eyebrow="Tailored to You"
                title="Everything your"
                emphasis="event needs"
                align="left"
                description="We work closely with you to plan and deliver a seamless event from start to finish."
              />
              <ul className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {INCLUDES.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-navy-600/10">
                      <Check className="h-4 w-4 text-navy-600" />
                    </span>
                    <span className="text-[0.95rem] text-navy-900/80">{item}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </Container>
      </section>

      <CTABand
        eyebrow="Let's Plan Together"
        title="Host it at"
        emphasis="Ese-Jones"
        description="Tell us about your event and our team will craft a package tailored to your needs."
        image="/exterior-1.jpg"
        primaryLabel="Enquire Now"
      />
    </>
  );
}
