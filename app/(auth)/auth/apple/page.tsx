import { SocialLoginButton } from "@/features/auth/components/social-login-button";
import { AuthShell } from "@/features/auth/components/auth-shell";
<<<<<<< HEAD

export default function AppleLoginPage() {
  return (
    <AuthShell title="Apple login" description="Provider-specific mock OAuth entry screen prepared for future backend exchange.">
      <SocialLoginButton provider="apple" />
      <p className="mt-4 text-sm text-[hsl(var(--secondary))]">Mock mode: no provider redirect is performed yet.</p>
    </AuthShell>
  );
}
=======
export default function Page() { return <AuthShell title="Apple login" description="Provider-specific mock OAuth entry screen prepared for future backend exchange."><SocialLoginButton provider="apple" /><p className="mt-4 text-sm text-[hsl(var(--secondary))]">Mock mode: no provider redirect is performed yet.</p></AuthShell>; }
>>>>>>> efe86ce617b4656305b9130a3aaf0bc52436adba
