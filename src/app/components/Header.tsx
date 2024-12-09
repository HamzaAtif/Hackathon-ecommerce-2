import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <div className="flex flex-col">
      {/* Navbar */}
      <div className="w-full bg-white h-[60px] mb-9">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-8 py-4">

          {/* Logo */}
          <div className="flex items-center justify-center w-full md:w-auto">
            <Link href="/">
              <Image
                src="/nike-logo.PNG"
                alt="Nike Logo"
                width={100}
                height={50}
                className="cursor-pointer"
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="lg:flex md:flex sm:hidden flex-grow justify-center gap-8 text-black text-lg items-center">
            <Link href="/Products" className="hover:text-gray-600">
              New and Featured
            </Link>
            <Link href="/Products" className="hover:text-gray-600">
              Men
            </Link>
            <Link href="/Products" className="hover:text-gray-600">
              Women
            </Link>
            <Link href="/Products" className="hover:text-gray-600">
              Kids
            </Link>
            <Link href="/Products" className="hover:text-gray-600">
              Sale
            </Link>
            <Link href="/Products" className="hover:text-gray-600">
              SNKRS
            </Link>
          </div>

          {/* Action Buttons (Search, Wishlist, Add to Cart, Find a Store, Help, Join, Sign In) */}
          <div className="flex items-center gap-4 justify-center">
            {/* Search Button */}
            <div className="relative flex items-center">
              <input
                type="text"
                placeholder="Search"
                className="border border-gray-300 rounded-full px-10 w-[180px] h-[40px] focus:outline-none bg-gray-100"
              />
              <Image
                src="/search-icon.PNG"
                alt="Search Icon"
                width={20}
                height={20}
                className="absolute left-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
              />
            </div>

            {/* Wishlist Button */}
            <Link href="/Cart" className="hover:text-gray-600">
              <Image
                src="/wishlist.PNG"
                alt="Wishlist"
                width={40}
                height={40}
                className="cursor-pointer"
              />
            </Link>

            {/* Add to Cart Button */}
            <Link href="/Cart" className="hover:text-gray-600">
              <Image
                src="/cart.PNG"
                alt="Cart"
                width={28}
                height={28}
                className="cursor-pointer"
              />
            </Link>
            <div className="flex flex-col gap-4">
              <div>
            {/* home */}
            <Link href="/" className="hover:text-gray-600 ml-[20px]">
             Home
            </Link>
            {/* Find a Store */}
            <Link href="/Products" className="hover:text-gray-600 ml-[20px]">
             Store
            </Link>

            {/* Help */}
            <Link href="/Help" className="hover:text-gray-600 ml-[20px]">
              Help
            </Link>

            {/* Join Us */}
            <Link href="/Join-us" className="hover:text-gray-600 ml-[20px]">
              Join
            </Link>
            </div>
            <div className="flex">

            {/* Sign In */}
            <Link href="/Login" className="hover:text-gray-600 ml-[20px]">
              Sign-in
            </Link>

            <Link href="/Products-detail" className="hover:text-gray-600 ml-[20px]">
              products-detail
            </Link>
            </div>

            <div className="flex">
            <Link href="/checkout" className="hover:text-gray-600 ml-[20px]">
              checkout
            </Link>

            <Link href="/Products" className="hover:text-gray-600 ml-[20px]">
              Products
            </Link>

            </div>
            
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
