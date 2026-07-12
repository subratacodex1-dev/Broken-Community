import { AuthShell } from "@/features/auth/components/auth-shell";
import { SecurityDashboard } from "@/features/auth/components/security-dashboard";
export default function Page() { return <AuthShell title="Trusted devices" description="Manage mock trusted devices and future device fingerprints."><SecurityDashboard view="devices" /></AuthShell>; }
