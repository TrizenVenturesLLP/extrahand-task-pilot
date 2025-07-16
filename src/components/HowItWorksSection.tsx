import { Button } from "@/components/ui/button";

const steps = [
  {
    image: "/assets/mobilescreens/post-task.png",
    title: "Post a Task",
    highlight: "Describe your task, location, and budget.",
    description:
      "Set your requirements and timeline from anywhere. The more details, the better your match!",
    cta: "Start your first task",
  },
  {
    image: "/assets/mobilescreens/set-budget.png",
    title: "Get Matched",
    highlight: "Connect with trusted locals.",
    description:
      "Our smart algorithm finds verified, skilled helpers nearby. Review profiles, ratings, and chat instantly.",
    cta: "See how matching works",
  },
  {
    image: "/assets/mobilescreens/approve-task.png",
    title: "Task Complete",
    highlight: "Track and confirm completion.",
    description:
      "Monitor progress in real-time and receive photo/video proof when your task is finished. Release payment securely.",
    cta: "Learn about secure completion",
  },
];

const HowItWorksSection = () => {
  return (
    <section className="py-20 bg-white relative overflow-x-hidden" id="how-it-works">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-24">
          <h2 className="text-5xl font-bold text-foreground mb-4">How It Works</h2>
          <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
            Getting your tasks done remotely has never been easier. Follow these simple steps and watch the magic happen.
          </p>
        </div>

        {/* Steps as Horizontal Row on Desktop, Vertical on Mobile */}
        <div className="flex flex-col md:flex-row items-stretch justify-between gap-12 md:gap-8">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="flex-1 flex flex-col items-center md:items-start text-center md:text-left px-2"
              style={{ minWidth: 0 }}
            >
              {/* Step Number Badge */}
              <div className="mb-4 md:mb-6">
                <span className="inline-block bg-secondary text-white font-bold rounded-full px-4 py-1 text-lg shadow-md">
                  {idx + 1}
                </span>
              </div>
              {/* Step Image - no frame, no background */}
              <div className="mb-6 flex items-center justify-center w-full">
                {/* <img
                  src={step.image}
                  alt={step.title}
                  className="object-contain w-40 h-64 md:w-48 md:h-72 transition-transform duration-500 hover:scale-105 rounded-xl shadow-lg"
                  loading="lazy"
                  style={{ background: 'none', boxShadow: '0 8px 32px 0 rgba(0,0,0,0.10)' }}
                /> */}
                <img
                  src={step.image}
                  alt={step.title}
                  style = {{width:350}}
                />
              </div>
              {/* Step Text */}
              <h3 className="text-2xl md:text-2xl font-extrabold text-foreground mb-3 leading-tight">
                {step.title}
              </h3>
              <div className="text-lg md:text-lg font-bold text-primary-dark mb-2">
                {step.highlight}
              </div>
              <p className="text-base md:text-base text-foreground mb-4 max-w-xs md:max-w-none mx-auto md:mx-0">
                {step.description}
              </p>
              {/* <Button variant="outline" size="sm" className="text-primary-dark font-semibold border-primary-dark">
                {step.cta}
              </Button> */}
            </div>
          ))}
        </div>

        {/* Centered Post your task Button */}
        <div className="flex justify-center mt-10">
          <Button
            className="text-lg px-10 py-4 font-bold rounded-full bg-white border-2 shadow-lg transition-transform duration-200 hover:scale-105 hover:shadow-2xl"
            style={{ borderColor: '#FFC107', color: '#111', boxShadow: '0 8px 32px 0 rgba(255,193,7,0.10)' }}
          >
            Post your task now
          </Button>
        </div>

        {/* CTA Card */}
        {/* <div className="mt-32 flex flex-col md:flex-row items-center justify-between gap-8 bg-gradient-to-r from-primary/90 via-secondary/90 to-success-green/90 rounded-2xl p-12 shadow-2xl relative overflow-hidden">
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 drop-shadow-lg">
              Ready to delegate your first task?
            </h3>
            <p className="text-lg text-white/90 mb-6 max-w-xl">
              Join thousands of users who save time and money with Extrahand. Experience seamless, secure, and smart task delegation today.
            </p>
            <Button variant="hero" size="lg" className="text-lg px-8 py-4 shadow-lg">
              Get Started
            </Button>
          </div> */}
          {/* Decorative Illustration (optional, can be replaced with a mockup) */}
          {/* <div className="flex-1 flex justify-center items-center mt-8 md:mt-0">
            <div className="w-56 h-56 bg-white/20 rounded-full flex items-center justify-center shadow-xl border-4 border-white/30">
              <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="60" cy="60" r="56" stroke="#FFD600" strokeWidth="8" fill="#FFF9E5" />
                <path d="M40 60L55 75L80 50" stroke="#16A34A" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default HowItWorksSection;
