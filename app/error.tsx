"use client";
import { Button } from "@/components/ui/button";
export default function Error({ reset }: { error: Error; reset: () => void }) { return <main className="grid min-h-screen place-items-center p-6 text-center"><div><h1 className="text-3xl font-semibold">Something cracked.</h1><p className="mt-3 text-[hsl(var(--secondary))]">The page could not load safely.</p><Button className="mt-6" onClick={reset}>Try again</Button></div></main>; }
