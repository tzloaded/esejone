import {
  BedDouble,
  UtensilsCrossed,
  Wifi,
  ShieldCheck,
  PartyPopper,
  Trees,
  Car,
  ConciergeBell,
  Zap,
  type LucideIcon,
} from "lucide-react";

const MAP: Record<string, LucideIcon> = {
  BedDouble,
  UtensilsCrossed,
  Wifi,
  ShieldCheck,
  PartyPopper,
  Trees,
  Car,
  ConciergeBell,
  Zap,
};

export default function FacilityIcon({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  const Icon = MAP[name] ?? Sparkle;
  return <Icon className={className} />;
}

function Sparkle({ className }: { className?: string }) {
  return <ConciergeBell className={className} />;
}
