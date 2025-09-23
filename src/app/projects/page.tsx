"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import BackgroundTitle from "@/components/layout/BackgroundTitle";
import Footer from "@/components/layout/Footer";

const products = [
  {
    title: "Swoop News",
    img: "https://i.ibb.co/cc9XV4PB/Group-1000002725.png",
  },
  {
    title: "Telefood",
    img: "https://i.ibb.co/v67PC1t4/Group-1000002726.jpg",
  },
  {
    title: "সহজ কুরআন শিক্ষা",
    img: "https://i.ibb.co/Ndrq8G0f/Group-1000002731.jpg",
  },
  {
    title: "Sleeptot-Baby White Noise",
    img: "https://i.ibb.co/jZv6Q7PN/Group-1000002732.jpg",
  },
  {
    title: "SBI General Secure",
    img: "https://i.ibb.co/nNvG1Cjg/Group-1000002736.png",
  },
  {
    title: "Cinebaz",
    img: "https://i.ibb.co/wN2YxBZs/Group-1000002738.jpg",
  },
  {
    title: "My Tamimi App",
    img: "https://i.ibb.co/G3GWFxjv/image-5.png",
  },
  {
    title: "Sole Retriever",
    img: "https://i.ibb.co/Z1VX5X2t/image-6.png",
  },
  {
    title: "Walliflex",
    img: "https://i.ibb.co/dszLpG5D/image-7.png",
  },
  {
    title: "Quiz Battle",
    img: "https://i.ibb.co/twfgMZ6H/image-8.png",
  },
  {
    title: "German Language App",
    img: "https://i.ibb.co/TqLDt4K3/image-9.png",
  },
  {
    title: "TeQuip",
    img: "https://i.ibb.co/bgRbVPHF/image-10.png",
  },
];

export default function Products() {
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
            <div className="absolute w-11/12 mx-auto left-1/2 -translate-x-1/2 bottom-0 translate-y-1/2">
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
