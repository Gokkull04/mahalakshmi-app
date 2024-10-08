import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import bg from "../img/bg.png";
import companyImage1 from "../img/img1.jpeg";
import companyImage2 from "../img/img2.jpeg";
import companyImage3 from "../img/img3.jpeg";
import video1 from "../vid/vid-1.mp4";
import video2 from "../vid/vid-1.mp4";
import video3 from "../vid/emman-vid.mp4";

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
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.4,
      duration: 0.8,
      ease: "easeInOut",
    },
  },
};

const About = () => {
  const [activeTab, setActiveTab] = useState("videos"); // State to control tab view
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0); // Track the current video index

  const videoRefs = [useRef(null), useRef(null), useRef(null)]; // Refs for videos

  // Function to autoplay videos one after another
  const handleVideoEnd = (index) => {
    if (index < videoRefs.length - 1) {
      setCurrentVideoIndex(index + 1);
      videoRefs[index + 1].current.play();
    }
  };

  // Autoplay the first video when "Videos" tab is active
  useEffect(() => {
    if (activeTab === "videos") {
      setCurrentVideoIndex(0); // Start from the first video
      videoRefs[0].current.play();
    }
  }, [activeTab]);

  return (
    <div
      className="bg-gray-100 min-h-screen pt-6 flex flex-col justify-center items-center"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Centered Floating Tab Stuck to Nav Bar */}
      <div className="sticky-0 top-16 flex justify-center w-full z-10">
        <div className="bg-white shadow-lg rounded-full p-3 border-black border-r-4 border-l-4 flex">
          <button
            className={`px-6 py-2 rounded-lg ${
              activeTab === "videos"
                ? "bg-blue-900 text-white"
                : "bg-gray-200 text-blue-900 border-black border-b-2 border-r-2"
            }`}
            onClick={() => setActiveTab("videos")}
          >
            Plots
          </button>
          <button
            className={`ml-2 px-4 py-2 rounded-lg ${
              activeTab === "about"
                ? "bg-blue-900 text-white"
                : "bg-gray-200 text-blue-900 border-black border-b-2 border-r-2"
            }`}
            onClick={() => setActiveTab("about")}
          >
            Builded Projects
          </button>
        </div>
      </div>

      {/* Conditionally Rendered Content Based on Active Tab */}
      {activeTab === "videos" && (
        <div className="flex flex-col items-center space-y-4 mt-24">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">
            Plots Videos
          </h2>

          {/* Video Carousel Section */}
          <div className="w-full flex justify-center overflow-hidden">
            <div className="flex">
              {videoRefs.map((ref, index) => (
                <video
                  key={index}
                  ref={ref}
                  src={[video1, video2, video3][index]}
                  className={`${
                    currentVideoIndex === index
                      ? "block w-full h-auto rounded-lg shadow-lg"
                      : "hidden"
                  }`}
                  onEnded={() => handleVideoEnd(index)}
                  controls
                  muted
                />
              ))}
            </div>
          </div>
        </div>
      )}

      {/* About Section */}
      {activeTab === "about" && (
        <motion.section
          className="mt-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.div
            className="flex flex-col space-y-4 items-center"
            initial="hidden"
            whileInView="visible"
            variants={staggerContainer}
            viewport={{ once: true, amount: 0.2 }}
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
                  facilities. With its strategic location in the business hub,
                  the complex provides excellent visibility and easy access for
                  both customers and employees.
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
                  <strong>Price:</strong> Flexible pricing plans tailored to
                  meet customer needs.
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
      )}
      <a
        href="/contact" // Update the link to your contact page
        className="bg-blue-900 text-white py-2 sm:py-3 px-6 sm:px-8 rounded-lg hover:bg-yellow-400 hover:text-blue-900 transition mt-4 mb-4  flex justify-center"
        initial="hidden"
        whileInView="visible"
        variants={fadeIn}
      >
        Contact Us
      </a>
    </div>
  );
};

export default About;
