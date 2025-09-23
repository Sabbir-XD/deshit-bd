"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Banner() {
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col-reverse lg:flex-row-reverse gap-10 lg:gap-20">
        {/* Banner Image with Animation */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex justify-center lg:justify-end w-full lg:w-1/2"
        >
          <Image
            src="/pic/banner.png"   // ✅ fixed
            alt="Banner"
            width={407}
            height={445}
            className="w-[250px] sm:w-[407px] md:w-[445px] lg:w-[407px] h-auto"
            priority
          />
        </motion.div>

        {/* Text Content with Animation */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="w-full lg:w-2/2 text-center lg:text-center"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold leading-tight">
            Software <br /> Development Outsourcing Services
          </h1>
          <p className="py-6 text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600">
            Expand your capabilities by hiring our expert developers. We deliver
            top-notch software outsourcing solutions tailored to your needs
            while saving your time and resources.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
