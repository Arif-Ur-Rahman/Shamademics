// components/CTASection.tsx
import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/Button';

const benefits = [
  'No subscription required',
  'Book sessions on your schedule',
  'Cancel anytime',
];

interface CTASectionProps {
  title?: string;
  description?: string;
  buttonText?: string;
  buttonLink?: string;
}

const CTASection = ({
  title = 'Start Your Academic Journey Today',
  description = 'Join thousands of successful students who achieved their study abroad dreams with our expert guidance.',
  buttonText = 'Get Started for Free',
  buttonLink = '/auth/register',
}: CTASectionProps) => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="relative overflow-hidden rounded-2xl bg-primary text-primary-foreground px-8 py-14 md:py-16 text-center">
          {/* Subtle pattern */}
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
              backgroundSize: '32px 32px',
            }}
          />

          {/* Glow accents */}
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-white/5 rounded-full blur-3xl" />

          <div className="relative">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
              {title}
            </h2>
            <p className="text-primary-foreground/70 text-lg max-w-2xl mx-auto mb-8">
              {description}
            </p>

            {/* Benefits */}
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-10">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-center gap-2 text-sm text-primary-foreground/80">
                  <CheckCircle2 className="w-4 h-4 text-success dark:text-success" />
                  {benefit}
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button size="xl" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
                <Link href={buttonLink}>
                  {buttonText}
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button size="xl" variant="ghost" className="text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/10" asChild>
                <Link href="/consultants">Browse Consultants</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
