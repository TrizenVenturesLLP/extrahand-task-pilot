import { Shield, CheckCircle, MessageCircle, Camera, Star, Lock } from "lucide-react";

const TrustSafetySection = () => {
  const trustFeatures = [
    {
      icon: Shield,
      title: "Verified Performers",
      description: "All task performers undergo thorough background checks and identity verification.",
      details: ["ID verification", "Background screening", "Skill assessment"],
    },
    {
      icon: Star,
      title: "Review System",
      description: "Transparent ratings and reviews from real users help you choose the right person.",
      details: ["5-star rating system", "Detailed reviews", "Performance tracking"],
    },
    {
      icon: Lock,
      title: "Secure Payments",
      description: "Your money is protected with escrow payments released only after task completion.",
      details: ["Escrow protection", "Multiple payment methods", "Dispute resolution"],
    },
    {
      icon: MessageCircle,
      title: "Real-time Communication",
      description: "Stay connected with live chat, location tracking, and instant updates.",
      details: ["In-app messaging", "Live location sharing", "Status updates"],
    },
    {
      icon: Camera,
      title: "Proof of Work",
      description: "Receive photo and video evidence of completed tasks for your peace of mind.",
      details: ["Photo documentation", "Video proof", "Timestamped evidence"],
    },
  ];

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-success-green/10 text-success-green px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Shield className="w-4 h-4" />
            Trust & Safety First
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-secondary mb-4">
            Your Security is Our <span className="text-primary">Priority</span>
          </h2>
          <p className="text-xl text-text-light max-w-3xl mx-auto">
            We've built multiple layers of protection to ensure every task is completed 
            safely and securely, giving you complete peace of mind.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Trust features */}
          <div className="space-y-6">
            {trustFeatures.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-card hover:shadow-warm transition-all duration-300 group">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <feature.icon className="w-6 h-6 text-primary group-hover:text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-secondary mb-2 group-hover:text-primary transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-text-light mb-3">
                      {feature.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {feature.details.map((detail, idx) => (
                        <span key={idx} className="text-xs bg-light-gray px-2 py-1 rounded text-text-light">
                          {detail}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Visual trust indicators */}
          <div className="space-y-8">
            {/* Security stats */}
            <div className="bg-white rounded-xl p-8 shadow-card">
              <h3 className="text-2xl font-bold text-secondary mb-6 text-center">Security by Numbers</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-success-green mb-2">99.8%</div>
                  <div className="text-sm text-text-light">Task Success Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                  <div className="text-sm text-text-light">Support Available</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-secondary mb-2">$0</div>
                  <div className="text-sm text-text-light">Fraud Losses</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">&lt;30s</div>
                  <div className="text-sm text-text-light">Average Response</div>
                </div>
              </div>
            </div>

            {/* Trust badges */}
            <div className="bg-gradient-trust rounded-xl p-8 text-white">
              <h3 className="text-xl font-bold mb-4 text-center">Trusted & Certified</h3>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="bg-white/10 rounded-lg p-4">
                  <Shield className="w-8 h-8 mx-auto mb-2" />
                  <div className="text-xs">SSL Secured</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <CheckCircle className="w-8 h-8 mx-auto mb-2" />
                  <div className="text-xs">Verified Platform</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <Lock className="w-8 h-8 mx-auto mb-2" />
                  <div className="text-xs">Data Protected</div>
                </div>
              </div>
            </div>

            {/* Emergency contact */}
            <div className="bg-red-50 border border-red-200 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-red-500 w-10 h-10 rounded-full flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-bold text-red-700">Emergency Support</h3>
              </div>
              <p className="text-red-600 text-sm mb-3">
                Need immediate help? Our emergency line is available 24/7 for urgent issues.
              </p>
              <button className="bg-red-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-red-600 transition-colors duration-300">
                Contact Emergency Support
              </button>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center bg-white rounded-xl p-8 shadow-card">
          <h3 className="text-2xl font-bold text-secondary mb-4">
            Ready to Experience Secure Task Delegation?
          </h3>
          <p className="text-text-light mb-6 max-w-2xl mx-auto">
            Join thousands of users who trust Extrahand for their remote task needs. 
            Your security and satisfaction are guaranteed.
          </p>
          <div className="flex justify-center gap-4">
            <button className="bg-gradient-hero text-white px-6 py-3 rounded-lg font-semibold hover:shadow-warm transition-all duration-300">
              Start Your First Task
            </button>
            <button className="border-2 border-secondary text-secondary px-6 py-3 rounded-lg font-semibold hover:bg-secondary hover:text-white transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSafetySection;