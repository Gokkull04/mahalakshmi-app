import React from "react";
import { motion } from "framer-motion";
import bg from "../img/bg.png";
import companyImage1 from "../img/img1.jpeg";
import companyImage2 from "../img/img2.jpeg";
import companyImage3 from "../img/img3.jpeg";

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1, // Increased duration for smoother effect
      ease: "easeInOut", // Smooth ease effect
    },
  },
};

const staggerContainer = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.4, // Delay between card animations for smoother flow
      duration: 0.8, // Duration across all elements
      ease: "easeInOut", // Uniform easing
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
        backgroundAttachment: "fixed",
      }}
    >
      {/* Our Works Section */}
      <motion.section
        className="mb-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <motion.h2
          className="text-4xl font-bold text-center text-blue-900 mb-8"
          variants={fadeIn}
        >
          ABOUT US
        </motion.h2>

        <motion.div
          className="flex flex-col space-y-4 items-center" // Ensures proper spacing and alignment
          initial="hidden"
          whileInView="visible"
          variants={staggerContainer}
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* First Card */}
          <motion.div
            className="bg-white shadow-lg rounded-lg p-4 w-full lg:w-3/4 flex flex-col lg:flex-row items-center justify-between mb-4 border border-gray-300 bg-opacity-60" // Reduced opacity
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
            className="bg-white shadow-lg rounded-lg p-4 w-full lg:w-3/4 flex flex-col lg:flex-row-reverse items-center justify-between mb-4 border border-gray-300 bg-opacity-60" // Reduced opacity
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
            className="bg-white shadow-lg rounded-lg p-4 w-full lg:w-3/4 flex flex-col lg:flex-row items-center justify-between mb-4 border border-gray-300 bg-opacity-60" // Reduced opacity
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

      {/* Contact Details Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeIn}
      >
        <h2 className="text-4xl font-bold text-center text-blue-900 mb-8">
          Contact Details
        </h2>

        <div className="bg-white shadow-lg rounded-lg p-6 text-center mx-auto">
          <p className="text-lg text-gray-800 mb-4">
            <strong>Company Name:</strong>{" "}
            <span className="uppercase">
              Mahalakshmi Builders & Land Promoters
            </span>
          </p>
          <p className="text-lg text-gray-800 mb-4">
            <strong>Location: </strong>PLOT NO. 9/2, J BLOCK,
            16th MAIN ROAD,<br></br> ANNA NAGAR WEST,
            CHENNAI - 600 040
          </p>
          <p className="text-lg text-gray-800 mb-4">
            <strong>Email: </strong> mahalakshmibuilders2002@gmail.com
          </p>
          <p className="text-lg text-gray-800 mb-4">
            <strong>Contact Number:</strong> 044 42801213
          </p>
        </div>
      </motion.section>
    </div>
  );
};

export default About;
