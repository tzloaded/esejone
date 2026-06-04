"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { SITE } from "@/lib/site";

const SUBJECTS = ["Room Reservation", "Event Enquiry", "Dining Reservation", "General Enquiry"];

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    subject: SUBJECTS[0],
    message: "",
  });

  const handle = (key: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((f) => ({ ...f, [key]: e.target.value }));

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = [
      `Hello Ese-Jones Hotel,`,
      ``,
      `Name: ${form.name || "—"}`,
      `Phone: ${form.phone || "—"}`,
      `Subject: ${form.subject}`,
      ``,
      form.message,
    ].join("\n");
    window.open(`${SITE.whatsapp}?text=${encodeURIComponent(text)}`, "_blank", "noopener,noreferrer");
  };

  const field =
    "w-full rounded-2xl border border-navy-900/10 bg-white px-5 py-3.5 text-[0.95rem] text-navy-900 outline-none transition-all duration-300 placeholder:text-navy-900/35 focus:border-navy-600 focus:ring-4 focus:ring-navy-600/10";

  return (
    <form onSubmit={onSubmit} className="rounded-[1.8rem] border border-navy-900/5 bg-white p-7 shadow-[0_30px_70px_-40px_rgba(27,42,143,0.5)] sm:p-9">
      <h3 className="font-display text-3xl font-medium text-navy-900">Send us a message</h3>
      <p className="mt-2 text-sm text-navy-900/55">
        Fill in the form and we&apos;ll continue the conversation on WhatsApp.
      </p>

      <div className="mt-7 space-y-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="mb-1.5 block text-[0.78rem] font-medium text-navy-900/70">Full Name</label>
            <input required value={form.name} onChange={handle("name")} placeholder="Your name" className={field} />
          </div>
          <div>
            <label className="mb-1.5 block text-[0.78rem] font-medium text-navy-900/70">Phone</label>
            <input required value={form.phone} onChange={handle("phone")} placeholder="Your phone number" className={field} />
          </div>
        </div>

        <div>
          <label className="mb-1.5 block text-[0.78rem] font-medium text-navy-900/70">Subject</label>
          <select value={form.subject} onChange={handle("subject")} className={field}>
            {SUBJECTS.map((s) => (
              <option key={s}>{s}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="mb-1.5 block text-[0.78rem] font-medium text-navy-900/70">Message</label>
          <textarea
            required
            value={form.message}
            onChange={handle("message")}
            rows={5}
            placeholder="Tell us how we can help…"
            className={`${field} resize-none`}
          />
        </div>

        <button
          type="submit"
          className="group inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-navy-600 px-8 py-4 text-sm font-semibold text-white transition-all duration-300 hover:bg-navy-700 hover:shadow-[0_16px_40px_-12px_rgba(27,42,143,0.7)]"
        >
          Send via WhatsApp
          <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </button>
      </div>
    </form>
  );
}
