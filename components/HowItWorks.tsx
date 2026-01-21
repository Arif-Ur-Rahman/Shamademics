// components/HowItWorks.tsx
const HowItWorks = () => {
  const steps = [
    { number: '01', title: 'Sign Up', desc: 'Create your free account' },
    { number: '02', title: 'Browse', desc: 'Find suitable consultants' },
    { number: '03', title: 'Book', desc: 'Schedule your session' },
    { number: '04', title: 'Connect', desc: 'Get expert guidance' },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          How It Works
        </h2>
        <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
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
  );
};

export default HowItWorks;