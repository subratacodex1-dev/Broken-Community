import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-full text-sm font-semibold transition-all duration-300 focus-visible:ring-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary px-5 py-3 text-[#14151B] shadow-glow hover:bg-[hsl(var(--primary-hover))]",
        outline: "border border-primary/40 bg-card/60 px-5 py-3 text-foreground hover:border-primary hover:bg-primary/10",
        ghost: "px-4 py-2 text-[hsl(var(--secondary))] hover:bg-card hover:text-foreground"
      },
      size: { default: "h-11", lg: "h-12 px-7 text-base", icon: "h-11 w-11 p-0" }
    },
    defaultVariants: { variant: "default", size: "default" }
  }
);

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export function Button({ className, variant, size, asChild = false, ...props }: ButtonProps) {
  const Comp = asChild ? Slot : "button";
  return <Comp className={cn(buttonVariants({ variant, size, className }))} {...props} />;
}
