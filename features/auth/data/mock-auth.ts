import type { AdminRole, LoginHistoryItem, MockUser } from "@/types/auth";

export const mockUser: MockUser = {
  id: "usr_maya_robinson",
  username: "maya-robinson",
  name: "Maya Robinson",
  displayName: "Maya R.",
  email: "maya@broken.community",
  phone: "+1 (415) 555-0148",
  bio: "Community strategist building calmer spaces for creators, peer support, and responsible AI experiments.",
  avatarFallback: "MR",
  profilePicture: "Gradient avatar placeholder",
  banner: "Warm abstract community banner",
  website: "https://maya.broken.community",
  socialLinks: [
    { label: "GitHub", url: "https://github.com/maya-community" },
    { label: "LinkedIn", url: "https://linkedin.com/in/maya-community" },
    { label: "Website", url: "https://maya.broken.community" }
  ],
  interests: ["Peer support", "Creator wellness", "Responsible AI", "Community safety"],
  skills: ["Moderation", "Program design", "Conflict de-escalation", "Accessibility reviews"],
  privacy: { profileVisibility: "community", showEmail: false, showPhone: false, allowSearchIndexing: false },
  notifications: { email: true, push: true, sms: false, securityAlerts: true },
  preferences: { colorMode: "system", language: "English", accessibility: ["Reduced motion", "High contrast focus"], themeColor: "Gold ember", fontSize: "medium" },
  connectedDevices: [
    { id: "dev_01", name: "MacBook Pro", location: "Seattle, WA", lastActive: "Today, 9:42 AM", trusted: true },
    { id: "dev_02", name: "iPhone 15", location: "Portland, OR", lastActive: "Yesterday, 6:15 PM", trusted: true },
    { id: "dev_03", name: "Chrome on Windows", location: "Austin, TX", lastActive: "July 10, 2026", trusted: false }
  ],
  trustedDevices: 2,
  twoFactorEnabled: true
};

export const mockLoginHistory: LoginHistoryItem[] = [
  { id: "lh_01", device: "MacBook Pro", location: "Seattle, WA", method: "github", time: "Today, 9:42 AM", status: "trusted" },
  { id: "lh_02", device: "iPhone 15", location: "Portland, OR", method: "apple", time: "Yesterday, 6:15 PM", status: "verified" },
  { id: "lh_03", device: "Chrome on Windows", location: "Austin, TX", method: "email-2fa", time: "July 10, 2026", status: "reviewed" }
];

export const adminRoles: AdminRole[] = [
  { name: "Owner", description: "Full admin panel and billing authority.", permissions: ["manage_users", "manage_roles", "view_audit_logs", "configure_security"] },
  { name: "Admin", description: "Operational access for platform configuration.", permissions: ["manage_users", "view_audit_logs", "configure_security"] },
  { name: "Moderator", description: "Community safety workflows with scoped account actions.", permissions: ["review_reports", "mute_users", "escalate_cases"] }
];

export async function mockAuthRequest(action: string) {
  await new Promise((resolve) => setTimeout(resolve, 700));
  return { ok: true, message: `${action} completed in mock mode.`, user: mockUser };
}
