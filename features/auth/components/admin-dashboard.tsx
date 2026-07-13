import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { adminRoles } from "@/features/auth/data/mock-auth";

export function AdminDashboard() {
  return (
    <div className="grid gap-5">
      <Card><Badge>Admin authentication</Badge><h2 className="mt-4 text-2xl font-semibold">Protected admin panel</h2><p className="mt-2 text-sm leading-6 text-[hsl(var(--secondary))]">Mock gate for elevated sessions, moderator roles, and permission checks before backend RBAC integration.</p></Card>
      <div className="grid gap-4">{adminRoles.map((role) => <Card key={role.name}><div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between"><div><h3 className="font-semibold">{role.name}</h3><p className="mt-2 text-sm text-[hsl(var(--secondary))]">{role.description}</p></div><Badge>{role.permissions.length} permissions</Badge></div><div className="mt-4 flex flex-wrap gap-2">{role.permissions.map((permission) => <Badge key={permission} className="text-[10px]">{permission}</Badge>)}</div></Card>)}</div>
    </div>
  );
}
