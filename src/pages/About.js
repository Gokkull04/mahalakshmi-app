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
      className="bg-gray-100 min-h-screen p-6 flex flex-col justify-center items-center"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed", // This makes the background image fixed
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
          ABOUT US
        </motion.h2>

        <motion.div
          className="flex flex-col space-y-8 items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {/* First Card: Image on Right, Description on Left */}
          <motion.div
            className="bg-white shadow-lg rounded-lg p-4 w-full lg:w-3/4 h-96 flex flex-col lg:flex-row items-center justify-center"
            variants={fadeIn}
            transition={{ duration: 0.5 }}
          >
            <div className="flex-1 flex items-center justify-center">
              <p className="text-gray-700 text-lg p-4 text-center">
                <strong>Project: Luxury Residential Apartments</strong> <br />
                This high-end residential project redefines modern living,
                featuring spacious apartments with breathtaking views, premium
                interiors, and state-of-the-art amenities. Each unit is designed
                to maximize natural light and airflow, offering an unparalleled
                living experience. Ideal for families and professionals looking
                for an exclusive living environment in the heart of the city.
                <br />
                <strong>Price:</strong> Competitive pricing with flexible
                payment options available.
              </p>
            </div>
            <div className="flex-1 flex items-center justify-center">
              <img
                src={companyImage1}
                alt="Luxury Residential Apartments"
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
          </motion.div>

          {/* Second Card: Image on Left, Description on Right */}
          <motion.div
            className="bg-white shadow-lg rounded-lg p-4 w-full lg:w-3/4 h-96 flex flex-col lg:flex-row-reverse items-center justify-center"
            variants={fadeIn}
            transition={{ duration: 0.5 }}
          >
            <div className="flex-1 flex items-center justify-center">
              <p className="text-gray-700 text-lg p-4 text-center">
                <strong>Project: Modern Commercial Complex</strong> <br />
                A prime commercial development catering to businesses of all
                sizes, offering premium office spaces equipped with advanced
                facilities. With its strategic location in the business hub, the
                complex provides excellent visibility and easy access for both
                customers and employees. The building features a sustainable
                design with energy-efficient technologies.
                <br />
                <strong>Price:</strong> Affordable lease terms available for
                long-term tenants.
              </p>
            </div>
            <div className="flex-1 flex items-center justify-center">
              <img
                src={companyImage2}
                alt="Modern Commercial Complex"
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
          </motion.div>

          {/* Third Card: Image on Right, Description on Left */}
          <motion.div
            className="bg-white shadow-lg rounded-lg p-4 w-full lg:w-3/4 h-96 flex flex-col lg:flex-row items-center justify-center"
            variants={fadeIn}
            transition={{ duration: 0.5 }}
          >
            <div className="flex-1 flex items-center justify-center">
              <p className="text-gray-700 text-lg p-4 text-center">
                <strong>Project: Premium Villa Development</strong> <br />
                These luxury villas offer the ultimate in privacy and comfort,
                nestled in an exclusive community with lush greenery and modern
                amenities. Each villa is designed with contemporary architecture
                and is equipped with a private pool, garden area, and top-notch
                security systems. Perfect for families or individuals seeking a
                peaceful and opulent lifestyle away from the city buzz.
                <br />
                <strong>Price:</strong> Flexible pricing plans tailored to meet
                customer needs.
              </p>
            </div>
            <div className="flex-1 flex items-center justify-center">
              <img
                src={companyImage3}
                alt="Premium Villa Development"
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
          className="bg-white shadow-lg rounded-lg p-6 text-center mx-auto"
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
