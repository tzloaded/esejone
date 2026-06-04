/* ============================================================================
   ESE-JONES HOTEL — Shared site data
   Single source of truth for nav, contact details, rooms, facilities, etc.
   ========================================================================== */

export const SITE = {
  name: "Ese-Jones Hotel",
  shortName: "Ese-Jones",
  tagline: "A Sanctuary of Modern Luxury",
  location: "Abraka, Delta State, Nigeria",
  address: {
    line1: "Police Station Road, Abraka",
    line2: "Delta State, Nigeria",
    postal: "330105",
    full: "Police Station Road, Abraka, Delta State, Nigeria 330105",
    maps: "https://www.google.com/maps/search/?api=1&query=Ese-Jones+Hotel+Abraka+Delta+State",
  },
  phoneDisplay: "0906 329 9235",
  phoneRaw: "09063299235",
  phoneIntl: "+2349063299235",
  whatsapp: "https://wa.me/2349063299235",
  email: "info@esejoneshotel.com",
  socials: {
    instagram: "https://instagram.com/esejoneshotelapartment",
    instagramHandle: "@esejoneshotelapartment",
    tiktok: "https://www.tiktok.com/@esejoneshotel",
    tiktokHandle: "@esejoneshotel",
  },
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Rooms & Suites", href: "/rooms" },
  { label: "Dining", href: "/dining" },
  { label: "Facilities", href: "/facilities" },
  { label: "Gallery", href: "/gallery" },
  { label: "Events", href: "/events" },
  { label: "Contact", href: "/contact" },
] as const;

export type Room = {
  slug: string;
  name: string;
  tag: string;
  price: string;
  size: string;
  occupancy: string;
  bed: string;
  image: string;
  blurb: string;
  description: string[];
  features: string[];
  gallery: string[];
};

export const ROOMS: Room[] = [
  {
    slug: "deluxe",
    name: "Deluxe",
    tag: "Most Loved",
    price: "₦35,000",
    size: "32 m²",
    occupancy: "2 Guests",
    bed: "King Bed",
    image: "/room1.jpg",
    blurb:
      "An elegantly appointed retreat with a plush king bed, private balcony, and a calm palette designed for deep rest.",
    description: [
      "Our Deluxe room is a bright, airy retreat finished in soft neutral tones with warm copper accents. A plush king bed dressed in crisp white linens sits beneath the room's signature backlit panels, while floor-to-ceiling drapes open onto a private balcony.",
      "Thoughtfully equipped with a smart TV, work desk, and a marble en-suite bathroom, the Deluxe is perfect for couples and business travellers who appreciate comfort and quiet sophistication.",
    ],
    features: ["King Bed", "Private Balcony", "Smart TV", "Work Desk", "Air Conditioning", "En-suite Marble Bath", "Free Wi-Fi", "Daily Housekeeping"],
    gallery: ["/room1.jpg", "/room2.jpg", "/room3.jpg", "/room4.jpg"],
  },
  {
    slug: "standard",
    name: "Standard",
    tag: "Best Value",
    price: "₦25,000",
    size: "26 m²",
    occupancy: "2 Guests",
    bed: "Queen Bed",
    image: "/room2.jpg",
    blurb:
      "Beautifully finished comfort for two — thoughtfully sized for couples and business travellers seeking great value.",
    description: [
      "The Standard room delivers everything you need for a restful stay, beautifully presented. A comfortable queen bed, a relaxed seating corner, and a large smart TV come together in a calm, modern space.",
      "With the same refined finishes found throughout Ese-Jones — marble floors, warm lighting, and quality linens — the Standard is exceptional value without compromise.",
    ],
    features: ["Queen Bed", "Seating Area", "Smart TV", "Air Conditioning", "En-suite Bath", "Free Wi-Fi", "Daily Housekeeping"],
    gallery: ["/room2.jpg", "/room1.jpg", "/room4.jpg", "/room3.jpg"],
  },
  {
    slug: "luxury",
    name: "Luxury",
    tag: "Signature",
    price: "₦55,000",
    size: "45 m²",
    occupancy: "2–3 Guests",
    bed: "King Bed + Lounge",
    image: "/room3.jpg",
    blurb:
      "Expansive living with a king bed, private lounge area, and our most refined finishes — an indulgent escape.",
    description: [
      "Our Luxury room is a generous, light-filled sanctuary with a king bed, a dedicated lounge area, and a private balcony overlooking the grounds. Every detail, from the backlit feature wall to the premium bedding, is designed to impress.",
      "Ideal for those who want a little more space and a lot more comfort, the Luxury room pairs elevated finishes with the warm, attentive service Ese-Jones is known for.",
    ],
    features: ["King Bed", "Private Lounge", "Private Balcony", "Smart TV", "Mini Bar", "Premium Marble Bath", "Free Wi-Fi", "Daily Housekeeping"],
    gallery: ["/room3.jpg", "/room4.jpg", "/room1.jpg", "/room2.jpg"],
  },
  {
    slug: "two-bedroom-apartment",
    name: "Two Bedroom Apartment",
    tag: "For Families",
    price: "₦85,000",
    size: "75 m²",
    occupancy: "4 Guests",
    bed: "2 Bedrooms",
    image: "/room4.jpg",
    blurb:
      "A spacious self-contained apartment with two bedrooms and a living area — ideal for families and longer stays.",
    description: [
      "Our Two Bedroom Apartment is a complete home away from home. Two well-appointed bedrooms, a comfortable living area, and a private balcony give families and groups all the room they need to relax together.",
      "With generous space, full amenities, and the privacy of a self-contained suite, it's the perfect choice for extended stays, families, or travelling companions who value their own space.",
    ],
    features: ["Two Bedrooms", "Living Area", "Sleeps 4", "2 Smart TVs", "Air Conditioning", "2 En-suite Baths", "Free Wi-Fi", "Daily Housekeeping"],
    gallery: ["/room4.jpg", "/room3.jpg", "/room2.jpg", "/room1.jpg"],
  },
];

