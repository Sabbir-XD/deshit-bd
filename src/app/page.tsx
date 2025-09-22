import AboutStats from "./components/AboutStats";
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import ServicesCard from "./components/ServiceCards";
import ServicesSection from "./components/ServicesSection";
import TrustedCompanies from "./components/TrustedCompanies";

export default function Home() {
  return (
    <main>
      <div className="w-11/12 mx-auto">
        <Navbar />
        <Banner />
        <ServicesCard />
        <TrustedCompanies />
      </div>
      <AboutStats />
      <div className="w-11/12 mx-auto">
        <ServicesSection />
      </div>
    </main>
  );
}
