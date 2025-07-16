import { MapPin, Users, CheckCircle } from "lucide-react";

const HowItWorksSection = () => {
  const steps = [
    {
      icon: MapPin,
      title: "Post a Task",
      description: "Describe what you need done and where. Set your budget and timeline from anywhere in the world.",
      color: "bg-primary",
    },
    {
      icon: Users,
      title: "Get Matched",
      description: "Our smart algorithm connects you with verified, trusted locals who have the skills for your task.",
      color: "bg-secondary",
    },
    {
      icon: CheckCircle,
      title: "Task Complete",
      description: "Track progress in real-time and receive photo/video proof when your task is finished.",
      color: "bg-success-green",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-secondary mb-4">
            How It Works
          </h2>
          <p className="text-xl text-text-light max-w-2xl mx-auto">
            Getting your tasks done remotely has never been easier. 
            Follow these simple steps and watch the magic happen.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div key={index} className="text-center group">
              {/* Step number */}
              <div className="relative mb-6">
                <div className={`${step.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <step.icon className="w-8 h-8 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 bg-primary text-white text-sm font-bold w-6 h-6 rounded-full flex items-center justify-center">
                  {index + 1}
                </div>
                
                {/* Connecting line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-primary to-secondary opacity-30 transform -translate-x-8"></div>
                )}
              </div>

              <h3 className="text-2xl font-bold text-secondary mb-4 group-hover:text-primary transition-colors duration-300">
                {step.title}
              </h3>
              <p className="text-text-light leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Additional visual elements */}
        <div className="mt-16 bg-gradient-subtle rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-secondary mb-4">
            Ready to delegate your first task?
          </h3>
          <p className="text-text-light mb-6">
            Join thousands of users who save time and money with Extrahand
          </p>
          <div className="flex justify-center gap-4">
            <div className="bg-white rounded-lg p-4 shadow-card">
              <div className="text-2xl font-bold text-primary">2.5min</div>
              <div className="text-sm text-text-light">Average posting time</div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-card">
              <div className="text-2xl font-bold text-secondary">98%</div>
              <div className="text-sm text-text-light">Success rate</div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-card">
              <div className="text-2xl font-bold text-success-green">24/7</div>
              <div className="text-sm text-text-light">Support available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;