"use client";
import React, { useState } from 'react';

const LoginSignUp = () => {
  const [isSignUp, setIsSignUp] = useState(true);

  return (
    <div className="min-h-screen">
      {/* Default Layout (Above 1024px) */}
      <div className="hidden lg:flex items-center justify-center px-6 md:px-12">
        <div className="w-full max-w-5xl flex overflow-hidden gap-40 items-stretch">
          {/* Left Section - Signup Form */}
          <div className="w-1/2 p-8 bg-white rounded-lg shadow-[0_4px_15px_rgba(0,0,0,0.3)] mb-4 mt-4 ml-4 h-auto">
            <h2 className="text-2xl font-bold text-[#009199] text-center">
              {isSignUp ? 'Create Account' : 'Login'}
            </h2>
            <p className="text-center text-[#8D8D8D] text-xs mb-6">
              Welcome! Join us and unlock exclusive insights, updates, and resources tailored just for you.
            </p>

            <form className="space-y-4">
              {isSignUp && (
                <div className="flex gap-4">
                  <div className="w-1/2">
                    <label className="block text-sm text-[#5B5B5B] mb-1">First name</label>
                    <input type="text" className="w-full px-4 py-1 border border-gray-300 rounded-md outline-none focus:ring-1 focus:ring-[#009199]" />
                  </div>
                  <div className="w-1/2">
                    <label className="block text-sm text-[#5B5B5B]  mb-1">Last name</label>
                    <input type="text" className="w-full px-4 py-1 border border-gray-300 rounded-md outline-none focus:ring-1 focus:ring-[#009199]" />
                  </div>
                </div>
              )}

              <div>
                <label className="block text-sm text-[#5B5B5B] mb-1">Email address</label>
                <input type="email" className="w-full px-4 py-1 border border-gray-300 rounded-md outline-none focus:ring-1 focus:ring-[#009199]" />
              </div>

              {isSignUp && (
                <div>
                  <label className="block text-sm text-[#5B5B5B]  mb-1">Username</label>
                  <input type="text" className="w-full px-4 py-1 border border-gray-300 rounded-md outline-none focus:ring-1 focus:ring-[#009199]" />
                </div>
              )}

              <div>
                <label className="block text-sm text-[#5B5B5B]  mb-1">Password</label>
                <input type="password" placeholder='********' className="w-full px-4 py-2 border border-gray-300 rounded-md outline-none focus:ring-1 focus:ring-[#009199]" />
              </div>

              <button type="submit" className="w-full bg-[#009199] text-white py-2 rounded-md">
                {isSignUp ? 'Login' : 'Login'}
              </button>

              <div className="flex items-center justify-center my-4">
                <div className="w-1/3 h-px bg-gray-300"></div>
                <p className="px-2 text-gray-500 text-sm">or</p>
                <div className="w-1/3 h-px bg-gray-300"></div>
              </div>

              <button type="button" className="w-full flex items-center justify-center border px-4 py-2 rounded-md text-[#5B5B5B]">
                <img src="/Header/Google.svg" alt="Google" className="h-5 w-5 mr-2" />
                Sign up with Google
              </button>
            </form>
          </div>

          {/* Right Section - Welcome Message */}
          <div className="w-1/2 bg-[#009199] flex items-center justify-center flex-col text-white p-4 h-auto rounded-l-2xl rounded-r-none relative"
            style={{ backgroundImage: "url('/Header/top.png'), url('/Header/bottom.png')", backgroundPosition: "top right, bottom left", backgroundRepeat: "no-repeat, no-repeat", backgroundSize: "contain, contain" }}>
            <h2 className="text-3xl font-bold mb-4">Hello, Friend!</h2>
            <p className="text-center text-[##FFFFFF] text-s mb-6 ">Enter your personal details and start your journey with us</p>
            <button onClick={() => setIsSignUp(!isSignUp)} className="bg-white text-[#009199] px-6 py-2 rounded-md">
              {isSignUp ? 'Log In' : 'Sign Up'}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Layout (Below 1024px) */}
      <div className="block lg:hidden min-h-screen flex flex-col items-center justify-between px-6 bg-[#009199] overflow-hidden relative">
  <div className="absolute top-0 right-0 w-80 h-60 bg-[url('/Header/mtop.png')] bg-no-repeat bg-contain"></div>

  <div className="absolute w-[100%] h-[30%]  bg-[url('/Header/mbottom.png')] bg-no-repeat bg-contain
                  bottom-0 left-0 md:w-[50%] md:h-[40%]
                  sm:w-[50%] sm:h-[30%]"></div>

  <div className="flex-grow flex flex-col items-center justify-center w-full">
    <h2 className="text-2xl font-bold text-white text-center mt-24 mb-2">Welcome Back!</h2>
    <p className="text-center text-white text-sm mb-6 max-w-md px-4">
      We're glad to have you here. Explore the latest updates, insights, and resources to stay ahead.
    </p>

    <div className="w-full max-w-xs bg-white p-6 rounded-lg shadow-lg mb-20">
      <h2 className="text-2xl font-bold text-[#009199] text-center mb-4">Login your Account</h2>
      <form className="space-y-4">
        <div>
          <label className="block text-sm text-gray-600 mb-1">Username</label>
          <input
            type="text"
            className="w-full px-4 py-2 border border-gray-300 rounded-md outline-none focus:ring-1 focus:ring-[#009199]"
          />
        </div>

        <div>
          <label className="block text-sm text-gray-600 mb-1">Password</label>
          <input
            type="password"
            className="w-full px-4 py-2 border border-gray-300 rounded-md outline-none focus:ring-1 focus:ring-[#009199]"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-[#009199] text-white py-2 rounded-md"
        >
          Login
        </button>

        <div className="flex items-center justify-center my-4">
          <div className="w-1/3 h-px bg-gray-300"></div>
          <p className="px-2 text-gray-500 text-sm">or</p>
          <div className="w-1/3 h-px bg-gray-300"></div>
        </div>

        <button
          type="button"
          className="w-full flex items-center justify-center border px-4 py-2 rounded-md"
        >
          <img
            src="/Header/Google.svg"
            alt="Google"
            className="h-5 w-5 mr-2"
          />
          Log in With Google
        </button>

        <p className="text-center text-sm mt-4">
          Don't have an account?{" "}
          <span className="text-[#009199] font-bold">Sign up</span>
        </p>
      </form>
    </div>
  </div>
</div>


    </div>
  );
};

export default LoginSignUp;
