import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import ServicesCard from "./components/ServiceCards";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Banner />
      <ServicesCard />
    </div>
  );
}
