export type AuthProvider = "email" | "phone" | "google" | "apple" | "github";

export interface SocialLink {
  label: string;
  url: string;
}

export interface PrivacySettings {
  profileVisibility: "public" | "community" | "private";
  showEmail: boolean;
  showPhone: boolean;
  allowSearchIndexing: boolean;
}

export interface NotificationSettings {
  email: boolean;
  push: boolean;
  sms: boolean;
  securityAlerts: boolean;
}

export interface UserPreferences {
  colorMode: "dark" | "light" | "system";
  language: string;
  accessibility: string[];
  themeColor: string;
  fontSize: "small" | "medium" | "large";
}

export interface ConnectedDevice {
  id: string;
  name: string;
  location: string;
  lastActive: string;
  trusted: boolean;
}

export interface MockUser {
  id: string;
  username: string;
  name: string;
  displayName: string;
  email: string;
  phone: string;
  bio: string;
  avatarFallback: string;
  profilePicture: string;
  banner: string;
  website: string;
  socialLinks: SocialLink[];
  interests: string[];
  skills: string[];
  privacy: PrivacySettings;
  notifications: NotificationSettings;
  preferences: UserPreferences;
  connectedDevices: ConnectedDevice[];
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

export interface AdminRole {
  name: string;
  description: string;
  permissions: string[];
}
