import React from "react";
import { motion } from "framer-motion";
import bg from "../img/bg.png";
import companyImage1 from "../img/img1.jpeg"; // Replace with actual image paths
import companyImage2 from "../img/img2.jpeg";
import companyImage3 from "../img/img3.jpeg";

// Framer Motion variants for card animation
const fadeIn = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

// Container variant for staggered animation
const staggerContainer = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5, // Delay between each card animation
      when: "beforeChildren", // Ensures the cards animate one by one
    },
  },
};

const About = () => {
  return (
    <div
      className="bg-gray-100 min-h-screen p-6"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Our Works Section */}
      <section className="mb-12">
        <motion.h2
          className="text-4xl font-bold text-center text-blue-900 mb-8"
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5 }}
          variants={fadeIn}
        >
          Our Works
        </motion.h2>

        <motion.div
          className="flex flex-col space-y-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {/* First Card: Image on Right, Description on Left */}
          <motion.div
            className="bg-white shadow-lg rounded-lg p-4 w-full lg:w-3/4 h-96 flex flex-col lg:flex-row"
            variants={fadeIn}
            transition={{ duration: 0.5 }}
          >
            <div className="flex-1 flex items-center justify-center">
              <p className="text-gray-700 text-lg p-4">
                A stunning residential building project completed with attention
                to detail. Price: Reasonable and affordable.
              </p>
            </div>
            <div className="flex-1">
              <img
                src={companyImage1}
                alt="Company work 1"
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
          </motion.div>

          {/* Second Card: Image on Left, Description on Right */}
          <motion.div
            className="bg-white shadow-lg rounded-lg p-4 w-full lg:w-3/4 h-96 flex flex-col lg:flex-row-reverse"
            variants={fadeIn}
            transition={{ duration: 0.5 }}
          >
            <div className="flex-1 flex items-center justify-center">
              <p className="text-gray-700 text-lg p-4">
                Commercial complex built with modern designs and high-end
                materials. Price: Competitive pricing guaranteed.
              </p>
            </div>
            <div className="flex-1">
              <img
                src={companyImage2}
                alt="Company work 2"
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
          </motion.div>

          {/* Third Card: Image on Right, Description on Left */}
          <motion.div
            className="bg-white shadow-lg rounded-lg p-4 w-full lg:w-3/4 h-96 flex flex-col lg:flex-row"
            variants={fadeIn}
            transition={{ duration: 0.5 }}
          >
            <div className="flex-1 flex items-center justify-center">
              <p className="text-gray-700 text-lg p-4">
                Luxury villa development with elegant finishes and premium
                amenities. Price: Reasonable pricing for exceptional quality.
              </p>
            </div>
            <div className="flex-1">
              <img
                src={companyImage3}
                alt="Company work 3"
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Contact Details Section */}
      <section>
        <motion.h2
          className="text-4xl font-bold text-center text-blue-900 mb-8"
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5 }}
          variants={fadeIn}
        >
          Contact Details
        </motion.h2>

        <motion.div
          className="bg-white shadow-lg rounded-lg p-6 text-center w-3/4 lg:w-1/2 mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          variants={fadeIn}
        >
          <p className="text-lg text-gray-800 mb-4">
            <strong>Company Name:</strong> Mahalakshmi Builders and Enterprises
          </p>
          <p className="text-lg text-gray-800 mb-4">
            <strong>Location:</strong> 1234 Street Name, City, State, ZIP
          </p>
          <p className="text-lg text-gray-800">
            <strong>Contact Number:</strong> +123 456 7890
          </p>
        </motion.div>
      </section>
    </div>
  );
};

export default About;
