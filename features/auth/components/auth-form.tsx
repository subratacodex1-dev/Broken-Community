"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Eye, EyeOff } from "lucide-react";
import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { LoadingSpinner } from "@/components/ui/spinner";
import { mockAuthRequest } from "@/features/auth/data/mock-auth";
import { PasswordStrength } from "@/features/auth/components/password-strength";
import { OTPInput } from "@/features/auth/components/otp-input";
import { SocialLoginButton } from "@/features/auth/components/social-login-button";

const baseSchema = z.object({
  name: z.string().optional(),
  email: z.string().optional(),
  phone: z.string().optional(),
  password: z.string().optional(),
  otp: z.string().optional()
});

type AuthValues = z.infer<typeof baseSchema>;
type AuthMode = "login" | "register" | "forgot" | "reset" | "email" | "phone" | "otp" | "two-factor";

function buildSchema(mode: AuthMode) {
  return baseSchema.superRefine((value, context) => {
    if (mode === "register" && (!value.name || value.name.length < 2)) context.addIssue({ code: "custom", path: ["name"], message: "Enter your full name" });
    if (["login", "register", "forgot", "reset", "email"].includes(mode) && (!value.email || !z.string().email().safeParse(value.email).success)) context.addIssue({ code: "custom", path: ["email"], message: "Enter a valid email" });
    if (mode === "phone" && (!value.phone || value.phone.replace(/\D/g, "").length < 10)) context.addIssue({ code: "custom", path: ["phone"], message: "Enter a valid phone number" });
    if (["login", "register", "reset"].includes(mode) && (!value.password || value.password.length < 8)) context.addIssue({ code: "custom", path: ["password"], message: "Use at least 8 characters" });
    if (["otp", "two-factor", "email", "phone"].includes(mode) && (!value.otp || !/^\d{6}$/.test(value.otp))) context.addIssue({ code: "custom", path: ["otp"], message: "Enter the 6-digit code" });
  });
}

export function AuthForm({ mode }: { mode: AuthMode }) {
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState<string>();
  const [isPending, startTransition] = useTransition();
  const { register, handleSubmit, watch, formState: { errors } } = useForm<AuthValues>({ resolver: zodResolver(buildSchema(mode)), defaultValues: { email: "maya@broken.community", phone: "+14155550148" } });
  const needsPassword = ["login", "register", "reset"].includes(mode);
  const needsOtp = ["otp", "two-factor", "email", "phone"].includes(mode);

  function onSubmit(values: AuthValues) {
    startTransition(async () => {
      const result = await mockAuthRequest(mode);
      setMessage(`${result.message} ${values.email || values.phone || "Verification"} is ready for backend wiring.`);
    });
  }

  return (
    <form className="grid gap-5" onSubmit={handleSubmit(onSubmit)} noValidate>
      {mode === "register" ? <Input label="Full name" placeholder="Maya Robinson" error={errors.name?.message} {...register("name")} /> : null}
      {["login", "register", "forgot", "reset", "email"].includes(mode) ? <Input label="Email address" type="email" error={errors.email?.message} {...register("email")} /> : null}
      {mode === "phone" ? <Input label="Phone number" type="tel" error={errors.phone?.message} {...register("phone")} /> : null}
      {needsPassword ? (
        <div className="grid gap-2">
          <div className="relative"><Input label={mode === "reset" ? "New password" : "Password"} type={showPassword ? "text" : "password"} error={errors.password?.message} {...register("password")} /><button type="button" className="absolute right-4 top-9" aria-label="Show or hide password" onClick={() => setShowPassword((v) => !v)}>{showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}</button></div>
          {mode === "register" || mode === "reset" ? <PasswordStrength value={watch("password") ?? ""} /> : null}
        </div>
      ) : null}
<<<<<<< HEAD
      {needsOtp ? <OTPInput error={errors.otp?.message} {...register("otp")} /> : null}
=======
      {needsOtp ? <OTPInput error={errors.otp?.message} /> : null}
>>>>>>> efe86ce617b4656305b9130a3aaf0bc52436adba
      <Button disabled={isPending} type="submit">{isPending ? <LoadingSpinner /> : null}{isPending ? "Processing..." : "Continue securely"}</Button>
      {mode === "login" || mode === "register" ? <div className="grid gap-3"><SocialLoginButton provider="google" /><SocialLoginButton provider="apple" /><SocialLoginButton provider="github" /></div> : null}
      {message ? <p className="rounded-2xl border border-primary/20 bg-primary/10 p-3 text-sm text-primary" role="status">{message}</p> : null}
    </form>
  );
}
