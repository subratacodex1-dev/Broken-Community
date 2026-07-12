<<<<<<< HEAD
import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export function Card({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
=======
import { cn } from "@/lib/utils";

export function Card({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
>>>>>>> efe86ce617b4656305b9130a3aaf0bc52436adba
  return <div className={cn("rounded-3xl border border-primary/15 bg-card/85 p-6 shadow-2xl shadow-black/10 backdrop-blur", className)} {...props} />;
}
