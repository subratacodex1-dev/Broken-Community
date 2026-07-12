import type { LucideIcon } from "lucide-react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface PlatformPreviewCardProps {
  icon: LucideIcon;
  title: string;
  text: string;
  accent?: "primary" | "indigo" | "rose";
}

export function PlatformPreviewCard({ icon: Icon, title, text, accent = "primary" }: PlatformPreviewCardProps) {
  return (
    <Card className="group h-full transition duration-300 hover:-translate-y-1 hover:border-primary/40">
      <div className={cn("mb-5 grid h-12 w-12 place-items-center rounded-2xl bg-primary/10 text-primary", accent === "indigo" && "bg-indigo/10 text-indigo", accent === "rose" && "bg-rose/10 text-rose")}>
        <Icon aria-hidden="true" />
      </div>
      <h3 className="text-2xl font-semibold">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-[hsl(var(--secondary))]">{text}</p>
    </Card>
  );
}
