export const authRoutes = [
  { label: "Login", href: "/auth/login", description: "Email, password, and social login entry." },
  { label: "Register", href: "/auth/register", description: "Create a new account with password strength guidance." },
  { label: "Forgot Password", href: "/auth/forgot-password", description: "Start a secure mock password recovery request." },
  { label: "Reset Password", href: "/auth/reset-password", description: "Set a new password with validation." },
  { label: "Email Verification", href: "/auth/email-verification", description: "Confirm email with a one-time code." },
  { label: "Phone Verification", href: "/auth/phone-verification", description: "Verify phone number with mock OTP." },
  { label: "OTP Verification", href: "/auth/otp", description: "Generic one-time passcode flow." },
  { label: "Two-Factor Authentication", href: "/auth/two-factor", description: "Second-factor challenge screen." },
  { label: "Session Management", href: "/auth/sessions", description: "Review active mock sessions." },
  { label: "Login History", href: "/auth/login-history", description: "Audit recent access attempts." },
  { label: "Trusted Devices", href: "/auth/trusted-devices", description: "Manage trusted mock devices." },
  { label: "Security Settings", href: "/auth/security-settings", description: "Central verification and recovery controls." }
] as const;
