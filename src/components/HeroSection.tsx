import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-subtle">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Get your tasks done
                <span className="text-primary"> wherever you are</span>
              </h1>
              <p className="text-xl text-text-light max-w-lg leading-relaxed">
                Post any task in any location and let trusted locals handle it for you. 
                From forgotten items to remote supervision, we've got you covered.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="text-lg px-8 py-4">
                Get Started
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-4">
                <Play className="w-5 h-5" />
                Watch Demo
              </Button>
            </div>
            
            {/* Trust indicators */}
            <div className="flex items-center gap-6 pt-6">
              <div className="text-sm text-text-muted">
                Trusted by <span className="font-semibold text-foreground">500+</span> users
              </div>
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full bg-primary border-2 border-white flex items-center justify-center text-xs font-bold text-primary-foreground"
                  >
                    {i}
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Hero Image/Mockup */}
          <div className="relative lg:ml-8">
            <div className="relative">
              {/* Phone mockup background */}
              <div className="bg-white rounded-2xl p-8 shadow-xl border border-border">
                <div className="bg-light-gray rounded-xl p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <img 
                        src="/lovable-uploads/83b553c5-31a3-40ab-a031-6070c5e52e2b.png" 
                        alt="Extrahand Logo" 
                        className="w-8 h-8 rounded-lg"
                      />
                      <span className="font-semibold text-foreground">Extrahand</span>
                    </div>
                    <div className="w-3 h-3 bg-success-green rounded-full"></div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="bg-white rounded-lg p-4 shadow-sm">
                      <p className="text-sm font-medium text-foreground">New Task Posted</p>
                      <p className="text-xs text-text-light">Pick up forgotten laptop from office</p>
                    </div>
                    <div className="bg-primary/10 rounded-lg p-4">
                      <p className="text-sm font-medium text-foreground">Match Found!</p>
                      <p className="text-xs text-text-light">Sarah is 2.3km away</p>
                    </div>
                    <div className="bg-success-green/10 rounded-lg p-4">
                      <p className="text-sm font-medium text-foreground">Task Complete</p>
                      <p className="text-xs text-text-light">Photo proof uploaded</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;