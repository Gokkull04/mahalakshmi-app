import React from "react";
import { Link } from "react-router-dom";
import logo from "../img/logo.png"

const Home = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center px-4">
      <div className="text-center"> 
        <img src={logo} alt="img" className="rounded-full"></img>
        {/* Responsive Heading */}
        <h1 className="text-3xl sm:text-5xl font-bold mb-6 text-blue-900 animate-pulse">
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
