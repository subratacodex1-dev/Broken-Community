import { Card } from "@/components/ui/card";

export function FeatureCard({ title, text }: { title: string; text: string }) {
  return <Card className="transition duration-300 hover:-translate-y-1 hover:border-primary/40"><h3 className="text-xl font-semibold">{title}</h3><p className="mt-3 text-sm leading-6 text-[hsl(var(--secondary))]">{text}</p></Card>;
}
