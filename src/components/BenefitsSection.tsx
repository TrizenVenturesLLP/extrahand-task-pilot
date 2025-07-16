import { Clock, Shield, Zap, MapPin, TrendingUp, CheckCircle } from "lucide-react";

const benefits = [
  {
    icon: Clock,
    title: "Save Time & Costs",
    description: "No more expensive trips or wasted time. Get things done without leaving your location.",
  },
  {
    icon: Shield,
    title: "Trustworthy & Verified",
    description: "All task performers are background-checked and verified with real reviews from users.",
  },
  {
    icon: Zap,
    title: "Tech & Non-Tech Tasks",
    description: "From router setup to grocery pickup, our network handles any type of task you need.",
  },
  {
    icon: MapPin,
    title: "GPS-Based Matching",
    description: "Smart location-based matching ensures you get the fastest and most reliable service.",
  },
  {
    icon: TrendingUp,
    title: "Dual-Role Platform",
    description: "Post tasks when you need help, or earn money by completing tasks in your area.",
  },
  {
    icon: CheckCircle,
    title: "High Success Rate",
    description: "Thousands of tasks completed with a 98%+ satisfaction rate.",
  },
];

const BenefitsSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-secondary mb-4">
            Why Choose <span className="text-primary">Extrahand</span>?
          </h2>
          <p className="text-xl text-text-light max-w-3xl mx-auto">
            We've built the most reliable platform for remote task delegation, designed with trust, efficiency, and user experience at its core.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {benefits.map((feature, idx) => (
            <div
              key={idx}
              className="rounded-3xl shadow-lg bg-white flex flex-col justify-between p-8 transition-all duration-200 hover:shadow-2xl .bg-white border border-gray-200"
              style={{ minHeight: 220}}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-2xl bg-[#e3e8f7] flex items-center justify-center">
                  <feature.icon className="w-8 h-8 text-[#1a237e]" />
                </div>
                <h3 className="text-2xl font-extrabold text-gray-800 leading-tight">
                  {feature.title}
                </h3>
              </div>
              <p className="text-base text-gray-600 leading-snug mt-2">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;