import React from "react";

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-4">
      <div className="container mx-auto text-center px-4">
        <p className="text-sm sm:text-base">
          &copy; {new Date().getFullYear()} Mahalakshmi Builders and
          Enterprises.
          <span className="block sm:inline"> All rights reserved.</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
