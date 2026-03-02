import React from "react";

const Maintenance = () => {
  return (
    <div className="flex items-center justify-center min-h-screen p-6 text-white bg-gray-900">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold text-orange-500 md:text-6xl">
          We’ll Be Back Soon!
        </h1>
        <p className="mb-6 text-lg text-gray-300 md:text-xl">
          Our site is currently undergoing scheduled maintenance.
        </p>
      </div>
    </div>
  );
};

export default Maintenance;
