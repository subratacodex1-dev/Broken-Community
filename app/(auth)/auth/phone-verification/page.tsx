import { AuthForm } from "@/features/auth/components/auth-form";
import { AuthShell } from "@/features/auth/components/auth-shell";
export default function Page() { return <AuthShell title="Phone verification" description="Verify your mobile number before connecting to protected community features."><AuthForm mode="phone" /></AuthShell>; }
