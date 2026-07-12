import type { InputHTMLAttributes } from "react";
import { Input } from "@/components/ui/input";

type OTPInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, "type"> & {
  error?: string;
};

export function OTPInput({ error, ...props }: OTPInputProps) {
  return (
    <Input
      label="One-time passcode"
      inputMode="numeric"
      maxLength={6}
      placeholder="123456"
      autoComplete="one-time-code"
      error={error}
      {...props}
    />
  );
}
