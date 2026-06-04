import SectionHeading from "@/components/ui/SectionHeading";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import RoomCard from "@/components/ui/RoomCard";
import { ROOMS } from "@/lib/site";

export default function RoomsShowcase() {
  return (
    <section className="relative bg-white py-24 sm:py-32">
      <Container>
        <div className="flex flex-col items-center gap-6 text-center">
          <SectionHeading
            eyebrow="Accommodations"
            title="Rooms &"
            emphasis="Suites"
            description="Each space is a quiet retreat — thoughtfully designed, beautifully finished, and ready to welcome you home."
          />
        </div>

        <div className="mt-16 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {ROOMS.slice(0, 3).map((room, i) => (
            <RoomCard key={room.slug} room={room} index={i} />
          ))}
        </div>

        <div className="mt-14 flex justify-center">
          <Button href="/rooms" variant="outline" arrow>
            View All Rooms
          </Button>
        </div>
      </Container>
    </section>
  );
}
