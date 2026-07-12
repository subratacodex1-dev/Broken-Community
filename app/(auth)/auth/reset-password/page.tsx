import { AuthForm } from "@/features/auth/components/auth-form";
import { AuthShell } from "@/features/auth/components/auth-shell";
export default function Page() { return <AuthShell title="Reset password" description="Set a stronger password with validation and strength guidance."><AuthForm mode="reset" /></AuthShell>; }
