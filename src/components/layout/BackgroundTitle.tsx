"use client";
import { usePathname } from "next/navigation";
import { IoIosArrowForward } from "react-icons/io";
import Navbar from "../Navbar";

export default function BackgroundTitle() {
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
    if (pathname.includes("contact")) return "We'd love to hear from you";
    return "Fill out the form below to add a new delicious item to our menu";
  };

  return (
    <div className="relative md:overflow-hidden">
      {/* Background Section */}
      <div className="relative py-6 px-4 sm:px-6 lg:px-8 background">
        {/* Overlay */}
        <div className="absolute inset-0 mix-blend-multiply z-0"></div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <Navbar />
          <h1 className="text-4xl font-extrabold tracking-tight text-[#141414] sm:text-5xl lg:text-6xl drop-shadow-lg mt-5">
            {pageName}
          </h1>
          <p className="mt-4 text-md text-[#141414] max-w-3xl mx-auto drop-shadow-md">
            <span className="inline-flex items-center">
              Home <IoIosArrowForward />{" "}
              <span className="font-medium text-[#646464]">{pageName}</span>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
