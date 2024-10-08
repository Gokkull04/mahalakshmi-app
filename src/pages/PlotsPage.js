import React, { useState, useRef, useEffect } from "react";
import video1 from "../vid/vid-1.mp4";
import video2 from "../vid/vid-1.mp4";
import video3 from "../vid/vid-1.mp4";

const PlotsPage = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0); // Track the current video index
  const videoRefs = [useRef(null), useRef(null), useRef(null)]; // Refs for videos

  // Function to autoplay videos one after another
  const handleVideoEnd = (index) => {
    if (index < videoRefs.length - 1) {
      setCurrentVideoIndex(index + 1);
      videoRefs[index + 1].current.play();
    }
  };

  // Autoplay the first video
  useEffect(() => {
    setCurrentVideoIndex(0); // Start from the first video
    videoRefs[0].current.play();
  }, []);

  return (
    <div className="flex flex-col items-center space-y-4 mt-16">
      <h2 className="text-2xl font-bold text-blue-900 mb-4">Plots Videos</h2>
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
  );
};

export default PlotsPage;
