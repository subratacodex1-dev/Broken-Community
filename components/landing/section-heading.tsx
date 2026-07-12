import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  className?: string;
}

export function SectionHeading({ eyebrow, title, description, className }: SectionHeadingProps) {
  return (
    <div className={cn("max-w-3xl", className)}>
      <Badge>{eyebrow}</Badge>
      <h2 className="mt-5 text-3xl font-semibold tracking-[-0.04em] sm:text-5xl">{title}</h2>
      {description ? <p className="mt-4 text-base leading-7 text-[hsl(var(--secondary))]">{description}</p> : null}
    </div>
  );
}
