// components/HowItWorks.tsx
import { UserPlus, Search, CalendarCheck, Lightbulb } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: UserPlus,
    title: 'Sign Up',
    desc: 'Create your free account in under a minute. No credit card required.',
  },
  {
    number: '02',
    icon: Search,
    title: 'Browse Experts',
    desc: 'Filter by field, university, language, and availability to find your match.',
  },
  {
    number: '03',
    icon: CalendarCheck,
    title: 'Book a Session',
    desc: 'Schedule a consultation at a time that works for your timezone.',
  },
  {
    number: '04',
    icon: Lightbulb,
    title: 'Get Guidance',
    desc: 'Receive expert advice tailored to your academic goals and ambitions.',
  },
];

const HowItWorks = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-14">
          <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-3">
            Simple Process
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">How It Works</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Getting started takes less than 5 minutes. Follow these simple steps to connect with
            your ideal academic consultant.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto relative">
          {/* Connector line (desktop) */}
          <div className="hidden md:block absolute top-10 left-[calc(12.5%+16px)] right-[calc(12.5%+16px)] h-px bg-border" />

          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div key={index} className="relative text-center group">
                {/* Step circle */}
                <div className="relative inline-flex flex-col items-center mb-5">
                  <div className="w-20 h-20 rounded-2xl bg-card border-2 border-border flex items-center justify-center mx-auto group-hover:border-accent group-hover:bg-accent/5 transition-all duration-300 shadow-sm">
                    <IconComponent className="w-8 h-8 text-accent" />
                  </div>
                  {/* Step number badge */}
                  <span className="absolute -top-2 -right-2 w-6 h-6 bg-accent text-accent-foreground text-xs font-bold rounded-full flex items-center justify-center">
                    {index + 1}
                  </span>
                </div>

                <h3 className="text-lg font-semibold text-foreground mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed px-2">{step.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
