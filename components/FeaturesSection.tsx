// components/FeaturesSection.tsx
import { BookOpen, Globe, Users, Target } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const features = [
  {
    icon: BookOpen,
    color: 'text-accent',
    bg: 'bg-accent/10',
    title: 'Expert Guidance',
    description:
      'Direct access to experienced professors and researchers from world-renowned institutions.',
  },
  {
    icon: Globe,
    color: 'text-forest-green',
    bg: 'bg-forest-green/10',
    title: 'Global Network',
    description:
      'Connect with professors from 50+ top universities spanning 30 countries worldwide.',
  },
  {
    icon: Users,
    color: 'text-warm-brown',
    bg: 'bg-warm-brown/10',
    title: 'Personalized Support',
    description:
      'Tailored one-on-one advice crafted specifically for your academic goals and background.',
  },
  {
    icon: Target,
    color: 'text-burgundy',
    bg: 'bg-burgundy/10',
    title: 'Result-Oriented',
    description:
      'Proven track record with 94% of our students achieving successful admissions.',
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-muted/40">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-14">
          <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-3">
            Why Choose Us
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Everything You Need to Succeed
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-base">
            We bring together the best academic minds to help you navigate your higher education journey with confidence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card
                key={index}
                className="group hover:shadow-md transition-all duration-300 hover:-translate-y-1"
              >
                <CardContent className="p-6 text-center">
                  <div
                    className={`w-14 h-14 ${feature.bg} rounded-xl flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <IconComponent className={`w-7 h-7 ${feature.color}`} />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
