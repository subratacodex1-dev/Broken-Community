import { AuthForm } from "@/features/auth/components/auth-form";
import { AuthShell } from "@/features/auth/components/auth-shell";
export default function Page() { return <AuthShell title="Recover password" description="Request a secure recovery flow using mock API responses."><AuthForm mode="forgot" /></AuthShell>; }
