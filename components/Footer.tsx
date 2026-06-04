import Image from "next/image";
import Link from "next/link";
import { Phone, MapPin, Clock, ArrowUpRight, MessageCircle, Navigation } from "lucide-react";
import { SITE } from "@/lib/site";
import { InstagramIcon, TikTokIcon } from "@/components/ui/BrandIcons";
import LocalTime from "@/components/ui/LocalTime";
import BackToTop from "@/components/ui/BackToTop";

const EXPLORE = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

const STAY = [
  { label: "Rooms & Suites", href: "/rooms" },
  { label: "Dining", href: "/dining" },
  { label: "Facilities", href: "/facilities" },
  { label: "Events", href: "/events" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-navy-950 text-white">
      {/* top accent */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-navy-400/50 to-transparent" />
      {/* ambient glow */}
      <div className="pointer-events-none absolute inset-0 opacity-80 [background:radial-gradient(40%_50%_at_85%_0%,rgba(74,91,206,0.4),transparent_70%),radial-gradient(35%_45%_at_5%_60%,rgba(128,144,224,0.22),transparent_70%)]" />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        {/* ── Row 1: brand statement + book action ───────────────────────── */}
        <div className="grid gap-12 border-b border-white/10 py-16 lg:grid-cols-[1.4fr_1fr] lg:gap-16 lg:py-20">
          <div>
            <span className="inline-block rounded-xl bg-white px-4 py-2.5">
              <Image src="/logo.png" alt="Ese-Jones Hotel" width={140} height={56} className="h-10 w-auto object-contain" />
            </span>
            <p className="mt-7 max-w-md text-balance font-display text-3xl font-light leading-[1.2] text-white/90 sm:text-4xl">
              A sanctuary of modern luxury, in the heart of{" "}
              <em className="font-semibold italic text-navy-200">Abraka.</em>
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={SITE.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2.5 rounded-full border border-white/15 py-2.5 pl-3 pr-5 text-sm text-white/75 transition-all hover:border-white/40 hover:text-white"
              >
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 transition-colors group-hover:bg-white/20">
                  <InstagramIcon className="h-4 w-4" />
                </span>
                Instagram
              </a>
              <a
                href={SITE.socials.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2.5 rounded-full border border-white/15 py-2.5 pl-3 pr-5 text-sm text-white/75 transition-all hover:border-white/40 hover:text-white"
              >
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 transition-colors group-hover:bg-white/20">
                  <TikTokIcon className="h-4 w-4" />
                </span>
                TikTok
              </a>
            </div>
          </div>

          {/* Book card */}
          <div className="rounded-[1.6rem] border border-white/10 bg-white/[0.04] p-7 backdrop-blur-sm">
            <p className="eyebrow text-navy-200">Reservations</p>
            <p className="mt-3 font-display text-2xl font-light text-white">
              Ready to book your stay?
            </p>
            <a
              href={SITE.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-navy-700 transition-transform duration-300 hover:-translate-y-0.5"
            >
              <MessageCircle className="h-4 w-4" />
              Book on WhatsApp
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href={`tel:${SITE.phoneRaw}`}
              className="mt-3 flex items-center justify-center gap-2 rounded-full border border-white/15 px-7 py-3.5 text-sm font-medium text-white/80 transition-colors hover:bg-white/5"
            >
              <Phone className="h-4 w-4" />
              {SITE.phoneDisplay}
            </a>
          </div>
        </div>

        {/* ── Row 2: link columns ────────────────────────────────────────── */}
        <div className="grid grid-cols-2 gap-10 border-b border-white/10 py-14 lg:grid-cols-4">
          <FooterCol title="Explore" links={EXPLORE} />
          <FooterCol title="Your Stay" links={STAY} />

          <div>
            <h3 className="eyebrow text-white/40">Visit</h3>
            <ul className="mt-6 space-y-4 text-sm">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-[18px] w-[18px] shrink-0 text-navy-300" />
                <span className="text-white/65">
                  {SITE.address.line1},<br />
                  {SITE.address.line2}
                </span>
              </li>
              <li className="flex gap-3">
                <Clock className="mt-0.5 h-[18px] w-[18px] shrink-0 text-navy-300" />
                <span className="text-white/65">Reception open 24/7</span>
              </li>
              <li>
                <a
                  href={SITE.address.maps}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-navy-200 transition-colors hover:text-white"
                >
                  <Navigation className="h-4 w-4" />
                  Get directions
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="eyebrow text-white/40">Connect</h3>
            <ul className="mt-6 space-y-4 text-sm">
              <li>
                <a href={`tel:${SITE.phoneRaw}`} className="flex items-center gap-3 text-white/65 hover:text-white">
                  <Phone className="h-[18px] w-[18px] shrink-0 text-navy-300" /> {SITE.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={SITE.socials.instagram} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-white/65 hover:text-white">
                  <InstagramIcon className="h-[18px] w-[18px] shrink-0 text-navy-300" /> {SITE.socials.instagramHandle}
                </a>
              </li>
              <li>
                <a href={SITE.socials.tiktok} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-white/65 hover:text-white">
                  <TikTokIcon className="h-[18px] w-[18px] shrink-0 text-navy-300" /> {SITE.socials.tiktokHandle}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* ── Giant wordmark ───────────────────────────────────────────────── */}
      <div className="relative select-none overflow-hidden">
        <p
          className="bg-gradient-to-b from-white/[0.13] to-white/[0.02] bg-clip-text text-center font-display font-semibold leading-[0.78] tracking-tight text-transparent"
          style={{ fontSize: "clamp(3.5rem, 17vw, 17rem)" }}
        >
          ESE-JONES
        </p>
      </div>

      {/* ── Bottom bar ───────────────────────────────────────────────────── */}
      <div className="relative border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 text-xs text-white/40 sm:flex-row sm:px-8 lg:px-12">
          <p>© {new Date().getFullYear()} {SITE.name}. All rights reserved.</p>
          <p className="order-first sm:order-none">
            <LocalTime />
          </p>
          <BackToTop />
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <h3 className="eyebrow text-white/40">{title}</h3>
      <ul className="mt-6 space-y-3.5">
        {links.map((l) => (
          <li key={l.href}>
            <Link href={l.href} className="link-underline text-[0.92rem] text-white/65 hover:text-white">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
