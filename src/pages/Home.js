import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center">
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-6 text-blue-900 animate-pulse">
          Welcome to Mahalakshmi Builders
        </h1>
        <p className="text-lg mb-8 text-gray-700">
          Building your dreams with excellence and integrity.
        </p>
        <Link
          to="/contact"
          className="bg-blue-900 text-white py-3 px-8 rounded-lg hover:bg-yellow-400 hover:text-blue-900 transition"
        >
          Get In Touch
        </Link>
      </div>
    </div>
  );
};

export default Home;
