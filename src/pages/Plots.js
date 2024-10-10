import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion"; // Import Framer Motion for animations
import video1 from "../vid/vid-1.mp4";
import video2 from "../vid/vid-2.mp4";
import video3 from "../vid/vid-3.mp4";

// Importing all images from the "plots" directory
import image1 from "../plots/1.jpeg";
import image2 from "../plots/2.jpeg";
import image3 from "../plots/3.jpeg";
import image4 from "../plots/4.jpeg";
import image5 from "../plots/5.jpeg";
import image6 from "../plots/6.jpeg";
import image7 from "../plots/7.jpeg";
import image8 from "../plots/8.jpeg";
import image9 from "../plots/9.jpeg";
import image10 from "../plots/10.jpeg";
import image11 from "../plots/11.jpeg";
import image12 from "../plots/12.jpeg";
import image13 from "../plots/13.jpeg";
import image14 from "../plots/14.jpeg";
import image15 from "../plots/15.jpeg";

// Animation variants for the video and image page
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

// Animation variants for the cards
const cardFadeIn = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

const Plots = () => {
  const videoRef = useRef(null); // Ref for the current video
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0); // State to track the current video index
  const [currentImageIndex, setCurrentImageIndex] = useState(0); // State to track the current image index

  const videos = [video1, video2, video3]; // Array of video sources
  const images = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    image10,
    image11,
    image12,
    image13,
    image14,
    image15,
  ]; // Array of image sources

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
  const handleNextVideo = () => {
    setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
  };

  // Function to handle moving to the previous video
  const handlePrevVideo = () => {
    setCurrentVideoIndex((prevIndex) =>
      prevIndex === 0 ? videos.length - 1 : prevIndex - 1
    );
  };

  // Function to autoplay the next video when the current one ends
  const handleVideoEnd = () => {
    handleNextVideo();
  };

  // Function to handle moving to the next image
  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Function to handle moving to the previous image
  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="flex flex-col items-center p-6">
      {/* Title for Recent Shoot */}
      <motion.h2
        className="text-3xl font-bold mb-4 text-pink-500 flex justify-center"
        initial="hidden"
        animate="visible"
        variants={fadeIn} // Heading fade-in effect
      >
        Recent Shoot
      </motion.h2>

      {/* Card for Recent Shoot (Video Section) */}
      <motion.div
        className="bg-gray-100 rounded-lg shadow-lg p-4 w-full lg:w-full flex flex-col mb-6 sm:mb-8 border border-gray-300 bg-opacity-60"
        initial="hidden"
        animate="visible"
        variants={cardFadeIn} // Added card animation
      >
        {/* Description for Recent Shoot with Animation */}
        <motion.p
          className="text-lg text-gray-700 text-left mb-6 max-w-2xl"
          initial="hidden"
          animate="visible"
          variants={fadeIn} // Description fade-in effect
        >
          We sell plots at the best price, ensuring quality locations with great
          opportunities for investment and development. Explore our recent
          shoots and site views to find the perfect plot for your needs.
        </motion.p>

        {/* Single Video Section */}
        <motion.div
          className="flex justify-center overflow-hidden mb-4"
          initial="hidden"
          animate="visible"
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

        {/* Video Navigation Buttons */}
        <div className="flex justify-start">
          <button
            onClick={handlePrevVideo}
            className="bg-gray-300 text-gray-800 px-4 py-2 rounded-lg shadow hover:bg-gray-400 mx-2"
          >
            Prev Video
          </button>
          <button
            onClick={handleNextVideo}
            className="bg-gray-300 text-gray-800 px-4 py-2 rounded-lg shadow hover:bg-gray-400 mx-2 "
          >
            Next Video
          </button>
        </div>
      </motion.div>

      {/* Combined Animation for Plot Views and Video Card */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeIn} // Heading and card fade-in effect together
        className="mb-6" // Add margin-bottom for spacing
      >
        {/* Title for Site Views */}
        <h2 className="text-3xl font-bold text-pink-500 flex justify-center mb-4">
          Plot Views
        </h2>

        {/* Card for Site Views (Image Section) */}
        <motion.div
          className="bg-gray-100 rounded-lg shadow-lg p-4 w-full lg:w-full flex flex-col mb-4 border border-gray-300 bg-opacity-60"
          initial="hidden"
          animate="visible"
          variants={cardFadeIn} // Added card animation
        >
          {/* Description for Site Views with Animation */}
          <motion.p
            className="text-lg text-gray-700 text-left mb-6 max-w-2xl"
            initial="hidden"
            animate="visible"
            variants={fadeIn} // Description fade-in effect
          >
            Explore the visuals of our available plots through the site views
            below. Our gallery showcases beautiful locations that are perfect
            for building your dream home or investment property.
          </motion.p>

          {/* Single Image Section */}
          <motion.div
            className="flex justify-center overflow-hidden mb-4"
            initial="hidden"
            animate="visible"
            variants={fadeIn} // Image section fade-in effect
          >
            <img
              src={images[currentImageIndex]}
              alt={`Plot ${currentImageIndex + 1} view`} // Updated alt text
              className="block w-[90%] h-[200px] md:w-full md:h-[360px] object-contain rounded-lg shadow-lg" // Adjusting size for mobile view
            />
          </motion.div>

          {/* Image Navigation Buttons */}
          <div className="flex justify-start">
            <button
              onClick={handlePrevImage}
              className="bg-gray-300 text-gray-800 px-4 py-2 rounded-lg shadow hover:bg-gray-400 mx-2"
            >
              Prev Image
            </button>
            <button
              onClick={handleNextImage}
              className="bg-gray-300 text-gray-800 px-4 py-2 rounded-lg shadow hover:bg-gray-400 mx-2"
            >
              Next Image
            </button>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Plots;
