import Link from "next/link";

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-3 font-bold tracking-tight" aria-label="Broken Community home">
      <span className="grid h-11 w-11 place-items-center rounded-2xl border border-primary bg-primary/10 text-sm text-primary">BC</span>
      <span>Broken Community</span>
    </Link>
  );
}
