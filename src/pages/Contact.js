import React from 'react'
import bg from "../img/bg.png";

export default function Contact() {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-4 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundAttachment: "fixed", // Fixed for all views
      }}
    >
      <h2 className="text-4xl font-bold text-center text-blue-900 mb-8">
        Contact Details
      </h2>

      <div className="bg-white shadow-lg rounded-lg p-6 text-center mx-auto w-full max-w-lg md:max-w-xl lg:max-w-2xl">
        {/* Company Name */}
        <div className="flex flex-col sm:flex-row sm:justify-between mb-4">
          <p className="text-base sm:text-lg text-gray-800 sm:mr-4">
            <strong>Company Name:</strong>
          </p>
          <p className="text-base sm:text-lg text-gray-800 font-semibold">
            Mahalakshmi Builders & Land Promoters
          </p>
        </div>

        {/* Location */}
        <div className="flex flex-col sm:flex-row sm:justify-between mb-4">
          <p className="text-base sm:text-lg text-gray-800 sm:mr-4">
            <strong>Location:</strong>
          </p>
          <a
            href="https://www.google.com/maps?q=+J+BLOCK,+16th+MAIN+ROAD,+ANNA+NAGAR+WEST,+TAMILNADU+CHENNAI+-+600+040"
            target="_blank"
            rel="noopener noreferrer"
            className="text-base sm:text-lg text-blue-600 hover:underline"
          >
            NO. 9/2, J BLOCK, 16th MAIN ROAD,
            <br />
            ANNA NAGAR WEST, TAMILNADU CHENNAI - 600 040
          </a>
        </div>

        {/* Email */}
        <div className="flex flex-col sm:flex-row sm:justify-between mb-4">
          <p className="text-base sm:text-lg text-gray-800 sm:mr-4">
            <strong>Email:</strong>
          </p>
          <a
            href="mailto:mahalakshmibuilders2002@gmail.com"
            className="text-base sm:text-lg text-blue-600 hover:underline"
          >
            mahalakshmibuilders2002@gmail.com
          </a>
        </div>

        {/* Contact Number */}
        <div className="flex flex-col sm:flex-row sm:justify-between mb-4">
          <p className="text-base sm:text-lg text-gray-800 sm:mr-4">
            <strong>Contact Number:</strong>
          </p>
          <a
            href="tel:04442801213"
            className="text-base sm:text-lg text-blue-600 hover:underline"
          >
            044 42801213
          </a>
        </div>
      </div>
    </div>
  );
}
