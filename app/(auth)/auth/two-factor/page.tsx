import { AuthForm } from "@/features/auth/components/auth-form";
import { AuthShell } from "@/features/auth/components/auth-shell";
export default function Page() { return <AuthShell title="Two-factor authentication" description="Add a second factor before allowing high-trust account actions."><AuthForm mode="two-factor" /></AuthShell>; }
