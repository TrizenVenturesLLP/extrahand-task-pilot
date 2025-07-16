import { ArrowRight, Download, Users, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const FinalCTASection = () => {
  return (
    <section className="py-20 bg-gradient-hero text-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-light to-primary-dark"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl transform translate-x-32 -translate-y-32"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-white/10 rounded-full blur-3xl transform -translate-x-24 translate-y-24"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main heading */}
          <div className="mb-8">
            <h2 className="text-4xl lg:text-6xl font-bold mb-4 leading-tight">
              Start Delegating <br />
              <span className="text-white/90">Smarter Today</span>
            </h2>
            <p className="text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Join thousands of users who save time, money, and stress by delegating tasks 
              to trusted locals. Your first task is just minutes away.
            </p>
          </div>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <Button 
              variant="secondary" 
              size="lg" 
              className="text-lg px-8 py-4 bg-white text-primary hover:bg-white/90 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              <Users className="w-5 h-5" />
              Post Your First Task
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-primary transition-all duration-300"
            >
              <Download className="w-5 h-5" />
              Download App
            </Button>
            <Button 
              variant="ghost" 
              size="lg" 
              className="text-lg px-8 py-4 text-white hover:bg-white/20 transition-all duration-300"
            >
              Become a Tasker
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8" />
              </div>
              <div className="text-2xl font-bold mb-2">2 Minutes</div>
              <div className="text-white/80">To post your first task</div>
            </div>
            <div className="text-center">
              <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8" />
              </div>
              <div className="text-2xl font-bold mb-2">10,000+</div>
              <div className="text-white/80">Trusted task performers</div>
            </div>
            <div className="text-center">
              <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8" />
              </div>
              <div className="text-2xl font-bold mb-2">99.8%</div>
              <div className="text-white/80">Task completion rate</div>
            </div>
          </div>

          {/* Email signup for waitlist */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Get Early Access</h3>
            <p className="text-white/80 mb-6">
              Be the first to know when we launch in your area. Join our waitlist for exclusive early access.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent"
              />
              <Button className="bg-white text-primary hover:bg-white/90 px-6 py-3 font-semibold">
                Join Waitlist
              </Button>
            </div>
            <p className="text-xs text-white/60 mt-3">
              No spam, unsubscribe anytime. We respect your privacy.
            </p>
          </div>

          {/* Additional incentives */}
          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <CheckCircle className="w-4 h-4" />
              Limited Time Offer
            </div>
            <p className="text-white/80">
              First 1,000 users get <span className="font-bold text-white">50% off</span> their first task. No hidden fees.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;