// components/Hero.tsx
export default function Hero() {
  return (
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
  );
}