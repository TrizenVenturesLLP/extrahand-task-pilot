import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import BenefitsSection from "@/components/BenefitsSection";
import TargetUsersSection from "@/components/TargetUsersSection";
import TrustSafetySection from "@/components/TrustSafetySection";
import FinalCTASection from "@/components/FinalCTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <div id="how-it-works">
          <HowItWorksSection />
        </div>
        <div id="benefits">
          <BenefitsSection />
        </div>
        <div id="businesses" className="px-4 sm:px-6 lg:px-12 py-16 lg:py-20 rounded-3xl bg-[#fef9f2] mx-2 sm:mx-4 lg:mx-6">
          <TargetUsersSection />
        </div>
        <div id="safety">
          <TrustSafetySection />
        </div>
        {/* <FinalCTASection /> */}
      </main>
      <Footer />
    </div>
  );
};

export default Index;
