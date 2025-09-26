import AboutStats from "../components/AboutStats";
import Banner from "../components/Banner";
import BenefitsSection from "../components/BenefitsSection";
import Navbar from "../components/Navbar";
import ServicesCard from "../components/ServiceCards";
import ServicesSection from "../components/ServicesSection";
import TrustedCompanies from "../components/TrustedCompanies";
import Outsourced from "../components/Outsourced";
import AdvancedTech from "../components/AdvancedTech";
import PortfolioSection from "../components/PortfolioSection";
import TestimonialSlider from "../components/TestimonialSlider";

export default function Home() {
  return (
    <main>
      <div className="w-11/12 lg:max-w-7xl mx-auto">
        <Navbar />
        <Banner />
        <ServicesCard />
        <TrustedCompanies />
      </div>
      <AboutStats />
      <div className="w-11/12 lg:max-w-7xl mx-auto">
        <ServicesSection />
        <BenefitsSection />
        <Outsourced />
        <AdvancedTech />
        <PortfolioSection />
        <TestimonialSlider />
      </div>
    </main>
  );
}
