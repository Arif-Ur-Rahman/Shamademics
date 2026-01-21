// app/page.tsx
import Hero from '@/components/layout/Hero';
import HowItWorks from '@/components/HowItWorks';
import FeaturedConsultants from '@/components/FeaturedConsultants';
import CTASection from '@/components/CTASection'; // Import the new component
import { getFeaturedConsultants } from '@/lib/data/consultants'; 
import FeaturesSection from '@/components/FeaturesSection';

export default function HomePage() {
  const featuredConsultants = getFeaturedConsultants(6);
  return (
    <div className="min-h-screen">
      <Hero />
      <FeaturesSection />
      <HowItWorks />
      <FeaturedConsultants consultants={featuredConsultants} />
      <CTASection />
    </div>
  );
}