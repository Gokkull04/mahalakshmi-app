import React from 'react';
import { MdEmail, MdPhone } from 'react-icons/md';
import { FaCheck } from 'react-icons/fa';

function PropertyCard() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Gray Background Section */}
      <div className="bg-gray-200 w-full flex-grow">
        {/* Add any additional content here if needed */}
      </div>

      {/* Footer Section */}
      <div className="bg-white text-black py-6 px-6 flex flex-col items-center w-full">
        {/* Land Features Section */}
        <div className="mb-4 w-full max-w-4xl flex justify-end">
          <div className="text-right">
            <h2 className="text-2xl font-bold">Land Features</h2>
            <ul className="mt-4 space-y-2 list-disc list-inside">
              <li className="flex items-center">
                <div className="relative w-8 h-8 flex items-center justify-center">
                  <div className="w-full h-full border-2 border-[#0ef] rounded-full flex items-center justify-center">
                    <FaCheck className="text-black" style={{ fontSize: '1.25rem' }} />
                  </div>
                </div>
                <span className="ml-2">CMDA and RERA Approved</span>
              </li>
              <li className="flex items-center">
                <div className="relative w-8 h-8 flex items-center justify-center">
                  <div className="w-full h-full border-2 border-[#0ef] rounded-full flex items-center justify-center">
                    <FaCheck className="text-black" style={{ fontSize: '1.25rem' }} />
                  </div>
                </div>
                <span className="ml-2">Free Patta Registration</span>
              </li>
              <li className="flex items-center">
                <div className="relative w-8 h-8 flex items-center justify-center">
                  <div className="w-full h-full border-2 border-[#0ef] rounded-full flex items-center justify-center">
                    <FaCheck className="text-black" style={{ fontSize: '1.25rem' }} />
                  </div>
                </div>
                <span className="ml-2">90% Bank Loan Available</span>
              </li>
              <li className="flex items-center">
                <div className="relative w-8 h-8 flex items-center justify-center">
                  <div className="w-full h-full border-2 border-[#0ef] rounded-full flex items-center justify-center">
                    <FaCheck className="text-black" style={{ fontSize: '1.25rem' }} />
                  </div>
                </div>
                <span className="ml-2">Spot Booking Rs 1000 only</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="flex items-center justify-between w-full max-w-4xl mt-4" style={{ gap: '8rem' }}>
          {/* Phone Number Section */}
          <a href="tel:+919994873204" className="flex items-center text-black py-2 px-4 rounded hover:text-gray-600">
            <MdPhone className="h-10 w-10 mr-4" />
            <div className="flex flex-col">
              <span className="text-base">More information call us</span>
              <span className="text-sm">+91 9994873204</span>
            </div>
          </a>

          {/* Book Now Button */}
          <button className="bg-black text-white border-white border-2 py-2 px-4 rounded hover:bg-white hover:text-black hover:border-black">
            Book Now
          </button>

          {/* Email Section */}
          <a href="mailto:info@example.com" className="flex items-center text-black py-2 px-4 rounded hover:text-gray-600">
            <MdEmail className="h-10 w-10 mr-4" />
            <div className="flex flex-col">
              <span className="text-base">EMAIL US</span>
              <span className="text-sm">emmanuelsk04@gmail.com</span>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default PropertyCard;
