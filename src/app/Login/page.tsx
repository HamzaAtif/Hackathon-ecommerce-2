import Image from "next/image";
import Link from "next/link";
import React from "react";

const Login = () => {
  return (
    <div className="flex items-center justify-center bg-white mb-[100px] mt-[30px] px-4 sm:px-6 lg:px-8 ml-[70px]">
      <div className="w-full max-w-md space-y-8 mb-">
        {/* Nike Logo */}
        <div className="text-center mr-[140px]">
          <Image
            className="mx-auto"
            src={"/nike-logo.PNG"}
            alt="nike-logo"
            width={90}
            height={0}
          />
          <h2 className=" mx-auto mt-10 font-bold text-gray-900 text-center w-[186.5px] h-[57px] text-[18px]">
            YOUR ACCOUNT FOR EVERYTHING NIKE
          </h2>
        </div>

        {/* Login Form */}
        <form className="space-y-6">
          {/* Email and Password Fields */}
          <div className="space-y-4">
            <div>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                required
                className="w-[324px] h-[40px] appearance-none rounded-sm block px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-black focus:border-black sm:text-sm"
                placeholder="Email address"
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                className=" w-[324px] h-[40px]  appearance-none rounded-sm block px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-black focus:border-black sm:text-sm"
                placeholder="Password"
              />
            </div>
          </div>

          {/* Remember Me and Forgot Password */}
          <div className="flex items-center justify-between">
            <div className="flex items-center w-[162px] h-[20px] mb-2">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-gray-600 focus:ring-black border-gray-300 rounded"
              />
              <label
                htmlFor="remember-me"
                className="ml-2 text-sm text-gray-600"
              >
                Keep me signed in
              </label>
            </div>
            <div className="w-[169.61px] h-[14px] mb-[20px] relative left-[-90px]">
            <Link href="#" className="text-sm font-medium text-gray-600 text-[16px]">
              Forgotten your password?
            </Link>
            </div>
          </div>

          {/* Privacy Policy */}
          <p className="text-center text-sm text-gray-600 text-[12px] w-[279.31px] h-[30px] mx-auto  relative left-[-60px]">
            By logging in, you agree to Nike{" "}
            <Link href="#" className="font-normal hover:text-gray-700">
              Privacy Policy
            </Link>{" "}
            and{" "}
            <Link href="#" className="font-normal">
              Terms of Use
            </Link>
            .
          </p>

          {/* Sign-In Button */}
          <button
            type="submit"
            className="mt-12 w-[324px] h-[40px] flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-sm text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
          >
            Sign In
          </button>

          {/* Join Us */}
          <p className="text-center text-gray-600 text-sm relative right-[50px]">
            Not a Member?{" "}
            <Link href="/Join-us" className="font-medium text-black underline">
              Join Us.
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
