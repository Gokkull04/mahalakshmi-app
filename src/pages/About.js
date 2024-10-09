// src/pages/AboutPage.js
import React, { useState } from "react";
import { motion } from "framer-motion"; // Import Framer Motion for animations
import PlotsPage from "./PlotsPage";
import BuildedProjectsPage from "./BuildedProjectsPage";
import bg from "../img/bg.png";

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
      {/* Animated "About Us" heading */}
      <motion.h1
        className="text-4xl font-bold text-center text-blue-900 mb-8"
        initial="hidden"
        animate="visible"
        variants={headingAnimation}
      >
        About Us
      </motion.h1>

      {/* Floating bar with border, shadow, and animation */}
      <motion.div
        className="flex justify-center mb-8 bg-gray-100 rounded-lg shadow-lg border border-gray-300 p-4"
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
              ? "bg-blue-600 text-white"
              : "bg-gray-200 text-blue-900"
          }`}
          onClick={() => setActiveTab("plots")}
        >
          Plots
        </button>
        <button
          className={`px-4 py-2 mx-2 rounded-lg ${
            activeTab === "builded-projects"
              ? "bg-blue-600 text-white"
              : "bg-gray-200 text-blue-900"
          }`}
          onClick={() => setActiveTab("builded-projects")}
        >
          Building Projects
        </button>
      </motion.div>

      {/* Conditional rendering based on active tab */}
      <div className="content">
        {activeTab === "plots" && <PlotsPage />}
        {activeTab === "builded-projects" && <BuildedProjectsPage />}
      </div>
    </div>
  );
};

export default AboutPage;
