"use client";

import { motion } from "framer-motion";
<<<<<<< HEAD
import type { ReactNode } from "react";

export function AnimatedSection({ children, className, id }: { children: ReactNode; className?: string; id?: string }) {
=======

export function AnimatedSection({ children, className, id }: { children: React.ReactNode; className?: string; id?: string }) {
>>>>>>> efe86ce617b4656305b9130a3aaf0bc52436adba
  return (
    <motion.section
      id={id}
      className={className}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.65, ease: "easeOut" }}
    >
      {children}
    </motion.section>
  );
}
