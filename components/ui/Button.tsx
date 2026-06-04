import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "outline" | "ghost" | "glass" | "white";
type Size = "sm" | "md" | "lg";

const base =
  "group relative inline-flex items-center justify-center gap-2.5 rounded-full font-medium tracking-wide transition-all duration-300 ease-out whitespace-nowrap";

const variants: Record<Variant, string> = {
  primary:
    "bg-navy-600 text-white shadow-[0_10px_30px_-8px_rgba(27,42,143,0.5)] hover:bg-navy-700 hover:shadow-[0_16px_40px_-8px_rgba(27,42,143,0.6)] hover:-translate-y-0.5",
  outline:
    "border border-navy-600/40 text-navy-700 hover:border-navy-600 hover:bg-navy-600 hover:text-white",
  ghost: "text-navy-700 hover:text-navy-900",
  glass:
    "glass-soft text-white border-white/40 hover:bg-white/25 hover:-translate-y-0.5",
  white:
    "bg-white text-navy-700 shadow-[0_10px_30px_-8px_rgba(0,0,0,0.25)] hover:-translate-y-0.5",
};

const sizes: Record<Size, string> = {
  sm: "px-5 py-2.5 text-[0.8rem]",
  md: "px-7 py-3.5 text-[0.85rem]",
  lg: "px-9 py-4 text-[0.9rem]",
};

type CommonProps = {
  children: React.ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
  arrow?: boolean;
};

export default function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className,
  arrow = false,
  external = false,
}: CommonProps & { href: string; external?: boolean }) {
  const classes = cn(base, variants[variant], sizes[size], className);
  const content = (
    <>
      <span>{children}</span>
      {arrow && (
        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
      )}
    </>
  );

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {content}
    </Link>
  );
}
