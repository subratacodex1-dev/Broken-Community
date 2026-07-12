import { AuthForm } from "@/features/auth/components/auth-form";
import { AuthShell } from "@/features/auth/components/auth-shell";
export default function Page() { return <AuthShell title="Email verification" description="Confirm email ownership with a one-time verification code."><AuthForm mode="email" /></AuthShell>; }
