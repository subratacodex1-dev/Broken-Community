import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { mockUser } from "@/features/auth/data/mock-auth";

export function UserSettingsDashboard() {
  const { preferences, notifications } = mockUser;
  return (
    <div className="grid gap-5 sm:grid-cols-2">
      <Card><Badge>Appearance</Badge><ul className="mt-4 grid gap-3 text-sm text-[hsl(var(--secondary))]"><li>Dark mode: available</li><li>Light mode: available</li><li>Theme color: {preferences.themeColor}</li><li>Font size: {preferences.fontSize}</li></ul></Card>
      <Card><Badge>Localization</Badge><ul className="mt-4 grid gap-3 text-sm text-[hsl(var(--secondary))]"><li>Language: {preferences.language}</li><li>Accessibility: {preferences.accessibility.join(", ")}</li></ul></Card>
      <Card><Badge>Notifications</Badge><ul className="mt-4 grid gap-3 text-sm text-[hsl(var(--secondary))]"><li>Email: {notifications.email ? "on" : "off"}</li><li>Push: {notifications.push ? "on" : "off"}</li><li>SMS: {notifications.sms ? "on" : "off"}</li><li>Security alerts: {notifications.securityAlerts ? "on" : "off"}</li></ul></Card>
      <Card><Badge>Security</Badge><ul className="mt-4 grid gap-3 text-sm text-[hsl(var(--secondary))]"><li>2FA: {mockUser.twoFactorEnabled ? "enabled" : "disabled"}</li><li>Connected devices: {mockUser.connectedDevices.length}</li><li>Trusted devices: {mockUser.trustedDevices}</li></ul></Card>
    </div>
  );
}
