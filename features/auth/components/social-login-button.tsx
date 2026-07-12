import { Apple, Chrome, Github, Mail, Phone } from "lucide-react";
import type { ComponentType } from "react";
import { Button } from "@/components/ui/button";
import type { AuthProvider } from "@/types/auth";

const icons = {
  email: Mail,
  phone: Phone,
  google: Chrome,
  apple: Apple,
  github: Github
} satisfies Record<AuthProvider, ComponentType<{ className?: string }>>;

export function SocialLoginButton({ provider }: { provider: AuthProvider }) {
  const Icon = icons[provider];
  const label = provider === "github" ? "GitHub" : provider[0].toUpperCase() + provider.slice(1);

  return (
    <Button className="w-full" variant="outline" type="button">
      <Icon className="h-4 w-4" aria-hidden="true" />
      Continue with {label}
    </Button>
  );
}
