// components/CTASection.tsx
interface CTASectionProps {
  title?: string;
  description?: string;
  buttonText?: string;
  buttonLink?: string;
  backgroundGradient?: string;
  backgroundColor?: string;
  textColor?: string;
  buttonColor?: string;
  buttonTextColor?: string;
  centered?: boolean;
}

const CTASection = ({
  title = "Start Your Academic Journey Today",
  description = "Join hundreds of successful students who achieved their study abroad dreams with our expert guidance.",
  buttonText = "Get Started for Free",
  buttonLink = "/signup",
  backgroundGradient = "bg-gradient-to-t from-blue-100 to-blue-800",
  backgroundColor = "",
  textColor = "text-white",
  buttonColor = "bg-white",
  buttonTextColor = "text-blue-600",
  centered = true
}: CTASectionProps) => {
  const backgroundClass = backgroundGradient || backgroundColor;

  return (
    <section className={`py-20 ${backgroundClass}`}>
      <div className={`container mx-auto px-4 ${centered ? 'text-center' : ''}`}>
        <h2 className={`text-4xl font-bold mb-6 ${textColor}`}>
          {title}
        </h2>
        <p className={`text-xl mb-8 max-w-2xl ${centered ? 'mx-auto' : ''} ${textColor === 'text-white' ? 'text-blue-100' : 'text-gray-600'}`}>
          {description}
        </p>
        <a
          href={buttonLink}
          className={`px-10 py-4 ${buttonColor} ${buttonTextColor} font-bold rounded-lg hover:opacity-90 transition-colors text-lg inline-flex items-center justify-center`}
        >
          {buttonText}
        </a>
      </div>
    </section>
  );
};

export default CTASection;