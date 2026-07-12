import { AuthShell } from "@/features/auth/components/auth-shell";
import { SecurityDashboard } from "@/features/auth/components/security-dashboard";
export default function Page() { return <AuthShell title="Login history" description="Audit recent account access with realistic mock history."><SecurityDashboard view="history" /></AuthShell>; }
