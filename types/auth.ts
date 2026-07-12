export type AuthProvider = "email" | "phone" | "google" | "apple" | "github";

export interface MockUser {
  id: string;
  name: string;
  email: string;
  phone: string;
  avatarFallback: string;
  trustedDevices: number;
  twoFactorEnabled: boolean;
}

export interface LoginHistoryItem {
  id: string;
  device: string;
  location: string;
  method: AuthProvider | "email-2fa";
  time: string;
  status: "trusted" | "verified" | "reviewed";
}
