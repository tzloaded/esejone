import type { Metadata } from "next";
import { Phone, MessageCircle, MapPin, Clock } from "lucide-react";
import PageHero from "@/components/PageHero";
import Container from "@/components/ui/Container";
import ContactForm from "@/components/ContactForm";
import Reveal from "@/components/ui/Reveal";
import { InstagramIcon, TikTokIcon } from "@/components/ui/BrandIcons";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Ese-Jones Hotel, Abraka. Call, WhatsApp, or visit us on Police Station Road, Abraka, Delta State. We're here to help plan your stay.",
};

const INFO = [
  { icon: Phone, label: "Call Us", value: SITE.phoneDisplay, href: `tel:${SITE.phoneRaw}` },
  { icon: MessageCircle, label: "WhatsApp", value: "Chat with us", href: SITE.whatsapp, external: true },
  { icon: MapPin, label: "Visit Us", value: SITE.address.full, href: SITE.address.maps, external: true },
  { icon: Clock, label: "Reception", value: "Open 24 hours, every day", href: undefined },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Get in"
        emphasis="touch"
        subtitle="Questions, reservations, or special requests — our team is always happy to help."
        image="/exterior-5.jpg"
      />

      <section className="bg-milk py-24 sm:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Info */}
            <Reveal direction="left">
              <span className="eyebrow flex items-center gap-2.5 text-navy-600">
                <span className="inline-block h-px w-6 bg-current opacity-50" />
                We&apos;d Love to Hear From You
              </span>
              <h2 className="mt-5 font-display text-4xl font-light leading-[1.1] text-navy-900 sm:text-5xl">
                Let&apos;s plan your<br />
                <em className="font-semibold italic text-navy-600">perfect stay</em>
              </h2>
              <p className="mt-5 max-w-md leading-relaxed text-navy-900/65">
                Reach out through any channel below, or send us a message and we&apos;ll get right
                back to you.
              </p>

              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                {INFO.map((item) => {
                  const inner = (
                    <div className="group flex h-full items-start gap-4 rounded-2xl border border-navy-900/5 bg-white p-5 shadow-[0_10px_40px_-24px_rgba(27,42,143,0.35)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_45px_-25px_rgba(27,42,143,0.5)]">
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-navy-600/10 text-navy-600 transition-colors duration-300 group-hover:bg-navy-600 group-hover:text-white">
                        <item.icon className="h-5 w-5" />
                      </span>
                      <div>
                        <p className="text-[0.72rem] font-medium uppercase tracking-[0.14em] text-navy-900/45">{item.label}</p>
                        <p className="mt-1 text-[0.95rem] font-medium text-navy-900/85">{item.value}</p>
                      </div>
                    </div>
                  );
                  return item.href ? (
                    <a
                      key={item.label}
                      href={item.href}
                      target={item.external ? "_blank" : undefined}
                      rel={item.external ? "noopener noreferrer" : undefined}
                    >
                      {inner}
                    </a>
                  ) : (
                    <div key={item.label}>{inner}</div>
                  );
                })}
              </div>

              {/* Socials */}
              <div className="mt-8 flex items-center gap-4">
                <span className="text-sm text-navy-900/55">Follow us</span>
                <a href={SITE.socials.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="flex h-11 w-11 items-center justify-center rounded-full border border-navy-900/10 text-navy-600 transition-all hover:bg-navy-600 hover:text-white">
                  <InstagramIcon className="h-[18px] w-[18px]" />
                </a>
                <a href={SITE.socials.tiktok} target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="flex h-11 w-11 items-center justify-center rounded-full border border-navy-900/10 text-navy-600 transition-all hover:bg-navy-600 hover:text-white">
                  <TikTokIcon className="h-[18px] w-[18px]" />
                </a>
              </div>
            </Reveal>

            {/* Form */}
            <Reveal direction="right" delay={0.1}>
              <ContactForm />
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Map */}
      <section className="bg-aurora pb-24 sm:pb-28">
        <Container>
          <div className="overflow-hidden rounded-[1.8rem] border border-navy-900/10 shadow-[0_30px_70px_-40px_rgba(27,42,143,0.5)]">
            <iframe
              title="Ese-Jones Hotel location map"
              src="https://www.google.com/maps?q=Abraka,+Delta+State,+Nigeria&output=embed"
              width="100%"
              height="440"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="block w-full grayscale-[0.2]"
            />
          </div>
        </Container>
      </section>
    </>
  );
}
