import React from "react";
import { Link } from "react-router-dom";
import logo from "../img/Mahalakshmi logo.png";

const Navbar = () => {
  return (
    <nav className="bg-blue-900 text-white shadow-lg">
      <div className="container mx-auto flex justify-between items-center py-2 px-6">
        <div className="">
          <Link to="/"><img src={logo} alt="logo" className="h-14 w-full"></img></Link>
        </div>
        <ul className="flex space-x-6">
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
    </nav>
  );
};

export default Navbar;
