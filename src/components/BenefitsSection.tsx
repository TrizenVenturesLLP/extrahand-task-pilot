import { Clock, Shield, Zap, MapPin, TrendingUp, CheckCircle } from "lucide-react";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: Clock,
      title: "Save Time & Costs",
      description: "No more expensive trips or wasted time. Get things done without leaving your location.",
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      icon: Shield,
      title: "Trustworthy & Verified",
      description: "All task performers are background-checked and verified with real reviews from users.",
      color: "text-success-green",
      bgColor: "bg-success-green/10",
    },
    {
      icon: Zap,
      title: "Tech & Non-Tech Tasks",
      description: "From router setup to grocery pickup, our network handles any type of task you need.",
      color: "text-secondary",
      bgColor: "bg-secondary/10",
    },
    {
      icon: MapPin,
      title: "GPS-Based Matching",
      description: "Smart location-based matching ensures you get the fastest and most reliable service.",
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      icon: TrendingUp,
      title: "Dual-Role Platform",
      description: "Post tasks when you need help, or earn money by completing tasks in your area.",
      color: "text-success-green",
      bgColor: "bg-success-green/10",
    },
  ];

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-secondary mb-4">
            Why Choose <span className="text-primary">Extrahand</span>?
          </h2>
          <p className="text-xl text-text-light max-w-3xl mx-auto">
            We've built the most reliable platform for remote task delegation, 
            designed with trust, efficiency, and user experience at its core.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-6 shadow-card hover:shadow-warm transition-all duration-300 group hover:-translate-y-2"
            >
              <div className={`${benefit.bgColor} w-14 h-14 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <benefit.icon className={`w-7 h-7 ${benefit.color}`} />
              </div>
              
              <h3 className="text-xl font-bold text-secondary mb-3 group-hover:text-primary transition-colors duration-300">
                {benefit.title}
              </h3>
              
              <p className="text-text-light leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
          
          {/* Special highlight card */}
          <div className="md:col-span-2 lg:col-span-1 bg-gradient-hero rounded-xl p-6 text-white shadow-warm">
            <div className="bg-white/20 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
              <Shield className="w-7 h-7 text-white" />
            </div>
            
            <h3 className="text-xl font-bold mb-3">
              100% Secure Payments
            </h3>
            
            <p className="text-white/90 leading-relaxed mb-4">
              Money is held securely until task completion. Both parties are protected with our escrow system.
            </p>
            
            <div className="flex items-center gap-2 text-sm font-medium">
              <CheckCircle className="w-4 h-4" />
              Guaranteed protection
            </div>
          </div>
        </div>

        {/* Stats section */}
        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { number: "10k+", label: "Tasks Completed" },
            { number: "5k+", label: "Trusted Performers" },
            { number: "50+", label: "Cities Covered" },
            { number: "4.9/5", label: "Average Rating" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">
                {stat.number}
              </div>
              <div className="text-text-light font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;