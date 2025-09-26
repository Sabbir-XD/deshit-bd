"use client";
import { usePathname } from "next/navigation";
import Navbar from "../Navbar";
import Image from "next/image";

export default function BackgroundForContact() {
  const pathname = usePathname();

  // Page Name বানানো
  const pageName =
    pathname === "/"
      ? "Home"
      : pathname
          .split("/")
          .filter(Boolean)
          .map(
            (word) =>
              word.charAt(0).toUpperCase() + word.slice(1).replace(/-/g, " ")
          )
          .join(" / ");

  // Subtitle dynamic
  const getSubtitle = () => {
    if (pathname === "/") return "Welcome to our culinary paradise";
    if (pathname.includes("menu")) return "Explore our delicious offerings";
    if (pathname.includes("about")) return "Our story and passion for food";
    if (pathname.includes("contact")) return "Why I say old chap that is spiffing, young delinquent in my flat bloke buggered what a plonker.";
    return "Fill out the form below to add a new delicious item to our menu";
  };

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-gray-100 to-gray-50">
      {/* Background Section */}
      <div className="relative pt-5 px-4 sm:px-6 lg:px-12 background">
        {/* Overlay */}
        <div className="absolute inset-0 mix-blend-multiply z-0"></div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto">
          <Navbar />

          <div className="flex flex-col-reverse lg:flex-row items-center justify-between px-5 lg-px-12">
            {/* Text Section */}
            <div className="text-center lg:text-left lg:w-1/2">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#353F66]">
                Get in touch with Us
              </h1>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-[#353F66] mt-4 sm:mt-5">
                {getSubtitle()}
              </p>
            </div>

            {/* Image Section */}
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
              <Image
                src="https://i.ibb.co/ym3Pr26H/image-13.png"
                alt="Contact Illustration"
                width={540}
                height={350}
                className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