export type Facility = {
  title: string;
  desc: string;
  /** lucide-react icon name */
  icon: string;
};

export const FACILITIES: Facility[] = [
  { title: "Refined Rooms", desc: "Premium bedding, calm interiors, and modern amenities in every room.", icon: "BedDouble" },
  { title: "Fine Dining", desc: "Continental and Nigerian cuisine prepared by our resident chefs.", icon: "UtensilsCrossed" },
  { title: "High-Speed Wi-Fi", desc: "Complimentary fibre internet throughout the entire property.", icon: "Wifi" },
  { title: "24/7 Security", desc: "Round-the-clock security with CCTV surveillance for peace of mind.", icon: "ShieldCheck" },
  { title: "Event Spaces", desc: "Elegant halls for weddings, meetings, and private celebrations.", icon: "PartyPopper" },
  { title: "Lush Gardens", desc: "Beautifully kept outdoor spaces to unwind and breathe easy.", icon: "Trees" },
  { title: "Ample Parking", desc: "Secure on-site parking for all resident and visiting guests.", icon: "Car" },
  { title: "Concierge Service", desc: "A dedicated team ready to make every request effortless.", icon: "ConciergeBell" },
  { title: "Backup Power", desc: "Uninterrupted power supply so your comfort never pauses.", icon: "Zap" },
];

export const STATS = [
  { value: 50, suffix: "+", label: "Elegant Rooms" },
  { value: 24, suffix: "/7", label: "Concierge Care" },
  { value: 4, suffix: "", label: "Dining Experiences" },
  { value: 100, suffix: "%", label: "Guest Satisfaction" },
];

export const TESTIMONIALS = [
  {
    quote:
      "Easily the finest stay in Abraka. The rooms are immaculate, the service warm, and every detail feels considered. We will absolutely return.",
    name: "Adaeze O.",
    role: "Lagos",
  },
  {
    quote:
      "From check-in to check-out, everything was seamless. Quiet, private, and genuinely luxurious — exactly what we needed.",
    name: "Tonye B.",
    role: "Port Harcourt",
  },
  {
    quote:
      "The dining was a highlight. Beautiful space, attentive staff, and food that surprised us in the best way. A hidden gem.",
    name: "Chinedu & Ife",
    role: "Asaba",
  },
];

export const GALLERY = [
  { src: "/exterior-1.jpg", alt: "Ese-Jones Hotel exterior facade" },
  { src: "/room1.jpg", alt: "Deluxe room interior with balcony" },
  { src: "/exterior-2.jpg", alt: "Hotel apartment exterior" },
  { src: "/room2.jpg", alt: "Standard room with seating area" },
  { src: "/exterior-3.jpg", alt: "Hotel grounds" },
  { src: "/room3.jpg", alt: "Luxury room interior" },
  { src: "/exterior-4.jpg", alt: "Property view" },
  { src: "/room4.jpg", alt: "Two bedroom apartment interior" },
  { src: "/exterior-5.jpg", alt: "Architectural detail" },
  { src: "/exterior-6.jpg", alt: "Evening exterior" },
];
