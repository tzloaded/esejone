import { cn } from "@/lib/cn";

export default function Container({
  children,
  className,
  size = "default",
}: {
  children: React.ReactNode;
  className?: string;
  size?: "default" | "wide" | "narrow";
}) {
  const max =
    size === "wide" ? "max-w-[1440px]" : size === "narrow" ? "max-w-3xl" : "max-w-7xl";
  return (
    <div className={cn("mx-auto w-full px-6 sm:px-8 lg:px-12", max, className)}>
      {children}
    </div>
  );
}
