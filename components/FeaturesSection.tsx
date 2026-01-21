// components/FeaturesSection.tsx
import { BookOpen, Globe, Users, Target } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: BookOpen,
      iconBgColor: 'bg-blue-100',
      iconColor: 'text-blue-600',
      title: 'Expert Guidance',
      description: 'Direct access to experienced professors',
    },
    {
      icon: Globe,
      iconBgColor: 'bg-green-100',
      iconColor: 'text-green-600',
      title: 'Global Network',
      description: 'Professors from top universities worldwide',
    },
    {
      icon: Users,
      iconBgColor: 'bg-purple-100',
      iconColor: 'text-purple-600',
      title: 'Personalized Support',
      description: 'Tailored advice for your specific goals',
    },
    {
      icon: Target,
      iconBgColor: 'bg-orange-100',
      iconColor: 'text-orange-600',
      title: 'Result-Oriented',
      description: 'Proven success in admissions',
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Why Choose Our Platform
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div key={index} className="text-center p-6">
                <div className={`w-16 h-16 ${feature.iconBgColor} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <IconComponent className={`w-8 h-8 ${feature.iconColor}`} />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;