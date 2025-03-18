'use client';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTimes } from 'react-icons/fa';

const BannerFooterSection = () => {
  return (
    <div className="w-full">
      {/* ✅ Banner Section with Background on Banner Only */}
   {/* ✅ Banner Section with Background Image */}
   <div 
  className="relative w-full max-w-[90%]  mx-auto -mb-18 z-10 rounded-md overflow-hidden shadow-lg"
  style={{
    backgroundImage: "url('/Footer/background.png')",
   
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '150px' // Adjust height as per your desired size
  }}
>
  <div className="flex items-center justify-between px-6 py-4 h-full">
    <div className="text-lg sm:text-xl md:text-2xl font-medium text-gray-800">
      <span className="text-[#009199] font-bold">Stop</span> Worrying About
      Email <span className="text-[#009199]">Deliverability.</span>
    </div>
   <button
    className="bg-[#009199] text-white px-4 py-2 rounded-md text-sm cursor-pointer hover:bg-[#007f7f] transition"
    onClick={() => alert('Sign Up Now clicked!')}>
      Sign Up Now
    </button>
  </div>
</div>



      {/* ✅ Footer Section */}
      <footer className="bg-[#009199] text-white py-12 px-6 pt-30">
        <div className="max-w-[1240px] mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* ✅ Left Side: Logo, Text, and Social Icons */}
          <div className="col-span-2 space-y-3 flex flex-col items-center text-center md:items-start md:text-left">
            <h2 className="text-xl md:text-3xl font-bold">Logo</h2>
            <p className="font-bold text-base md:text-sm">Join Our Socials Platforms</p>
            <p className="text-sm md:text-xs text-white/80 max-w-[550px]">
              Find answers to common questions about our email verification tool, 
              how it works, and how it helps improve your email deliverability.
            </p>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 md:w-7 md:h-7 flex items-center justify-center bg-white text-[#009199] rounded-full cursor-pointer">
                <FaFacebookF />
              </div>
              <div className="w-8 h-8 md:w-7 md:h-7 flex items-center justify-center bg-white text-[#009199] rounded-full cursor-pointer">
                <FaInstagram />
              </div>
              <div className="w-8 h-8 md:w-7 md:h-7 flex items-center justify-center bg-white text-[#009199] rounded-full cursor-pointer">
                <FaLinkedinIn />
              </div>
              <div className="w-8 h-8 md:w-7 md:h-7 flex items-center justify-center bg-white text-[#009199] rounded-full cursor-pointer">
                <FaTimes />
              </div>
            </div>
          </div>

          {/* ✅ Right Side: Links Section (Hidden on Mobile) */}
          <div className="col-span-3 grid grid-cols-2 sm:grid-cols-4 gap-8 hidden md:grid">
            <div>
              <h3 className="font-bold mb-2 text-base md:text-sm">Company</h3>
              <ul className="space-y-3">
              <li className="text-sm lg:text-sm md:text-[13px]">About</li>
<li className="text-sm lg:text-sm md:text-[13px]">Features</li>
<li className="text-sm lg:text-sm md:text-[13px]">Works</li>
<li className="text-sm lg:text-sm md:text-[13px]">Career</li>

              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-2 text-base md:text-sm">Help</h3>
              <ul className="space-y-3">
                <li className="text-sm lg:text-sm md:text-[13px]">Customer Support</li>
                <li className="text-sm lg:text-sm md:text-[13px]">Delivery Details</li>
                <li className="text-sm lg:text-sm md:text-[13px]">Terms & Conditions</li>
                <li className="text-sm lg:text-sm md:text-[13px]">Privacy Policy</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-2 text-base md:text-sm">Resources</h3>
              <ul className="space-y-3">
                <li className="text-sm lg:text-sm md:text-[13px]">Email Deliverability Month</li>
                <li className="text-sm lg:text-sm md:text-[13px]">Knowledgebase</li>
                <li className="text-sm lg:text-sm md:text-[13px]">How to - Blog</li>
                <li className="text-sm lg:text-sm md:text-[13px]">Case Studies</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-2 text-base md:text-sm">Links</h3>
              <ul className="space-y-3">
                <li className="text-sm lg:text-sm md:text-[13px]">Free eBooks</li>
                <li className="text-sm lg:text-sm md:text-[13px]">Development Tutorial</li>
                <li className="text-sm lg:text-sm md:text-[13px]">How to - Blog</li>
                <li className="text-sm lg:text-sm md:text-[13px]">Youtube Playlist</li>
              </ul>
            </div>
          </div>
        </div>

        {/* ✅ Dotted Line and Copyright */}
        <div className="mt-6 border-t border-dotted border-white/40 pt-4 text-center text-xs md:text-[10px]">
          ©Copyright 2024 Lorem Ipsum. All Rights Reserved.
        </div>
      </footer>
    </div>
  );
};

export default BannerFooterSection;
