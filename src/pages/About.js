import React from "react";
import { motion } from "framer-motion";
import companyImage1 from "../img/img1.jpeg"; // Replace with actual image paths
import companyImage2 from "../img/img2.jpeg";
import companyImage3 from "../img/img3.jpeg";

// Framer Motion variants for animation
const fadeIn = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const About = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-6">
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* First Image */}
          <motion.div
            className="bg-white shadow-lg rounded-lg p-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            variants={fadeIn}
          >
            <img
              src={companyImage1}
              alt="Company work 1"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <p className="text-gray-700">
              A stunning residential building project completed with attention
              to detail. Price: Reasonable and affordable.
            </p>
          </motion.div>

          {/* Second Image */}
          <motion.div
            className="bg-white shadow-lg rounded-lg p-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            variants={fadeIn}
          >
            <img
              src={companyImage2}
              alt="Company work 2"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <p className="text-gray-700">
              Commercial complex built with modern designs and high-end
              materials. Price: Competitive pricing guaranteed.
            </p>
          </motion.div>

          {/* Third Image */}
          <motion.div
            className="bg-white shadow-lg rounded-lg p-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
            variants={fadeIn}
          >
            <img
              src={companyImage3}
              alt="Company work 3"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <p className="text-gray-700">
              Luxury villa development with elegant finishes and premium
              amenities. Price: Reasonable pricing for exceptional quality.
            </p>
          </motion.div>
        </div>
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
          className="bg-white shadow-lg rounded-lg p-6 text-center"
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
