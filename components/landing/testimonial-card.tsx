import { Card } from "@/components/ui/card";

export function TestimonialCard({ quote, name }: { quote: string; name: string }) {
  return (
    <Card className="h-full">
      <p className="text-xl leading-8">“{quote}”</p>
      <p className="mt-6 text-sm font-semibold text-primary">{name}</p>
    </Card>
  );
}
