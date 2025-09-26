"use client";

import BackgroundForContact from "@/components/layout/BackgroundForContact";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { FaPhone, FaEnvelope, FaPaperPlane } from "react-icons/fa";

export default function ContactPage() {
  return (
    <section>
      <BackgroundForContact />
      <div className="py-12 sm:py-16 px-4 sm:px-6 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left Column - Company Details (4 columns) */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="lg:col-span-5"
            >
              <div className="">
                <h2 className="text-[20px] font-bold text-[#020F40] mb-4">
                  Our Location
                </h2>

                {/* Address */}
                <motion.div whileHover={{ x: 5 }} className=" mb-6">
                  <div>
                    <p className="text-[25px] text-[#717171]">
                      D/36, Block-E Lalmatiya, Dhaka <br />
                      Dhaka 1207, Bangladesh
                    </p>
                  </div>
                </motion.div>

                {/* Phone */}
                <motion.div whileHover={{ x: 5 }} className=" mb-6">
                  <div>
                    <h3 className="text-[20px] font-semibold text-[#020F40] mb-1">
                      Say Hello
                    </h3>
                    <p className="flex items-center gap-3 text-[#F86011]">
                      {" "}
                      <FaPhone className="text-[#F86011] text-sm" /> +880 181
                      332 0587
                    </p>
                  </div>
                </motion.div>

                {/* Email */}
                <motion.div whileHover={{ x: 5 }}>
                  <div>
                    <h3 className="font-semibold text-gray-700 mb-1">Email</h3>
                    <p className="flex items-center gap-3 text-gray-600">
                      <FaEnvelope className="text-[#D0D0D0] text-md" />{" "}
                      info@deshit-bd.com
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Right Column - Contact Form (6 columns) */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="lg:col-span-7"
            >
              <div className="">
                <form className="space-y-6">
                  {/* Name & Email Row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <motion.input
                        whileFocus={{ scale: 1.02 }}
                        type="text"
                        className="w-full px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:border-[#F86011] transition-colors"
                        placeholder="Your Name"
                      />
                    </div>
                    <div>
                      <motion.input
                        whileFocus={{ scale: 1.02 }}
                        type="email"
                        className="w-full px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:border-[#F86011] transition-colors"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <motion.input
                      whileFocus={{ scale: 1.02 }}
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:border-[#F86011] transition-colors"
                      placeholder="Subject of your message"
                    />
                  </div>

                  {/* Your Comment */}
                  <div>
                    <motion.textarea
                      whileFocus={{ scale: 1.02 }}
                      rows={5}
                      className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:border-[#F86011] transition-colors resize-none"
                      placeholder="Type your message here..."
                    />
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    type="submit"
                    className="bg-gradient-to-r from-[#FA8370] to-[#FA8370] text-white font-semibold py-3 px-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <FaPaperPlane className="text-white" />
                    Save Your Message
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
}
