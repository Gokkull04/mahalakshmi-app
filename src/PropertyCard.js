import React from 'react';
import maha_img from './/img/maha-img.webp';
import { MdEmail, MdPhone } from 'react-icons/md';
import { FaCheck } from 'react-icons/fa';

function PropertyCard() {
  return (
    <div className="min-h-screen flex flex-col relative">
      {/* Pink Div Positioned Over Gray Background */}
      <div className="absolute top-0 left-0 bg-pink-500 text-white p-4 flex flex-col items-start w-full z-20">
        {/* Text in Pink Div */}
        <span className="text-2xl font-bold text-left" style={{ fontFamily: 'Orbitron, sans-serif' }}>MAHALAKSHMI</span>
        <span className="text-lg font-medium text-left mt-2" style={{ fontFamily: 'Orbitron, sans-serif' }}>Builders and Land Promoters</span>
      </div>

      {/* Gray Background Section */}
      <div className="bg-gray-200 w-full flex-grow relative z-0">
        {/* Blue Gradient Div Positioned Over Gray and Above Black Div */}
        <div
          className="absolute top-44 left-0 bg-gradient-to-r from-blue-500 via-blue-700 to-blue-900 text-white p-4 flex flex-col items-start w-full z-10"
        >
          {/* Main Text */}
          <span className="text-3xl font-bold text-left" style={{ fontFamily: 'Orbitron, sans-serif' }}>EXCLUSIVE</span>
          <span className="text-3xl font-bold text-left mt-2" style={{ fontFamily: 'Orbitron, sans-serif' }}>PLOTS</span>
          <span className="text-3xl font-bold text-left mt-2" style={{ fontFamily: 'Orbitron, sans-serif' }}>FOR SALE</span>

          {/* White Line Below the Three-Line Text */}
          <div className="border-b-2 border-white my-4 w-44"></div>

          {/* Additional Text Below the White Line */}
          <div className="flex flex-col items-start">
            <span className="text-md font-bold text-left">VIJAY NAGAR @</span>
            <span className="text-md font-bold text-left">THIRUMULLAIVOYAL</span>
          </div>
        </div>

        {/* Image Positioned Over Gray Div */}
        <img
          src={maha_img}  // Replace with your image path
          alt="Description"
          className="absolute top-1/2 right-0 w-1/4 z-30 object-cover"
          style={{ transform: 'translateY(-50%)' }}
        />
      </div>

      {/* Black Pricing Section with Continuous Angled Border Effect */}
      <div className="absolute left-0 bg-black text-white p-4 flex flex-col items-center max-w-xs relative z-5 border-black border-[4px] border-solid" style={{ top: '50%' }}>
        <div className="flex flex-col justify-center items-center">
          <span className="text-lg font-semibold text-center">PRICE STARTS FROM</span>
          <span className="text-2xl font-bold mt-1 text-center">₹16,20,000</span>
        </div>

        {/* Continuous Angled Border Effect */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-0 h-0 border-t-[4px] border-t-black border-r-[4px] border-r-transparent"></div>
          <div className="absolute bottom-0 right-0 w-0 h-0 border-b-[4px] border-b-black border-l-[4px] border-l-transparent"></div>
        </div>
      </div>

      {/* Footer Section */}
      <div className="bg-white text-black py-6 px-6 flex flex-col items-center w-full relative z-0">
        {/* Land Features Section */}
        <div className="mb-4 w-full max-w-4xl">
          <h2 className="text-2xl font-bold text-right pr-80">Land Features</h2>
          <div className="mt-4 flex justify-end">
            <div className="flex flex-col">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 flex items-center justify-center">
                  <div className="w-full h-full border-2 border-[#0ef] rounded-full flex items-center justify-center">
                    <FaCheck className="text-black" style={{ fontSize: '1.25rem' }} />
                  </div>
                </div>
                <span className="ml-2">CMDA and RERA Approved</span>
              </div>
              <div className="flex items-center">
                <div className="w-8 h-8 flex items-center justify-center">
                  <div className="w-full h-full border-2 border-[#0ef] rounded-full flex items-center justify-center">
                    <FaCheck className="text-black" style={{ fontSize: '1.25rem' }} />
                  </div>
                </div>
                <span className="ml-2">Free Patta Registration</span>
              </div>
            </div>
            <div className="flex flex-col ml-20">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 flex items-center justify-center">
                  <div className="w-full h-full border-2 border-[#0ef] rounded-full flex items-center justify-center">
                    <FaCheck className="text-black" style={{ fontSize: '1.25rem' }} />
                  </div>
                </div>
                <span className="ml-2">90% Bank Loan Available</span>
              </div>
              <div className="flex items-center">
                <div className="w-8 h-8 flex items-center justify-center">
                  <div className="w-full h-full border-2 border-[#0ef] rounded-full flex items-center justify-center">
                    <FaCheck className="text-black" style={{ fontSize: '1.25rem' }} />
                  </div>
                </div>
                <span className="ml-2">Spot Booking Rs 1000 only</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="flex items-center justify-between w-full max-w-4xl mt-4" style={{ gap: '8rem' }}>
          {/* Phone Number Section */}
          <div className="flex items-center text-black py-2 px-4">
            <MdPhone className="h-10 w-10 mr-4" />
            <div className="flex flex-col">
              <span className="text-base">More information call us</span>
              <a
                href="tel:+919994873204"
                className="text-sm text-black hover:text-gray-600 cursor-pointer"
              >
                +91 9994873204
              </a>
            </div>
          </div>

          {/* Book Now Button */}
          <button className="bg-black text-white border-white border-2 py-2 px-4 rounded hover:bg-white hover:text-black hover:border-black">
            Book Now
          </button>

          {/* Email Section */}
          <div className="flex items-center text-black py-2 px-4">
            <MdEmail className="h-10 w-10 mr-4" />
            <div className="flex flex-col">
              <span className="text-base">EMAIL US</span>
              <a
                href="mailto:info@example.com"
                className="text-sm text-black hover:text-gray-600 cursor-pointer"
              >
                emmanuelsk04@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PropertyCard;
