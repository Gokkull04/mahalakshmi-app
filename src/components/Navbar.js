import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-900 text-white shadow-lg">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <div className="text-2xl font-bold">
          <Link to="/">Mahalakshmi Builders</Link>
        </div>
        <ul className="flex space-x-6">
          <li>
            <Link to="/" className="hover:text-yellow-400 transition">
              Home
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-yellow-400 transition">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
