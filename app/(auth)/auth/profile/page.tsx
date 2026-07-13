import { AuthShell } from "@/features/auth/components/auth-shell";
import { ProfileDashboard } from "@/features/auth/components/profile-dashboard";

export default function Page() {
  return <AuthShell title="User profile" description="Profile management for identity, bio, visuals, links, interests, skills, privacy, and notification preferences."><ProfileDashboard /></AuthShell>;
}
