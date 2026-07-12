import Link from "next/link";
import { Button } from "@/components/ui/button";
export default function NotFound() { return <main className="grid min-h-screen place-items-center p-6 text-center"><div><h1 className="text-4xl font-semibold">Page not found</h1><p className="mt-3 text-[hsl(var(--secondary))]">This community path does not exist yet.</p><Button asChild className="mt-6"><Link href="/">Return home</Link></Button></div></main>; }
