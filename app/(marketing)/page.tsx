import Link from "next/link";
import { Brain, HeartHandshake, Play, Sparkles } from "lucide-react";
import { AnimatedSection } from "@/components/landing/animated-section";
import { FeatureCard } from "@/components/landing/feature-card";
import { HeroShowcase } from "@/components/landing/hero-showcase";
import { PlatformPreviewCard } from "@/components/landing/platform-preview-card";
import { SectionHeading } from "@/components/landing/section-heading";
import { TestimonialCard } from "@/components/landing/testimonial-card";
import { Container } from "@/components/layout/container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { communityPreviews, features, stats, testimonials, videoPreviews } from "@/constants/landing";

export default function Home() {
  return (
    <main>
      <section className="relative overflow-hidden py-24 sm:py-32">
        <Container className="grid items-center gap-12 lg:grid-cols-[1.08fr_0.92fr]">
          <div>
            <Badge>Private by design • Human by default</Badge>
            <h1 className="mt-6 max-w-5xl text-5xl font-semibold tracking-[-0.06em] sm:text-7xl lg:text-8xl">
              A calmer social platform for communities that help people belong.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[hsl(var(--secondary))]">
              Broken Community brings together video, discussions, creator discovery, real-time support, and
              responsible AI with privacy, wellness, and trust at the center.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Button asChild size="lg"><Link href="/auth/register">Start safely</Link></Button>
              <Button asChild variant="outline" size="lg"><Link href="#mission">Explore mission</Link></Button>
            </div>
          </div>
          <HeroShowcase />
        </Container>
      </section>

      <AnimatedSection id="mission" className="py-20">
        <Container>
          <div className="grid gap-8 lg:grid-cols-3">
            <Card className="lg:col-span-2">
              <SectionHeading
                eyebrow="Mission"
                title="Help people safely connect, learn, create, share knowledge, support one another, and build lasting relationships."
              />
            </Card>
            <Card>
              <Badge>Vision</Badge>
              <p className="mt-5 text-lg leading-8 text-[hsl(var(--secondary))]">
                Become one of the world&apos;s most trusted community platforms through thoughtful design and responsible AI.
              </p>
            </Card>
          </div>
        </Container>
      </AnimatedSection>

      <AnimatedSection className="py-20">
        <Container>
          <SectionHeading
            eyebrow="Feature preview"
            title="Designed like a product ecosystem, not another noisy feed."
            description="Every surface is structured so it can later connect to real APIs without replacing the UI foundation."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {features.map((feature) => <FeatureCard key={feature.title} {...feature} />)}
          </div>
        </Container>
      </AnimatedSection>

      <AnimatedSection id="communities" className="py-20">
        <Container>
          <SectionHeading eyebrow="Community preview" title="Groups that feel guided, moderated, and alive." />
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {communityPreviews.map((community) => (
              <Card key={community.name} className="transition duration-300 hover:-translate-y-1 hover:border-primary/40">
                <h3 className="text-2xl font-semibold">{community.name}</h3>
                <p className="mt-2 text-sm font-semibold text-primary">{community.members}</p>
                <p className="mt-4 text-sm leading-6 text-[hsl(var(--secondary))]">{community.focus}</p>
              </Card>
            ))}
          </div>
        </Container>
      </AnimatedSection>

      <AnimatedSection className="py-20">
        <Container className="grid gap-6 lg:grid-cols-3">
          <PlatformPreviewCard icon={HeartHandshake} title="Wellness spaces" text="Moderated circles, group rituals, shared resources, and meaningful discussion prompts." accent="rose" />
          <PlatformPreviewCard icon={Sparkles} title="AI companion" text="AI assistance for safer onboarding, content summaries, creator prompts, and wellness-aware guidance." accent="indigo" />
          <PlatformPreviewCard icon={Brain} title="Knowledge sharing" text="Responsible AI and human expertise work together to make communities easier to navigate." />
        </Container>
      </AnimatedSection>

      <AnimatedSection id="videos" className="py-20">
        <Container>
          <SectionHeading eyebrow="Video platform preview" title="Creator video without the outrage loop." />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {videoPreviews.map((video) => (
              <Card key={video.title} className="overflow-hidden p-0">
                <div className="grid aspect-video place-items-center bg-[hsl(var(--background-alt))] text-primary">
                  <Play aria-hidden="true" />
                </div>
                <div className="p-5">
                  <h3 className="font-semibold">{video.title}</h3>
                  <p className="mt-2 text-sm text-[hsl(var(--secondary))]">{video.creator} • {video.duration}</p>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </AnimatedSection>

      <AnimatedSection className="py-20">
        <Container>
          <div className="grid gap-4 md:grid-cols-3">
            {stats.map((stat) => (
              <Card key={stat.label} className="text-center">
                <strong className="text-5xl text-primary">{stat.value}</strong>
                <p className="mt-3 text-sm text-[hsl(var(--secondary))]">{stat.label}</p>
              </Card>
            ))}
          </div>
        </Container>
      </AnimatedSection>

      <AnimatedSection className="py-20">
        <Container>
          <SectionHeading eyebrow="Testimonials" title="Dummy voices that define the intended emotional bar." />
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {testimonials.map((item) => <TestimonialCard key={item.name} {...item} />)}
          </div>
        </Container>
      </AnimatedSection>

      <AnimatedSection className="py-24">
        <Container>
          <Card className="text-center">
            <h2 className="text-4xl font-semibold tracking-tight">Ready to build the trust layer first?</h2>
            <p className="mx-auto mt-4 max-w-2xl text-[hsl(var(--secondary))]">
              Create an account, verify identity, review devices, and prepare for real backend integration in the next phase.
            </p>
            <Button asChild className="mt-8" size="lg"><Link href="/auth/register">Create mock account</Link></Button>
          </Card>
        </Container>
      </AnimatedSection>
    </main>
  );
}
