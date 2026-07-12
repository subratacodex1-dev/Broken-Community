import { AuthShell } from "@/features/auth/components/auth-shell";
import { SecurityDashboard } from "@/features/auth/components/security-dashboard";
export default function Page() { return <AuthShell title="Session management" description="Review active mock sessions before real session APIs are added."><SecurityDashboard view="sessions" /></AuthShell>; }
