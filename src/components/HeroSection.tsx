import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-subtle">
      <div className="w-full max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center lg:items-start justify-between gap-0 relative z-10">
        {/* Text */}
        <div className="w-full lg:w-7/12 pt-16 pb-12 flex flex-col justify-center items-start lg:pl-12">
          <h1
            className="text-4xl lg:text-6xl font-extrabold text-foreground leading-tight mb-3"
            style={{ fontFamily: 'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif', letterSpacing: '-0.03em' }}
          >
            Get your tasks done
            <span className="text-primary block">wherever you are</span>
          </h1>
          <p className="text-xl text-text-light max-w-xl leading-relaxed mb-8">
            Post any task, anywhere. Trusted locals will handle it for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-4">
            <Button variant="hero" size="lg" className="text-lg px-8 py-4 font-bold shadow-lg">
              Get Started
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-4 font-bold border-2 border-primary text-primary hover:bg-primary/10">
              <Play className="w-5 h-5 mr-2" />
              Watch Demo
            </Button>
          </div>
        </div>
        {/* Image */}
        <div className="w-full lg:w-5/12 mt-12 lg:mt-0 flex justify-center items-center">
          <div className="relative animate-slide-up w-full max-w-lg" style={{ minHeight: 340 }}>
            <div className="relative w-full h-full flex justify-center items-center">
              {/* Phone mockup background */}
              <div className="bg-gradient-trust rounded-3xl p-8 shadow-trust w-full max-w-lg">
                <div className="bg-white rounded-2xl p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <img
                        src="/lovable-uploads/83b553c5-31a3-40ab-a031-6070c5e52e2b.png"
                        alt="Extrahand Logo"
                        className="w-8 h-8 rounded-lg"
                      />
                      <span className="font-semibold text-secondary">Extrahand</span>
                    </div>
                    <div className="w-3 h-3 bg-success-green rounded-full animate-bounce-gentle"></div>
                  </div>
                  <div className="space-y-3">
                    <div className="bg-light-gray rounded-lg p-3">
                      <p className="text-sm font-medium">New Task Posted</p>
                      <p className="text-xs text-text-light">Pick up forgotten laptop from office</p>
                    </div>
                    <div className="bg-primary/10 rounded-lg p-3">
                      <p className="text-sm font-medium">Match Found!</p>
                      <p className="text-xs text-text-light">Sarah is 2.3km away</p>
                    </div>
                    <div className="bg-success-green/10 rounded-lg p-3">
                      <p className="text-sm font-medium">Task Complete</p>
                      <p className="text-xs text-text-light">Photo proof uploaded</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 bg-primary rounded-full p-3 shadow-warm animate-bounce-gentle">
                <ArrowRight className="w-4 h-4 text-white" />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-success-green rounded-full p-3 shadow-lg animate-bounce-gentle" style={{ animationDelay: '1s' }}>
                <Play className="w-4 h-4 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;