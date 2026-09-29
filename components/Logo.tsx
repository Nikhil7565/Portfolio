import { cn } from "@/lib/utils";

type LogoProps = {
  /** full = complete brand lockup image; nav = compact navbar size */
  variant?: "full" | "nav";
  className?: string;
};

/** Official logo image — same asset everywhere. */
export function Logo({ variant = "full", className }: LogoProps) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/logo.png"
      alt="Nikhil Agrawal — Software Developer • AI/ML Builder"
      draggable={false}
      className={cn(
        "select-none object-contain",
        variant === "nav"
          ? "h-9 w-auto max-w-[200px] sm:h-10 sm:max-w-[240px]"
          : "h-auto w-full max-w-md",
        className,
      )}
    />
  );
}
