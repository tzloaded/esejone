/** Brand glyphs (lucide v1 removed brand icons for trademark reasons). */

export function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5.5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.4" cy="6.6" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M16.5 3c.3 2.1 1.5 3.6 3.5 3.9v2.4c-1.3.1-2.5-.3-3.6-1v5.9c0 3.4-2.6 5.8-5.8 5.8a5.5 5.5 0 0 1-5.6-5.6c0-3.3 2.9-5.9 6.3-5.4v2.6a3 3 0 0 0-1.1-.2 2.9 2.9 0 1 0 2.9 2.9V3h3.4z" />
    </svg>
  );
}
