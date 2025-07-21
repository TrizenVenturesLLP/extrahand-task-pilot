import { Shield, Star, Lock, MessageCircle, Camera } from "lucide-react";
import React from "react";

const trustFeatures = [
  {
    icon: Shield,
    title: "Verified Performers",
    description:
      "All task performers undergo background checks and identity verification.",
  },
  {
    icon: Star,
    title: "Review System",
    description:
      "Transparent ratings and reviews from real users help you choose the right person.",
  },
  {
    icon: Lock,
    title: "Secure Payments",
    description:
      "Your money is protected with escrow payments released only after task completion.",
  },
  {
    icon: MessageCircle,
    title: "Real-time Communication",
    description:
      "Stay connected with live chat, live location sharing, and instant updates.",
  },
  {
    icon: Camera,
    title: "Proof of Work",
    description:
    "Every completed task comes with visual proof of photos or videos, shared directly in the app. This helps you verify the quality and completion of work even when you're away, ensuring full transparency, accountability, and peace of mind.",
  },
];

const TrustSafetySection = () => {
  return (
    <section className="py-16 lg:py-20 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 bg-success-green/10 text-success-green px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Shield className="w-4 h-4" />
            Trust & Safety First
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-secondary mb-4">
            Your Security is Our <span className="text-primary">Priority</span>
          </h2>
          <p className="text-base sm:text-lg text-text-light max-w-2xl mx-auto px-4">
            We've built multiple layers of protection to ensure every task is
            completed safely and securely.
          </p>
        </div>

        {/* Trust features: modern symmetric grid */}
        <div className="mb-16 lg:mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
            {trustFeatures.slice(0, 4).map((feature, idx) => (
              <div
                key={idx}
                className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6 rounded-3xl shadow-lg bg-[#f7f8fd] p-6 sm:p-8 transition-all duration-200 hover:shadow-2xl border border-gray-100 min-h-[180px]"
              >
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center bg-primary/10 text-primary shrink-0 mx-auto sm:mx-0">
                  <feature.icon className="w-6 h-6 sm:w-8 sm:h-8" />
                </div>
                <div className="text-center sm:text-left">
                  <h3 className="text-xl sm:text-2xl font-extrabold text-gray-800 leading-tight mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-snug">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          {/* 5th card full width below grid */}
          <div className="flex justify-center mt-6 lg:mt-8">
            <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6 rounded-3xl shadow-lg bg-[#f7f8fd] p-6 sm:p-8 transition-all duration-200 hover:shadow-2xl border border-gray-100 min-h-[180px] w-full max-w-2xl">
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center bg-primary/10 text-primary shrink-0 mx-auto sm:mx-0">
                {React.createElement(trustFeatures[4].icon, { className: "w-6 h-6 sm:w-8 sm:h-8" })}
              </div>
              <div className="text-center sm:text-left">
                <h3 className="text-xl sm:text-2xl font-extrabold text-gray-800 leading-tight mb-2">
                  {trustFeatures[4].title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-snug">
                  {trustFeatures[4].description}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Trust stats */}
        {/* <div className="bg-white rounded-xl shadow-lg p-10 mb-16">
          <h3 className="text-2xl font-bold text-secondary text-center mb-10">
            Security by the Numbers
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-success-green mb-1">
                99.8%
              </div>
              <p className="text-sm text-text-light">Task Success Rate</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-1">24/7</div>
              <p className="text-sm text-text-light">Support Available</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-secondary mb-1">$0</div>
              <p className="text-sm text-text-light">Fraud Losses</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-1">&lt;30s</div>
              <p className="text-sm text-text-light">Avg. Response Time</p>
            </div>
          </div>
        </div> */}

        {/* CTA */}
        <div className="text-center px-4">
          <h3 className="text-xl sm:text-2xl font-bold text-secondary mb-4">
            Ready to Experience Secure Task Delegation?
          </h3>
          <p className="text-text-light mb-6 max-w-xl mx-auto text-sm sm:text-base">
            Join thousands who trust Extrahand for their tasks. Your security
            and satisfaction are guaranteed.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto">
            <button className="bg-gradient-hero text-black px-6 py-3 rounded-lg font-semibold hover:shadow-md transition-all duration-300 w-full sm:w-auto">
              Start Your First Task
            </button>
            <button className="border-2 border-secondary text-secondary px-6 py-3 rounded-lg font-semibold hover:bg-secondary hover:text-white transition duration-300 w-full sm:w-auto">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSafetySection;