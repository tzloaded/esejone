import Hero from "@/components/home/Hero";
import BookingWidget from "@/components/home/BookingWidget";
import Marquee from "@/components/home/Marquee";
import Intro from "@/components/home/Intro";
import AboutPreview from "@/components/home/AboutPreview";
import RoomsShowcase from "@/components/home/RoomsShowcase";
import DiningFeature from "@/components/home/DiningFeature";
import Facilities from "@/components/home/Facilities";
import GalleryPreview from "@/components/home/GalleryPreview";
import Testimonials from "@/components/home/Testimonials";
import FinalCTA from "@/components/home/FinalCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <BookingWidget />
      <Marquee />
      <Intro />
      <AboutPreview />
      <RoomsShowcase />
      <DiningFeature />
      <Facilities />
      <GalleryPreview />
      <Testimonials />
      <FinalCTA />
    </>
  );
}
