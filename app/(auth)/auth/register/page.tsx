import { AuthForm } from "@/features/auth/components/auth-form";
import { AuthShell } from "@/features/auth/components/auth-shell";
export default function Page() { return <AuthShell title="Create your account" description="Start with realistic mock registration that is ready to connect to a backend later."><AuthForm mode="register" /></AuthShell>; }
