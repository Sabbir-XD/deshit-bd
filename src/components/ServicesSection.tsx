"use client";

import { motion } from "framer-motion";
import {
  FaMobileAlt,
  FaGlobe,
  FaPalette,
  FaCogs,
  FaShieldAlt,
  FaSalesforce,
  FaProjectDiagram,
  FaMagento,
  FaDrupal,
  FaGem,
  FaNodeJs,
  FaPhp,
  FaReact,
} from "react-icons/fa";

const services = [
  {
    icon: <FaMobileAlt size={40} color="#F86011" />,
    title: "Mobile App Development",
    desc: "Outsource mobile development to our global team for user-friendly apps across iOS and Android. We ensure high-quality, secure, and performant applications that accelerate your time-to-market and control costs.",
  },
  {
    icon: <FaGlobe size={40} color="#F86011" />,
    title: "Web Development",
    desc: "Our offshore web development teams craft responsive, secure websites using PHP, Ruby on Rails, AngularJS, ReactJS, and NodeJS. Outsourcing ensures high-quality, cost-effective solutions tailored to your needs.",
  },
  {
    icon: <FaPalette size={40} color="#F86011" />,
    title: "UI/UX Design",
    desc: "Our remote UI/UX designers create engaging, user-centric interfaces. Outsourcing design services ensures aesthetically pleasing and functional products, speeding up development and enhancing user satisfaction.",
  },
  {
    icon: <FaCogs size={40} color="#F86011" />,
    title: "DevOps",
    desc: "Outsource DevOps to our global team to streamline software delivery with automation and CI/CD. This approach enhances collaboration, reduces time-to-market, and improves software quality efficiently.",
  },
  {
    icon: <FaShieldAlt size={40} color="#F86011" />,
    title: "Quality Assurance",
    desc: "Our global QA team provides thorough testing services, including manual and automated checks. Outsourcing QA ensures your software is flawless and reliable, reducing risks and meeting user expectations.",
  },
  {
    icon: <FaShieldAlt size={40} color="#F86011" />,
    title: "Cyber Security",
    desc: "Protect your business with our offshore cyber security services, covering everything from vulnerability assessments to ongoing monitoring. Outsourcing provides expert security solutions to safeguard your data and infrastructure.",
  },
  {
    icon: <FaSalesforce size={40} color="#F86011" />,
    title: "Salesforce",
    desc: "Outsource Salesforce implementation and customization to our skilled team to optimize this leading CRM. We handle setup, integration, and support, efficiently enhancing your sales processes and customer engagement.",
  },
  {
    icon: <FaProjectDiagram size={40} color="#F86011" />,
    title: "Odoo",
    desc: "Maximize Odoo’s potential with our offshore team’s implementation, customization, and support services. Outsourcing helps streamline operations and improve efficiency without the overhead of an in-house team.",
  },
  {
    icon: <FaMagento size={40} color="#F86011" />,
    title: "Magento",
    desc: "Our offshore experts customize and optimize Magento e-commerce platforms to drive sales and growth. Outsourcing ensures a secure, high-performance online store tailored to your business needs.",
  },
  {
    icon: <FaDrupal size={40} color="#F86011" />,
    title: "Drupal",
    desc: "Outsource your Drupal projects to our global team for secure, high-performing CMS solutions. We provide end-to-end services, ensuring your site is well-managed and aligned with your business goals.",
  },
  {
    icon: <FaGem size={40} color="#F86011" />,
    title: "Ruby On Rails",
    desc: "Utilize our offshore Ruby on Rails experts to build scalable, high-performance web applications quickly and efficiently. This approach accelerates development and reduces costs while ensuring robust and secure applications.",
  },
  {
    icon: <FaNodeJs size={40} color="#F86011" />,
    title: "NodeJS Development",
    desc: "Our offshore NodeJS developers create fast, scalable applications with real-time capabilities. Outsourcing to our team provides efficient, high-performance backends and APIs while allowing you to focus on your core business.",
  },
  {
    icon: <FaPhp size={40} color="#F86011" />,
    title: "PHP Development",
    desc: "Outsource your PHP development to our skilled team, which specializes in frameworks like Laravel and Symfony. We deliver dynamic, feature-rich websites and secure, scalable, and budget-friendly applications.",
  },
  {
    icon: <FaReact size={40} color="#F86011" />,
    title: "AngularJS And ReactJS",
    desc: "Leverage our offshore team’s expertise in AngularJS and ReactJS for building fast, interactive web applications. Outsourcing ensures cutting-edge technology and a superior user experience while managing development costs.",
  },
];

export default function ServicesSection() {
  return (
    <section className="py-16">
      {/* Section Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl font-bold text-center mb-12 text-[#141414]"
      >
        Software Development Services
      </motion.h2>

      {/* Grid of Services */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="p-6 transition bg-white text-center"
          >
            {/* Icon */}
            <div className="flex justify-center mb-4">{service.icon}</div>

            {/* Title */}
            <h3 className="text-[24px] font-bold text-[#141414] mb-3">
              {service.title}
            </h3>

            {/* Description */}
            <p className="text-[16px] text-[#141414]">{service.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
