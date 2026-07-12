import Link from "next/link";
import { AuthShell } from "@/features/auth/components/auth-shell";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { authRoutes } from "@/constants/auth";

export default function AuthIndexPage() {
  return (
    <AuthShell
      title="Authentication center"
      description="Explore every mock authentication, verification, session, and device-management surface before backend integration."
    >
      <div className="grid gap-4 sm:grid-cols-2">
        {authRoutes.map((route) => (
          <Link key={route.href} href={route.href} className="group block focus-visible:rounded-3xl">
            <Card className="h-full transition duration-300 group-hover:-translate-y-1 group-hover:border-primary/45">
              <Badge>{route.label}</Badge>
              <p className="mt-4 text-sm leading-6 text-[hsl(var(--secondary))]">{route.description}</p>
            </Card>
          </Link>
        ))}
      </div>
    </AuthShell>
  );
}
