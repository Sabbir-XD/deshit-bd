"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  const dotPositions = [
    { x: 50, y: 200 },
    { x: 150, y: 400 },
    { x: 300, y: 250 },
    { x: 500, y: 600 },
    { x: 700, y: 350 },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 px-4 relative overflow-hidden">
      {/* Logo */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100, damping: 15 }}
        className="mb-8"
      >
        <Image
          src="/pic/logo.jpg"
          alt="Company Logo"
          width={100}
          height={100}
          className="rounded-full shadow-lg border-4 border-white"
        />
      </motion.div>

      {/* 404 Text */}
      <motion.h1
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="text-9xl font-bold text-[#FA8370] mb-4"
      >
        404
      </motion.h1>

      {/* Message */}
      <motion.p
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="text-xl text-gray-600 mb-8 max-w-md text-center"
      >
        Oops! The page you are looking for doesn&apos;t exist.
      </motion.p>

      {/* Button */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.6, type: "spring", stiffness: 200 }}
      >
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-8 py-3 rounded-xl bg-[#F86011] text-white font-semibold shadow-lg hover:bg-[#FA8370] transition-all duration-300 hover:scale-105"
        >
          Back to Home
        </Link>
      </motion.div>

      {/* Floating dots */}
      <div className="fixed inset-0 pointer-events-none">
        {dotPositions.map((pos, i) => (
          <motion.div
            key={i}
            className="absolute w-3 h-3 bg-[#FA8370]/20 rounded-full"
            style={{ left: pos.x, top: pos.y }}
            animate={{
              y: [0, -25, 0],
            }}
            transition={{
              duration: 3 + i,
              repeat: Infinity,
              delay: i * 0.5,
            }}
          />
        ))}
      </div>
    </div>
  );
}
