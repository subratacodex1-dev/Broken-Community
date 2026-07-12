<<<<<<< HEAD
import type { ReactNode } from "react";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";

export default function MarketingLayout({ children }: { children: ReactNode }) {
=======
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";

export default function MarketingLayout({ children }: { children: React.ReactNode }) {
>>>>>>> efe86ce617b4656305b9130a3aaf0bc52436adba
  return <><Navbar />{children}<Footer /></>;
}
