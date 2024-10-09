import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion"; // Import Framer Motion for animations
import bg from "../img/bg.png"; // Background image
import logo from "../img/logo.png"; // Logo image

// Animation variants
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

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.4,
      duration: 0.8,
      ease: "easeInOut",
    },
  },
};

const Home = () => {
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
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="text-center"
      >
        {/* Logo with Animation */}
        <motion.img
          src={logo}
          alt="logo"
          className="w-full h-auto max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl mx-auto mb-6"
          variants={fadeIn} // Logo fade-in effect
        />

        {/* Responsive Heading with Animation */}
        <motion.h1
          className="text-3xl sm:text-5xl font-bold mb-6 text-pink-500 animate-pulse mt-4"
          variants={fadeIn} // Heading fade-in effect
        >
          Welcome to Mahalakshmi <br /> Builders and Land Promoters
        </motion.h1>

        {/* Responsive Paragraph with Animation */}
        <motion.p
          className="text-base sm:text-lg mb-8 text-gray-700"
          variants={fadeIn} // Paragraph fade-in effect
        >
          Building your dreams with excellence and integrity.
        </motion.p>

        {/* Responsive Button with Animation */}
        <motion.div variants={fadeIn}>
          {/* Button wrapper for animation */}
          <Link
            to="/about"
            className="bg-blue-900 text-white py-2 sm:py-3 px-6 sm:px-8 rounded-lg hover:bg-yellow-400 hover:text-blue-900 transition"
          >
            Get In Touch
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Home;