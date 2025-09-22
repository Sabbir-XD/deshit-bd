"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const companies = [
  { src: "https://i.ibb.co/fhrw7Hy/Undp.png", alt: "UNDP" },
  { src: "https://i.ibb.co/3m9LfC5K/Itc.png", alt: "ITC" },
  { src: "https://i.ibb.co/Q7k69QCN/Grammen-Phone.png", alt: "Grameen Phone" },
  { src: "https://i.ibb.co/Z1VtkVbB/Nokia.png", alt: "Nokia" },
  { src: "https://i.ibb.co/k2nvJGwn/Vivo.png", alt: "Vivo" },
];

export default function TrustedCompanies() {
  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-xl sm:text-2xl md:text-3xl font-bold mb-8 sm:mb-10"
      >
        Trusted By 100+ Companies including
      </motion.h2>

      {/* Logos */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 sm:gap-8 items-center justify-center">
        {companies.map((company, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <Image
              src={company.src}
              alt={company.alt}
              width={120}
              height={60}
              className="object-contain max-w-[100px] sm:max-w-[120px] hover:scale-105 transition-transform duration-300"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
