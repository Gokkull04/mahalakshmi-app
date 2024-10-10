import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion"; // Import Framer Motion for animations
import video1 from "../vid/vid-1.mp4";
import video2 from "../vid/vid-2.mp4";
import video3 from "../vid/vid-3.mp4";

// Animation variants for the video page
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

const Plots = () => {
  const videoRef = useRef(null); // Ref for the current video
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0); // State to track the current video index

  const videos = [video1, video2, video3]; // Array of video sources

  // Autoplay the video when the component mounts or when the video index changes
  useEffect(() => {
    const playVideo = async () => {
      try {
        await videoRef.current.play(); // Attempt to play the video
      } catch (error) {
        console.error("Error attempting to play the video:", error);
      }
    };

    playVideo(); // Call the autoplay function
  }, [currentVideoIndex]);

  // Function to handle moving to the next video
  const handleNext = () => {
    setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
  };

  // Function to handle moving to the previous video
  const handlePrev = () => {
    setCurrentVideoIndex((prevIndex) =>
      prevIndex === 0 ? videos.length - 1 : prevIndex - 1
    );
  };

  // Function to autoplay the next video when the current one ends
  const handleVideoEnd = () => {
    handleNext();
  };

  return (
    <div className="flex flex-col items-center space-y-4 p-6">
      <motion.h2
        className="text-3xl font-bold text-blue-900 mb-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn} // Heading fade-in effect
      >
        Plots Videos
      </motion.h2>

      {/* Combined Card for Video and Navigation */}
      <div className="bg-gray-100 rounded-lg shadow-lg p-4 w-full max-w-2xl">
        {/* Single Video Section */}
        <motion.div
          className="flex justify-center overflow-hidden mb-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn} // Video section fade-in effect
        >
          <video
            ref={videoRef}
            src={videos[currentVideoIndex]}
            className="block w-full h-[360px] rounded-lg shadow-lg"
            controls
            muted
            onEnded={handleVideoEnd} // Automatically switch to next video when current one ends
          />
        </motion.div>

        {/* Navigation Buttons */}
        <div className="flex justify-start">
          <button
            onClick={handlePrev}
            className="bg-gray-300 text-gray-800 px-4 py-2 rounded-lg shadow hover:bg-gray-400 mx-2"
          >
            Prev
          </button>
          <button
            onClick={handleNext}
            className="bg-gray-300 text-gray-800 px-4 py-2 rounded-lg shadow hover:bg-gray-400 mx-2"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Plots;
