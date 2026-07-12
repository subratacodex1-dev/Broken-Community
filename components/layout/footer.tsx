import Link from "next/link";
import { Logo } from "@/components/layout/logo";

export function Footer() {
  return (
    <footer className="border-t border-primary/10 bg-[hsl(var(--background-alt))]">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 lg:grid-cols-[1fr_auto] lg:px-8">
        <div><Logo /><p className="mt-4 max-w-xl text-sm leading-6 text-[hsl(var(--secondary))]">Built for privacy, trust, wellness, creator discovery, and responsible AI-powered community support.</p></div>
        <div className="flex flex-wrap gap-5 text-sm text-[hsl(var(--secondary))]"><Link href="/auth">Auth Center</Link><Link href="/auth/security-settings">Security</Link><Link href="/#mission">Mission</Link><Link href="/#ai">AI</Link></div>
      </div>
    </footer>
  );
}
