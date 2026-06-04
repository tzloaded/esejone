"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { NAV_LINKS, SITE } from "@/lib/site";
import { cn } from "@/lib/cn";

const shortLabel = (label: string) => (label === "Rooms & Suites" ? "Rooms" : label);

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const isHome = pathname === "/";
  const solid = !isHome || scrolled;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  // Lock body scroll when overlay menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500",
          solid
            ? "glass-frost shadow-[0_4px_30px_-12px_rgba(27,42,143,0.25)]"
            : "bg-transparent",
        )}
      >
        <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-6 sm:px-8 lg:px-12">
          {/* Logo */}
          <Link href="/" className="flex shrink-0 items-center" aria-label="Ese-Jones Hotel — Home">
            <span className="rounded-lg bg-white px-3 py-1.5 shadow-sm">
              <Image
                src="/logo.png"
                alt="Ese-Jones Hotel"
                width={120}
                height={48}
                priority
                className="h-8 w-auto object-contain"
              />
            </span>
          </Link>

          {/* Desktop links */}
          <ul className="hidden items-center gap-7 xl:flex">
            {NAV_LINKS.map((l) => {
              const active = pathname === l.href;
              return (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className={cn(
                      "link-underline text-[0.82rem] font-medium tracking-wide transition-colors duration-300",
                      solid
                        ? active
                          ? "text-navy-600"
                          : "text-navy-900/80 hover:text-navy-600"
                        : "text-white/90 hover:text-white [text-shadow:0_1px_8px_rgba(0,0,0,0.3)]",
                    )}
                  >
                    {shortLabel(l.label)}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* CTA + mobile toggle */}
          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className={cn(
                "hidden rounded-full px-6 py-2.5 text-[0.8rem] font-semibold tracking-wide transition-all duration-300 sm:inline-flex xl:inline-flex",
                solid
                  ? "bg-navy-600 text-white hover:bg-navy-700 hover:shadow-[0_12px_30px_-10px_rgba(27,42,143,0.7)]"
                  : "glass-soft text-white border-white/40 hover:bg-white/25",
              )}
            >
              Book Now
            </Link>

            <button
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              className={cn(
                "flex h-11 w-11 items-center justify-center rounded-full transition-colors xl:hidden",
                solid ? "text-navy-700 hover:bg-navy-900/5" : "text-white hover:bg-white/10",
              )}
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Fullscreen overlay menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[60] flex flex-col bg-navy-900 text-white"
          >
            {/* grain + aurora accents */}
            <div className="pointer-events-none absolute inset-0 opacity-60 [background:radial-gradient(50%_40%_at_80%_10%,rgba(74,91,206,0.45),transparent_70%),radial-gradient(45%_45%_at_10%_90%,rgba(128,144,224,0.35),transparent_70%)]" />

            <div className="relative flex h-[72px] items-center justify-between px-6 sm:px-8">
              <span className="rounded-lg bg-white px-3 py-1.5">
                <Image src="/logo.png" alt="Ese-Jones Hotel" width={120} height={48} className="h-8 w-auto object-contain" />
              </span>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="flex h-11 w-11 items-center justify-center rounded-full text-white transition-colors hover:bg-white/10"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <nav className="relative flex flex-1 flex-col justify-center px-8 sm:px-12">
              <ul className="flex flex-col gap-1">
                {NAV_LINKS.map((l, i) => {
                  const active = pathname === l.href;
                  return (
                    <motion.li
                      key={l.href}
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + i * 0.06, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <Link
                        href={l.href}
                        onClick={() => setOpen(false)}
                        className={cn(
                          "group flex items-baseline gap-4 py-2 font-display text-4xl font-light transition-colors sm:text-5xl",
                          active ? "text-white" : "text-white/55 hover:text-white",
                        )}
                      >
                        <span className="font-sans text-xs font-medium text-navy-300 opacity-60">
                          0{i + 1}
                        </span>
                        {l.label}
                      </Link>
                    </motion.li>
                  );
                })}
              </ul>
            </nav>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="relative flex flex-col gap-4 border-t border-white/10 px-8 py-6 sm:flex-row sm:items-center sm:justify-between sm:px-12"
            >
              <a href={`tel:${SITE.phoneRaw}`} className="flex items-center gap-2 text-white/80 hover:text-white">
                <Phone className="h-4 w-4" />
                {SITE.phoneDisplay}
              </a>
              <div className="flex gap-5 text-sm text-white/60">
                <a href={SITE.socials.instagram} target="_blank" rel="noopener noreferrer" className="link-underline hover:text-white">
                  Instagram
                </a>
                <a href={SITE.socials.tiktok} target="_blank" rel="noopener noreferrer" className="link-underline hover:text-white">
                  TikTok
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
