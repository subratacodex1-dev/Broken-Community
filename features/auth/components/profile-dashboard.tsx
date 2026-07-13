import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { mockUser } from "@/features/auth/data/mock-auth";

function SettingRow({ label, value }: { label: string; value: string }) {
  return <div className="rounded-2xl border border-primary/10 bg-background/40 p-4"><p className="text-xs uppercase tracking-[0.2em] text-[hsl(var(--muted))]">{label}</p><p className="mt-2 font-medium">{value}</p></div>;
}

export function ProfileDashboard() {
  return (
    <div className="grid gap-5">
      <Card className="overflow-hidden p-0">
        <div className="h-32 bg-gradient-to-r from-primary/40 via-indigo/30 to-rose/30" aria-label={mockUser.banner} />
        <div className="p-6">
          <div className="-mt-16 grid h-24 w-24 place-items-center rounded-3xl border border-primary/30 bg-card text-2xl font-bold text-primary" aria-label={mockUser.profilePicture}>{mockUser.avatarFallback}</div>
          <Badge className="mt-5">@{mockUser.username}</Badge>
          <h2 className="mt-3 text-3xl font-semibold">{mockUser.displayName}</h2>
          <p className="mt-3 text-sm leading-6 text-[hsl(var(--secondary))]">{mockUser.bio}</p>
        </div>
      </Card>
      <div className="grid gap-4 md:grid-cols-2">
        <SettingRow label="Website" value={mockUser.website} />
        <SettingRow label="Email privacy" value={mockUser.privacy.showEmail ? "Visible" : "Hidden"} />
        <SettingRow label="Profile visibility" value={mockUser.privacy.profileVisibility} />
        <SettingRow label="Search indexing" value={mockUser.privacy.allowSearchIndexing ? "Allowed" : "Blocked"} />
      </div>
      <Card><h3 className="font-semibold">Social links</h3><div className="mt-4 flex flex-wrap gap-2">{mockUser.socialLinks.map((link) => <Badge key={link.label}>{link.label}</Badge>)}</div></Card>
      <Card><h3 className="font-semibold">Interests & skills</h3><div className="mt-4 flex flex-wrap gap-2">{[...mockUser.interests, ...mockUser.skills].map((item) => <Badge key={item}>{item}</Badge>)}</div></Card>
    </div>
  );
}
