// components/layout/Hero.tsx
import Link from 'next/link';
import { ArrowRight, Star, Users, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/Button';

const stats = [
  { value: '500+', label: 'Expert Professors', icon: Users },
  { value: '50+', label: 'Top Universities', icon: BookOpen },
  { value: '4.9', label: 'Average Rating', icon: Star },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-background">
      {/* Subtle background grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.06]"
        style={{
          backgroundImage: `linear-gradient(var(--foreground) 1px, transparent 1px),
            linear-gradient(to right, var(--foreground) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Accent glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative container mx-auto px-4 max-w-7xl pt-20 pb-24">
        {/* Badge */}
        <div className="flex justify-center mb-6">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-card text-sm font-medium text-muted-foreground">
            <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
            Trusted by 2,000+ students worldwide
          </span>
        </div>

        {/* Headline */}
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-[1.1] tracking-tight mb-6">
            Your Gateway to{' '}
            <span className="relative inline-block">
              <span className="text-accent">Global Academia</span>
              <span className="absolute bottom-1 left-0 right-0 h-[3px] bg-accent/30 rounded-full" />
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            Connect with expert professors and researchers from top universities worldwide.
            Get personalized guidance for your Masters, PhD, or study abroad journey.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-16">
            <Button size="lg" asChild>
              <Link href="/consultants">
                Find a Consultant
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/how-it-works">How It Works</Link>
            </Button>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-3 gap-4 max-w-lg mx-auto">
            {stats.map(({ value, label, icon: Icon }) => (
              <div
                key={label}
                className="bg-card border border-border rounded-xl p-4 text-center"
              >
                <Icon className="w-5 h-5 text-accent mx-auto mb-1.5" />
                <div className="text-2xl font-bold text-foreground">{value}</div>
                <div className="text-xs text-muted-foreground mt-0.5">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
