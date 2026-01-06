import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import SkillsSection from "@/components/SkillsSection";
import PortfolioSection from "@/components/PortfolioSection";
import ClientsMarquee from "@/components/ClientsMarquee";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import AnimatedBackground from "@/components/AnimatedBackground";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-x-hidden w-full max-w-full">
      {/* Full page animated background */}
      <AnimatedBackground />
      
      <Header />
      <main className="relative z-10 overflow-x-hidden">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <PortfolioSection />
        <ClientsMarquee />
        <SkillsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
