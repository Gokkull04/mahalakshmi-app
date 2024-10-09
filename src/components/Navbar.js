import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion"; // Import Framer Motion
import logo from "../img/Mahalakshmi logo.png";

// Animation variants for the mobile menu
const menuAnimation = {
  hidden: { opacity: 0, height: 0 },
  visible: {
    opacity: 1,
    height: "auto",
    transition: { duration: 0.5, ease: "easeInOut" },
  },
  exit: {
    opacity: 0,
    height: 0,
    transition: { duration: 0.5, ease: "easeInOut" },
  },
};

// Animation variants for the burger icon (open/close)
const burgerAnimation = {
  closed: { rotate: 0, opacity: 1 },
  opened: { rotate: 45, opacity: 1, transition: { duration: 0.3 } },
  exit: { rotate: 0, opacity: 1, transition: { duration: 0.3 } },
};

const Navbar = () => {
  // State to toggle mobile menu visibility
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-900 text-white shadow-lg">
      <div className="container mx-auto flex justify-between items-center py-2 px-2">
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
            {/* Animated burger icon */}
            <motion.svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              initial="closed"
              animate={isOpen ? "opened" : "closed"}
              variants={burgerAnimation}
            >
              <motion.path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
                variants={{
                  closed: { opacity: 1, rotate: 0 },
                  opened: { opacity: 0, rotate: 45 },
                }}
              ></motion.path>
              <motion.path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 18h16"
                variants={{
                  closed: { opacity: 1 },
                  opened: { opacity: 0 },
                }}
              ></motion.path>
            </motion.svg>
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
          <li>
            <Link to="/contact" className="hover:text-yellow-400 transition">
              Contact
            </Link>
          </li>
        </ul>
      </div>

      {/* Mobile menu with smooth slide-down animation */}
      <motion.div
        className="lg:hidden bg-blue-900"
        initial="hidden"
        animate={isOpen ? "visible" : "hidden"}
        exit="exit"
        variants={menuAnimation}
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
          <li>
            <Link
              to="/contact"
              className="block text-white hover:text-yellow-400 transition"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </li>
        </ul>
      </motion.div>
    </nav>
  );
};

export default Navbar;
