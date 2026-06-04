"use client";

import { useEffect, useState } from "react";
import { Calendar, Users, Send, ShieldCheck } from "lucide-react";
import { SITE } from "@/lib/site";

const GUESTS = ["1 Guest", "2 Guests", "3 Guests", "4 Guests", "5 Guests", "6+ Guests"];

function toISO(d: Date) {
  return d.toISOString().split("T")[0];
}

export default function RoomBookingForm({ roomName, price }: { roomName: string; price: string }) {
  const [form, setForm] = useState({ name: "", phone: "", checkIn: "", checkOut: "", guests: GUESTS[1] });
  const [today, setToday] = useState("");

  useEffect(() => {
    const now = new Date();
    const tmr = new Date();
    tmr.setDate(now.getDate() + 1);
    setToday(toISO(now));
    setForm((f) => ({ ...f, checkIn: toISO(now), checkOut: toISO(tmr) }));
  }, []);

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = [
      `Hello Ese-Jones Hotel, I'd like to book the ${roomName} room.`,
      "",
      `Name: ${form.name || "—"}`,
      `Phone: ${form.phone || "—"}`,
      `Check-in: ${form.checkIn || "—"}`,
      `Check-out: ${form.checkOut || "—"}`,
      `Guests: ${form.guests}`,
      `Rate: ${price} / night`,
      "",
      "Please confirm availability. Thank you.",
    ].join("\n");
    window.open(`${SITE.whatsapp}?text=${encodeURIComponent(text)}`, "_blank", "noopener,noreferrer");
  };

  const field =
    "w-full rounded-xl border border-navy-900/10 bg-white px-4 py-3 text-[0.92rem] text-navy-900 outline-none transition-all duration-300 [color-scheme:light] placeholder:text-navy-900/35 focus:border-navy-600 focus:ring-4 focus:ring-navy-600/10";
  const label = "mb-1.5 block text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-navy-900/50";

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-[1.6rem] border border-navy-900/5 bg-white p-6 shadow-[0_30px_70px_-40px_rgba(27,42,143,0.5)] sm:p-7"
    >
      {/* Summary */}
      <div className="flex items-end justify-between border-b border-navy-900/8 pb-5">
        <div>
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-navy-900/45">Book this room</p>
          <h3 className="mt-1 font-display text-2xl font-medium text-navy-900">{roomName}</h3>
        </div>
        <div className="text-right">
          <p className="font-display text-2xl font-semibold text-navy-600">{price}</p>
          <p className="text-xs text-navy-900/45">/ night</p>
        </div>
      </div>

      <div className="mt-5 space-y-4">
        <div>
          <label className={label}>Full Name</label>
          <input required value={form.name} onChange={set("name")} placeholder="Your name" className={field} />
        </div>
        <div>
          <label className={label}>Phone</label>
          <input required value={form.phone} onChange={set("phone")} placeholder="Your phone number" className={field} />
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className={label}><Calendar className="mr-1 inline h-3 w-3" />Check-in</label>
            <input type="date" value={form.checkIn} min={today} onChange={set("checkIn")} className={field} />
          </div>
          <div>
            <label className={label}><Calendar className="mr-1 inline h-3 w-3" />Check-out</label>
            <input type="date" value={form.checkOut} min={form.checkIn || today} onChange={set("checkOut")} className={field} />
          </div>
        </div>
        <div>
          <label className={label}><Users className="mr-1 inline h-3 w-3" />Guests</label>
          <select value={form.guests} onChange={set("guests")} className={`${field} cursor-pointer`}>
            {GUESTS.map((g) => <option key={g}>{g}</option>)}
          </select>
        </div>

        <button
          type="submit"
          className="group flex w-full items-center justify-center gap-2.5 rounded-full bg-navy-600 px-8 py-4 text-sm font-semibold text-white transition-all duration-300 hover:bg-navy-700 hover:shadow-[0_16px_40px_-12px_rgba(27,42,143,0.7)]"
        >
          Request to Book
          <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </button>

        <p className="flex items-center justify-center gap-1.5 text-center text-[0.78rem] text-navy-900/50">
          <ShieldCheck className="h-3.5 w-3.5 text-navy-600" />
          No payment now — we confirm availability on WhatsApp.
        </p>
      </div>
    </form>
  );
}
