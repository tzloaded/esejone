const WORDS = [
  "Luxury Rooms",
  "Fine Dining",
  "Warm Hospitality",
  "Privacy & Calm",
  "Event Spaces",
  "24/7 Concierge",
  "Lush Gardens",
];

export default function Marquee() {
  return (
    <div className="relative overflow-hidden border-y border-navy-900/10 bg-navy-900 py-5">
      <div className="flex w-max animate-[marquee_38s_linear_infinite] items-center">
        {[0, 1].map((dup) => (
          <div key={dup} className="flex items-center" aria-hidden={dup === 1}>
            {WORDS.map((w) => (
              <span key={w} className="flex items-center">
                <span className="px-8 font-display text-2xl font-light italic text-white/85 sm:text-3xl">
                  {w}
                </span>
                <svg viewBox="0 0 10 10" className="h-2.5 w-2.5 text-navy-300" aria-hidden="true">
                  <path d="M5 0 L6.2 3.8 L10 5 L6.2 6.2 L5 10 L3.8 6.2 L0 5 L3.8 3.8 Z" fill="currentColor" />
                </svg>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
