"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    name: "Patrick Stockwell",
    role: "Founder, Volta Inc.",
    location: "San Francisco Bay Area, USA",
    project: "Project Baller ID",
    img: "https://i.ibb.co/Y4X4Gvf6/testimonial.png",
    text: "Everything went extremely well. My project was fairly complex and required Nascenia to investigate new technologies/APIs. They succeeded with flying colors and I can’t wait to get started on another project. I was very impressed with their communication and willingness to move directions slightly. The code produced was excellent. Fantastic team!",
  },
  {
    id: 2,
    name: "Client Two",
    role: "CEO, Example Co.",
    location: "New York, USA",
    project: "Project X",
    img: "https://i.ibb.co/Y4X4Gvf6/testimonial.png",
    text: "This is another testimonial example. Replace with real client text.",
  },
  {
    id: 3,
    name: "Client Three",
    role: "Manager, Demo Inc.",
    location: "London, UK",
    project: "Project Y",
    img: "https://i.ibb.co/Y4X4Gvf6/testimonial.png",
    text: "Third testimonial example. Replace with actual client review.",
  },
];

export default function TestimonialSlider() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  // Auto slide effect
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000); // change slide every 5s

    return () => clearInterval(timer); // cleanup on unmount
  }, [current]);

  return (
    <section className="py-16 px-4 lg:px-24 bg-white text-center">
      <h2 className="text-2xl lg:text-3xl font-bold mb-2">
        Clients Testimonials
      </h2>
      <p className="text-2xl text-[#141414] mb-8">
        We Measure Success Through Client Satisfaction.{" "}
        <span className="font-semibold">Words from Our Clients</span>
      </p>

      <div className="relative max-w-6xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={testimonials[current].id}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-24 h-24 mx-auto mb-4 relative rounded-2xl overflow-hidden">
              <Image
                src={testimonials[current].img || "/default-avatar.png"} // fallback
                alt={testimonials[current].name}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6 border border-dashed border-gray-600 rounded-lg">
              <p className="text-gray-800 mb-4">{testimonials[current].text}</p>
            </div>
            <p className="text-sm text-gray-500 mt-4">
              {testimonials[current].name}, {testimonials[current].role},{" "}
              {testimonials[current].location}, {testimonials[current].project}
            </p>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Dots */}
        <div className="flex justify-center mt-6 space-x-2">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              className={`w-3 h-3 rounded-full ${
                current === idx ? "bg-orange-500" : "bg-gray-300"
              }`}
              onClick={() => setCurrent(idx)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
