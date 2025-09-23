"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const benefits = [
  {
    title: "Cost Efficiency",
    desc: "Outsourcing software development allows you to significantly cut costs by leveraging talent from regions with lower labor costs. You save on expenses like salaries, benefits, and office space, enabling you to allocate resources more effectively.",
  },
  {
    title: "Access to Expertise",
    desc: "By outsourcing, you tap into a global pool of experts who bring specialized skills and experience to your project. Whether you need cutting-edge technology, niche expertise, or industry-specific knowledge, outsourcing provides access to talent that may not be readily available in-house.",
  },
  {
    title: "Scalability",
    desc: "Outsourcing offers the flexibility to scale your development team up or down based on the demands of your project. Whether you’re facing a tight deadline or adjusting to a changing market, you can easily adapt without the complexities of hiring or downsizing permanent staff.",
  },
  {
    title: "Faster Time to Market",
    desc: "With a dedicated outsourced team, you can accelerate your project timelines. Experienced developers can focus on your project full-time, ensuring faster completion and allowing you to bring your product to market quicker than if relying solely on in-house resources.",
  },
  {
    title: "Focus on Core Business",
    desc: "Outsourcing lets your internal team concentrate on core business activities, such as strategy, marketing, and customer relations. While the outsourced team handles the technical aspects, your in-house team can focus on what they do best, driving growth and innovation.",
  },
  {
    title: "Risk Management",
    desc: "Outsourcing can help mitigate risks associated with software development. Experienced outsourcing partners are familiar with common project challenges and can navigate them effectively, reducing the likelihood of costly mistakes and ensuring a smoother development process.",
  },
];

export default function BenefitsSection() {
  return (
    <section className="py-16 bg-white">
      {/* Heading */}
      <div className="text-center max-w-4xl mx-auto px-4">
        <h2 className="text-md sm:text-xl md:text-2xl font-bold text-gray-900 mb-4">
          Benefits Of Software Development Outsourcing
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-gray-600">
          Outsourcing software development cuts costs, gives you access to
          expert skills, and offers flexibility. It accelerates project
          timelines, minimizes risks, and introduces new global ideas to your
          work.
        </p>
      </div>

      {/* Cards */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {benefits.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="flex">
              {/* Icon */}
              <div className="mb-4">
                <Image
                  src="/pic/Frame.png" // ✅ public folder er direct path
                  alt="Icon"
                  width={64}
                  height={64}
                />
              </div>
              <div className="ml-4">
                {/* Heading */}
                <h3 className="text-xl sm:text-2xl font-bold text-[#141414] mb-3">
                  {item.title}
                </h3>

                {/* Paragraph */}
                <p className="text-base sm:text-lg text-[#141414]">
                  {item.desc}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
