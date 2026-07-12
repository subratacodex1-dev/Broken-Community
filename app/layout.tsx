import type { Metadata } from "next";
<<<<<<< HEAD
import type { ReactNode } from "react";
import "./globals.css";
import { ThemeProvider } from "@/providers/theme-provider";

export const metadata: Metadata = {
  title: "Broken Community | Trusted communities, safer connections",
  description: "A privacy-first social platform for meaningful communities, creators, video, support, and responsible AI assistance."
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return <html lang="en" suppressHydrationWarning><body><ThemeProvider>{children}</ThemeProvider></body></html>;
=======
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
>>>>>>> efe86ce617b4656305b9130a3aaf0bc52436adba
}
