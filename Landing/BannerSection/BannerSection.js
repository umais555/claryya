"use client";

const BannerSection = () => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 max-w-[1100px] mx-auto my-8">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <p className="text-gray-800 text-lg md:text-xl font-medium">
          <span className="text-[#009199] font-bold">Stop</span> Worrying About<br />
          Email <span className="text-[#009199]">Deliverability</span>.
        </p>
        <button className="bg-[#009199] text-white px-5 py-2 rounded-md mt-4 md:mt-0">
          Sign Up Now
        </button>
      </div>
    </div>
  );
};

export default BannerSection;
