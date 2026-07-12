import type { LoginHistoryItem, MockUser } from "@/types/auth";

export const mockUser: MockUser = {
  id: "usr_maya_robinson",
  name: "Maya Robinson",
  email: "maya@broken.community",
  phone: "+1 (415) 555-0148",
  avatarFallback: "MR",
  trustedDevices: 4,
  twoFactorEnabled: true
};

export const mockLoginHistory: LoginHistoryItem[] = [
  { id: "lh_01", device: "MacBook Pro", location: "Seattle, WA", method: "github", time: "Today, 9:42 AM", status: "trusted" },
  { id: "lh_02", device: "iPhone 15", location: "Portland, OR", method: "apple", time: "Yesterday, 6:15 PM", status: "verified" },
  { id: "lh_03", device: "Chrome on Windows", location: "Austin, TX", method: "email-2fa", time: "July 10, 2026", status: "reviewed" }
];

export async function mockAuthRequest(action: string) {
  await new Promise((resolve) => setTimeout(resolve, 700));
  return { ok: true, message: `${action} completed in mock mode.`, user: mockUser };
}
