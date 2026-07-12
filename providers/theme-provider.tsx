"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
<<<<<<< HEAD
import type { ReactNode } from "react";

export function ThemeProvider({ children }: { children: ReactNode }) {
=======

export function ThemeProvider({ children }: { children: React.ReactNode }) {
>>>>>>> efe86ce617b4656305b9130a3aaf0bc52436adba
  return <NextThemesProvider attribute="class" defaultTheme="dark" enableSystem={false}>{children}</NextThemesProvider>;
}
