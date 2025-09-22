"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import CountUp from "react-countup";
import ellipseImage from "../../../public/pic/Ellipse.png";

export default function AboutStats() {
  return (
    <section className="bg-black text-white py-12">
      <div className="w-11/12 mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Left Side - Profile */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-items-center items-center md:items-start text-center md:text-left"
        >
          <div className="mt-4">
            {/* Profile Image */}
            <Image
              src={ellipseImage}
              alt="Profile"
              width={80}
              height={80}
              className="rounded-full"
            />
          </div>

          <div className="w-full lg:w-3/5 ml-4">
            {/* Tagline */}
            <h3 className="text-lg text-center sm:text-xl font-semibold ">
              Do not suffer novices, hire a skilled team!
            </h3>
            <p className="text-sm text-gray-400 mt-2 mb-2">
              Fuad Bin Omar, COO
            </p>

            {/* Button */}
            <motion.a
              href="#"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-[#F86011]"
            >
              <span className="bg-[#F86011] rounded-full p-0.5">📅</span> Book
              My Calendar
            </motion.a>
          </div>
        </motion.div>

        {/* Right Side - Stats */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex gap-10 sm:gap-16 text-center md:text-left"
        >
          {/* Years of Expertise */}
          <div>
            <h4 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl text-[#F86011] text-center">
              <CountUp start={0} end={16} duration={3} />
            </h4>
            <p className="text-md text-white mt-2">Years of Expertise</p>
          </div>

          {/* Projects Delivered */}
          <div>
            <h4 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl text-[#F86011] text-center">
              <CountUp start={0} end={365} duration={3} />
            </h4>
            <p className="text-md text-white mt-2">Delivered Projects</p>
          </div>

          {/* Countries Served */}
          <div>
            <h4 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl text-[#F86011] text-center">
              <CountUp start={0} end={25} duration={3} scrollSpyOnce />
            </h4>
            <p className="text-md text-white mt-2">Countries Served</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
