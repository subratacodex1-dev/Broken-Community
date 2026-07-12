import Link from "next/link";
import { AuthForm } from "@/features/auth/components/auth-form";
import { AuthShell } from "@/features/auth/components/auth-shell";
export default function Page() { return <AuthShell title="Welcome back" description="Use email, password, phone, or social providers to access your trusted community space."><AuthForm mode="login" /><p className="mt-5 text-sm text-[hsl(var(--secondary))]"><Link className="text-primary" href="/auth/forgot-password">Forgot password?</Link> · <Link className="text-primary" href="/auth/register">Create account</Link></p></AuthShell>; }
