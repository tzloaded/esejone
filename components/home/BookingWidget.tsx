"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Users, BedDouble, ArrowRight, ShieldCheck } from "lucide-react";
import Container from "@/components/ui/Container";
import { ROOMS, SITE } from "@/lib/site";

const GUESTS = ["1 Guest", "2 Guests", "3 Guests", "4 Guests", "5 Guests", "6+ Guests"];

function toISO(d: Date) {
  return d.toISOString().split("T")[0];
}

export default function BookingWidget() {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState(GUESTS[1]);
  const [room, setRoom] = useState("Any Room");
  const [today, setToday] = useState("");

  // Set sensible defaults after mount (avoids SSR/hydration date mismatch)
  useEffect(() => {
    const now = new Date();
    const tomorrow = new Date();
    tomorrow.setDate(now.getDate() + 1);
    setToday(toISO(now));
    setCheckIn(toISO(now));
    setCheckOut(toISO(tomorrow));
  }, []);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = [
      "Hello Ese-Jones Hotel, I'd like to check availability:",
      "",
      `• Check-in: ${checkIn || "—"}`,
      `• Check-out: ${checkOut || "—"}`,
      `• Guests: ${guests}`,
      `• Room: ${room}`,
      "",
      "Please confirm availability and rates. Thank you.",
    ].join("\n");
    window.open(`${SITE.whatsapp}?text=${encodeURIComponent(text)}`, "_blank", "noopener,noreferrer");
  };

  const labelCls = "mb-1.5 flex items-center gap-1.5 text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-navy-900/45";
  const inputCls =
    "w-full bg-transparent text-[0.95rem] font-medium text-navy-900 outline-none [color-scheme:light] placeholder:text-navy-900/30";

  return (
    <section className="relative z-30 -mt-20 pb-16 sm:-mt-24 sm:pb-20">
      <Container>
        <motion.form
          onSubmit={onSubmit}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1, ease: [0.22, 1, 0.36, 1] }}
          className="overflow-hidden rounded-[1.5rem] border border-white/70 bg-white/95 shadow-[0_30px_70px_-30px_rgba(27,42,143,0.5)] backdrop-blur-xl"
        >
          <div className="grid grid-cols-1 divide-y divide-navy-900/10 md:grid-cols-2 md:divide-y-0 lg:grid-cols-[1fr_1fr_1fr_1fr_auto] lg:divide-x">
            {/* Check-in */}
            <div className="px-6 py-5">
              <label className={labelCls}><Calendar className="h-3.5 w-3.5 text-navy-600" /> Check-in</label>
              <input
                type="date"
                value={checkIn}
                min={today}
                onChange={(e) => setCheckIn(e.target.value)}
                className={inputCls}
              />
            </div>

            {/* Check-out */}
            <div className="px-6 py-5">
              <label className={labelCls}><Calendar className="h-3.5 w-3.5 text-navy-600" /> Check-out</label>
              <input
                type="date"
                value={checkOut}
                min={checkIn || today}
                onChange={(e) => setCheckOut(e.target.value)}
                className={inputCls}
              />
            </div>

            {/* Guests */}
            <div className="px-6 py-5">
              <label className={labelCls}><Users className="h-3.5 w-3.5 text-navy-600" /> Guests</label>
              <select value={guests} onChange={(e) => setGuests(e.target.value)} className={`${inputCls} cursor-pointer`}>
                {GUESTS.map((g) => <option key={g}>{g}</option>)}
              </select>
            </div>

            {/* Room */}
            <div className="px-6 py-5">
              <label className={labelCls}><BedDouble className="h-3.5 w-3.5 text-navy-600" /> Room Type</label>
              <select value={room} onChange={(e) => setRoom(e.target.value)} className={`${inputCls} cursor-pointer`}>
                <option>Any Room</option>
                {ROOMS.map((r) => <option key={r.slug}>{r.name}</option>)}
              </select>
            </div>

            {/* Submit */}
            <div className="p-3">
              <button
                type="submit"
                className="group flex h-full w-full items-center justify-center gap-2.5 rounded-[1.1rem] bg-navy-600 px-8 py-4 text-sm font-semibold text-white transition-all duration-300 hover:bg-navy-700"
              >
                Check Availability
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </motion.form>

        {/* trust line */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3, duration: 0.6 }}
          className="mt-4 flex items-center justify-center gap-2 text-[0.8rem] text-navy-900/55"
        >
          <ShieldCheck className="h-4 w-4 text-navy-600" />
          Best rates guaranteed when you book direct — no booking fees.
        </motion.p>
      </Container>
    </section>
  );
}
