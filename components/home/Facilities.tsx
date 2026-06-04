import SectionHeading from "@/components/ui/SectionHeading";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import FacilityCard from "@/components/ui/FacilityCard";
import { FACILITIES } from "@/lib/site";

export default function Facilities() {
  return (
    <section className="bg-aurora relative overflow-hidden py-24 sm:py-32">
      <Container>
        <div className="flex flex-col items-center text-center">
          <SectionHeading
            eyebrow="What We Offer"
            title="Thoughtful"
            emphasis="amenities"
            description="Everything you need for a seamless, restful stay — considered down to the smallest detail."
          />
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FACILITIES.slice(0, 6).map((f, i) => (
            <FacilityCard key={f.title} facility={f} index={i} />
          ))}
        </div>

        <div className="mt-14 flex justify-center">
          <Button href="/facilities" variant="outline" arrow>
            All Facilities
          </Button>
        </div>
      </Container>
    </section>
  );
}
