// src/pages/AboutPage.js
import React, { useState } from "react";
import { motion } from "framer-motion"; // Import Framer Motion for animations
import PlotsPage from "./Plots";
import BuildedProjectsPage from "./Projects";
import desktopBg from "../img/bg.png"; // Desktop background image
import mobileBg from "../img/bg1.png"; // Mobile background image

// Animation variants for "About Us" heading and floating tab
const headingAnimation = {
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

const AboutPage = () => {
  const [activeTab, setActiveTab] = useState("plots"); // Default to "plots" tab

  return (
    <div className="min-h-screen p-6 flex flex-col justify-center items-center relative">
      {/* Desktop Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat hidden sm:block"
        style={{
          backgroundImage: `url(${desktopBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        }}
      ></div>

      {/* Mobile Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat sm:hidden"
        style={{
          backgroundImage: `url(${mobileBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        }}
      ></div>

      {/* Animated "About Us" heading */}
      <motion.h1
        className="text-4xl font-bold text-center text-pink-500 mb-8 relative z-10"
        initial="hidden"
        animate="visible"
        variants={headingAnimation}
      >
        About Us
      </motion.h1>

      {/* Floating bar with border, shadow, and animation */}
      <motion.div
        className="flex justify-center mb-8 bg-gray-100 rounded-lg shadow-lg border border-gray-300 p-4 relative z-10"
        initial="hidden"
        animate="visible"
        variants={headingAnimation}
        style={{
          boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)", // Soft shadow
        }}
      >
        <button
          className={`px-4 py-2 mx-2 rounded-lg ${
            activeTab === "plots"
              ? "bg-blue-900 text-white"
              : "bg-gray-200 text-blue-900 hover:bg-yellow-400 hover:text-blue-900"
          }`}
          onClick={() => setActiveTab("plots")}
        >
          Plots
        </button>
        <button
          className={`px-4 py-2 mx-2 rounded-lg ${
            activeTab === "builded-projects"
              ? "bg-blue-900 text-white"
              : "bg-gray-200 text-blue-900 hover:bg-yellow-400 hover:text-blue-900"
          }`}
          onClick={() => setActiveTab("builded-projects")}
        >
          Projects
        </button>
      </motion.div>

      {/* Conditional rendering based on active tab */}
      <div className="content relative z-10">
        {activeTab === "plots" && <PlotsPage />}
        {activeTab === "builded-projects" && <BuildedProjectsPage />}
      </div>
    </div>
  );
};

export default AboutPage;
