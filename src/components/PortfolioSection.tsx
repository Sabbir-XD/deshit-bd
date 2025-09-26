// components/PortfolioSection.jsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const images = [
  "https://i.ibb.co/nN84PxfW/Rectangle1.png",
  "https://i.ibb.co/tTJRjQtw/Rectangle2.png",
  "https://i.ibb.co/Qv4Yx2cj/Rectangle3.png",
];

export default function PortfolioSection() {
  return (
    <section className="py-16">
      <h2 className="text-2xl lg:text-4xl font-bold text-[#141414] mb-12 text-center">
        Our Projects & Portfolio
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {images.map((img, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="justify-items-center overflow-hidden "
          >
            <Image
              src={img}
              alt={`Portfolio ${index + 1}`}
              width={357}
              height={380}
              className="object-cover rounded-lg transition-transform duration-500 hover:scale-105"
            />
          </motion.div>
        ))}
      </div>

      <div className="flex justify-center mt-12">
        <button className="bg-[#F86011] text-white text-sm lg:text-base px-6 py-1 rounded-md hover:opacity-90 transition">
          Read more case studies
        </button>
      </div>
    </section>
  );
}
