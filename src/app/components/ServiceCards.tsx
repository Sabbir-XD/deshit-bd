"use client";

import { motion } from "framer-motion";

const services = [
  {
    title: "Dedicated Team",
    description:
      "Our dedicated team service offers you a full-time, specialized team committed to your project. This model ensures focused expertise, quicker turnaround times, and seamless integration with your existing processes.",
  },
  {
    title: "Staff Augmentation",
    description:
      "With our staff augmentation services, you can temporarily extend your team with experienced professionals. This approach allows you to scale resources flexibly, reduce hiring overhead, and address skill gaps efficiently.",
  },
  {
    title: "End-to-End Project",
    description:
      "We manage your entire project from concept to completion with our end-to-end services. This comprehensive approach ensures consistency, reduces risks, and delivers a cohesive final product aligned with your business objectives.",
  },
];

export default function ServicesCard() {
  return (
    <section className="">
      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, i) => (
          <motion.div
            key={i}
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: i * 0.4 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-900 px-2 border-l-[1.5px] border-[#F50000]"
          >
            <h3 className="text-2xl text-center font-semibold mb-3 text-[#141414] dark:text-white">
              {service.title}
            </h3>
            <p className="text-[#141414] text-md text-center dark:text-gray-300">
              {service.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
