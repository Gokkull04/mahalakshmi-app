import React from "react";
import { Link } from "react-router-dom";
import bg from "../img/bg.png";
import logo from "../img/logo.png"

const Home = () => {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-4 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundAttachment: "fixed", // Fixed for all views
      }}
    >
      <div className="text-center">
        <img
          src={logo}
          alt="logo"
          className="w-full h-auto max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl mx-auto"
        />

        {/* Responsive Heading */}
        <h1 className="text-3xl sm:text-5xl font-bold mb-6 text-pink-500 animate-pulse mt-4">
          Welcome to Mahalakshmi <br /> Builders and Land Promoters
        </h1>
        {/* Responsive Paragraph */}
        <p className="text-base sm:text-lg mb-8 text-gray-700">
          Building your dreams with excellence and integrity.
        </p>
        {/* Responsive Button */}
        <Link
          to="/about"
          className="bg-blue-900 text-white py-2 sm:py-3 px-6 sm:px-8 rounded-lg hover:bg-yellow-400 hover:text-blue-900 transition"
        >
          Get In Touch
        </Link>
      </div>
    </div>
  );
};

export default Home;
