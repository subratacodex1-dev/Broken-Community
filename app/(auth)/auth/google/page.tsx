import { SocialLoginButton } from "@/features/auth/components/social-login-button";
import { AuthShell } from "@/features/auth/components/auth-shell";
export default function Page() { return <AuthShell title="Google login" description="Provider-specific mock OAuth entry screen prepared for future backend exchange."><SocialLoginButton provider="google" /><p className="mt-4 text-sm text-[hsl(var(--secondary))]">Mock mode: no provider redirect is performed yet.</p></AuthShell>; }
