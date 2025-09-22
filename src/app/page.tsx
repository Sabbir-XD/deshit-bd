import AboutStats from "./components/AboutStats";
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import ServicesCard from "./components/ServiceCards";
import TrustedCompanies from "./components/TrustedCompanies";

export default function Home() {
  return (
    <div>
      <div className="w-11/12 mx-auto">
      <Navbar />
      <Banner />
      <ServicesCard />
      <TrustedCompanies />
      </div>
      <AboutStats />
    </div>
  );
}
