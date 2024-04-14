import { Link } from "react-router-dom";
import React from "react";

export default function Login() {
  return (
    <div
      style={{
        backgroundImage: "url('/Background.svg')",
        backgroundSize: "cover",
        backgroundColor: "rgba(255, 255, 255, 0.5)", // Adjust opacity as needed
      }}
      className="flex justify-center items-center h-screen"
    >
      {/* Your login content goes here */}
      <div className="bg-white bg-opacity-70 rounded-md shadow-md flex w-1/2 mx-40">
        {/* Left Section */}
        <div className="flex flex-col justify-center items-center rounded-l-md p-10">
          <h2 className="font-extrabold text-lg mb-4">Welcome Back</h2>
          <div className="mb-10">
            <div className="border border-gray-400 rounded-md">
              <button className="flex items-center justify-center text-black font-medium rounded-md px-11 py-1 mb-1">
                <img
                  src="/GoogleLogo.svg"
                  className="w-8 h-8 mr-2"
                  alt="Google Icon"
                />
                Login with Google
              </button>
            </div>
          </div>
          <p className="text-gray-600 mb-2">OR LOGIN WITH EMAIL</p>
          <input
            type="text"
            className="border border-gray-400 rounded-md px-2 py-1 mb-2 w-64 outline-none"
            placeholder="Your Email"
          />
          <input
            type="password"
            className="border border-gray-400 rounded-md px-2 py-1 mb-3 w-64 outline-none"
            placeholder="Password"
          />
          <div className="flex items-center mb-3 mt-10">
            <input type="checkbox" className="mr-2 cursor-pointer" />
            <p className="text-sm">Keep me logged in</p>
            <a className="text-sm ml-3 underline text-blue">
              Forget password
            </a>
          </div>
          <button className="bg-blue-700 text-white font-bold rounded-md px-[105px] py-2 mb-3">
            Log in
          </button>
          <p className="text-sm mb-2">
            Don't have an account yet?{" "}
            <span className="text-blue-700 underline">Sign Up</span>
          </p>
          
        </div>

        {/* Right Section */}
        <div className="rounded-r-md w-1/2 flex justify-center items-center" ><img
                  src="/loginLeft.svg"
                  className="h-[400px] w-[400px] ml-16"
                  alt="Google Icon"
                /></div>
      </div>
    </div>
  );
}
