import { AuthForm } from "@/features/auth/components/auth-form";
import { AuthShell } from "@/features/auth/components/auth-shell";
export default function Page() { return <AuthShell title="OTP verification" description="Use a six-digit passcode to complete a sensitive security action."><AuthForm mode="otp" /></AuthShell>; }
