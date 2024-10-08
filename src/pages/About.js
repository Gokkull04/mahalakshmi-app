// src/pages/AboutPage.js
import React from "react";
import { Link, Outlet } from "react-router-dom";

const AboutPage = () => {
  return (
    <div className="mt-16">
      <h1 className="text-3xl font-bold text-center text-blue-900 mb-8">
        About Us
      </h1>

      {/* Sub-Navbar for Plots and Builded Projects */}
      <nav className="flex justify-center space-x-4 mb-6">
        <Link
          to="plots"
          className="px-4 py-2 bg-gray-200 text-blue-900 rounded-lg"
        >
          Plots
        </Link>
        <Link
          to="builded-projects"
          className="px-4 py-2 bg-gray-200 text-blue-900 rounded-lg"
        >
          Builded Projects
        </Link>
      </nav>

      {/* Outlet to display nested routes */}
      <Outlet />
    </div>
  );
};

export default AboutPage;
