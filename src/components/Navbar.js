import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../img/Mahalakshmi logo.png";

const Navbar = () => {
  // State to toggle mobile menu visibility
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-900 text-white shadow-lg">
      <div className="container mx-auto flex justify-between items-center py-2 px-6">
        {/* Logo */}
        <div>
          <Link to="/">
            <img src={logo} alt="logo" className="h-14 w-auto " />
          </Link>
        </div>

        {/* Burger Menu (mobile view) */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            {/* Icon for menu */}
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>

        {/* Links for larger screens */}
        <ul className="hidden lg:flex space-x-6">
          <li>
            <Link to="/" className="hover:text-yellow-400 transition">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-yellow-400 transition">
              About
            </Link>
          </li>
        </ul>
      </div>

      {/* Mobile menu (slide down on smaller screens) */}
      <div
        className={`lg:hidden transition-all duration-500 ease-in-out transform ${
          isOpen ? "max-h-full" : "max-h-0"
        } overflow-hidden bg-blue-900`}
      >
        <ul className="flex flex-col space-y-4 p-4">
          <li>
            <Link
              to="/"
              className="block text-white hover:text-yellow-400 transition"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="block text-white hover:text-yellow-400 transition"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
