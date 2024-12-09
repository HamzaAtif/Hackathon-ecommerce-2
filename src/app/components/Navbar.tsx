import Image from "next/image";

export default function Navbar() {
  return (
    <div className="mb-10">
      {/* Top Banner */}
      <div className="bg-[#F5F5F5] flex justify-between items-center px-4 py-2">
        {/* Left Section - Icon */}
        <div className="flex items-center">
          <Image
            src={"/basket-man.PNG"}
            alt="Basketball Man Icon"
            width={24}
            height={24}
            className="h-[24px] w-[24px]"
          />
        </div>

        {/* Right Section - Links */}
        <div className="flex items-center space-x-4 text-sm text-black font-medium ">
          <div className="hidden sm:flex items-center space-x-1">
            <p className="mr-4">Find a Store</p>
            <span>|</span>
          </div>
          <div className="hidden sm:flex items-center space-x-1">
            <p className="mr-4" >Help</p>
            <span>|</span>
          </div>
          <div className="hidden sm:flex items-center space-x-1">
            <p className="mr-4" >Join Us</p>
            <span>|</span>
          </div>
          <div>
            <p>Sign In</p>
          </div>
        </div>
      </div>
    </div>
  );
}
