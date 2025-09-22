"use client";

import { motion } from "framer-motion";

const technologies = [
  {
    title: "Machine Learning",
    description:
      "We integrate machine learning into client projects to automate processes, predict outcomes, and personalize experiences. This technology boosts efficiency and innovation, providing scalable solutions that grow with your business.",
  },
  {
    title: "Blockchain",
    description:
      "Integrate blockchain to create secure, transparent systems that eliminate intermediaries and prevent fraud. Projects benefit from enhanced transaction security and operational efficiency by utilizing decentralized ledgers and smart contracts.",
  },
  {
    title: "Big Data",
    description:
      "Utilize Big Data to analyze large volumes of information and gain actionable insights. Real-time analytics and predictive modeling drive better decision-making and optimize operations, keeping your projects competitive and agile.",
  },
  {
    title: "Internet of Things (IoT)",
    description:
      "Leverage IoT to connect and manage devices, enabling real-time monitoring and automation. This technology enhances operational efficiency and data-driven decision-making, ensuring your projects are smart and future-ready.",
  },
  {
    title: "Natural Language Processing",
    description:
      "Our experts use Natural Language Processing to create intuitive, language-driven applications. By automating tasks like customer support and data processing, we enhance user interactions and improve efficiency in client projects.",
  },
  {
    title: "Facial Recognition",
    description:
      "We implement facial recognition technology to enhance security and personalize user experiences in client projects. This technology offers accurate identification and streamlined authentication, making your applications secure and user-friendly.",
  },
];

export default function AdvancedTech() {
  return (
    <section className="py-16">
      {/* Heading + Paragraph */}
      <div className="text-center max-w-4xl mx-auto mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-[#141414] mb-4">
          Our Advanced Development Technology
        </h2>
        <p className="text-base md:text-lg text-[#141414]">
          Our advanced development technologies, including AI, machine learning,
          blockchain, and microservices, enable us to deliver innovative,
          future-proof solutions with exceptional efficiency and scalability.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-25">
        {technologies.map((tech, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-[32px] md:text-[40px] font-bold text-[#141414] mb-4">
              {tech.title}
            </h3>
            <p className="text-[16px] md:text-[20px] text-[#141414] leading-relaxed mt-10">
              {tech.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
