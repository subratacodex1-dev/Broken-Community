import Link from "next/link";
<<<<<<< HEAD
import type { ReactNode } from "react";
import { Card } from "@/components/ui/card";
import { Logo } from "@/components/layout/logo";

interface AuthShellProps {
  title: string;
  description: string;
  children: ReactNode;
}

export function AuthShell({ title, description, children }: AuthShellProps) {
  return (
    <main className="min-h-screen px-4 py-8">
      <div className="mx-auto mb-8 max-w-6xl">
        <Logo />
      </div>
      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.85fr_1.15fr]">
        <aside className="rounded-[2rem] bg-[hsl(var(--background-alt))] p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">Secure access</p>
          <h1 className="mt-5 text-4xl font-semibold tracking-tight">{title}</h1>
          <p className="mt-4 text-[hsl(var(--secondary))]">{description}</p>
          <div className="mt-8 flex flex-wrap gap-4 text-sm">
            <Link className="text-primary" href="/">← Home</Link>
            <Link className="text-primary" href="/auth">Auth Center</Link>
          </div>
        </aside>
=======
import { Card } from "@/components/ui/card";
import { Logo } from "@/components/layout/logo";

export function AuthShell({ title, description, children }: { title: string; description: string; children: React.ReactNode }) {
  return (
    <main className="min-h-screen px-4 py-8">
      <div className="mx-auto mb-8 max-w-6xl"><Logo /></div>
      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.85fr_1.15fr]">
        <aside className="rounded-[2rem] bg-[hsl(var(--background-alt))] p-8"><p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">Secure access</p><h1 className="mt-5 text-4xl font-semibold tracking-tight">{title}</h1><p className="mt-4 text-[hsl(var(--secondary))]">{description}</p><Link className="mt-8 inline-flex text-sm text-primary" href="/">← Back to homepage</Link></aside>
>>>>>>> efe86ce617b4656305b9130a3aaf0bc52436adba
        <Card>{children}</Card>
      </div>
    </main>
  );
}
