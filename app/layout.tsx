import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Broken Community | Trusted communities, safer connections",
  description:
    "A privacy-first social platform for meaningful communities, creators, video, support, and responsible AI assistance.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
