import { AuthShell } from "@/features/auth/components/auth-shell";
import { AdminDashboard } from "@/features/auth/components/admin-dashboard";

export default function Page() {
  return <AuthShell title="Admin panel" description="Mock administrative authentication, moderator roles, and permission system controls."><AdminDashboard /></AuthShell>;
}
