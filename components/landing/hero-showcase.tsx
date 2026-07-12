"use client";

import { motion } from "framer-motion";
import { Brain, ShieldCheck, UsersRound } from "lucide-react";
import { Card } from "@/components/ui/card";

const cards = [
  {
    icon: UsersRound,
    title: "Community signal",
    text: "Support circles matched by interests, needs, and lived experience.",
    className: "ml-auto max-w-xs"
  },
  {
    icon: Brain,
    title: "Responsible AI",
    text: "Summaries, prompts, and wellness-aware guidance without replacing people.",
    className: "max-w-sm"
  },
  {
    icon: ShieldCheck,
    title: "Trust layer active",
    text: "2FA, trusted devices, login history, and verification-ready identity.",
    className: "ml-8 max-w-xs"
  }
];

export function HeroShowcase() {
  return (
    <Card className="relative min-h-[440px] overflow-hidden p-8">
      <div className="absolute inset-6 rounded-[2rem] border border-primary/20 bg-background/60" />
      <div className="absolute -right-16 top-10 h-40 w-40 rounded-full bg-primary/20 blur-3xl" />
      <div className="relative grid gap-4">
        {cards.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={item.title}
              className={item.className}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 * index, duration: 0.55 }}
            >
              <Card className="border-primary/20 transition duration-300 hover:-translate-y-1 hover:border-primary/50">
                <Icon className="mb-4 text-primary" aria-hidden="true" />
                <strong>{item.title}</strong>
                <p className="mt-2 text-sm leading-6 text-[hsl(var(--secondary))]">{item.text}</p>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </Card>
  );
}
