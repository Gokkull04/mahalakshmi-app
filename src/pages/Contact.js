import React from 'react'
import bg from "../img/bg.png";
import { motion } from "framer-motion"; // For carousel animation
import o1 from "../img/o1.jpeg"; // Import your images
import o2 from "../img/o2.jpeg";
import o3 from "../img/o3.jpeg";
import o4 from "../img/o4.jpeg";
import o5 from "../img/o5.jpeg";

export default function Contact() {
  const images = [o1, o2, o3, o4, o5];
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-4 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundAttachment: "fixed", // Fixed for all views
      }}
    >
      <h1 className="text-5xl font-bold text-center text-blue-900 mb-8">
        Our Company
      </h1>

      {/* Company Description */}
      <p className="text-lg text-center text-gray-700 max-w-2xl mx-auto mb-10">
        Welcome to Mahalakshmi Builders & Land Promoters. We are committed to
        providing top-notch real estate services, delivering high-quality
        buildings, and creating sustainable spaces. Our expertise in the
        industry ensures that our customers receive nothing but the best.
      </p>

      {/* Carousel Section */}
      <div className="relative overflow-hidden w-full max-w-4xl mx-auto">
  <motion.div
    className="flex space-x-4" 
    animate={{ x: ["0%", "-500%"] }} 
    transition={{ repeat: Infinity, duration: 80, ease: "linear" }}
  >
    {images.map((image, index) => (
      <div key={index} className="w-full flex-shrink-0">
        <img
          src={image}
          alt={`carousel-${index}`}
          className="w-full h-96 object-cover rounded-lg shadow-lg"
        />
      </div>
    ))}
  </motion.div>
</div>



      <h2 className="text-4xl font-bold text-center text-blue-900 mb-8">
        Contact Details
      </h2>

      <div className="bg-white shadow-lg rounded-lg p-6 text-center mx-auto w-full max-w-lg md:max-w-xl lg:max-w-2xl">
        {/* Company Name */}
        <div className="flex flex-col sm:flex-row sm:justify-between mb-4">
          <p className="text-base sm:text-lg text-gray-800 sm:mr-4">
            <strong>Company Name:</strong>
          </p>
          <p className="text-base sm:text-lg text-gray-800 font-semibold">
            Mahalakshmi Builders & Land Promoters
          </p>
        </div>

        {/* Location */}
        <div className="flex flex-col sm:flex-row sm:justify-between mb-4">
          <p className="text-base sm:text-lg text-gray-800 sm:mr-4">
            <strong>Location:</strong>
          </p>
          <a
            href="https://www.google.com/maps?q=+J+BLOCK,+16th+MAIN+ROAD,+ANNA+NAGAR+WEST,+TAMILNADU+CHENNAI+-+600+040"
            target="_blank"
            rel="noopener noreferrer"
            className="text-base sm:text-lg text-blue-600 hover:underline"
          >
            NO. 9/2, J BLOCK, 16th MAIN ROAD,
            <br />
            ANNA NAGAR WEST, TAMILNADU CHENNAI - 600 040
          </a>
        </div>

        {/* Email */}
        <div className="flex flex-col sm:flex-row sm:justify-between mb-4">
          <p className="text-base sm:text-lg text-gray-800 sm:mr-4">
            <strong>Email:</strong>
          </p>
          <a
            href="mailto:mahalakshmibuilders2002@gmail.com"
            className="text-base sm:text-lg text-blue-600 hover:underline"
          >
            mahalakshmibuilders2002@gmail.com
          </a>
        </div>

        {/* Contact Number */}
        <div className="flex flex-col sm:flex-row sm:justify-between mb-4">
          <p className="text-base sm:text-lg text-gray-800 sm:mr-4">
            <strong>Contact Number:</strong>
          </p>
          <a
            href="tel:04442801213"
            className="text-base sm:text-lg text-blue-600 hover:underline"
          >
            044 42801213
          </a>
        </div>
      </div>
    </div>
  );
}
