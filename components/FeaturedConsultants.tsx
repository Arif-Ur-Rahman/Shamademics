// components/FeaturedConsultants.tsx
import ConsultantCardGrid from '@/components/ConsultantCardGrid';
import { Consultant } from '@/lib/types/consultant';
// import { Consultant } from '@/types/consultant';

interface FeaturedConsultantsProps {
  consultants: Consultant[];
  title?: string;
  description?: string;
  buttonText?: string;
  buttonLink?: string;
}

const FeaturedConsultants = ({
  consultants,
  title = "Featured Consultants",
  description = "Top-rated professors and researchers ready to guide you",
  buttonText = "View All →",
  buttonLink = "/consultants"
}: FeaturedConsultantsProps) => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-10">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">
              {title}
            </h2>
            <p className="text-gray-600 mt-2">
              {description}
            </p>
          </div>
          <a 
            href={buttonLink}
            className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors flex items-center"
          >
            {buttonText}
          </a>
        </div>
        <ConsultantCardGrid consultants={consultants} />
      </div>
    </section>
  );
};

export default FeaturedConsultants;