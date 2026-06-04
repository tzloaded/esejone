import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://esejoneshotel.com"),
  title: {
    default: "Ese-Jones Hotel — Luxury Stays in Abraka, Delta State",
    template: "%s · Ese-Jones Hotel",
  },
  description:
    "Ese-Jones Hotel is a sanctuary of modern luxury and warm Nigerian hospitality in the heart of Abraka, Delta State. Refined rooms, fine dining, and unforgettable stays.",
  keywords: [
    "Ese-Jones Hotel",
    "hotel in Abraka",
    "luxury hotel Delta State",
    "Abraka hotels",
    "Nigeria luxury hotel",
    "hotel apartment Abraka",
  ],
  openGraph: {
    title: "Ese-Jones Hotel — Luxury Stays in Abraka, Delta State",
    description:
      "A sanctuary of modern luxury and warm Nigerian hospitality in the heart of Abraka, Delta State.",
    type: "website",
    locale: "en_NG",
    siteName: "Ese-Jones Hotel",
  },
  icons: { icon: "/logo.png" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${cormorant.variable} ${inter.variable}`}
    >
      <body className="min-h-screen bg-milk text-ink antialiased">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
