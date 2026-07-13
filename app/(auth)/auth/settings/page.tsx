import { AuthShell } from "@/features/auth/components/auth-shell";
import { UserSettingsDashboard } from "@/features/auth/components/user-settings-dashboard";

export default function Page() {
  return <AuthShell title="User settings" description="Personalize display, language, accessibility, security, connected devices, and notifications."><UserSettingsDashboard /></AuthShell>;
}
