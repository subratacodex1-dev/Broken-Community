import { AuthForm } from "@/features/auth/components/auth-form";
import { AuthShell } from "@/features/auth/components/auth-shell";
export default function Page() { return <AuthShell title="Phone login" description="Phone-first authentication surface using mock OTP preparation."><AuthForm mode="phone" /></AuthShell>; }
