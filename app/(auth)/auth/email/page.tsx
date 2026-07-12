import { AuthForm } from "@/features/auth/components/auth-form";
import { AuthShell } from "@/features/auth/components/auth-shell";
export default function Page() { return <AuthShell title="Email login" description="Dedicated email login surface with validation and loading states."><AuthForm mode="login" /></AuthShell>; }
