import { Input } from "@/components/ui/input";

export function OTPInput({ error }: { error?: string }) {
  return <Input label="One-time passcode" name="otp" inputMode="numeric" maxLength={6} placeholder="123456" error={error} />;
}
