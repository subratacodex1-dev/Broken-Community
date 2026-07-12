import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { mockLoginHistory, mockUser } from "@/features/auth/data/mock-auth";

export function SecurityDashboard({ view }: { view: "sessions" | "history" | "devices" | "settings" }) {
  return (
    <div className="grid gap-5">
      <Card><Badge>{mockUser.name}</Badge><h2 className="mt-4 text-2xl font-semibold">Security center</h2><p className="mt-2 text-[hsl(var(--secondary))]">2FA is {mockUser.twoFactorEnabled ? "enabled" : "disabled"}. {mockUser.trustedDevices} trusted devices are stored in mock data.</p></Card>
      {view === "settings" ? <Card><h3 className="font-semibold">Security settings</h3><ul className="mt-4 grid gap-3 text-sm text-[hsl(var(--secondary))]"><li>Email verification: enabled</li><li>Phone verification: pending backend</li><li>Recovery codes: mock generated</li><li>Session timeout: 30 days</li></ul></Card> : null}
      <div className="grid gap-3">{mockLoginHistory.map((item) => <Card key={item.id} className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center"><div><strong>{view === "devices" ? item.device : `${item.device} session`}</strong><p className="text-sm text-[hsl(var(--secondary))]">{item.location} · {item.method} · {item.time}</p></div><Badge>{item.status}</Badge></Card>)}</div>
    </div>
  );
}
