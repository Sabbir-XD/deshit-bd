"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Loading() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 relative overflow-hidden">
      
      {/* Main Logo Loader */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 120, damping: 12 }}
        className="relative mb-8"
      >
        {/* Outer Rotating Ring */}
        <motion.div
          className="w-32 h-32 border-4 border-[#FA8370]/30 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        />

        {/* Inner Rotating Ring */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 border-4 border-[#F86011] rounded-full border-t-transparent"
          animate={{ rotate: -360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        />

        {/* Company Logo */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <Image
            src="/pic/logo.jpg" // 🔹 এখানে তোমার লোগো path বসাও
            alt="Company Logo"
            width={70}
            height={70}
            className="rounded-full shadow-lg border-1 p-1 border-[#FA8370]"
          />
        </motion.div>
      </motion.div>

      {/* Loading Text */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="text-center"
      >
        <motion.p
          className="text-xl font-semibold text-gray-700 mb-3"
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          Loading...
        </motion.p>

        {/* Dots Animation */}
        <div className="flex justify-center gap-1">
          {[0, 1, 2].map((index) => (
            <motion.div
              key={index}
              className="w-2 h-2 bg-[#FA8370] rounded-full"
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 0.8,
                repeat: Infinity,
                delay: index * 0.2,
              }}
            />
          ))}
        </div>
      </motion.div>

      {/* Floating Background Orbs */}
      <div className="fixed inset-0 pointer-events-none">
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-24 h-24 bg-[#FA8370]/10 rounded-full blur-xl"
            initial={{
              x: Math.random() * 400,
              y: Math.random() * 700,
              opacity: 0.4,
            }}
            animate={{
              y: [0, -40, 0],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 5 + i,
              repeat: Infinity,
              delay: i * 0.6,
            }}
          />
        ))}
      </div>
    </div>
  );
}
