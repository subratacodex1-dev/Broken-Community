import { AuthShell } from "@/features/auth/components/auth-shell";
import { SecurityDashboard } from "@/features/auth/components/security-dashboard";
export default function Page() { return <AuthShell title="Security settings" description="Central place for mock verification, recovery, 2FA, sessions, and device controls."><SecurityDashboard view="settings" /></AuthShell>; }
