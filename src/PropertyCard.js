import React from "react";
import maha0 from './img/maha-0.jpg'
import maha1 from './img/maha-1.jpg'

const PropertyCard = () => {
  return (
    <div className="bg-white rounded-lg shadow-lg w-96 p-6 relative">
      {/* Social Media Icons */}
      <div className="absolute top-4 right-4 flex space-x-2">
        <a href="#" className="text-gray-600 hover:text-gray-800">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="#" className="text-gray-600 hover:text-gray-800">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="#" className="text-gray-600 hover:text-gray-800">
          <i className="fab fa-instagram"></i>
        </a>
      </div>

      {/* Main Content */}
      <h2 className="text-3xl font-extrabold mb-4">MAHALAKSHMI Builders and Promoters</h2>
      
      {/* Property Image */}
      <div className="relative mb-6">
        <img
          src={maha0}
          alt="Property"
          className="w-full h-40 object-cover rounded-md"
        />
        <div className="absolute -bottom-8 left-4 w-16 h-16 rounded-full overflow-hidden border-4 border-white shadow-md">
          <img
            src={maha1}
            alt="Room"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Features List */}
      <ul className="mt-10 mb-6 text-gray-700">
        <li className="flex items-center mb-2">
          <span className="w-2 h-2 bg-gray-800 rounded-full mr-2"></span>5 Bedrooms
        </li>
        <li className="flex items-center mb-2">
          <span className="w-2 h-2 bg-gray-800 rounded-full mr-2"></span>Living Rooms
        </li>
        <li className="flex items-center mb-2">
          <span className="w-2 h-2 bg-gray-800 rounded-full mr-2"></span>Kitchen Rooms
        </li>
        <li className="flex items-center">
          <span className="w-2 h-2 bg-gray-800 rounded-full mr-2"></span>Swimming Pool
        </li>
      </ul>

      {/* Price and Contact Info */}
      <div className="border-t pt-4">
        <p className="text-2xl font-bold text-brown-600 mb-2">Price: $35,000</p>
        <div className="text-gray-600">
          <p>More Info:</p>
          <a href="tel:+01234567890" className="text-gray-800 font-semibold hover:text-gray-600">
            +0123 456 7890
          </a>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
