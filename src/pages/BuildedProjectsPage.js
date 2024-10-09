import React from "react";
import { motion } from "framer-motion";
import companyImage1 from "../img/img1.jpeg";
import companyImage2 from "../img/img2.jpeg";
import companyImage3 from "../img/img3.jpeg";

// Fade-in animation variant
const fadeIn = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

// Stagger container for better performance on mobile
const staggerContainer = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Faster stagger for mobile
      duration: 0.8,
      ease: "easeInOut",
    },
  },
};

const BuildedProjectsPage = () => {
  return (
    <div className="min-h-screen p-6 flex flex-col justify-center items-center">
      {/* Our Works Section */}
      <motion.section
        className="mb-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }} // Updated for mobile view performance
        variants={staggerContainer}
      >
        <motion.h2
          className="text-3xl font-bold text-center text-blue-900 mb-8"
          variants={fadeIn}
        >
          Builded Projects
        </motion.h2>

        <motion.div
          className="flex flex-col space-y-4 items-center"
          initial="hidden"
          whileInView="visible"
          variants={staggerContainer}
          viewport={{ once: true, amount: 0.1 }} // Adjusted for mobile responsiveness
        >
          {/* First Card */}
          <motion.div
            className="bg-white shadow-lg rounded-lg p-4 w-full lg:w-3/4 flex flex-col lg:flex-row items-center justify-between mb-4 border border-gray-300 bg-opacity-60"
            variants={fadeIn}
          >
            <div className="flex-1 flex items-center justify-center lg:hidden mb-4">
              <img
                src={companyImage1}
                alt="Luxury Residential Apartments"
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
            <div className="flex-1 flex items-center justify-center">
              <p className="text-gray-700 text-lg p-4 text-center">
                <strong>Project: Luxury Residential Apartments</strong> <br />
                High-end residential project redefines modern living and is
                designed to maximize natural light and airflow, offering an
                unparalleled living experience. Ideal for families seeking an
                exclusive living environment in the heart of the city.
                <br />
                <strong>Price:</strong> Competitive pricing with flexible
                payment options available.
              </p>
            </div>
            <div className="flex-1 hidden lg:flex items-center justify-center">
              <img
                src={companyImage1}
                alt="Luxury Residential Apartments"
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
          </motion.div>

          {/* Second Card */}
          <motion.div
            className="bg-white shadow-lg rounded-lg p-4 w-full lg:w-3/4 flex flex-col lg:flex-row-reverse items-center justify-between mb-4 border border-gray-300 bg-opacity-60"
            variants={fadeIn}
          >
            <div className="flex-1 flex items-center justify-center lg:hidden mb-4">
              <img
                src={companyImage2}
                alt="Modern Commercial Complex"
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
            <div className="flex-1 flex items-center justify-center">
              <p className="text-gray-700 text-lg p-4 text-center">
                <strong>Project: Modern Commercial Complex</strong> <br />
                A prime commercial development catering to businesses of all
                sizes, offering premium office spaces equipped with advanced
                facilities. With its strategic location in the business hub, the
                complex provides excellent visibility and easy access for both
                customers and employees.
                <br />
                <strong>Price:</strong> Affordable lease terms available for
                long-term tenants.
              </p>
            </div>
            <div className="flex-1 hidden lg:flex items-center justify-center">
              <img
                src={companyImage2}
                alt="Modern Commercial Complex"
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
          </motion.div>

          {/* Third Card */}
          <motion.div
            className="bg-white shadow-lg rounded-lg p-4 w-full lg:w-3/4 flex flex-col lg:flex-row items-center justify-between mb-4 border border-gray-300 bg-opacity-60"
            variants={fadeIn}
          >
            <div className="flex-1 flex items-center justify-center lg:hidden mb-4">
              <img
                src={companyImage3}
                alt="Premium Villa Development"
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
            <div className="flex-1 flex items-center justify-center">
              <p className="text-gray-700 text-lg p-4 text-center">
                <strong>Project: Premium Villa Development</strong> <br />
                Each villa is designed with contemporary architecture and is
                equipped with a garden area and top-notch security systems.
                Perfect for families or individuals seeking a peaceful and
                opulent lifestyle away from the city buzz.
                <br />
                <strong>Price:</strong> Flexible pricing plans tailored to meet
                customer needs.
              </p>
            </div>
            <div className="flex-1 hidden lg:flex items-center justify-center">
              <img
                src={companyImage3}
                alt="Premium Villa Development"
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
          </motion.div>
        </motion.div>
      </motion.section>
    </div>
  );
};

export default BuildedProjectsPage;
