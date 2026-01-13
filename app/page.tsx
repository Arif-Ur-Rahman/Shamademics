// app/page.tsx
import ConsultantCardGrid from '@/components/ConsultantCardGrid';
import { BookOpen, Globe, Users, Target } from 'lucide-react';

// Temporary sample data - replace with real data later
const sampleConsultants = [
  {
    id: '1',
    name: 'Dr. Sarah Chen',
    title: 'Professor of Computer Science',
    expertise: ['Machine Learning', 'AI Research', 'Data Science'],
    hourlyRate: 150,
    rating: 4.8,
    avatar: '/avatars/sarah.jpg',
  },
  {
    id: '2',
    name: 'Prof. James Wilson',
    title: 'Physics Department Head',
    expertise: ['Quantum Physics', 'Research Methodology', 'Academic Writing'],
    hourlyRate: 120,
    rating: 4.9,
    avatar: '/avatars/james.jpg',
  },
  {
    id: '3',
    name: 'Dr. Maria Garcia',
    title: 'Biology Research Director',
    expertise: ['Molecular Biology', 'Lab Techniques', 'Grant Writing'],
    hourlyRate: 135,
    rating: 4.7,
    avatar: '/avatars/maria.jpg',
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Global Academic Consultancy
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Connect with expert professors and researchers worldwide to guide your 
              academic journey for Masters, PhD, and study abroad opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors">
                Find a Consultant
              </button>
              <button className="px-8 py-3 border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors">
                How It Works
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Why Choose Our Platform
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Expert Guidance</h3>
              <p className="text-gray-600">Direct access to experienced professors</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Global Network</h3>
              <p className="text-gray-600">Professors from top universities worldwide</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Personalized Support</h3>
              <p className="text-gray-600">Tailored advice for your specific goals</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Result-Oriented</h3>
              <p className="text-gray-600">Proven success in admissions</p>
            </div>
          </div>
        </div>
      </section>

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
            <h2 className="text-3xl font-bold text-gray-900">
              Featured Consultants
            </h2>
            <button className="text-blue-600 font-semibold hover:text-blue-700">
              View All →
            </button>
          </div>
          <ConsultantCardGrid consultants={sampleConsultants} />
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