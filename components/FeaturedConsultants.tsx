// components/FeaturedConsultants.tsx
import Link from 'next/link';
import ConsultantCardGrid from '@/components/ConsultantCardGrid';
import { Consultant } from '@/lib/types/consultant';
import { Button } from '@/components/ui/Button';
import { ArrowRight } from 'lucide-react';

interface FeaturedConsultantsProps {
  consultants: Consultant[];
  title?: string;
  description?: string;
  buttonText?: string;
  buttonLink?: string;
}

const FeaturedConsultants = ({
  consultants,
  title = 'Featured Consultants',
  description = 'Top-rated professors and researchers ready to guide your academic journey',
  buttonText = 'View All Consultants',
  buttonLink = '/consultants',
}: FeaturedConsultantsProps) => {
  return (
    <section className="py-20 bg-muted/40">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-2">
              Meet Our Experts
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">{title}</h2>
            <p className="text-muted-foreground mt-2 max-w-xl">{description}</p>
          </div>
          <Button variant="outline" asChild className="self-start md:self-auto flex-shrink-0">
            <Link href={buttonLink}>
              {buttonText}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>

        <ConsultantCardGrid consultants={consultants} />
      </div>
    </section>
  );
};

export default FeaturedConsultants;
