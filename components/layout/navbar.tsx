"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/layout/logo";
import { ThemeToggle } from "@/components/layout/theme-toggle";

export function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-primary/10 bg-background/75 backdrop-blur-xl">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8" aria-label="Primary navigation">
        <Logo />
        <div className="hidden items-center gap-6 lg:flex">
          {siteConfig.nav.map((item) => <Link key={item.href} className="text-sm text-[hsl(var(--secondary))] transition hover:text-primary" href={item.href}>{item.label}</Link>)}
        </div>
        <div className="hidden items-center gap-3 lg:flex">
          <ThemeToggle />
          <Button asChild variant="ghost"><Link href="/auth/login">Login</Link></Button>
          <Button asChild><Link href="/auth/register">Register</Link></Button>
        </div>
        <button className="lg:hidden" aria-label="Open menu" onClick={() => setOpen((value) => !value)}>{open ? <X /> : <Menu />}</button>
      </nav>
      {open ? (
        <div className="border-t border-primary/10 bg-background p-4 lg:hidden">
          <div className="grid gap-3">
            {siteConfig.nav.map((item) => <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>{item.label}</Link>)}
            <Link href="/auth/login">Login</Link><Link href="/auth/register">Register</Link><ThemeToggle />
          </div>
        </div>
      ) : null}
    </header>
  );
}
