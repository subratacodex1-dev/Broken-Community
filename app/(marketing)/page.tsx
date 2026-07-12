import Link from "next/link";
import { Brain, HeartHandshake, Play, ShieldCheck, Sparkles, UsersRound } from "lucide-react";
import { AnimatedSection } from "@/components/landing/animated-section";
import { FeatureCard } from "@/components/landing/feature-card";
import { Container } from "@/components/layout/container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { features, stats, testimonials } from "@/constants/landing";

export default function Home() {
  return (
    <main>
      <section className="relative overflow-hidden py-24 sm:py-32">
        <Container className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div><Badge>Private by design • Human by default</Badge><h1 className="mt-6 text-5xl font-semibold tracking-[-0.06em] sm:text-7xl lg:text-8xl">A calmer social platform for communities that help people belong.</h1><p className="mt-6 max-w-2xl text-lg leading-8 text-[hsl(var(--secondary))]">Broken Community brings together video, discussions, creator discovery, real-time support, and responsible AI with safety and trust at the center.</p><div className="mt-9 flex flex-wrap gap-4"><Button asChild size="lg"><Link href="/auth/register">Start safely</Link></Button><Button asChild variant="outline" size="lg"><Link href="#mission">Explore mission</Link></Button></div></div>
          <Card className="relative min-h-[420px] overflow-hidden"><div className="absolute inset-6 rounded-[2rem] border border-primary/20 bg-background/60" /><div className="relative grid gap-4"><Card className="ml-auto max-w-xs"><UsersRound className="mb-4 text-primary" /><strong>Community signal</strong><p className="mt-2 text-sm text-[hsl(var(--secondary))]">Support circle matched by interest, safety needs, and lived experience.</p></Card><Card className="max-w-sm"><Brain className="mb-4 text-indigo" /><strong>Responsible AI companion</strong><p className="mt-2 text-sm text-[hsl(var(--secondary))]">Summaries, prompts, and wellness-aware assistance without replacing people.</p></Card><Card className="ml-10 max-w-xs"><ShieldCheck className="mb-4 text-rose" /><strong>Trust layer active</strong><p className="mt-2 text-sm text-[hsl(var(--secondary))]">2FA, trusted devices, login history, and verification-ready identity.</p></Card></div></Card>
        </Container>
      </section>

      <AnimatedSection id="mission" className="py-20"><Container><div className="grid gap-8 lg:grid-cols-3"><Card className="lg:col-span-2"><Badge>Mission</Badge><h2 className="mt-5 text-4xl font-semibold tracking-tight">Help people safely connect, learn, create, share knowledge, support one another, and build lasting relationships.</h2></Card><Card><Badge>Vision</Badge><p className="mt-5 text-[hsl(var(--secondary))]">Become one of the world&apos;s most trusted community platforms through thoughtful design and responsible AI.</p></Card></div></Container></AnimatedSection>
      <AnimatedSection className="py-20"><Container><div className="grid gap-5 md:grid-cols-3">{features.map((feature) => <FeatureCard key={feature.title} {...feature} />)}</div></Container></AnimatedSection>
      <AnimatedSection id="communities" className="py-20"><Container className="grid gap-6 lg:grid-cols-3"><Card><HeartHandshake className="mb-4 text-rose" /><h2 className="text-2xl font-semibold">Community Preview</h2><p className="mt-3 text-[hsl(var(--secondary))]">Moderated circles, group rituals, shared resources, and meaningful discussion prompts.</p></Card><Card id="ai"><Sparkles className="mb-4 text-indigo" /><h2 className="text-2xl font-semibold">AI Preview</h2><p className="mt-3 text-[hsl(var(--secondary))]">AI assistance for safer onboarding, content summaries, creator prompts, and wellness-aware guidance.</p></Card><Card id="videos"><Play className="mb-4 text-primary" /><h2 className="text-2xl font-semibold">Video Platform Preview</h2><p className="mt-3 text-[hsl(var(--secondary))]">Creator channels, stories, educational series, and healthy discovery beyond viral outrage loops.</p></Card></Container></AnimatedSection>
      <AnimatedSection className="py-20"><Container><div className="grid gap-4 md:grid-cols-3">{stats.map((stat) => <Card key={stat.label} className="text-center"><strong className="text-5xl text-primary">{stat.value}</strong><p className="mt-3 text-sm text-[hsl(var(--secondary))]">{stat.label}</p></Card>)}</div></Container></AnimatedSection>
      <AnimatedSection className="py-20"><Container><div className="grid gap-5 md:grid-cols-2">{testimonials.map((item) => <Card key={item.name}><p className="text-xl leading-8">“{item.quote}”</p><p className="mt-4 text-sm text-primary">{item.name}</p></Card>)}</div></Container></AnimatedSection>
      <AnimatedSection className="py-24"><Container><Card className="text-center"><h2 className="text-4xl font-semibold tracking-tight">Ready to build the trust layer first?</h2><p className="mx-auto mt-4 max-w-2xl text-[hsl(var(--secondary))]">Create an account, verify identity, review devices, and prepare for real backend integration in the next phase.</p><Button asChild className="mt-8" size="lg"><Link href="/auth/register">Create mock account</Link></Button></Card></Container></AnimatedSection>
    </main>
  );
}
