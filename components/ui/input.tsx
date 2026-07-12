<<<<<<< HEAD
import type { InputHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
=======
import { cn } from "@/lib/utils";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
>>>>>>> efe86ce617b4656305b9130a3aaf0bc52436adba
  label: string;
  error?: string;
}

export function Input({ className, label, id, error, ...props }: InputProps) {
  const inputId = id ?? props.name;
  return (
    <label className="grid gap-2 text-sm font-medium text-foreground" htmlFor={inputId}>
      <span>{label}</span>
      <input
        id={inputId}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${inputId}-error` : undefined}
        className={cn("h-12 rounded-2xl border border-primary/15 bg-background/70 px-4 text-foreground transition placeholder:text-[hsl(var(--muted))] focus:border-primary", className)}
        {...props}
      />
      {error ? <span id={`${inputId}-error`} className="text-xs text-rose">{error}</span> : null}
    </label>
  );
}
