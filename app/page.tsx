// app/page.tsx
import ConsultantCardGrid from '@/components/ConsultantCardGrid';
import Hero from '@/components/layout/Hero';
import { BookOpen, Globe, Users, Target } from 'lucide-react';
import { getFeaturedConsultants } from '@/lib/data/consultants'; 
import FeaturesSection from '@/components/FeaturesSection';

export default function HomePage() {
  const featuredConsultants = getFeaturedConsultants(6);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero />

      {/* Features Section */}
      <FeaturesSection />

      {/* How It Works */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            How It Works
          </h2>
          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              { number: '01', title: 'Sign Up', desc: 'Create your free account' },
              { number: '02', title: 'Browse', desc: 'Find suitable consultants' },
              { number: '03', title: 'Book', desc: 'Schedule your session' },
              { number: '04', title: 'Connect', desc: 'Get expert guidance' },
            ].map((step, index) => (
              <div key={index} className="text-center relative">
                <div className="w-16 h-16 bg-blue-600 text-white text-2xl font-bold rounded-full flex items-center justify-center mx-auto mb-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.desc}</p>
                {index < 3 && (
                  <div className="hidden md:block absolute top-8 left-3/4 w-full h-0.5 bg-blue-200"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Consultant Preview */}
      <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-10">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">
              Featured Consultants
            </h2>
            <p className="text-gray-600 mt-2">
              Top-rated professors and researchers ready to guide you
            </p>
          </div>
          <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors flex items-center">
            View All →
          </button>
        </div>
        <ConsultantCardGrid consultants={featuredConsultants} />
      </div>
    </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Start Your Academic Journey Today
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join hundreds of successful students who achieved their study abroad dreams 
            with our expert guidance.
          </p>
          <button className="px-10 py-4 bg-white text-blue-600 font-bold rounded-lg hover:bg-blue-50 transition-colors text-lg">
            Get Started for Free
          </button>
        </div>
      </section>
    </div>
  );
}