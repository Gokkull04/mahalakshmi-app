import React from "react";
import companyImage1 from "../img/img1.jpeg";
import companyImage2 from "../img/img2.jpeg";
import companyImage3 from "../img/img3.jpeg";

const BuildedProjectsPage = () => {
  return (
    <div className="flex flex-col items-center space-y-4 mt-16">
      <h2 className="text-2xl font-bold text-blue-900 mb-4">
        Builded Projects
      </h2>

      <div className="flex flex-col space-y-4 items-center">
        {/* Project 1 */}
        <div className="bg-white shadow-lg rounded-lg p-4 w-full lg:w-3/4 flex flex-col lg:flex-row items-center justify-between mb-4 border border-gray-300 bg-opacity-60">
          <div className="flex-1 flex items-center justify-center">
            <p className="text-gray-700 text-lg p-4 text-center">
              <strong>Project: Luxury Residential Apartments</strong> <br />A
              high-end residential project designed for modern living,
              maximizing natural light and airflow.
            </p>
          </div>
          <div className="flex-1 hidden lg:flex items-center justify-center">
            <img
              src={companyImage1}
              alt="Luxury Residential Apartments"
              className="w-full h-64 object-cover rounded-lg"
            />
          </div>
        </div>

        {/* Project 2 */}
        <div className="bg-white shadow-lg rounded-lg p-4 w-full lg:w-3/4 flex flex-col lg:flex-row-reverse items-center justify-between mb-4 border border-gray-300 bg-opacity-60">
          <div className="flex-1 flex items-center justify-center">
            <p className="text-gray-700 text-lg p-4 text-center">
              <strong>Project: Modern Commercial Complex</strong> <br />A prime
              commercial development with premium office spaces.
            </p>
          </div>
          <div className="flex-1 hidden lg:flex items-center justify-center">
            <img
              src={companyImage2}
              alt="Modern Commercial Complex"
              className="w-full h-64 object-cover rounded-lg"
            />
          </div>
        </div>

        {/* Project 3 */}
        <div className="bg-white shadow-lg rounded-lg p-4 w-full lg:w-3/4 flex flex-col lg:flex-row items-center justify-between mb-4 border border-gray-300 bg-opacity-60">
          <div className="flex-1 flex items-center justify-center">
            <p className="text-gray-700 text-lg p-4 text-center">
              <strong>Project: Premium Villa Development</strong> <br />
              Premium villas with contemporary architecture and garden areas.
            </p>
          </div>
          <div className="flex-1 hidden lg:flex items-center justify-center">
            <img
              src={companyImage3}
              alt="Premium Villa Development"
              className="w-full h-64 object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuildedProjectsPage;
