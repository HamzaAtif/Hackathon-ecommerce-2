import Image from "next/image";
import React from "react";
import { appostraphe } from "../index";

const JoinUs = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="w-full max-w-md space-y-6 text-center">
        {/* Nike Logo */}
        <Image
          src="/nike-logo.PNG"
          alt="Nike Logo"
          width={48}
          height={48}
          className="mx-auto"
        />

        {/* Title */}
        <h1 className="text-xl font-bold text-gray-900 text-[18px]">
          BECOME A NIKE MEMBER
        </h1>

        {/* Subtitle */}
        <p className="text-gray-600 w-[282.08px] h-[60px] text-[14px] relative left-20">
          Create your Nike Member profile and get first access to the very best
          of Nike products, inspiration, and community.
        </p>

        {/* Form */}
        <form className="space-y-4">
          <input
            type="email"
            placeholder="Email address"
            className="w-[324px] h-[40px] px-4 py-2 border border-gray-300 rounded-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-black"
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="w-[324px] h-[40px] px-4 py-2 border border-gray-300 rounded-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-black"
            required
          />
          <input
            type="text"
            placeholder="First Name"
            className="w-[324px] h-[40px] px-4 py-2 border border-gray-300 rounded-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-black"
            required
          />
          <input
            type="text"
            placeholder="Last Name"
            className="w-[324px] h-[40px] px-4 py-2 border border-gray-300 rounded-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-black"
            required
          />
          <div>
            <input
              type="date"
              placeholder="Date of Birth"
              className="w-[324px] h-[40px] px-4 py-2 border border-gray-300 rounded-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-black"
              required
            />
            <p className="text-xs text-gray-500 mt-1">
              Get a Nike Member Reward every year on your Birthday.
            </p>
          </div>
          <select
            className="w-[324px] h-[40px] px-4 py-2 border border-gray-300 rounded-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-black"
            required
          >
            <option value="India">India</option>
            {/* Add more countries here as needed */}
          </select>

          {/* Gender */}
          <div className="flex space-x-4 w-[324px] h-[40px] ml-[62px]">
            <button
              type="button"
              className="w-1/2 px-4 py-2 border border-gray-300 rounded-sm text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-black"
            >
              Male
            </button>
            <button
              type="button"
              className="w-1/2 px-4 py-2 border border-gray-300 rounded-sm text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-black"
            >
              Female
            </button>
          </div>

          {/* Email Updates */}
          <div className="flex items-center space-x-2 ml-20">
            <input
              type="checkbox"
              id="email-updates"
              className="h-[20px] w-[20px] text-black border-gray-300 rounded focus:ring-black"
            />
            <label
              htmlFor="email-updates"
              className="text-[11px] text-gray-500 w-[247px] h-[28px]"
            >
              Sign up for emails to get updates from Nike on products, offers
              and your Member benefits.
            </label>
          </div>

          {/* Agreement */}
          <p className="text-xs text-gray-600 w-[309.31px] h-[30px] ml-[62px]">
            By creating an account, you agree to Nike{appostraphe}s{" "}
            <a href="#" className=" font-medium underline">
              Privacy Policy
            </a>{" "}
            and{" "}
            <a href="#" className="font-medium underline">
              Terms of Use
            </a>
            .
          </p>

          {/* Join Us Button */}
          <button
            type="submit"
            className="w-[324px] h-[40px] py-3 text-white bg-black rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
          >
            JOIN US
          </button>
        </form>

        {/* Already a Member */}
        <p className="text-[11px] w-[148.95px] h-[14px] text-gray-600 ml-[152px]">
          Already a Member?{" "}
  <a
  href="/Sign-in"
   className="text-black font-medium underline">Sign In.</a>

        </p>
      </div>
    </div>
  );
};

export default JoinUs;
