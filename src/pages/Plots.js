import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion"; // Import Framer Motion for animations
import video1 from "../vid/vid-1.mp4";

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
  const videoRef = useRef(null); // Ref for the single video

  // Autoplay the video when the component mounts
  useEffect(() => {
    const playVideo = async () => {
      try {
        await videoRef.current.play(); // Attempt to play the video
      } catch (error) {
        console.error("Error attempting to play the video:", error);
      }
    };

    playVideo(); // Call the autoplay function
  }, []);

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
      {/* Single Video Section */}
      <motion.div
        className="w-full flex justify-center overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn} // Video section fade-in effect
      >
        <video
          ref={videoRef}
          src={video1}
          className="block w-[640px] h-[360px] rounded-lg shadow-lg" // Custom width and height for the video
          controls
          muted
        />
      </motion.div>
    </div>
  );
};

export default Plots;
