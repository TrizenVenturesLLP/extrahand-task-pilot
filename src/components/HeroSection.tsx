import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0"></div>
      <div className="absolute top-20 right-10 w-72 h-72"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 "></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-secondary leading-tight">
                Get your work done {" "}
                <span className="text-primary">Wherever you are</span>
              </h1>
              <p className="text-xl text-text-light max-w-lg">
                Post any task in any location and let trusted locals handle it for you. 
                From forgotten items to remote supervision, we've got you covered.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="text-lg px-8 py-4">
                Get Started
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-2">
                <Play className="w-5 h-5" />
                Watch Demo
              </Button>
            </div>
            
            {/* Trust indicators */}
            <div className="flex items-center gap-6 pt-4">
              <div className="text-sm text-text-light">
                Trusted by <span className="font-semibold text-secondary">500+</span> users
              </div>
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full bg-gradient-hero border-2 border-white flex items-center justify-center text-xs font-bold text-white"
                  >
                    {i}
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Hero Image/Mockup */}
          <div className="relative lg:ml-8 animate-slide-up">
            <div className="relative">
              {/* Phone mockup background */}
              <div className="bg-gradient-trust rounded-3xl p-8 shadow-trust">
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