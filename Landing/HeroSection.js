import React from "react";
export default function HeroSection() {
  return (
    <div className="h-screen relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/HeroSection/heroSecBg.png"
          alt="Background"
          className="w-full h-[90%] object-cover"
        />
      </div>

      {/* Content container */}
      <div className="relative z-10 pt-24 pb-40 px-4 max-w-4xl mx-auto flex flex-col items-center">
        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
          <span className="text-gray-800">Accurate</span>
          <span className="text-teal-500"> Email Verifier</span>
        </h1>

        {/* Subheading */}
        <p className="text-gray-600 text-center max-w-xl mb-10">
          Lorem ipsum dolor sit amet consectetur. Non adipiscing sem eu quis.
          Duis viverra sapien adipiscing velit venenatis praesent
        </p>

        {/* Email verification form */}
        <div className="w-full max-w-xl">
          <div className="flex rounded-lg overflow-hidden border border-gray-200 bg-white">
            <input
              type="text"
              placeholder="Enter an email address to verify it"
              className="flex-grow px-4 py-3 outline-none"
            />
            <button className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 font-medium transition">
              Verify
            </button>
          </div>

          {/* Additional text */}
          <p className="text-sm text-gray-500 mt-2 text-center">
            You can enter multiple email addresses, separated by commas
          </p>

          {/* Upload link */}
          <div className="mt-4 flex justify-center">
            <a
              href="#"
              className="text-teal-500 hover:text-teal-600 flex items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-1"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
              Upload
              <span className="ml-1">your list for bulk verification</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
