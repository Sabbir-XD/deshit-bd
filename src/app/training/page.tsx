"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import BackgroundTitle from "@/components/layout/BackgroundTitle";
import Footer from "@/components/layout/Footer";

const products = [
  {
    title: "Flutter",
    img: "https://i.ibb.co/qYrQWdY8/image-14.png",
  },
  {
    title: "Mern Stack",
    img: "https://i.ibb.co/q3Pmdbwc/image-17.png",
  },
  {
    title: "PHP Laravel",
    img: "https://i.ibb.co/twN2sxq3/image-16.png",
  },
];

export default function Training() {
  return (
    <section>
      <div className="text-center mb-10">
        <BackgroundTitle />
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-10/12 mx-auto py-10">
        {products.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="relative bg-white rounded-xl hover:shadow-2xl transition-shadow duration-300 mb-10"
          >
            {/* Image wrapper with overflow-hidden */}
            <div className="w-full h-60 relative overflow-hidden rounded-t-xl">
              <Image
                src={item.img}
                alt={item.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Half inside-half outside Button style Title */}
            <div className="absolute w-11/12 lg:max-w-7xl mx-auto left-1/2 -translate-x-1/2 bottom-0 translate-y-1/2">
              <div className="bg-white  py-6 rounded-2xl shadow-lg border border-gray-200 text-center">
                <h3 className="text-sm md:text-base font-semibold text-gray-800">
                  {item.title}
                </h3>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      <Footer />
    </section>
  );
}
